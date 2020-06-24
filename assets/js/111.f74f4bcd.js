(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{3e3:function(t,e,a){"use strict";a.r(e);var s=a(21),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pydev-code-analysis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pydev-code-analysis"}},[t._v("#")]),t._v(" PyDev Code Analysis")]),t._v(" "),s("h2",{attrs:{id:"pydev-code-analysis-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pydev-code-analysis-2"}},[t._v("#")]),t._v(" PyDev Code Analysis")]),t._v(" "),s("p",[t._v("Code analysis provides error finding in python programs. It finds common errors such as undefined tokens, duplicated signatures, and warns about things such as unused variables or unused imports.")]),t._v(" "),s("p",[s("strong",[t._v("PyDev")]),t._v(" can currently find:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Undefined variables")])]),t._v(" "),s("li",[s("p",[t._v("Undefined variable from import")])]),t._v(" "),s("li",[s("p",[t._v("Unused variables")])]),t._v(" "),s("li",[s("p",[t._v("Unused imports")])]),t._v(" "),s("li",[s("p",[t._v("Unused wild imports")])]),t._v(" "),s("li",[s("p",[t._v("Duplicated signatures")])]),t._v(" "),s("li",[s("p",[t._v("Import redefinition")])]),t._v(" "),s("li",[s("p",[t._v("Unresolved imports")])]),t._v(" "),s("li",[s("p",[t._v("No 'self' token declared in a class method")])]),t._v(" "),s("li",[s("p",[t._v("Mixing indentation with tabs and spaces")])]),t._v(" "),s("li",[s("p",[t._v("Bad indentation (incorrect number of spaces when indenting).")])])]),t._v(" "),s("p",[s("strong",[t._v("Advantages")]),t._v(" of the "),s("strong",[t._v("PyDev Code Analysis")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("It can analyze your modules "),s("strong",[t._v("while you are coding")]),t._v(", and not just when you have the module saved in your disk.")])]),t._v(" "),s("li",[s("p",[t._v("It is "),s("strong",[t._v("'very' fast")]),t._v(" when compared to current alternatives.")])])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("You may still configure PyDev to analyze your code only when you save a file if you want.")])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("You have to disable PyLint manually if you don't want to use it anymore.")])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("If you want information on how to configure PyLint, you can check "),s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Features/PyDev_PyLint/"}},[t._v("PyDev PyLint")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"configuring-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-it"}},[t._v("#")]),t._v(" Configuring it")]),t._v(" "),s("p",[t._v("PyDev allows you to tweak-around the code analysis settings to suit your coding-style. To do that, go to: window > preferences > PyDev > Code Analysis. The image below shows it...")]),t._v(" "),s("p",[s("img",{attrs:{src:a(694),alt:"analysis_prefs"}})]),t._v(" "),s("p",[t._v("Its options should be self-explanatory, so, if you have some doubt, please drop a note in the PyDev forum.")]),t._v(" "),s("h2",{attrs:{id:"seeing-the-output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seeing-the-output"}},[t._v("#")]),t._v(" Seeing the output")]),t._v(" "),s("p",[t._v("The output is shown as error markers in the editor itself (you may hover over it to see the description).")]),t._v(" "),s("p",[s("img",{attrs:{src:a(695),alt:"code_analysis1"}})]),t._v(" "),s("p",[t._v("You may also view the output in the 'problems view':")]),t._v(" "),s("p",[s("img",{attrs:{src:a(696),alt:"code_analysis_problems"}})]),t._v(" "),s("h2",{attrs:{id:"important-notes-to-effectively-use-code-analysis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#important-notes-to-effectively-use-code-analysis"}},[t._v("#")]),t._v(" Important notes to effectively use code-analysis")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),s("p",[t._v("The undefined variable errors produced are used as an input for a "),s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Features/PyDev_Content_Assistants/"}},[t._v("content assistant")]),t._v(" that allows you to fix it. Check the "),s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Features/PyDev_Content_Assistants/"}},[t._v("PyDev Content Assistants")]),t._v(" page for more information on that (it also explains how you can give 'notes' to the code analysis so that it ignores some error or warning).")],1)]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),s("p",[t._v("You are advised to leave the 'auto-build' turned on (in the menu: "),s("strong",[t._v("project > build automatically")]),t._v("). If you, however, want to leave it off, you have to remember to make a build when you want your changes analyzed.")])]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),s("p",[t._v("When you change the interpreter or change your python path, your files are not automatically analyzed. If you want them analyzed after that, you have to manually do a 'clear' on the projects you want to be analyzed (in the menu: "),s("strong",[t._v("project > clean...")]),t._v(").")])]),t._v(" "),s("h2",{attrs:{id:"passing-info-to-code-analysis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#passing-info-to-code-analysis"}},[t._v("#")]),t._v(" Passing info to code-analysis")]),t._v(" "),s("p",[t._v("Currently, code-analysis does lots of analysis so that invalid signs are not raised, but some signs are nearly impossible to detect when doing static analysis, so, in some cases, some flags may be added to the code to give more info to the code-analysis and make it behave better.")]),t._v(" "),s("p",[t._v("Currently, the supported flags are:")]),t._v(" "),s("p",[s("strong",[t._v("Flag: @DynamicAttrs")]),t._v(" "),s("strong",[t._v("Location:")]),t._v(" Should be added anywhere within a class docstring\n"),s("strong",[t._v("Description:")]),t._v(" Used to indicate that a class has dynamic attributes (so, code analysis won't complain about undefined variables when accessing any attribute from that class.")]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class Struct:\n    '''Attributes passed in constructor.\n    *@DynamicAttrs*\n    '''\n    def __init__(self, *entries):\n        self.__dict__.update(entries)\n")])])])])}),[],!1,null,null,null);e.default=o.exports},694:function(t,e,a){t.exports=a.p+"assets/img/analysis_prefs.5279b265.png"},695:function(t,e,a){t.exports=a.p+"assets/img/code_analysis1.cb91a5f0.png"},696:function(t,e,a){t.exports=a.p+"assets/img/code_analysis_problems.cb25b330.png"}}]);