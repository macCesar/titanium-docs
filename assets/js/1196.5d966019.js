(window.webpackJsonp=window.webpackJsonp||[]).push([[1196],{2894:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"titanium-sdk-updates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#titanium-sdk-updates"}},[t._v("#")]),t._v(" Titanium SDK Updates")]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("p",[t._v("The examples in this page use the "),e("strong",[e("em",[t._v("Prototype")])]),t._v(" library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("This command checks for any updates available for the Titanium SDK. When a "),e("em",[t._v("dispatch")]),t._v(" request for a check is made, the Studio will access the Titanium repo online and will compare the installed version to the latest version. A post-check event will then be fired from the Studio. The event will hold the information regarding any available update.")]),t._v(" "),e("h2",{attrs:{id:"invocation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#invocation"}},[t._v("#")]),t._v(" Invocation")]),t._v(" "),e("p",[t._v("This command is executed "),e("strong",[e("em",[t._v("asynchronously")])]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"checking-for-titanium-sdk-updates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checking-for-titanium-sdk-updates"}},[t._v("#")]),t._v(" Checking for Titanium SDK updates")]),t._v(" "),e("p",[t._v("This is the "),e("em",[t._v("dispatch")]),t._v(" call for the check for updates.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dispatch($H({\n  controller: 'portal.titanium.sdk.update',\n  action: \"checkForUpdate\"\n}).toJSON());\n")])])]),e("p",[t._v("When triggered, the Studio will perform the required checks and will later on send a notification to the portal by calling a JavaScript function "),e("strong",[e("em",[t._v("eventsDispatcher.notify()")])]),t._v(" and passing an "),e("strong",[e("em",[t._v("event")])]),t._v(" JSON into it.")]),t._v(" "),e("p",[t._v("The portal should handle this by defining an "),e("strong",[e("em",[t._v("eventsDispatcher")])]),t._v(" object that has a "),e("strong",[e("em",[t._v("notify")])]),t._v(" function that accepts an argument.\nFor example (taken from the "),e("em",[t._v("studio3-sdk")]),t._v(" repository):")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Events "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TITANIUM_SDK")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'titaniumSDK'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates the eventsDispatcher which contains the notify() function.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IMPORTANT! The Studio expects the observable to be called 'eventsDispatcher', and")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// expects the eventsDispatcher function to be called 'notify()'. Do not change these names.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" eventsDispatcher "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Observable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * The Portal class\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Portal "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Class"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("initialize")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create the UI parts and render them")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updates "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Updates")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updates"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add a Mobile SDKs observer to the dispatcher. Render the Mobile SDK table on a 'mobileSDK' events.")]),t._v("\n    eventsDispatcher"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addObserver")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Events"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TITANIUM_SDK")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" portal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updates"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The example above calls "),e("em",[t._v("portal.updates.update(e);")]),t._v(" whenever the Studio fires a "),e("em",[t._v("titaniumSDK")]),t._v(" event. The "),e("em",[t._v("update")]),t._v(" function than handles the event by reading the JSON content from it and re-render the UI.")]),t._v(" "),e("p",[t._v("The event that the Studio sends contains these fields:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("key")]),t._v(" "),e("th",[t._v("content")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("event.data.status")]),t._v(" "),e("td",[t._v("Indicate the status of the check. Can hold the following values: 'ok', 'processing', 'error', 'incomplete' or 'unknown'")])]),t._v(" "),e("tr",[e("td",[t._v("event.data.installedMobileSDK")]),t._v(" "),e("td",[t._v("The currently installed Titanium Mobile SDK version")])]),t._v(" "),e("tr",[e("td",[t._v("event.data.installedDesktopSDK")]),t._v(" "),e("td",[t._v("The currently installed Titanium Desktop SDK version")])]),t._v(" "),e("tr",[e("td",[t._v("event.data.updateAvailable")]),t._v(" "),e("td",[t._v("A boolean indication that an update is available")])])])]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),e("p",[t._v("When the "),e("em",[t._v("event.data.installedMobileSDK")]),t._v(", for example, is "),e("em",[t._v("undefined")]),t._v(", the "),e("em",[t._v("event.data.status")]),t._v(" will indicate the stage of the command. The studio will fire multiple events after the dispatch call, and it's up to the JavaScript call to handle those and render the UI accordingly (for example, show a spinning wheel when the "),e("em",[t._v("processing")]),t._v(" status is received).")]),t._v(" "),e("p",[t._v("The "),e("strong",[e("em",[t._v("studio3_sdk")])]),t._v(" repository contains a complete example of handling these events and tunneling them to the UI (see "),e("em",[t._v("updates.js")]),t._v(")")])]),t._v(" "),e("h2",{attrs:{id:"installing-a-titanium-sdk-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-titanium-sdk-update"}},[t._v("#")]),t._v(" Installing a Titanium SDK update")]),t._v(" "),e("p",[t._v("When the Studio indicates that a Titanium SDK update is available, a displayed link can activate the "),e("em",[t._v("action")]),t._v(" to download and install the SDK automatically.")]),t._v(" "),e("p",[t._v("Here is the "),e("em",[t._v("dispatch")]),t._v(" call that does that:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dispatch($H({\n  controller: 'portal.titanium.sdk.update',\n  action: \"installUpdate\"\n}).toJSON());\n")])])]),e("h2",{attrs:{id:"installing-a-titanium-sdk-update-using-a-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-titanium-sdk-update-using-a-url"}},[t._v("#")]),t._v(" Installing a Titanium SDK update using a URL")]),t._v(" "),e("p",[t._v("You can install a specific Titanium SDK via the url. The "),e("em",[t._v("action")]),t._v(' will trigger an install similar to the "installUpdate" action, but just targeted to a specific SDK url.')]),t._v(" "),e("p",[t._v("Here is the "),e("em",[t._v("dispatch")]),t._v(" call that does that:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dispatch($H({\n  controller: 'portal.titanium.sdk.update',\n  action: \"installSDK\",\n  args: '[\"http://builds.appcelerator.com.s3.amazonaws.com/mobile/1_7_X/mobilesdk-1.7.6.v20111114104114-osx.zip\"]'\n}).toJSON());\n")])])]),e("p",[t._v("The argument passed in is the url to the specific sdk.")])])}),[],!1,null,null,null);a.default=n.exports}}]);