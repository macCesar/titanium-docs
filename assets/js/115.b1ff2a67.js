(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{2910:function(t,e,n){"use strict";n.r(e);var o=n(21),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"pydev-running-a-program"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pydev-running-a-program"}},[t._v("#")]),t._v(" PyDev Running a program")]),t._v(" "),o("p",[t._v("Ok, now that you're already up and running, let's "),o("strong",[t._v("run a program from within Eclipse")]),t._v(" with PyDev.")]),t._v(" "),o("p",[t._v("For that, we will extend the module we created in the previous chapter with the following program:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("if __name__ == '__main__':\n    print 'Hello World'\n")])])]),o("p",[t._v("Then, to run the file, you can:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Use a shortcut: "),o("strong",[t._v("F9")]),t._v(" to run based on the project configuration where the module is contained.")])]),t._v(" "),o("li",[o("p",[t._v("Go to the menu: Alt + R + S + The number of the Run you wish (It can be Python, Jython, unit-test, and so forth).")]),t._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),o("p",[t._v("If you were using "),o("strong",[t._v("unit-tests")]),t._v(", you could use: "),o("strong",[t._v("Ctrl+F9")]),t._v(" to run the unit-tests from the module (and even selecting which tests should be run).")])])])]),t._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),o("p",[t._v("External files may be launched, but an associated project must be available. So, a file may be dragged from the filesystem into Eclipse, and later, with the editor open, F9 may be pressed to run the file...It'll still ask for a project to resolve the PYTHONPATH and interpreter to be used (you can probably use any project you have that has the interpreter you want to use for the run or create a PyDev project as 'external_projects' and bind those runs to it).– The configuration created may be changed later on in the menu: Run > Run configurations.")])]),t._v(" "),o("p",[o("img",{attrs:{src:n(822),alt:"menu_run"}}),t._v("\nDoing so, the console should be brought forward with the output of the code (if you had some exception raised, clicking on it would bring you to the code in the stack-trace).")]),t._v(" "),o("p",[t._v("After the first run, if you type "),o("strong",[t._v("Ctrl+F11")]),t._v(", the last file ran re-run. Or, if you type "),o("strong",[t._v("F11")]),t._v(", a debug session is started with your last run. Let's test this...")]),t._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),o("p",[t._v("This behavior changed in Eclipse 3.3 – but it's generally recommended to restore it in the preferences at "),o("strong",[t._v("window > preferences > Run/Debug > Launching")]),t._v(" and set the Launch Operation to "),o("strong",[t._v("Always launch the previously launched application")]),t._v(". This tutorial will always consider this as the default option.")])]),t._v(" "),o("p",[t._v("First, you'll need to add a breakpoint in the \"print 'Hello World'\" line. To do so, go to the line and type "),o("strong",[t._v("Ctrl+F10")]),t._v(" and select 'Add breakpoint', then type "),o("strong",[t._v("F11")]),t._v(". Doing so will trigger you to go to the 'debug perspective'. You should say "),o("strong",[t._v("'yes'")]),t._v(" to this dialog.")]),t._v(" "),o("p",[o("img",{attrs:{src:n(823),alt:"perspective_to_debug"}}),t._v("\nAfter saying yes, you should be brought to the perspective below.")]),t._v(" "),o("p",[o("img",{attrs:{src:n(824),alt:"debug_perspective"}}),t._v("\nIn this perspective, the debug actions are activated and presented to you, so, you can use:")]),t._v(" "),o("p",[o("strong",[t._v("F5")]),t._v(": Step into")]),t._v(" "),o("p",[o("strong",[t._v("F6")]),t._v(": Step over")]),t._v(" "),o("p",[o("strong",[t._v("F7")]),t._v(": Step return")]),t._v(" "),o("p",[o("strong",[t._v("F8")]),t._v(": Resume execution")]),t._v(" "),o("p",[t._v("After the debug session, you can return to the previous perspective by typing "),o("strong",[t._v("'Ctrl+F8'")]),t._v(" (this keybinding iterates through the open perspectives)... And while we are at it, "),o("strong",[t._v("'Ctrl+F7'")]),t._v(" iterates through the views and "),o("strong",[t._v("'Ctrl+F6'")]),t._v(" iterates through the editors.")])])}),[],!1,null,null,null);e.default=s.exports},822:function(t,e,n){t.exports=n.p+"assets/img/menu_run.c8d6c1a6.png"},823:function(t,e,n){t.exports=n.p+"assets/img/perspective_to_debug.fe55a37d.png"},824:function(t,e,n){t.exports=n.p+"assets/img/debug_perspective.2d992889.png"}}]);