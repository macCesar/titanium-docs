(window.webpackJsonp=window.webpackJsonp||[]).push([[1162],{2837:function(e,t,a){"use strict";a.r(t);var n=a(21),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"setting-activation-characters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-activation-characters"}},[e._v("#")]),e._v(" Setting Activation Characters")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("In this recipe, we show how it is possible to use a Ruble command to modify the activation characters for the HTML, CSS, and JS editors.")]),e._v(" "),a("h2",{attrs:{id:"the-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-code"}},[e._v("#")]),e._v(" The Code")]),e._v(" "),a("p",[e._v("Below is a sample to change the activation characters for the CSS editor. The activation characters are set to '.', '#', and ':'. This happens to be the default, so you will not see any change; however, by altering the content of the string in the call to node.put, you can modify the set of characters that will cause content assist to appear automatically.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('require \'ruble\'\n\nbundle do |bundle|\n  bundle.author = \'Kevin Lindsey\'\n  bundle.copyright = "Copyright 2011 Appcelerator, Inc. Distributed under the MIT license."\n  bundle.display_name = \'CSS Prefs\'\n  bundle.description = "A simple bundle showing how to set CSS preferences"\n\n  bundle.menu "CSS Prefs" do |m|\n    m.command "Set Activation Characters" do |cmd|\n      cmd.invoke do |ctx|\n        pluginId = "com.aptana.editor.css"\n        prefKey = "CSS_ACTIVATION_CHARACTERS"\n\n        node = org.eclipse.core.runtime.preferences.InstanceScope.new.getNode pluginId\n        node.put prefKey, ".#:"\n        node.flush\n\n        CONSOLE.puts "CSS activation character preference has been updated"\n      end\n    end\n  end\nend\n')])])]),a("h2",{attrs:{id:"plugin-ids-and-preference-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-ids-and-preference-keys"}},[e._v("#")]),e._v(" Plugin Ids and Preference Keys")]),e._v(" "),a("p",[e._v('To set the activate characters for a specific language, you need to know the editor\'s plugin id and the associated preference key. Below is a table providing that information. Replace the "pluginId" and "prefKey" assignments in the above example to the setting appropriate for the language you wish to update.')]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Language")]),e._v(" "),a("th",[e._v("Plugin Id")]),e._v(" "),a("th",[e._v("Preference Key")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("CSS")]),e._v(" "),a("td",[e._v("com.aptana.editor.css")]),e._v(" "),a("td",[e._v("CSS_ACTIVATION_CHARACTERS")])]),e._v(" "),a("tr",[a("td",[e._v("HTML")]),e._v(" "),a("td",[e._v("com.aptana.editor.html")]),e._v(" "),a("td",[e._v("HTML_ACTIVATION_CHARACTERS")])]),e._v(" "),a("tr",[a("td",[e._v("JS")]),e._v(" "),a("td",[e._v("com.aptana.editor.js")]),e._v(" "),a("td",[e._v("JS_ACTIVATION_CHARACTERS")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);