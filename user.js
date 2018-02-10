
user_pref("app.update.auto", false); // disable browser auto installing update when you do a manual check
user_pref("app.update.service.enabled", false); // Options>Advanced>Update>Use a background service to install updates
user_pref("app.update.silent", false); // ensure update information is not suppressed
user_pref("browser.bookmarks.showRecentlyBookmarked", false);
// user_pref("browser.download.dir", "...");
user_pref("browser.download.folderList", 2);  // When set to 2, the location specified for the most recent download is utilized again
user_pref("browser.download.forbid_open_with", true);
user_pref("browser.download.hide_plugins_without_extensions", false); // disable hiding mime types (Options>Applications) not associated with a plugin
user_pref("browser.download.useDownloadDir", false); // you are prompted for a location each time a download begins
/* user_pref("browser.fullscreen.animate", false); */
user_pref("browser.link.open_newwindow", 3); // open new windows in a new tab instead (This setting is under Options>General>Tabs)
user_pref("browser.link.open_newwindow.restriction", 0);  // Show new windows as tabs (even script windows)
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);  // Disable Highlights
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);  // Disable Snippets
user_pref("browser.newtabpage.activity-stream.topSitesCount", 18);  // Show more rows for Top sites on new tab page
user_pref("browser.pagethumbnails.capturing_disabled", true); // Stop Firefox from displaying thumbnails of previously visited websites (together with pageThumbs.enabled)
user_pref("browser.search.openintab", true);
user_pref("browser.search.reset.enabled", false); // disable search reset (restoring the default search engine)
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.page", 1); // defines how Firefox will start up; 1: load the browser's homepage. (default)
user_pref("browser.showQuitWarning", true);
/* user_pref("browser.tabs.animate", false); */
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.delayHidingAudioPlayingIconMS", 0);
user_pref("browser.tabs.loadInBackground", true); // Do not focus new tabs opened from links (default: true)
// user_pref("browser.tabs.loadBookmarksInBackground", true); // Do not focus new tabs opened from bookmarks (default: false) (with this option set to TRUE, clicking on the home button also is not focused on)
user_pref("browser.tabs.insertRelatedAfterCurrent", false);
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);
user_pref("browser.urlbar.formatting.enabled", false);
user_pref("browser.urlbar.matchBuckets", "general:5,suggestion:4");  // Change the search bar results order to give you history results before suggestion results
user_pref("browser.urlbar.maxRichResults", 14);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("browser.urlbar.trimURLs", false);
user_pref("dom.allow_scripts_to_close_windows", false);

// disable push notifications
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");

user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

user_pref("extensions.getAddons.showPane", false); // hide "Get Add-ons" panel (uses Google Analytics)
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", true);
user_pref("extensions.screenshots.system-disabled", true);
user_pref("extensions.update.autoUpdateDefault", false); // disable add-ons auto update
user_pref("extensions.update.enabled", false); // disable add-ons auto checking for new versions
user_pref("findbar.highlightAll", true);
user_pref("findbar.modalHighlight", true);
user_pref("full-screen-api.transition-duration.enter", "0");
user_pref("full-screen-api.transition-duration.leave", "0");
user_pref("full-screen-api.warning.timeout", 0);
user_pref("general.useragent.override.youtube.com", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0"); // setting the old YouTube layout permanently
user_pref("general.warnOnAboutConfig", false);
user_pref("geo.enabled", false);
user_pref("layout.frame_rate.precise", true); // smoother scolling
user_pref("layout.word_select.eat_space_to_next_word", false); // highlight only the word on doubleclick and not the space after it
user_pref("lightweightThemes.update.enabled", false); // disable auto updating of personas (themes)
// user_pref("media.block-autoplay-until-in-foreground", false);
user_pref("network.cookie.cookieBehavior", 1);  // 1: Allow cookies from originating server only
user_pref("network.cookie.lifetimePolicy", 2);  // 2: The cookie expires at the end of the session (when the browser closes)
user_pref("network.IDN_show_punycode", true); // don't convert Punycode into into Unicode strings; e.g. "http://www.xn----8sbafg9clhjcp.bg/" will be shown instead of "http://www.тв-програма.bg/"
user_pref("network.http.referer.userControlPolicy", 0);
user_pref("offline-apps.allow_by_default", false); // force FF to tell you if a website asks to store data for offline use
user_pref("browser.offline-apps.notify", true);
user_pref("pageThumbs.enabled", false); // Stop Firefox from displaying thumbnails of previously visited websites (together with browser.pagethumbnails.capturing_disabled)
// user_pref("pdfjs.defaultZoomValue", "page-width");  // "page-fit" for page fit

// printing headers and footers
/* 
values:
&P = page number
&PT = page number with total number of pages
&U = the URL of the page
&D = the date and time
&T = the title of the page 
*/
user_pref("print.print_headerleft", "");
user_pref("print.print_headercenter", "");
user_pref("print.print_headerright", "");
user_pref("print.print_footerleft", "&U");
user_pref("print.print_footercenter", "");
user_pref("print.print_footerright", "");

// what to clear on shutdown
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true); // active logins
user_pref("privacy.clearOnShutdown.siteSettings", true);

// Auto selection of items to delete with Ctrl-Shift-Del. True means the data set is selected, false it is not.
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.passwords", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", true);

user_pref("privacy.popups.disable_from_plugins", 3);  // To get around the default popup blocker, some sites use Flash or Java applets to open unrequested windows. 3: Block all plugin initiated popups, even those on whitelisted sites
user_pref("services.sync.enabled", false); // (hidden pref). Disable sync
user_pref("social.enabled", false); // (hidden pref)
user_pref("toolkit.cosmeticAnimations.enabled", false); // disabling all animations
user_pref("ui.key.menuAccessKeyFocuses", false); // disable bringing up the menu when pressing the Alt key
user_pref("zoom.maxPercent", 10000);
user_pref("zoom.minPercent", 1);
