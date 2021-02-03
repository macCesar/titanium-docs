(window.webpackJsonp=window.webpackJsonp||[]).push([[883],{2081:function(e,t,i){"use strict";i.r(t);var a=i(21),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"modifying-editor-preferences"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#modifying-editor-preferences"}},[e._v("#")]),e._v(" Modifying editor preferences")]),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("This page describes how to modify or customize some editor settings in Studio. Some editor settings can be modified in preferences and can be further modified by editing a Ruble. Follow the directions below to customize settings further.")]),e._v(" "),i("h2",{attrs:{id:"smart-typing-pairs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#smart-typing-pairs"}},[e._v("#")]),e._v(" Smart Typing Pairs")]),e._v(" "),i("p",[e._v("Smart typing pairs is when you type a character such as ' or (, and it auto-inserts the matching ' or ).")]),e._v(" "),i("h3",{attrs:{id:"modifying-the-built-in-bundles"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#modifying-the-built-in-bundles"}},[e._v("#")]),e._v(" Modifying the Built-In Bundles")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Find the bundle that represents the editor you are interested in. If it's an HTML-based editor (like PHP), you'll want to edit the HTML ruble.")])]),e._v(" "),i("li",[i("p",[e._v("Select the menu item "),i("strong",[e._v("Commands > Bundle Name > Edit this Bundle")]),e._v(". It will create a project in your workspace with the contents of that bundle.")])]),e._v(" "),i("li",[i("p",[e._v("Open up the bundle project, and find the "),i("strong",[e._v("bundle.rb")]),e._v(" file.")])]),e._v(" "),i("li",[i("p",[e._v("Edit (or add) the "),i("strong",[e._v("smart_typing_pairs")]),e._v(" section.")])]),e._v(" "),i("li",[i("p",[e._v("Save the file. Your new settings should be in effect.")])])]),e._v(" "),i("h3",{attrs:{id:"example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),i("p",[e._v("As an example, we remove the auto-character insertion of quotes in the HTML/PHP editors, but leave parens and braces alone.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('Select menu "Commands > HTML > Edit this bundle."')])]),e._v(" "),i("li",[i("p",[e._v("Open the file HTML / bundle.rb. searching for the following:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("smart_typing_pairs[\"text.html meta.tag - punctuation.definition.tag.begin\"] = ['\"', '\"', '(', ')', '{', '}', '[', ']', \"'\", \"'\"]\n   ...\n")])])])]),e._v(" "),i("li",[i("p",[e._v("Edit the smart_typing_pairs property to use the new key command to the following:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("smart_typing_pairs[\"text.html meta.tag - punctuation.definition.tag.begin\"] = ['(', ')', '{', '}', '[', ']']\n   ...\n")])])])]),e._v(" "),i("li",[i("p",[e._v("Save the file. The update should work as expected.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);