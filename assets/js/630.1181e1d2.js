(window.webpackJsonp=window.webpackJsonp||[]).push([[630],{1904:function(t,e,n){"use strict";n.r(e);var a=n(21),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-android"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-android"}},[t._v("#")]),t._v(" Titanium.Android")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("The Android module allows the application to manage various Android components.")]),t._v(" "),n("h3",{attrs:{id:"drawer-layout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#drawer-layout"}},[t._v("#")]),t._v(" Drawer Layout")]),t._v(" "),n("p",[t._v('The drawer-layout components acts as a top-level container for window content that allows\nfor interactive "drawer" views to be pulled out from one or both vertical edges of the window.\nIt is represented by a '),n("code",[t._v("centerView")]),t._v(" and optional "),n("code",[t._v("leftView")]),t._v(" and "),n("code",[t._v("rightView")]),t._v(" components that\ncan be swiped in and out with additional configuration and transitions. Learn more about\ndrawer-layouts in it's dedicated "),n("type-link",{attrs:{type:"Titanium.UI.Android.DrawerLayout"}},[t._v("Titanium.UI.Android.DrawerLayout")]),t._v(" docs.")],1),t._v(" "),n("h3",{attrs:{id:"action-bar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#action-bar"}},[t._v("#")]),t._v(" Action Bar")]),t._v(" "),n("p",[t._v("An action bar is a UI feature that identifies the application and user location, and\nprovides user actions and navigation modes.")]),t._v(" "),n("p",[t._v("The Titanium SDK lets you customize the look of the action bar and add action items.\nAction items are added using the "),n("type-link",{attrs:{type:"Titanium.Android.Menu"}},[t._v("Titanium.Android.Menu")]),t._v(" API.")],1),t._v(" "),n("p",[t._v("For more information about the action bar, see the\n"),n("type-link",{attrs:{type:"Titanium.Android.ActionBar"}},[t._v("Titanium.Android.ActionBar API reference")]),t._v(".")],1),t._v(" "),n("h3",{attrs:{id:"activities"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#activities"}},[t._v("#")]),t._v(" Activities")]),t._v(" "),n("p",[t._v("An Android application is made up of one or more activities. Each activity represents a single screen\nwith a user interface.")]),t._v(" "),n("p",[t._v("In Titanium, each "),n("code",[t._v("Window")]),t._v(" or "),n("code",[t._v("TabGroup")]),t._v(" has its own activity. The application\ncan access the activity of a "),n("code",[t._v("Window")]),t._v(" and "),n("code",[t._v("TabGroup")]),t._v(' object and monitor its lifecycle events.\nTitanium also lets you launch new activities by creating intents to launch them.\nSee the "Intents" section below.')]),t._v(" "),n("p",[t._v("For more information about activities, see the\n"),n("type-link",{attrs:{type:"Titanium.Android.Activity"}},[t._v("Titanium.Android.Activity API reference")]),t._v(".")],1),t._v(" "),n("h3",{attrs:{id:"broadcast-intents-and-receivers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#broadcast-intents-and-receivers"}},[t._v("#")]),t._v(" Broadcast Intents and Receivers")]),t._v(" "),n("p",[t._v("Broadcast Intents allow your application to send out a message to any application that sets up\na Broadcast Receiver to listen to it. Your application can also register Broadcast Receivers\nto listen to system events sent by the Android OS, such as low battery warnings or airplane\nmode changes.")]),t._v(" "),n("p",[t._v("For more information about broadcasts, see the\n"),n("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Android_Broadcast_Intents_and_Receivers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Broadcast Intents and Receivers guide"),n("OutboundLink")],1),t._v("\nand "),n("type-link",{attrs:{type:"Titanium.Android.BroadcastReceiver"}},[t._v("Titanium.Android.BroadcastReceiver API reference")]),t._v(".")],1),t._v(" "),n("h3",{attrs:{id:"intents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intents"}},[t._v("#")]),t._v(" Intents")]),t._v(" "),n("p",[t._v("Intents are message objects that specify actions to perform which can start either activities,\nbroadcasts or services.")]),t._v(" "),n("p",[t._v("For more information about intents, see the\n"),n("type-link",{attrs:{type:"Titanium.Android.Intent"}},[t._v("Titanium.Android.Intent API reference")]),t._v(".")],1),t._v(" "),n("h3",{attrs:{id:"intent-filters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intent-filters"}},[t._v("#")]),t._v(" Intent Filters")]),t._v(" "),n("p",[t._v("Intent Filters advertise to the Android OS that your application handles certain actions and\ndata types. For example, when another application wants to share an image or text, your application\ncan define intent filters to let Android know your application can handle those data types.")]),t._v(" "),n("p",[t._v("For more information about intent filters, see the\n"),n("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Android_Intent_Filters",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Intent Filters guide"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h3",{attrs:{id:"notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notifications"}},[t._v("#")]),t._v(" Notifications")]),t._v(" "),n("p",[t._v("Notifications alert the user that something is happening to your application while it is\nin the background. Notifications appear in the notification drawer until the user\nclears them and on the lock screen for devices running Android 5.0 or greater.\nNote that the user can filter or turn notifications on and off from "),n("strong",[t._v("Settings")]),t._v(".\nFor more information about notifications, see the\n"),n("type-link",{attrs:{type:"Titanium.Android.Notification"}},[t._v("Titanium.Android.Notification API reference")]),t._v(".")],1),t._v(" "),n("p",[t._v("For Android toast notifications (pop-up notifications sent while the application is in the\nforeground), see "),n("type-link",{attrs:{type:"Titanium.UI.Notification"}},[t._v("Titanium.UI.Notification")]),t._v(".")],1),t._v(" "),n("h3",{attrs:{id:"options-menu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#options-menu"}},[t._v("#")]),t._v(" Options Menu")]),t._v(" "),n("p",[t._v("The options menu is a feature of older Android devices (prior to Android 3.0 (API 11)), and has been\nreplaced by the action bar. The options menu is accessed by pressing the "),n("strong",[t._v("Menu")]),t._v(" and presents\na pop-up menu of options the user can execute.")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("Titanium.Android.Menu")]),t._v(" API is used to construct both the options menu and action items for\nthe action bar.")]),t._v(" "),n("p",[t._v("For more information about the options menu, see the\n"),n("type-link",{attrs:{type:"Titanium.Android.Menu"}},[t._v("Titanium.Android.Menu API reference")]),t._v(".")],1),t._v(" "),n("h3",{attrs:{id:"services"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[t._v("#")]),t._v(" Services")]),t._v(" "),n("p",[t._v("A service is a component started by an application that runs in the background. The service\ndoes not have any application UI associated with it, so the user does not directly interact\nwith it, only your application.")]),t._v(" "),n("p",[t._v("The Titanium SDK gives you the ability to write your own Android Services using JavaScript.\nThe service executes your JavaScript code at intervals you specify. Note that the service\nwill stop running when you back out of the app. So, if you want the service to continue running,\nthen it's recommended that you set the root window's "),n("type-link",{attrs:{type:"Titanium.UI.Window.exitOnClose"}},[t._v("exitOnClose")]),t._v("\nproperty to "),n("code",[t._v("false")]),t._v(" so that the window will persist in the background like iOS.")],1),t._v(" "),n("p",[t._v("For more information about services, see the\n"),n("type-link",{attrs:{type:"Titanium.Android.Service"}},[t._v("Titanium.Android.Service API reference")]),t._v(".")],1),t._v(" "),n("h3",{attrs:{id:"permissions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),n("p",[t._v("Starting from Android 6.0 (API level 23), users need to grant certain permissions to apps while the\napp is running. You can read it more "),n("a",{attrs:{href:"https://developer.android.com/training/permissions/requesting.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("In Titanium SDK, to support this, we have the "),n("type-link",{attrs:{type:"Titanium.Android.requestPermissions"}},[t._v("Titanium.Android.requestPermissions")]),t._v(" method. It is used to\nrequest any permission you may need. An example of using it is shown below:")],1),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" permissions "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.permission.CAMERA'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.permission.READ_EXTERNAL_STORAGE'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.permission.WRITE_EXTERNAL_STORAGE'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestPermissions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("permissions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SUCCESS'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ERROR: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);e.default=s.exports}}]);