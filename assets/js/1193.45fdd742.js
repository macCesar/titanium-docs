(window.webpackJsonp=window.webpackJsonp||[]).push([[1193],{2890:function(e,t,a){"use strict";a.r(t);var s=a(21),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sample-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-actions"}},[e._v("#")]),e._v(" Sample Actions")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("The examples in this page use the "),a("em",[a("strong",[e._v("Prototype")])]),e._v(" library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("These set of actions can retrieve a list of available "),a("em",[e._v("Sample")]),e._v(" projects, and import a specific sample into the workspace.\nSamples are contributed to the Studio via extensions, or via the scripting mechanism ("),a("em",[e._v("Rubles")]),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"invocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invocation"}},[e._v("#")]),e._v(" Invocation")]),e._v(" "),a("p",[e._v("This command is executed immediately in a synchronous way.")]),e._v(" "),a("h2",{attrs:{id:"list-the-available-samples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-the-available-samples"}},[e._v("#")]),e._v(" List the available Samples")]),e._v(" "),a("p",[e._v("To get the JSON list of samples, "),a("em",[e._v("dispatch")]),e._v(" this call:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("samples = dispatch($H({\n  controller: 'portal.samples',\n  action: \"getSamples\"\n}).toJSON()).evalJSON();\n")])])]),a("p",[e._v("The returned JSON holds this information:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("key")]),e._v(" "),a("th",[e._v("description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("category")]),e._v(" "),a("td",[e._v("The sample's category")])]),e._v(" "),a("tr",[a("td",[e._v("name")]),e._v(" "),a("td",[e._v("The name of the sample")])]),e._v(" "),a("tr",[a("td",[e._v("id")]),e._v(" "),a("td",[e._v("A unique sample identifier which should also be used when importing a sample")])]),e._v(" "),a("tr",[a("td",[e._v("description")]),e._v(" "),a("td",[e._v("A description of the sample")])]),e._v(" "),a("tr",[a("td",[e._v("image")]),e._v(" "),a("td",[e._v("(currently empty for all samples) Will hold an image URL for the sample")])])])]),e._v(" "),a("h2",{attrs:{id:"import-a-sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-a-sample"}},[e._v("#")]),e._v(" Import a Sample")]),e._v(" "),a("p",[e._v("When importing a sample, the "),a("em",[e._v("dispatch")]),e._v(" call should use a "),a("em",[e._v("sample id")]),e._v(" that was retrieved via the "),a("em",[e._v("getSamples")]),e._v(" action.\nHere is a "),a("em",[e._v("dispatch")]),e._v(" example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dispatch($H({\n  controller: 'portal.samples',\n  action: \"importSample\",\n  args: [sampleID].toJSON()\n}).toJSON());\n")])])]),a("h2",{attrs:{id:"listening-to-sample-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listening-to-sample-changes"}},[e._v("#")]),e._v(" Listening to Sample Changes")]),e._v(" "),a("p",[e._v("It is possible that some of the samples are loaded or removed after the portal is opened. In this case, the Studio fires events that indicate a Sample addition or removal.\nHere is a sample of a way you can listen to such events (based on the "),a("a",{attrs:{href:"https://github.com/aptana/studio3-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("studio3-sdk"),a("OutboundLink")],1),e._v(" sample):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("eventsDispatcher.addObserver('samples', function(e) { portal.samples.update(e); });\n")])])]),a("p",[e._v("The "),a("em",[e._v("update")]),e._v(" call receives an event object that holds the following information, and can be used to update the UI:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("key")]),e._v(" "),a("th",[e._v("value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("event")]),e._v(" "),a("td",[e._v("The event identifier (in this case, always 'samples')")])]),e._v(" "),a("tr",[a("td",[e._v("eventType")]),e._v(" "),a("td",[e._v("'added' or 'deleted'")])]),e._v(" "),a("tr",[a("td",[e._v("data")]),e._v(" "),a("td",[e._v("A JSON representation of the Sample-Info (as described above)")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);