(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1125:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"images-and-imageview-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#images-and-imageview-apis"}},[t._v("#")]),t._v(" Images and ImageView APIs")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("In this chapter, we'll dig a bit deeper into the ways you can add local and remote images to your apps as either background images or ImageViews.")]),t._v(" "),s("p",[t._v("You can display images in your apps in at least two ways: as instances of the ImageView object or as the background of another component. We'll look at both techniques as well as the options associated with each.")]),t._v(" "),s("h2",{attrs:{id:"background-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-images"}},[t._v("#")]),t._v(" Background Images")]),t._v(" "),s("p",[t._v("You can specify an image be used as the background of another component, such as a view or button. By default, image will be scaled (stretched or squeezed) to fit the dimensions of the component. Any other content of that component will appear in front of the background image. For example, button text will appear over the top of the background.")]),t._v(" "),s("p",[t._v("When the background image is larger than the component, it will be squeezed to fit the component's dimensions. Both platforms handle that in essentially the same way, as you can see in the red images in the graphic below. But iOS and Android handle background images differently when they're smaller than the component. Look carefully at the following image. Overlaid on top, you see the original small PNG image that is used as the background if the view with the four Xs. In that view, on Android the background image is stretched to fit the width of the component. On iOS, a small portion of the left and right of the image remain un-stretched while the remainder is stretched to fill the width.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(806),alt:"default_image_scaling"}})]),t._v(" "),s("p",[t._v('On iOS, you can control this "small portion" that remains unstretched. You do so by setting the '),s("code",[t._v("backgroundLeftCap")]),t._v(" property. It works like this: End caps specify the portion of an image that should not be resized when an image is stretched. Resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. The value of this property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image.")]),t._v(" "),s("p",[t._v("You can control vertical stretching in this way with the "),s("code",[t._v("backgroundTopCap")]),t._v(" property. Again, that works on only iOS.")]),t._v(" "),s("p",[t._v("Android supports remote images as background images. On Android, you can set the "),s("code",[t._v("backgroundImage")]),t._v(" property equal to a URL and the image will be displayed (assuming a network connection is available). That's not the case on iOS.")]),t._v(" "),s("h2",{attrs:{id:"imageview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#imageview"}},[t._v("#")]),t._v(" ImageView")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("ImageView")]),t._v(" is Titanium's component for representing an image file. You create one with the "),s("code",[t._v("Ti.UI.createImageView()")]),t._v(" method. With this component, you have full control over dimensions, positioning, opacity, and more. The "),s("code",[t._v("ImageView")]),t._v(" has a number of interesting methods, such as "),s("code",[t._v("show()")]),t._v(" and "),s("code",[t._v("hide()")]),t._v(", "),s("code",[t._v("start()")]),t._v(" and "),s("code",[t._v("stop()")]),t._v(", and "),s("code",[t._v("toImage()")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myImage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createImageView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n  image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo.png'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* accepts URL, local path, or Ti.Filesystem.File */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n// this would work:\nmyImage.image = 'http://example.com/foo.png'\n// set myImage.defaultImage = 'localFoo.png' to show an image while the remote one is loading\n\n// as would\nmyImage.image = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'foo.png');\n*/")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If you specify a width and/or height property on the image, the image will be scaled to fit according to these considerations:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("If the "),s("code",[t._v("ImageView")]),t._v("'s "),s("code",[t._v("height")]),t._v(" and "),s("code",[t._v("width")]),t._v(" are specified, the images will be scaled unproportionally to fit the dimensions. The graphic's aspect ratio will NOT be maintained.")])]),t._v(" "),s("li",[s("p",[t._v("If either the "),s("code",[t._v("ImageView")]),t._v("'s "),s("code",[t._v("height")]),t._v(" or "),s("code",[t._v("width")]),t._v(" are specified (not both), the image will be scaled to fit the specified dimension. The graphic's aspect ratio will be maintained.")])])]),t._v(" "),s("h3",{attrs:{id:"flipbook-animations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flipbook-animations"}},[t._v("#")]),t._v(" Flipbook animations")]),t._v(" "),s("p",[t._v("You can display flipbook-style animations with the "),s("code",[t._v("ImageView")]),t._v(" by assigning an array of images to the "),s("code",[t._v("images")]),t._v(" property.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// from the Kitchen Sink, examples/image_view_animated.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" images "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../images/campFire'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.gif'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" imageView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createImageView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  images"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in milliseconds, the time before next frame is shown")]),t._v("\n  repeatCount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0 means animation repeats indefinitely, use > 1 to control repeat count")]),t._v("\n  top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// imageView.stop() would stop the animation")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// imageView.start() would start the animation again")]),t._v("\n")])])]),s("h3",{attrs:{id:"density-specific-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#density-specific-images"}},[t._v("#")]),t._v(" Density-specific images")]),t._v(" "),s("p",[t._v("Since the size and resolution of displays varies between devices, you may want to include density-specific images. Each platform has its own way to support density-specific images.")]),t._v(" "),s("h4",{attrs:{id:"android-platform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-platform"}},[t._v("#")]),t._v(" Android Platform")]),t._v(" "),s("p",[t._v("For Android, you can create density-specific image based on the device's resolution, screen sizes and orientation. To support these screen variations, Titanium uses a set of directories:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(807),alt:"android_directories"}})]),t._v(" "),s("p",[t._v("Put your resolution-specific files in the appropriate directories. Then, in code, simply refer to the image via the base name, as shown in the previous example. Titanium will take care of pulling in the correct image for the device in use. Use the sample images in those folders as a starting point for the correct size and resolution when creating your graphics.")]),t._v(" "),s("p",[t._v("If you don't want to worry about creating graphics for these various resolutions, delete the resolution-specific folders. If you don't, Android will use the stock images Titanium supplies, which might mean users will see the stock splash screen instead of yours.")]),t._v(" "),s("p",[t._v("For more details, see "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/Android_UI_Components_and_Conventions/Using_density-specific_resources_on_Android/"}},[t._v("Using density-specific resources on Android")]),t._v(".")],1),t._v(" "),s("h4",{attrs:{id:"ios-platform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform"}},[t._v("#")]),t._v(" iOS Platform")]),t._v(" "),s("p",[t._v("iOS devices have different screen densities. Most devices either have a non-retina or retina display. The only exception is the iPhone 6 Plus, which has a higher screen density. You may also add the "),s("code",[t._v("~iphone")]),t._v(" and "),s("code",[t._v("~ipad")]),t._v(" suffixes for iPhone- and iPad-specific images, respectively. To support multiple screen densities, add the following suffixes to the image name:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Suffix")]),t._v(" "),s("th",[t._v("Device")]),t._v(" "),s("th",[t._v("Example")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("No suffix")]),t._v(" "),s("td",[t._v("Devices with non-retina displays (iPad 2 and first generation iPad mini)")]),t._v(" "),s("td",[t._v("foo.png")])]),t._v(" "),s("tr",[s("td",[t._v("@2x")]),t._v(" "),s("td",[t._v("Devices with retina displays (most iPhones and iPads)")]),t._v(" "),s("td",[t._v("foo@2x.png")])]),t._v(" "),s("tr",[s("td",[t._v("@3x")]),t._v(" "),s("td",[t._v("iPhone 6 Plus")]),t._v(" "),s("td",[t._v("foo@3x.png")])]),t._v(" "),s("tr",[s("td",[t._v("~iphone")]),t._v(" "),s("td",[t._v("iPhone-specific image")]),t._v(" "),s("td",[t._v("foo~iphone.png")])]),t._v(" "),s("tr",[s("td",[t._v("~ipad")]),t._v(" "),s("td",[t._v("iPad-specific image")]),t._v(" "),s("td",[t._v("foo~ipad.png")])])])]),t._v(" "),s("p",[t._v("To use both the display and device suffixes, add the display suffix first, followed by the device suffix, for example, "),s("code",[t._v("foo@2x~iphone.png")]),t._v(".")]),t._v(" "),s("p",[t._v("In your code, reference the image without the suffix:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createImageView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo.png'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* logo@2x.png will be used automatically if it exists with retina devices */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("On iOS, you can retrieve density-specific images from a remote URL as well. You will have to use "),s("code",[t._v("Ti.Platform.displayCaps.logicalDensityFactor")]),t._v(" to build the URL to fetch the right image for the device. Then add the "),s("code",[t._v("hires=true")]),t._v(" property to your "),s("code",[t._v("ImageView")]),t._v(" to specify that the remote URL is a high-resolution image. Optionally, Set the "),s("code",[t._v("img.defaultImage")]),t._v(" property equal to a "),s("em",[t._v("local")]),t._v(" image and it will be displayed while your remote image is being downloaded.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Asset Catalog")]),t._v(" "),s("p",[t._v("Starting with Release 5.1.0, PNG and JPEG images following this naming convention will be added to an Asset Catalog to support App Thinning. When a user installs the application to their device, only the relevant images will be included. Note that you will not be able to access images added to the Asset Catalog from the filesystem, that is, you cannot use the "),s("code",[t._v("Ti.Filesystem")]),t._v(" APIs or equivalent to access the files with a URL or path.")])]),t._v(" "),s("h4",{attrs:{id:"windows-platform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-platform"}},[t._v("#")]),t._v(" Windows Platform")]),t._v(" "),s("p",[t._v("For the Windows Platform, add the scale qualifier to the filename. Place the qualifier in between the filename and extension, for example, "),s("code",[t._v("foo.scale-100.png")]),t._v(".")]),t._v(" "),s("p",[t._v("Use the qualifiers below to support devices with different DPIs or screen resolutions. The scaling is based on the logical density factor returned by the device. The Windows Phone DPI column is an approximate value.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Qualifier")]),t._v(" "),s("th",[t._v("Logical Density Factor")]),t._v(" "),s("th",[t._v("Windows Phone DPI")]),t._v(" "),s("th",[t._v("Windows Store Resolution")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("scale-100")]),t._v(" "),s("td",[t._v("1.0")]),t._v(" "),s("td",[t._v("Up to ~96")]),t._v(" "),s("td",[t._v("At least 1024x768")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("scale-140")]),t._v(" "),s("td",[t._v("1.4")]),t._v(" "),s("td",[t._v("Up to ~134 (WVGA emulator)")]),t._v(" "),s("td",[t._v("At least 1440x1080")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("scale-180")]),t._v(" "),s("td",[t._v("1.8")]),t._v(" "),s("td",[t._v("Up to ~172 (720p emulator)")]),t._v(" "),s("td",[t._v("At least 1920x1440")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("scale-240")]),t._v(" "),s("td",[t._v("2.4")]),t._v(" "),s("td",[t._v("Up to ~230 (WXGA and 1080p emulators)")]),t._v(" "),s("td",[t._v("N/A")]),t._v(" "),s("td",[t._v("Windows Phone OS 8.1 only")])])])]),t._v(" "),s("p",[t._v("For more details, see "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/Windows_UI_Components_and_Conventions/Windows_Asset_Qualifiers/"}},[t._v("Windows Asset Qualifiers")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),s("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),s("p",[t._v("In order to grant access to pictures library for Windows Phone, you need to provide appropriate Capabilities in your "),s("code",[t._v("tiapp.xml.")]),t._v(" Windows Phone users are prompted to grant or deny permission when your application attempt to use it.")]),t._v(" "),s("h5",{attrs:{id:"grant-access-to-pictures-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grant-access-to-pictures-library"}},[t._v("#")]),t._v(" Grant access to pictures library")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("windows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Capabilities")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Capability")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("picturesLibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Capabilities")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("windows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("For more information about audio configuration in "),s("code",[t._v("tiapp.xml")]),t._v(", see "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/#windows-specific"}},[t._v("Windows-specific")]),t._v(" section in "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/"}},[t._v("tiapp.xml and timodule.xml Reference")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),s("ul",[s("li",[t._v("API Docs - "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("ImageView object"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("In this chapter, you learned how to add local and remote images to your apps. You saw that you can display images as instances of the ImageView object or as the background of another component. You also learned how to handle density-specific images on iOS and Android.")])])}),[],!1,null,null,null);e.default=n.exports},806:function(t,e,a){t.exports=a.p+"assets/img/default_image_scaling.299404fa.png"},807:function(t,e,a){t.exports=a.p+"assets/img/android_directories.e0197e67.png"}}]);