# User Actions API

### Overview
The [Actions API](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html) from Selenium is available and ready to use in Nightwatch via the existing [`.perform()`](https://nightwatchjs.org/api/perform.html) command.

### Available Actions

<div class="apimethod" style="border:1px solid #ccc;">
  <h3>.clear()</h3>
  <p>Releases all keys, pointers, and clears internal state.</p>

  <strong>Parameters:</strong>
  <p>None</p>
</div>

<div class="apimethod">
  <h3>.click(<code>[element]</code>)</h3>

  <p>Short-hand for performing a simple left-click (down/up) with the mouse.</p>
  <h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code><br><span class="optional">Optional</span></td>
        <td>WebElement</td>
        <td>If specified, the mouse will first be moved to the center of the element before performing the click.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>


<div class="apimethod">
  <h3>.contextClick(<code>[element]</code>)</h3>
  <p>Short-hand for performing a simple right-click (down/up) with the mouse.</p>

  <h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code><br><span class="optional">Optional</span></td>
        <td>WebElement</td>
        <td>If specified, the mouse will first be moved to the center of the element before performing the click.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>


<div class="apimethod">
  <h3>.doubleClick(<code>[element]</code>)</h3>
  <p>Short-hand for performing a double left-click with the mouse.</p>

  <h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code><br><span class="optional">Optional</span></td>
        <td>WebElement</td>
        <td>If specified, the mouse will first be moved to the center of the element before performing the click.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">
  <h3>.dragAndDrop(`from`, `to`)</h3>
  <div>Configures a drag-and-drop action consisting of the following steps:
    <ol>
    <li>Move to the center of the from element (element to be dragged).</li>
    <li>Press the left mouse button.</li>
    <li>If the to target is a <code>WebElement</code>, move the mouse to its center. Otherwise, move the mouse by the specified offset.</li>
    <li>Release the left mouse button.</li>
    </ol>
    
  </div>    

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>from</code></td>
        <td><code>WebElement</code></td>
        <td>The element to press the left mouse button on to start the drag</td>
      </tr>
      <tr>
        <td><code>to</code></td>
        <td><code>WebElement</code> or: <br><code>{x: number, y: number}</code></td>
        <td>Either another element to drag to (will drag to the center of the element), or an object specifying the offset to drag by, in pixels.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">
  <h3>.insert(`device`, `...actions`)</h3>
  <div>
    <p>Appends actions to the end of the current sequence for the given <code>device</code>. If device synchronization is enabled, after inserting the actions, pauses will be inserted for all other devices to ensure all action sequences are the same length.</p>
  </div>    

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>device</code></td>
        <td><code>[Device](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Device.html)</code></td>
        <td>the device to update</td>
      </tr>
      <tr>
        <td><code>actions</code></td>
        <td><code>...[Action](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Action.html)</code></td>
        <td>the actions to insert.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">
  <h3>.keyDown(`key`)</h3>
  <p>Inserts an action to press a single key.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>key</code></td>
        <td>string|number</td>
        <td>the key to press. This key may be specified as a Key value, a specific unicode code point, or a string containing a single unicode code point.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">
  <h3>.keyUp(`key`)</h3>
  <p>Inserts an action to release a single key.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>key</code></td>
        <td>string|number</td>
        <td>the key to release. This key may be specified as a Key value, a specific unicode code point, or a string containing a single unicode code point.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">
  <h3>.keyboard()</h3>
  <h5>Parameters:</h5>
  <p>None</p>

  <h5>Returns:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>[Keyboard](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Keyboard.html)</td>
        <td>the keyboard device handle.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">
  <h3>.mouse()</h3>
  <h5>Parameters:</h5>
  <p>None</p>

<h5>Returns:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>[Pointer](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Pointer.html)</td>
        <td>the mouse pointer device handle.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">
  <h3>.move(`[options]`)</h3>
  <p>Inserts an action for moving the mouse `x` and `y` pixels relative to the specified `origin`. The origin may be defined as the mouse's [current position](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Origin.html#POINTER), the [viewport](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Origin.html#VIEWPORT), or the center of a specific `WebElement`.</p>
  <p>It's possible to adjust how long the browser driver should take, in milliseconds, to perform the move using the duration parameter (defaults to 100 ms).</p> 
<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>options</code><br><span class="optional">Optional</span> </td>
        <td>Object</td>
        <td>The move options. Defaults to moving the mouse to the top-left corner of the viewport over 100ms. <br><br>Available values are:<br>
<pre data-language="javascript" style="padding-top: 10px" class="default-theme language-javascript">{
  duration: {Number|undefined}, 
  origin: ([Origin](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Origin.html)|WebElement|undefined), 
  x: {Number|undefined}, 
  y: {Number|undefined}
}</pre></td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">
  <h3>.pause(`duration`, `...devices`)</h3>
  <p>Inserts a pause action for the specified devices, ensuring each device is idle for a tick. The length of the pause (in milliseconds) may be specified as the first parameter to this method (defaults to 0). Otherwise, you may just specify the individual devices that should pause.</p>
  <p>If no devices are specified, a pause action will be created (using the same duration) for every device.</p> 
<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>duration</code><br><span class="optional">Optional</span> </td>
        <td>Number|[Device](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Device.html)</td>
        <td>The length of the pause to insert, in milliseconds. Alternatively, the duration may be omitted (yielding a default 0 ms pause), and the first device to pause may be specified.</td>
      </tr>
      <tr>
        <td><code>devices</code></td>
        <td>...[Device](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Device.html)</td>
        <td>The devices to insert the pause for. If no devices are specified, the pause will be inserted for all devices.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">
  <h3>.press(`[button]`)</h3>
  <p>Inserts an action to press a mouse button at the mouse's current location.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>button</code><br><span class="optional">Optional</span> </td>
        <td>[Button](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Button.html)</td>
        <td>The button to press; defaults to `LEFT`.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">
  <h3>.release(`[button]`)</h3>
  <p>Inserts an action to release a mouse button at the mouse's current location.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>button</code><br><span class="optional">Optional</span> </td>
        <td>[Button](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Button.html)</td>
        <td>The button to release; defaults to `LEFT`.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>


<div class="apimethod">
  <h3>.sendKeys(`...keys`)</h3>
  <p>Inserts a sequence of actions to type the provided key sequence. For each key, this will record a pair of keyDown and keyUp actions. </p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>keys</code></td>
        <td>...String|Number</td>
        <td>The keys to type.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">
  <h3>.synchronize(`...devices`)</h3>
<p>Ensures the action sequence for every device referenced in this action sequence is the same length. For devices whose sequence is too short, this will insert pauses so that every device has an explicit action defined at each tick.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>devices</code></td>
        <td>...[Device](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Device.html)</td>
        <td>The specific devices to synchronize. If unspecified, the action sequences for every device will be synchronized.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

### Working with Action Ticks
Action sequences are divided into a series of "ticks". At each tick, the browser driver will perform a single action for each device included in the action sequence. At tick 0, the driver will perform the first action defined for each device, at tick 1 the second action for each device, and so on until all actions have been executed. If an individual device does not have an action defined at a particular tick, it will automatically pause.

By default, action sequences will be synchronized so only one device has a define action in each tick. Consider the following code sample:

<div class="sample-test" style="max-width:600px"><pre data-language="javascript" style="padding-top: 10px" class="default-theme language-javascript"><code class="default-theme language-javascript">describe('user actions api', function() {

  it('demo test', function() {
    browser
      .perform(function() {
        const actions = this.actions({async: true});

        return actions
          .keyDown(Keys.SHIFT)
          .move({origin: el})
          .press()
          .release()
          .keyUp(Keys.SHIFT);
      });
    })
})
</code></pre></div>

This produces the following sequence of ticks:

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 100px;">Device</th>
    <th>Tick 1</th>
    <th>Tick 2</th>
    <th>Tick 3</th>
    <th>Tick 4</th>
    <th>Tick 5</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Keyboard</td>
    <td>keyDown(SHIFT)</td>
    <td>pause()</td>
    <td>pause()</td>
    <td>pause()</td>
    <td>keyUp(SHIFT)</td>
  </tr>
  <tr>
    <td>Mouse</td>
    <td>pause()</td>
    <td>move({origin: el})</td>
    <td>press()</td>
    <td>release()</td>
    <td>pause()</td>
  </tr>
  </tbody>
</table>

More information on action ticks is available on the [Selenium docs](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html).

### Working example
<div class="sample-test copy-to-clipboard-button line-numbers"><i>tests/sampleTest.js</i>
<pre data-language="javascript"><code class="language-javascript">describe('example with user actions api', function () {

  before(browser => browser.navigateTo('https://nightwatchjs.org'));

  it('demo test', async function (browser) {
    // retrieve the element; the actions api requires Selenium WebElement objects,
    //  which can be retrieved using the global element() utility
    const btnElement = await element('a.btn-github').findElement();

    await browser.perform(function() {
      // initiate the actions chain
      const actions = this.actions({async: true});

      return actions
        .dragAndDrop(btnElement, {x: 100, y: 100})
        .pause(500)
        .contextClick(btnElement)
        .pause(500)
        .doubleClick(btnElement)
        .pause(500)
    });
  });
});
</code></pre></div>