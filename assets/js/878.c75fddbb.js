(window.webpackJsonp=window.webpackJsonp||[]).push([[878],{2052:function(t,e,o){"use strict";o.r(e);var i=o(21),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"errors-configuring-platforms-inside-studio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#errors-configuring-platforms-inside-studio"}},[t._v("#")]),t._v(" Errors Configuring Platforms Inside Studio")]),t._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),o("p",[t._v("Errors while building a mobile project are usually due to configuration issues. The most common problems and possible solutions are posted here.")]),t._v(" "),o("h2",{attrs:{id:"ios-sdk-version-xxx-not-found"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-sdk-version-xxx-not-found"}},[t._v("#")]),t._v(" iOS SDK version XXX not found")]),t._v(" "),o("p",[t._v("This will happen if you have upgraded your iOS SDKs, and the old one is not available. To fix:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Select "),o("strong",[t._v("Run")]),t._v(" > "),o("strong",[t._v("Run Configurations...")]),t._v(" (you will get to the same spot if you choose "),o("strong",[t._v("Debug Configurations...")]),t._v(").")])]),t._v(" "),o("li",[o("p",[t._v("Select the configuration for the project you are having an issue with.")])]),t._v(" "),o("li",[o("p",[t._v("Choose an available iOS SDK from the list.")])]),t._v(" "),o("li",[o("p",[t._v("Save and close the dialog.")])])]),t._v(" "),o("h2",{attrs:{id:"could-not-locate-the-android-sdk-at-the-given-path"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#could-not-locate-the-android-sdk-at-the-given-path"}},[t._v("#")]),t._v(" Could not locate the Android SDK at the given path")]),t._v(" "),o("p",[t._v("This usually appears inside the "),o("strong",[t._v("Preference")]),t._v(" dialog inside Studio. Studio runs a Python script to determine your current configuration. To diagnose the exact issue, please try the following:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Turn on debug logging: "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Debugging_Studio/"}},[t._v("Debugging Studio")]),t._v(", and enable specific component "),o("strong",[t._v("com.aptana.core/debug/shell")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[t._v("Re-open the Preference dialog.")])]),t._v(" "),o("li",[o("p",[t._v("Open the Studio log file ("),o("strong",[t._v("Help")]),t._v(" > "),o("strong",[t._v("Studio")]),t._v(" > "),o("strong",[t._v("View Log File")]),t._v(") and scroll to the end.")])]),t._v(" "),o("li",[o("p",[t._v("You should see a command line invocation of "),o("code",[t._v("avd.py")]),t._v(", for example:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('"/usr/bin/python" "/Library/Application Support/Titanium/mobilesdk/osx/1.8.0.1/android/avd.py" "/Users/username/Documents/android"\n')])])])]),t._v(" "),o("li",[o("p",[t._v("Copy and paste that complete command line into a terminal window and run it. Check the output. If it doesn't find minimum required Android SDK, the configuration will be marked as invalid.")])])]),t._v(" "),o("p",[t._v("It may be that you don't have an "),o("code",[t._v("avd.py")]),t._v(" script at the location it's looking. To solve that, just install the latest "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_SDK_Continuous_Builds/"}},[t._v("Continuous Build")]),t._v(", ensuring that you choose the master branch from the drop-down menu of the download site, and restart Studio.")],1),t._v(" "),o("h2",{attrs:{id:"ios-configuration-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-configuration-issues"}},[t._v("#")]),t._v(" iOS configuration issues")]),t._v(" "),o("p",[t._v("This usually appears inside the "),o("strong",[t._v("Preference")]),t._v(" dialog inside Studio. Studio runs some commands to determine your current configuration:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("To determine the location of your xcode tooling, it runs "),o("code",[t._v("xcode-select --print-path")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("It then looks at "),o("code",[t._v("/Platforms/iPhoneSimulator.platform/Developer/SDKs")]),t._v(" underneath that path for the SDK locations.")])]),t._v(" "),o("li",[o("p",[t._v("Currently, it expects to see "),o("em",[t._v("at least")]),t._v(" one iOS SDK of version greater than or equal to 4.2 and less than 5.1. You can have more installed than that, but you at least need one within that range.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);