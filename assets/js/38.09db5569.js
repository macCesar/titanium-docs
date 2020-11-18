(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1259:function(t,e,i){"use strict";i.r(e);var o=i(21),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"distributing-to-enterprise-app-stores"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#distributing-to-enterprise-app-stores"}},[t._v("#")]),t._v(" Distributing to Enterprise App Stores")]),t._v(" "),o("div",{staticClass:"danger custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("❗️ Enterprise Subscription Required!")]),t._v(" "),o("p",[t._v("This AMPLIFY Appcelerator Services feature requires an Enterprise Subscription.")])]),t._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),o("p",[t._v("Enterprise app stores are private app stores where access to applications is controlled by the company. Employees must be authenticated to download and install internally developed applications. Appcelerator Studio allows you to package Android and iOS applications and upload them to a Mobile Application Management platform that can be published to an enterprise app store. You can publish your application to AirWatch's or MobileIron's platform.")]),t._v(" "),o("h2",{attrs:{id:"airwatch-platform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#airwatch-platform"}},[t._v("#")]),t._v(" AirWatch Platform")]),t._v(" "),o("p",[t._v("Before publishing to AirWatch, you need install the AirWatch plugin on Appcelerator Studio. After the plugin is installed, start the publishing process from the right-click context menu. You need to create an AirWatch publish target. A publish target consists of a host URL, username, password and API key associated with an alias. You can create one during the "),o("strong",[t._v("Target")]),t._v(" step of the "),o("strong",[t._v("Publish to AirWatch")]),t._v(" wizard.")]),t._v(" "),o("p",[t._v("You also need the following items to package an application:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("For Android applications, generate a keypair and certificate to sign your applications. For help, see "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_Android_apps/#generate-a-keypair-and-certificate"}},[t._v("Distributing Android apps: Generate keypair and certificate")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[t._v("For iOS applications, create a distribution certificate and provisioning profile to sign your application. For help, see "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/"}},[t._v("Distributing iOS apps")]),t._v(".")],1)])]),t._v(" "),o("h3",{attrs:{id:"install-the-airwatch-plugin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-the-airwatch-plugin"}},[t._v("#")]),t._v(" Install the AirWatch Plugin")]),t._v(" "),o("p",[t._v("Appcelerator Studio requires AirWatch integration to be installed as a separate plugin. To install the plugin:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Launch Appcelerator Studio.")])]),t._v(" "),o("li",[o("p",[t._v("From the menu bar, select "),o("strong",[t._v("Help")]),t._v(" > "),o("strong",[t._v("Install New Software...")]),t._v(" The "),o("strong",[t._v("Install")]),t._v(" wizard appears.")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Add")]),t._v(". A dialog appears asking for the name and location of the update site.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("For "),o("strong",[t._v("Name")]),t._v(", enter 'AirWatch' or something similar.")])]),t._v(" "),o("li",[o("p",[t._v("For "),o("strong",[t._v("Location")]),t._v(", copy and paste one of the the following URLs:")]),t._v(" "),o("ol",[o("li",[t._v("Release Candidate Build: "),o("a",{attrs:{href:"http://preview.appcelerator.com/appcelerator/studio/airwatch/update/rc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://preview.appcelerator.com/appcelerator/studio/airwatch/update/rc/"),o("OutboundLink")],1)])])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("OK")]),t._v(".")])])])]),t._v(" "),o("li",[o("p",[t._v("An item called "),o("strong",[t._v("AirWatch Integration")]),t._v(" should appear. Select to install it, that is, make sure the box is checked, then click "),o("strong",[t._v("Finish")]),t._v("**.**")])]),t._v(" "),o("li",[o("p",[t._v("Follow the rest of the wizard directions to install it. When prompted, restart Studio.")])])]),t._v(" "),o("h3",{attrs:{id:"obtain-the-host-url-and-api-key"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#obtain-the-host-url-and-api-key"}},[t._v("#")]),t._v(" Obtain the Host URL and API Key")]),t._v(" "),o("p",[t._v("In order to publish to AirWatch, you need to obtain a REST API key and endpoint. Retrieve both pieces of information from the AirWatch Web Console.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Login to the "),o("a",{attrs:{href:"https://apidev.awmdm.com/AirWatch",target:"_blank",rel:"noopener noreferrer"}},[t._v("AirWatch Web Console"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("In the left navigation bar, click "),o("strong",[t._v("Groups & Settings")]),t._v(" and select "),o("strong",[t._v("All Settings")]),t._v(" to open the "),o("strong",[t._v("Settings")]),t._v(" dialog**.**")])]),t._v(" "),o("li",[o("p",[t._v("Under the "),o("strong",[t._v("System")]),t._v(" section, click "),o("strong",[t._v("Advanced")]),t._v(", then select "),o("strong",[t._v("API")]),t._v(" > "),o("strong",[t._v("REST")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Make sure "),o("strong",[t._v("Enable API Access")]),t._v(" is checked if it is not already enabled. Copy the API Key field. You need to paste the value to the API Key field when registering an AirWatch target.")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Site URLs")]),t._v(" in the left navigation bar under the "),o("strong",[t._v("System")]),t._v(" section.")])]),t._v(" "),o("li",[o("p",[t._v("Copy the host name of the REST URL field (without the protocol and any paths). You need to paste the value to the Host URL field when registering an AirWatch target. By default, the hostname is "),o("code",[t._v("apidev-as.awmdm.com")]),t._v(".")])])]),t._v(" "),o("h3",{attrs:{id:"publish-to-airwatch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#publish-to-airwatch"}},[t._v("#")]),t._v(" Publish to AirWatch")]),t._v(" "),o("p",[t._v("To publish an application to "),o("strong",[t._v("AirWatch")]),t._v(":")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("In the "),o("strong",[t._v("Project Explorer")]),t._v(" view, right-click the project to package.")])]),t._v(" "),o("li",[o("p",[t._v("Select "),o("strong",[t._v("Publish")]),t._v(" > "),o("strong",[t._v("AirWatch")]),t._v(" > "),o("strong",[t._v("Publish...")]),t._v(". to open the "),o("strong",[t._v("Publish to AirWatch")]),t._v(" wizard.")])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Target")]),t._v(" step:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Select the platform to deploy to, either Android or iOS.")])]),t._v(" "),o("li",[o("p",[t._v("Select a Publish Target. If you have not created a publish target, click "),o("strong",[t._v("Register Existing")]),t._v("**...** to open the "),o("strong",[t._v("Register AirWatch target")]),t._v(" dialog to enter your AirWatch information. Click "),o("strong",[t._v("OK")]),t._v(" when you are finished.")]),t._v(" "),o("p",[o("img",{attrs:{src:i(703),alt:"AirWatchTarget"}})])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Next")]),t._v(".")])])])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Configuration")]),t._v(" step, enter a name, version number and description for your application, then click "),o("strong",[t._v("Next")]),t._v(". Some of these fields will be auto-populated by existing information from the "),o("code",[t._v("tiapp.xml")]),t._v(" file.")])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Platform")]),t._v(" step:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("For Android applications, enter the following information:")]),t._v(" "),o("ol",[o("li",[o("p",[o("strong",[t._v("Android SDK Version")]),t._v(": Select the version of the tools to build your application.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Distribution Location")]),t._v("**😗* Path where the Android application package (APK) file will be copied to.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Keystore Location")]),t._v(": Path to your keystore file that is used to sign your application. Click the "),o("strong",[t._v("New")]),t._v(" button to create a new keystore.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Keystore Password")]),t._v("**😗* Password to your keystore.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Keypair password")]),t._v(": Password for the keystore private key.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Key Alias")]),t._v(": Alias associated with your application's certificate.")])])])]),t._v(" "),o("li",[o("p",[t._v("For iOS applications, select the Distribution Certificate, Keychain, Provision Profile and SDK Version to use.")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Next")]),t._v(".")])])])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Summary")]),t._v(" step, review the information you entered. To restart the wizard after you start the publishing process, check "),o("strong",[t._v("Restart")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Publish")]),t._v(".")])])]),t._v(" "),o("p",[t._v("After Appcelerator Studio finishes uploading your application, Studio opens the AirWatch Web Console in your default browser. Use the web console to manage the distribution of your application, then users can use the AirWatch application to download it.")]),t._v(" "),o("h2",{attrs:{id:"mobileiron-platform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mobileiron-platform"}},[t._v("#")]),t._v(" MobileIron Platform")]),t._v(" "),o("p",[t._v("Before publishing to MobileIron, you need install the MobileIron plugin on Appcelerator Studio. After the plugin is installed, start the publishing process from the right-click context menu. You need to create an MobileIron publish target. A publish target consists of a host URL, username and password with an alias. You can create one during the "),o("strong",[t._v("Target")]),t._v(" step of the "),o("strong",[t._v("Publish to MobileIron")]),t._v(" wizard.")]),t._v(" "),o("p",[t._v("You also need the following items to package an application:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("For Android applications, generate a keypair and certificate to sign your applications. For help, see "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_Android_apps/#generate-a-keypair-and-certificate"}},[t._v("Distributing Android apps: Generate keypair and certificate")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[t._v("For iOS applications, create a distribution certificate and provisioning profile to sign your application. For help, see "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/"}},[t._v("Distributing iOS apps")]),t._v(".")],1)])]),t._v(" "),o("h3",{attrs:{id:"install-the-mobileiron-plugin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-the-mobileiron-plugin"}},[t._v("#")]),t._v(" Install the MobileIron Plugin")]),t._v(" "),o("p",[t._v("Appcelerator Studio requires MobileIron integration to be installed as a separate plugin. To install the plugin:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Launch Appcelerator Studio.")])]),t._v(" "),o("li",[o("p",[t._v("From the menu bar, select "),o("strong",[t._v("Help")]),t._v(" > "),o("strong",[t._v("Install New Software...")]),t._v(" The "),o("strong",[t._v("Install")]),t._v(" wizard appears.")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Add")]),t._v(". A dialog appears asking for the name and location of the update site.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("For "),o("strong",[t._v("Name")]),t._v(", enter 'MobileIron' or something similar.")])]),t._v(" "),o("li",[o("p",[t._v("For "),o("strong",[t._v("Location")]),t._v(", copy and paste one of the the following URLs:")]),t._v(" "),o("ol",[o("li",[t._v("Release Candidate Build: "),o("a",{attrs:{href:"http://preview.appcelerator.com/appcelerator/studio/mobileiron/update/rc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://preview.appcelerator.com/appcelerator/studio/mobileiron/update/rc/"),o("OutboundLink")],1)])])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("OK")]),t._v(".")])])])]),t._v(" "),o("li",[o("p",[t._v("An item called "),o("strong",[t._v("MobileIron Integration")]),t._v(" should appear. Select to install it, that is, make sure the box is checkmarked, then click "),o("strong",[t._v("Finish")]),t._v("**.**")])]),t._v(" "),o("li",[o("p",[t._v("Follow the rest of the wizard directions to install it. When prompted, restart Studio.")])])]),t._v(" "),o("h3",{attrs:{id:"publish-to-mobileiron"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#publish-to-mobileiron"}},[t._v("#")]),t._v(" Publish to MobileIron")]),t._v(" "),o("p",[t._v("To publish an application to "),o("strong",[t._v("MobileIron's Enterprise App Storefront")]),t._v(":")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("In the "),o("strong",[t._v("Project Explorer")]),t._v(" view, right-click the project to package.")])]),t._v(" "),o("li",[o("p",[t._v("Select "),o("strong",[t._v("Publish")]),t._v(" > "),o("strong",[t._v("Mobile****Iron")]),t._v(" > "),o("strong",[t._v("Publish...")]),t._v(". to open the "),o("strong",[t._v("Publish to Mobile Iron")]),t._v(" wizard.")]),t._v(" "),o("p",[o("img",{attrs:{src:i(704),alt:"MobileIronRightContextMenu"}})])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Target")]),t._v(" step:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Select the platform to deploy to, either Android or iOS.")])]),t._v(" "),o("li",[o("p",[t._v("Select a Publish Target. If you have not created a publish target, click "),o("strong",[t._v("Register Existing")]),t._v("**...** to open the "),o("strong",[t._v("Register MobileIron target")]),t._v(" dialog to enter your MobileIron information. Click "),o("strong",[t._v("OK")]),t._v(" when you are finished.")]),t._v(" "),o("p",[o("img",{attrs:{src:i(705),alt:"MobileIronTarget"}})])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Next")]),t._v(".")])])])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Configuration")]),t._v(" step:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Enter a name, version number and description for your application. Some of these fields will be auto-populated by existing information from the "),o("code",[t._v("tiapp.xml")]),t._v(" file.")])]),t._v(" "),o("li",[o("p",[t._v("To remove the application if a policy is broken or a device is signed out in multi-user mode, check "),o("strong",[t._v("Quarantinable")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("To highlight the app in the featured list, check "),o("strong",[t._v("Featured")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Next")]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:i(706),alt:"ConfigurationStep"}})])])])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Platform")]),t._v(" step:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("For Android applications, enter the following information:")]),t._v(" "),o("ol",[o("li",[o("p",[o("strong",[t._v("Android SDK Version")]),t._v(": Select the version of the tools to build your application.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Distribution Location")]),t._v("**😗* Path where the Android application package (APK) file will be copied to.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Keystore Location")]),t._v(": Path to your keystore file that is used to sign your application. Click the "),o("strong",[t._v("New")]),t._v(" button to create a new keystore.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Keystore Password")]),t._v("**😗* Password to your keystore.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Keypair password")]),t._v(": Password for the keystore private key.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Key Alias")]),t._v(": Alias associated with your application's certificate.")])])])]),t._v(" "),o("li",[o("p",[t._v("For iOS applications, select the Distribution Certificate, Keychain, Provision Profile and SDK Version to use.")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Next")]),t._v(".")])])])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Summary")]),t._v(" step, review the information you entered. To restart the wizard after you start the publishing process, check "),o("strong",[t._v("Restart")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Publish")]),t._v(".")])])]),t._v(" "),o("p",[t._v("After Appcelerator Studio finishes uploading your application, Studio opens the MobileIron Admin portal in your default browser. Use the portal to manage the distribution of your application, then users can use the MobileIron application to download it.")])])}),[],!1,null,null,null);e.default=r.exports},703:function(t,e,i){t.exports=i.p+"assets/img/AirWatchTarget.46a32965.png"},704:function(t,e,i){t.exports=i.p+"assets/img/MobileIronRightContextMenu.d1e718a6.png"},705:function(t,e,i){t.exports=i.p+"assets/img/MobileIronTarget.51b24af7.png"},706:function(t,e,i){t.exports=i.p+"assets/img/ConfigurationStep.f40da319.png"}}]);