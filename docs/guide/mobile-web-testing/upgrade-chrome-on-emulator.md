---
title: Upgrade Chrome Browser on Android Emulator
description: Learn how to upgrade Google Chrome browser on Android emulators for mobile web testing.
---

<div class="page-header"><h1>Upgrade Chrome Browser on Android Emulator</h1></div>

### Overview

Android emulators come with an older version of Google Chrome browser pre-installed. For mobile web testing, you may need to install a newer version of Chrome to match your testing requirements or to access modern web features.

This guide covers two methods to upgrade Chrome browser on your Android emulator:

1. **Using Google Play Store** - Easiest method, but requires a system image with Play Store support
2. **Using APK Mirror** - More flexible, allows installing specific Chrome versions

### Prerequisites

- Android SDK and AVD Manager installed
- `ANDROID_HOME` environment variable set

If your system does not meet the above prerequisites, run the below command to setup android emulator.
<div class="sample-test"><i>Terminal</i><pre class="line-numbers"><code>npx @nightwatch/mobile-helper android</code></pre></div>

### Method 1: Upgrade Chrome via Google Play Store

This is the simplest method, but it requires an Android Virtual Device (AVD) that includes Google Play Store support.

#### Step 1: Install System Image with Play Store

You need to install a system image that includes Google Play Store. These system images are typically named `google_apis_playstore`.

<div class="sample-test"><i>Terminal</i><pre class="line-numbers"><code>npx @nightwatch/mobile-helper android install --system-image</code></pre></div>

When prompted:
- **Select the API level**: Choose your desired Android version (e.g., `android-34: Android 14`)
- **Select the system image type**: Choose `google_apis_playstore` (not `google_apis`)
- **Select the architecture**: Choose based on your system (e.g., `x86_64` or `arm64-v8a`)

Example output:
<pre class="line-numbers"><code>Checking the value of ANDROID_HOME environment variable...
  ✔ ANDROID_HOME is set to '/Users/shubhamkumar/Library/Android/sdk' (taken from .env)

? Select the API level for system image: android-34: Android 14
? Select the system image type for android-34: google_apis_playstore
? Select the architecture for the system image: x86_64

Installing system image: system-images;android-34;google_apis_playstore;x86_64

[=======================================] 100% Unzipping... x86_64/vendor.img</code></pre>

#### Step 2: Create AVD with Play Store System Image

Create a new AVD using the system image you just installed:

<div class="sample-test"><i>Terminal</i><pre class="line-numbers"><code>npx @nightwatch/mobile-helper android install --avd</code></pre></div>

When prompted:
- **Enter a name for the AVD**: Give it a descriptive name (e.g., `nightwatch-android-14`)
- **Select the system image to use for AVD**: Choose the `google_apis_playstore` system image you installed
- **Select the device type**: Choose a device (e.g., `Pixel`)
- **Select the device profile**: Choose a profile (e.g., `pixel_7`)

Example output:
<pre class="line-numbers"><code>Checking the value of ANDROID_HOME environment variable...
  ✔ ANDROID_HOME is set to '/Users/shubhamkumar/Library/Android/sdk' (taken from .env)

? Enter a name for the AVD: nightwatch-android-14
? Select the system image to use for AVD: system-images;android-34;google_apis_playstore;x86_64
? Select the device type for AVD: Pixel
? Select the device profile for AVD: pixel_7

Creating AVD...</code></pre>

#### Step 3: Connect to Emulator and Update Chrome

1. Connect to your emulator using the mobile helper:
   <div class="sample-test"><i>Terminal</i><pre class="line-numbers"><code>npx @nightwatch/mobile-helper android connect --emulator</code></pre></div>
   When prompted, select the AVD you created (e.g., `nightwatch-android-14`).
   Example output:
   <pre class="line-numbers"><code>Checking the value of ANDROID_HOME environment variable...
     ✔ ANDROID_HOME is set to '/Users/shubhamkumar/Library/Android/sdk' (taken from .env)
   Connected Emulators:
     1. udid/deviceId: emulator-5554 / state: device (online)
   ? Select the AVD to connect: nightwatch-android-14
   Connecting to AVD: nightwatch-android-14</code></pre>
2. **Sign in to Google Play Store** with your Google account
3. Open the Play Store app on the emulator
4. Search for "Google Chrome"
5. Click **Update** to install the latest version of Chrome

<div class="alert alert-info">
  <strong>Note:</strong> The first time you use Play Store on an emulator, you'll need to complete the Google account sign-in process. This is a one-time setup. You can remove your Google account later.
</div>

### Method 2: Upgrade Chrome via APK Mirror

This method allows you to install a specific version of Chrome without requiring Play Store support. It's useful when you need a particular Chrome version or when using system images without Play Store.

#### Step 1: Download Chrome APK from APK Mirror

