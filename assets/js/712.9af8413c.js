(window.webpackJsonp=window.webpackJsonp||[]).push([[712],{2018:function(e,t,n){"use strict";n.r(t);var o=n(21),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-network-tcpsocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-network-tcpsocket"}},[e._v("#")]),e._v(" Titanium.Network.TCPSocket")]),e._v(" "),n("TypeHeader"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("Sockets are nontrivial; it is recommended that anyone using them be familiar with the basics of BSD sockets.  All sockets use TCP connections, and are asynchronous for read operations, so your program should be ready to receive 'read' events at any point.  Socket references cannot be transferred to socket objects, and vice-versa - socket references are an internal mechanism which is used only to determine which sockets to send data to and read data from.  For listening sockets, it is highly recommended that you use the "),n("type-link",{attrs:{type:"Titanium.Network.INADDR_ANY"}},[e._v("Titanium.Network.INADDR_ANY")]),e._v(" constant as the host name.  If a window containing a socket is closed, the socket MUST be closed also unless you intend to continue to receive data, otherwise the socket will consume resources (and potentially cause conflicts with opening the window again, if a listener) until the program is restarted.  Be aware of the differences between the listen() and connect() functions; attempting to use one when you mean the other may result in errors, unpredictable behavior, or both.")],1),e._v(" "),n("ApiDocs")],1)}),[],!1,null,null,null);t.default=s.exports}}]);