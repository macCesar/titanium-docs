(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{1654:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"titanium-blob"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-blob"}},[t._v("#")]),t._v(" Titanium.Blob")]),t._v(" "),s("TypeHeader"),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("Blob")]),t._v(" represents a chunk of binary information, often obtained through\nan "),s("type-link",{attrs:{type:"Titanium.Network.HTTPClient"}},[t._v("HTTPClient")]),t._v(" or by reading a "),s("type-link",{attrs:{type:"Titanium.Filesystem.File"}},[t._v("File")]),t._v(".")],1),t._v(" "),s("p",[t._v("Blobs are often used to store text or image data.\nThe "),s("code",[t._v("Blob")]),t._v(" object includes a number of properties and methods specific to image blobs.")]),t._v(" "),s("p",[t._v("Android supports an "),s("type-link",{attrs:{type:"Titanium.Blob.append"}},[t._v("append")]),t._v(" method, but\notherwise blobs are immutable.")],1),t._v(" "),s("p",[t._v("The "),s("type-link",{attrs:{type:"Titanium.Utils"}},[t._v("Titanium.Utils")]),t._v(" module provides several utility methods for working with\nblobs, including methods for converting between blobs and Base64-encoded strings,\nand methods for generating SHA-1 and SHA-256 hashes and MD5 digests from blob data.")],1),t._v(" "),s("p",[t._v("The "),s("type-link",{attrs:{type:"Titanium.Buffer"}},[t._v("Buffer")]),t._v(" object can also contain binary data, and is\nmore easily mutable. Extracting blob data to a buffer is somewhat roundabout:")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blobStream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" myBlob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MODE_READ")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newBuffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" myBlob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bytes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" blobStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newBuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Creating a blob from a buffer is much easier:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newBlob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myBuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBlob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("In both cases, the conversion involves copying the data from one object to another, so\nyou should be conscious of the amount of the data being copied.")]),t._v(" "),s("ApiDocs")],1)}),[],!1,null,null,null);a.default=n.exports}}]);