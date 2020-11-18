(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1041:function(e,n,t){"use strict";t.r(n);var s=t(21),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"modules-cloud-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-events"}},[e._v("#")]),e._v(" Modules.Cloud.Events")]),e._v(" "),t("TypeHeader"),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"create-event"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-event"}},[e._v("#")]),e._v(" Create Event")]),e._v(" "),t("p",[e._v("This example creates a new event and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.Events.create({\n    name: 'Celebration',\n    start_time: starttime,\n    duration: 3600,\n    recurring: 'monthly',\n    recurring_count: 5\n}, function (e) {\n    if (e.success) {\n        var event = e.events[0];\n        alert('Success:\\n' +\n            'id: ' + event.id + '\\n' +\n            'name: ' + event.name + '\\n' +\n            'updated_at: ' + event.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"show-an-event"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-an-event"}},[e._v("#")]),e._v(" Show an Event")]),e._v(" "),t("p",[e._v("This example retrieves information about a event and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.Events.show({\n    event_id: savedEventId\n}, function (e) {\n    if (e.success) {\n        var event = e.events[0];\n        alert('Success:\\n' +\n            'id: ' + event.id + '\\n' +\n            'name: ' + event.name + '\\n' +\n            'updated_at: ' + event.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"show-occurrences-for-an-event"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-occurrences-for-an-event"}},[e._v("#")]),e._v(" Show Occurrences for an Event")]),e._v(" "),t("p",[e._v("This example retrieves information about an event's occurrences and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.Events.showOccurrences({\n    event_id: savedEventId\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.event_occurrences.length);\n        for (var i = 0; i < e.event_occurrences.length; i++) {\n            var event = e.event_occurrences[i].event;\n            alert('id: ' + event.id + '\\n' +\n                  'name: ' + event.name + '\\n' +\n                  'start time: ' + event.start_time + '\\n' +\n                  'updated_at: ' + place.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"query-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-events"}},[e._v("#")]),e._v(" Query Events")]),e._v(" "),t("p",[e._v("This example requests a list of events and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.Events.query(function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.events.length);\n        for (var i = 0; i < e.events.length; i++) {\n            var event = e.events[i];\n            alert('id: ' + event.id + '\\n' +\n                  'name: ' + event.name + '\\n' +\n                  'start time: ' + event.start_time + '\\n' +\n                  'updated_at: ' + place.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"query-event-occurrences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-event-occurrences"}},[e._v("#")]),e._v(" Query Event Occurrences")]),e._v(" "),t("p",[e._v("This example retrieves a list of event occurrences and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.Events.queryOccurrences(function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.event_occurrences.length);\n        for (var i = 0; i < e.event_occurrences.length; i++) {\n            var event = e.event_occurrences[i].event;\n            alert('id: ' + event.id + '\\n' +\n                  'name: ' + event.name + '\\n' +\n                  'start time: ' + event.start_time + '\\n' +\n                  'updated_at: ' + place.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"search-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-events"}},[e._v("#")]),e._v(" Search Events")]),e._v(" "),t("p",[e._v("This example requests a list of events and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.Events.search({\n    place_id: savedPlaceId,\n    start_time: startTime,\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.events.length);\n        for (var i = 0; i < e.events.length; i++) {\n            var event = e.events[i];\n            alert('id: ' + event.id + '\\n' +\n                  'name: ' + event.name + '\\n' +\n                  'start time: ' + event.start_time + '\\n' +\n                  'updated_at: ' + place.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"search-event-occurrences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-event-occurrences"}},[e._v("#")]),e._v(" Search Event Occurrences")]),e._v(" "),t("p",[e._v("This example retrieves a list of event occurrences and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.Events.searchOccurrences({\n    place_id: savedPlaceId,\n    start_time: startTime\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.event_occurrences.length);\n        for (var i = 0; i < e.event_occurrences.length; i++) {\n            var event = e.event_occurrences[i].event;\n            alert('id: ' + event.id + '\\n' +\n                  'name: ' + event.name + '\\n' +\n                  'start time: ' + event.start_time + '\\n' +\n                  'updated_at: ' + place.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"search-for-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-for-events"}},[e._v("#")]),e._v(" Search for events")]),e._v(" "),t("p",[e._v("This example searches for events and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.Events.search({\n    latitude: lat,\n    longitude: lon\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.events.length);\n        for (var i = 0; i < e.events.length; i++) {\n            var event = e.events[i];\n            alert('id: ' + event.id + '\\n' +\n                  'name: ' + event.name + '\\n' +\n                  'longitude: ' + event.longitude + '\\n' +\n                  'latitude: ' + event.latitude + '\\n' +\n                  'updated_at: ' + event.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"update-an-event"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-an-event"}},[e._v("#")]),e._v(" Update an Event")]),e._v(" "),t("p",[e._v("This example updates a event and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.Events.update({\n    event_id: savedEventId,\n    name: 'Annual Celebration',\n    start_time: starttime,\n    duration: 3600,\n    recurring: 'monthly',\n    recurring_count: 5\n}, function (e) {\n    if (e.success) {\n        var event = e.events[0];\n        alert('Success:\\n' +\n            'id: ' + event.id + '\\n' +\n            'name: ' + event.name + '\\n' +\n            'updated_at: ' + event.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"remove-an-event"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-an-event"}},[e._v("#")]),e._v(" Remove an Event")]),e._v(" "),t("p",[e._v("This example deletes a event and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.Events.remove({\n    event_id: savedEventId\n}, function (e) {\n    if (e.success) {\n        alert('Removed');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("ApiDocs")],1)}),[],!1,null,null,null);n.default=a.exports}}]);