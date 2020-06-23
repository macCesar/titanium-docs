(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{324:function(e,t,n){"use strict";n.r(t);var i=n(4),a=Object(i.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"modules-identity-keychainitem"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules-identity-keychainitem","aria-hidden":"true"}},[e._v("#")]),e._v(" Modules.Identity.KeychainItem")]),e._v(" "),n("TypeHeader"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The following example demonstrates the basic usage to save, read and delete\nvalues with the native iOS Keychain and/or Android Keystore:")]),e._v(" "),n("pre",[n("code",[e._v("var Identity = require('ti.identity');\n\n// Create a keychain item\nvar keychainItem = Identity.createKeychainItem({\n    identifier: 'password'\n});\n\n// Triggered when the keychain item was successfully saved\nkeychainItem.addEventListener('save', function(e) {\n    // Notify the user that the operation succeeded or failed\n});\n\n// Write to the keychain\nkeychainItem.save('s3cr3t_p4$$w0rd');\n")])]),e._v(" "),n("p",[e._v("For advanced security options, you can specify accessibility mode to the keychain\nthat will be applied when writing items to the keychain, for example:")]),e._v(" "),n("pre",[n("code",[e._v(" var Identity = require('ti.identity');\n\n // Create a keychain item\n var keychainItem = Identity.createKeychainItem({\n   identifier: 'mypassword',\n   service: 'my_service', // iOS only. Defaults to 'ti.touchid' for backwards compatibility\n   accessGroup: '<YOUR-TEAM-ID>.com.appc.identitytest',\n   accessibilityMode: Identity.ACCESSIBLE_WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,\n   accessControlMode: Identity.ACCESS_CONTROL_TOUCH_ID_ANY,\n   // Pass more native options to the keychain. Since there are hundrets of them,\n   // look up the value of the constant and pass it here. Example:\n     options: {\n       // The value of kSecUseOperationPrompt\n       'u_OpPrompt': 'Please authenticate yourself!'\n   }\n });\n")])]),e._v(" "),n("ApiDocs")],1)},[],!1,null,null,null);t.default=a.exports}}]);