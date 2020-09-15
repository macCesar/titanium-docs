(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{1126:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"modules-touchid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modules-touchid"}},[t._v("#")]),t._v(" Modules.TouchId")]),t._v(" "),e("TypeHeader"),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("h3",{attrs:{id:"warning"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#warning"}},[t._v("#")]),t._v(" WARNING")]),t._v(" "),e("p",[t._v("This module has been deprecated in Titanium SDK 6.3.0+ in favor of the "),e("a",{attrs:{href:"https://github.com/appcelerator-modules/titanium-identity",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ti.Identity"),e("OutboundLink")],1),t._v(" module\nthat includes the 1:1 same API's as this one but also more current API's like FaceID-related constants\nand a unified naming-scheme to avoid confusions regarding the name \"TouchID\".")]),t._v(" "),e("p",[t._v("Touch ID is a security mechanism that uses a fingerprint to authenticate the user. The\nfingerprint sensor is located in the Home button of the device. Users can use their fingerprint\ninstead of entering their passcode for authentication.")]),t._v(" "),e("h3",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("p",[t._v("The Touch ID module is available with the Titanium SDK starting with Release 3.4.0.\nThis module only works with devices running iOS 8. You can only test the Touch ID module on a device.")]),t._v(" "),e("p",[t._v("The device must have a Touch ID sensor in the Home button and Touch ID must be setup in order to use\nthe Touch ID authentication mechanism. You can set up Touch ID in iOS Setup Assistant or by\ntapping "),e("strong",[t._v("Touch ID & Passcode")]),t._v(" from Settings.")]),t._v(" "),e("p",[t._v("For information on setting up Touch ID, see\n"),e("a",{attrs:{href:"http://support.apple.com/kb/HT5883",target:"_blank",rel:"noopener noreferrer"}},[t._v("iPhone 5s: Using Touch ID"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("p",[t._v("Add the module as a dependency to your application by adding a "),e("strong",[e("code",[t._v("<module>")])]),t._v(" item to the\n"),e("strong",[e("code",[t._v("<modules>")])]),t._v(" element of your "),e("code",[t._v("tiapp.xml")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("platform")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("iphone"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("ti.touchid"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Use "),e("code",[t._v("require()")]),t._v(" to access the module from JavaScript:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" TouchID "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ti.touchid'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("TouchId")]),t._v(" variable is a reference to the module. Make API calls using this reference:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("TouchID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("authenticate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    reason"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Verify to modify personal settings'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"lifetime-notes-ios-only"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lifetime-notes-ios-only"}},[t._v("#")]),t._v(" Lifetime Notes (iOS-only)")]),t._v(" "),e("p",[t._v("The current context will, once evaluated, be used until it's instance gets released or invalidated.\nYou can you use the "),e("type-link",{attrs:{type:"Modules.TouchId.invalidate"}},[t._v("Modules.TouchId.invalidate")]),t._v(" method to force the user to be prompted every time a\nnew authentication is triggered. On iOS 9 and later, this can also be called to cancel a current\nevaluation of an auth-context, e.g. to hide the auth-dialoag.")],1),t._v(" "),e("h3",{attrs:{id:"native-keychain-integration-ios-only"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#native-keychain-integration-ios-only"}},[t._v("#")]),t._v(" Native Keychain Integration (iOS-only)")]),t._v(" "),e("p",[t._v("For more infos regarding the keychain integration, check the <Modules.TiTouchId.KeychainItem>\ndocumentation.")]),t._v(" "),e("h3",{attrs:{id:"sample-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample-application"}},[t._v("#")]),t._v(" Sample Application")]),t._v(" "),e("p",[t._v("The module contains a sample application in the\n"),e("code",[t._v("<TITANIUM_SDK_HOME>/modules/iphone/ti.touchid/<VERSION>/example/")]),t._v(" folder.")]),t._v(" "),e("ApiDocs")],1)}),[],!1,null,null,null);a.default=n.exports}}]);