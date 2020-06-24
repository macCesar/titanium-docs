(window.webpackJsonp=window.webpackJsonp||[]).push([[1361],{2622:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"image-best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-best-practices"}},[t._v("#")]),t._v(" Image Best Practices")]),t._v(" "),s("h2",{attrs:{id:"objective"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),s("p",[t._v("In this section, you will learn best practices for handling images within your Titanium apps.")]),t._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),s("h3",{attrs:{id:"file-formats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-formats"}},[t._v("#")]),t._v(" File formats")]),t._v(" "),s("p",[t._v("You can use PNG, JPG, and GIF images in your Titanium apps. But which should you use?")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("GIF")]),t._v(" – GIF images are limited to 256 colors and are suitable to low-resolution line-art drawings and icons. GIF is a proprietary format and may not be compatible with some app's licenses. The animated GIF format is not supported on all platforms. In general, there are very few cases in which GIF is the appropriate format to use.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("PNG")]),t._v(" – PNG images are in a lossless-compressed format that can support high-color images. This format is best suited to line-art, text, and icons. It is a better choice than GIF in almost all cases.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("JPG")]),t._v(" – JPG (or JPEG) is lossy-compressed file format best suited for photographs. It is not well-suited for text, line drawings, or icons because of visual artifacts created during the compression process that will reduce quality and readability.")])])]),t._v(" "),s("p",[t._v("Keep in mind that JPG images are decompressed in memory when the photo is displayed. A JPG file itself might take a few dozen KB in storage. But, when rendered (whether visible on screen or not) it will be uncompressed in memory to hundreds of KB or higher. It is crucial that you don't display create too many JPG ImageViews at one time in your mobile apps or you could exhaust the device's memory. Removing an image from a view might not clear the memory used by that ImageView; "),s("code",[t._v("null")]),t._v(" it out as soon as you no longer need the image in memory.")]),t._v(" "),s("p",[t._v("In summary:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Photos? Use JPG")])]),t._v(" "),s("li",[s("p",[t._v("Text, line drawings, icons, button graphics? Use PNG")])]),t._v(" "),s("li",[s("p",[t._v("Flip-book style animations (for which animated GIFs would be the traditional choice)? Use the ImageView's "),s("code",[t._v("images")]),t._v(" property and pass to it an array of PNG or optimized JPG files.")])])]),t._v(" "),s("h3",{attrs:{id:"loading-and-unloading-images-to-manage-memory-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-and-unloading-images-to-manage-memory-use"}},[t._v("#")]),t._v(" Loading and unloading images to manage memory use")]),t._v(" "),s("p",[t._v("Consider a 640 x 480 pixel JPG image, which would fill the screen of a typical handset. On disk, such an image might consume a few dozen KB of storage. But in memory, its footprint will be significantly larger at upwards of 900 KB. When loaded into memory (so that it can be displayed or manipulated), the compressed JPG data is converted to a bitmap. Each pixel is represented by 24 bits (8 bits for each of red, green, and blue channels) or 3 bytes. "),s("code",[t._v("(640 x 480 x 3) / 1024 = 900 KB")])]),t._v(" "),s("p",[t._v("Keep in mind that the RAM available to your mobile app is limited by the platform. It can be as low as 12 MB. And that space is filled by your app's code, the Titanium framework components, and so forth. For that reason, it is imperative that you don't load lots of images into memory at once or you'll exhaust your app's memory. Consider these optimization techniques:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("remove()")]),t._v(' images from the view hierarchy when they\'re not "on the screen" to permit the operating system to free memory')]),t._v(" "),s("ul",[s("li",[t._v("Example: "),s("code",[t._v("myView.remove(myImageView);")])])])]),t._v(" "),s("li",[s("p",[t._v("Set image views to "),s("code",[t._v("null")]),t._v(" once you no longer need those objects to free memory and release proxies")]),t._v(" "),s("ul",[s("li",[t._v("Example: "),s("code",[t._v("myImageView = null;")])])])]),t._v(" "),s("li",[s("p",[t._v("Resize and crop images to the final dimensions at which they'll be shown on screen so that you don't require the system to manipulate any more bytes than necessary")]),t._v(" "),s("ul",[s("li",[t._v("Example: Using "),s("code",[t._v("imageAsResized")]),t._v(" and "),s("a",{attrs:{href:"#!/api/Titanium.Blob-method-imageAsCropped"}},[s("code",[t._v("imageAsCropped")])]),t._v(" on a "),s("a",{attrs:{href:"#!/api/Titanium.Blob"}},[t._v("Ti.Blob")]),t._v(" object.")])])])]),t._v(" "),s("h3",{attrs:{id:"optimizing-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-images"}},[t._v("#")]),t._v(" Optimizing images")]),t._v(" "),s("p",[t._v("To minimize storage, distribution IPA/APK/XAP size, and reduce network (data) usage, you should optimize the images you use in your app. You should both resize and crop images, and optimize the resulting files to achieve a balance between best data compression and image quality.")]),t._v(" "),s("p",[t._v("Resize images prior to including them in your app. Keep in mind the screen dimensions and pixel densities of the devices on which your images will be shown. It is not efficient to use a 1024 x 768 image on a device that has a 640 x 480 screen. Crop or resize images prior to including them with your app's source code or publishing them to a URL from which your app will download them.")]),t._v(" "),s("p",[t._v('Both PNG and JPG files are compressed formats. However, the tools typically used to create those images might not provide optimally-compressed images. For example, a digital camera will create a much larger (though admittedly higher-quality) JPG image than the "optimize for web" routines offered by a program like Photoshop.')]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Platform")]),t._v(" "),s("th",[t._v("File type")]),t._v(" "),s("th",[t._v("Tool")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Mac")]),t._v(" "),s("td",[t._v("PNG, JPG, & GIF")]),t._v(" "),s("td",[t._v("ImageOptim - "),s("a",{attrs:{href:"https://imageoptim.com/mac",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://imageoptim.com/mac"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("Mac, Windows, Linux")]),t._v(" "),s("td",[t._v("PNG, JPG & GIF")]),t._v(" "),s("td",[t._v("ImageMagick - "),s("a",{attrs:{href:"http://www.imagemagick.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.imagemagick.org"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("Windows/DOS")]),t._v(" "),s("td",[t._v("PNG")]),t._v(" "),s("td",[t._v("PNGCrush - "),s("a",{attrs:{href:"https://pmt.sourceforge.io/pngcrush",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pmt.sourceforge.io/pngcrush"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("Windows")]),t._v(" "),s("td",[t._v("JPG")]),t._v(" "),s("td",[t._v("Nikkho - "),s("a",{attrs:{href:"https://sourceforge.net/projects/nikkhokkho/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://sourceforge.net/projects/nikkhokkho"),s("OutboundLink")],1)])])])]),t._v(" "),s("h3",{attrs:{id:"caching-remote-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#caching-remote-images"}},[t._v("#")]),t._v(" Caching remote images")]),t._v(" "),s("p",[t._v("You can display both local and remote images in an ImageView. When loading remote images, you should set the "),s("code",[t._v("defaultImage")]),t._v(" property to a local image, which will be displayed while the remote image is being downloaded. Remote images are cached automatically on the iOS-, Android- and Windows platform.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Android Note")]),t._v(" "),s("p",[t._v("Android 6 and later uses runtime permissions to secure the user's privacy. Therefore, you should call "),s("code",[t._v("Ti.Filesystem.requestStoragePermissions()")]),t._v(" before attempting to load remote images.")])]),t._v(" "),s("p",[t._v("Caching remote images helps improves your application's performance by loading images more quickly, and won't re-download the images, which consumes users' data quotas unnecessarily.")]),t._v(" "),s("p",[t._v("On the Android platform, the cache can even be limited to 25 MB and data remains for the lifetime of the application (as long as it's installed on device). On the iOS platform, the cache size is not predetermined (size cannot be guaranteed) and data remains there until iOS cleans the directory (needs more local storage). To manually clean the cache directory, delete the files in the "),s("code",[t._v("applicationCacheDirectory")]),t._v(".")]),t._v(" "),s("p",[t._v("To manually cache remote images, below is a sample utility function that you can use to cache a remote images to the app's "),s("code",[t._v("applicationDataDirectory")]),t._v(". (In addition to below, you'll find this code at "),s("a",{attrs:{href:"https://gist.github.com/1901680",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gist.github.com/1901680"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Utils "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* modified version of https://gist.github.com/1243697 */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_getExtension")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CREDITS: http://stackoverflow.com/a/680982/292947")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(?:\\.([^.]+))?$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tmpext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmpext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" tmpext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("RemoteImage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" md5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" needsToSave "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" savedFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      md5 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5HexDigest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_getExtension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      savedFile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applicationDataDirectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" md5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" savedFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        needsToSave "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createImageView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("needsToSave "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" saveImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        savedFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createImageView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FILL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FILL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" saveImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example usage")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RemoteImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/appcelerator/kitchensink-v2/master/app/assets/images/titanium-logo.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  defaultImage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' myDefaultImage.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("Optimizing images will help you create smaller installation files. The same is true of using "),s("code",[t._v("defaultImage")]),t._v(" placeholders and downloading/caching final images from a remote source. You'll also minimize your user's consumption of data bandwidth by cropping and optimizing images.")])])}),[],!1,null,null,null);a.default=n.exports}}]);