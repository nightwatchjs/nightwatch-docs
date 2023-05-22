## Write complex user actions

### Overview

Nightwatch 2 brings support for working with the newer [Actions API](https://www.selenium.dev/documentation/webdriver/actions_api/) from Selenium WebDriver for performing complex user gestures.

The Actions API provides granular control over exactly what designated input devices can do. Selenium provides an interface for 3 kinds of input sources:

- a key input for keyboard devices
- a pointer input for a mouse, pen or touch devices
- wheel inputs for scroll wheel devices (introduced in Selenium 4.2)

More information is available on the [W3C Webdriver spec page](https://w3c.github.io/webdriver/#dfn-actions).

### Example

The new API is available and ready to use in Nightwatch via the existing [`.perform()`](https://nightwatchjs.org/api/perform.html) command. The previous functionality of the `perform()` command is still there and working in the same way as before.

tests/sampleTest.js

```js
describe('user actions api', function() {

  it('demo test', function() {
    browser
      .navigateTo('<https://nightwatchjs.org>')
      .perform(function() {
        const actions = this.actions({async: true});

        return actions
         .keyDown(Keys.SHIFT)
         .keyUp(Keys.SHIFT);
      });
  })
})

```

### Available Actions

<div class="apimethod">
  #### .clear()
  <p>Releases all keys, pointers, and clears internal state.</p>

##### Parameters

  <p>None</p>

#### .click(`[element]`)

  <p>Short-hand for performing a simple left-click (down/up) with the mouse.</p>
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
        <td>`
element`
<br/><span class="optional">Optional</span></td>
        <td>WebElement</td>
        <td>If specified, the mouse will first be moved to the center of the element before performing the click.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

#### .contextClick(`[element]`)

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
        <td>`element`</td>
        <td>WebElement</td>
        <td>If specified, the mouse will first be moved to the center of the element before performing the click.</td>
      </tr>
      </tbody>
    </table>
  </div>

#### .doubleClick(`[element]`)

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
        <td>`
element`
<br/><span class="optional">Optional</span></td>
        <td>WebElement</td>
        <td>If specified, the mouse will first be moved to the center of the element before performing the click.</td>
      </tr>
      </tbody>
    </table>
  </div>

#### .dragAndDrop(`from`, `to`)

  <div>Configures a drag-and-drop action consisting of the following steps:
    <ol>
    <li>Move to the center of the from element (element to be dragged).</li>
    <li>Press the left mouse button.</li>
    <li>If the to target is a `WebElement`, move the mouse to its center.
       Otherwise, move the mouse by the specified offset.</li>
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
        <td>`from`</td>
        <td>`WebElement`</td>
        <td>The element to press the left mouse button on to start the drag</td>
      </tr>
      <tr>
        <td>`to`</td>
        <td>`WebElement` or: x: number y: number</td>
        <td>Either another element to drag to (will drag to the center of the element), or an object specifying the offset to drag by, in pixels.</td>
      </tr>
      </tbody>
    </table>
  </div>

#### .insert(`device`, `...actions`

    <p>Appends actions to the end of the current sequence for the given `device`.
    If device synchronization is enabled, after inserting the actions,
    pauses will be inserted for all other devices to ensure all action sequences are the same length.</p>

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
        <td>`device`</td>
        <td>`[Device](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Device.html)`</td>
        <td>the device to update</td>
      </tr>
      <tr>
        <td>`actions`</td>
        <td>`...[Action](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Action.html)`</td>
        <td>the actions to insert.</td>
      </tr>
      </tbody>
    </table>
  </div>

#### .keyDown(`key`)

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
        <td>`key`</td>
        <td>string|number</td>
        <td>the key to press. This key may be specified as a Key value, a specific unicode code point, or a string containing a single unicode code point.</td>
      </tr>
      </tbody>
    </table>
  </div>

#### .keyUp(`key`)

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
        <td>`key`</td>
        <td>string|number</td>
        <td>the key to release. This key may be specified as a Key value, a specific unicode code point, or a string containing a single unicode code point.</td>
      </tr>
      </tbody>
    </table>
  </div>

#### .keyboard()

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

#### .mouse()

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

#### .move(`[options]`)

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
        <td>`options`<br/><span class="optional">Optional</span> </td>
        <td>Object</td>
        <td>The move options. Defaults to moving the mouse to the top-left corner of the viewport over 100ms. </td>
      </tr>
      </tbody>
    </table>
  </div>

#### .pause(`duration`, `...devices`)

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
        <td>`duration`</td>
        <td>Number|[Device](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Device.html)</td>
        <td>The length of the pause to insert, in milliseconds. Alternatively, the duration may be omitted (yielding a default 0 ms pause), and the first device to pause may be specified.</td>
      </tr>
      <tr>
        <td>`devices`</td>
        <td>...[Device](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Device.html)</td>
        <td>The devices to insert the pause for. If no devices are specified, the pause will be inserted for all devices.</td>
      </tr>
      </tbody>
    </table>
  </div>

#### .press(`[button]`)

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
        <td>`button`<br/><span class="optional">Optional</span> </td>
        <td>[Button](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Button.html)</td>
        <td>The button to press; defaults to `LEFT`.</td>
      </tr>
      </tbody>
    </table>
  </div>

#### .release(`[button]`)

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
        <td>`button`<br/><span class="optional">Optional</span> </td>
        <td>[Button](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Button.html)</td>
        <td>The button to release; defaults to `LEFT`.</td>
      </tr>
      </tbody>
    </table>
  </div>

#### .sendKeys(`...keys`)

  <p>Inserts a sequence of actions to type the provided key sequence. For each key, this will record a pair of keyDown and keyUp actions. </p>

#### Parameters

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
        <td>`keys`</td>
        <td>...String|Number</td>
        <td>The keys to type.</td>
      </tr>
      </tbody>
    </table>
  </div>

#### .synchronize(`...devices`)

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
        <td>`devices`</td>
        <td>...[Device](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Device.html)</td>
        <td>The specific devices to synchronize. If unspecified, the action sequences for every device will be synchronized.</td>
      </tr>
      </tbody>
    </table>
  </div>

### Working with Action Ticks

Action sequences are divided into a series of "ticks". At each tick, the browser driver will perform a single action for each device included in the action sequence. At tick 0, the driver will perform the first action defined for each device, at tick 1 the second action for each device, and so on until all actions have been executed. If an individual device does not have an action defined at a particular tick, it will automatically pause.

By default, action sequences will be synchronized so only one device has a define action in each tick. Consider the following code sample:

tests/sampleTest.js

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
    <td>move(todo)</td>
    <td>press()</td>
    <td>release()</td>
    <td>pause()</td>
  </tr>
  </tbody>
</table>

### Recommended content

- [Selenium API Docs](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html)
- [Webdriver W3C spec](https://w3c.github.io/webdriver/#dfn-actions)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/writing-tests/using-xpath-selectors.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Use Xpath selectors</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/writing-tests/using-cucumberjs.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Use CucumberJS</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
