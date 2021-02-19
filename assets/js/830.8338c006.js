(window.webpackJsonp=window.webpackJsonp||[]).push([[830],{1978:function(t,e,s){"use strict";s.r(e);var o=s(21),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"build-configuration-file-alloy-jmk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-configuration-file-alloy-jmk"}},[t._v("#")]),t._v(" Build Configuration File (alloy.jmk)")]),t._v(" "),s("p",[t._v("Alloy provides hooks to customize the compilation process using a special JavaScript file called a JS Makefile (JMK). The file needs to be named "),s("code",[t._v("alloy.jmk")]),t._v(" and located in the project's "),s("code",[t._v("app")]),t._v(" directory. This file can be used for common administration tasks or to fine tune the build process. It will be loaded automatically by the Alloy command line during compilation.")]),t._v(" "),s("p",[t._v("Example of a JMK file:")]),t._v(" "),s("p",[s("strong",[t._v("alloy.jmk")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pre:compile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showTimestamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'building project at '")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post:compile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compile finished!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("To customize the build process, call the task function with the event name and provide a function callback, which will be called when the event is triggered by the compiler.")]),t._v(" "),s("p",[t._v("These are the event names (or compiler tasks):")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("pre:load:")]),t._v(" called after the project is cleaned and before copying any assets to the "),s("code",[t._v("Resources")]),t._v(" folder.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("pre:compile")]),t._v(": called before the compiler starts.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("post:compile")]),t._v(": called after the compiler finishes but before it exits.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("compile:app.js")]),t._v(": called just after the compilation of the main "),s("code",[t._v("app.js")]),t._v(" file but before the code is written to disk.")])])]),t._v(" "),s("p",[t._v("The function callback provides two arguments: "),s("code",[t._v("event")]),t._v(" and "),s("code",[t._v("logger")]),t._v(".")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("event")]),t._v(" object provides a set of objects and values which may be useful for building tasks:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Object/Value")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("adapters  "),s("br"),t._v("(Array)")]),t._v(" "),s("td",[t._v("List of adapters.")])]),t._v(" "),s("tr",[s("td",[t._v("alloyConfig  "),s("br"),t._v("(Object)")]),t._v(" "),s("td",[t._v("Contains Alloy compiler configuration information."),s("br"),s("br"),t._v("* "),s("strong",[t._v("platform")]),t._v(" : either "),s("code",[t._v("android")]),t._v(", "),s("code",[t._v("ios")]),t._v(" or "),s("code",[t._v("windows")]),t._v("."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("file")]),t._v(": file to target for selective compilation."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("deploytype")]),t._v(" : compilation environment type: either development, test or production."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("beautify")]),t._v(" : if set to "),s("code",[t._v("true")]),t._v(", the output from UglifyJS will be beautified.")])]),t._v(" "),s("tr",[s("td",[t._v("autoStyle  "),s("br"),t._v("(Boolean)")]),t._v(" "),s("td",[t._v("If set to "),s("code",[t._v("true")]),t._v(", autostyle is enabled for the entire project.")])]),t._v(" "),s("tr",[s("td",[t._v("dependencies  "),s("br"),t._v("(Object)")]),t._v(" "),s("td",[t._v("Value of the "),s("code",[t._v("dependencies")]),t._v(" key in the "),s("code",[t._v("config.json")]),t._v(" file.")])]),t._v(" "),s("tr",[s("td",[t._v("dir  "),s("br"),t._v("(Object)")]),t._v(" "),s("td",[t._v("Contains directory paths to various resources."),s("br"),s("br"),t._v("* "),s("strong",[t._v("home")]),t._v(" : absolute path to the Alloy project's "),s("code",[t._v("app")]),t._v(" directory."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("project")]),t._v(" : absolute path to the Alloy project's root directory."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("resources")]),t._v(" : absolute path to the Alloy project's "),s("code",[t._v("Resource")]),t._v(" directory."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("resourcesAlloy")]),t._v(" : absolute path to the Alloy project's "),s("code",[t._v("Resource/alloy")]),t._v(" directory."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("assets")]),t._v(" : absolute path to the Alloy project's assets."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("config")]),t._v(" : absolute path to the Alloy project's config."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("controllers")]),t._v(" : absolute path to the Alloy project's controllers."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("migrations")]),t._v(" : absolute path to the Alloy project's migrations."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("models")]),t._v(" : absolute path to the Alloy project's models."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("styles")]),t._v(" : absolute path to the Alloy project's styles."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("themes")]),t._v(" : absolute path to the Alloy project's themes."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("views")]),t._v(" : absolute path to the Alloy project's views."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("widgets")]),t._v(" : absolute path to the Alloy project's widgets."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("builtins")]),t._v(" : absolute path to the Alloy tool builtins."),s("br"),t._v(" "),s("br"),t._v("* "),s("strong",[t._v("template")]),t._v(" : absolute path to the Alloy tool templates.")])]),t._v(" "),s("tr",[s("td",[t._v("sourcemap  "),s("br"),t._v("(Boolean)")]),t._v(" "),s("td",[t._v("If "),s("code",[t._v("true")]),t._v(", generates the source mapping files for use with the Studio debugger and other functions.  "),s("br"),t._v("These files maps the generated Titanium files in the "),s("code",[t._v("Resources")]),t._v(" directory to the ones in the "),s("code",[t._v("app")]),t._v(" directory.")])]),t._v(" "),s("tr",[s("td",[t._v("theme  "),s("br"),t._v("(String)")]),t._v(" "),s("td",[t._v("Name of the theme being used.")])]),t._v(" "),s("tr",[s("td",[t._v("code  "),s("br"),t._v("(String)")]),t._v(" "),s("td",[s("strong",[t._v("Only present for the "),s("code",[t._v("compile:app.js")]),t._v(" task.")]),t._v(" Contains the contents of the "),s("code",[t._v("app.js")]),t._v(" file.")])]),t._v(" "),s("tr",[s("td",[t._v("appJSFile  "),s("br"),t._v("(String)")]),t._v(" "),s("td",[s("strong",[t._v("Only present for the "),s("code",[t._v("compile:app.js")]),t._v(" task.")]),t._v(" Contains the the absolute path to the "),s("code",[t._v("app.js")]),t._v(" file.")])])])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("logger")]),t._v(" object provides a reference to the logger, which defines the following methods and properties:")]),t._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("p",[s("strong",[t._v("DEBUG")]),t._v(": Number READONLY\nOutput all log messages.")]),t._v(" "),s("p",[s("strong",[t._v("INFO")]),t._v(": Number READONLY\nOutput all log messages except debug messages.")]),t._v(" "),s("p",[s("strong",[t._v("WARN")]),t._v(": Number READONLY\nOutput only warning and error log messages.")]),t._v(" "),s("p",[s("strong",[t._v("ERROR")]),t._v(": Number READONLY\nOutput only error log messages.")]),t._v(" "),s("p",[s("strong",[t._v("NONE")]),t._v(": Number READONLY\nDisable log messages.")]),t._v(" "),s("p",[s("strong",[t._v("logLevel")]),t._v(": Number\nSets which log messages to output.")]),t._v(" "),s("p",[s("strong",[t._v("showTimestamp")]),t._v(": Boolean\nIf true, outputs timestamp with the log messages.")]),t._v(" "),s("p",[s("strong",[t._v("stripColors")]),t._v(": Boolean\nIf true, suppresses color output.")]),t._v(" "),s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),s("p",[s("strong",[t._v("debug (String msg)")]),t._v("\nOutputs a debug log message.")]),t._v(" "),s("p",[t._v("Parameters:")]),t._v(" "),s("ul",[s("li",[t._v("msg : String\nMessage to output.")])]),t._v(" "),s("p",[t._v("Returns:")]),t._v(" "),s("ul",[s("li",[t._v("void")])]),t._v(" "),s("p",[s("strong",[t._v("info (String msg)")]),t._v("\nOutputs an info log message.")]),t._v(" "),s("p",[t._v("Parameters:")]),t._v(" "),s("ul",[s("li",[t._v("msg : String\nMessage to output.")])]),t._v(" "),s("p",[t._v("Returns:")]),t._v(" "),s("ul",[s("li",[t._v("void")])]),t._v(" "),s("p",[s("strong",[t._v("warn (String msg)")]),t._v("\nOutputs a warning log message.")]),t._v(" "),s("p",[t._v("Parameters:")]),t._v(" "),s("ul",[s("li",[t._v("msg : String\nMessage to output.")])]),t._v(" "),s("p",[t._v("Returns:")]),t._v(" "),s("ul",[s("li",[t._v("void")])]),t._v(" "),s("p",[s("strong",[t._v("error (String msg)")]),t._v("\nOutputs an error log message.")]),t._v(" "),s("p",[t._v("Parameters:")]),t._v(" "),s("ul",[s("li",[t._v("msg : String\nMessage to output.")])]),t._v(" "),s("p",[t._v("Returns:")]),t._v(" "),s("ul",[s("li",[t._v("void")])])])}),[],!1,null,null,null);e.default=r.exports}}]);