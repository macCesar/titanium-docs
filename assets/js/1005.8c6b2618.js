(window.webpackJsonp=window.webpackJsonp||[]).push([[1005],{1596:function(e,t,a){"use strict";a.r(t);var s=a(21),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"app-thinning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-thinning"}},[e._v("#")]),e._v(" App Thinning")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("In iOS, App Thinning helps optimize your application by using:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Slicing")]),e._v(": Use an Asset Catalog to install assets on specific devices")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Bitcode")]),e._v(": Submit partially compiled code that will be optimized by the App Store")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("On-demand resource****s")]),e._v(": Specific assets are stored in the App Store and downloaded by the application when they are needed, and purged by iOS when disk space is low")])])]),e._v(" "),a("p",[e._v("The optimizations help reduce the size of the application when the user installs it and reduces the application's memory footprint.")]),e._v(" "),a("p",[e._v("Titanium SDK only supports Slicing. For details, see the subsections below.")]),e._v(" "),a("p",[e._v("For more information about App Thinning, see "),a("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS Developer Library: App Thinning"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"slicing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slicing"}},[e._v("#")]),e._v(" Slicing")]),e._v(" "),a("p",[e._v("Slicing is used to indicate which assets are supported by which devices, so when a user installs your application, only the necessary assets are included. iOS uses an Asset Catalog to mark images for specific devices.")]),e._v(" "),a("p",[e._v("Icons and launch images are added to the Asset Catalog. Because of this change, you cannot access icons or launch images from the filesystem or an ImageView object.")]),e._v(" "),a("p",[e._v("If enabled, the Titanium SDK automatically adds all PNG and JPEG images to an Asset Catalog. Images that match a specific pattern (e.g. suffix @2x, @3x, etc.) will be grouped into one imageset. If there is no matching suffix, the image would be in an imageset by itself. For details, see "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Working_with_Media_APIs/Images_and_ImageView_APIs/"}},[e._v("Images and ImageView APIs")]),e._v(". Because of this change, you cannot access these images from the filesystem, that is, you cannot access the file using its path or URL with the "),a("code",[e._v("Ti.Filesystem")]),e._v(" API or equivalent.")],1),e._v(" "),a("p",[e._v("By default, slicing is disabled. To enable slicing, add the "),a("code",[e._v("use-app-thinning")]),e._v(" element to the "),a("code",[e._v("iOS")]),e._v(" element in the "),a("code",[e._v("tiapp.xml")]),e._v(" file and set it to true.")]),e._v(" "),a("p",[a("strong",[e._v("tiapp.xml")])]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("ti:")]),e._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("ios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("use-app-thinning")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("use-app-thinning")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("ios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("ti:")]),e._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("h2",{attrs:{id:"bitcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcode"}},[e._v("#")]),e._v(" Bitcode")]),e._v(" "),a("p",[e._v("Bitcode produces an intermediate compiled version of your application which is submitted to iTunes Connect. The App Store will optimize and compile your application for specific architectures and future supported architectures. Using Bitcode, reduces the size of the package sent to iTunes Connect and provides future support for new architectures without having to re-submit your application.")]),e._v(" "),a("p",[e._v("Currently, bitcode is disabled for Titanium because all application frameworks require bitcode to be enabled, including third-party modules.")]),e._v(" "),a("h2",{attrs:{id:"on-demand-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-demand-resources"}},[e._v("#")]),e._v(" On-Demand Resources")]),e._v(" "),a("p",[e._v("On-demand resources are resources, such as large data and sound files, that are tagged by you into groups to be downloaded when the application needs them. The resources are stored and managed by the Apple servers. When the application needs a resource group, it will download it from the Apple servers. If the user's device is low on disk space, the on-demand resources will be purged by iOS.")]),e._v(" "),a("p",[e._v("Currently, the Titanium SDK does not provide a way to tag on-demand resources, but support for the feature is in development ("),a("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-19069",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-19069"),a("OutboundLink")],1),e._v(").")])])}),[],!1,null,null,null);t.default=n.exports}}]);