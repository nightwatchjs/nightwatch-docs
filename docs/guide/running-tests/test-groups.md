## Using Test Groups

Nightwatch makes it possible to organize your test scripts into groups and run them as needed. To group tests together just place them in the same sub-folder. The folder name is the name of the group.

#### Example:
<pre>
lib/
  ├── selenium-server-standalone.jar
custom-commands/
  ├── loginUser.js
  ├── attachPicture.js
tests/
  ├── logingroup
  |   ├── login_test.js
  |   └── otherlogin_test.js
  ├── addressbook
  |   ├── addressbook_test.js
  |   └── contact_test.js
  ├── chat
  |   ├── chatwindow_test.js
  |   ├── chatmessage_test.js
  |   └── otherchat_test.js
  └── smoketests
      ├── smoke_test.js
      └── othersmoke_test.js
</pre>

To run only the `smoketests` group you would do the following:

<pre><code class="language-bash">nightwatch --group smoketests</code></pre>

Also, if you would want to skip running the `smoketests` group you would do the following:

<pre><code class="language-bash">nightwatch --skipgroup smoketests</code></pre>

To skip multiple groups, just add them as comma-separated:

<pre><code class="language-bash">nightwatch --skipgroup addressbook,chat</code></pre>

- Previous: [Using Test Environments](https://nightwatchjs.org/guide/running-tests/test-environments.html)
- Next: [Using Test Tags](https://nightwatchjs.org/guide/running-tests/test-tags.html)
