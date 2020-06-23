(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{694:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"titanium-ui-emaildialog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-emaildialog","aria-hidden":"true"}},[t._v("#")]),t._v(" Titanium.UI.EmailDialog")]),t._v(" "),s("TypeHeader"),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("table",{attrs:{id:"platformComparison"}},[s("tbody",[s("tr",[s("td",[s("img",{attrs:{src:"images/emaildialog/emaildialog_android.png",height:"150"}})]),t._v(" "),s("td",[s("img",{attrs:{src:"images/emaildialog/emaildialog_ios.png",height:"150"}})]),t._v(" "),s("td",[s("img",{attrs:{src:"images/emaildialog/emaildialog_wp.png",height:"150"}})])])]),t._v(" "),s("tfoot",[s("tr",[s("th",[t._v("Android")]),t._v(" "),s("th",[t._v("iOS")]),t._v(" "),s("th",[t._v("Windows Phone")])])]),s("tfoot")]),t._v(" "),s("p",[t._v("The Email Dialog is created with the "),s("type-link",{attrs:{type:"Titanium.UI.createEmailDialog"}},[t._v("Titanium.UI.createEmailDialog")]),t._v(" method. The user needs to\nregister an e-mail account on the device in order to open the dialog.  The dialog will not\nopen when there is not a registered e-mail account.")],1),t._v(" "),s("p",[s("strong",[t._v("iOS Platform Notes")])]),t._v(" "),s("p",[t._v("On iOS, you cannot test the e-mail dialog on the iOS Simulator. Test the email dialog on device.")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"simple-email-dialog-with-attachment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-email-dialog-with-attachment","aria-hidden":"true"}},[t._v("#")]),t._v(" Simple Email Dialog with Attachment")]),t._v(" "),s("p",[t._v("Create and send an email with a file attachment.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" emailDialog "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEmailDialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nemailDialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello from Titanium"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nemailDialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toRecipients "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo@yahoo.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nemailDialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("messageBody "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<b>Appcelerator Titanium Rocks!</b>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cricket.wav'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nemailDialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAttachment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nemailDialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ApiDocs")],1)},[],!1,null,null,null);a.default=n.exports}}]);