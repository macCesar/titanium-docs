(window.webpackJsonp=window.webpackJsonp||[]).push([[969],{1782:function(t,o,i){"use strict";i.r(o);var s=i(21),e=Object(s.a)({},(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"installing-the-windows-sdk"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-windows-sdk"}},[t._v("#")]),t._v(" Installing the Windows SDK")]),t._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),i("p",[t._v("As of Titanium 9.0.0, building Windows apps is no longer supported.The below only applies to users of older Titanium versions.")])]),t._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),i("p",[t._v("This guide walks through the steps required to download and setup the Windows SDKs required for Windows Platform development.")]),t._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),i("p",[t._v("To develop for Windows Platform, the following are the preferred requirements:")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("An installation of either Windows 8.1 Pro or Windows 10 Pro")]),t._v(" "),i("ul",[i("li",[t._v("The Pro version of Windows is required to be able to run emulators which use Hyper-V")])])]),t._v(" "),i("li",[i("p",[t._v("An installation of Visual Studio 2017 Community, Professional, or Enterprise with the following workloads and additional items:")]),t._v(" "),i("ul",[i("li",[t._v("For Windows 10 and Windows 10 Mobile development, the "),i("strong",[t._v("Universal Windows App Development Tools")]),t._v(" must be installed")])])]),t._v(" "),i("li",[i("p",[t._v("To use Windows Phone Emulators, Hyper-V must be enabled. For information on how to enable Hyper-V, see "),i("a",{attrs:{href:"https://msdn.microsoft.com/library/windows/apps/xaml/jj863509.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("this document from Microsoft."),i("OutboundLink")],1)])])]),t._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),i("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),i("h2",{attrs:{id:"compatibility"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[t._v("#")]),t._v(" Compatibility")]),t._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),i("p",[t._v("As of Titanium 9.0.0, building Windows apps is no longer supported.")])]),t._v(" "),i("h3",{attrs:{id:"visual-studio"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio"}},[t._v("#")]),t._v(" Visual Studio")]),t._v(" "),i("h4",{attrs:{id:"supported-versions-of-vs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions-of-vs"}},[t._v("#")]),t._v(" Supported versions of VS")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Titanium SDK Version")]),t._v(" "),i("th",[t._v("Min Visual Studio Version")]),t._v(" "),i("th",[t._v("Max Visual Studio Version")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("7.0.0 - 8.3.x")]),t._v(" "),i("td",[t._v("Visual Studio 2015")]),t._v(" "),i("td",[t._v("Visual Studio 2017")])])])]),t._v(" "),i("h4",{attrs:{id:"unsupported-versions-of-vs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#unsupported-versions-of-vs"}},[t._v("#")]),t._v(" Unsupported versions of VS")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Titanium SDK Version")]),t._v(" "),i("th",[t._v("Min Visual Studio Version")]),t._v(" "),i("th",[t._v("Max Visual Studio Version")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("6.2.0 - 6.3.0")]),t._v(" "),i("td",[t._v("Visual Studio 2013")]),t._v(" "),i("td",[t._v("Visual Studio 2017")])]),t._v(" "),i("tr",[i("td",[t._v("5.1.0 - 6.2.0")]),t._v(" "),i("td",[t._v("Visual Studio 2013")]),t._v(" "),i("td",[t._v("Visual Studio 2015")])])])]),t._v(" "),i("h3",{attrs:{id:"supported-platforms"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#supported-platforms"}},[t._v("#")]),t._v(" Supported Platforms")]),t._v(" "),i("h4",{attrs:{id:"supported-platform-versions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#supported-platform-versions"}},[t._v("#")]),t._v(" Supported platform versions")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Titanium SDK Version")]),t._v(" "),i("th",[t._v("Supported Mobile Platforms")]),t._v(" "),i("th",[t._v("Supported Desktop Platforms")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("7.0.0 - 8.3.x")]),t._v(" "),i("td",[t._v("Windows 10 Mobile")]),t._v(" "),i("td",[t._v("Windows 10")])])])]),t._v(" "),i("h4",{attrs:{id:"unsupported-platform-versions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#unsupported-platform-versions"}},[t._v("#")]),t._v(" Unsupported platform versions")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Titanium SDK Version")]),t._v(" "),i("th",[t._v("Supported Mobile Platforms")]),t._v(" "),i("th",[t._v("Supported Desktop Platforms")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("5.1.0 - 6.3.0")]),t._v(" "),i("td",[t._v("Windows 10 Mobile, Windows Phone")]),t._v(" "),i("td",[t._v("Windows 10, Windows 8.1")])])])]),t._v(" "),i("h2",{attrs:{id:"installing-the-windows-sdks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-windows-sdks"}},[t._v("#")]),t._v(" Installing the Windows SDKs")]),t._v(" "),i("p",[t._v("The minimum requirements (builds tools and SDKs, not including Windows Mobile Emulators), will take around 10 GB of storage.")]),t._v(" "),i("ol",[i("li",[i("p",[i("strong",[t._v("Download Visual Studio")]),t._v(" installer from "),i("a",{attrs:{href:"https://www.visualstudio.com/vs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.visualstudio.com/vs/"),i("OutboundLink")],1),t._v(".")])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("Run the installer")]),t._v(" and select the "),i("strong",[t._v("Visual Studio Edition")]),t._v(" you wish to install.")])]),t._v(" "),i("li",[i("p",[t._v("In the "),i("strong",[t._v("Workloads tab")]),t._v(", select the following required Workloads and optional workload components:")]),t._v(" "),i("ol",[i("li",[i("strong",[t._v("Universal Windows Platform Development")]),t._v(" with the "),i("strong",[t._v("C++ Universal Windows Platform Tools")]),t._v(" optional component")])])]),t._v(" "),i("li",[i("p",[t._v("In the Individual "),i("strong",[t._v("Components tab")]),t._v(", select the following required "),i("strong",[t._v("Individual Components")]),t._v(" (there may be newer versions of the components, please select the latest version)")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("SDKs, Libraries, and frameworks:")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Windows 10 SDK (10.15063.0) for Desktop C++ x86 and x64")])]),t._v(" "),i("li",[i("p",[t._v("Windows 10 SDK (10.0.15063.0) for UWP: C++")])])])])])]),t._v(" "),i("li",[i("p",[t._v("If you wish to use emulators during development, select the "),i("strong",[t._v("Windows Mobile Emulators")]),t._v(" component in the Universal Windows Platform development optional packages.")])]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("Install")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Once the install has finished, open Visual Studio to verify that the install worked.")])])]),t._v(" "),i("h2",{attrs:{id:"troubleshooting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Appcelerator Studio does not show any emulators or connected devices/"),i("code",[t._v("appc ti info -t windows")]),t._v(" does not display any information")]),t._v(" "),i("ul",[i("li",[t._v("The tooling within the Visual Studio installation used by Titanium to detect information can sometimes get corrupted, this may happen if Appcelerator Studio was left open while Visual Studio was updating or installing. To fix this, first try restarting your development machine. If that does not work you can run a repair of Visual Studio by opening the installer and choosing the "),i("strong",[t._v("Repair")]),t._v(" option.")])])])]),t._v(" "),i("h2",{attrs:{id:"further-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Module development: "),i("a",{attrs:{href:"#undefined"}},[t._v("Windows Module Development Guide")])])]),t._v(" "),i("li",[i("p",[t._v("Building to devices: "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_Windows_Devices/"}},[t._v("Deploying to Windows Devices")])],1)]),t._v(" "),i("li",[i("p",[t._v("Distributing your application: "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_Windows_Applications/"}},[t._v("Distributing Windows Applications")])],1)])])])}),[],!1,null,null,null);o.default=e.exports}}]);