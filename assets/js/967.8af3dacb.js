(window.webpackJsonp=window.webpackJsonp||[]).push([[967],{1788:function(t,e,a){"use strict";a.r(e);var n=a(21),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"installation-troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-troubleshooting"}},[t._v("#")]),t._v(" Installation Troubleshooting")]),t._v(" "),a("p",[t._v("This document provides basic installation troubleshooting information.")]),t._v(" "),a("h2",{attrs:{id:"all-platforms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all-platforms"}},[t._v("#")]),t._v(" All platforms")]),t._v(" "),a("h3",{attrs:{id:"could-not-locate-the-android-sdk-at-the-given-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#could-not-locate-the-android-sdk-at-the-given-path"}},[t._v("#")]),t._v(" Could not locate the Android SDK at the given path")]),t._v(" "),a("p",[t._v('If you see the error, "Could not locate the Android SDK at the given path", when configuring the _Android SDK Home_ field in Studio preferences, confirm that you have all the prerequisite packages installed, as shown in the '),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK/#UpdatingAndroidpackages"}},[t._v("Installing the Android SDK: Updating Android packages")]),t._v(" screenshot.")],1),t._v(" "),a("h2",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),a("h3",{attrs:{id:"xcopy-is-not-recognized-as-an-internal-or-external-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xcopy-is-not-recognized-as-an-internal-or-external-command"}},[t._v("#")]),t._v(" xcopy is not recognized as an internal or external command")]),t._v(" "),a("p",[t._v('If you see the error, "xcopy is not recognized as an internal or external command", when attempting to install the Android SDK with the Studio configuration wizard, it is caused by a Windows system '),a("code",[t._v("PATH")]),t._v(" misconfiguration. To resolve it, add the following path "),a("strong",[t._v("to the beginning")]),t._v(" of your system "),a("code",[t._v("PATH")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("%SystemRoot%\\system32;%SystemRoot%;%SystemRoot%\\System32\\Wbem;\n")])])]),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/#configuring-environment-variables-on-windows"}},[t._v("Configuring Environment Variables on Windows")]),t._v(" for instructions about how to do this.")],1),t._v(" "),a("h3",{attrs:{id:"installation-updates-fail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-updates-fail"}},[t._v("#")]),t._v(" Installation updates fail")]),t._v(" "),a("p",[t._v("On-access antivirus software and personal firewalls, such as ZoneAlarm, can interfere with Titanium and Appcelerator downloads. If the installation progress meter appears to stall, try disabling your antivirus and firewall for the duration of the download and installation.")]),t._v(" "),a("h3",{attrs:{id:"oem-usb-drivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oem-usb-drivers"}},[t._v("#")]),t._v(" OEM USB drivers")]),t._v(" "),a("p",[t._v("In order to test your applications on an Android-powered device connected to your Windows, you will need to install the appropriate USB driver. See "),a("a",{attrs:{href:"http://developer.android.com/sdk/oem-usb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("this page"),a("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),a("h3",{attrs:{id:"unable-to-open-database-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-open-database-file"}},[t._v("#")]),t._v(" Unable to open database file")]),t._v(" "),a("p",[t._v("During development, when using the "),a("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("Titanium.Database"),a("OutboundLink")],1),t._v(" module in your project, you may receive an error such as:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Error in compiler. <class 'sqlite3.OperationalError'>, unable to open database file\n")])])]),a("p",[t._v("Try disabling on-access antivirus scanning to determine whether it is the cause. If so, it is recommended to create an exception rule in the antivirus software, rather than disabling on-access scanning altogether.")]),t._v(" "),a("h3",{attrs:{id:"install-diagnostics-for-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-diagnostics-for-windows"}},[t._v("#")]),t._v(" Install Diagnostics for Windows")]),t._v(" "),a("p",[t._v("As a quick check to verify that your environment has been configured correctly, you can use the code below.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("In order for this script to work as intended, the "),a("code",[t._v("PATH")]),t._v(" variable of your system must be configured as described in "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK/#windows"}},[t._v("Installing and Updating Android SDK")])],1)]),t._v(" "),a("p",[t._v("You will need to run it "),a("strong",[t._v("with the user account you use when working with Titanium")]),t._v(". These commands should execute without error, except "),a("code",[t._v("SCons")]),t._v(" which is an optional component.")]),t._v(" "),a("p",[t._v("To run the commands:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("open a Windows 7 "),a("code",[t._v("Command Prompt")])])]),t._v(" "),a("li",[a("p",[t._v("copy all of the code below")])]),t._v(" "),a("li",[a("p",[t._v("right-click on the "),a("code",[t._v("Command Prompt")]),t._v(" window")])]),t._v(" "),a("li",[a("p",[t._v("choose "),a("code",[t._v("Paste")]),t._v(" from the context menu")])]),t._v(" "),a("li",[a("p",[t._v("press "),a("strong",[t._v("Enter")]),t._v(" to ensure the last command in the list executes")])]),t._v(" "),a("li",[a("p",[t._v("compare your output with the "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installation_Troubleshooting/Install_Diagnostics_Script_Output/"}},[t._v("Install Diagnostics Output")]),t._v(" from our system")],1)])]),t._v(" "),a("p",[t._v("To copy your output, ready to paste into a text document or to share:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("right-click on the window")])]),t._v(" "),a("li",[a("p",[t._v("choose "),a("code",[t._v("Select All")]),t._v(" from the context menu")])]),t._v(" "),a("li",[a("p",[t._v("press "),a("strong",[t._v("Enter")]),t._v(" to copy")])])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),a("p",[t._v("Do not post your output directly into the "),a("a",{attrs:{href:"http://developer.appcelerator.com/questions/created",target:"_blank",rel:"noopener noreferrer"}},[t._v("Q&A"),a("OutboundLink")],1),t._v(", as the formatting is likely to be messy making it difficult for others to interpret. Instead, create a new "),a("a",{attrs:{href:"https://gist.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Gist"),a("OutboundLink")],1),t._v(". To do this, paste the "),a("strong",[t._v("unedited")]),t._v(" output into the main Gist text area, click the "),a("strong",[t._v("Create Public Gist")]),t._v(" button at the bottom of the page and copy and share the resulting URL from your browser address bar.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cls\ncd \\\necho %PROGRAMFILES%\necho %PROGRAMDATA%\necho %USERPROFILE%\necho %PATH%\necho %JAVA_HOME%\njava -version\njavac -version\npython -V\ngit --version\nrem if the ANDROID_SDK variable is configured, please delete it and run this script again\necho %ANDROID_SDK%\nadb version\ncd %PROGRAMFILES%\nandroid list target\ncd \\\nrem --- The following are optional ---\nrem ----------------------------------\nscons -v\nrem ----------------------------------\necho %HTTP_PROXY%\necho %HTTPS_PROXY%\nrem ----------------------------------\necho %SOCKS_PROXY%\nrem ----------------------------------\nrem\n")])])]),a("p",[t._v("Bear in mind that the installed android packages and software versions are correct at the time of writing, but are likely to change in future.")])])}),[],!1,null,null,null);e.default=o.exports}}]);