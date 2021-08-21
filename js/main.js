"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}document.addEventListener("DOMContentLoaded",function(){function m(e){0<arguments.length&&void 0!==e&&e&&(o=n&&n.offsetWidth,a=i&&i.offsetWidth,r=c&&c.offsetWidth);var t=document.getElementById("nav");(e=window.innerWidth<768||o+a+r>t.offsetWidth-120)?t.classList.add("hide-menu"):t.classList.remove("hide-menu")}function h(){var e,t,n,a,c,o,r,l,s,d,i,u,f,m=GLOBAL_CONFIG.highlight;function h(e,t,n){var o,i=document.createDocumentFragment();c&&((o=document.createElement("div")).className="highlight-tools ".concat(d),o.innerHTML=l+e+s,o.addEventListener("click",u),i.appendChild(o)),a&&t.offsetHeight>a+30&&((o=document.createElement("div")).className="code-expand-btn",o.innerHTML="👇",o.addEventListener("click",f),i.appendChild(o)),"hl"===n?t.insertBefore(i,t.firstChild):t.parentNode.insertBefore(i,t)}m&&(e=m.highlightCopy,t=m.highlightLang,n=GLOBAL_CONFIG_SITE.isHighlightShrink,a=m.highlightHeightLimit,c=e||t||void 0!==n,o="highlighjs"===m.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),(c||a)&&o.length&&(r="prismjs"===m.plugin,d=!(s=l="")===n?"closed":"",void 0!==n&&(l='<i class="fas fa-angle-down expand '.concat(d,'"></i>')),e&&(s='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),i=function(e){var t=e.parentNode;t.classList.add("copy-true");var n=window.getSelection(),o=document.createRange();r?o.selectNodeContents(t.querySelectorAll("pre code")[0]):o.selectNodeContents(t.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);var i;n.toString();e=e.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((i=e.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,i.style.opacity=1,setTimeout(function(){i.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,n.removeAllRanges(),t.classList.remove("copy-true")},u=function(e){var t,n=e.target.classList;n.contains("expand")?(e=_toConsumableArray((t=this).parentNode.children).slice(1),t.firstChild.classList.toggle("closed"),btf.isHidden(e[e.length-1])?e.forEach(function(e){e.style.display="block"}):e.forEach(function(e){e.style.display="none"})):n.contains("copy-button")&&i(this)},f=function(){this.classList.toggle("expand-done")},t?r?o.forEach(function(e){var t=e.getAttribute("data-language")?e.getAttribute("data-language"):"Code",t='<div class="code-lang">'.concat(t,"</div>");btf.wrap(e,"figure",{class:"highlight"}),h(t,e)}):o.forEach(function(e){var t=e.getAttribute("class").split(" ")[1];"plain"!==t&&void 0!==t||(t="Code"),h('<div class="code-lang">'.concat(t,"</div>"),e,"hl")}):r?o.forEach(function(e){btf.wrap(e,"figure",{class:"highlight"}),h("",e)}):o.forEach(function(e){h("",e,"hl")})))}var n=document.getElementById("site-name"),o=n&&n.offsetWidth,i=document.querySelector("#menus .menus_items"),a=i&&i.offsetWidth,c=document.querySelector("#search-button"),r=c&&c.offsetWidth;function l(e){function t(e){e.each(function(e,t){var n=$(t),o=n.attr("data-lazy-src")||n.attr("src"),t=n.attr("alt")||"";n.wrap('<a href="'.concat(o,'" data-fancybox="group" data-caption="').concat(t,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})}void 0===$.fancybox?($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.fancybox.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.fancybox.js),function(){t($(e))})):t($(e))}function g(){var n="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group):not(.flink-item-icon) > img, #article-container > img"):[],o=0<n.length,i=document.querySelectorAll("#article-container .justified-gallery"),a=0<i.length;(a||o)&&btf.isJqueryLoad(function(){var e,t;a&&(e=i,t=$(e),(e=t.find("img")).unwrap(),e.length&&e.each(function(e,t){$(t).attr("data-lazy-src")&&$(t).attr("src",$(t).attr("data-lazy-src")),$(t).wrap("<div></div>")}),s?btf.initJustifiedGallery(t):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js),function(){btf.initJustifiedGallery(t)}),s=!0)),o&&l(n)})}function y(){var i,a,c,r,l,s=document.getElementById("rightside"),e=window.innerHeight+56;document.body.scrollHeight<=e?s.style.cssText="opacity: 1; transform: translateX(-38px)":(a=!(i=0),c=document.getElementById("page-header"),r="function"==typeof chatBtnHide,l="function"==typeof chatBtnShow,window.scrollCollect=function(){return btf.throttle(function(e){var t,n,o=window.scrollY||document.documentElement.scrollTop,n=(n=i<(t=o),i=t,n);56<o?(n?(c.classList.contains("nav-visible")&&c.classList.remove("nav-visible"),l&&!0===a&&(chatBtnHide(),a=!1)):(c.classList.contains("nav-visible")||c.classList.add("nav-visible"),r&&!1===a&&(chatBtnShow(),a=!0)),c.classList.add("nav-fixed")):(0===o&&c.classList.remove("nav-fixed","nav-visible"),s.style.cssText="opacity: ''; transform: ''")},200)()},window.addEventListener("scroll",scrollCollect))}function p(){var e=document.getElementById("card-toc"),r=e.getElementsByClassName("toc-content")[0],l=r.querySelectorAll(".toc-link"),i=document.getElementById("article-container");window.tocScrollFn=function(){return btf.throttle(function(){var e=window.scrollY||document.documentElement.scrollTop;t(e),a(e)},100)()},window.addEventListener("scroll",tocScrollFn);var t=function(e){var t=i.clientHeight,n=document.documentElement.clientHeight,o=(e-i.offsetTop)/(n<t?t-n:document.documentElement.scrollHeight-n),n=Math.round(100*o),n=100<n?100:n<=0?0:n;r.setAttribute("progress-percentage",n)},s=GLOBAL_CONFIG.isanchor,n=function(){e.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"},o=function(){e.style.animation="toc-close .2s",setTimeout(function(){e.style.cssText="opacity:''; animation: ''; right: ''"},100)};document.getElementById("mobile-toc-button").addEventListener("click",function(){("0"===window.getComputedStyle(e).getPropertyValue("opacity")?n:o)()}),r.addEventListener("click",function(e){e.preventDefault();e=e.target.classList.contains("toc-link")?e.target:e.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&o()});var d=i.querySelectorAll("h1,h2,h3,h4,h5,h6"),u="",a=function(n){if(0===l.length||0===n)return!1;var e,t,o="",i="";if(d.forEach(function(e,t){n>btf.getEleTop(e)-80&&(o="#"+encodeURI(e.getAttribute("id")),i=t)}),u!==i){if(s&&(e=o,window.history.replaceState&&e!==window.location.hash&&(e=e||location.pathname,t=GLOBAL_CONFIG_SITE.title,window.history.replaceState({url:location.href,title:t},t,e))),""===o)return r.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")}),void(u=i);u=i,r.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")});var a=l[i];a.classList.add("active"),setTimeout(function(){var e,t;t=(e=a).getBoundingClientRect().top,e=r.scrollTop,t>document.documentElement.clientHeight-100&&(r.scrollTop=e+150),t<100&&(r.scrollTop=e-150)},0);for(var c=a.parentNode;!c.matches(".toc");c=c.parentNode)c.matches("li")&&c.classList.add("active")}}}var s=!1,t=function(){var t=document.body;t.classList.add("read-mode");var n=document.createElement("button");n.type="button",n.className="fas fa-sign-out-alt exit-readmode",t.appendChild(n),n.addEventListener("click",function e(){t.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",e)})},d=function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200)},u=function(){document.getElementById("rightside-config-hide").classList.toggle("show")},f=function(){btf.scrollToDest(0,500)},b=function(){var e,t=null===(e=document)||void 0===e||null===(t=e.documentElement)||void 0===t?void 0:t.classList;t.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),t.toggle("hide-aside")},v=function(e){var t=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size")),n="";if(e){if(20<=t)return;n=t+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||m(!0)}else{if(t<=10)return;n=t-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&m(!0)}saveToLocal.set("global-font-size",n,2)};document.getElementById("rightside").addEventListener("click",function(e){switch(e.target.id||e.target.parentNode.id){case"go-up":f();break;case"rightside_config":u();break;case"readmode":t();break;case"darkmode":d();break;case"hide-aside-btn":b();break;case"font-plus":v(!0);break;case"font-minus":v()}});function L(e){e.forEach(function(e){var t=e,e=t.getAttribute("datetime");t.innerText=btf.diffDate(e,!0),t.style.display="inline"})}var E,A=function(){document.querySelectorAll("#article-container .tab > button").forEach(function(e){e.addEventListener("click",function(e){var t,n,o,i=this.parentNode;i.classList.contains("active")||(o=i.parentNode.nextElementSibling,(t=btf.siblings(i,".active")[0])&&t.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(o.children).forEach(function(e){e.id===n?e.classList.add("active"):e.classList.remove("active")}),0<(o=o.querySelectorAll("#".concat(n," .justified-gallery"))).length&&btf.initJustifiedGallery(o))})})},S=function(){document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(e){e.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})};window.refreshFn=function(){var e,t,n,o,i,a,c,r,l,s,d,u;function f(){l.style.overflow="",l.style.paddingRight="",btf.fadeOut(r,.5),c.classList.remove("open")}m(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&p(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(o=GLOBAL_CONFIG.noticeOutdate,(i=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=o.limitDay&&((n=document.createElement("div")).className="post-outdate-notice",n.textContent=o.messagePrev+" "+i+" "+o.messageNext,i=document.getElementById("article-container"),"top"===o.position?i.insertBefore(n,i.firstChild):i.appendChild(n))),GLOBAL_CONFIG.relativeDate.post&&L(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&L(document.querySelectorAll("#recent-posts time")),!GLOBAL_CONFIG.runtime||(n=document.getElementById("runtimeshow"))&&(t=n.getAttribute("data-publishDate"),n.innerText=btf.diffDate(t)+" "+GLOBAL_CONFIG.runtime),(t=document.getElementById("last-push-date"))&&(e=t.getAttribute("data-lastPushDate"),t.innerText=btf.diffDate(e,!0)),(e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();this.classList.toggle("expand");e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})})),a=document.getElementById("toggle-menu"),c=document.getElementById("sidebar-menus"),r=document.getElementById("menu-mask"),l=document.body,a.addEventListener("click",function(){btf.sidebarPaddingR(),l.style.overflow="hidden",btf.fadeIn(r,.5),c.classList.add("open")}),r.addEventListener("click",function(e){c.classList.contains("open")&&f()}),window.addEventListener("resize",function(e){btf.isHidden(a)&&c.classList.contains("open")&&f()}),!GLOBAL_CONFIG_SITE.isHome||(u=document.getElementById("scroll-down"))&&u.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),h(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(e){var t,n=e.parentNode;n.parentNode.classList.contains("justified-gallery")||((t=document.createElement("div")).className="img-alt is-center",t.textContent=e.getAttribute("alt"),n.insertBefore(t,e.nextSibling))}),g(),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(s=mediumZoom(document.querySelectorAll("#article-container :not(a):not(.flink-item-icon) > img"))).on("open",function(e){var t="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";s.update({background:t})}),y(),(u=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&u.forEach(function(e){btf.wrap(e,"div",{class:"table-wrap"})}),(u=document.querySelectorAll("#article-container .hide-button")).length&&u.forEach(function(e){e.addEventListener("click",function(e){var t=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<t.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(t.querySelectorAll(".justified-gallery"))})}),A(),S(),d=!1,(u=document.querySelector("#comment-switch > .switch-btn"))&&u.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(e){btf.isHidden(e)?e.style.cssText="display: block;animation: tabshow .5s":e.style.cssText="display: none;animation: ''"}),d||"function"!=typeof loadOtherComment||(d=!0,loadOtherComment())})},refreshFn(),window.addEventListener("resize",m),window.addEventListener("orientationchange",function(){setTimeout(m(!0),100)}),document.querySelectorAll("#sidebar-menus .expand").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("hide");var e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})}),window.addEventListener("touchmove",function(e){document.querySelectorAll("#nav .menus_item_child").forEach(function(e){btf.isHidden(e)||(e.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(E=GLOBAL_CONFIG.copyright,document.body.oncopy=function(e){e.preventDefault();var t=window.getSelection(0).toString(),t=t.length>E.limitCount?t+"\n\n\n"+E.languages.author+"\n"+E.languages.link+window.location.href+"\n"+E.languages.source+"\n"+E.languages.info:t;return(e.clipboardData?e:window).clipboardData.setData("text",t)})});