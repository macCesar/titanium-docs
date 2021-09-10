(window.webpackJsonp=window.webpackJsonp||[]).push([[942],{1922:function(e,t,s){"use strict";s.r(t);var a=s(21),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"documenting-your-code-using-scriptdoc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documenting-your-code-using-scriptdoc"}},[e._v("#")]),e._v(" Documenting Your Code Using ScriptDoc")]),e._v(" "),s("p",[e._v("Using Studio's ScriptDoc system to document your code enables Content Assist to work for your code in addition to built-in support the core JavaScript language. This page gives some of the guidelines to think about when adding ScriptDoc blocks to your code.")]),e._v(" "),s("p",[e._v("A "),s("a",{attrs:{href:"http://www.scribd.com/doc/10040039/ScriptDoc-Cheatsheet-v01",target:"_blank",rel:"noopener noreferrer"}},[e._v("nice one-page cheat sheet"),s("OutboundLink")],1),e._v(" for ScriptDoc on Scribd is posted.")]),e._v(" "),s("h2",{attrs:{id:"basic-instructions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-instructions"}},[e._v("#")]),e._v(" Basic Instructions")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Add a documentation block immediately before each function or class. The ScriptDoc parser automatically associates the documentation block with the function or class following it.")])]),e._v(" "),s("li",[s("p",[e._v("Enclose each documentation block within a slash-asterisk-asterisk")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("(/**)\n")])])])]),e._v(" "),s("p",[e._v("and asterisk-slash")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("(*/)\n")])])])]),e._v(" "),s("p",[e._v("comment set.")])]),e._v(" "),s("li",[s("p",[e._v("The first line in the block, except for file overviews, should be a short description of the function or class.")])]),e._v(" "),s("li",[s("p",[e._v("After the description, add "),s("a",{attrs:{href:"#undefined"}},[e._v("tags")]),e._v(" that explain the function, including a description, what parameters it takes, and its return type. You can also use the "),s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/ScriptDoc_tag_quick_reference/"}},[e._v("ScriptDoc tag quick reference")]),e._v(" to quickly lookup a tag once you are familiar with the syntax for each tag.")],1)])]),e._v(" "),s("h2",{attrs:{id:"example-a-basic-documentation-block-for-a-getfoo-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-a-basic-documentation-block-for-a-getfoo-function"}},[e._v("#")]),e._v(" Example: A basic documentation block for a getFoo() function")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * Gets the current foo\n * @param {String} fooId  The unique identifier for the foo.\n * @return {Object}          Returns the current foo.\n */")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getFoo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("fooID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h2",{attrs:{id:"ordering-your-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ordering-your-tags"}},[e._v("#")]),e._v(" Ordering your tags")]),e._v(" "),s("p",[e._v("Add your tags in the following order, as appropriate:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("@classDescription (constructors only)")])]),e._v(" "),s("li",[s("p",[e._v("@param (classes, interfaces, functions, and constructors only)")])]),e._v(" "),s("li",[s("p",[e._v("@return (functions only)")])]),e._v(" "),s("li",[s("p",[e._v("@type (functions only)")])]),e._v(" "),s("li",[s("p",[e._v("@author (classes and interfaces only, required)")])]),e._v(" "),s("li",[s("p",[e._v("@version (classes and interfaces only, required)")])]),e._v(" "),s("li",[s("p",[e._v("@see")])]),e._v(" "),s("li",[s("p",[e._v("@since")])]),e._v(" "),s("li",[s("p",[e._v("@deprecated")])])]),e._v(" "),s("h2",{attrs:{id:"guidelines-for-ordering-multiple-versions-of-the-same-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guidelines-for-ordering-multiple-versions-of-the-same-tag"}},[e._v("#")]),e._v(" Guidelines for ordering multiple versions of the same tag")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("@author - List @author tags chronologically, starting with the author who created the file or function.")])]),e._v(" "),s("li",[s("p",[e._v("@param - List @param tags in argument declaration order.")])]),e._v(" "),s("li",[s("p",[e._v("@see - List @see tags from nearest to furthest access, shown below:")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("@see #Constructor(Type, Type...)\n @see #Constructor(Type id, Type id...)\n @see #method(Type, Type,...)\n @see #method(Type id, Type, id...)\n @see Class\n @see Class#field\n @see Class#Constructor(Type, Type...)\n @see Class#Constructor(Type id, Type id)\n @see Class#method(Type, Type,...)\n @see Class#method(Type id, Type id,...)\n @see package.Class\n @see package.Class#field\n @see package.Class#Constructor(Type, Type...)\n @see package.Class#Constructor(Type id, Type id)\n @see package.Class#method(Type, Type,...)\n @see package.Class#method(Type id, Type, id)\n @see package\n")])])]),s("h2",{attrs:{id:"related-topics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[e._v("#")]),e._v(" Related Topics")]),e._v(" "),s("ul",[s("li",[s("p",[s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Content_Assist/About_Content_Assist/"}},[e._v("About Content Assist")])],1)]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"#undefined"}},[e._v("ScriptDoc (SDOC) 2.0 Specification")])])]),e._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/ScriptDoc_tag_quick_reference/"}},[e._v("ScriptDoc tag quick reference")])],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);