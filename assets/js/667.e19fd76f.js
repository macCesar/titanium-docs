(window.webpackJsonp=window.webpackJsonp||[]).push([[667],{1714:function(e,t,a){"use strict";a.r(t);var r=a(21),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-network-socket-udp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-network-socket-udp"}},[e._v("#")]),e._v(" Titanium.Network.Socket.UDP")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Most socket operations are asynchronous. When you create a socket, you can define\ncallback functions to receive the results of API calls, as well as to handle incoming\ndata.")]),e._v(" "),a("p",[e._v("For example, for a client-side socket, you define\n"),a("type-link",{attrs:{type:"Titanium.Network.Socket.UDP.started"}},[e._v("started")]),e._v(" and\n"),a("type-link",{attrs:{type:"Titanium.Network.Socket.UDP.error"}},[e._v("error")]),e._v(" callback functions.")],1),e._v(" "),a("p",[e._v("A familiarity with the basics of BSD socket programming is recommended before using\nsockets with Titanium.")]),e._v(" "),a("p",[e._v("Use the "),a("type-link",{attrs:{type:"Titanium.Network.Socket.createUDP"}},[e._v("Titanium.Network.Socket.createUDP")]),e._v(" method to create a UDP socket.")],1),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"simple-udp-socket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-udp-socket"}},[e._v("#")]),e._v(" Simple UDP Socket")]),e._v(" "),a("p",[e._v("var socket = Ti.Network.Socket.createUDP({\nstarted: function (e) {\nsocket.sendString(e.port, e.address, \"Hello, World!\");\n},\ndata: function (e) {\nalert(e.stringData);\nTi.API.info('Socket received data: ' + e.stringData);\nTi.API.info('bytes: ' + e.bytesData.length);\nTi.API.info('address: ' + e.address);\nTi.API.info('port: ' + e.port);\n},\nerror: function (e) {\nalert('Socket error: ' + e.error);\n}\n});\nsocket.start(6262);")]),e._v(" "),a("ApiDocs")],1)}),[],!1,null,null,null);t.default=o.exports}}]);