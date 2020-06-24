(window.webpackJsonp=window.webpackJsonp||[]).push([[1177],{1969:function(e,t,s){"use strict";s.r(t);var o=s(21),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"adding-new-javascript-debuggers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-javascript-debuggers"}},[e._v("#")]),e._v(" Adding new JavaScript Debuggers")]),e._v(" "),s("p",[e._v("The Studio debugger infrastructure falls under the general Eclipse debugger API. For more information on how the overall architecture is structured, see the reference documentation "),s("a",{attrs:{href:"http://www.eclipse.org/articles/Article-Debugger/how-to.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(". The information below covers how to extend the Studio infrastructure to implement a debugger extension in an external product capable of talking to our JavaScript debugger implementation via the "),s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Specifications/Debugger_Protocol/"}},[e._v("Debugger Protocol")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"reference-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation"}},[e._v("#")]),e._v(" Reference implementation")]),e._v(" "),s("p",[e._v("In the case of iOS and Android, you can view the message flow between the debugger extension and Studio by viewing the files located at:")]),e._v(" "),s("p",[e._v("Debugger logs created under:")]),e._v(" "),s("ul",[s("li",[s("p",[s("em",[e._v("workspace")]),e._v("/.metadata/.plugins/com.appcelerator.titanium.mobile/logs/")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("iosdebugger.log")])]),e._v(" "),s("li",[s("p",[e._v("androiddebugger.log")])])])])]),e._v(" "),s("h3",{attrs:{id:"general-control-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-control-flow"}},[e._v("#")]),e._v(" General Control Flow")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Open socket")])]),e._v(" "),s("li",[s("p",[e._v("Pass socket info to iOS/Android debugger via parameter on python script (builder.py)")])]),e._v(" "),s("li",[s("p",[e._v("Studio listens for connection from platform debugger and then they communicate via the debugger protocol "),s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Specifications/Debugger_Protocol/"}},[e._v("Debugger Protocol")])],1)]),e._v(" "),s("li",[s("p",[e._v("Step Over/Into command issued, then act after receipt of suspend notification with appropriate message")])]),e._v(" "),s("li",[s("p",[e._v("etc.")])])]),e._v(" "),s("p",[e._v("View the transcript of a debug session at the bottom of this file for more information.")]),e._v(" "),s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),s("p",[e._v('Create a new file in your home folder, e.g. "studio_options" with the following content:')]),e._v(" "),s("ul",[s("li",[s("p",[e._v("com.aptana.debug.core/debugger_debug = true")])]),e._v(" "),s("li",[s("p",[e._v("com.aptana.debug.core/skip_debugger_install = true")])])]),e._v(" "),s("h3",{attrs:{id:"os-x-instructions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-x-instructions"}},[e._v("#")]),e._v(" OS X instructions")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Install Studio from the DMG")])]),e._v(" "),s("li",[s("p",[e._v('Do "Show Package Contents" on AptanaStudio3.app/TitaniumStudio.app/AppceleratorStudio.app.')])]),e._v(" "),s("li",[s("p",[e._v('Edit Info.plist to add two parameters into Eclipse array: "-debug" and the absolute path to the studio_options file mentioned above (e.g /Users/username/studio_options).')])]),e._v(" "),s("li",[s("p",[e._v("Save the file.")])])]),e._v(" "),s("h3",{attrs:{id:"windows-instructions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-instructions"}},[e._v("#")]),e._v(" Windows instructions")]),e._v(" "),s("p",[e._v("In the Aptana Studio/Titanium Studio/Appcelerator Studio folder, edit the .ini file to add the two above items.")]),e._v(" "),s("h3",{attrs:{id:"testing-inside-studio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-inside-studio"}},[e._v("#")]),e._v(" Testing inside Studio")]),e._v(" "),s("p",[e._v("The effect of these actions will be that there will be no checks for a FF debugger extension, the debugger port number will be fixed to 2525 and the socket timeout will be infinite.\nBut you will still need to have Firefox (any version) installed.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Launch Studio")])]),e._v(" "),s("li",[s("p",[e._v("Open menu Run /Debug Configurations.")])]),e._v(" "),s("li",[s("p",[e._v('Under Web Browser category you should see "Firefox - Internal Server" launch configuration. If not, simple press plus button above the configurations tree view. Configuration parameters does not matter for now.')])]),e._v(" "),s("li",[s("p",[e._v("Once you press the "),s("strong",[e._v("Debug")]),e._v(" button on the configuration dialog (or drop-down from IDE toolbar), the debug session will be initiated and Studio will start accepting connections on port 2525 (from all local IPs)")])]),e._v(" "),s("li",[s("p",[e._v("From this point you could connect to it from your debug layer on the remote device")])])]),e._v(" "),s("p",[e._v('You don\'t need to support all commands listed in the protocol spec, but you need to reply to all of them. So simply reply back with "!error message". At the bottom of this message is a sample message flow.')]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("'enable' request should turn on debugging, otherwise debug host should be in 'run' mode where only logging to IDE works.")])]),e._v(" "),s("li",[s("p",[e._v("'resumed*start' reply should always be sent beck when debugger is fully set up. basically it is a feedback on 'enable' message.")])])])]),e._v(" "),s("h2",{attrs:{id:"sample-message-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-message-flow"}},[e._v("#")]),e._v(" Sample Message Flow")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[55:14.553] Socket recv: >1297295714294*version<\n[55:14.553] Socket sent: >21*1297295714294*1*1.6.0<\n[55:14.555] Socket recv: >1297295714295*update<\n[55:14.598] Socket sent: >13*1297295714295<\n[55:14.602] Socket recv: >1297295714296*option*stepFiltersEnabled*false<\n[55:14.602] Socket sent: >13*1297295714296<\n[55:14.602] Socket recv: >1297295714297*option*monitorXHR*true<\n[55:14.602] Socket sent: >13*1297295714297<\n[55:14.604] Socket recv: >1297295714298*option*suspendOnFirstLine*false<\n[55:14.604] Socket sent: >13*1297295714298<\n[55:14.605] Socket recv: >1297295714299*option*suspendOnExceptions*false<\n[55:14.605] Socket sent: >13*1297295714299<\n[55:14.605] Socket recv: >1297295714300*option*suspendOnErrors*true<\n[55:14.605] Socket sent: >13*1297295714300<\n[55:14.606] Socket recv: >1297295714301*option*suspendOnKeywords*true<\n[55:14.606] Socket sent: >13*1297295714301<\n[55:14.606] Socket recv: >1297295714302*option*bypassConstructors*false<\n[55:14.606] Socket sent: >13*1297295714302<\n[55:14.607] Socket recv: >1297295714303*option*stepFiltersEnabled*false<\n[55:14.607] Socket sent: >13*1297295714303<\n[55:14.607] Socket recv: >1297295714304*detailFormatters<\n[55:14.607] Socket sent: >13*1297295714304<\n[55:14.608] Socket recv: >1297295714305*enable<\n[55:14.609] Socket sent: >13*1297295714305<\n[55:14.612] Socket recv: >1297295714306*openUrl*http://127.0.0.1:8020/debugger%20sample/debug_tests.html<\n[55:14.640] Socket sent: >13*1297295714306<\n[55:14.874] Socket sent: >13*resumed*start<\n[55:14.935] Socket sent: >21*log*out*Start message<\n[55:14.936] Socket sent: >93*scripts*created*5|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|testStepping|27|11<\n[55:14.936] Socket sent: >89*scripts*created*6|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|stepInto1|40|6<\n[55:14.936] Socket sent: >89*scripts*created*7|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|stepInto2|48|6<\n[55:14.936] Socket sent: >89*scripts*created*8|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|stepOver1|56|4<\n[55:14.936] Socket sent: >89*scripts*created*9|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|stepOver2|61|2<\n[55:14.937] Socket sent: >97*scripts*created*10|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|testBreakpoints|68|15<\n[55:14.937] Socket sent: >94*scripts*created*11|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|breakpointHit|85|3<\n[55:14.937] Socket sent: >93*scripts*created*12|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|testLogging|97|15<\n[55:14.937] Socket sent: >105*scripts*created*13|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|showExceptionStackTrace|115|8<\n[55:14.938] Socket sent: >90*scripts*created*14|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|MyObject|145|4<\n[55:14.938] Socket sent: >87*scripts*created*15|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|Shape|153|2<\n[55:14.938] Socket sent: >86*scripts*created*16|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|Rect|156|6<\n[55:14.938] Socket sent: >91*scripts*created*17|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|anonymous|140|1<\n[55:14.938] Socket sent: >96*scripts*created*18|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|testVariables|128|42<\n[55:14.939] Socket sent: >104*scripts*created*19|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|testAnonymousFunctions|193|6<\n[55:14.939] Socket sent: >91*scripts*created*20|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|anonymous|201|2<\n[55:14.939] Socket sent: >91*scripts*created*21|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|anonymous|206|3<\n[55:14.939] Socket sent: >91*scripts*created*22|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|anonymous|211|2<\n[55:14.939] Socket sent: >100*scripts*created*23|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|testJavascriptURLs|217|3<\n[55:14.940] Socket sent: >97*scripts*created*24|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|testExceptions|224|33<\n[55:14.940] Socket sent: >92*scripts*created*25|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|throwError|259|2<\n[55:14.940] Socket sent: >93*scripts*created*26|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|throwString|263|2<\n[55:14.940] Socket sent: >93*scripts*created*27|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|throwObject|267|2<\n[55:14.940] Socket sent: >98*scripts*created*28|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|throwSyntaxError|271|2<\n[55:14.941] Socket sent: >102*scripts*created*29|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|throwReferrenceError|275|2<\n[55:14.941] Socket sent: >97*scripts*created*30|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|throwRangeError|279|2<\n[55:14.941] Socket sent: >96*scripts*created*31|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|throwTypeError|283|3<\n[55:14.941] Socket sent: >91*scripts*created*32|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|anonymous|294|4<\n[55:14.941] Socket sent: >90*scripts*created*33|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|testXHR|291|13<\n[55:14.942] Socket sent: >94*scripts*created*34|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|testAsserts|309|26<\n[55:14.942] Socket sent: >91*scripts*created*35|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|testPopup|340|2<\n[55:14.942] Socket sent: >101*scripts*created*36|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|testFirebugConsole|347|17<\n[55:14.943] Socket sent: >92*scripts*created*37|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|timerStart|372|4<\n[55:14.943] Socket sent: >91*scripts*created*38|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|timerStop|378|6<\n[55:14.943] Socket sent: >94*scripts*created*39|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|timerUpdate|386|12<\n[55:15.31] Socket sent: >83*scripts*resolved*17|toString*20|myFunc0*21|myFunc1*22|myFunc2*32|onreadystatechange<\n[55:15.31] Socket sent: >63*opened*http://127.0.0.1:8020/debugger%20sample/debug_tests.html<\n[55:19.61] Socket sent: >77*suspended*keyword*http://127.0.0.1:8020/debugger%20sample/debug_tests.html*70<\n[55:19.253] Socket recv: >1297295714307*frames<\n[55:19.254] Socket sent: >194*1297295714307*0|testBreakpoints||http://127.0.0.1:8020/debugger%20sample/debug_tests.html|70|false|1|10*1|onclick|MouseEvent|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|1|false|4|42<\n[55:19.725] Socket recv: >1297295714308*variables*frame[0]<\n[55:19.725] Socket sent: >61*1297295714308*this|XPCCrossOriginWrapper|o|*i|void|lwnpv|void<\n[55:25.194] Socket recv: >*stepOver<\n[55:25.200] Socket sent: >16*resumed*stepOver<\n[55:25.205] Socket sent: >78*suspended*stepOver*http://127.0.0.1:8020/debugger%20sample/debug_tests.html*73<\n[55:25.256] Socket recv: >1297295714309*frames<\n[55:25.256] Socket sent: >194*1297295714309*0|testBreakpoints||http://127.0.0.1:8020/debugger%20sample/debug_tests.html|73|false|2|10*1|onclick|MouseEvent|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|1|false|4|42<\n[55:25.321] Socket recv: >1297295714310*variables*frame[0]<\n[55:25.322] Socket sent: >61*1297295714310*this|XPCCrossOriginWrapper|o|*i|void|lwnpv|void<\n[55:25.758] Socket recv: >1297295714311*variables*frame[0]<\n[55:25.758] Socket sent: >61*1297295714311*this|XPCCrossOriginWrapper|o|*i|void|lwnpv|void<\n[55:27.259] Socket recv: >*stepInto<\n[55:27.264] Socket sent: >16*resumed*stepInto<\n[55:27.269] Socket sent: >78*suspended*stepInto*http://127.0.0.1:8020/debugger%20sample/debug_tests.html*40<\n[55:27.324] Socket recv: >1297295714312*frames<\n[55:27.325] Socket sent: >287*1297295714312*0|stepInto1|void, void|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|40|false|0|6*1|testBreakpoints||http://127.0.0.1:8020/debugger%20sample/debug_tests.html|73|false|5|10*2|onclick|MouseEvent|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|1|false|4|42<\n[55:27.445] Socket recv: >1297295714313*variables*frame[1]<\n[55:27.445] Socket sent: >61*1297295714313*this|XPCCrossOriginWrapper|o|*i|void|lwnpv|void<\n[55:27.860] Socket recv: >1297295714314*variables*frame[0]<\n[55:27.861] Socket sent: >105*1297295714314*this|XPCCrossOriginWrapper|o|*arg1|void|lwnpa|void*arg2|void|lwnpa|void*sum|void|lwnpv|void<\n[55:31.681] Socket recv: >*stepReturn<\n[55:31.687] Socket sent: >18*resumed*stepReturn<\n[55:31.691] Socket sent: >31*log*out*x=undefined,y=undefined<\n[55:31.691] Socket sent: >15*log*out*sum=NaN<\n[55:31.691] Socket sent: >25*log*out*stepOver1 entered<\n[55:31.691] Socket sent: >26*log*out*stepOver2 executed<\n[55:31.692] Socket sent: >24*log*out*stepOver1 exited<\n[55:31.692] Socket sent: >22*log*out*sum[again]=NaN<\n[55:31.693] Socket sent: >80*suspended*stepReturn*http://127.0.0.1:8020/debugger%20sample/debug_tests.html*73<\n[55:31.758] Socket recv: >1297295714315*frames<\n[55:31.759] Socket sent: >194*1297295714315*0|testBreakpoints||http://127.0.0.1:8020/debugger%20sample/debug_tests.html|73|false|8|10*1|onclick|MouseEvent|http://127.0.0.1:8020/debugger%20sample/debug_tests.html|1|false|4|42<\n[55:32.210] Socket recv: >1297295714316*variables*frame[0]<\n[55:32.210] Socket sent: >61*1297295714316*this|XPCCrossOriginWrapper|o|*i|void|lwnpv|void<\n[55:36.518] Socket recv: >*resume<\n[55:36.522] Socket sent: >14*resumed*resume<\n[55:36.526] Socket sent: >23*log*out*breakpoint line<\n[55:36.526] Socket sent: >19*log*out*hit count=1<\n[55:36.526] Socket sent: >31*log*out*x=undefined,y=undefined<\n[55:36.526] Socket sent: >15*log*out*sum=NaN<\n[55:36.526] Socket sent: >25*log*out*stepOver1 entered<\n[55:36.526] Socket sent: >26*log*out*stepOver2 executed<\n[55:36.526] Socket sent: >24*log*out*stepOver1 exited<\n[55:36.526] Socket sent: >22*log*out*sum[again]=NaN<\n[55:36.526] Socket sent: >19*log*out*hit count=2<\n[55:36.527] Socket sent: >31*log*out*x=undefined,y=undefined<\n[55:40.583] Socket recv: >*terminate<\n[55:40.676] Socket closed.\n######## End of log ########\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);