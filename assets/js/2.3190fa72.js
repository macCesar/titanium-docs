(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1412:function(t,i,a){var e=a(3),o=a(1413);e({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},1413:function(t,i,a){"use strict";var e=a(17),o=a(47),n=a(16),s=a(49),m=a(23),r=Math.min,u=[].lastIndexOf,l=!!u&&1/[1].lastIndexOf(1,-0)<0,p=s("lastIndexOf"),c=m("indexOf",{ACCESSORS:!0,1:0}),h=l||!p||!c;t.exports=h?function(t){if(l)return u.apply(this,arguments)||0;var i=e(this),a=n(i.length),s=a-1;for(arguments.length>1&&(s=r(s,o(arguments[1]))),s<0&&(s=a+s);s>=0;s--)if(s in i&&i[s]===t)return s||0;return-1}:u},1414:function(t){t.exports=JSON.parse('{"Titanium.Proxy":"/api/titanium/proxy.html","Titanium.Module":"/api/titanium/module.html","Titanium.UI.View":"/api/titanium/ui/view.html","Dictionary":"/api/structs/dictionary.html","Titanium.API":"/api/titanium/api.html","Titanium.Accelerometer":"/api/titanium/accelerometer.html","Titanium.Analytics":"/api/titanium/analytics.html","Titanium.Android.ActionBar":"/api/titanium/android/actionbar.html","Titanium.Android.Activity":"/api/titanium/android/activity.html","ActivityResult":"/api/structs/activityresult.html","ActivityLifecycleCallbackObject":"/api/structs/activitylifecyclecallbackobject.html","OptionsMenuCallbackObject":"/api/structs/optionsmenucallbackobject.html","Titanium.Android":"/api/titanium/android.html","ServiceIntentOptions":"/api/structs/serviceintentoptions.html","RequestPermissionAccessResult":"/api/structs/requestpermissionaccessresult.html","Titanium.Android.BigPictureStyle":"/api/titanium/android/bigpicturestyle.html","Titanium.Android.BigTextStyle":"/api/titanium/android/bigtextstyle.html","Titanium.Android.BroadcastReceiver":"/api/titanium/android/broadcastreceiver.html","Titanium.Android.Calendar.Alert":"/api/titanium/android/calendar/alert.html","Titanium.Android.Calendar":"/api/titanium/android/calendar.html","CalendarPermissionResponse":"/api/structs/calendarpermissionresponse.html","Titanium.Android.Calendar.Calendar":"/api/titanium/android/calendar/calendar.html","Titanium.Android.Calendar.Event":"/api/titanium/android/calendar/event.html","Titanium.Android.Calendar.Reminder":"/api/titanium/android/calendar/reminder.html","Titanium.Android.Intent":"/api/titanium/android/intent.html","Titanium.Android.Menu":"/api/titanium/android/menu.html","Titanium.Android.MenuItem":"/api/titanium/android/menuitem.html","Titanium.Android.Notification":"/api/titanium/android/notification.html","wakeLockOptions":"/api/structs/wakelockoptions.html","Titanium.Android.NotificationChannel":"/api/titanium/android/notificationchannel.html","Titanium.Android.NotificationManager":"/api/titanium/android/notificationmanager.html","Titanium.Android.PendingIntent":"/api/titanium/android/pendingintent.html","Titanium.Android.QuickSettingsService":"/api/titanium/android/quicksettingsservice.html","showParams":"/api/structs/showparams.html","Titanium.Android.R":"/api/titanium/android/r.html","Titanium.Android.RemoteViews":"/api/titanium/android/remoteviews.html","Titanium.Android.Service":"/api/titanium/android/service.html","Titanium.App.Android":"/api/titanium/app/android.html","Titanium.App":"/api/titanium/app.html","launchOptions":"/api/structs/launchoptions.html","Titanium.App.Properties":"/api/titanium/app/properties.html","Titanium.App.iOS.BackgroundService":"/api/titanium/app/ios/backgroundservice.html","Titanium.App.iOS.LocalNotification":"/api/titanium/app/ios/localnotification.html","Titanium.App.iOS.SearchQuery":"/api/titanium/app/ios/searchquery.html","Titanium.App.iOS.SearchableIndex":"/api/titanium/app/ios/searchableindex.html","Titanium.App.iOS.SearchableItem":"/api/titanium/app/ios/searchableitem.html","Titanium.App.iOS.SearchableItemAttributeSet":"/api/titanium/app/ios/searchableitemattributeset.html","Titanium.App.iOS.UserActivity":"/api/titanium/app/ios/useractivity.html","Titanium.App.iOS.UserDefaults":"/api/titanium/app/ios/userdefaults.html","Titanium.App.iOS.UserNotificationAction":"/api/titanium/app/ios/usernotificationaction.html","Titanium.App.iOS.UserNotificationCategory":"/api/titanium/app/ios/usernotificationcategory.html","Titanium.App.iOS.UserNotificationCenter":"/api/titanium/app/ios/usernotificationcenter.html","UserNotificationCallbackResponse":"/api/structs/usernotificationcallbackresponse.html","UserNotificationDictionary":"/api/structs/usernotificationdictionary.html","GetUserNotificationSettings":"/api/structs/getusernotificationsettings.html","Titanium.App.iOS":"/api/titanium/app/ios.html","NotificationParams":"/api/structs/notificationparams.html","UserNotificationAttachment":"/api/structs/usernotificationattachment.html","LaunchOptionsType":"/api/structs/launchoptionstype.html","UserNotificationSettings":"/api/structs/usernotificationsettings.html","Titanium.Blob":"/api/titanium/blob.html","Titanium.BlobStream":"/api/titanium/blobstream.html","Titanium.Buffer":"/api/titanium/buffer.html","Titanium.BufferStream":"/api/titanium/bufferstream.html","Titanium.Calendar.Alert":"/api/titanium/calendar/alert.html","Titanium.Calendar.Attendee":"/api/titanium/calendar/attendee.html","Titanium.Calendar":"/api/titanium/calendar.html","EventsAuthorizationResponse":"/api/structs/eventsauthorizationresponse.html","Titanium.Calendar.Calendar":"/api/titanium/calendar/calendar.html","Titanium.Calendar.Event":"/api/titanium/calendar/event.html","Titanium.Calendar.RecurrenceRule":"/api/titanium/calendar/recurrencerule.html","daysOfTheWeekDictionary":"/api/structs/daysoftheweekdictionary.html","recurrenceEndDictionary":"/api/structs/recurrenceenddictionary.html","Titanium.Calendar.Reminder":"/api/titanium/calendar/reminder.html","Titanium.Codec":"/api/titanium/codec.html","EncodeNumberDict":"/api/structs/encodenumberdict.html","DecodeNumberDict":"/api/structs/decodenumberdict.html","EncodeStringDict":"/api/structs/encodestringdict.html","DecodeStringDict":"/api/structs/decodestringdict.html","Titanium.Contacts":"/api/titanium/contacts.html","showContactsParams":"/api/structs/showcontactsparams.html","ContactsAuthorizationResponse":"/api/structs/contactsauthorizationresponse.html","Titanium.Contacts.Group":"/api/titanium/contacts/group.html","Titanium.Contacts.Person":"/api/titanium/contacts/person.html","Titanium.Database.DB":"/api/titanium/database/db.html","BatchQueryError":"/api/structs/batchqueryerror.html","PossibleBatchQueryError":"/api/structs/possiblebatchqueryerror.html","Titanium.Database":"/api/titanium/database.html","Titanium.Database.ResultSet":"/api/titanium/database/resultset.html","ErrorResponse":"/api/structs/errorresponse.html","SuccessResponse":"/api/structs/successresponse.html","FailureResponse":"/api/structs/failureresponse.html","Titanium.Event":"/api/structs/titanium/event.html","Titanium.Filesystem.File":"/api/titanium/filesystem/file.html","Titanium.Filesystem.FileStream":"/api/titanium/filesystem/filestream.html","Titanium.Filesystem":"/api/titanium/filesystem.html","RequestStorageAccessResult":"/api/structs/requeststorageaccessresult.html","Titanium.Geolocation.Android":"/api/titanium/geolocation/android.html","Titanium.Geolocation.Android.LocationProvider":"/api/titanium/geolocation/android/locationprovider.html","Titanium.Geolocation.Android.LocationRule":"/api/titanium/geolocation/android/locationrule.html","Titanium.Geolocation":"/api/titanium/geolocation.html","LocationResults":"/api/structs/locationresults.html","LocationCoordinates":"/api/structs/locationcoordinates.html","LocationCoordinatesFloor":"/api/structs/locationcoordinatesfloor.html","ForwardGeocodeResponse":"/api/structs/forwardgeocoderesponse.html","HeadingResponse":"/api/structs/headingresponse.html","HeadingData":"/api/structs/headingdata.html","LocationProviderDict":"/api/structs/locationproviderdict.html","ReverseGeocodeResponse":"/api/structs/reversegeocoderesponse.html","GeocodedAddress":"/api/structs/geocodedaddress.html","LocationAuthorizationResponse":"/api/structs/locationauthorizationresponse.html","Titanium.Gesture":"/api/titanium/gesture.html","Titanium.IOStream":"/api/titanium/iostream.html","Titanium.Locale":"/api/titanium/locale.html","Titanium.Media.Android":"/api/titanium/media/android.html","MediaScannerResponse":"/api/structs/mediascannerresponse.html","Titanium.Media.AudioPlayer":"/api/titanium/media/audioplayer.html","TiMetadataItemType":"/api/structs/timetadataitemtype.html","Titanium.Media.AudioRecorder":"/api/titanium/media/audiorecorder.html","Titanium.Media.Item":"/api/titanium/media/item.html","Titanium.Media":"/api/titanium/media.html","MusicLibraryOptionsType":"/api/structs/musiclibraryoptionstype.html","MusicLibraryResponseType":"/api/structs/musiclibraryresponsetype.html","MediaQueryType":"/api/structs/mediaquerytype.html","MediaQueryInfoType":"/api/structs/mediaqueryinfotype.html","CameraOptionsType":"/api/structs/cameraoptionstype.html","PhotoGalleryOptionsType":"/api/structs/photogalleryoptionstype.html","CameraMediaItemType":"/api/structs/cameramediaitemtype.html","PreviewImageOptions":"/api/structs/previewimageoptions.html","PreviewImageError":"/api/structs/previewimageerror.html","ScreenshotResult":"/api/structs/screenshotresult.html","MediaAuthorizationResponse":"/api/structs/mediaauthorizationresponse.html","RequestCameraAccessResult":"/api/structs/requestcameraaccessresult.html","RequestMusicLibraryAccessResult":"/api/structs/requestmusiclibraryaccessresult.html","RequestPhotoGalleryAccessResult":"/api/structs/requestphotogalleryaccessresult.html","RouteDescription":"/api/structs/routedescription.html","Titanium.Media.MusicPlayer":"/api/titanium/media/musicplayer.html","Titanium.Media.Sound":"/api/titanium/media/sound.html","Titanium.Media.SystemAlert":"/api/titanium/media/systemalert.html","Titanium.Media.VideoPlayer":"/api/titanium/media/videoplayer.html","ThumbnailResponse":"/api/structs/thumbnailresponse.html","MovieSize":"/api/structs/moviesize.html","Titanium.Network.BonjourBrowser":"/api/titanium/network/bonjourbrowser.html","Titanium.Network.BonjourService":"/api/titanium/network/bonjourservice.html","Titanium.Network.Cookie":"/api/titanium/network/cookie.html","Titanium.Network.HTTPClient":"/api/titanium/network/httpclient.html","SecurityManagerProtocol":"/api/structs/securitymanagerprotocol.html","APSConnectionDelegate":"/api/structs/apsconnectiondelegate.html","ReadyStatePayload":"/api/structs/readystatepayload.html","Titanium.Network":"/api/titanium/network.html","PushNotificationConfig":"/api/structs/pushnotificationconfig.html","PushNotificationSuccessArg":"/api/structs/pushnotificationsuccessarg.html","PushNotificationErrorArg":"/api/structs/pushnotificationerrorarg.html","PushNotificationData":"/api/structs/pushnotificationdata.html","Titanium.Network.Socket":"/api/titanium/network/socket.html","Titanium.Network.Socket.TCP":"/api/titanium/network/socket/tcp.html","ConnectedCallbackArgs":"/api/structs/connectedcallbackargs.html","ErrorCallbackArgs":"/api/structs/errorcallbackargs.html","AcceptedCallbackArgs":"/api/structs/acceptedcallbackargs.html","AcceptDict":"/api/structs/acceptdict.html","Titanium.Network.TCPSocket":"/api/titanium/network/tcpsocket.html","Titanium.Platform.Android":"/api/titanium/platform/android.html","Titanium.Platform.DisplayCaps":"/api/titanium/platform/displaycaps.html","Titanium.Platform":"/api/titanium/platform.html","CPU":"/api/structs/cpu.html","CPUTimes":"/api/structs/cputimes.html","OpenURLOptions":"/api/structs/openurloptions.html","Titanium.Stream":"/api/titanium/stream.html","CreateStreamArgs":"/api/structs/createstreamargs.html","ReadCallbackArgs":"/api/structs/readcallbackargs.html","WriteCallbackArgs":"/api/structs/writecallbackargs.html","WriteStreamCallbackArgs":"/api/structs/writestreamcallbackargs.html","PumpCallbackArgs":"/api/structs/pumpcallbackargs.html","Titanium":"/api/titanium.html","CreateBufferArgs":"/api/structs/createbufferargs.html","Titanium.UI.2DMatrix":"/api/titanium/ui/2dmatrix.html","MatrixCreationDict":"/api/structs/matrixcreationdict.html","Titanium.UI.3DMatrix":"/api/titanium/ui/3dmatrix.html","Titanium.UI.ActivityIndicator":"/api/titanium/ui/activityindicator.html","Titanium.UI.ActivityIndicatorStyle":"/api/titanium/ui/activityindicatorstyle.html","Titanium.UI.AlertDialog":"/api/titanium/ui/alertdialog.html","Titanium.UI.Android":"/api/titanium/ui/android.html","Titanium.UI.Android.CardView":"/api/titanium/ui/android/cardview.html","Titanium.UI.Android.DrawerLayout":"/api/titanium/ui/android/drawerlayout.html","Titanium.UI.Android.ProgressIndicator":"/api/titanium/ui/android/progressindicator.html","Titanium.UI.Android.SearchView":"/api/titanium/ui/android/searchview.html","AnimatedOptions":"/api/structs/animatedoptions.html","AnimatedWithDurationOptions":"/api/structs/animatedwithdurationoptions.html","Titanium.UI.Animation":"/api/titanium/ui/animation.html","Attribute":"/api/structs/attribute.html","ParagraphAttribute":"/api/structs/paragraphattribute.html","Titanium.UI.AttributedString":"/api/titanium/ui/attributedstring.html","Titanium.UI.Button":"/api/titanium/ui/button.html","Titanium.UI.ButtonBar":"/api/titanium/ui/buttonbar.html","Titanium.UI.Clipboard":"/api/titanium/ui/clipboard.html","ClipboardItemsType":"/api/structs/clipboarditemstype.html","Titanium.UI.Color":"/api/titanium/ui/color.html","Titanium.UI.CoverFlowView":"/api/titanium/ui/coverflowview.html","Titanium.UI.DashboardItem":"/api/titanium/ui/dashboarditem.html","Titanium.UI.DashboardView":"/api/titanium/ui/dashboardview.html","Dimension":"/api/structs/dimension.html","DimensionWithAbsolutes":"/api/structs/dimensionwithabsolutes.html","Titanium.UI.EmailDialog":"/api/titanium/ui/emaildialog.html","Font":"/api/structs/font.html","Titanium.UI.ImageView":"/api/titanium/ui/imageview.html","Titanium.UI.Label":"/api/titanium/ui/label.html","LabelLineSpacing":"/api/structs/labellinespacing.html","Titanium.UI.ListItem":"/api/titanium/ui/listitem.html","ItemTemplate":"/api/structs/itemtemplate.html","ViewTemplate":"/api/structs/viewtemplate.html","ListDataItem":"/api/structs/listdataitem.html","RowActionType":"/api/structs/rowactiontype.html","Titanium.UI.ListSection":"/api/titanium/ui/listsection.html","Titanium.UI.ListView":"/api/titanium/ui/listview.html","ListViewAnimationProperties":"/api/structs/listviewanimationproperties.html","ListViewIndexEntry":"/api/structs/listviewindexentry.html","ListViewMarkerProps":"/api/structs/listviewmarkerprops.html","ListItemEventType":"/api/structs/listitemeventtype.html","SelectedItem":"/api/structs/selecteditem.html","Titanium.UI.MaskedImage":"/api/titanium/ui/maskedimage.html","Titanium.UI.Matrix2D":"/api/titanium/ui/matrix2d.html","Matrix2DCreationDict":"/api/structs/matrix2dcreationdict.html","Titanium.UI.Matrix3D":"/api/titanium/ui/matrix3d.html","Matrix3DCreationDict":"/api/structs/matrix3dcreationdict.html","Titanium.UI.NavigationWindow":"/api/titanium/ui/navigationwindow.html","Titanium.UI.Notification":"/api/titanium/ui/notification.html","Titanium.UI.OptionDialog":"/api/titanium/ui/optiondialog.html","hideParams":"/api/structs/hideparams.html","HorizontalInsets":"/api/structs/horizontalinsets.html","Padding":"/api/structs/padding.html","Titanium.UI.Picker":"/api/titanium/ui/picker.html","Titanium.UI.PickerColumn":"/api/titanium/ui/pickercolumn.html","Titanium.UI.PickerRow":"/api/titanium/ui/pickerrow.html","Titanium.UI.ProgressBar":"/api/titanium/ui/progressbar.html","Titanium.UI.RefreshControl":"/api/titanium/ui/refreshcontrol.html","Titanium.UI.ScrollView":"/api/titanium/ui/scrollview.html","Titanium.UI.ScrollableView":"/api/titanium/ui/scrollableview.html","Titanium.UI.SearchBar":"/api/titanium/ui/searchbar.html","SearchBarToken":"/api/structs/searchbartoken.html","Titanium.UI.ShortcutItem":"/api/titanium/ui/shortcutitem.html","Size":"/api/structs/size.html","Titanium.UI.Slider":"/api/titanium/ui/slider.html","Titanium.UI.Switch":"/api/titanium/ui/switch.html","Titanium.UI.Tab":"/api/titanium/ui/tab.html","TabIconInsets":"/api/structs/tabiconinsets.html","Titanium.UI.TabGroup":"/api/titanium/ui/tabgroup.html","Titanium.UI.TabbedBar":"/api/titanium/ui/tabbedbar.html","Titanium.UI.TableView":"/api/titanium/ui/tableview.html","TableViewAnimationProperties":"/api/structs/tableviewanimationproperties.html","TableViewIndexEntry":"/api/structs/tableviewindexentry.html","SelectedRowObject":"/api/structs/selectedrowobject.html","Titanium.UI.TableViewRow":"/api/titanium/ui/tableviewrow.html","Titanium.UI.TableViewSection":"/api/titanium/ui/tableviewsection.html","Titanium.UI.TextArea":"/api/titanium/ui/textarea.html","textAreaSelectedParams":"/api/structs/textareaselectedparams.html","Titanium.UI.TextField":"/api/titanium/ui/textfield.html","textFieldSelectedParams":"/api/structs/textfieldselectedparams.html","TextFieldPadding":"/api/structs/textfieldpadding.html","Titanium.UI.Toolbar":"/api/titanium/ui/toolbar.html","Titanium.UI":"/api/titanium/ui.html","Point":"/api/structs/point.html","Gradient":"/api/structs/gradient.html","GradientColorRef":"/api/structs/gradientcolorref.html","MinMaxOptions":"/api/structs/minmaxoptions.html","ViewPositionOptions":"/api/structs/viewpositionoptions.html","Titanium.UI.WebView":"/api/titanium/ui/webview.html","SnapshotResult":"/api/structs/snapshotresult.html","BackForwardList":"/api/structs/backforwardlist.html","BackForwardListItem":"/api/structs/backforwardlistitem.html","OnLinkURLResponse":"/api/structs/onlinkurlresponse.html","UserScriptParams":"/api/structs/userscriptparams.html","Titanium.UI.Window":"/api/titanium/ui/window.html","openWindowParams":"/api/structs/openwindowparams.html","windowToolbarParam":"/api/structs/windowtoolbarparam.html","closeWindowParams":"/api/structs/closewindowparams.html","titleAttributesParams":"/api/structs/titleattributesparams.html","shadowDict":"/api/structs/shadowdict.html","Titanium.UI.iOS.AdView":"/api/titanium/ui/ios/adview.html","Titanium.UI.iOS.AlertDialogStyle":"/api/titanium/ui/ios/alertdialogstyle.html","Titanium.UI.iOS.AnchorAttachmentBehavior":"/api/titanium/ui/ios/anchorattachmentbehavior.html","Titanium.UI.iOS.AnimationStyle":"/api/titanium/ui/ios/animationstyle.html","Titanium.UI.iOS.Animator":"/api/titanium/ui/ios/animator.html","Titanium.UI.iOS.ApplicationShortcuts":"/api/titanium/ui/ios/applicationshortcuts.html","ShortcutParams":"/api/structs/shortcutparams.html","Titanium.UI.iOS.Attribute":"/api/titanium/ui/ios/attribute.html","Titanium.UI.iOS.AttributedString":"/api/titanium/ui/ios/attributedstring.html","Titanium.UI.iOS.BlurView":"/api/titanium/ui/ios/blurview.html","Titanium.UI.iOS.CollisionBehavior":"/api/titanium/ui/ios/collisionbehavior.html","BoundaryIdentifier":"/api/structs/boundaryidentifier.html","Titanium.UI.iOS.CoverFlowView":"/api/titanium/ui/ios/coverflowview.html","CoverFlowImageType":"/api/structs/coverflowimagetype.html","Titanium.UI.iOS.DocumentViewer":"/api/titanium/ui/ios/documentviewer.html","DocumentViewerOptions":"/api/structs/documentvieweroptions.html","Titanium.UI.iOS.DynamicItemBehavior":"/api/titanium/ui/ios/dynamicitembehavior.html","Titanium.UI.iOS.FeedbackGenerator":"/api/titanium/ui/ios/feedbackgenerator.html","Titanium.UI.iOS.GravityBehavior":"/api/titanium/ui/ios/gravitybehavior.html","Titanium.UI.iOS.ListViewCellSelectionStyle":"/api/titanium/ui/ios/listviewcellselectionstyle.html","Titanium.UI.iOS.ListViewScrollPosition":"/api/titanium/ui/ios/listviewscrollposition.html","Titanium.UI.iOS.ListViewStyle":"/api/titanium/ui/ios/listviewstyle.html","Titanium.UI.iOS.LivePhoto":"/api/titanium/ui/ios/livephoto.html","Titanium.UI.iOS.LivePhotoView":"/api/titanium/ui/ios/livephotoview.html","Titanium.UI.iOS.MenuPopup":"/api/titanium/ui/ios/menupopup.html","MenuPopupShowParams":"/api/structs/menupopupshowparams.html","Titanium.UI.iOS.NavigationWindow":"/api/titanium/ui/ios/navigationwindow.html","Titanium.UI.iOS.PreviewAction":"/api/titanium/ui/ios/previewaction.html","Titanium.UI.iOS.PreviewActionGroup":"/api/titanium/ui/ios/previewactiongroup.html","Titanium.UI.iOS.PreviewContext":"/api/titanium/ui/ios/previewcontext.html","Titanium.UI.iOS.ProgressBarStyle":"/api/titanium/ui/ios/progressbarstyle.html","Titanium.UI.iOS.PushBehavior":"/api/titanium/ui/ios/pushbehavior.html","Titanium.UI.iOS.RowAnimationStyle":"/api/titanium/ui/ios/rowanimationstyle.html","Titanium.UI.iOS.ScrollIndicatorStyle":"/api/titanium/ui/ios/scrollindicatorstyle.html","Titanium.UI.iOS.SnapBehavior":"/api/titanium/ui/ios/snapbehavior.html","Titanium.UI.iOS.SplitWindow":"/api/titanium/ui/ios/splitwindow.html","Titanium.UI.iOS.StatusBar":"/api/titanium/ui/ios/statusbar.html","Titanium.UI.iOS.Stepper":"/api/titanium/ui/ios/stepper.html","Titanium.UI.iOS.SystemButton":"/api/titanium/ui/ios/systembutton.html","Titanium.UI.iOS.SystemButtonStyle":"/api/titanium/ui/ios/systembuttonstyle.html","Titanium.UI.iOS.SystemIcon":"/api/titanium/ui/ios/systemicon.html","Titanium.UI.iOS.TabbedBar":"/api/titanium/ui/ios/tabbedbar.html","BarItemType":"/api/structs/baritemtype.html","Titanium.UI.iOS.TableViewCellSelectionStyle":"/api/titanium/ui/ios/tableviewcellselectionstyle.html","Titanium.UI.iOS.TableViewScrollPosition":"/api/titanium/ui/ios/tableviewscrollposition.html","Titanium.UI.iOS.TableViewStyle":"/api/titanium/ui/ios/tableviewstyle.html","Titanium.UI.iOS.Toolbar":"/api/titanium/ui/ios/toolbar.html","Titanium.UI.iOS.TransitionAnimation":"/api/titanium/ui/ios/transitionanimation.html","Titanium.UI.iOS.ViewAttachmentBehavior":"/api/titanium/ui/ios/viewattachmentbehavior.html","Titanium.UI.iOS.WebViewConfiguration":"/api/titanium/ui/ios/webviewconfiguration.html","WebViewPreferencesObject":"/api/structs/webviewpreferencesobject.html","Titanium.UI.iOS.WebViewDecisionHandler":"/api/titanium/ui/ios/webviewdecisionhandler.html","Titanium.UI.iOS.WebViewProcessPool":"/api/titanium/ui/ios/webviewprocesspool.html","Titanium.UI.iOS":"/api/titanium/ui/ios.html","Titanium.UI.iPad.DocumentViewer":"/api/titanium/ui/ipad/documentviewer.html","Titanium.UI.iPad.Popover":"/api/titanium/ui/ipad/popover.html","ShowPopoverParams":"/api/structs/showpopoverparams.html","Titanium.UI.iPad.SplitWindow":"/api/titanium/ui/ipad/splitwindow.html","Titanium.UI.iPad":"/api/titanium/ui/ipad.html","Titanium.UI.iPhone.ActivityIndicatorStyle":"/api/titanium/ui/iphone/activityindicatorstyle.html","Titanium.UI.iPhone.AlertDialogStyle":"/api/titanium/ui/iphone/alertdialogstyle.html","Titanium.UI.iPhone.AnimationStyle":"/api/titanium/ui/iphone/animationstyle.html","Titanium.UI.iPhone.ListViewCellSelectionStyle":"/api/titanium/ui/iphone/listviewcellselectionstyle.html","Titanium.UI.iPhone.ListViewScrollPosition":"/api/titanium/ui/iphone/listviewscrollposition.html","Titanium.UI.iPhone.ListViewSeparatorStyle":"/api/titanium/ui/iphone/listviewseparatorstyle.html","Titanium.UI.iPhone.ListViewStyle":"/api/titanium/ui/iphone/listviewstyle.html","Titanium.UI.iPhone.ProgressBarStyle":"/api/titanium/ui/iphone/progressbarstyle.html","Titanium.UI.iPhone.RowAnimationStyle":"/api/titanium/ui/iphone/rowanimationstyle.html","Titanium.UI.iPhone.ScrollIndicatorStyle":"/api/titanium/ui/iphone/scrollindicatorstyle.html","Titanium.UI.iPhone.SystemButton":"/api/titanium/ui/iphone/systembutton.html","Titanium.UI.iPhone.SystemButtonStyle":"/api/titanium/ui/iphone/systembuttonstyle.html","Titanium.UI.iPhone.SystemIcon":"/api/titanium/ui/iphone/systemicon.html","Titanium.UI.iPhone.TableViewCellSelectionStyle":"/api/titanium/ui/iphone/tableviewcellselectionstyle.html","Titanium.UI.iPhone.TableViewScrollPosition":"/api/titanium/ui/iphone/tableviewscrollposition.html","Titanium.UI.iPhone.TableViewSeparatorStyle":"/api/titanium/ui/iphone/tableviewseparatorstyle.html","Titanium.UI.iPhone.TableViewStyle":"/api/titanium/ui/iphone/tableviewstyle.html","Titanium.UI.iPhone":"/api/titanium/ui/iphone.html","Titanium.Utils":"/api/titanium/utils.html","Titanium.WatchSession":"/api/titanium/watchsession.html","MessageReply":"/api/structs/messagereply.html","Titanium.XML.Attr":"/api/titanium/xml/attr.html","Titanium.XML.CDATASection":"/api/titanium/xml/cdatasection.html","Titanium.XML.CharacterData":"/api/titanium/xml/characterdata.html","Titanium.XML.Comment":"/api/titanium/xml/comment.html","Titanium.XML.DOMImplementation":"/api/titanium/xml/domimplementation.html","Titanium.XML.Document":"/api/titanium/xml/document.html","Titanium.XML.DocumentFragment":"/api/titanium/xml/documentfragment.html","Titanium.XML.DocumentType":"/api/titanium/xml/documenttype.html","Titanium.XML.Element":"/api/titanium/xml/element.html","Titanium.XML.Entity":"/api/titanium/xml/entity.html","Titanium.XML.EntityReference":"/api/titanium/xml/entityreference.html","Titanium.XML.NamedNodeMap":"/api/titanium/xml/namednodemap.html","Titanium.XML.Node":"/api/titanium/xml/node.html","Titanium.XML.NodeList":"/api/titanium/xml/nodelist.html","Titanium.XML.Notation":"/api/titanium/xml/notation.html","Titanium.XML.ProcessingInstruction":"/api/titanium/xml/processinginstruction.html","Titanium.XML.Text":"/api/titanium/xml/text.html","Titanium.XML":"/api/titanium/xml.html","Titanium.Yahoo":"/api/titanium/yahoo.html","YQLResponse":"/api/structs/yqlresponse.html","Global.Console":"/api/global/console.html","Global":"/api/global.html","Global.String":"/api/global/string.html","Titanium.Network.Socket.UDP":"/api/titanium/network/socket/udp.html","Titanium.App.Windows.BackgroundService":"/api/titanium/app/windows/backgroundservice.html","Titanium.App.Windows.BackgroundServiceTask":"/api/titanium/app/windows/backgroundservicetask.html","Titanium.App.Windows":"/api/titanium/app/windows.html","ExtendedExecutionOptionsType":"/api/structs/extendedexecutionoptionstype.html","DataCallbackArgs":"/api/structs/datacallbackargs.html","StartedCallbackArgs":"/api/structs/startedcallbackargs.html","Titanium.UI.Windows.AppBarButton":"/api/titanium/ui/windows/appbarbutton.html","Titanium.UI.Windows.AppBarSeparator":"/api/titanium/ui/windows/appbarseparator.html","Titanium.UI.Windows.AppBarToggleButton":"/api/titanium/ui/windows/appbartogglebutton.html","Titanium.UI.Windows.CommandBar":"/api/titanium/ui/windows/commandbar.html","Titanium.UI.Windows.ListViewScrollPosition":"/api/titanium/ui/windows/listviewscrollposition.html","Titanium.UI.Windows.Style":"/api/titanium/ui/windows/style.html","Titanium.UI.Windows.SystemIcon":"/api/titanium/ui/windows/systemicon.html","Titanium.UI.Windows":"/api/titanium/ui/windows.html","Modules.Map.Annotation":"/api/modules/map/annotation.html","Modules.Map.Camera":"/api/modules/map/camera.html","Modules.Map.Circle":"/api/modules/map/circle.html","Modules.Map.ImageOverlay":"/api/modules/map/imageoverlay.html","MapPointType":"/api/structs/mappointtype.html","MapBoundsCoordinateType":"/api/structs/mapboundscoordinatetype.html","Modules.Map":"/api/modules/map.html","Modules.Map.Polygon":"/api/modules/map/polygon.html","Modules.Map.Polyline":"/api/modules/map/polyline.html","Modules.Map.Route":"/api/modules/map/route.html","Modules.Map.Snapshotter":"/api/modules/map/snapshotter.html","SnapshotSize":"/api/structs/snapshotsize.html","Modules.Map.StreetViewPanorama":"/api/modules/map/streetviewpanorama.html","StreetViewPosition":"/api/structs/streetviewposition.html","Modules.Map.View":"/api/modules/map/view.html","MapViewPadding":"/api/structs/mapviewpadding.html","MapRegionTypev2":"/api/structs/mapregiontypev2.html","MapLocationTypeV2":"/api/structs/maplocationtypev2.html","CameraAnimationParams":"/api/structs/cameraanimationparams.html","ClusterAnnotationParams":"/api/structs/clusterannotationparams.html","Modules.Facebook":"/api/modules/facebook.html","FacebookGraphResponse":"/api/structs/facebookgraphresponse.html","FacebookPermissionResponse":"/api/structs/facebookpermissionresponse.html","SharePhotoContentParams":"/api/structs/sharephotocontentparams.html","SharePhotoContentPhotoParams":"/api/structs/sharephotocontentphotoparams.html","ShareLinkContentParams":"/api/structs/sharelinkcontentparams.html","RequestDialogParams":"/api/structs/requestdialogparams.html","ShareToMessengerParams":"/api/structs/sharetomessengerparams.html","InviteDialogParams":"/api/structs/invitedialogparams.html","CurrentAccessTokenParams":"/api/structs/currentaccesstokenparams.html","FacebookDeferredAppLinkResponse":"/api/structs/facebookdeferredapplinkresponse.html","Modules.Facebook.LikeButton":"/api/modules/facebook/likebutton.html","Modules.Facebook.LoginButton":"/api/modules/facebook/loginbutton.html","Modules.Facebook.MessengerButton":"/api/modules/facebook/messengerbutton.html","Modules.Nfc.NdefMessage":"/api/modules/nfc/ndefmessage.html","Modules.Nfc.NdefRecord":"/api/modules/nfc/ndefrecord.html","Modules.Nfc.NdefRecordApplication":"/api/modules/nfc/ndefrecordapplication.html","Modules.Nfc.NdefRecordEmpty":"/api/modules/nfc/ndefrecordempty.html","Modules.Nfc.NdefRecordExternal":"/api/modules/nfc/ndefrecordexternal.html","Modules.Nfc.NdefRecordMedia":"/api/modules/nfc/ndefrecordmedia.html","Modules.Nfc.NdefRecordSmartPoster":"/api/modules/nfc/ndefrecordsmartposter.html","Modules.Nfc.NdefRecordText":"/api/modules/nfc/ndefrecordtext.html","Modules.Nfc.NdefRecordUnknown":"/api/modules/nfc/ndefrecordunknown.html","Modules.Nfc.NdefRecordUri":"/api/modules/nfc/ndefrecorduri.html","Modules.Nfc":"/api/modules/nfc.html","Modules.Nfc.NfcForegroundDispatchFilter":"/api/modules/nfc/nfcforegrounddispatchfilter.html","NfcIntentFilter":"/api/structs/nfcintentfilter.html","Modules.Nfc.NfcTag":"/api/modules/nfc/nfctag.html","Modules.Nfc.TagTechnology":"/api/modules/nfc/tagtechnology.html","Modules.Nfc.TagTechnologyIsoDep":"/api/modules/nfc/tagtechnologyisodep.html","Modules.Nfc.TagTechnologyMifareClassic":"/api/modules/nfc/tagtechnologymifareclassic.html","Modules.Nfc.TagTechnologyMifareUltralight":"/api/modules/nfc/tagtechnologymifareultralight.html","Modules.Nfc.TagTechnologyNdefFormatable":"/api/modules/nfc/tagtechnologyndefformatable.html","Modules.Nfc.TagTechnologyNdef":"/api/modules/nfc/tagtechnologyndef.html","Modules.Nfc.TagTechnologyNfcA":"/api/modules/nfc/tagtechnologynfca.html","Modules.Nfc.TagTechnologyNfcB":"/api/modules/nfc/tagtechnologynfcb.html","Modules.Nfc.TagTechnologyNfcF":"/api/modules/nfc/tagtechnologynfcf.html","Modules.Nfc.TagTechnologyNfcV":"/api/modules/nfc/tagtechnologynfcv.html","Modules.Newsstand.Issue":"/api/modules/newsstand/issue.html","NewsstandDownloadAssetProps":"/api/structs/newsstanddownloadassetprops.html","Modules.Newsstand":"/api/modules/newsstand.html","NewsstandAddIssueProps":"/api/structs/newsstandaddissueprops.html","NewsstandGetIssueProps":"/api/structs/newsstandgetissueprops.html","NewsstandSetBasicAuthProps":"/api/structs/newsstandsetbasicauthprops.html","Modules.CoreMotion.Accelerometer":"/api/modules/coremotion/accelerometer.html","Modules.CoreMotion.Altimeter":"/api/modules/coremotion/altimeter.html","Modules.CoreMotion":"/api/modules/coremotion.html","CoreMotionReferenceFrameArgs":"/api/structs/coremotionreferenceframeargs.html","CoreMotionQueryActivityArgs":"/api/structs/coremotionqueryactivityargs.html","CoreMotionStartStepCountingArgs":"/api/structs/coremotionstartstepcountingargs.html","CoreMotionStartPedometerArgs":"/api/structs/coremotionstartpedometerargs.html","CoreMotionQueryStepCountArgs":"/api/structs/coremotionquerystepcountargs.html","CoreMotionAccelerometerDataWithSuccess":"/api/structs/coremotionaccelerometerdatawithsuccess.html","CoreMotionGyroDataWithSuccess":"/api/structs/coremotiongyrodatawithsuccess.html","CoreMotionMagnetometerDataWithSuccess":"/api/structs/coremotionmagnetometerdatawithsuccess.html","CoreMotionDeviceMotionDataWithSuccess":"/api/structs/coremotiondevicemotiondatawithsuccess.html","CoreMotionPedometerDataWithSuccess":"/api/structs/coremotionpedometerdatawithsuccess.html","CoreMotionAccelerometerData":"/api/structs/coremotionaccelerometerdata.html","CoreMotionGyroData":"/api/structs/coremotiongyrodata.html","CoreMotionMagnetometerData":"/api/structs/coremotionmagnetometerdata.html","CoreMotionDeviceMotionData":"/api/structs/coremotiondevicemotiondata.html","CoreMotionActivityData":"/api/structs/coremotionactivitydata.html","CoreMotionActivityQueryDataWithSuccess":"/api/structs/coremotionactivityquerydatawithsuccess.html","CoreMotionActivityQueryData":"/api/structs/coremotionactivityquerydata.html","CoreMotionStepCountingDataWithSuccess":"/api/structs/coremotionstepcountingdatawithsuccess.html","CoreMotionStepCountingData":"/api/structs/coremotionstepcountingdata.html","CoreMotionStepCountingQueryDataWithSuccess":"/api/structs/coremotionstepcountingquerydatawithsuccess.html","CoreMotionStepCountingQueryData":"/api/structs/coremotionstepcountingquerydata.html","CoreMotionActivity":"/api/structs/coremotionactivity.html","CoreMotionAcceleration":"/api/structs/coremotionacceleration.html","CoreMotionRotationRate":"/api/structs/coremotionrotationrate.html","CoreMotionAttitude":"/api/structs/coremotionattitude.html","CoreMotionRotationMatrix":"/api/structs/coremotionrotationmatrix.html","CoreMotionQuaternion":"/api/structs/coremotionquaternion.html","CoreMotionMagneticField":"/api/structs/coremotionmagneticfield.html","CoreMotionCalibratedMagneticField":"/api/structs/coremotioncalibratedmagneticfield.html","CoreMotionLogItem":"/api/structs/coremotionlogitem.html","CoreMotionAltimeterData":"/api/structs/coremotionaltimeterdata.html","Modules.CoreMotion.DeviceMotion":"/api/modules/coremotion/devicemotion.html","Modules.CoreMotion.Gyroscope":"/api/modules/coremotion/gyroscope.html","Modules.CoreMotion.Magnetometer":"/api/modules/coremotion/magnetometer.html","Modules.CoreMotion.MotionActivity":"/api/modules/coremotion/motionactivity.html","Modules.CoreMotion.Pedometer":"/api/modules/coremotion/pedometer.html","Modules.CoreMotion.StepCounter":"/api/modules/coremotion/stepcounter.html","Modules.URLSession.Session":"/api/modules/urlsession/session.html","DownloadTaskType":"/api/structs/downloadtasktype.html","UploadDataTaskType":"/api/structs/uploaddatatasktype.html","Modules.URLSession.SessionConfiguration":"/api/modules/urlsession/sessionconfiguration.html","Modules.URLSession":"/api/modules/urlsession.html","Modules.TouchId.KeychainItem":"/api/modules/touchid/keychainitem.html","KeychainItemType":"/api/structs/keychainitemtype.html","Modules.TouchId":"/api/modules/touchid.html","TouchIdAuthenticationType":"/api/structs/touchidauthenticationtype.html","DeviceCanAuthenticateResult":"/api/structs/devicecanauthenticateresult.html","Modules.Identity":"/api/modules/identity.html","IdentityAuthenticationType":"/api/structs/identityauthenticationtype.html","Modules.Identity.KeychainItem":"/api/modules/identity/keychainitem.html","Modules.SafariDialog.AuthenticationSession":"/api/modules/safaridialog/authenticationsession.html","AuthenticationSessionCallback":"/api/structs/authenticationsessioncallback.html","Modules.SafariDialog":"/api/modules/safaridialog.html","SafariDialogOpenParams":"/api/structs/safaridialogopenparams.html","Modules.PlayServices":"/api/modules/playservices.html","Modules.PlayServices.AvailableCallbackObject":"/api/structs/modules/playservices/availablecallbackobject.html","Modules.Geofence":"/api/modules/geofence.html","Modules.Geofence.Region":"/api/modules/geofence/region.html","Modules.Https":"/api/modules/https.html","Modules.EncryptedDatabase":"/api/modules/encrypteddatabase.html","CipherUpgradeResult":"/api/structs/cipherupgraderesult.html","Modules.WebDialog.AuthenticationSession":"/api/modules/webdialog/authenticationsession.html","Modules.WebDialog":"/api/modules/webdialog.html","WebDialogOpenParams":"/api/structs/webdialogopenparams.html","Modules.ACA":"/api/modules/aca.html","Error":"/api/structs/error.html","Modules.Barcode":"/api/modules/barcode.html","BarcodeCaptureDict":"/api/structs/barcodecapturedict.html","BarcodeParseDict":"/api/structs/barcodeparsedict.html","Modules.Applesignin":"/api/modules/applesignin.html","ProfileObject":"/api/structs/profileobject.html","PersonName":"/api/structs/personname.html","CredentialStateResponse":"/api/structs/credentialstateresponse.html","Modules.Applesignin.LoginButton":"/api/modules/applesignin/loginbutton.html"}')},1415:function(t,i,a){"use strict";var e=a(392);a.n(e).a},1418:function(t,i,a){"use strict";a.r(i);a(73),a(181),a(1412);var e=a(1414),o={props:{type:{type:String,required:!0}},computed:{typeLink:function(){var t;return null===(t=this.isGeneric(this.type)?this.findTypeLink(this.genericParameterName):this.findTypeLink(this.type))||this.$versions&&this.$page.version!==this.$versions[0]&&(t="".concat(this.$page.version,"/").concat(t)),t},genericTypeName:function(){return this.type.substring(0,this.type.indexOf("<"))},genericParameterName:function(){return this.type.substring(this.type.indexOf("<")+1,this.type.length-1)}},methods:{isGeneric:function(t){return/^(Array|Callback|Dictionary)</.test(t)},findTypeLink:function(t){var i=e[t];if(!i){var a=t.lastIndexOf("."),o=t.substring(0,a);if(!e[o])return null;i="".concat(e[o],"#").concat(t.substring(a+1).toLowerCase())}return i}}},n=(a(1415),a(21)),s=Object(n.a)(o,(function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.isGeneric(t.type)?a("span",{staticClass:"generic-type"},[t._v(t._s(t.genericTypeName)+"<"),t.typeLink?a("router-link",{attrs:{to:t.typeLink}},[t._v(t._s(t.genericParameterName))]):a("span",{staticClass:"unknown-type"},[t._v(t._s(t.genericParameterName))]),t._v(">")],1):t.typeLink?a("router-link",{attrs:{to:t.typeLink}},[t._v(t._s(t.type))]):a("span",{staticClass:"unknown-type"},[t._v(t._s(t.type))])}),[],!1,null,null,null);i.default=s.exports},392:function(t,i,a){}}]);