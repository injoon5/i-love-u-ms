// For license information, see `https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/04d5a91f34e0/RC5cd07676cbca479488a7f7d571900703-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/04d5a91f34e0/RC5cd07676cbca479488a7f7d571900703-source.min.js', "null!=window.wdgtagging&&null!=window.wdgtagging.jsll&&function(t,a,d,s){window.location.hostname;var i,n,e=window.location.pathname;d.tagMSStoreBehavior=function(){return\"PARTNERREFERRAL\"},d.isMicrosoftStore=function(t){return t.attr(\"href\").match(/microsoftstore/i)||t.attr(\"href\").match(/microsoft\\.com/i)&&t.attr(\"href\").match(/\\/store/i)},d.tagChooseContentType=function(t){return 0<t.find(\"img\").length||0<t.find(\"picture\").length?\"image\":o(t,\"class\",\"glyph-play\")&&(t.find(\"span\").length<=0||o(t.find(\"span\"),\"class\",\"screen-reader\"))?\"button\":o(t,\"class\",\"mscom-popup-close|m-back-to-top|video_pp_button\")?\"button\":t.is(\"button\")?\"button\":\"text\"};var o=function(t,a,e){var i=s(t),n=new RegExp(e,\"i\");return i.attr(a)&&i.attr(a).match(n)};d.nameNotSet=function(t){return\"undefined\"===t.attr(\"data-bi-name\")||\"\"===t.attr(\"data-bi-name\")||!t.attr(\"data-bi-name\")},d.tagGenericName=function(t){try{d.nameNotSet(t)&&1<t.children().length&&0<t.children().first()[0].textContent.length&&t.attr(\"data-bi-name\",d.etlcStr(t.children().first()[0].textContent,\"undefined\")),d.nameNotSet(t)&&0<t[0].textContent.length&&t.attr(\"data-bi-name\",d.etlcStr(t.text(),\"undefined\")),d.nameNotSet(t)&&0<t.parents(\".iconimagesheading\").length&&t.attr(\"data-bi-name\",d.etlcStr(t.children(\"IMG\").attr(\"alt\"),\"undefined\")),d.nameNotSet(t)&&0<t.find(\"IMG\").length&&t.attr(\"data-bi-name\",d.etlcStr(t.find(\"IMG\").attr(\"alt\"),\"undefined\")),d.nameNotSet(t)&&t.attr(\"value\")&&t.attr(\"data-bi-name\",d.etlcStr(t.attr(\"value\"),\"undefined\")),d.nameNotSet(t)&&t.attr(\"aria-label\")&&t.attr(\"data-bi-name\",d.etlcStr(t.attr(\"aria-label\"),\"undefined\")),d.nameNotSet(t)&&t.attr(\"data-bi-name\",d.etlcStr(t.text(),\"undefined\")),d.nameNotSet(t)&&t.hasClass(\"close-button\")&&t.attr(\"data-bi-name\",d.etlcStr(\"close-button\")),t.hasClass(\"f-previous\")||t.hasClass(\".stealth-carousel-arrow.left-arrow\")?t.attr(\"data-bi-name\",d.etlcStr(\"Previous\")):(t.hasClass(\"f-next\")||t.hasClass(\".stealth-carousel-arrow.right-arrow\"))&&t.attr(\"data-bi-name\",d.etlcStr(\"Next\"))}catch(a){d.debugLog(\"Error tagging data-bi-name(link text) in the common tagging script. Error: \"+a)}},d.tagGenericContentType=function(t){try{if(t.is(\"a\")){if(i=t.attr(\"href\"),n=t.attr(\"class\"),i.match(/javascript/i)||i.match(/view-all/))0<t.parents(\".iconimagesheading\").length&&t.attr({\"data-bi-type\":\"icon\",\"data-bi-bhvr\":\"EXPAND\"});else if(i.match(/app\\.adjust\\.com/i)){var a=i.split(\"/\");6<=a.length&&t.attr(\"data-bi-prtnm\",d.etlcStr(a[5])),t.attr({\"data-bi-bhvr\":\"DOWNLOADCOMMIT\",\"data-bi-type\":d.tagChooseContentType(t)});try{i.match(/app\\.adjust\\.com/i)&&t.attr(\"data-bi-prodid\",d.etlcStr(i.split(\".com/\")[1].split(\"?\")[0],\"undefined\"))}catch(e){d.debugLog(\"Error tagging data-bi-prodid inside tagGenericContentType function. Error: \"+e)}t.attr(\"data-bi-type\",d.tagChooseContentType(t))}else i.match(/ms-windows-store/i)?t.attr({\"data-bi-bhvr\":\"DOWNLOADCOMMIT\",\"data-bi-type\":d.tagChooseContentType(t),\"data-bi-prtnm\":\"ms store\"}):i.match(/microsoft\\.com/i)&&i.match(/\\/store/i)&&i.match(/\\/apps/i)||i.match(/microsoft\\.com/i)&&i.match(/\\/store/i)&&i.match(/\\/collections/i)||i.match(/microsoft\\.com/i)&&i.match(/\\/store/i)&&i.match(/\\/games/i)?t.attr({\"data-bi-bhvr\":\"DOWNLOADCOMMIT\",\"data-bi-type\":d.tagChooseContentType(t),\"data-bi-prtnm\":\"ms store\"}):i.match(/go\\.microsoft\\.com/i)?t.attr(\"data-bi-bhvr\",\"DOWNLOAD\"):d.isMicrosoftStore(t)?t.attr({\"data-bi-bhvr\":d.tagMSStoreBehavior(i),\"data-bi-type\":d.tagChooseContentType(t),\"data-bi-prtnm\":\"ms store\"}):i.match(/facebook\\\\.com/i)?(i.match(/\\/sharer\\//i)?t.attr(\"data-bi-bhvr\",\"SOCIALSHARE\"):t.attr(\"data-bi-bhvr\",\"SOCIALLIKE\"),t.attr({\"data-bi-socchn\":\"facebook\",\"data-bi-name\":\"facebook\",\"data-bi-type\":d.tagChooseContentType(t)})):i.match(/twitter\\\\.com/i)?(i.match(/\\/share/i)?t.attr(\"data-bi-bhvr\",\"SOCIALSHARE\"):t.attr(\"data-bi-bhvr\",\"SOCIALLIKE\"),t.attr({\"data-bi-socchn\":\"twitter\",\"data-bi-name\":\"twitter\",\"data-bi-type\":d.tagChooseContentType(t)})):i.match(/(info\\.|c\\.s\\-|content\\.)microsoft\\.com/i)?(t.attr(\"data-bi-bhvr\",\"STARTPROCESS\"),t.attr(\"data-bi-type\",d.tagChooseContentType(t))):i.match(/\\.exe|.pdf/i)?(t.attr(\"data-bi-bhvr\",\"DOWNLOAD\"),t.attr(\"data-bi-type\",d.tagChooseContentType(t))):i.match(/itunes.apple.com/i)||i.match(/play.google.com/i)?(t.attr(\"data-bi-bhvr\",\"DOWNLOADCOMMIT\"),t.attr(\"data-bi-type\",d.tagChooseContentType(t))):i.match(/support\\/contact-us/i)||i.match(/support\\.microsoft\\.com\\/contactus/i)?(t.attr(\"data-bi-bhvr\",\"CONTACT\"),t.attr(\"data-bi-type\",d.tagChooseContentType(t))):i.match(/support\\.microsoft\\.com/i)||i.match(/\\/support\\.office\\.com/gi)?(t.attr(\"data-bi-bhvr\",\"COMMUNITY\"),t.attr(\"data-bi-type\",d.tagChooseContentType(t))):i.match(/microsoft\\.com/i)&&i.match(/\\/windows/i)&&t.attr({\"data-bi-type\":d.tagChooseContentType(t),\"data-bi-bhvr\":\"OTHER\"});n.match(/glyph-play/i)&&(t.attr(\"aria-label\")&&t.attr(\"data-bi-vidnm\",d.etlcStr(t.attr(\"aria-label\"),\"undefined\")),t.attr({\"data-bi-bhvr\":\"VIDEOPLAYERLOAD\",\"data-bi-type\":d.tagChooseContentType(t)})),t.attr(\"data-retailer\")&&!t.attr(\"data-bi-prtnm\")&&(t.attr(\"data-bi-prtnm\",t.attr(\"data-retailer\")),t.attr(\"data-bi-type\",d.tagChooseContentType(t)),t.attr(\"data-bi-bhvr\",\"PARTNERREFERRAL\"))}}catch(e){d.debugLog(\"Error tagging content type in the common tagging script. Error: \"+e)}},s(\"section:not([data-m])\").attr(\"data-bi-area\",\"body\"),s(\"MAIN:not([data-m]),#mainContent:not([data-m])\").attr(\"data-bi-area\",\"body\"),s(\"#social-network\").attr(\"data-bi-area\",\"footer\"),s(\"a[href]:not([data-m]), button:not([data-m]), section:not([data-m]) a[href], section:not([data-m]) button,a:not([data-m]):not([data-bi-name]), a[data-retailer]:not([data-bi-prtnm]), button[data-retailer]:not([data-bi-prtnm])\").each(function(){try{d.tagGenericName(s(this))}catch(t){d.debugLog(\"Error calling the tagGenericName function in the .each loop in the common tagging script. Error: \"+t)}try{d.tagGenericContentType(s(this))}catch(t){d.debugLog(\"Error calling the tagGenericContentType function in the .each loop in the common tagging script. Error: \"+t)}}),s(document).on(\"mousedown\",\"a[href]:not([data-m]),button:not([data-bi-name]),section:not([data-m]) a[href]:not([data-bi-name]), section:not([data-m]) a[href][data-bi-name='undefined'], section:not([data-m]) button:not([data-bi-name]), section:not([data-m]) button[data-bi-name='undefined']\",function(){try{d.tagGenericName(s(this))}catch(t){d.debugLog(\"Error calling the tagGenericName function in the mousedown listener in the common tagging script. Error: \"+t)}}),s(document).on(\"mousedown\",\"section:not([data-m]) a[href]:not([data-bi-type])\",function(){try{d.tagGenericContentType(s(this))}catch(t){d.debugLog(\"Error calling the tagGenericContentType function in the mousedown listener in the common tagging script. Error: \"+t)}}),s(document).on(\"mousedown\",\"a:not([data-m]):not([data-bi-type]), button:not([data-m]):not([data-bi-type])\",function(){s(this).attr(\"data-bi-type\",d.tagChooseContentType(s(this)))}),s(\"section:not([data-m])\").find(\"[data-name]\").each(function(){var t=d.getProductInfo(this);s(this).attr({\"data-bi-prod\":t.name})}),s(document).on(\"mousedown\",\"section:not([data-m]) [data-name]:not([data-bi-prod])\",function(){var t=d.getProductInfo(this);s(this).attr({\"data-bi-prod\":t.name})}),d.tagPartnerLinks=function(t){try{if(t!==undefined){var a=s(t).attr(\"href\"),e=s(t)[0].hostname||\"\";if(a&&!1===a.startsWith(\"#\")){if(s(t).attr(\"data-retailer\")&&\"\"!=s(t).attr(\"data-retailer\"))var i=s.trim(s(t).attr(\"data-retailer\")).toLowerCase();else i=t.hostname.replace(\"www.\",\"\")||\"\";a&&a.match(/microsoft.com\\//i)&&a.match(/\\/(store|p)\\//i)&&(i=\"ms store\"),i&&(d.tagGenericName(s(t)),s(t).attr({\"data-bi-prtnm\":i,\"data-bi-bhvr\":\"PARTNERREFERRAL\",\"data-bi-type\":d.tagChooseContentType(s(t))})),a.match(/javascript:void\\(0\\)|\\/windows\\//i)||s(t).attr(\"data-bi-prtid\",e)}}}catch(n){d.debugLog(\"Error while tagging thirdparty links in the common tagging script. Error: \"+n)}},d.tagPartnerName=function(t){!s(t).attr(\"data-bi-prtnm\")&&t.href&&s.trim(t.hostname)&&!t.hostname.match(/javascript|^#|\\/windows\\//i)&&s(t).attr(\"data-bi-prtnm\",t.hostname)},s(\"[href*='microsoftstore']:not([data-m]), [href*='microsoft.com'][href*='/store/']:not([data-m]), [href*='microsoft.com'][href*='/p/']:not([data-m])\").each(function(){d.tagPartnerLinks(this);var t=d.getProductInfo(this);s(this).attr({\"data-bi-prod\":t.name,\"data-bi-product\":t.id,\"data-bi-sku\":t.sku})}),s(document).on(\"mousedown\",\"[href*='microsoftstore']:not([data-m]), [href*='microsoft.com'][href*='/store/']:not([data-m]), [href*='microsoft.com'][href*='/p/']:not([data-m])\",function(){d.tagPartnerLinks(this);var t=d.getProductInfo(this);s(this).attr({\"data-bi-prod\":t.name,\"data-bi-product\":t.id,\"data-bi-sku\":t.sku})});var r=\"a[href*='mediaworld'], a[href*='bestbuy.com'], a[href*='amazon.com'], a[href*='walmart.com'], a[href*='dell.com'], a[href*='amazon.de'], a[href*='fnac'], a[href*='bestbuy.ca'], a[href*='staples.ca'], a[href*='amazon.ca'], a[href*='bureauengros.com']\",c=[\"mediaworld\",\"bestbuy.com\",\"amazon.com\",\"walmart.com\",\"dell.com\",\"amazon.de\",\"fnac\",\"bestbuy.ca\",\"staples.ca\",\"amazon.ca\",\"bureauengros.com\"];s(document).on(\"mousedown\",r,function(){d.tagPartnerLinks(this)}),e.match(/\\/promotions\\/pro\\-devices/gi)&&(s(document).on(\"mousedown\",\".m-product-placement-item A\",function(){d.tagPartnerLinks(this)}),s(document).on(\"mousedown\",\"#device-anchor\",function(){s(this).attr(\"data-bi-bhvr\",\"NAVIGATION\")})),e.match(/\\/promotions/gi)&&s(document).on(\"mousedown\",\".retailers a,#containerRetailers A\",function(){d.tagPartnerLinks(this)}),(window.location.pathname.match(/\\/windows\\/windows\\-10\\-pcs/gi)||e.match(/\\/windows\\/lenovo\\-offers/gi))&&(s(\".retailer-batch A:not([href*='microsoft.com']),.cust_sticky_mobile A:not([href*='microsoft.com'])\").each(function(){try{d.tagPartnerLinks(this)}catch(t){d.debugLog(\"Error tagging microsoftstore links in the mousedown listener in the common tagging script. Error: \"+t)}}),s(document).on(\"mousedown\",\"#lenovo-fullbleed-panel A[href*='horizontal-acc']\",function(){s(this).attr(\"data-bi-bhvr\",\"NAVIGATION\")})),/\\/windows\\/pc-offers-/i.test(window.location.pathname)&&s(document).on(\"mousedown\",\"section.m-content-placement-item a\",function(){try{var t=s(this).closest(\"section\").find(\"h3\").text()||\"\";d.tagPartnerLinks(this),s(this).attr({\"data-bi-prod\":t})}catch(a){d.debugLog(\"Error tagging microsoftstore links in the mousedown listener in the common tagging script. Error: \"+a)}}),e.match(/\\/windows\\/get-windows-10b\\/?$/gi)&&s(document).on(\"mousedown\",\".answer:not(.hide) .m-banner:not(.hide) li:not(.hide) a.f-image:not(.hide)\",function(){d.tagPartnerLinks(this)}),(window.location.pathname.match(/windows\\/microsoft-edge-mobile/i)||window.location.pathname.match(/\\/windows\\/microsoft-edge/i))&&s(document).on(\"mousedown\",\".m-banner a[href*='microsoftedgewelcome']\",function(){s(this).attr(\"data-bi-bhvr\",\"TRIALSINITATE\")}),s(document).on(\"mousedown\",\".social-follow A\",function(){this.href.match(/facebook/i)&&!this.href.match(/sharer/i)?s(this).attr({\"data-bi-socchn\":\"facebook\",\"data-bi-name\":\"facebook\",\"data-bi-bhvr\":\"SOCIALLIKE\"}):this.href.match(/twitter/i)&&!this.href.match(/share/i)&&s(this).attr({\"data-bi-socchn\":\"twitter\",\"data-bi-name\":\"twitter\",\"data-bi-bhvr\":\"SOCIALLIKE\"})}),s(document).on(\"mousedown\",\".m-social.social-share A,.m-social.f-share A\",function(){this.href.match(/facebook/i)&&this.href.match(/sharer/i)?s(this).attr({\"data-bi-socchn\":\"facebook\",\"data-bi-name\":\"facebook\",\"data-bi-bhvr\":\"SOCIALSHARE\"}):this.href.match(/twitter/i)&&this.href.match(/share/i)&&s(this).attr({\"data-bi-socchn\":\"twitter\",\"data-bi-name\":\"twitter\",\"data-bi-bhvr\":\"SOCIALSHARE\"})}),jQuery(document).on(\"mousedown\",\".videobutton, .glyph-play, .glyph-pause, .pause-button, .play-button\",function(){try{jQuery(this).hasClass(\"glyph-play\")||jQuery(this).hasClass(\"play-button\")?jQuery(this).attr({\"data-bi-name\":\"play\"}):jQuery(this).attr({\"data-bi-name\":\"pause\"})}catch(t){pmc.debugLog(\"Error tagging the play and pause buttons inside mousedown listeners. Error: \"+t)}}),s(\".f-previous, .stealth-carousel-arrow.left-arrow\").each(function(){jQuery(this).attr(\"data-bi-bhvr\",\"NAVIGATIONBACK\"),s(this).attr(\"data-bi-name\")||d.tagGenericName(s(this))}),s(\".f-next, .stealth-carousel-arrow.right-arrow\").each(function(){jQuery(this).attr(\"data-bi-bhvr\",\"NAVIGATIONFORWARD\"),s(this).attr(\"data-bi-name\")||d.tagGenericName(s(this))}),jQuery(\".context-app a\").each(function(){try{jQuery(this).attr(\"data-bi-name\",d.etlcStr(jQuery(this).find(\"[itemprop='product name']\").text(),\"undefined\"))}catch(t){d.debugLog(\"Error tagging the app titles for data-bi-name on the apps section. Inside common tagging script. Error: \"+t)}}),s(\".horizontal-acc-button\").on(\"mousedown\",function(){try{if(jQuery(\"#ContentBlockList_11\").is(\":visible\")){var t=d.etlcStr(jQuery(this).attr(\"data-state-collapsed\"));s(this).attr({\"data-bi-type\":d.tagChooseContentType(s(this)),\"data-bi-bhvr\":awa.behavior.REDUCE,\"data-bi-name\":t})}else{var a=d.etlcStr(jQuery(this).attr(\"data-state-expanded\"));s(this).attr({\"data-bi-type\":d.tagChooseContentType(s(this)),\"data-bi-bhvr\":awa.behavior.EXPAND,\"data-bi-name\":a})}}catch(e){console.log(\"Error in global accordion tagging. Error: \"+e)}}),s(document).on(\"mousedown\",\"#mainContent [aria-expanded]\",function(){jQuery(this).attr(\"aria-expanded\").match(/false/)?jQuery(this).attr({\"data-bi-type\":d.tagChooseContentType(s(this)),\"data-bi-bhvr\":\"EXPAND\"}):jQuery(this).attr({\"data-bi-type\":d.tagChooseContentType(s(this)),\"data-bi-bhvr\":\"REDUCE\"})}),s(document).on(\"mousedown\",\".c-action-toggle\",function(){s(this).hasClass(\"expanded\")?jQuery(this).attr({\"data-bi-type\":d.tagChooseContentType(s(this)),\"data-bi-bhvr\":\"REDUCE\"}):s(this).hasClass(\"collapsed\")&&jQuery(this).attr({\"data-bi-type\":d.tagChooseContentType(s(this)),\"data-bi-bhvr\":\"EXPAND\"})}),s(document).on(\"mousedown\",\"#expand-collapse-toggle-area button[data-source='expand']\",function(){jQuery(this).attr({\"data-bi-type\":d.tagChooseContentType(s(this)),\"data-bi-bhvr\":\"EXPAND\"})}),s(document).on(\"mousedown\",\"#expand-collapse-toggle-area button[data-source='collapse']\",function(){jQuery(this).attr({\"data-bi-type\":d.tagChooseContentType(s(this)),\"data-bi-bhvr\":\"REDUCE\"})}),s(document).on(\"mousedown\",\"button[role='tab'], .m-back-to-top\",function(){s(this).attr(\"title\")?s(this).attr(\"data-bi-name\",s(this).attr(\"title\")):s(this).attr(\"aria-controls\")?s(this).attr(\"data-bi-name\",s(this).attr(\"aria-controls\")):s(this).attr(\"data-bi-name\",\"toggle\")}),s(document).on(\"mousedown\",\".c-logo[aria-selected]\",function(){s(this).attr(\"aria-selected\").match(/false/)?jQuery(this).attr({\"data-bi-type\":d.tagChooseContentType(s(this)),\"data-bi-bhvr\":\"EXPAND\"}):s(this).attr(\"aria-selected\").match(/false/)&&jQuery(this).attr({\"data-bi-type\":d.tagChooseContentType(s(this)),\"data-bi-bhvr\":\"REDUCE\"})}),window.location.pathname.match(/windows\\/windows-7-end-of-life-support-information\\/?/gi)&&(s(document).on(\"mousedown\",\"div[data-vg*='windows-mwf-why-upgrade-Banner-7-VG1'] A:not([href*='javascript'])\",function(){s(this).parent(\"li\").hasClass(\"hide\")||d.tagPartnerLinks(this)}),s(document).on(\"mousedown\",\".msw-40-bar-wrp a\",function(){try{s(this).parents(\".msw-40-bar-wrp\").attr({\"data-bi-name\":\"msw-40-bar-wrp\",\"data-module-id\":!0,\"data-bi-area\":\"body\"})}catch(t){d.debugLog(\"Error on eos container name setting for exp. error: \"+t)}}),s(document).on(\"mousedown\",\".yellowBanner246Wrap, #WF-Modal\",function(){try{var t=s(this).attr(\"class\");\"WF-Modal\"===s(this).attr(\"id\")&&(t=\"WF-Modal\"),s(this).attr({\"data-bi-name\":t,\"data-module-id\":\"true\"})}catch(a){d.debugLog(\"Exp container name error: \"+a)}}),s(document).on(\"mousedown\",\"div.wf-close\",function(t){try{if(s(this).attr(\"data-bi-name\",\"wf-close-background\"),3===t.which||2===t.button)return;var a={actionType:\"CL\"};awa.ct.capturePageAction(this,a)}catch(e){d.debugLog(\"Exp Modal close background error: \"+e)}}),s(document).on(\"mousedown\",\"span.closeYellow\",function(t){try{if(s(this).attr(\"data-bi-name\",\"closeYellow\"),3===t.which||2===t.button)return;var a={actionType:\"CL\"};awa.ct.capturePageAction(this,a)}catch(e){d.debugLog(\"Exp Yellow section close button error: \"+e)}})),s(document).on(\"mousedown\",\"#headerArea  a#mectrl_main_trigger\",function(){var t=\"signin\",a=JSON.parse(s(this).parents(\"#meControl\").attr(\"data-m\"));a.bhvr=awa.behavior.SIGNIN,a.cN=t,s(this).attr(\"data-m\",JSON.stringify(a))}),s(document).on(\"mousedown\",\"a#mectrl_body_signOut\",function(){var t=\"signout\",a=JSON.parse(s(this).parents(\"#meControl\").attr(\"data-m\"));a.bhvr=awa.behavior.SIGNOUT,a.cN=t,s(this).attr(\"data-m\",JSON.stringify(a))}),s(document).on(\"mousedown\",\"[data-js-href]\",function(t){var a,e,i=s(this).attr(\"data-js-href\");if(s(this).find(\"a[href]\").each(function(){if(e=s(this).attr(\"href\"),i==e)return a=s(this),!1}),a||(a=0<s(this).find(\"a.c-call-to-action[href]\").length?s(this).find(\"a.c-call-to-action[href]\").first():s(this).find(\"a[href]\").first()),a){d.tagGenericName(a);var n=d.getProductInfo(this);s(this).attr({\"data-bi-prod\":n.name,\"data-bi-product\":n.id,\"data-bi-sku\":n.sku}),firstAHref=a.attr(\"href\");for(var o=0;o<c.length;o++)-1!==firstAHref.indexOf(c[o])&&d.tagPartnerLinks(firstAHref);\"undefined\"===a.attr(\"data-bi-name\")?s(this).attr(\"data-bi-name\",d.eetlcStr(s(this).find(\"img\").attr(\"alt\"),\"undefined\")):s(this).attr(\"data-bi-name\",a.attr(\"data-bi-name\")),s(this).attr(\"data-bi-id\")||s(this).attr(\"data-bi-id\",a.attr(\"data-clickname\")||a.attr(\"data-bi-id\")||\"\"),a.attr(\"data-bi-prtnm\")||d.tagPartnerName(a),a.attr(\"href\").match(/microsoft.com/i)&&a.attr(\"href\").match(/(store|\\/p\\/)/i)&&a.attr({\"data-bi-bhvr\":\"PARTNERREFERRAL\",\"data-bi-prtnm\":\"ms store\"}),s(this).attr({\"data-bi-bhvr\":a.attr(\"data-bi-bhvr\"),\"data-bi-prtnm\":a.attr(\"data-bi-prtnm\"),\"data-bi-product\":a.attr(\"data-bi-product\"),\"data-bi-prod\":a.attr(\"data-bi-prod\"),\"data-bi-type\":\"image\"})}if(s(t.target).closest(\"a\").is(\"a\")||s(t.target).is(\"a\")||s(t.target).closest(\"button\").is(\"button\")||s(t.target).is(\"button\")||s(t.target).hasClass(\"addtocolcheckbox\"))t.preventDefault();else if(\"pointer\"===s(this).css(\"cursor\")){var r={targetUri:s(this).attr(\"data-js-href\"),actionType:\"CL\"};awa.ct.capturePageAction(this,r)}}),s(document).on(\"mousedown\",\"#headerArea[data-m] #static-banner a.blue-banner-cta\",function(){var t={};t.bhvr=s(this).attr(\"data-bi-bhvr\"),s(this).removeAttr(\"data-bi-bhvr\"),t.cN=d.etlcStr(s(this).attr(\"data-bi-name\"),\"undefined\"),t.cT=s(this).attr(\"data-bi-type\"),t.prtnm=s(this).attr(\"data-bi-prtnm\"),t.prtid=s(this).attr(\"data-bi-prtid\"),s(this).attr(\"data-m\",JSON.stringify(t))})}(window.wdgtagging,window.wdgtagging.jsll,window.wdgtagging.util,window.jQuery),null!=window.wdgtagging&&null!=window.wdgtagging.jsll&&function(t,a,i,n){jQuery(\"#acc-center,.result-acc\").on(\"mousedown\",function(){jQuery(this).attr(\"data-bi-name\",i.etlcStr(jQuery(this).text()))}),i.filterSel={},jQuery(\".filter-selections\").on(\"mouseenter\",function(){jQuery(this).find(\".df-selections-crosh:not([data-bi-name])\").each(function(){jQuery(this).attr({\"data-bi-name\":i.etlcStr(jQuery(this).prev(\"SPAN\").text()),\"data-bi-type\":i.tagChooseContentType(n(this)),\"data-bi-bhvr\":\"REMOVE\"}),jQuery(this).on(\"mousedown\",function(){i.filterSel[jQuery(this).attr(\"data-bi-name\")]=!0})})}),jQuery(\".df-filtercheck\").each(function(){try{jqThis=jQuery(this);var t=jqThis.attr(\"data-text\");jqThis.attr(\"data-bi-name\",i.etlcStr(t))}catch(a){i.debugLog(\"Error tagging name for Checkboxes section. Error: \"+a)}}),n(document).on(\"click\",\"input:checkbox, input:radio\",function(){try{if(!i.filterSel[n(this).attr(\"data-bi-name\")]&&i.nameNotSet(n(this))){var t=i.tagGenericName(n(this));n(this).attr({\"data-bi-name\":t})}var a=\"APPLY\";n(this).is(\":checkbox\")&&(a=n(this).is(\":checked\")?\"REMOVE\":\"APPLY\"),n(this).attr({\"data-bi-type\":\"option\",\"data-bi-bhvr\":a}),i.filterSel[n(this).attr(\"data-bi-name\")]=!1}catch(e){i.debugLog(\"Error tagging behavior for Checkboxes section. Error: \"+e)}}),i.tagInputElem=function(){n(\"input:checkbox, input:radio\").each(function(){try{if(!i.filterSel[n(this).attr(\"data-bi-name\")]&&i.nameNotSet(n(this))){var t=\"APPLY\";n(this).is(\":checkbox\")&&(t=n(this).is(\":checked\")?\"REMOVE\":\"APPLY\");var a=i.tagGenericName(n(this));n(this).attr({\"data-bi-type\":\"option\",\"data-bi-bhvr\":t,\"data-bi-name\":a})}if(!n(this).attr(\"data-bi-bhvr\")){t=\"APPLY\";n(this).is(\":checkbox\")&&(t=n(this).is(\":checked\")?\"REMOVE\":\"APPLY\"),n(this).attr({\"data-bi-type\":\"option\",\"data-bi-bhvr\":t})}i.filterSel[n(this).attr(\"data-bi-name\")]=!1}catch(e){i.debugLog(\"Error tagging behavior for Checkboxes section. Error: \"+e)}})},i.tagInputElem()}(window.wdgtagging,window.wdgtagging.jsll,window.wdgtagging.util,window.jQuery),null!=window.wdgtagging&&null!=window.wdgtagging.jsll&&function(t,a,i){var n;jQuery(\"div.accordion li\").each(function(){try{n=jQuery(this);var t=jQuery.trim(jQuery(\"h3\",n).text())||jQuery.trim(n.attr(\"aria-label\"));n.attr({\"data-bi-name\":t.toLowerCase(),\"data-bi-slot\":n.index()+1})}catch(a){i.debugLog(\"Error tagging Accordion section. Error: \"+a)}}),jQuery(\"div.accordion li\").click(function(){try{var t=jQuery(this);if(t.attr(\"class\")!=t.attr(\"data-lastClass\")&&\"expanded\"==t.attr(\"class\")){var a={behavior:awa.behavior.EXPAND,actionType:\"CL\"};awa.ct.capturePageAction(this,a)}jQuery(\"div.accordion li\").each(function(){var t=jQuery(this);t.attr(\"data-lastClass\",t.attr(\"class\"))})}catch(e){i.debugLog(\"Error tagging Accordion section. Error: \"+e)}}),jQuery(\"div.accordion div.btnClose\").click(function(){try{var t=(n=jQuery(this)).closest(\"li\");n.attr({\"data-bi-name\":t.attr(\"data-bi-name\"),\"data-bi-slot\":t.attr(\"data-bi-slot\")});var a={behavior:awa.behavior.REDUCE,actionType:\"CL\"};awa.ct.capturePageAction(this,a)}catch(e){i.debugLog(\"Error tagging Accordion section. Error: \"+e)}})}(window.wdgtagging,window.wdgtagging.jsll,window.wdgtagging.util,window.jQuery),null!=window.wdgtagging&&null!=window.wdgtagging.jsll&&(window.wdgtagging.data=window.wdgtagging.data||{},function(t,a,e,i,n){e.scn=e.scn||{},n(document).on(\"mousedown\",\".hintlist-icon a\",function(){n(this).attr(\"data-bi-bhvr\",\"STARTPROCESS\"),n(this).attr(\"data-bi-scn\",\"send-a-hint\"),n(this).attr(\"data-bi-prod\",function(){var t=n(this).closest(\"[data-sku]\").find(\"a[data-name]\").attr(\"data-name\");return e.scn.prod=t}),setTimeout(function(){i.setMetaTag(\"awa-pageType\",\"send-a-hint-submit\")},500)}),n(document).on(\"mousedown\",\"button#sendhint\",function(){n(this).attr({\"data-bi-bhvr\":\"COMPLETEPROCESS\",\"data-bi-scn\":\"send-a-hint\",\"data-bi-prod\":e.scn.prod}),setTimeout(function(){i.setMetaTag(\"awa-pageType\",\"send-a-hint-result\")},500)}),n(document).on(\"mousedown\",\"#share-a-hint-trigger button[data-js-dialog-hide]\",function(){n(this).attr({\"data-bi-name\":\"close-dialog\",\"data-bi-scn\":\"send-a-hint\",\"data-bi-prod\":e.scn.prod}),setTimeout(function(){n(\"meta[name='awa-pageType']\").remove()},500)}),n(document).on(\"mousedown\",\"button#keepshopping\",function(){n(this).attr({\"data-bi-scn\":\"send-a-hint\",\"data-bi-prod\":e.scn.prod}),setTimeout(function(){n(\"meta[name='awa-pageType']\").remove()},500)}),n(document).on(\"click\",\"#share-a-hint-trigger div[role='presentation'].x-hidden-focus\",function(){n(\"meta[name='awa-pageType']\").remove()})}(window.wdgtagging,window.wdgtagging.jsll,window.wdgtagging.data,window.wdgtagging.util,window.jQuery)),null!=window.wdgtagging&&null!=window.wdgtagging.jsll&&function(t,a,e,i){var n,o,r,d;jQuery(\"#view-all\").find(\".context-accessory, .context-device\").each(function(){try{i(this).on(\"mouseenter\",function(){n=jQuery(this),(o=n.find(\"a[href].c-call-to-action\")).each(function(){try{if(0<jQuery(this).attr(\"href\").length&&!jQuery(this).attr(\"href\").match(/javascript/i)&&!jQuery(this).attr(\"href\").match(/microsoft.com/)){try{e.tagGenericContentType(jQuery(this)),jQuery(this).attr(\"data-bi-prtnm\")||(\"microsoftstore\"===(r=(r=jQuery(this).attr(\"href\").split(\".\")[1])?e.etlcStr(r,\"undefined\"):\"undefined\")&&(r=\"ms store\"),jQuery(this).attr(\"data-bi-prtnm\",r))}catch(t){e.debugLog(\"Error assigning retailer to data-bi-prtnm on a list product. Inside view all script. Error: \"+t)}jQuery(this).attr({\"data-bi-bhvr\":\"PARTNERREFERRAL\",\"data-bi-type\":e.tagChooseContentType(i(this))})}else href.match(/microsoft\\.com/i)&&href.match(/\\/store/i)&&o.attr({\"data-bi-type\":e.tagChooseContentType(i(this)),\"data-bi-bhvr\":\"PARTNERREFERRAL\",\"data-bi-prtnm\":\"ms store\"});try{\"undefined\"===(d=(d=jQuery(this).closest(\"section\").find(\"[itemprop*='product name']\").text())?e.etlcStr(d,\"undefined\"):\"undefined\")&&(jQuery(this).attr(\"href\").match(/microsoftstore/i)||jQuery(this).attr(\"href\").match(/\\/cat\\//i)||(d=(d=jQuery(this).closest(\"section\").find(\":header:first\").text())?e.etlcStr(d,\"undefined\"):\"undefined\")),\"undefined\"!==d&&jQuery(this).attr(\"data-bi-prod\",d)}catch(t){e.debugLog(\"Error assigning the product name on the view all page. Inside view all script. Error: \"+t)}}catch(t){e.debugLog(\"Error assigning custom tagging in the product listing on ctas that open the lightbox. Inside view all script. Error: \"+t)}})})}catch(t){e.debugLog(\"Error in device listing code. Inside view all script. Error: \"+t)}})}(window.wdgtagging,window.wdgtagging.jsll,window.wdgtagging.util,window.jQuery),null!=window.wdgtagging&&null!=window.wdgtagging.jsll&&function(t,a,d,s){var e;wlp=window.location.pathname,jQuery(\"div.ui-slider\").each(function(){try{var t=(e=jQuery(this)).closest(\"section\").attr(\"id\")||\"drag_slider\";e.attr({\"data-bi-name\":t.toLowerCase()})}catch(a){d.debugLog(\"Error tagging Slider section. Error: \"+a)}}),jQuery(\"div.ui-slider\").on(\"slidestop\",function(){var t={actionType:\"CL\",behavior:awa.behavior.OTHER};awa.ct.capturePageAction(this,t)}),s(document).on(\"mousedown\",\".close-button\",function(){d.nameNotSet(s(this))&&d.tagGenericName(s(this))}),wlp.match(/\\/(en-us|de-de|ru-ru|fr-fr|zh-cn)\\/windows\\//gi)&&(s(document).on(\"mousedown\",\"button[data-retailer].retailer-link, a[data-retailer].retailer-link\",function(t){if(s(t.target).closest(\"a\").is(\"a\")){var a=s(this).find(\"button[data-retailer].retailer-link\");d.tagGenericName(a),s(this).attr(\"data-bi-name\",a.attr(\"data-bi-name\"))}var e=s(this),i=e.attr(\"data-retailer\"),n=s(this).closest(\"#popup-container[data-product-name]\"),o=n.attr(\"data-product-name\"),r=n.attr(\"data-product-spec\");e.attr(\"data-bi-bhvr\")&&e.attr(\"data-bi-prtnm\")||e.attr({\"data-bi-bhvr\":\"PARTNERREFERRAL\",\"data-bi-prtnm\":i}),e.attr({\"data-bi-prod\":o,\"data-bi-sku\":r})}),s(document).on(\"mousedown\",\".popup-container #content_wrap_toggle\",function(){s(this).hasClass(\"collapsed\")?s(this).attr(\"data-bi-bhvr\",\"REDUCE\"):s(this).attr(\"data-bi-bhvr\",\"EXPAND\"),d.tagGenericName(s(this))}),s(document).on(\"mousedown\",\"a.hatch-button\",function(){var t=s(this),a=t.attr(\"data-product\"),e=t.attr(\"data-sku\"),i=t.attr(\"data-product-name\");t.attr({\"data-bi-bhvr\":\"INTENTTOBUY\",\"data-bi-prtnm\":\"gethatch\",\"data-bi-prod\":i,\"data-bi-product\":a,\"data-bi-sku\":e})}),s(document).on(\"mousedown\",\".popup-container .variantsDataRow[data-product]\",function(t){var a=s(this),e=a.attr(\"aria-label\"),i=a.attr(\"data-product\");if(a.attr({\"data-bi-name\":e,\"data-bi-product\":i,\"data-module-id\":\"selection\"}),!s(t.target).is(\"a\")&&!s(t.target).is(\"button\")){var n={actionType:\"CL\",behavior:awa.behavior.APPLY};awa.ct.capturePageAction(this,n)}}),s(document).on(\"mousedown\",\".popup-container .variantsDataRow .variants-price-select > a\",function(){var t=s(this),a=t.parents(\".variantsDataRow\").attr(\"data-product\");t.attr({\"data-bi-bhvr\":\"APPLY\",\"data-bi-product\":a})}),s(document).on(\"mouseenter\",\"#popup-container\",function(){s(this).find(\"input:not([data-bi-name])\").length&&d.tagInputElem(),s(this).attr(\"data-bi-name\")?s(this).attr(\"data-bi-name\")&&!s(this).attr(\"data-module-id\")&&s(this).attr(\"data-module-id\",\"lightbox\"):s(this).attr({\"data-bi-name\":s(this).attr(\"id\"),\"data-module-id\":\"lightbox\"})}),s(document).on(\"mousedown\",\".popup-container .wf-options__wrapper .wf-option\",function(){var t=\"APPLY\";if(s(this).hasClass(\"wf-option--active\")&&(t=\"REMOVE\"),s(this).attr(\"data-bi-bhvr\",t),d.nameNotSet(s(this))&&s(this).attr(\"data-bi-name\",d.etlcStr(s(this).attr(\"data-config\"),\"undefined\")),d.nameNotSet(s(this))&&d.tagGenericName(s(this)),!s(this).is(\"a\")){var a={actionType:\"CL\"};awa.ct.capturePageAction(this,a)}}),s(document).on(\"mouseover\",\".compare-checkbox, .divfilter_result_container_new .view-all-devices, .filterBy .c-checkbox\",function(){var t=s(this).find(\"input:checkbox\");if(t.is(\":checked\"))t.attr(\"data-bi-bhvr\",\"REMOVE\");else{t.attr(\"data-bi-bhvr\",\"APPLY\");var a=d.etlcStr(s.trim(t.next(\"span\").text()))||t.attr(\"value\")||\"\";t.attr({\"data-bi-bhvr\":\"APPLY\",\"data-bi-name\":a})}}),s(document).on(\"mousedown\",\"A#clear-selections, a.closeCompareitem\",function(){s(\".compare-checkbox input:checkbox\").each(function(){s(this).attr(\"data-bi-bhvr\",\"APPLY\")})})),window.location.pathname.match(/windows\\/remote-resource-center\\/articles/gi)&&s(document).on(\"mousedown\",\".filteringSection button[aria-checked].c-selected-buttons\",function(){try{var t=s(this).attr(\"aria-checked\");t&&\"true\"==t?s(this).attr(\"data-bi-bhvr\",\"REMOVE\"):t&&\"false\"==t&&s(this).attr(\"data-bi-bhvr\",\"APPLY\")}catch(a){d.debugLog(\"Error while tagging filter options. Error: \"+a)}}),s(document).on(\"mousedown\",\"fieldset[data-category]:not('[data-module-id]')\",function(){var t=s(this).attr(\"data-category\")||\"\";s(this).attr({\"data-bi-name\":t,\"data-module-id\":\"set\"})})}(window.wdgtagging,window.wdgtagging.jsll,window.wdgtagging.util,window.jQuery);");