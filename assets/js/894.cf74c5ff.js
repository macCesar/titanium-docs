(window.webpackJsonp=window.webpackJsonp||[]).push([[894],{1980:function(e,t,o){"use strict";o.r(t);var i=o(21),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"running-titanium-applications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-titanium-applications"}},[e._v("#")]),e._v(" Running Titanium Applications")]),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("In Studio, Titanium applications may be executed in two modes:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("In run mode, the program executes, but the execution may not be suspended or examined.")])]),e._v(" "),o("li",[o("p",[e._v("In debug mode, execution may be suspended and resumed, variables may be inspected, and expressions may be evaluated. For more information about debug mode, refer to "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/"}},[e._v("Debugging Titanium Applications")]),e._v(".")],1)])]),e._v(" "),o("p",[e._v("To launch a project in run mode, first select the project in the "),o("strong",[e._v("Project Explorer")]),e._v(" view, then in the global tool bar, select "),o("strong",[e._v("Run")]),e._v(" from the "),o("strong",[e._v("Launch Mode")]),e._v(" drop-down list and a device from the "),o("strong",[e._v("Target")]),e._v(" drop-down list. If the "),o("strong",[e._v("Launch Automatically")]),e._v(" option is enabled under the "),o("strong",[e._v("Target")]),e._v(" drop-down list, the application will be automatically launched after the target is selected. If not, you need to click the "),o("strong",[e._v("Launch")]),e._v(" button to start the build process.")]),e._v(" "),o("p",[e._v("If you do not see your device or simulator listed in the "),o("strong",[e._v("Target")]),e._v(" drop-down list, select "),o("strong",[e._v("Refresh Device")]),e._v(" from the "),o("strong",[e._v("Target")]),e._v(" drop-down list.")]),e._v(" "),o("p",[e._v("Alternatively, you can select "),o("strong",[e._v("Run Configurations")]),e._v(" (the last device option) to change your run-time options for a specific application and override the default values set in "),o("strong",[e._v("Preferences")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"run-configurations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run-configurations"}},[e._v("#")]),e._v(" Run Configurations")]),e._v(" "),o("p",[e._v("Use "),o("strong",[e._v("Run Configurations")]),e._v(" to change your run-time options on the fly. You can create custom run configurations for each of your projects and save them as a different name.")]),e._v(" "),o("p",[e._v("In the "),o("strong",[e._v("Project Explorer")]),e._v(" view, first select your project, then from the global toolbar, select "),o("strong",[e._v("Run")]),e._v(" from the "),o("strong",[e._v("Launch Mode")]),e._v(" drop-down list and select the "),o("strong",[e._v("Run Configuration...")]),e._v(" option under the "),o("strong",[e._v("Device")]),e._v(" drop-down list to launch the "),o("strong",[e._v("Run Configurations")]),e._v(" dialog. Select the deployment target you want to build and launch your application for, then configure your run-time options in the "),o("strong",[e._v("Main")]),e._v(" tab.")]),e._v(" "),o("p",[e._v("The following sections below list the run configurations for building your application on a specific emulator, simulator or device. Some common configuration settings include:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Name")]),e._v(": name to call your run configuration. By default, Studio names them as: '[Platform] [Deploy Target] - [Project Name]'.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Project")]),e._v(": select the project to be built and executed.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Re-build Project on Launch")]),e._v(": if enabled, your code is rebuilt before being executed. This is an option for most emulators and simulators.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Log Level")]),e._v(": select the verbosity level of the output log. This is an option for most emulators and simulators.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Enable JavaScript Minification")]),e._v(": if enabled, your JavaScript code is minified (unnecessary white space is removed and code is obfuscated) before building. This is an option for most device builds (application installer).")])])]),e._v(" "),o("h3",{attrs:{id:"android-application-installer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-application-installer"}},[e._v("#")]),e._v(" Android Application Installer")]),e._v(" "),o("p",[e._v("Configuration settings for building your application for Android devices:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Android SDK Version")]),e._v(": select the Google API level to build your application against.")])]),e._v(" "),o("h3",{attrs:{id:"android-emulator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-emulator"}},[e._v("#")]),e._v(" Android Emulator")]),e._v(" "),o("p",[e._v("Configuration settings for building your application for the Android emulator:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Android API")]),e._v(": select the Google API level to build your application against.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Screen")]),e._v(": select the emulator skin, which varies by the Google API selected in the previous option. For a description of the options, refer to "),o("a",{attrs:{href:"http://developer.android.com/tools/revisions/platforms.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://developer.android.com/tools/revisions/platforms.html"),o("OutboundLink")],1),e._v(".")])])]),e._v(" "),o("h3",{attrs:{id:"ios-application-installer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-application-installer"}},[e._v("#")]),e._v(" iOS Application Installer")]),e._v(" "),o("p",[e._v("Configuration settings for building your application for an iOS device:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Development Certificate")]),e._v(": select your iOS development certificate.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Keychain")]),e._v(": select your Mac OS X keychain access file.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Provisioning Profile")]),e._v(": select your iOS development provisioning profile.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("SDK Version")]),e._v(": select the iOS SDK version to build your application against.")])])]),e._v(" "),o("p",[e._v("If you have not obtained a development certificate or created a provisioning profile, refer to "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_iOS_devices/"}},[e._v("Deploying to iOS devices")]),e._v(".")],1),e._v(" "),o("p",[e._v("You need to manually launch the application once it has been installed to the device.")]),e._v(" "),o("h3",{attrs:{id:"ios-simulator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-simulator"}},[e._v("#")]),e._v(" iOS Simulator")]),e._v(" "),o("p",[e._v("Configuration settings for building your application for an iOS simulator:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Device")]),e._v(": select either "),o("strong",[e._v("iPhone")]),e._v(" or "),o("strong",[e._v("iPad")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("iOS SDK")]),e._v(": select the iOS SDK version to build your application against.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Simulator Version")]),e._v(": select the simulator version to run your application on.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Display Type")]),e._v(": select the simulator screen size: "),o("strong",[e._v("Non-Retina")]),e._v(", "),o("strong",[e._v("Retina")]),e._v(" or "),o("strong",[e._v("Retina & Tall")]),e._v(".")])])]),e._v(" "),o("h3",{attrs:{id:"mobile-web-previewer-on-emulator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mobile-web-previewer-on-emulator"}},[e._v("#")]),e._v(" Mobile Web Previewer on Emulator")]),e._v(" "),o("p",[e._v("Configuration settings for building your application to be previewed in a browser in an Android emulator:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Android API")]),e._v(": select the Google API level to build your application against.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Screen")]),e._v(": select the emulator skin, which varies by the Google API selected in the previous option. For a description of the options, refer to "),o("a",{attrs:{href:"http://developer.android.com/tools/revisions/platforms.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://developer.android.com/tools/revisions/platforms.html"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Preview Server")]),e._v(": select the web server to deliver the application.")])])]),e._v(" "),o("h3",{attrs:{id:"mobile-web-previewer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mobile-web-previewer"}},[e._v("#")]),e._v(" Mobile Web Previewer")]),e._v(" "),o("p",[e._v("Configuration settings for building your application to be previewed in a desktop browser:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Web Browser")]),e._v(": select the desktop browser to preview your application with.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Preview Server")]),e._v(": select the web server to deliver the application.")])])]),e._v(" "),o("h2",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("p",[e._v("Try cleaning and rebuilding your project.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("From the menu, select "),o("strong",[e._v("Project")]),e._v(" > "),o("strong",[e._v("Clean")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("A dialog appears. Select the projects you want to clean and click the "),o("strong",[e._v("OK")]),e._v(" button.")])]),e._v(" "),o("li",[o("p",[e._v("Build your project again. You can optionally enable the "),o("strong",[e._v("Re-build Project on Launch")]),e._v(" option with a "),o("strong",[e._v("Run Configuration")]),e._v(" for simulator and emulator builds.")])])]),e._v(" "),o("h3",{attrs:{id:"android-emulator-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-emulator-2"}},[e._v("#")]),e._v(" Android Emulator")]),e._v(" "),o("h4",{attrs:{id:"application-fails-to-install-due-to-insufficient-memory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-fails-to-install-due-to-insufficient-memory"}},[e._v("#")]),e._v(" Application Fails to Install Due to Insufficient Memory")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open the AVD configuration file with your favorite text editor. The following are the default locations:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("On Mac OS X systems, open ~/"),o("code",[e._v(".android/avd/<AVD_name>.avd/config.ini")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("On Windows 7 and 8 systems, open "),o("code",[e._v("C:\\Users\\<user>\\.android\\avd\\<AVD_name>.avd\\config.ini")]),e._v(".")])])])]),e._v(" "),o("li",[o("p",[e._v("Add or edit the following variable:")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("disk.dataPartition.size=<size_in_MB>m\n")])])]),o("h3",{attrs:{id:"ios-simulator-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-simulator-2"}},[e._v("#")]),e._v(" iOS Simulator")]),e._v(" "),o("h4",{attrs:{id:"reserved-folder-names"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reserved-folder-names"}},[e._v("#")]),e._v(" Reserved Folder Names")]),e._v(" "),o("p",[e._v("Double-check that your project does not contain the following directories, which are reserved for Xcode projects:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("Resources/Resources")])])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Resources/Frameworks")])])])]),e._v(" "),o("h4",{attrs:{id:"reset-the-simulator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reset-the-simulator"}},[e._v("#")]),e._v(" Reset the Simulator")]),e._v(" "),o("p",[e._v("If all else fails, you can reset your simulator, which erases all data, settings and applications from your simulator. To reset your simulator:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Launch your simulator or start Xcode then select "),o("strong",[e._v("Open Developer Tool")]),e._v(" > "),o("strong",[e._v("iOS Simulator")]),e._v(" to start the simulator.")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("iOS Simulator")]),e._v(" > "),o("strong",[e._v("Reset Content and Settings")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("A dialog appears asking to confirm your decision. Click the "),o("strong",[e._v("Reset")]),e._v(" button.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);