1. Visit [APKMirror](https://www.apkmirror.com/apk/google-inc/chrome/)
2. Select the desired Chrome version
3. **Important**: Download the compatible variant based on your system image architecture:
   - For `x86_64` system images: Download `x86_64` variant
   - For `arm64-v8a` system images: Download `arm64-v8a` variant
   - For `armeabi-v7a` system images: Download `armeabi-v7a` variant

<div class="alert alert-warning">
  <strong>Important:</strong> Make sure to download the correct architecture variant. Installing an incompatible APK will fail or cause issues.
</div>

APKMirror typically provides `.apkm` files (Android App Bundle) which need to be extracted before installation.

#### Step 2: Extract the APKM File

Extract the downloaded `.apkm` file to get the individual APK files:

<div class="sample-test"><i>Terminal</i><pre class="line-numbers"><code>unzip /path/to/com.android.chrome_VERSION_apkmirror.com.apkm -d chrome_bundle</code></pre></div>

This will extract all APK files into the `chrome_bundle` directory.

Example:
<pre class="line-numbers"><code>unzip ~/Downloads/com.android.chrome_144.0.7559.109-755910933_26lang_5feat_9f83e13585051a7774655d06b7189713_apkmirror.com.apkm -d chrome_bundle</code></pre>

#### Step 3: Upgrade Chrome APK on Emulator

Use the mobile helper to install the extracted APK files:

<div class="sample-test"><i>Terminal</i><pre class="line-numbers"><code>npx @nightwatch/mobile-helper android.adb install-multiple chrome_bundle/*.apk</code></pre></div>

Make sure your emulator is running before executing this command.

Example output:
<pre class="line-numbers"><code>Checking the value of ANDROID_HOME environment variable...
  ✔ ANDROID_HOME is set to '/Users/shubhamkumar/Library/Android/sdk' (taken from .env)

Success</code></pre>

<div class="alert alert-info">
  <strong>Note:</strong> The `install-multiple` command is used because Chrome APKM bundles contain multiple APK files (base APK + split APKs for different architectures/languages) that need to be installed together.
</div>

### Verify Chrome Installation

After installation, verify that Chrome is installed correctly:

1. Open the emulator
2. Look for the Chrome app icon in the app drawer
3. Launch Chrome and check the version:
   - Open Chrome menu (three dots)
   - Go to **Settings** → **About Chrome**
   - Verify the version matches what you installed

### Troubleshooting

#### Issue: Play Store not available

**Solution**: Use Method 2 (APK Mirror) instead, which doesn't require Play Store support.
#### Issue: APK installation fails with "INSTALL_FAILED_INVALID_APK"

###### **Possible causes**:
- Architecture mismatch between APK and system image
- Corrupted APK file
- Incomplete extraction of APKM bundle

###### **Solution**: 
- Verify you downloaded the correct architecture variant
- Re-download the APK file
- Ensure all APK files from the bundle are extracted


#### Issue: Chrome crashes after installation

###### **Possible causes**:
- Version incompatibility with Android version
- Missing dependencies

###### **Solution**:
- Try a different Chrome version
- Ensure you're using a compatible Android API level
- Check if the system image has all required components

#### Issue: Cannot find Chrome after installation

###### **Solution**:
- Restart the emulator
- Check if Chrome appears in Settings → Apps
- Try installing again with `--force` flag if available

#### Issue: No ChromeDriver found for Chrome version

**Error message**: `No Chromedriver found that can automate Chrome 'X.X.X'. You could also try to enable automated chromedrivers download as a possible workaround.`

###### **Possible causes**:
- The installed Chrome version is not in Appium's ChromeDriver mappings
- Appium cannot automatically download the matching ChromeDriver version

###### **Solution**: You have two options:  


###### **Option 1: Download ChromeDriver manually**

1. Check your Chrome version on the emulator (Settings → About Chrome)
2. Visit the [Appium ChromeDriver mappings](https://github.com/appium/appium-chromedriver/blob/master/config/mapping.json) to find the corresponding ChromeDriver version
3. Download the ChromeDriver binary for your system from the [ChromeDriver downloads page](https://chromedriver.chromium.org/downloads)
4. Set the path to ChromeDriver in your Nightwatch configuration using the `appium:chromedriverExecutable` capability:

<div class="sample-test"><i>nightwatch.conf.js</i><pre class="hide-indicator line-numbers"><code>desiredCapabilities: {
  browserName: 'Chrome',
  platformName: 'Android',
  'appium:options': {
    automationName: 'UiAutomator2',
    avd: 'nightwatch-android-14',
    // Path to your downloaded ChromeDriver executable
    chromedriverExecutable: '/path/to/chromedriver'
  }
}</code></pre></div>

Alternatively, you can set it directly in `desiredCapabilities`:

<div class="sample-test"><i>nightwatch.conf.js</i><pre class="hide-indicator line-numbers"><code>desiredCapabilities: {
  browserName: 'Chrome',
  platformName: 'Android',
  'appium:chromedriverExecutable': '/path/to/chromedriver',
  'appium:options': {
    automationName: 'UiAutomator2',
    avd: 'nightwatch-android-14'
  }
}</code></pre></div>

###### **Option 2: Update Chrome to latest version**

Update Chrome on your emulator to the latest version, which typically has better Appium support and automatic ChromeDriver download capabilities.


### Best Practices

1. **Match Architecture**: Always ensure the Chrome APK architecture matches your system image architecture
2. **Version Compatibility**: Use Chrome versions that are compatible with your Android API level
3. **ChromeDriver Compatibility**: Consider using the latest Chrome version for better Appium/ChromeDriver support. Older or specific Chrome versions may require manual ChromeDriver installation
4. **Test After Installation**: Always verify Chrome works correctly and that ChromeDriver is available before running your Nightwatch tests

### Next Steps

After upgrading Chrome on your emulator, you can now configure Nightwatch to use the emulator for mobile web testing.

For more information on mobile web testing with Nightwatch, see the [Mobile Web Testing Guide](https://github.com/nightwatchjs/mobile-helper-tool/blob/main/docs/mobile-web-testing.md).

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/mobile-web-testing/override-device-dimensions.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Override Device Dimensions</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/extending-nightwatch/adding-custom-commands.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Define custom commands</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>

