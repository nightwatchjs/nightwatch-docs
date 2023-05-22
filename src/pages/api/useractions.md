# User Actions API

### Overview

The [Actions API](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html) from Selenium is available and ready to use in Nightwatch via the existing [`.perform()`](https://nightwatchjs.org/api/perform.html) command.

### Available Actions

### .clear()

  <p>Releases all keys, pointers, and clears internal state.</p>

  <strong>Parameters:</strong>
  <p>None</p>

### .click(<code>[element]</code>)

  <p>Short-hand for performing a simple left-click (down/up) with the mouse.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code><br/><span class="optional">Optional</span></td>
        <td>WebElement</td>
        <td>If specified, the mouse will first be moved to the center of the element before performing the click.</td>
      </tr>
      </tbody>
    </table>
  </div>

### .contextClick(<code>[element]</code>)

  <p>Short-hand for performing a simple right-click (down/up) with the mouse.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code><br/><span class="optional">Optional</span></td>
        <td>WebElement</td>
        <td>If specified, the mouse will first be moved to the center of the element before performing the click.</td>
      </tr>
      </tbody>
    </table>
  </div>

### .doubleClick(<code>[element]</code>)

  <p>Short-hand for performing a double left-click with the mouse.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code><br/><span class="optional">Optional</span></td>
        <td>WebElement</td>
        <td>If specified, the mouse will first be moved to the center of the element before performing the click.</td>
      </tr>
      </tbody>
    </table>
  </div>

### .dragAndDrop(`from`, `to`)

  <div>Configures a drag-and-drop action consisting of the following steps:
    <ol>
    <li>Move to the center of the from element (element to be dragged).</li>
    <li>Press the left mouse button.</li>
    <li>If the to target is a <code>WebElement</code>, move the mouse to its center. Otherwise, move the mouse by the specified offset.</li>
    <li>Release the left mouse button.</li>
    </ol>

  </div>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
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
        <td><code>WebElement</code> or: object with keys x and y</td>
        <td>Either another element to drag to (will drag to the center of the element), or an object specifying the offset to drag by, in pixels.</td>
      </tr>
      </tbody>
    </table>
  </div>

### .insert(`device`, `...actions`)

  <div>
    <p>Appends actions to the end of the current sequence for the given <code>device</code>. If device synchronization is enabled, after inserting the actions, pauses will be inserted for all other devices to ensure all action sequences are the same length.</p>
  </div>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
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

### .keyDown(`key`)

  <p>Inserts an action to press a single key.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
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

### .keyUp(`key`)

  <p>Inserts an action to release a single key.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
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

### .keyboard()

##### Parameters

  <p>None</p>

##### Returns

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Type</th>
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

### .mouse()

##### Parameters

  <p>None</p>

##### Returns

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Type</th>
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

### .move(`[options]`)

  <p>Inserts an action for moving the mouse `x` and `y` pixels relative to the specified `origin`. The origin may be defined as the mouse's [current position](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Origin.html#POINTER), the [viewport](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Origin.html#VIEWPORT), or the center of a specific `WebElement`.</p>
  <p>It's possible to adjust how long the browser driver should take, in milliseconds, to perform the move using the duration parameter (defaults to 100 ms).</p>
##### Parameters:
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>options</code><br/><span class="optional">Optional</span> </td>
        <td>Object</td>
        <td>The move options. Defaults to moving the mouse to the top-left corner of the viewport over 100ms.</td>
      </tr>
      </tbody>
    </table>
  </div>

### .pause(`duration`, `...devices`)

  <p>Inserts a pause action for the specified devices, ensuring each device is idle for a tick. The length of the pause (in milliseconds) may be specified as the first parameter to this method (defaults to 0). Otherwise, you may just specify the individual devices that should pause.</p>
  <p>If no devices are specified, a pause action will be created (using the same duration) for every device.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>duration</code><br/><span class="optional">Optional</span> </td>
        <td>Number| [Device](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Device.html) </td>
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

### .press(`[button]`)

  <p>Inserts an action to press a mouse button at the mouse's current location.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>button</code><br/><span class="optional">Optional</span> </td>
        <td>[Button](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Button.html)</td>
        <td>The button to press; defaults to `LEFT`.</td>
      </tr>
      </tbody>
    </table>
  </div>

### .release(`[button]`)

  <p>Inserts an action to release a mouse button at the mouse's current location.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>button</code><br/><span class="optional">Optional</span> </td>
        <td>[Button](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Button.html)</td>
        <td>The button to release; defaults to `LEFT`.</td>
      </tr>
      </tbody>
    </table>
  </div>

### .sendKeys(`...keys`)

  <p>Inserts a sequence of actions to type the provided key sequence. For each key, this will record a pair of keyDown and keyUp actions. </p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
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

### .synchronize(`...devices`)

<p>Ensures the action sequence for every device referenced in this action sequence is the same length. For devices whose sequence is too short, this will insert pauses so that every device has an explicit action defined at each tick.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>devices</code></td>
        <td>... [Device](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Device.html)</td>
        <td>The specific devices to synchronize. If unspecified, the action sequences for every device will be synchronized.</td>
      </tr>
      </tbody>
    </table>
  </div>

### Working with Action Ticks

Action sequences are divided into a series of "ticks". At each tick, the browser driver will perform a single action for each device included in the action sequence. At tick 0, the driver will perform the first action defined for each device, at tick 1 the second action for each device, and so on until all actions have been executed. If an individual device does not have an action defined at a particular tick, it will automatically pause.

By default, action sequences will be synchronized so only one device has a define action in each tick. Consider the following code sample:

```js
describe('user actions api', function() {

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

```

This produces the following sequence of ticks:

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th>Device</th>
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
    <td>move(Object)</td>
    <td>press()</td>
    <td>release()</td>
    <td>pause()</td>
  </tr>
  </tbody>
</table>

More information on action ticks is available on the [Selenium docs](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html).

### Working example

tests/sampleTest.js

```js
describe('example with user actions api', function () {

  before(browser => browser.navigateTo('<https://nightwatchjs.org>'));

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

```
