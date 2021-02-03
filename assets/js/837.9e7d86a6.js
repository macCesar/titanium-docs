(window.webpackJsonp=window.webpackJsonp||[]).push([[837],{1985:function(e,t,a){"use strict";a.r(t);var s=a(21),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"appcelerator-cli-getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appcelerator-cli-getting-started"}},[e._v("#")]),e._v(" Appcelerator CLI Getting Started")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Appcelerator provides a command-line interface to check and configure your environment setup, create and build applications, and much more. This guide covers how to install the Appcelerator CLI and execute some common tasks.")]),e._v(" "),a("p",[e._v("Run "),a("strong",[a("code",[e._v("appc --help")])]),e._v(" to see all available target options or see the "),a("RouterLink",{attrs:{to:"/guide/Appcelerator_CLI/Appcelerator_CLI_How-tos/Appcelerator_Command-Line_Interface_Reference/"}},[e._v("Appcelerator Command-Line Interface Reference")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("To setup the Appcelerator CLI, install Node.js, install the "),a("code",[e._v("appcelerator")]),e._v(" module using the NPM CLI, then run the "),a("code",[e._v("appc setup")]),e._v(" command to download and setup the latest CLI package.")]),e._v(" "),a("h3",{attrs:{id:"install-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-node-js"}},[e._v("#")]),e._v(" Install Node.js")]),e._v(" "),a("p",[e._v("The CLI requires Node.js 0.10.13 or later. The minimum Node version depends upon the appc CLI version you want to use. To obtain the exact Node version you need please refer to "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/#node.js"}},[e._v("Titanium Compatibility Matrix#Node.js")]),e._v(". If you don't have Node installed, install it from: "),a("a",{attrs:{href:"http://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nodejs.org"),a("OutboundLink")],1)],1),e._v(" "),a("p",[e._v("Before installing the CLI, you should decide where you want the Node Package Manager ("),a("code",[e._v("npm")]),e._v(") to install packages. By default "),a("code",[e._v("npm")]),e._v(" installs into "),a("code",[e._v("/usr/local")]),e._v(" on OS X, which requires that you run "),a("code",[e._v("npm")]),e._v(" as root. This is not recommended. You can avoid having to run "),a("code",[e._v("npm")]),e._v(" by doing one of the following:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Make the "),a("code",[e._v("/usr/local")]),e._v(" directory writable by all: "),a("code",[e._v("sudo chmod 777 /usr/local")])])]),e._v(" "),a("li",[a("p",[e._v("Set "),a("code",[e._v("npm")]),e._v(" to install to your home directory, or another directory of your choosing by setting the "),a("code",[e._v("npm")]),e._v(" prefix. For example, you can add the following to your "),a("code",[e._v(".bash_profile")]),e._v(" or other initialization file: "),a("code",[e._v("export NPM_CONFIG_PREFIX=$HOME")])])])]),e._v(" "),a("p",[e._v("In this case, "),a("code",[e._v("npm")]),e._v(" packages are installed to "),a("code",[e._v("$HOME/lib/node_modules")]),e._v(" and launch scripts are installed in "),a("code",[e._v("$HOME/bin")]),e._v(". "),a("code",[e._v("$HOME/bin")]),e._v(" must be in your PATH.")]),e._v(" "),a("p",[e._v("For more information, see "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node/"}},[e._v("Installing Node")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"install-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-cli"}},[e._v("#")]),e._v(" Install the CLI")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install the "),a("code",[e._v("appc")]),e._v(" CLI. You many need to prepend the command with "),a("code",[e._v("sudo")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" appcelerator -g\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Setup the AMPLIFY Appcelerator Services environment. This process will download the latest updates, setup the CLI and verify your development environment.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("appc setup\n")])])])]),e._v(" "),a("li",[a("p",[e._v("After getting the latest updates, you are prompted for your AMPLIFY Appcelerator Services credentials.")])]),e._v(" "),a("li",[a("p",[e._v("If you are a member or more than one organization, you will be prompted to select an organization.")])]),e._v(" "),a("li",[a("p",[e._v("Next, you must authorize your computer. Select either to send the authorization code to a phone number (using SMS/text messaging) or e-mail associated with your AMPLIFY Appcelerator Services account.")])]),e._v(" "),a("li",[a("p",[e._v("Enter the code you received.")])]),e._v(" "),a("li",[a("p",[e._v("Finally, the CLI will ask you about the projects you want to develop, and based on your answers, will check your environment to verify it is OK.")])])]),e._v(" "),a("p",[e._v("If you encounter an error installing "),a("code",[e._v("appc")]),e._v(", see "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node/#issues-installing-npm-packages"}},[e._v("Troubleshooting npm Problems")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"update-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-cli"}},[e._v("#")]),e._v(" Update the CLI")]),e._v(" "),a("p",[e._v("The CLI has two components: the NPM package and the Core package, which contains the other CLI components.")]),e._v(" "),a("p",[a("strong",[e._v("To update the NPM package")]),e._v(", run the "),a("strong",[a("code",[e._v("npm install appcelerator -g")])]),e._v(" command. Note that you may need to prefix the command with "),a("code",[e._v("sudo")]),e._v(" on OS X systems.")]),e._v(" "),a("p",[a("strong",[e._v("To update the Core package")]),e._v(", run the "),a("strong",[a("code",[e._v("appc setup")])]),e._v(" command to download and install the latest package.")]),e._v(" "),a("h2",{attrs:{id:"configure-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-cli"}},[e._v("#")]),e._v(" Configure the CLI")]),e._v(" "),a("h3",{attrs:{id:"proxy-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-setup"}},[e._v("#")]),e._v(" Proxy Setup")]),e._v(" "),a("p",[e._v("If you are using the Appcelerator CLI from behind a proxy, you need to configure your proxy server settings using the "),a("code",[e._v("appc config set")]),e._v(" command to set the "),a("code",[e._v("proxyServer")]),e._v(" variable to your proxy server settings.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("appc config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" proxyServer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("://"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("@"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("domain"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("port_number"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## Example")]),e._v("\nappc config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" proxyServer https://admin:password1234@foo.com:554\n")])])]),a("p",[e._v("Note: We encourage you to use "),a("strong",[a("code",[e._v("appc config set cafile")])]),e._v(" as a security option over "),a("code",[e._v("appc config set strictSSL false")]),e._v("as the latter doesn’t do SSL key validation when making requests.")]),e._v(" "),a("h3",{attrs:{id:"set-the-core-package-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-the-core-package-version"}},[e._v("#")]),e._v(" Set the Core Package Version")]),e._v(" "),a("p",[e._v("To use a specific version of the core package (which contains specific versions of the Alloy, Arrow and Titanium CLIs), run the "),a("code",[e._v("appc use <version>")]),e._v(" command. If you do not have the specified version installed, the CLI will download and install it for you.")]),e._v(" "),a("p",[e._v("To see a list of available versions, run the "),a("strong",[a("code",[e._v("appc use")])]),e._v(" command (without a version).")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("appc use\nThe following versions are available:\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5.3")]),e._v(".0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5.3")]),e._v(".1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5.4")]),e._v(".0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5.5")]),e._v(".0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5.5")]),e._v(".1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.0")]),e._v(".0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.1")]),e._v(".0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.1")]),e._v(".2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.1")]),e._v(".4\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.2")]),e._v(".0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.2")]),e._v(".1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.2")]),e._v(".2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.2")]),e._v(".3\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.2")]),e._v(".4\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.3")]),e._v(".0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),e._v(".0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),e._v(".1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),e._v(".2\n")])])]),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),a("p",[e._v("After setting up the CLI, please review "),a("RouterLink",{attrs:{to:"/guide/Appcelerator_CLI/Appcelerator_CLI_How-tos/Appcelerator_CLI_Tasks/"}},[e._v("Appcelerator CLI Tasks")]),e._v(" on building apps with the CLI.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);