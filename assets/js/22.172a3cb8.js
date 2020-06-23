(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{307:function(e,t,o){"use strict";o.r(t);var r=o(4),n=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"modules-coremotion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modules-coremotion","aria-hidden":"true"}},[e._v("#")]),e._v(" Modules.CoreMotion")]),e._v(" "),o("TypeHeader"),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("The Core Motion module provides access to Apple's CoreMotion APIs. The Core Motion module provides support\nfor monitoring various hardware sensors on iOS devices, such as the accelerometer, gyroscope, and\nmagnetometer. The Core Motion module allows you to access the metrics provided by these sensors.")]),e._v(" "),o("p",[e._v("For instruction and examples of using the Core Motion Module, see the\n"),o("a",{attrs:{href:"http://docs.appcelerator.com/platform/latest/#!/guide/Core_Motion_Module",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core Motion Module guide"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("This module only works with devices running iOS 7 and later. Not all devices have the same hardware sensors,\nso all features may not be available for all devices. Be sure to use the API to check the device\nfor the existence of a feature.")]),e._v(" "),o("p",[e._v("You can only test the Core Motion module on a device. The Core Motion API cannot be tested on the iOS\nsimulator.")]),e._v(" "),o("p",[e._v('Some features may require permission to use "Motion Activity". iOS requires the user\'s approval to\nuse the "Motion Activity" permission. When the application uses the Core Motion API for the first\ntime, iOS prompts the user to either approve or deny access to the Core Motion features of the\ndevice. The user can change the permission settings with '),o("strong",[e._v("Settings")]),e._v(" > "),o("strong",[e._v("Privacy")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"getting-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),o("p",[e._v("Once you have "),o("a",{attrs:{href:"#!/guide/Using_a_Module"}},[e._v("installed")]),e._v(" the module and added it as a depedency,\nuse "),o("code",[e._v("require()")]),e._v(" to access it from JavaScript:")]),e._v(" "),o("pre",[o("code",[e._v("var CoreMotion = require(\"ti.coremotion\");\n\n// The `CoreMotion` variable is a reference to the Module object.  Use this reference to make\n// subsequent calls to the CoreMotion Module API. The following example shows the step counting\n// API of `CoreMotion`.\n\nvar pedometer = CoreMotion.createPedometer();\n\n// This code checks to see if the device can gather step counting data\nif (pedometer.isStepCountingAvailable()) {\n    // If it can, it starts the step counter and outputs the data to the console\n    pedometer.startPedometerUpdates(function(e) {\n        Ti.API.info(JSON.stringify(e));\n    });\n} else {\n    Ti.API.warn('This device does not support counting steps.');\n}\n")])]),e._v(" "),o("h3",{attrs:{id:"sample-application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sample-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Sample Application")]),e._v(" "),o("p",[e._v("The module ZIP file contains a Core Motion sample applications in "),o("code",[e._v("example/app.js")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"further-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CoreMotion_Reference/_index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS Developer Library: Core Motion Framework Reference"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/motion_event_basics/motion_event_basics.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS Developer Library: Motion Events"),o("OutboundLink")],1)])]),e._v(" "),o("ApiDocs")],1)},[],!1,null,null,null);t.default=n.exports}}]);