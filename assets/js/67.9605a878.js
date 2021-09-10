(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1075:function(e,t,o){"use strict";o.r(t);var i=o(21),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"pull-request-guide"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pull-request-guide"}},[e._v("#")]),e._v(" Pull Request Guide")]),e._v(" "),i("p",[e._v("So you want to make a contribution to the "),i("strong",[e._v("Titanium SDK")]),e._v("? Got a bug you want to fix, or a feature you want to add? This is the guide that will help you do so. It'll walk you through all the necessary steps for creating a successful pull request against the "),i("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile",target:"_blank",rel:"noopener noreferrer"}},[e._v("titanium_mobile github repository"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("Aside from functioning in an educational capacity, this guide also serves to make the process of integrating your pull requests a more uniform task for our platform engineers. Observing the steps in this guide for each pull request will:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Make pull requests that are easier to integrate")])]),e._v(" "),i("li",[i("p",[e._v("Define the expectations on those submitting pull requests")])]),e._v(" "),i("li",[i("p",[e._v("Give you an opportunity to expedite the acceptance of your own pull requests. "),i("strong",[e._v("Complete, high quality pull requests will receive priority")]),e._v(".")])])]),e._v(" "),i("h2",{attrs:{id:"prerequisites"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Familiarity with the open source "),i("a",{attrs:{href:"http://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache 2.0 license"),i("OutboundLink")],1),e._v(", the license that governs the Titanium Mobile SDK.")])]),e._v(" "),i("li",[i("p",[e._v("A working knowledge of "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Git_and_Github/"}},[e._v("Git and Github")])],1)]),e._v(" "),i("li",[i("p",[e._v("A "),i("a",{attrs:{href:"https://github.com/signup/free",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com account"),i("OutboundLink")],1)])])]),e._v(" "),i("p",[e._v("You must also have all of the software required to build the Titanium SDK from source. For details, see "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Building_the_Titanium_SDK_From_Source/"}},[e._v("Building the Titanium SDK From Source")]),e._v(".")],1),e._v(" "),i("p",[e._v("There are a number of GUI interfaces for git. This guide provides instructions for using git from the command line, but these can easily be adapted to other tools.")]),e._v(" "),i("h2",{attrs:{id:"pull-request-process"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pull-request-process"}},[e._v("#")]),e._v(" Pull Request Process")]),e._v(" "),i("p",[i("a",{attrs:{href:"#1.-review-and-sign-the-contributors-license-agreement-cla."}},[e._v("#1. Review and sign the Contributors License Agreement (CLA).")]),e._v(" "),i("a",{attrs:{href:"#2.FindorcreateaJiratickettoassociatewithyourpullrequest."}},[e._v("#2. Find or create a Jira ticket to associate with your pull request.")]),e._v(" "),i("a",{attrs:{href:"#3.ForktheTitaniumSDKRepositoryonGithub."}},[e._v("#3. Fork the Titanium SDK Repository on Github.")]),e._v(" "),i("a",{attrs:{href:"#4.-clone,-setup-remotes,-and-branch."}},[e._v("#4. Clone, setup remotes, and branch.")]),e._v(" "),i("a",{attrs:{href:"#5.-make-your-changes-to-the-development-branch."}},[e._v("#5. Make your changes to the development branch.")]),e._v(" "),i("a",{attrs:{href:"#6.-compile-and-test-the-modified-titanium_mobile-project."}},[e._v("#6. Compile and test the modified titanium_mobile project.")]),e._v(" "),i("a",{attrs:{href:"#7.AddormodifytheAPIdocs(ifnecessary)."}},[e._v("#7. Add or modify the API docs (if necessary).")]),e._v(" "),i("a",{attrs:{href:"#8.Rebaseyourdevelopmentbranchwiththemaster(optional)."}},[e._v("#8. Rebase your development branch with the master (optional).")]),e._v(" "),i("a",{attrs:{href:"#9.SubmitpullrequestinGithub."}},[e._v("#9. Submit pull request in Github.")])]),e._v(" "),i("h3",{attrs:{id:"_1-review-and-sign-the-contributors-license-agreement-cla"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-review-and-sign-the-contributors-license-agreement-cla"}},[e._v("#")]),e._v(" 1. Review and sign the Contributors License Agreement (CLA).")]),e._v(" "),i("p",[e._v("To contribute to any of Appcelerator's open source projects, such as Titanium or Alloy, you must sign a standard Open Source Contributors License Agreement (CLA). As with most open source projects, legal issues regarding intellectual property rights require us to protect ourselves, our contributors and our users from any future ownership claims from third-parties.")]),e._v(" "),i("p",[e._v("The CLA is a simple form you can sign electronically by visiting the following URL:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://cla.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cla.appcelerator.com"),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("You must first electronically sign the before you can contribute code, documentation or any other materials to the project. "),i("strong",[e._v("You are only required to do this once")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"_2-find-or-create-a-jira-ticket-github-issue-to-associate-with-your-pull-request"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-find-or-create-a-jira-ticket-github-issue-to-associate-with-your-pull-request"}},[e._v("#")]),e._v(" 2. Find or create a JIRA ticket / GitHub issue to associate with your pull request.")]),e._v(" "),i("p",[e._v("All pull requests that get integrated into the Titanium SDK have an associated Jira ticket. To make sure that your pull request gets accepted, you also need to have an associated ticket. Community members cannot submit tickets directly to the Titanium Mobile (TIMOB) Jira project, so you have 3 options:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Find an existing Titanium Mobile (TIMOB) ticket with which to associate your ticket. You can search the TIMOB project for an existing feature request or bug with the following link: "),i("a",{attrs:{href:"http://jira.appcelerator.org/secure/IssueNavigator.jspa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Titanium Mobile (TIMOB) Jira project"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[e._v("Find or create a new ticket in the Titanium Community (TC) Jira project. Community members have the ability to create new tickets here, unlike the TIMOB project. If you want to add a feature or fix a bug that has not yet been logged in either Jira project, you can do so at the following link: "),i("a",{attrs:{href:"http://jira.appcelerator.org/browse/TC",target:"_blank",rel:"noopener noreferrer"}},[e._v("Titanium Community (TC) Jira project"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[e._v("File a new GitHub issue on the main repository ("),i("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile",target:"_blank",rel:"noopener noreferrer"}},[e._v("appcelerator/titanium_mobile"),i("OutboundLink")],1),e._v(") by filling out the template with the feature, bugfix or improvement you want to contribute. Our team links GitHub issues with Jira, so it can be tracked by the internal engineering team")])])]),e._v(" "),i("p",[e._v("Once you have created/found the Jira ticket or GitHub issue that you would like to address with your pull request, remember it. The ticket number will be used to identify your development branch in a later step. In addition, code for testing your pull request should be included in the Jira ticket.")]),e._v(" "),i("p",[e._v("For comprehensive instructions on everything associated with submitting Jira tickets, see "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/How_to_Report_a_Bug_or_Make_a_Feature_Request/"}},[e._v("How to Report a Bug or Make a Feature Request")]),e._v(".")],1),e._v(" "),i("h3",{attrs:{id:"_3-fork-the-titanium-sdk-repository-on-github"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-fork-the-titanium-sdk-repository-on-github"}},[e._v("#")]),e._v(" 3. Fork the Titanium SDK Repository on GitHub.")]),e._v(" "),i("p",[e._v("To be able to submit changes to the Titanium Mobile SDK, you first need your own forked copy of the "),i("code",[e._v("titanium_mobile")]),e._v(" project available on GitHub. You'll need a GitHub account of your own to be able to do so. To create your own fork of titanium_mobile, you simple need to:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Log in to your GitHub account.")])]),e._v(" "),i("li",[i("p",[e._v("Go to the "),i("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile",target:"_blank",rel:"noopener noreferrer"}},[e._v("appcelerator/titanium_mobile"),i("OutboundLink")],1),e._v(" project on GitHub.")])]),e._v(" "),i("li",[i("p",[e._v('Click the "Fork" button at the top of the screen.')])])]),e._v(" "),i("p",[i("img",{attrs:{src:o(820),alt:"Bildschirmfoto_2018-05-04_um_11.17.17"}})]),e._v(" "),i("p",[e._v("That's it. You will now have a forked copy of the "),i("code",[e._v("appcelerator/titanium_mobile")]),e._v(" repository under your GitHub account. Instead of being called "),i("code",[e._v("appcelerator/titanium_mobile")]),e._v(", though, it will now be called "),i("code",[e._v("YOUR_ACCOUNT/titanium_mobile")]),e._v(", where "),i("code",[e._v("YOUR_ACCOUNT")]),e._v(" is your GitHub account name.")]),e._v(" "),i("h3",{attrs:{id:"_4-clone-setup-remotes-and-branch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-clone-setup-remotes-and-branch"}},[e._v("#")]),e._v(" 4. Clone, setup remotes, and branch.")]),e._v(" "),i("p",[e._v("There are multiple ways to clone the Titanium project locally. You can either use a Git desktop app like "),i("a",{attrs:{href:"https://www.git-tower.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tower"),i("OutboundLink")],1),e._v(", "),i("a",{attrs:{href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Desktop"),i("OutboundLink")],1),e._v(" and "),i("a",{attrs:{href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source Tree"),i("OutboundLink")],1),e._v(", or alternatively the CLI. Guides for the desktop apps can be found on their documentation. To clone your project from the CLI, you need to do")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("git clone git@github.com:YOUR_ACCOUNT/titanium_mobile.git   # YOUR_ACCOUNT is your Github account name\ncd titanium_mobile\ngit remote add appcelerator git://github.com/appcelerator/titanium_mobile.git\ngit checkout master\ngit checkout -b PROJECT-NUMBER   # PROJECT-NUMBER is from step 2. For example, TIMOB-1234 or TC-432\n")])])]),i("p",[e._v("It is assumed that if you are planning to develop against the "),i("code",[e._v("titanium_mobile")]),e._v(" project, you already have "),i("code",[e._v("git")]),e._v(" installed for your system. If you do not, please use our guide for getting set up: "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_Git/"}},[e._v("Installing Git")])],1),e._v(" "),i("p",[e._v("In the commands above, we are performing 3 distinct "),i("code",[e._v("git")]),e._v(" operations to prepare for developing against the titanium_mobile project.")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[i("code",[e._v("git clone")])]),e._v("\nGiven a remote repository, "),i("code",[e._v("clone")]),e._v(" will create a local copy of the recently forked repository that you can modify. As noted above, you need to replace "),i("strong",[i("code",[e._v("YOUR_ACCOUNT")])]),e._v(" with your Github account name")])]),e._v(" "),i("li",[i("p",[i("strong",[i("code",[e._v("git remote add")])]),e._v("\nThis command adds the original "),i("code",[e._v("appcelerator/titanium_mobile")]),e._v(" repository as a remote source for your local repository. This allows you to update your local repository with any changes that are made to the main "),i("code",[e._v("appcelerator/titanium_mobile")]),e._v(" repository.")])]),e._v(" "),i("li",[i("p",[i("strong",[i("code",[e._v("git checkout")])]),e._v("\nThis command, when given the "),i("code",[e._v("-b")]),e._v(" option, creates a local development branch by the name "),i("code",[e._v("PROJECT-NAME")]),e._v(". As mentioned above, the name should correspond to the Jira ticket that you identified in step 2. So if you are planning to address ticket number 1234 in the TIMOB project, your full command would look like this:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("git checkout -b TIMOB-1234\n")])])])])]),e._v(" "),i("p",[e._v("You only need to clone your Github repo and set up the remote repository once. For any subsequent pull requests, you'd do the following:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("git checkout master              # return to the master branch\ngit pull appcelerator master     # update the master branch with the latest code from the main repo\ngit checkout -b PROJECT-NUMBER  # create a new branch based on the current state of the master branch\n")])])]),i("h3",{attrs:{id:"_5-make-your-changes-to-the-development-branch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-make-your-changes-to-the-development-branch"}},[e._v("#")]),e._v(" 5. Make your changes to the development branch.")]),e._v(" "),i("p",[e._v("This is where you will make your changes to the Titanium SDK. There's a few things to consider when doing so:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Follow the Titanium coding standards: "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Coding_Standards/"}},[e._v("Coding Standards")]),e._v(".")],1)]),e._v(" "),i("li",[i("p",[e._v("Functionality added in a pull request must work on all supported versions of our platform. For example, any pull request submitted for both Android and iOS must support Android 2.2+ and iOS 4.0+ as of Titanium Mobile 1.8.")])]),e._v(" "),i("li",[i("p",[e._v("Parity between platforms must be preserved when adding functionality, where possible. To achieve this, you have 2 options")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Submit any pull requests for both Android and iOS")])]),e._v(" "),i("li",[i("p",[e._v('Submit your pull request for one platform, then submit a "parity" Jira ticket for the unsupported platform.')])])])])]),e._v(" "),i("p",[e._v("For example, let's assume you submitted a new feature on Android that has a corresponding feature on iOS, but you did not implement it on iOS. What you would do it submit the Android-only pull request, then create a "),i("a",{attrs:{href:"http://jira.appcelerator.org/browse/TC",target:"_blank",rel:"noopener noreferrer"}},[e._v("Titanium Community"),i("OutboundLink")],1),e._v(" Jira ticket indicating that your pull request is not implemented in iOS. That way our platform engineers, as well as other community members, will have an opportunity to resolve the parity issue.")]),e._v(" "),i("p",[e._v("It takes the burden of implementing on multiple platforms out of your hands, but it is in turn likely that your pull request will take longer to accept as the parity issues are resolved.")]),e._v(" "),i("h3",{attrs:{id:"_6-compile-and-test-the-modified-titanium-mobile-project"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-compile-and-test-the-modified-titanium-mobile-project"}},[e._v("#")]),e._v(" 6. Compile and test the modified titanium_mobile project.")]),e._v(" "),i("p",[e._v("For now, compiling and testing your modified SDK is a very basic process.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Go to titanium_mobile/build")])]),e._v(" "),i("li",[i("p",[e._v("Run "),i("code",[e._v("npm install")]),e._v(" to update the required Node modules")])]),e._v(" "),i("li",[i("p",[e._v("Run "),i("code",[e._v("node scons.js cleanbuild")]),e._v(' to do a clean build for iOS and Android that also packages and installs the SDK. If you only want to build for one platform, add either "ios" or "android" to the command')])]),e._v(" "),i("li",[i("p",[e._v("Run your test app in Appcelerator Studio / CLI against your newly installed SDK.")])])]),e._v(" "),i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Building_the_Titanium_SDK_From_Source/"}},[e._v("Building the Titanium SDK From Source")]),e._v(" for detailed instructions for building the SDK.")],1),e._v(" "),i("p",[e._v("Code that you use to test your pull request should be included in the associated Jira ticket. This test case will be part of the validation process.")]),e._v(" "),i("h3",{attrs:{id:"_7-add-or-modify-the-api-docs-if-necessary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-add-or-modify-the-api-docs-if-necessary"}},[e._v("#")]),e._v(" 7. Add or modify the API docs (if necessary)")]),e._v(" "),i("p",[e._v("If the changes you've made to "),i("code",[e._v("titanium_mobile")]),e._v(" have added to or changed the public Javascript API in any way, you need to change the API docs to reflect that. Let's assume you have added a property named "),i("strong",[i("code",[e._v("myNewProperty")])]),e._v(" to "),i("strong",[i("code",[e._v("Titanium.UI.View")])]),e._v(". Let's tak a look at how we would modify the API docs to document the new property.")]),e._v(" "),i("p",[e._v("The API docs are part of the "),i("code",[e._v("titanium_mobile")]),e._v(" project and can be found at:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("/path/to/titanium_mobile/apidoc\n")])])]),i("p",[e._v("The directory structure inside "),i("code",[e._v("titanium_mobile/apidoc")]),e._v(" is organized by namespace, just as the API docs are in the Developer Center. In our case, we are looking for "),i("code",[e._v("Titanium.UI.View")]),e._v(", so we go to the following directory:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("/path/to/titanium_mobile/apidoc/Titanium/UI\n")])])]),i("p",[e._v("and then we open the "),i("strong",[i("code",[e._v("View.yml")])]),e._v(" file in our favorite editor. We would then scroll down to the "),i("strong",[i("code",[e._v("properties")])]),e._v(" section of the YML document and find where we would put our new property, alphabetically. In our case, "),i("code",[e._v("myNewProperty")]),e._v(" would be between the existing "),i("code",[e._v("layout")]),e._v(" and "),i("code",[e._v("opacity")]),e._v(" properties. The updated documentation would look something like this:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("// layout documentation\n  - name: myNewProperty\n    summary: Useful new property for keeping track of stuff.\n    description: |\n        This property is added as an example of how to add/modify existing\n        API docs documentation. The description here is a more comprehensive\n        overview of the property which can include information regarding\n        its functionality, usage, and limitations.\n    type: String\n    default: 'stuff'\n// opacity documentation\n")])])]),i("p",[e._v("When you are done making your modifications, be sure to build and validate the new API docs. You can do that with the following commands.")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("cd /path/to/titanium_mobile/apidoc\nnode validate.js               # 1. validate the generates API docs\nnode docgen.js                 # 2. generate the API docs in /path/to/titanium_mobile/dist/apidoc/\n")])])]),i("p",[e._v("For a more detailed account of this process, see:")]),e._v(" "),i("ul",[i("li",[i("p",[i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Documentation/Contributing_API_Documentation/"}},[e._v("Contributing API Documentation")])],1)]),e._v(" "),i("li",[i("p",[i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Documentation/Titanium_API_Doc_Style_Guide/"}},[e._v("Titanium API Doc Style Guide")])],1)])]),e._v(" "),i("h3",{attrs:{id:"_8-rebase-your-development-branch-with-master-optional"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_8-rebase-your-development-branch-with-master-optional"}},[e._v("#")]),e._v(" 8. Rebase your development branch with master (optional)")]),e._v(" "),i("p",[e._v("If you have made a number of commits related to your fix over time, you may want to rebase your changes on the master titanium branch. This step is optional.")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("git commit ...                           # commit code changes as usual\ngit checkout master                      # go back to the master branch\ngit pull appcelerator master             # make sure the master is up to date\ngit checkout PROJECT-NUMBER              # go back to your development branch\ngit rebase master                        # rebase your development branch as the master\n")])])]),i("h3",{attrs:{id:"_9-submit-pull-request-in-github"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_9-submit-pull-request-in-github"}},[e._v("#")]),e._v(" 9. Submit pull request in GitHub.")]),e._v(" "),i("p",[e._v("To raise a Github pull request, follow these steps:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Push your changes to your Github fork.")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("git push origin PROJECT-NUMBER\n")])])])]),e._v(" "),i("li",[i("p",[e._v("Go to the "),i("code",[e._v("appcelerator/itanium_mobile")]),e._v(" repository. Usually, it will be highlighted automatically and prompt you to create a pull request. If not, open a pull request manually (steps 3-6)")])]),e._v(" "),i("li",[i("p",[e._v("Open your GitHub "),i("code",[e._v("titanium_mobile")]),e._v(" repository in your browser, select the development branch that you have pushed using the branch selector on the left.")])]),e._v(" "),i("li",[i("p",[e._v("Confirm that your last commit is displayed beneath.")])]),e._v(" "),i("li",[i("p",[e._v('Click the "New pull request" button:')]),e._v(" "),i("p",[i("img",{attrs:{src:o(821),alt:"github-pr"}})])]),e._v(" "),i("li",[i("p",[e._v('Click the "compare across forks" link, select your fork and branch from the list:')]),e._v(" "),i("p",[i("img",{attrs:{src:o(822),alt:"github-compare"}})]),e._v(" "),i("p",[e._v('Add a message using the form on the following page, and click the "Create Pull Request" button to submit it. Some guidelines:')]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Put the JIRA ticket first, in brackets, e.g.: "),i("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/pull/10025",target:"_blank",rel:"noopener noreferrer"}},[e._v("[TIMOB-26010] Android: Add a missing null check in getResponseHeaders"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[e._v("If you have multiple JIRA tickets, list them. You should only have 1 ticket per PR, e.g.: "),i("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/pull/5039",target:"_blank",rel:"noopener noreferrer"}},[e._v("[TIMOB-10350] [TIMOB-9558] Anvil test case for xml test suite"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[e._v("If you are doing a back port, put the branch name after the JIRA number in parenthesis. Use the ACTUAL name of the branch, e.g.: "),i("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/pull/9987",target:"_blank",rel:"noopener noreferrer"}},[e._v("[TIMOB-25936] (7_1_X) iOS: Fix appendSection & appendRow on main-thread"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[e._v("Use the title of the JIRA ticket (or a close approximation) for titling the PR.")])]),e._v(" "),i("li",[i("p",[e._v("Add a link to the JIRA ticket in the description of the PR.")])])])])]),e._v(" "),i("p",[e._v("At this point, your request is ready for review. In most cases a member of the Titanium core team should review your request within a few days. Reviews may take longer if there is a large volume of pull requests outstanding.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("💡 Hint")]),e._v(" "),i("p",[e._v("A pull request is a request for the HEAD of the branch. Any commits that you push to your branch, up until the moment the pull request is merged, will be merged into the master branch.")])]),e._v(" "),i("h2",{attrs:{id:"frequently-asked-questions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),i("p",[e._v("Q. What does it mean if my PR is rejected? Does "),i("strong",[e._v("Rejected")]),e._v(" in bold mean they really don't like it?")]),e._v(" "),i("p",[e._v("A. It's common for a PR to be rejected when it is first made. This could be because it fails functional testing, needs changes to the code style, or because the description of the issue and/or solution is not clear enough for the reviewer to test the change. In this case, the reviewer should give clear guidance about what needs to be fixed for the PR to be processed.")]),e._v(" "),i("p",[e._v("A PR can also be rejected if the feature is determined to be a bad fit for the project – for example, something that would be better implemented as a module.")]),e._v(" "),i("p",[e._v("And many reviewers use bold for "),i("strong",[e._v("Accepted")]),e._v(" or "),i("strong",[e._v("Rejected")]),e._v(" so they stand out from the rest of the text. It's not personal – really.")]),e._v(" "),i("p",[e._v("Q. What happens if I need to make changes to my pull request? Do I need to submit a new one?")]),e._v(" "),i("p",[e._v("A. If your PR hasn't been merged, simply pushing new changes to your Github branch will update the pull request. If the reviewer requests changes to your PR, simply add a new commit on the branch and push it to Github.")])])}),[],!1,null,null,null);t.default=a.exports},820:function(e,t,o){e.exports=o.p+"assets/img/Bildschirmfoto_2018-05-04_um_11.17.17.e402b4af.png"},821:function(e,t,o){e.exports=o.p+"assets/img/github-pr.96dbcf08.png"},822:function(e,t,o){e.exports=o.p+"assets/img/github-compare.5bfc3afc.png"}}]);