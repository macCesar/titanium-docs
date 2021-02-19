(window.webpackJsonp=window.webpackJsonp||[]).push([[1015],{1226:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"android-hyperloop-programming-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-hyperloop-programming-guide"}},[t._v("#")]),t._v(" Android Hyperloop Programming Guide")]),t._v(" "),s("p",[t._v("This document provides information on Android Hyperloop requirements, classes, instantiation, methods and fields, casting, interfaces, creating your own classes, and using 3rd party libraries.")]),t._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),s("h3",{attrs:{id:"software"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[t._v("#")]),t._v(" Software")]),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/Hyperloop_Requirements/#requirements"}},[t._v("Hyperloop Requirements")]),t._v(" for software requirements for using Hyperloop with Android.")],1),t._v(" "),s("h3",{attrs:{id:"configure-tiapp-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-tiapp-xml"}},[t._v("#")]),t._v(" Configure tiapp.xml")]),t._v(" "),s("p",[t._v("Make sure to add the Hyperloop module to the "),s("code",[t._v("<modules>")]),t._v(" section of the "),s("code",[t._v("tiapp.xml")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hyperloop"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classes"}},[t._v("#")]),t._v(" Classes")]),t._v(" "),s("p",[t._v("Classes in Hyperloop map to the underlying classes defined in Java. For example, if you have a class such as "),s("code",[t._v("android.view.View")]),t._v(" defined, you would reference it using a standard require such as:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" View "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.view.View'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This will return the "),s("code",[t._v("View")]),t._v(" class object (it’s not an instance of a "),s("code",[t._v("View")]),t._v(", but the "),s("code",[t._v("View")]),t._v(" class itself).")]),t._v(" "),s("p",[t._v("Once you have the Class reference returned from "),s("code",[t._v("require")]),t._v(", you can call normal JavaScript property and functions against it. Remember, at this point calling functions or properties against the class object above will be accessing Class level (static) Java methods (not instance level).")]),t._v(" "),s("p",[t._v("For example, you could get the generated view id of the "),s("code",[t._v("View")]),t._v(" using the example:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" generatedId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" View"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateViewId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This is because "),s("code",[t._v("generateViewId")]),t._v(" is defined as a static method.")]),t._v(" "),s("h2",{attrs:{id:"instantiation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instantiation"}},[t._v("#")]),t._v(" Instantiation")]),t._v(" "),s("p",[t._v("Please refer to our "),s("a",{attrs:{href:"https://github.com/appcelerator/hyperloop-examples/tree/master/app",target:"_blank",rel:"noopener noreferrer"}},[t._v("hyperloop-examples app"),s("OutboundLink")],1),t._v(" in those code-level examples. For example, to use a "),s("code",[t._v("View")]),t._v(", the activity needs to be set:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" activity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Activity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentActivity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("See "),s("a",{attrs:{href:"https://github.com/appcelerator/hyperloop-examples/blob/master/app/controllers/android/animateview.js#L10",target:"_blank",rel:"noopener noreferrer"}},[t._v("animateview.js (Github)"),s("OutboundLink")],1),t._v(" for an working sample.")]),t._v(" "),s("h2",{attrs:{id:"methods-and-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods-and-fields"}},[t._v("#")]),t._v(" Methods and fields")]),t._v(" "),s("p",[t._v("Methods in Java are mapped to JavaScript functions. Fields in Java are mapped to JavaScript property accessors. Static methods or fields (such as constants) will be attached to the class type. For example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('public class Example {\n  public int field;\n  public static final String staticString = "";\n  public void method(int argument);\n  public static boolean staticMethod();\n}\n')])])]),s("p",[t._v("Would map to the following in JavaScript:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("staticString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("567")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("staticMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"method-resolution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method-resolution"}},[t._v("#")]),t._v(" Method resolution")]),t._v(" "),s("p",[t._v("If a class has overloads for a method (multiple forms of the method with different signatures, but the same name), Hyperloop will attempt to match the correct method to invoke on the Java side by matching the passed in arguments to the closest match. Typically, this involves matching the name, number of arguments and the ability to convert the passed in arguments (in-order) to the method’s parameter types. Hyperloop is slightly more liberal in accepting numeric primitives than typical method resolution due to the conversion of JavaScript Numbers.")]),t._v(" "),s("h2",{attrs:{id:"casting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#casting"}},[t._v("#")]),t._v(" Casting")]),t._v(" "),s("p",[t._v("Sometimes, interfaces define generic return types such as "),s("code",[t._v("Object")]),t._v(" and you will need to cast them to a different type to then reference methods and properties of the class. You can pass along the object you want to wrap to the constructor of the type you want to wrap it in. For example, suppose the result of the function returned an "),s("code",[t._v("Object")]),t._v(" but you know the implementation is actually a "),s("code",[t._v("View")]),t._v(". You could use the following:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// call View instance methods on view variable")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Be careful with casting")]),t._v(": If you cast an object which is actually something different, you will experience an error and likely a crash.")]),t._v(" "),s("p",[t._v("You can also cast a Titanium UI Component into its equivalent. For example:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tiView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" backgroundColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nativeView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tiView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X (relative to parent): '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nativeView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLeft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[t._v("#")]),t._v(" Interfaces")]),t._v(" "),s("p",[t._v("Interfaces may be implemented using a Javascript syntax similar to an anonymous Java class. Call the constructor of the interface type with a JavaScript object that contains properties that match the interface method names, and corresponding values as function that implement them. For example, to create an instance that implements "),s("code",[t._v("android.view.View.OnTouchListener")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" OnTouchListener "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.view.View.OnTouchListener'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" listener "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnTouchListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onTouch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do some work here")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"creating-your-own-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-own-classes"}},[t._v("#")]),t._v(" Creating your own classes")]),t._v(" "),s("p",[t._v('Hyperloop provides you the ability to dynamically create your own Java classes at runtime. Once created, these classes can be used as normal in either Hyperloop or passed to native calls. Hyperloop generates the custom subclass using the "extend" function of the type we want to extend, which takes a single JavaScript Object as an argument containing the overriding method implementations (same as we did for interface implementations). The returned value is a new class type that subclasses the extended type. We can then use the constructor to generate instances of that subclass.')]),t._v(" "),s("p",[t._v("Let's create a simple custom subclass of "),s("code",[t._v("android.view.View")]),t._v(", and instantiate an instance of it:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Activity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.app.Activity'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    activity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Activity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentActivity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    View "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.view.View'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" MyView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("View"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onDraw")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("canvas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("super"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDraw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// implementation here")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" customView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("activity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add your custom view to the content...")]),t._v("\n")])])]),s("p",[t._v("This will create a new class in the Java runtime which will extend "),s("code",[t._v("android.view.View")]),t._v(" which is equivalent to the following code (though please note that we do "),s("em",[t._v("not")]),t._v(" generate Java source, but instead generate Dalvik bytecode that gets loaded into the runtime as a class):")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class MyView extends android.view.View {\n    protected void onDraw(Canvas canvas) {\n      // implementation here\n    }\n}\n")])])]),s("h2",{attrs:{id:"accessing-native-xml-layouts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-native-xml-layouts"}},[t._v("#")]),t._v(" Accessing native XML Layouts")]),t._v(" "),s("p",[t._v("In native Android development, you have many situations where you are inflating native XML layouts in your source-code. In Hyperloop, you can do the same with just a few lines of code:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Activity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.app.Activity'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.content.Context'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Inflater "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.view.LayoutInflater'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    activity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Activity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentActivity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Load the layout inflater")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inflater "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Inflater"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("activity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSystemService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LAYOUT_INFLATER_SERVICE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Load the "main_content.xml" from [app]/platform/android/res/layout/')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This can also be used for other kind of resources, like images, colors and values")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" resId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" activity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIdentifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main_content'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'layout'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" activity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPackageName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" inflater"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inflate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Add "view" your Titanium view here ...')]),t._v("\n")])])]),s("p",[t._v("Learn more about a native XML layouts in our "),s("a",{attrs:{href:"https://github.com/appcelerator/hyperloop-examples/blob/master/app/controllers/android/nativelayout.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Native Layout Example"),s("OutboundLink")],1),t._v(" as part of the "),s("a",{attrs:{href:"https://github.com/appcelerator/hyperloop-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hyperloop Examples"),s("OutboundLink")],1),t._v(" app.")]),t._v(" "),s("h2",{attrs:{id:"using-3rd-party-libraries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-3rd-party-libraries"}},[t._v("#")]),t._v(" Using 3rd party libraries")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("As of Titanium 9.0.0, you can no longer use Google's deprecated Support libraries. You must use the AndroidX libraries instead.")])]),t._v(" "),s("h3",{attrs:{id:"gradle-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-dependencies"}},[t._v("#")]),t._v(" Gradle Dependencies")]),t._v(" "),s("p",[t._v("As of Titanium 9.0.0, Hyperloop can reference libraries via gradle by adding a "),s("code",[t._v("build.gradle")]),t._v(" file to the "),s("code",[t._v("platform/android")]),t._v(" (Classic) or "),s("code",[t._v("app/platform/android")]),t._v(" (Alloy) folder of your app. This is the preferred way of adding library dependencies.")]),t._v(" "),s("p",[t._v("An example can be found here: "),s("a",{attrs:{href:"https://github.com/appcelerator/hyperloop-examples/blob/master/app/platform/android/build.gradle",target:"_blank",rel:"noopener noreferrer"}},[t._v("hyperloop-examples - /app/platform/android/build.gradle"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The below is an example "),s("code",[t._v("build.gradle")]),t._v(' file which provides access to the Google "Material Components" library.')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("dependencies {\n    implementation 'com.google.android.material:material:1.1.0'\n}\n")])])]),s("h3",{attrs:{id:"local-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-dependencies"}},[t._v("#")]),t._v(" Local Dependencies")]),t._v(" "),s("p",[t._v("You can add 3rd party library files such as JARs and AARs directly to Hyperloop.")]),t._v(" "),s("p",[t._v("Place the "),s("strong",[t._v("JAR")]),t._v(" and "),s("strong",[t._v("AAR")]),t._v(" files into the "),s("code",[t._v("platform/android")]),t._v(" (Classic) or "),s("code",[t._v("app/platform/android")]),t._v(" (Alloy) folder of your app. Hyperloop will load the Java classes from these libraries and generate the necessary bindings. All Java classes within the JARs and AARs will be merged into your app. For AARs, the build system will also extract its resource files, assets, *.so libraries, and merge its "),s("code",[t._v("AndroidManfiest.xml")]),t._v(" into your app.")]),t._v(" "),s("h3",{attrs:{id:"third-party-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#third-party-examples"}},[t._v("#")]),t._v(" Third-party Examples")]),t._v(" "),s("p",[t._v("Make sure to check out more Android third-party libraries (like Localytics, SSDP, Shimmer) in our "),s("a",{attrs:{href:"https://github.com/appcelerator/hyperloop-examples/tree/master/app/controllers/android/libraries",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hyperloop Sample App"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);