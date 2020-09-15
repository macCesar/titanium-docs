(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1002:function(e,t,a){"use strict";a.r(t);var o=a(21),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"native-android-debugging-and-testing-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#native-android-debugging-and-testing-tools"}},[e._v("#")]),e._v(" Native Android Debugging and Testing Tools")]),e._v(" "),o("h2",{attrs:{id:"objective"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),o("p",[e._v("In this section, you will learn the basics of using the native tools included in the Android software development kit for troubleshooting Titanium projects.")]),e._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),o("p",[e._v("There are many tools supplied with the Android SDK. We'll focus on those that are troubleshooting related in this section, specifically DDMS and "),o("code",[e._v("adb")]),e._v(". DDMS (Dalvik Debug Manager Service) is a GUI tool that you can use to monitor and manage Android emulators and devices. "),o("code",[e._v("adb")]),e._v(" is a command-line utility that does most of what DDMS does, plus offers a few tricks that DDMS can't do. We'll explore them separately.")]),e._v(" "),o("h3",{attrs:{id:"accessing-the-emulator-with-ddms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-emulator-with-ddms"}},[e._v("#")]),e._v(" Accessing the emulator with DDMS")]),e._v(" "),o("p",[e._v("In this part, you'll see how to use DDMS to:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("View log output")])]),e._v(" "),o("li",[o("p",[e._v("Access the file system on the emulator or device")])]),e._v(" "),o("li",[o("p",[e._v("Set emulator parameters and simulate operating conditions")])])]),e._v(" "),o("h4",{attrs:{id:"examining-log-output-with-ddms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examining-log-output-with-ddms"}},[e._v("#")]),e._v(" Examining log output with DDMS")]),e._v(" "),o("p",[e._v("You can view emulator or device log output using DDMS. Open DDMS and select the device or emulator in the top-left pane. Log output is displayed in the lower pane, as shown in the screenshot below.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(820),alt:"ddmslog"}})]),e._v(" "),o("p",[e._v("DDMS shows all log output, not just messages from Titanium. Sometimes you need to view all those operating system messages. But in most cases, you will want to filter output to show just Titanium logging output (that output with "),o("code",[e._v("Ti.API.info()")]),e._v(" and so forth). With DDMS, you can define a filter. As shown in the graphic, click the "),o("strong",[e._v("Add Filter")]),e._v(" button, then enter "),o("strong",[e._v("TiAPI")]),e._v(" in the Log Tag field. Click OK to save your filter. Then click it in the list to apply it to the log output.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(821),alt:"ddmsfilter"}})]),e._v(" "),o("h4",{attrs:{id:"simulating-network-conditions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simulating-network-conditions"}},[e._v("#")]),e._v(" Simulating network conditions")]),e._v(" "),o("p",[e._v("You should test your app under less-than-ideal conditions so that you know how it will react as users go into roaming mode, operate over low-speed data networks, and so forth. For example, many users turn off data when they're roaming. If they run your app in such a state, your app should react appropriately rather than crashing. You can simulate such conditions with DDMS. With the emulator running, select the instance in the top-left pane and then click "),o("strong",[e._v("Emulator Control")]),e._v(". In the Telephony Status section, specify voice and data location state (e.g. roaming vs. searching for a signal vs. on their carrier's home network), and data speed and latency.")]),e._v(" "),o("h4",{attrs:{id:"simulating-calls-and-sms-messages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simulating-calls-and-sms-messages"}},[e._v("#")]),e._v(" Simulating calls and SMS messages")]),e._v(" "),o("p",[e._v("You can simulate a call or text message to determine how your app will react to such interruptions. (For example, with a game, you'd want to pause your game so that the player's status doesn't change while they answer a phone call.) With the emulator running, select the instance in the top-left pane and then click "),o("strong",[e._v("Emulator Control")]),e._v(". Scroll down to the Telephony Actions section. Enter a phone number (without any punctuation), select Voice or SMS, enter an optional SMS message, and click Call.")]),e._v(" "),o("h4",{attrs:{id:"setting-gps-coordinates"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-gps-coordinates"}},[e._v("#")]),e._v(" Setting GPS coordinates")]),e._v(" "),o("p",[e._v("The Android emulator doesn't provide a default simulated location so GPS lookups of the current location will fail. You can set a current location with DDMS. With the emulator running, select the instance in the top-left pane and then click "),o("strong",[e._v("Emulator Control")]),e._v('. Scroll down to the Location Controls section. Enter longitude and latitude coordinates and click Send. This transmits the mock coordinates to the emulator, which will be used for "my location" type lookups until the emulator is stopped.')]),e._v(" "),o("h4",{attrs:{id:"exploring-the-file-system-with-ddms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exploring-the-file-system-with-ddms"}},[e._v("#")]),e._v(" Exploring the file system with DDMS")]),e._v(" "),o("p",[e._v("If your app manipulates files, you might want to explore the file system in order to confirm that the files are being created or deleted as you expect. With DDMS, select the emulator or device to examine in the top-left pane, then from the Device menu, choose File System.")]),e._v(" "),o("p",[e._v('You can copy files to the emulator/device by dragging and dropping files into the File Explorer window. Alternatively, select the target location in File Explorer and click the Push File Onto Device button in the File Explorer\'s toolbar. A file-picker dialog opens in which you can select the file to "push" (copy) to the device. To copy a file from the device or emulator, you must "pull" it from the device: select the file, then click the Pull File From Device button in the toolbar. To delete a file or folder, select it in the file tree then click the Delete (minus-sign) button in the toolbar.')]),e._v(" "),o("p",[e._v("Newer Android devices (running Android 4 / Ice Cream Sandwich) use the Android File Transfer application for transferring files, music, and photos to and from your computer. If installed, this application should launch automatically when you plug in or dock your device. You can use the Android File Transfer application to explore your device's handset, though it displays the contents of the SD card only (/mnt/sdcard). DDBMS and "),o("code",[e._v("adb")]),e._v(" enable you to access the entire file system.")]),e._v(" "),o("h4",{attrs:{id:"memory-monitoring-with-ddms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#memory-monitoring-with-ddms"}},[e._v("#")]),e._v(" Memory monitoring with DDMS")]),e._v(" "),o("p",[e._v("DDMS offers monitoring features that work well for native Android developers who write their apps with Java. Those tools are less helpful for Titanium projects because the code you want to debug-your JavaScript-is running within one of the many processes and therefore isn't \"visible\" to DDMS. Still, it can be helpful to watch memory totals to see if usage climbs as your app runs (possibly indicating a memory leak). These tools are also quite helpful if you're developing a native Android module for Titanium.")]),e._v(" "),o("p",[e._v("Google's Android docs cover the basics of using DDMS for monitoring memory usage. See "),o("a",{attrs:{href:"http://developer.android.com/guide/developing/debugging/ddms.html#using-ddms",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://developer.android.com/guide/developing/debugging/ddms.html#using-ddms"),o("OutboundLink")],1),e._v(" for that. You'll also find a fair number of blog posts on the Internet from Java developers describing how they use DDMS for monitoring.")]),e._v(" "),o("h3",{attrs:{id:"accessing-the-emulator-with-adb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-emulator-with-adb"}},[e._v("#")]),e._v(" Accessing the emulator with adb")]),e._v(" "),o("p",[o("code",[e._v("adb")]),e._v(" offers many of the features of DDMS, including the means to:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("View log output")])]),e._v(" "),o("li",[o("p",[e._v("Access the file system on the emulator or device")])]),e._v(" "),o("li",[o("p",[e._v("Access SQLite databases on the emulator or device")])]),e._v(" "),o("li",[o("p",[e._v("Issue shell commands on the emulator or device")])])]),e._v(" "),o("h4",{attrs:{id:"examining-log-output-with-adb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examining-log-output-with-adb"}},[e._v("#")]),e._v(" Examining log output with adb")]),e._v(" "),o("p",[e._v("As with DDMS, you can view the emulator or device log output using the "),o("code",[e._v("adb logcat")]),e._v(" command. If you have more than one emulator or device running, you'll need to supply an argument to the command to specify which device's log to output.")]),e._v(" "),o("p",[e._v("(The following are terminal commands, and those \"comments\" would cause errors. We're just using a code-like means of annotating what's happening in each step. So don't enter the // or what follows.)")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("adb logcat     // if you have just one device connected or emulator running\nadb -d logcat  // for a USB-connected device\nadb -e logcat  // for the emulator\nadb -s emulator-5556 logcat  // to target the emulator running on port 5556\n")])])]),o("p",[e._v("Use the "),o("code",[e._v("adb devices")]),e._v(" command to get a list of connected devices or emulators that you could target. Use the resulting device labels with the "),o("code",[e._v("adb -s")]),e._v(" command. In the examples below, we're omitting the device-targeting switches for simplicity's sake. You might need them in practice.")]),e._v(" "),o("p",[o("code",[e._v("logcat")]),e._v(" outputs in a continuous manner, meaning that the command continues to run and will output more messages as they're logged. To quit out of "),o("code",[e._v("logcat")]),e._v(" press "),o("code",[e._v("Ctrl+C")]),e._v(" on your keyboard. (Mac users take note, that's Control+C, not Command+C).")]),e._v(" "),o("p",[e._v("You can filter log output by using the "),o("code",[e._v("grep")]),e._v(" command (OS X) or "),o("code",[e._v("findstr")]),e._v(" command (Windows). Better yet, just use the built-in "),o("code",[e._v("-s")]),e._v(" argument of the "),o("code",[e._v("logcat")]),e._v(' command. This technique works identically on both platforms. Titanium log statements are tagged with the "TiAPI" tag.')]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("adb logcat | grep TiAPI\nadb logcat -s TiAPI\n")])])]),o("p",[e._v("Alternative, you can follow the Android docs which say to use the "),o("em",[e._v("tag")]),e._v(":"),o("em",[e._v("priority")]),e._v(" filtering option. This technique works just fine, but you need to include an extra argument that tells "),o("code",[e._v("logcat")]),e._v(" to suppress all the other messages:")]),e._v(" "),o("p",[o("strong",[e._v("Displaying only Titanium logging messages")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("adb logcat TiAPI:I *:S  // if you leave off the *:S you'll output the whole log\n")])])]),o("h4",{attrs:{id:"exploring-the-file-system-with-adb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exploring-the-file-system-with-adb"}},[e._v("#")]),e._v(" Exploring the file system with adb")]),e._v(" "),o("p",[e._v("You can copy files to and from an emulator or device using "),o("code",[e._v("adb")]),e._v(" and its commands. There isn't a built-in option to list the files on the device, but you can open a command shell and use a Unix-like "),o("code",[e._v("ls")]),e._v(" command.")]),e._v(" "),o("p",[o("strong",[e._v("Listing files via the adb shell")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("adb shell\n# ls -la  // enter Unix-like commands, with or without options\n# cd /some/path  // to change directories\n# exit    // to close the adb shell\n")])])]),o("p",[e._v("When opening a shell on the emulator, you are logged in with root (superuser) permissions. On a device, you have limited permissions and will not be able to access the entire file system. If you have rooted your device and installed the "),o("code",[e._v("su")]),e._v(" binary, you can gain full access to your device's file system. Be careful to not change or delete any critical files or you could cause your device to stop functioning.")]),e._v(" "),o("p",[e._v("While you can \"walk\" the directory tree via the shell, you can't use it to copy files to and from the device/emulator. Instead, you'll need to use the "),o("code",[e._v("push")]),e._v(" and "),o("code",[e._v("pull")]),e._v(" commands.")]),e._v(" "),o("p",[o("strong",[e._v("Pushing a file to the device/emulator")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("adb push foo.txt /path_on_device/foo.txt\n")])])]),o("p",[o("strong",[e._v("Pulling a file from the device/emulator")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("adb pull /path_on_device/foo.txt /local_path/foo.txt\n")])])]),o("h4",{attrs:{id:"accessing-sqlite-databases-with-adb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessing-sqlite-databases-with-adb"}},[e._v("#")]),e._v(" Accessing SQLite databases with adb")]),e._v(" "),o("p",[e._v("On the emulator and rooted devices, you can open an adb shell and run "),o("code",[e._v("sqlite3")]),e._v(" to access a command-line SQL shell. In this database shell, you can execute SQLite commands such as "),o("code",[e._v("SELECT * FROM yourtable")]),e._v(". Not all Android systems ship with the "),o("code",[e._v("sqlite3")]),e._v(" binary installed. You'll get a \"not found\" error if the binary isn't available.")]),e._v(" "),o("p",[e._v("You'll need to know the path to your app's database. According to Google's documentation, the path is "),o("code",[e._v("/data/data/com.example.yourapp/databases/yourdb.ext")]),e._v(". The "),o("code",[e._v("yourdb.ext")]),e._v(" must match the file name you gave with the "),o("code",[e._v("Ti.Database.install()")]),e._v(" or "),o("code",[e._v("Ti.Database.open()")]),e._v(" statements within your app.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("adb shell\n# ls /data/data/com.example.yourapp/databases    // to list the db files\n# sqlite3 /data/data/com.example.yourapp/databases/yourdb.sqlite\nsqlite> SELECT * FROM yourtable;\nsqlite> .exit\n")])])]),o("p",[e._v("Keep in mind these points:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Only SQLite statements are supported, not the full SQL language. See "),o("a",{attrs:{href:"http://www.sqlite.org/lang.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.sqlite.org/lang.html"),o("OutboundLink")],1),e._v(" for more info.")])]),e._v(" "),o("li",[o("p",[e._v("You must terminate all SQLite statements with a semicolon.")])]),e._v(" "),o("li",[o("p",[e._v("The "),o("code",[e._v("sqlite3")]),e._v(" binary offers various commands, which are preceded by a period and "),o("em",[e._v("not")]),e._v(" terminated with a semicolon. Enter "),o("code",[e._v(".help")]),e._v(" for a list of those commands.")])]),e._v(" "),o("li",[o("p",[e._v("You're interacting with your app's actual database. So if you make modifications, you could create error conditions within your app.")])])]),e._v(" "),o("h3",{attrs:{id:"creating-an-emulator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-emulator"}},[e._v("#")]),e._v(" Creating an emulator")]),e._v(" "),o("p",[e._v("You can either use the "),o("code",[e._v("android")]),e._v(" command-line tool or the Android AVD manager to create an emulator. By default, Studio creates an Android virtual device (emulator) for you if one does not exist.")]),e._v(" "),o("h4",{attrs:{id:"using-the-command-line"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-command-line"}},[e._v("#")]),e._v(" Using the Command-Line")]),e._v(" "),o("p",[e._v("To create an emulator using the "),o("code",[e._v("android")]),e._v(" command-line tool, run the command below. You need to pass in a name for the emulator ("),o("code",[e._v("-n")]),e._v(" <"),o("code",[e._v("EMULATOR_NAME")]),e._v(">), which system image (Android version) to install ("),o("code",[e._v("-t <TARGET_ID>")]),e._v("), which skin type to use ("),o("code",[e._v("-s <SKIN>")]),e._v(") and to use the x86 binary ("),o("code",[e._v("–abi x86")]),e._v("). You can optionally pass in the "),o("code",[e._v("-f")]),e._v(" option to overwrite a previously created emulator and use the "),o("code",[e._v("-c")]),e._v(" option to specify to create an SD card image and its size.")]),e._v(" "),o("p",[e._v("After you run the command, you will be asked if you want to create a custom hardware profile. If you reply 'yes', you will be prompted to set additional advanced emulator options.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("## Syntax\npath_to_android_sdk/tools/android create avd -n <EMULATOR_NAME> -t <TARGET_ID> -s <SKIN> --abi x86 [-f -c <SD_CARD_IMAGE> -c <SDCARD_SIZE_IN_MB>M]\n\n## Example\nandroid create avd -n my_avd_api_17 -t 1 -s WVGA800 --abi x86 -f -c ~/.titanium/my_avd_api_17.sdcard -c 1024M\n## Launch the emulator\nemulator -avd my_avd_api_17\n")])])]),o("p",[e._v("To retrieve a list of target IDs and emulator skins run then "),o("code",[e._v("android list targets")]),e._v(". This command lists the system images you have installed with a corresponding target ID and details about the system image. The target ID is required to create an emulator. For example, the output below shows that the ID "),o("code",[e._v("1")]),e._v(" corresponds to Android API level 17 while "),o("code",[e._v("2")]),e._v(" corresponds to Android API level 17 with the Google APIs. This list and the IDs vary depending on which Android SDKs you have installed. Each target supports a different list of emulator skins.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('$ android list targets\nAvailable Android targets:\n----------\nid: 1 or "android-17"\n     Name: Android 4.2.2\n     Type: Platform\n     API level: 17\n     Revision: 2\n     Skins: HVGA, QVGA, WQVGA400, WQVGA432, WSVGA, WVGA800 (default), WVGA854, WXGA720, WXGA800, WXGA800-7in\n     ABIs : armeabi-v7a\n----------\nid: 2 or "Google Inc.:Google APIs:17"\n     Name: Google APIs\n     Type: Add-On\n     Vendor: Google Inc.\n     Revision: 3\n     Description: Android + Google APIs\n     Based on Android 4.2.2 (API level 17)\n     Libraries:\n      * com.google.android.media.effects (effects.jar)\n          Collection of video effects\n      * com.android.future.usb.accessory (usb.jar)\n          API for USB Accessories\n      * com.google.android.maps (maps.jar)\n          API for Google Maps\n     Skins: WVGA854, WQVGA400, WSVGA, WXGA800-7in, WXGA720, HVGA, WQVGA432, WVGA800 (default), QVGA, WXGA800\n     ABIs : armeabi-v7a\n----------\nid: 3 or "android-18"\n     Name: Android 4.3\n     Type: Platform\n     API level: 18\n     Revision: 2\n     Skins: HVGA, QVGA, WQVGA400, WQVGA432, WSVGA, WVGA800 (default), WVGA854, WXGA720, WXGA800, WXGA800-7in\n     ABIs : no ABIs.\n----------\nid: 4 or "android-19"\n     Name: Android 4.4.2\n     Type: Platform\n     API level: 19\n     Revision: 2\n     Skins: HVGA, QVGA, WQVGA400, WQVGA432, WSVGA, WVGA800 (default), WVGA854, WXGA720, WXGA800, WXGA800-7in\n     ABIs : armeabi-v7a, x86\n')])])]),o("h4",{attrs:{id:"using-the-avd-manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-avd-manager"}},[e._v("#")]),e._v(" Using the AVD manager")]),e._v(" "),o("p",[e._v("The AVD manager provides a GUI to create and manage your emulators.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Launch the AVD manager from the console by running:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("path_to_android_sdk/tools/android avd\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Once the AVD manager appears, click the "),o("strong",[e._v("New")]),e._v(" button on the right side. A dialog opens.")])]),e._v(" "),o("li",[o("p",[e._v("At minimum, you need to enter a name for the emulator, select a device, select a target and in the "),o("strong",[e._v("CPU/ABI")]),e._v(" drop-down, select "),o("strong",[e._v("x86")]),e._v(" if you have the option to.")])]),e._v(" "),o("li",[o("p",[e._v("Change the other options for your emulator.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("OK.")])])])]),e._v(" "),o("h3",{attrs:{id:"modifying-the-emulator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modifying-the-emulator"}},[e._v("#")]),e._v(" Modifying the emulator")]),e._v(" "),o("h4",{attrs:{id:"increase-the-emulator-s-disk-space"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#increase-the-emulator-s-disk-space"}},[e._v("#")]),e._v(" Increase the emulator's disk space")]),e._v(" "),o("p",[e._v("By default, when a new emulator is created, it only has enough space to install one or two applications. To increase the disk size:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open the AVD configuration file with your favorite text editor. The following are the default locations:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("On Mac OS X systems, open ~/"),o("code",[e._v(".android/avd/<AVD_name>.avd/config.ini")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("On Windows 7 and 8 systems, open "),o("code",[e._v("C:\\Users\\<user>\\.android\\avd\\<AVD_name>.avd\\config.ini")]),e._v(".")])])])]),e._v(" "),o("li",[o("p",[e._v("Add or edit the following variable:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("disk.dataPartition.size=<size_in_MB>m\n")])])])])]),e._v(" "),o("h4",{attrs:{id:"resize-the-emulator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resize-the-emulator"}},[e._v("#")]),e._v(" Resize the emulator")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("In Studio, run your application at least once in your chosen emulator, so that a virtual device will be created.")])]),e._v(" "),o("li",[o("p",[e._v("Close the emulator.")])]),e._v(" "),o("li",[o("p",[e._v("Launch the Android AVD Manager.")])]),e._v(" "),o("li",[o("p",[e._v("Select the emulator that was created in step 1.")])]),e._v(" "),o("li",[o("p",[e._v("Press the "),o("strong",[e._v("Edit")]),e._v(" button, change the resolution, and press the "),o("strong",[e._v("Edit AVD")]),e._v(" button to save.")])]),e._v(" "),o("li",[o("p",[e._v("Close the AVD Manager and launch your app again from Studio. The new resolution will take effect.")])])]),e._v(" "),o("h4",{attrs:{id:"resize-the-emulator-on-the-fly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resize-the-emulator-on-the-fly"}},[e._v("#")]),e._v(" Resize the emulator on the fly")]),e._v(" "),o("p",[e._v('Once the emulator is launched, it can be scaled "on-the-fly" by connecting to the device using the '),o("strong",[e._v("telnet")]),e._v(" command. You will need the name and port of your emulator. You can get this information using the "),o("strong",[e._v("adb devices")]),e._v(" command.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ adb devices\nList of devices attached\nemulator-5560 device\n\n$ telnet localhost 5560\nConnected to localhost.\nEscape character is '^\\]'.\nAndroid Console: type 'help' for a list of commands\nOK\nwindow scale 0.75\nOK\n")])])]),o("h3",{attrs:{id:"note-on-native-java-debugging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#note-on-native-java-debugging"}},[e._v("#")]),e._v(" Note on Native Java debugging")]),e._v(" "),o("p",[e._v("Debugging Java or C++ code is beyond the scope of this document. See "),o("a",{attrs:{href:"http://developer.android.com/guide/developing/debugging/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Debugging"),o("OutboundLink")],1),e._v(" in the Android Developer Guide for more information.")]),e._v(" "),o("p",[e._v("Note that debugging Java requires setting the Android "),o("code",[e._v("debuggable")]),e._v(" flag as described in "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/#enabling-the-debugger-by-default"}},[e._v("Enabling the debugger by default")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Android DDMS docs: "),o("a",{attrs:{href:"http://developer.android.com/guide/developing/debugging/ddms.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using DDMS"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("Logcat options: "),o("a",{attrs:{href:"http://developer.android.com/guide/developing/tools/logcat.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://developer.android.com/guide/developing/tools/logcat.html"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("Shell commands with ADB (including "),o("code",[e._v("sqlite3")]),e._v("): "),o("a",{attrs:{href:"http://developer.android.com/guide/developing/tools/adb.html#shellcommands",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://developer.android.com/guide/developing/tools/adb.html#shellcommands"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("SQLite commands: "),o("a",{attrs:{href:"http://www.sqlite.org/lang.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.sqlite.org/lang.html"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"http://www.sqlite.org/pragma.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.sqlite.org/pragma.html"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("Android Debugging docs: "),o("a",{attrs:{href:"http://developer.android.com/guide/developing/debugging/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Debugging"),o("OutboundLink")],1)])])]),e._v(" "),o("h2",{attrs:{id:"summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),o("p",[e._v("In this section, you learned that you can use DDMS and "),o("code",[e._v("adb")]),e._v(" to interact with and manipulate both emulator instances and attached devices. You learned how to view log output, access the file system, and simulate operating conditions, like an incoming phone call. Each of these will help you debug and test your Titanium applications.")])])}),[],!1,null,null,null);t.default=n.exports},820:function(e,t,a){e.exports=a.p+"assets/img/ddmslog.6ad8f897.png"},821:function(e,t,a){e.exports=a.p+"assets/img/ddmsfilter.fd1a975e.png"}}]);