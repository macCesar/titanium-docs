(window.webpackJsonp=window.webpackJsonp||[]).push([[1033],{1605:function(t,a,i){"use strict";i.r(a);var n=i(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"titanium-and-angular"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#titanium-and-angular"}},[t._v("#")]),t._v(" Titanium and Angular")]),t._v(" "),i("p",[t._v("This document will guide you on how to use Titanium and Angular together.")]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("⚠️ Techical Preview")]),t._v(" "),i("p",[t._v("Titanium and Angular is currently only available as a Technical Preview and is under ongoing development. Expect things to be broken or APIs to change. Titanium Angular is not yet ready for production use!")]),t._v(" "),i("p",[t._v("If you run into problems read the "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_-_FAQ/"}},[t._v("Titanium Angular - FAQ")]),t._v(" or check out "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_-_Limitations_and_Workarounds/"}},[t._v("Titanium Angular - Limitations and Workarounds")]),t._v(" for more details about what features are already implemented and what is to come.")],1)]),t._v(" "),i("h2",{attrs:{id:"prerequisites"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),i("p",[t._v("In order to use Titanium and Angular together you will need a recent nightly build of the Titanium SDK. Both the "),i("code",[t._v("master")]),t._v(" and "),i("code",[t._v("9_2_X")]),t._v(" branch will have the latest updates for the Angular support. We recommend using "),i("code",[t._v("9_2_X")]),t._v(" as that branch is already in maintenance mode, whereas "),i("code",[t._v("master")]),t._v(" is under active development. Chose one of the following commands to install the latest build from the "),i("code",[t._v("9_2_X")]),t._v(" branch and automatically select it as your default SDK.")]),t._v(" "),i("p",[i("strong",[t._v("Install Appcelerator CLI with Angular support")])]),t._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[t._v("// appc-cli\nappc ti sdk "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -b 9_2_X -d\n\n// ti-cli\nti sdk "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -b 9_2_X -d\n")])])]),i("p",[t._v("Titanium Angular makes use of our new webpack build pipeline introduced with SDK 9.1.0. For this you need to have the Appcelerator Daemon (appcd) and webpack plugin installed as well. For "),i("code",[t._v("appc")]),t._v(" CLI versions 8.0.0+, appcd comes bundled with the CLI so you will already have it. If you use the "),i("code",[t._v("ti")]),t._v(" CLI you need to install appcd globally on your machine.")]),t._v(" "),i("p",[i("strong",[t._v("Install appcd")])]),t._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g appcd\n")])])]),i("p",[t._v("After appcd is installed you need to add the webpack plugin by running the following:")]),t._v(" "),i("p",[i("strong",[t._v("Install @appcd/plugin-webpack")])]),t._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g @appcd/plugin-webpack\n")])])]),i("p",[t._v("Now that all the necessary tooling for Titanium Angular is installed you can create your first Titanium Angular project. Head over to the "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Getting_Started_Guide/"}},[t._v("Getting Started")]),t._v(" guide to learn how to create a new Titanium Angular project and get to know the basic Titanium Angular project structure.")],1),t._v(" "),i("p",[t._v("You can also visit the "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Webpack_Guide/"}},[t._v("webpack Guide")]),t._v(" if you want to know more about the webpack build that powers Titanium Angular.")],1),t._v(" "),i("h2",{attrs:{id:"open-source"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#open-source"}},[t._v("#")]),t._v(" Open Source")]),t._v(" "),i("p",[t._v("Make sure to also check out the "),i("a",{attrs:{href:"https://github.com/appcelerator/titanium-angular",target:"_blank",rel:"noopener noreferrer"}},[t._v("titanium-angular"),i("OutboundLink")],1),t._v(" repository on GitHub, which includes the most active state of the Angular support in Titanium.")]),t._v(" "),i("h2",{attrs:{id:"related-documents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#related-documents"}},[t._v("#")]),t._v(" Related documents")]),t._v(" "),i("ul",[i("li",[i("p",[i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Getting_Started_Guide/"}},[t._v("Titanium Angular Getting Started Guide")])],1)]),t._v(" "),i("li",[i("p",[i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Basics/"}},[t._v("Titanium Angular Basics")])],1)]),t._v(" "),i("li",[i("p",[i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Routing/"}},[t._v("Titanium Angular Routing")])],1)]),t._v(" "),i("li",[i("p",[i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_-_Helpers_and_Services/"}},[t._v("Titanium Angular - Helpers and Services")])],1)]),t._v(" "),i("li",[i("p",[i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_-_Limitations_and_Workarounds/"}},[t._v("Titanium Angular - Limitations and Workarounds")])],1)]),t._v(" "),i("li",[i("p",[i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_-_FAQ/"}},[t._v("Titanium Angular - FAQ")])],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);