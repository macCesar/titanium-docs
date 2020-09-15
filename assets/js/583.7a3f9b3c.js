(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{1575:function(n,e,i){"use strict";i.r(e);var t=i(21),s=Object(t.a)({},(function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("h1",{attrs:{id:"titanium-app-windows"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app-windows"}},[n._v("#")]),n._v(" Titanium.App.Windows")]),n._v(" "),i("TypeHeader"),n._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[n._v("#")]),n._v(" Overview")]),n._v(" "),i("p",[n._v("ExtendedExecution provides a way to postpone application suspension.\nThis method is useful expecially for Windows desktop apps because app suspension happens when you\nminimize the app Window, which happens often on desktop. Note that extended execution is not available\nfor use in Windows Store applications.")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[n._v("var win = Ti.UI.createWindow();\n\nwin.addEventListener('open', function () {\n    Ti.App.Windows.requestExtendedExecution({\n        reason: Ti.App.Windows.EXTENDED_EXECUTION_REASON_UNSPECIFIED,\n        result: function (granted) {\n            Ti.API.info('Windows extended execution requested: result = ' + granted);\n        },\n        revoked: function (reason) {\n            Ti.API.info('Windows extended execution revoked: reason = ' + reason);\n        }\n    });\n});\n\nTi.App.addEventListener('paused', function () {\n    Ti.API.info('application paused');\n});\n\nTi.App.addEventListener('resumed', function () {\n    Ti.API.info('application resumed');\n});\n\nwin.open();\n")])])]),i("ApiDocs")],1)}),[],!1,null,null,null);e.default=s.exports}}]);