import {generate} from 'critical';
import {minify} from 'html-minifier';
import {readFileSync, writeFileSync} from 'fs';
import path from 'path';

// Inline critical CSS
generate({
  inline: true,
  base: 'out/',
  src: 'index.html',
  target: {
    html: 'index.html',
    uncritical: 'css/landing/style.css'
  },
  dimensions: [
    {
      height: 200,
      width: 500
    },
    {
      height: 900,
      width: 1024
    },
    {
      height: 900,
      width: 1400
    }
  ],
  // ignore CSS rules
  ignoreInlinedStyles: true
}).then(({css, html, uncritical}) => {
  console.log('Critical CSS generated', css.length);
  console.log('Uncritical CSS generated', uncritical.length);
}).catch(err => {
  console.error('Critical CSS generation failed', err);
}).then(() => {
  // Minify HTML
  const htmlPath = path.resolve('out/index.html');
  const htmlContent = readFileSync(htmlPath, 'utf8');
  const minifiedHTMLContent = minify(htmlContent, {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    conservativeCollapse: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    useShortDoctype: true,
    html5: true
  });

  writeFileSync(htmlPath, minifiedHTMLContent, 'utf8');
  console.log('Wrote minified HTML to', htmlPath, minifiedHTMLContent.length);
});

