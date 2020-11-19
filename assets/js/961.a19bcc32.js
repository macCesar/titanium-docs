(window.webpackJsonp=window.webpackJsonp||[]).push([[961],{1734:function(e,a,t){"use strict";t.r(a);var s=t(21),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"installing-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-node"}},[e._v("#")]),e._v(" Installing Node")]),e._v(" "),t("p",[e._v("Node.js is required for several Appcelerator components, including the Axway Appcelerator CLI, Alloy, and the API Builder. Node.js is also required to build the Titanium SDK.")]),e._v(" "),t("h2",{attrs:{id:"compatibility-and-download"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-and-download"}},[e._v("#")]),e._v(" Compatibility and download")]),e._v(" "),t("p",[e._v("To run all Appcelerator components, you must have Node.js 10.13.0 or later.")]),e._v(" "),t("p",[e._v("On Mac OS X and Windows, if you have selected to install Titanium updates, Studio prompts you to install Node.js. On Linux, you need to manually install Node.js.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/guide/download/attachments/29004836/download_05.png",alt:"download_05"}})]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Operating System")]),e._v(" "),t("th",[e._v("Min Node Version")]),e._v(" "),t("th",[e._v("Max Node Version")]),e._v(" "),t("th",[e._v("Download Location")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("macOS / Windows / Linux")]),e._v(" "),t("td",[e._v("10.13.0")]),e._v(" "),t("td",[e._v("12.X")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official Website"),t("OutboundLink")],1)])])])]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("Before installing the CLI, you should decide where you want the Node Package Manager ("),t("code",[e._v("npm")]),e._v(") to install packages. By default "),t("code",[e._v("npm")]),e._v(" installs into "),t("code",[e._v("/usr/local")]),e._v(" on OS X and Linux, which requires that you run "),t("code",[e._v("npm")]),e._v(" as root. This is not recommended. You can avoid having to run "),t("code",[e._v("npm")]),e._v(" by doing one of the following:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Make the "),t("code",[e._v("/usr/local")]),e._v(" directory writable by all:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("777")]),e._v(" /usr/local\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Set "),t("code",[e._v("npm")]),e._v(" to install to your home directory, or another directory of your choosing by setting the "),t("code",[e._v("npm")]),e._v(" prefix. For example, you can add the following to your "),t("code",[e._v(".bash_profile")]),e._v(" or other initialization file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export NPM_CONFIG_PREFIX=$HOME\n")])])]),t("p",[e._v("Alternately, you can create a .npmrc file in your home directory with the following contents:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("prefix=/path/to/home\n")])])]),t("p",[e._v("Where "),t("em",[e._v("/path/to/home")]),e._v(" is the path to your home directory. Setting the "),t("code",[e._v("npm")]),e._v(" prefix to your home directory causes the "),t("code",[e._v("npm")]),e._v(" packages to be installed to "),t("code",[e._v("$HOME/lib/node_modules")]),e._v(" and launch scripts are installed in "),t("code",[e._v("$HOME/bin")]),e._v(". "),t("code",[e._v("$HOME/bin")]),e._v(" must be in your PATH.")])])]),e._v(" "),t("p",[e._v("If you change your prefix after installing "),t("code",[e._v("npm")]),e._v(" packages, you will have to reinstall packages. If you change the permissions on "),t("code",[e._v("/usr/local")]),e._v(" after installing packages as root, you may need to change the ownership of the "),t("code",[e._v("npm")]),e._v(" cache folder, as described in "),t("a",{attrs:{href:"#TroubleshootingnpmProblems"}},[e._v("Troubleshooting npm Problems")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"using-npm-packages-in-titanium"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-npm-packages-in-titanium"}},[e._v("#")]),e._v(" Using NPM packages in Titanium")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Run "),t("code",[e._v("npm init")]),e._v(" in the "),t("code",[e._v("app/lib")]),e._v(" folder in your "),t("strong",[e._v("Alloy")]),e._v(" project. If you are using a classic app, run the init step in your "),t("code",[e._v("/Resources")]),e._v(" folder.")])]),e._v(" "),t("li",[t("p",[e._v("Follow the steps npm gives you when doing the init step. Note: You don’t have to fill out anything if you don't need to.")])]),e._v(" "),t("li",[t("p",[e._v("Execute "),t("code",[e._v("npm i <packagename>")]),e._v(" in the "),t("code",[e._v("/lib")]),e._v(" folder to install a package. For example, let’s set up "),t("a",{attrs:{href:"https://www.npmjs.com/package/to.imagecache",target:"_blank",rel:"noopener noreferrer"}},[e._v("to.imagecache"),t("OutboundLink")],1),e._v(". You'd use this comment to install the package: "),t("code",[e._v("npm i to.imagecache")])])]),e._v(" "),t("li",[t("p",[e._v("Add the "),t("code",[e._v("lib/node_modules")]),e._v(" folder and the "),t("code",[e._v("package-lock.json")]),e._v(" file to your "),t("code",[e._v(".gitignore")]),e._v(" folder.")])]),e._v(" "),t("li",[t("p",[e._v("On any other machine you want to set this up, go to your "),t("code",[e._v("/lib")]),e._v(" folder, run "),t("code",[e._v("npm install")]),e._v(" and all packages will be installed to your app.")])])]),e._v(" "),t("h3",{attrs:{id:"usage-of-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-of-packages"}},[e._v("#")]),e._v(" Usage of packages")]),e._v(" "),t("p",[e._v("Usage of a package is like another module or library file. Using the "),t("code",[e._v("to.imagecache")]),e._v(" example:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" imageCache "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'to.imagecache'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h3",{attrs:{id:"dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),t("p",[e._v("To install a package dependency,")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Ensure you are in the "),t("code",[e._v("/lib")]),e._v(" folder, or if using a classic project, the "),t("code",[e._v("/Resources")]),e._v(" folder.")])]),e._v(" "),t("li",[t("p",[e._v("Execute "),t("code",[e._v("npm i <dependency>")])])]),e._v(" "),t("li",[t("p",[e._v("To use the dependency, for example a module called "),t("code",[e._v("ImageView")]),e._v(" from the "),t("code",[e._v("to.cacheimageview")]),e._v(" (sample extension of the "),t("code",[e._v("to.imagecache")]),e._v(" package):")]),e._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("ImageView")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("id")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("myImage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("module")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("to.cachedimageview"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"finding-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-packages"}},[e._v("#")]),e._v(" Finding packages")]),e._v(" "),t("p",[e._v("To find all the current packages with the "),t("code",[e._v("titanium-module")]),e._v(", you can use this npm site search: "),t("a",{attrs:{href:"https://www.npmjs.com/search?q=keywords:titanium-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.npmjs.com/search?q=keywords:titanium-module"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("A lot of Titanium packages are found using the "),t("strong",[e._v("titanium")]),e._v(" or "),t("strong",[e._v("titanium-module")]),e._v(" keywords. Note: when creating a public common.js module and/or library file, please tag it with the "),t("code",[e._v("titanium-module")]),e._v(" keyword.")]),e._v(" "),t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("h3",{attrs:{id:"error-eont-stat-c-users-user-name-appdata-roaming-npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-eont-stat-c-users-user-name-appdata-roaming-npm"}},[e._v("#")]),e._v(" Error: EONT, stat C:\\Users\\<USER_NAME>\\AppData\\Roaming\\npm")]),e._v(" "),t("p",[e._v("The error message indicates the folder is missing. To resolve this issue, manually create the folder:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mkdir C:\\Users\\<USER_NAME>\\AppData\\Roaming\\npm\n")])])]),t("h3",{attrs:{id:"issues-installing-npm-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#issues-installing-npm-packages"}},[e._v("#")]),e._v(" Issues installing NPM packages")]),e._v(" "),t("p",[e._v("If you experience an issue installing any of the "),t("code",[e._v("npm")]),e._v(" packages, try the following:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Check permissions. If you originally ran "),t("code",[e._v("npm")]),e._v(" using "),t("code",[e._v("sudo")]),e._v(", you may need to change the ownership of the "),t("code",[e._v("npm")]),e._v(" cache folder.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ~/.npmrc\n")])])]),t("p",[e._v("On Windows, the npm cache defaults to "),t("code",[e._v("npm-cache")]),e._v(" in the user's home folder.")])]),e._v(" "),t("li",[t("p",[e._v("Clear the "),t("code",[e._v("npm")]),e._v(" package cache:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" cache clean\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Remove your "),t("code",[e._v(".npmrc")]),e._v(" file.")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);