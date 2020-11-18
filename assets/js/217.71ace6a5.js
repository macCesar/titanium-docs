(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1054:function(e,a,n){"use strict";n.r(a);var s=n(21),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"modules-cloud-places"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-places"}},[e._v("#")]),e._v(" Modules.Cloud.Places")]),e._v(" "),n("TypeHeader"),e._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),n("h3",{attrs:{id:"create-place"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-place"}},[e._v("#")]),e._v(" Create Place")]),e._v(" "),n("p",[e._v("This example creates a new place and checks the response.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Cloud.Places.create({\n    name: 'Appcelerator HQ',\n    state: 'California',\n    website: 'https://www.appcelerator.com'\n}, function (e) {\n    if (e.success) {\n        var place = e.places[0];\n        alert('Success:\\n' +\n            'id: ' + place.id + '\\n' +\n            'name: ' + place.name + '\\n' +\n            'updated_at: ' + place.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),n("h3",{attrs:{id:"show-a-place"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#show-a-place"}},[e._v("#")]),e._v(" Show a Place")]),e._v(" "),n("p",[e._v("This example retrieves information about a place and checks the response.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Cloud.Places.show({\n    place_id: savedPlaceId\n}, function (e) {\n    if (e.success) {\n        var place = e.places[0];\n        alert('Success:\\n' +\n            'id: ' + place.id + '\\n' +\n            'name: ' + place.name + '\\n' +\n            'updated_at: ' + place.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),n("h3",{attrs:{id:"search-for-places"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#search-for-places"}},[e._v("#")]),e._v(" Search for Places")]),e._v(" "),n("p",[e._v("This example searches for places and checks the response.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Cloud.Places.search({\n    latitude: lat,\n    longitude: lon\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.places.length);\n        for (var i = 0; i < e.places.length; i++) {\n            var place = e.places[i];\n            alert('id: ' + place.id + '\\n' +\n                  'name: ' + place.name + '\\n' +\n                  'longitude: ' + place.longitude + '\\n' +\n                  'latitude: ' + place.latitude + '\\n' +\n                  'updated_at: ' + place.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),n("h3",{attrs:{id:"query-for-places"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#query-for-places"}},[e._v("#")]),e._v(" Query for Places")]),e._v(" "),n("p",[e._v("This example requests a list of places and checks the response.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Cloud.Places.query({\n    page: 1,\n    per_page: 20,\n    where: {\n        lnglat: {\n            '$nearSphere': [-122.23,37.12],\n            '$maxDistance': 0.00126\n        }\n    }\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.places.length);\n        for (var i = 0; i < e.places.length; i++) {\n            var place = e.places[i];\n            alert('id: ' + place.id + '\\n' +\n                  'name: ' + place.name + '\\n' +\n                  'longitude: ' + place.longitude + '\\n' +\n                  'latitude: ' + place.latitude + '\\n' +\n                  'updated_at: ' + place.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),n("h3",{attrs:{id:"update-a-place"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#update-a-place"}},[e._v("#")]),e._v(" Update a Place")]),e._v(" "),n("p",[e._v("This example updates a place and checks the response.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Cloud.Places.update({\n    place_id: savedPlaceId,\n    city: 'Mountain View'\n}, function (e) {\n    if (e.success) {\n        var place = e.places[0];\n        alert('Success:\\n' +\n            'id: ' + place.id + '\\n' +\n            'name: ' + place.name + '\\n' +\n            'updated_at: ' + place.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),n("h3",{attrs:{id:"remove-a-place"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-place"}},[e._v("#")]),e._v(" Remove a Place")]),e._v(" "),n("p",[e._v("This example deletes a place and checks the response.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Cloud.Places.remove({\n    place_id: savedPlaceId\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);a.default=t.exports}}]);