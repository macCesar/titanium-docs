(window.webpackJsonp=window.webpackJsonp||[]).push([[1040],{1531:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"gdpr-opt-out-sample-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gdpr-opt-out-sample-app"}},[t._v("#")]),t._v(" GDPR Opt Out Sample App")]),t._v(" "),e("p",[t._v("We have created a sample app that shows users how to opt out from Analytics (per the GDPR).")]),t._v(" "),e("p",[t._v("To guide you through the GDPR compliance process for you app, we have create a "),e("a",{attrs:{href:"https://github.com/appcelerator-developer-relations/appc-sample-ti720",target:"_blank",rel:"noopener noreferrer"}},[t._v("7.2.0 Sample App"),e("OutboundLink")],1),t._v(" that demonstrates the usage of the new "),e("code",[t._v("optedOut")]),t._v(" property as part of "),e("code",[t._v("Ti.Analytics")]),t._v(".")]),t._v(" "),e("p",[t._v("Here is a practical example: Let's assume, you have a "),e("code",[t._v("Ti.UI.Switch")]),t._v(" instance in your app that controls whether or not the user should opt out of Analytics. By default, the user is opted in to Analytics.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a switch, default optOut status = `false`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSwitch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// On change, toggle the opt-out property")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Analytics"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optedOut "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For every Analytics event, validate the `Ti.Analytics.optedOut` property. If the user opted out")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and you did not validate it, the Analatyics event will be skipped silently.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Analytics"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optedOut"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Analytics"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("featureEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i_love_gdpr'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" really"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"external-modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-modules"}},[t._v("#")]),t._v(" External Modules")]),t._v(" "),e("p",[t._v("There are many other components of app-development that should become GDPR-complient as well. Some modules that are already GDPR complient:")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://github.com/appcelerator-modules/ti.admob",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ti.Admob"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/hansemannn/titanium-firebase",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ti.Firebase"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"questions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#questions"}},[t._v("#")]),t._v(" Questions?")]),t._v(" "),e("p",[t._v("If you have further questions about how GDPR works in Titanium, feel free to open a "),e("a",{attrs:{href:"https://jira.appcelerator.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JIRA ticket"),e("OutboundLink")],1),t._v(" or reach out to us via "),e("a",{attrs:{href:"http://tislack.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TiSlack"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);