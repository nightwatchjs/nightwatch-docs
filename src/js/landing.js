function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // call on next available tick
    setTimeout(fn, 100);
  } else {
    document.addEventListener('load', fn);
  }
}

function addScript(src, id, module, callback) {
  const tag = document.createElement('script');
  if (typeof id !== 'undefined' && id !== null) {
    tag.id = id;
  }
  tag.src = src;
  if (module) {
    tag.type = 'module';
  }
  tag.defer = true;

  const firstScriptTag = document.getElementsByTagName('script')[0];
  let parent = document.head;
  if (parent && firstScriptTag && parent.contains(firstScriptTag)) {
    parent.insertBefore(tag, firstScriptTag);
  } else {
    parent = document.body;
    parent.appendChild(tag);
  }

  if (typeof callback !== 'undefined' && callback !== null) {
    tag.addEventListener('load', function () {
      callback();
    });
  }
}


function addStylesheet(src) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = src;
  document.head.appendChild(link);
}

function render(template, node) {
  if (!node) {
    return;
  }
  node.innerHTML = template;
  node.classList.remove('integration__content');
  node.classList.add('integration__content-mobile', 'swiper-wrapper');
}

function addCopyEventListeners(buttonSelector, textSelector) {
  const copyButton = document.querySelector(buttonSelector);

  if (!copyButton) {
    return;
  }

  copyButton.addEventListener('click', async function () {
    const copyText = document.querySelector(textSelector);

    try {
      await navigator.clipboard.writeText(copyText.textContent);
      copyButton.innerHTML = 'Copied!';
      copyButton.classList.add('active');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }

    setTimeout(() => {
      copyButton.innerHTML = 'Copy';
      copyButton.classList.remove('active');
    }, 3000);
  });
}

docReady(function () {
  addCopyEventListeners('.hero__action-copy-command-button', '.hero__action-copy-command-text');
  addCopyEventListeners(
    '.call-to-action-content-action-copy-command-button',
    '.call-to-action-content-action-copy-command-text'
  );

  if (window.innerWidth <= 1024) {
    addStylesheet('/css/swiper-bundle.min.css');
    addScript('/js/third-party/swiper-bundle.min.js', null, false, function () {
      const mobileIntegrationTemplate = document.querySelector('#mobile-integration-content').innerText.trim();
      const desktopIntegrationNode = document.querySelector('.integration__content');

      if (window.innerWidth <= 480) {
        render(mobileIntegrationTemplate, desktopIntegrationNode);
      }
    });
  }

  addScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js', null, false, function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuContent = document.getElementsByClassName('mobile-navbar-content')[0];
    const body = document.getElementsByTagName('body')[0];
    const docsearchBtn = document.getElementById('docsearch');

    var menuBar = gsap.timeline({paused: true});

    menuBar.to(
      '.bar-1',
      0.5,
      {
        attr: {d: 'M8,2 L2,8'},
        x: 1,
        ease: Power2.easeInOut
      },
      'start'
    );

    menuBar.to(
      '.bar-2',
      0.5,
      {
        autoAlpha: 0
      },
      'start'
    );

    menuBar.to(
      '.bar-3',
      0.5,
      {
        attr: {d: 'M8,8 L2,2'},
        x: 1,
        ease: Power2.easeInOut
      },
      'start'
    );

    menuBar.reverse();

    mobileMenuToggle.addEventListener('click', function () {
      menuBar.reversed(!menuBar.reversed());

      if (!mobileMenuContent.classList.contains('active')) {
        TweenLite.fromTo(mobileMenuContent, 0.3, {opacity: 0}, {opacity: 1, display: 'block'});
        mobileMenuContent.classList.add('active');
      } else {
        TweenLite.fromTo(mobileMenuContent, 0.3, {opacity: 1}, {opacity: 0, display: 'none'});
        mobileMenuContent.classList.remove('active');
      }
      body.classList.toggle('overflow-hidden');
      docsearchBtn.classList.toggle('d-none');
    });
  });
});

