(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1923:function(e,t,a){"use strict";a.r(t);var i=a(21),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"modifying-editor-colors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#modifying-editor-colors"}},[e._v("#")]),e._v(" Modifying Editor Colors")]),e._v(" "),i("p",[e._v('Studio has a "Theme" preference page, which allows you to set the default look and color scheme of Studio editors.')]),e._v(" "),i("h2",{attrs:{id:"introduction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),i("p",[e._v("The Studio theme page is somewhat similar to that found in TextMate, both in look and functionality. This was done as Studio supports the import and reuse of TextMate themes, making it far easier to adjust editor colors. It operates on the idea of scopes, a mechanism for describing a fragment of the current document. For each scope, a different color may be assigned, and scopes can cascade and combine. In practice, they can be thought of as similar to CSS.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(491),alt:"theme_page"}})]),e._v(" "),i("p",[e._v("To access the Theme preference page, navigate to "),i("strong",[e._v("Preferences > Studio > Themes")])]),e._v(" "),i("h2",{attrs:{id:"changing-themes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#changing-themes"}},[e._v("#")]),e._v(" Changing themes")]),e._v(" "),i("p",[e._v("By default, Studio ships with multiple themes, and a dark theme selected by default. To change it:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Within the Theme preference page, select a new item from the first dropdown (usually set to Aptana Studio).")])]),e._v(" "),i("li",[i("p",[e._v('Click "Apply".')])])]),e._v(" "),i("p",[e._v('For those who prefer a lighter theme, the "Aptana Studio 2.x" theme is on a white background. A comparison:')]),e._v(" "),i("table",{staticClass:"confluenceTable"},[i("thead",{staticClass:" "}),i("tfoot",{staticClass:" "}),i("tbody",{staticClass:" "},[i("tr",[i("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[i("p",[i("img",{staticClass:"confluence-embedded-image",attrs:{src:"images/download/attachments/30083317/theme_dark.png",alt:"images/download/attachments/30083317/theme_dark.png"}})])]),i("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[i("p",[i("img",{staticClass:"confluence-embedded-image",attrs:{src:"images/download/attachments/30083317/theme_light.png",alt:"images/download/attachments/30083317/theme_light.png"}})])])]),i("tr",[i("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[i("p",[e._v("Aptana Studio Default Theme")])]),i("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[i("p",[e._v("Aptana Studio 2.x Theme")])])])])]),e._v(" "),i("h2",{attrs:{id:"invasive-theming-applying-editor-fonts-to-views"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#invasive-theming-applying-editor-fonts-to-views"}},[e._v("#")]),e._v(" Invasive theming/applying editor fonts to views")]),e._v(" "),i("p",[e._v('By default, "invasive theming" is on. Invasive theming is a mode whereby non-Studio views and editors are colorized with the same color settings as Studio editors and views. The practical effect of this is to see the whole IDE with a unified color scheme, or just the editor windows, as shown below:')]),e._v(" "),i("table",{staticClass:"confluenceTable"},[i("thead",{staticClass:" "}),i("tfoot",{staticClass:" "}),i("tbody",{staticClass:" "},[i("tr",[i("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[i("p",[i("img",{staticClass:"confluence-embedded-image",attrs:{src:"images/download/attachments/30083317/invasive_on.png",alt:"images/download/attachments/30083317/invasive_on.png"}})])]),i("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[i("p",[i("img",{staticClass:"confluence-embedded-image",attrs:{src:"images/download/attachments/30083317/invasive_off.png",alt:"images/download/attachments/30083317/invasive_off.png"}})])])]),i("tr",[i("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[i("p",[e._v("invasive theming on")])]),i("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[i("p",[e._v("invasive theming off")])])])])]),e._v(" "),i("p",[e._v("You can see the difference in the Project Explorer and Outline views, though the same results would apply to any Eclipse-generic view or editor.")]),e._v(" "),i("h3",{attrs:{id:"enabling-disabling-invasive-theming"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#enabling-disabling-invasive-theming"}},[e._v("#")]),e._v(" Enabling/disabling invasive theming")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('Within the Theme preference page, check or uncheck the "Enable Invasive Themes" checkbox.')])]),e._v(" "),i("li",[i("p",[e._v('Click "Apply".')])])]),e._v(" "),i("h3",{attrs:{id:"applying-editor-fonts-to-views"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#applying-editor-fonts-to-views"}},[e._v("#")]),e._v(" Applying editor fonts to views")]),e._v(" "),i("p",[e._v("This option does largely what the text says--it takes the font defined for the editor and applies it to the various views. This often ends up relacing a typical monospaced font with a proportional-width one.")]),e._v(" "),i("h2",{attrs:{id:"changing-scope-colors-or-adding-a-new-scope"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#changing-scope-colors-or-adding-a-new-scope"}},[e._v("#")]),e._v(" Changing scope colors, or adding a new scope")]),e._v(" "),i("p",[e._v('To change an existing scope, click on the color or text icons to modify the value. If you wish to tweak colorization even further, see "Updating an Existing Theme" under '),i("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/Creating_a_New_Theme/"}},[e._v("Creating a New Theme")]),e._v(".")],1),e._v(" "),i("p",[e._v("To revert a theme to the defaults, click the "),i("strong",[e._v('"Restore Defaults"')]),e._v(" button.")]),e._v(" "),i("h2",{attrs:{id:"duplicating-renaming-or-removing-a-theme"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#duplicating-renaming-or-removing-a-theme"}},[e._v("#")]),e._v(" Duplicating, renaming or removing a theme")]),e._v(" "),i("p",[e._v("Themes may be duplicated or removed from the interface")]),e._v(" "),i("p",[e._v("To duplicate a theme:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('Click the "+" button.')])]),e._v(" "),i("li",[i("p",[e._v("A new name for the copy is suggested.")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("OK.")])])])]),e._v(" "),i("p",[e._v("To rename a theme:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('Click the "Rename" button. Only user-added themes may be renamed.')])]),e._v(" "),i("li",[i("p",[e._v("Type a new name.")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("OK.")])])])]),e._v(" "),i("p",[e._v("To removing a theme:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('Click the "-" button. Only user-added themes may be removed.')])]),e._v(" "),i("li",[i("p",[e._v("Accept the confirmation.")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("OK.")])])])]),e._v(" "),i("h2",{attrs:{id:"importing-exporting-themes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#importing-exporting-themes"}},[e._v("#")]),e._v(" Importing/exporting themes")]),e._v(" "),i("p",[e._v("You can reuse an existing TextMate theme, or export your modifications for others to use and enjoy.")]),e._v(" "),i("p",[e._v("To import a theme:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('Click the "Import" button.')])]),e._v(" "),i("li",[i("p",[e._v("Navigate on the file system to a *.tmTheme file.")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Open.")])])])]),e._v(" "),i("p",[e._v("To export a theme:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('Click the "Export" button.')])]),e._v(" "),i("li",[i("p",[e._v("A new file is suggested with a *tmTheme extension.")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Save.")])])])]),e._v(" "),i("p",[e._v("You can find more themes under "),i("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/User_Themes/"}},[e._v("User Themes")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=s.exports},491:function(e,t,a){e.exports=a.p+"assets/img/theme_page.42681cde.png"}}]);