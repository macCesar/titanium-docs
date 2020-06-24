(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{2388:function(e,t,i){"use strict";i.r(t);var o=i(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"configuring-push-services"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-push-services"}},[e._v("#")]),e._v(" Configuring Push Services")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("Google has transitioned from Google Cloud Messaging (GCM) to "),o("a",{attrs:{href:"http://firebase.google.com/docs/cloud-messaging/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firebase Cloud Messaging"),o("OutboundLink")],1),e._v(" (FCM) technology for push. We encourage developers to use FCM.")])]),e._v(" "),o("p",[e._v("To send push notifications, Mobile Backend Services (MBS) relies on the FCM for Android applications, and the Apple Push Notification (APN) service for iOS applications. To use these services in your Titanium application, you first need to enable either FCM, or APN for your application, and then configure MBS with information about your push service. This guide walks you through the process of creating and configuring push services for your application.")]),e._v(" "),o("h2",{attrs:{id:"configuring-push-services-for-ios-devices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-push-services-for-ios-devices"}},[e._v("#")]),e._v(" Configuring push services for iOS devices")]),e._v(" "),o("p",[e._v("To enable Apple Push Notification service for your application, you need to create an Apple Push Notification certificate and upload the certificate to the MBS server. Note that iOS simulators cannot receive Apple push notifications.")]),e._v(" "),o("h3",{attrs:{id:"create-and-upload-a-push-notification-certificate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-and-upload-a-push-notification-certificate"}},[e._v("#")]),e._v(" Create and Upload a Push Notification Certificate")]),e._v(" "),o("p",[e._v("To create an Apple Push Notification certificate, you need to first create an Explicit App ID. The App ID identifies where to send the push notification, which is tied to the certificate when you create it. After you create the certificate, export the certificate to PKCS #12 format and upload it to the MBS server. This certificate allows the MBS server to communicate with the Apple Push Notification server.")]),e._v(" "),o("h4",{attrs:{id:"register-an-app-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#register-an-app-id"}},[e._v("#")]),e._v(" Register an App ID")]),e._v(" "),o("p",[e._v("You first need to register an App ID for your application.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Log in to the "),o("a",{attrs:{href:"https://developer.apple.com/membercenter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Member Center"),o("OutboundLink")],1),e._v(" as the Team Agent or Admin.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Certificates, Identifiers & Profiles")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Identifiers")]),e._v(", then click the add ("),o("strong",[e._v("+")]),e._v(") button near the top-right corner.")])]),e._v(" "),o("li",[o("p",[e._v("Under "),o("strong",[e._v("App ID Description")]),e._v(", enter a value in the "),o("strong",[e._v("Name")]),e._v(" field.")])]),e._v(" "),o("li",[o("p",[e._v("Select the "),o("strong",[e._v("App ID Prefix")]),e._v(" to use. (You cannot use a Wildcard App ID for an application with push notifications.)")])]),e._v(" "),o("li",[o("p",[e._v("In the the "),o("strong",[e._v("App ID Suffix")]),e._v(" section, select "),o("strong",[e._v("Explicit App ID")]),e._v(" and enter your application's ID.")]),e._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("✅")]),e._v(" "),o("p",[e._v("This is the value of the "),o("code",[e._v("<id>")]),e._v(" element in your project's "),o("strong",[e._v("tiapp.xml")]),e._v(" file.")])])]),e._v(" "),o("li",[o("p",[e._v("Under "),o("strong",[e._v("App Services")]),e._v(", check the "),o("strong",[e._v("Push Notifications")]),e._v(" checkbox.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Continue")]),e._v(", "),o("strong",[e._v("Submit")]),e._v(", and "),o("strong",[e._v("Done")]),e._v(" to complete the process.")])])]),e._v(" "),o("p",[e._v("The next step is to generate a certificate that approves your application for the Apple Push Notification service.")]),e._v(" "),o("h4",{attrs:{id:"generate-an-apple-push-notification-certificate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generate-an-apple-push-notification-certificate"}},[e._v("#")]),e._v(" Generate an Apple Push Notification Certificate")]),e._v(" "),o("p",[e._v("These directions cover how to generate an Apple Push Notification certificate for both testing (Development) and production (Distribution). Only step #4 differs based on which certificate you create.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Log in to the "),o("a",{attrs:{href:"https://developer.apple.com/membercenter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Member Center"),o("OutboundLink")],1),e._v(" as the Team Agent or Admin.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Certificates, Identifiers & Profiles")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Certificates")]),e._v(", then click the add ("),o("strong",[e._v("+")]),e._v(") button near the top-right corner.")])]),e._v(" "),o("li",[o("p",[e._v("For application in development, select "),o("strong",[e._v("Apple Push Notification service SSL (Sandbox)")]),e._v(". For production applications, select "),o("strong",[e._v("Apple Push Notification service SSL (Sandbox & Production)")]),e._v(", then click "),o("strong",[e._v("Continue")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select the App ID that you created previously from the drop-down list, then click "),o("strong",[e._v("Continue")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Follow the instructions provided for creating a Certificate Signing Request (CSR). Click "),o("strong",[e._v("Continue")]),e._v(" once you've created the CSR.")])]),e._v(" "),o("li",[o("p",[e._v("Locate the CSR you created and click "),o("strong",[e._v("Generate")]),e._v(". You are returned to the Certificates page with the status listed as Pending. Wait a moment then refresh the page in your browser. If asked to approve the request, click "),o("strong",[e._v("Approve")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Download")]),e._v(" to download the certificate (.cer) file to your computer.")])]),e._v(" "),o("li",[o("p",[e._v("Double-click the file to install it into your keychain.")])])]),e._v(" "),o("p",[e._v("Now that you've created the push notification certificate, you need to export it in a format that you provide API Builder.")]),e._v(" "),o("h4",{attrs:{id:"export-the-certificate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#export-the-certificate"}},[e._v("#")]),e._v(" Export the Certificate")]),e._v(" "),o("p",[e._v("Once you've created the certificate, you need to export it in a format that you can provide to API Builder.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open "),o("strong",[e._v("Keychain Access")]),e._v(" (Applications > Utilities > Keychain Access).")])]),e._v(" "),o("li",[o("p",[e._v("Under "),o("strong",[e._v("Categories")]),e._v(" in the the left side navigation, click "),o("strong",[e._v("My Certificates")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select the certificate you installed previously and select "),o("strong",[e._v("File > Export Items...")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("Personal Information Exchange (.p12)")]),e._v(" from the File Format menu and click "),o("strong",[e._v("Save")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Enter a password for the certificate, then click "),o("strong",[e._v("Save")]),e._v(".")])])]),e._v(" "),o("p",[e._v("Keychain exports your certificate as a PKCS #12 file that you upload to MBS to enable Apple Push Notification for your application.")]),e._v(" "),o("h4",{attrs:{id:"upload-certificate-to-dashboard"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-certificate-to-dashboard"}},[e._v("#")]),e._v(" Upload certificate to Dashboard")]),e._v(" "),o("p",[e._v("You use "),o("a",{attrs:{href:"http://platform.appcelerator.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dashboard"),o("OutboundLink")],1),e._v(" to upload the .p12 certificate file to API Builder and enable notifications within your application.")]),e._v(" "),o("p",[o("strong",[e._v("To upload the certificate using Dashboard:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open "),o("a",{attrs:{href:"https://platform.appcelerator.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dashboard"),o("OutboundLink")],1),e._v(" and select your MBS application from the "),o("strong",[e._v("Apps")]),e._v(" drop-down menu.")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("Push Notifications")]),e._v(" on the left-side navigation.")])]),e._v(" "),o("li",[o("p",[e._v("Select the "),o("strong",[e._v("iOS")]),e._v(" tab.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Choose File")]),e._v(", locate the .p12 file you exported previously, and click "),o("strong",[e._v("Open")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Certificate Password")]),e._v(" field enter the password you selected when you generated the certificate.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(928),alt:"iOS_push_configuration_latest"}})])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Save Changes")]),e._v(". If the password you entered was incorrect, an error dialog will alert you.")])])]),e._v(" "),o("h2",{attrs:{id:"configuring-push-services-for-android-devices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-push-services-for-android-devices"}},[e._v("#")]),e._v(" Configuring push services for Android devices")]),e._v(" "),o("p",[e._v("To enable push services for your Android application, create a Firebase project, and obtain a send.")]),e._v(" "),o("h3",{attrs:{id:"configuring-api-builder-application-for-fcm-service"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-api-builder-application-for-fcm-service"}},[e._v("#")]),e._v(" Configuring API Builder application for FCM service")]),e._v(" "),o("p",[e._v("With FCM enabled, you need to update your application's settings page in "),o("a",{attrs:{href:"https://platform.appcelerator.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dashboard"),o("OutboundLink")],1),e._v(" with the API key and sender ID you generated.")]),e._v(" "),o("p",[o("strong",[e._v("To configure API Builder for push notifications using Dashboard:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open "),o("a",{attrs:{href:"https://dashboard.appcelerator.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dashboard"),o("OutboundLink")],1),e._v(" and select your application from the "),o("strong",[e._v("Apps")]),e._v(" drop-down menu.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Push Notifications")]),e._v(" on the left-side navigation.")])]),e._v(" "),o("li",[o("p",[e._v("Select the "),o("strong",[e._v("Android")]),e._v(" tab.")])]),e._v(" "),o("li",[o("p",[e._v("Enter the server key in the "),o("strong",[e._v("Server Key")]),e._v(" field and the sender ID in the "),o("strong",[e._v("Sender ID")]),e._v(" field. To find your Server Key and Sender ID, go to "),o("a",{attrs:{href:"https://firebase.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firebase"),o("OutboundLink")],1),e._v(". From there, click on "),o("strong",[e._v("Settings")]),e._v(" (cog) > "),o("strong",[e._v("Cloud Messaging")]),e._v(". This page will show your Sender ID (should be the same as your project number) and your Server Key.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(929),alt:"Android_cloud_messaging_conf_latest"}})])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Save Changes")]),e._v(".")])])]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(": If you are still seeing the following error message when pushing a notification, uninstall the app and rebuild it:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Exception Type: GCM; Error Code: 3006; Error Message: The sender_id contained in the registration_id does not match the sender_id used to register with the GCM servers\n")])])])])}),[],!1,null,null,null);t.default=r.exports},928:function(e,t,i){e.exports=i.p+"assets/img/iOS_push_configuration_latest.00b5b094.png"},929:function(e,t,i){e.exports=i.p+"assets/img/Android_cloud_messaging_conf_latest.57929045.png"}}]);