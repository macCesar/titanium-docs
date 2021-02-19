(window.webpackJsonp=window.webpackJsonp||[]).push([[1030],{1211:function(t,e,a){"use strict";a.r(e);var o=a(21),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-cli-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-cli-tasks"}},[t._v("#")]),t._v(" Titanium CLI Tasks")]),t._v(" "),a("p",[t._v("Titainum provides a command-line interface to check and configure your environment setup, create and build applications, and much more. The Titanium CLI is distributed as apart of the Appcelerator CLI. Please refer to "),a("RouterLink",{attrs:{to:"/guide/Appcelerator_CLI/Appcelerator_CLI_Getting_Started/"}},[t._v("Appcelerator CLI Getting Started")]),t._v(" for details on installing the Appcelerator CLI.")],1),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("appc ti --help")]),t._v(" to see all available target options or see the "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_Command-Line_Interface_Reference/"}},[t._v("Titanium Command-Line Interface Reference")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"development-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-environment"}},[t._v("#")]),t._v(" Development environment")]),t._v(" "),a("p",[t._v("Before using the Titanium CLI to create and build Titanium projects, you need to make sure your development environment is correctly configured.")]),t._v(" "),a("h3",{attrs:{id:"check-your-development-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-your-development-environment"}},[t._v("#")]),t._v(" Check your development environment")]),t._v(" "),a("p",[t._v("To check if you current development environment is setup correctly to build projects, run the "),a("code",[t._v("appc ti setup check")]),t._v(" command. This command will report what tools are configured to work with the CLI.")]),t._v(" "),a("p",[a("strong",[t._v("Output Examples:")])]),t._v(" "),a("p",[t._v("The following output indicates that "),a("code",[t._v("node")]),t._v(" and "),a("code",[t._v("npm")]),t._v(" are installed correctly but may be updated.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Node.js\n  ★  node               new version v0.10.28 available"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currently v0.10.13"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ★  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v("                new version v1.4.13 available"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currently v1.3.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The following output indicates that your Android environment is not setup correctly.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Android Environment\n  !  sdk                Android SDK not found\n  !  targets            no targets found\n  !  avds               no avds found\n")])])]),a("h3",{attrs:{id:"check-the-development-environment-against-the-titanium-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-the-development-environment-against-the-titanium-sdk"}},[t._v("#")]),t._v(" Check the development environment against the Titanium SDK")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("appc ti info")]),t._v(" command retrieves detailed information about your platform environment, such as Android SDKs installed, and iOS certificates and provisioning profiles. Use this command to check if your currently selected Titanium SDK supports your development environment.")]),t._v(" "),a("p",[a("strong",[t._v("Output Examples:")])]),t._v(" "),a("p",[t._v("The following output indicates that your Android environment is not setup correctly and provides you with some resolution steps.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Android Issues\n  ✕  Unable to locate an Android SDK. If you have already downloaded and installed the Android SDK,\n     you can tell Titanium where the Android SDK is located by running 'titanium config\n     android.sdkPath /path/to/android-sdk', otherwise you can install it by running 'titanium setup\n     android' or manually downloading from http://appcelerator.com/android-sdk.\n")])])]),a("p",[t._v("The following output indicates that your iOS environment is fine, but you have older versions of Xcode installed.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iOS Issues\n  !  Xcode 4.3 is too old and is no longer supported by Titanium SDK 3.3.0. The minimum supported\n     Xcode version by Titanium SDK 3.3.0 is Xcode 5.0.\n  !  Xcode 4.4.1 is too old and is no longer supported by Titanium SDK 3.3.0. The minimum supported\n     Xcode version by Titanium SDK 3.3.0 is Xcode 5.0.\n")])])]),a("h3",{attrs:{id:"configuring-your-development-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-your-development-environment"}},[t._v("#")]),t._v(" Configuring your development environment")]),t._v(" "),a("p",[t._v("By default, the Titanium CLI uses your environment variables to search for paths to executables and other development tools. If you installed these tools in custom locations or the CLI cannot find them, you will need to use the "),a("code",[t._v("appc ti config")]),t._v(" command to tell the CLI where to find these tools. The example below sets some common Android configuration options. For a detailed list of configurable options, see "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_Command-Line_Interface_Reference/Titanium_CLI_Options/"}},[t._v("Titanium CLI Options")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Set the location of the Android SDK")]),t._v("\nappc ti config android.sdkPath ~/opt/android_sdk\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Set the location of the Android NDK")]),t._v("\nappc ti config android.ndkPath ~/opt/android_ndk\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Enable support for Genymotion virtual device")]),t._v("\nappc ti config genymotion.enabled "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),a("h2",{attrs:{id:"building-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-applications"}},[t._v("#")]),t._v(" Building applications")]),t._v(" "),a("p",[t._v("Once you have your development environment correctly configured, you can create and build Titanium applications.")]),t._v(" "),a("h3",{attrs:{id:"create-a-titanium-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-titanium-project"}},[t._v("#")]),t._v(" Create a Titanium project")]),t._v(" "),a("p",[t._v("To create a new Titanium project, run the "),a("code",[t._v("appc new")]),t._v(" command. The CLI will prompt you to fill in the necessary information to create a project, such as which platforms the application runs on and the name of the project. To create a new project with all the information specified in the command, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc new -t app --id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("APP_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("APP_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PLATFORMS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WORKSPACE_DIRECTORY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("APP_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc new -t app --id com.appcelerator.sample -n SampleProject -p android,ios -d ~/Documents/Titanium_Studio_Workspace -u http://www.appcelerator.com\n")])])]),a("h3",{attrs:{id:"build-an-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-an-application"}},[t._v("#")]),t._v(" Build an application")]),t._v(" "),a("p",[t._v("To build a Titanium project to test on a device, simulator or emulator, run the "),a("code",[t._v("appc run")]),t._v(" command from the project directory. The CLI will prompt you to fill in the necessary information to build the project, such as which platform you want to test the application on. More detailed examples are listed below.")]),t._v(" "),a("p",[t._v("Once the application is installed and launched, use native tools to test, debug and profile your application. See "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/"}},[t._v("Debugging and Profiling")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[a("strong",[t._v("SDK version setting precedence")])]),t._v(" "),a("p",[t._v("The CLI checks several settings to see which SDK version to use to build your application. The following is a list of locations in the order of precedence. If an SDK version is not defined in that location, the next location is checked.")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("tiapp.xml")]),t._v(" file version specified with the "),a("code",[t._v("sdk-version")]),t._v(" tag.\nTo change this version, manually edit the "),a("code",[t._v("tiapp.xml")]),t._v(" file with a text editor or use Studio.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("--sdk")]),t._v(" command-line option with the "),a("code",[t._v("titanium build")]),t._v(" command.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("app.sdk")]),t._v(" setting specified with the "),a("code",[t._v("titanium config")]),t._v(" command.\nTo check the version, run "),a("code",[t._v("titanium config")]),t._v(" and to change the version, run "),a("code",[t._v("appc ti config app.sdk <sdk_version>")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("SDK select version.\nTo check or change this version, run "),a("code",[t._v("appc ti sdk select")]),t._v(".")])])])]),t._v(" "),a("h4",{attrs:{id:"android-emulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-emulator"}},[t._v("#")]),t._v(" Android emulator")]),t._v(" "),a("p",[t._v("You need to create an Android emulator or setup Genymotion before running these commands.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("To create an Android emulator, see "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/Native_Android_Debugging_and_Testing_Tools/#creating-an-emulator"}},[t._v("Native Android Debugging and Testing Tools: Creating an emulator")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("To setup Genymotion, see "),a("a",{attrs:{href:"#undefined"}},[t._v("Installing Genymotion")]),t._v(".")])])]),t._v(" "),a("p",[t._v("To build for an emulator, run "),a("code",[t._v("appc run -p android")]),t._v(". Because no other options were specified, the CLI launches your default Android emulator and installs the application on it.")]),t._v(" "),a("p",[t._v("To launch a specific Android or Genymotion emulator, add the "),a("code",[t._v("-C <EMULATOR_NAME>")]),t._v(" option.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p android -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Google Nexus 7 - 4.4.2 - API 19 - 800x1280"')]),t._v("\n")])])]),a("p",[t._v("To retrieve a list of Android or Genymotion emulators, run the "),a("code",[t._v("appc ti info -p android")]),t._v(" command.")]),t._v(" "),a("h4",{attrs:{id:"android-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-device"}},[t._v("#")]),t._v(" Android device")]),t._v(" "),a("p",[t._v("To build for an Android device, connect your device to the computer with a USB cable, then run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p android -T device -C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DEVICE_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p android -T device -C deadbeef\n")])])]),a("h4",{attrs:{id:"ios-simulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-simulator"}},[t._v("#")]),t._v(" iOS simulator")]),t._v(" "),a("p",[t._v("To build for an iOS simulator, run "),a("code",[t._v("appc run -p ios")]),t._v(". Because no other options were specified, the CLI launches the application on the default iOS simulator.")]),t._v(" "),a("p",[t._v("To use a specific simulator, add the "),a("code",[t._v("-C <SIMULATOR_NAME>")]),t._v(" option.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p ios -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iPad Retina"')]),t._v("\n")])])]),a("p",[t._v("To retrieve a list of simulator names, run the "),a("code",[t._v("appc run --help")]),t._v(" option and look at the "),a("code",[t._v("-C, --device-id")]),t._v(' option under the "Build iOS Options".')]),t._v(" "),a("h4",{attrs:{id:"ios-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-device"}},[t._v("#")]),t._v(" iOS device")]),t._v(" "),a("p",[t._v("Before deploying to an iOS device for testing, you need to generate a development certificate and development provisioning profile. See "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_iOS_devices/"}},[t._v("Deploying to iOS devices")]),t._v(".")],1),t._v(" "),a("p",[t._v("The CLI allows you to install your application directly to the device connected to your computer with a USB cable.")]),t._v(" "),a("p",[t._v("To build for an iOS device, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p ios -T device  -C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DEVICE_UDID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-V "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<DEVELOPER_CERTIFICATE_NAME>"')]),t._v("  -P "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PROVISIONING_PROFILE_UUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p ios -T device -C itunes -V "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Loretta Martin (GE7BAC5)"')]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11111111-2222-3333-4444-555555555555"')]),t._v("\nappc run -p ios -T device -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iOS Device"')]),t._v(" -V "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Loretta Martin (GE7BAC5)"')]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11111111-2222-3333-4444-555555555555"')]),t._v("\n")])])]),a("p",[t._v("If you omit the "),a("code",[t._v("-V")]),t._v(" and "),a("code",[t._v("-P")]),t._v(" options, the CLI will prompt you with options. You can also retrieve the information from Xcode's Devices window (or Organizer window for Xcode 5.x and older) or with the "),a("code",[t._v("appc ti info -p ios")]),t._v(" command.")]),t._v(" "),a("h4",{attrs:{id:"windows-mobile-emulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-mobile-emulator"}},[t._v("#")]),t._v(" Windows Mobile Emulator")]),t._v(" "),a("p",[t._v("To build for Windows Mobile Emulator, run "),a("code",[t._v("appc run -p windows")]),t._v(". Because no other options were specified, the CLI launches the application on the default Windows Mobile Emulator.")]),t._v(" "),a("p",[t._v("To use a specific emulator, add the "),a("code",[t._v("-C <EMULATOR_ID>")]),t._v(" option.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p windows\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## or")]),t._v("\nappc run -p windows -T wp-emulator\n\nappc run -p windows -C "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("-0-1\n")])])]),a("h4",{attrs:{id:"windows-mobile-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-mobile-device"}},[t._v("#")]),t._v(" Windows Mobile device")]),t._v(" "),a("p",[t._v("Due to the Windows SDK tooling, Titanium only supports installing to a single connected device at a time. Therefore, you do not need to specify a device using the "),a("code",[t._v("-C")]),t._v(" option.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p windows -T wp-device\n")])])]),a("h4",{attrs:{id:"windows-local-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-local-machine"}},[t._v("#")]),t._v(" Windows local machine")]),t._v(" "),a("p",[t._v("To build a Titanium app for your Windows desktop, you will need to build for your local machine.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p windows -T ws-local\n")])])]),a("h3",{attrs:{id:"package-an-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-an-application"}},[t._v("#")]),t._v(" Package an application")]),t._v(" "),a("h4",{attrs:{id:"google-play-apk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-play-apk"}},[t._v("#")]),t._v(" Google Play APK")]),t._v(" "),a("p",[t._v("Before packaging an APK file for distribution, you need to generate a keypair and certificate for your application. See "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_Android_apps/"}},[t._v("Distributing Android apps")]),t._v(".")],1),t._v(" "),a("p",[t._v("To package an APK for Google Play, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p android -T dist-playstore "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-K "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("KEYSTORE_FILE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("KEYSTORE_PASSWORD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -L "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("KEYSTORE_ALIAS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -O "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OUTPUT_DIRECTORY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p android -T dist-playstore -K ~/android.keystore -P secret -L foo -O ./dist/\n")])])]),a("p",[t._v("If you omit any of the optional parameters, you will be prompted by the CLI to enter these values. If the password for the private key of the keystore is different from the password for the keystore, add the "),a("code",[t._v("--key-password <KEYPASS>")]),t._v(" option with the password of your private key.")]),t._v(" "),a("h4",{attrs:{id:"ios-ad-hoc-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-ad-hoc-distribution"}},[t._v("#")]),t._v(" iOS ad hoc distribution")]),t._v(" "),a("p",[t._v("Before packaging for the iOS ad hoc distribution, you need to generate a distribution certificate and distribution provisioning profile. See "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/"}},[t._v("Distributing iOS apps")]),t._v(".")],1),t._v(" "),a("p",[t._v("To package an IPA file for Ad Hoc distribution, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p ios -T dist-adhoc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-R "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DISTRIBUTION_CERTIFICATE_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PROVISIONING_PROFILE_UUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -O "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OUTPUT_DIRECTORY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p ios -T dist-adhoc -R "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pseudo, Inc."')]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FFFFFFFF-EEEE-DDDD-CCCC-BBBBBBBBBBBB"')]),t._v(" -O ./dist/\n")])])]),a("p",[t._v("If you omit any of the optional parameters, the CLI will prompt you with options.")]),t._v(" "),a("h4",{attrs:{id:"itunes-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#itunes-store"}},[t._v("#")]),t._v(" iTunes Store")]),t._v(" "),a("p",[t._v("Before packaging for the iTunes Store, you need to generate a distribution certificate and distribution provisioning profile, and have an iTunes Connect account. See "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/"}},[t._v("Distributing iOS apps")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("If you are using Mac OS X 10.9 (Mavericks) or newer, make sure you grant CLI access to the computer as described in "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/#note-for-mavericks-and-later"}},[t._v("Note for Mavericks (and later)")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("To package an APP bundle for the iTunes store, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p ios -T dist-appstore "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-R "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DISTRIBUTION_CERTIFICATE_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PROVISIONING_PROFILE_UUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p ios -T dist-appstore -R "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pseudo, Inc."')]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AAAAAAAA-0000-9999-8888-777777777777"')]),t._v("\n")])])]),a("p",[t._v("The CLI installs the package to Xcode's Organizer and launches Organizer for you to start the submission process.")]),t._v(" "),a("p",[t._v("If you omit any of the optional parameters, the CLI will prompt you with options.")]),t._v(" "),a("h4",{attrs:{id:"windows-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-store"}},[t._v("#")]),t._v(" Windows Store")]),t._v(" "),a("p",[t._v("Titanium apps can be published for the Windows Store or the Windows Mobile Store. Please refer to the build help ("),a("code",[t._v("appc run --help")]),t._v(") for detail of how to specify your Windows Publisher GUID and distribution certificates.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## publish as a desktop app")]),t._v("\nappc run -p windows -T dist-winstore\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## publish as a mobile app")]),t._v("\nappc run -p windows -T dist-phonestore\n")])])]),a("h3",{attrs:{id:"clean-your-build-folder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clean-your-build-folder"}},[t._v("#")]),t._v(" Clean your build folder")]),t._v(" "),a("p",[t._v("If you run into issues building your application, you may need to clean your build folder. Run the "),a("code",[t._v("ti clean")]),t._v(" command or to clean for a specific platform, add the "),a("code",[t._v("-p <PLATFORM>")]),t._v(" option.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc ti clean "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PLATFORM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Examples")]),t._v("\nappc ti clean\nappc ti clean -p ios\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);