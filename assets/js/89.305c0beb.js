(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{2136:function(t,n,e){"use strict";e.r(n);var a=e(21),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-ui-optiondialog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-optiondialog"}},[t._v("#")]),t._v(" Titanium.UI.OptionDialog")]),t._v(" "),a("TypeHeader"),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Android")]),t._v(" "),a("th",[t._v("iPhone")]),t._v(" "),a("th",[t._v("iPad")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("img",{attrs:{src:e(462),alt:"Android"}})]),t._v(" "),a("td",[a("img",{attrs:{src:e(463),alt:"iPhone"}})]),t._v(" "),a("td",[a("img",{attrs:{src:e(464),alt:"iPad"}})])])])]),t._v(" "),a("p",[t._v("An option dialog is created using "),a("type-link",{attrs:{type:"Titanium.UI.createOptionDialog"}},[t._v("Titanium.UI.createOptionDialog")]),t._v(" or Alloy "),a("code",[t._v("<OptionDialog>")]),t._v("\nelement. See Examples below for usage.")],1),t._v(" "),a("p",[t._v("This dialog is presented differently on each platform, as described below.")]),t._v(" "),a("h3",{attrs:{id:"android"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[t._v("#")]),t._v(" Android")]),t._v(" "),a("p",[t._v("On Android, the dialog is shown in the middle of the display (not touching the edges),\nwith the option items represented in a picker. The previously-selected, or default, item can be\nset on creation.")]),t._v(" "),a("p",[t._v("You can assign a "),a("type-link",{attrs:{type:"Titanium.UI.View"}},[t._v("View")]),t._v(" to the "),a("type-link",{attrs:{type:"Titanium.UI.OptionDialog.androidView"}},[t._v("Titanium.UI.OptionDialog.androidView")]),t._v(" property\nto define a custom dialog UI and layout, or you can assign a set of options to the\n"),a("type-link",{attrs:{type:"Titanium.UI.OptionDialog.options"}},[t._v("Titanium.UI.OptionDialog.options")]),t._v(" property, but not both. If both of these properties are set, the custom view\nwill appear but the options will be hidden.")],1),t._v(" "),a("p",[t._v("Buttons below the picker may be optionally defined using the "),a("code",[t._v("buttonNames")]),t._v(" property.\nThe "),a("code",[t._v("click")]),t._v(" event returns a Boolean value to indicate whether either an option item or a button was clicked.")]),t._v(" "),a("h3",{attrs:{id:"ios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[t._v("#")]),t._v(" iOS")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("destructive")]),t._v(" property may be set for an item, to give a visual cue that selecting it\nresults in an irreversible action. Option dialogs are automatically cancelled when the application is paused/suspended.")]),t._v(" "),a("h4",{attrs:{id:"iphone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iphone"}},[t._v("#")]),t._v(" iPhone")]),t._v(" "),a("p",[t._v("On iPhone, this dialog is shown at the bottom edge of the display, with the option items\nrepresented as vertical buttons.")]),t._v(" "),a("h4",{attrs:{id:"ipad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipad"}},[t._v("#")]),t._v(" iPad")]),t._v(" "),a("p",[t._v("On iPad, this dialog is shown in the middle of the display, or as a popover-like dialog if\nanother view or control is specified via an argument passed to the "),a("code",[t._v("open()")]),t._v(" method.")]),t._v(" "),a("p",[t._v("Note that on iPad, the cancel button is not displayed -- users can cancel the dialog\nby clicking outside of the dialog.")]),t._v(" "),a("h3",{attrs:{id:"caveats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caveats"}},[t._v("#")]),t._v(" Caveats")]),t._v(" "),a("p",[t._v("Care should be taken not to define any properties that are not documented, as this may produce\nunexpected results. For example, setting a "),a("code",[t._v("message")]),t._v(" property will prevent the picker of option\nitems from being displayed on Android.")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"dialog-with-3-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dialog-with-3-options"}},[t._v("#")]),t._v(" Dialog with 3 Options")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBackgroundColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Click window to test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  backgroundColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" opts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cancel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Confirm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Help'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cancel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  selectedIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  destructive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Delete File?'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dialog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createOptionDialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"dialog-with-2-options-and-1-button-on-android-and-3-options-on-ios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dialog-with-2-options-and-1-button-on-android-and-3-options-on-ios"}},[t._v("#")]),t._v(" Dialog with 2 Options and 1 Button on Android and 3 Options on iOS")]),t._v(" "),a("p",[t._v("`` js\nvar win = Ti.UI.createWindow({\ntitle: 'Click window to test OptionDialog',\nbackgroundColor: 'white'\n});")]),t._v(" "),a("p",[t._v("var opts = {\ntitle: 'Delete File?'\n};")]),t._v(" "),a("p",[t._v("var isAndroid = Ti.Platform.osname === 'android';")]),t._v(" "),a("p",[t._v("if (isAndroid) {\nopts.options = ['Confirm', 'Cancel'];\nopts.buttonNames = ['Help'];\n} else {\nopts.options = ['Confirm', 'Help', 'Cancel'];\n}")]),t._v(" "),a("p",[t._v("var dialog;\nwin.addEventListener('click', function() {\ndialog = Ti.UI.createOptionDialog(opts);")]),t._v(" "),a("p",[t._v("dialog.addEventListener('click', onSelectDialog);\ndialog.addEventListener('cancel', function(e) {\nalert('Dialog canceled! e.cancel = ' + e.cancel + ', e.index = ' + e.index);\n})")]),t._v(" "),a("p",[t._v("dialog.show();\n});")]),t._v(" "),a("p",[t._v("function onSelectDialog(e) {\nif (isAndroid) {\nif (e.button === false && e.index === 0) {\nalert('Confirm option selected! e.index = ' + e.index);\n}\nif (e.button === false && eventeindex === 1) {\nalert('Cancel option selected! e.index = ' + e.index);\n}\nif (e.button === true && e.index === 0) {\nalert('Help Button clicked! e.index = ' + e.index);\n}\n}\n}")]),t._v(" "),a("p",[t._v("win.open();")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\n### Alloy XML Markup\n\nPrevious example as an Alloy view. You can set [cancel](Titanium.UI.OptionDialog.cancel)\nand [destructive](Titanium.UI.OptionDialog.destructive) on a `<Option/>` tag.\n\noptiondialog.xml:\n``` xml\n<Alloy>\n    <Window id="win" onClick="showOptions" title="Click window to test"\n        fullscreen="false" onExit="true" backgroundColor="white">\n\n        \x3c!--\n            The OptionDialog tag declares an option dialog,\n            which will need to be opened by the controller.\n        --\x3e\n        <OptionDialog id="dialog" title="Delete File?">\n\n            \x3c!-- The Options tag sets the options property. --\x3e\n            <Options>\n                <Option destructive="true">Confirm</Option>\n                <Option platform="ios">Help</Option>\n                <Option cancel="true">Cancel</Option>\n            </Options>\n\n            \x3c!-- The ButtonNames tag sets the Android-only buttonNames property. --\x3e\n            <ButtonNames>\n                <ButtonName>Help</ButtonName>\n            </ButtonNames>\n\n            \x3c!-- Add a View for the androidView property here. --\x3e\n\n        </OptionDialog>\n\n        \x3c!-- Add views here --\x3e\n\n    </Window>\n</Alloy>\n')])])]),a("p",[t._v("optiondialog.js:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ApiDocs")],1)}),[],!1,null,null,null);n.default=s.exports},462:function(t,n,e){t.exports=e.p+"assets/img/optiondialog_android.f1373777.png"},463:function(t,n,e){t.exports=e.p+"assets/img/optiondialog_iphone.8d95bd4d.png"},464:function(t,n){t.exports="data:image/png;base64,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"}}]);