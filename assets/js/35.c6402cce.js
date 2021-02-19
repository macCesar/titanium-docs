(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1478:function(t,s,a){"use strict";a.r(s);var e=a(21),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"using-density-specific-resources-on-android"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-density-specific-resources-on-android"}},[t._v("#")]),t._v(" Using density-specific resources on Android")]),t._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("This guide explains how a Titanium application can support different screen densities on Android.")]),t._v(" "),e("h2",{attrs:{id:"platform-specific-images-folder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#platform-specific-images-folder"}},[t._v("#")]),t._v(" Platform-specific images Folder")]),t._v(" "),e("p",[t._v("The Android OS "),e("a",{attrs:{href:"http://developer.android.com/guide/practices/screens_support.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("divides the available screen densities into three groups"),e("OutboundLink")],1),t._v(", high, medium, and low. You can specify image resources to use per density by placing them in an "),e("code",[t._v("android/images/density")]),t._v(" folder, as in:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(663),alt:"20101129-r3w6xk6i4tip9im3emgkfe86qp"}})]),t._v(" "),e("p",[t._v("Similarly to the iOS example, if we were creating a button in code (or referencing the image in a configuration file), we would just use "),e("code",[t._v("myButton.png")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myButton "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createButton")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backgroundImage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images/myButton.png'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"more-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more-control"}},[t._v("#")]),t._v(" More control")]),t._v(" "),e("p",[t._v("We can be even more specific about when these resources should be used. This is the same concept as above, but instead of using high, medium, and low we can put our images in subdirectories that give us more control over when they are used.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(664),alt:"20110915-p6dx44aax2ftrhxr4k4nca4iwa"}})]),t._v(" "),e("h2",{attrs:{id:"folder-name-breakdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#folder-name-breakdown"}},[t._v("#")]),t._v(" Folder name breakdown")]),t._v(" "),e("p",[t._v("Images that are in a folder named "),e("code",[t._v('"res-long-land-hdpi"')]),t._v(" will be used for:")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Long")]),t._v(" screens, such as WQVGA, WVGA, FWVGA")])]),t._v(" "),e("li",[e("p",[t._v("Device is in "),e("strong",[t._v("landscape")]),t._v(" orientation (horizontal)")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("High-density screens")]),t._v("; approximately 240dpi.")])])]),t._v(" "),e("h2",{attrs:{id:"working-with-the-folder-names"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-folder-names"}},[t._v("#")]),t._v(" Working with the folder names")]),t._v(" "),e("p",[t._v("With this naming convention you can be as specific or as broad as you need to be.\nFor instance, if you have these two folders in "),e("code",[t._v('"Resources/android/images"')]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v('"res-long-land-hdpi"')])])]),t._v(" "),e("li",[e("p",[e("code",[t._v('"res-notlong-land-hdpi"')])])])]),t._v(" "),e("p",[t._v("But you don't need to have different images based on it being long or notlong. So all you need to do is remove that property from the folder name. So you end up with one folder named:")]),t._v(" "),e("ul",[e("li",[t._v('"res-land-hdpi"')])]),t._v(" "),e("p",[t._v("that will cover both instances. And if you where also going to use the same images for hdpi devices, no matter if it is portrait or landscape you could just name that folder")]),t._v(" "),e("ul",[e("li",[t._v('"res-hdpi"')])]),t._v(" "),e("h2",{attrs:{id:"documentation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),e("p",[t._v("The full list of qualifiers that you can use for these folders can be found "),e("a",{attrs:{href:"http://developer.android.com/guide/topics/resources/providing-resources.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"subfolders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subfolders"}},[t._v("#")]),t._v(" Subfolders")]),t._v(" "),e("p",[t._v('If you want to put your image in a subfolder, you would put it in "Resources/android/images/res-long-land-hdpi/subfolder/test.png" and refer to it in your app as "image/subfolder/test.png".')]),t._v(" "),e("h3",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),e("ul",[e("li",[e("p",[t._v('These folders are searched for images from most specific to most broad. It is a good idea to have a folder named "res-mdpi", if an image doesn\'t exist in one of the other folders it will look there for it last before it fails to find the image. It is the default folder.')])]),t._v(" "),e("li",[e("p",[t._v('Using "high", "medium", and "low" is the same as using "res-hdpi", "res-mdpi", and "res-ldpi".')])])]),t._v(" "),e("h2",{attrs:{id:"the-appicon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-appicon"}},[t._v("#")]),t._v(" The appicon")]),t._v(" "),e("p",[t._v("The method above will not work for the appicon.png because the it is referenced directly from the android project and does not pass through titanium. When you use the method above the names of images are mangled to avoid collisions and we are only able to reference them through titanium.")]),t._v(" "),e("p",[t._v("To use density specific versions of the appicon you will need to create a folder structure in the root of the app that looks something like this:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v('"<app>/platform/android/res/drawable"')])])]),t._v(" "),e("li",[e("p",[e("code",[t._v('"<app>/platform/android/res/drawable-hdpi"')])])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(665),alt:"20110915-93bn2rtifjcjk838xmrjsx4y5"}})]),t._v(" "),e("p",[t._v('The folder "drawable" is the default folder that is looked in last.')]),t._v(" "),e("h2",{attrs:{id:"using-density-independent-pixels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-density-independent-pixels"}},[t._v("#")]),t._v(" Using Density Independent Pixels")]),t._v(" "),e("p",[t._v("Android devices, as you are no doubt aware, come in many shapes and sizes. For developers, that means supporting screens with different resolutions and densities - the "),e("a",{attrs:{href:"http://developer.android.com/guide/practices/screens_support.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official Android docs on supporting multiple screens"),e("OutboundLink")],1),t._v(" is essential reading on this topic. "),e("strong",[t._v("Screen density")]),t._v(" is the number of pixels on a physical space on the screen, usually measured in dpi (dots per inch). "),e("strong",[t._v("Screen resolution")]),t._v(' is the actual number of pixels on the screen, usually given in a width by height notation like "1440x960".')]),t._v(" "),e("p",[t._v("For example, I have a "),e("a",{attrs:{href:"http://developer.motorola.com/products/droid2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Motorola Droid 2"),e("OutboundLink")],1),t._v(' I use for development. The resolution of its display is 480x854 - it is also considered a "high density" screen (240dpi) because all of those pixels are packed into a reasonably small area. If I wanted to test this device screen size on my desktop in the emulator, I would use the "WVGA854" skin, which is available in the Run Configurations menu in Studio:')]),t._v(" "),e("p",[e("img",{attrs:{src:a(666),alt:"20110624-8uubj48dj7g882pnarthn1sk2s"}})]),t._v(" "),e("p",[t._v("Android will ship on devices with many different screen densities, so coding our application with different pixel sizes for fonts and layouts would get old pretty fast. To help combat this, Android allows developers to specify layout values (and font sizes, though the term is slightly different) in "),e("strong",[t._v("density independent pixels")]),t._v(", also called "),e("strong",[t._v("dips")]),t._v('. When your UI components are sized in dips, the Android OS will scale your UI up or down as if the screen your application is running on were what it calls a "medium density" (or 160dpi) screen. Most of the time, this is the behavior we would want and expect.')]),t._v(" "),e("p",[t._v('To make dips the default unit for UI components in an Android application, it requires an entry in AndroidManifest.xml (android:anyDensity="false"), which is what we specified in our tiapp.xml above.')]),t._v(" "),e("h3",{attrs:{id:"code-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code-examples"}},[t._v("#")]),t._v(" Code Examples")]),t._v(" "),e("p",[t._v("In Titanium Mobile, typically we specify fontSize or "),e("code",[t._v("height/width/top/bottom/left/right")]),t._v(" values as integer values. On iPhone, these values correspond to the 320x480 point system used to lay out UI components (even though the densities of iPhone handsets can be different). On Android in 1.7, raw integer values (unless the tiapp.xml configuration is changed) correspond to real pixels on the screen. Consider the following simple app.js:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    backgroundColor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    layout"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vertical'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLabel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    top"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    color"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIZE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FILL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    font"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fontSize"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    top"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    backgroundColor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("On Android, on a medium density display (like the HVGA screen size in the emulator), the box and text show up at a pretty large size. On a high resolution, high density display like my Droid 2, the text and box are pretty small:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(667),alt:"20110624-1cuy2xhs9uf9bkinb9mgtnr26s"}})]),t._v(" "),e("p",[t._v("In terms of proportions, I'd prefer to have the box and text show up at about the same size on the high density screen as well. I can fix my code by specifying my heights/widths/font sizes as density-independent pixels (DIPs) by specifying a 'dp' or 'dip' string rather than an integer value:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    backgroundColor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    layout"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vertical'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLabel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    top"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10dp'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    color"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIZE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FILL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    font"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fontSize"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'18dp'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    top"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10dp'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200dp'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200dp'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    backgroundColor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("On the iOS side, the default unit is DIPs, so this doesn't change anything on iOS. The updated code produces something which is a little closer to what I'd expect on Android.")])])}),[],!1,null,null,null);s.default=n.exports},663:function(t,s,a){t.exports=a.p+"assets/img/20101129-r3w6xk6i4tip9im3emgkfe86qp.76c53d8e.png"},664:function(t,s,a){t.exports=a.p+"assets/img/20110915-p6dx44aax2ftrhxr4k4nca4iwa.8988ebe8.jpg"},665:function(t,s,a){t.exports=a.p+"assets/img/20110915-93bn2rtifjcjk838xmrjsx4y5.871a614f.jpg"},666:function(t,s,a){t.exports=a.p+"assets/img/20110624-8uubj48dj7g882pnarthn1sk2s.6999cf88.jpg"},667:function(t,s,a){t.exports=a.p+"assets/img/20110624-1cuy2xhs9uf9bkinb9mgtnr26s.97edda08.jpg"}}]);