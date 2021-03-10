(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{1706:function(t,e,s){"use strict";s.r(e);var a=s(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"titanium-codec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-codec"}},[t._v("#")]),t._v(" Titanium.Codec")]),t._v(" "),s("TypeHeader"),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Codec")]),t._v(" module can be used for encoding strings and numbers into "),s("type-link",{attrs:{type:"Titanium.Buffer"}},[t._v("Buffer")]),t._v("\nobjects, and decoding primitive types from buffers.")],1),t._v(" "),s("h3",{attrs:{id:"byte-order"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#byte-order"}},[t._v("#")]),t._v(" Byte Order")]),t._v(" "),s("p",[t._v("Multi-byte data can be stored in two different byte orders: big-endian or\nlittle-endian. In big-endian byte order, the most significant or highest-value\nbyte is stored first. For example, the 4-byte integer 0xFEDCBA98 is made up of the\nbytes 0xFE, 0xDC, 0xBA and 0x98, from most-significant to least-significant.")]),t._v(" "),s("p",[t._v("If we represent a buffer as an array of byte values, a big-endian encoding of\n0xFEDCBA98 would look like this:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xDC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xBA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x98")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("In little-endian order, the bytes would be stored in this order:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x98")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xBA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xDC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("For 8-bit character encodings, including ASCII, Latin-1 and UTF-8, byte order is not\nsignificant: the text is a sequence of individual bytes.")]),t._v(" "),s("p",[t._v('For UTF-16, text is represented as a sequence of 16-bit values. For example,\na capital T in UTF-16 is 0x0054, and lowercase i is 0x0069. If we encode the string\n"Ti" with UTF-16 in big-endian byte order, we get:')]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x54")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x69")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v('In UTF-16 with little-endian byte order, "Ti" is encoded as:')]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x54")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x69")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Note that the bytes for each character are stored least-significant byte first, but\nthe order of the characters is unchanged.")]),t._v(" "),s("ApiDocs")],1)}),[],!1,null,null,null);e.default=n.exports}}]);