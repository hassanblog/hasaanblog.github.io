"use strict";var titleTime,OriginTitle=document.title;document.addEventListener("visibilitychange",function(){document.hidden?($('[rel="icon"]').attr("href","/img/favicon.ico"),document.title="(つェ⊂) 感觉你怪怪的~~",clearTimeout(titleTime)):($('[rel="icon"]').attr("href","/img/favicon.ico"),document.title="(*´∇｀*) 怪可爱的~~  "+OriginTitle,titleTime=setTimeout(function(){document.title=OriginTitle},2e3))});var getTimeState=function(){var t=(new Date).getHours(),e="";return t<=4||22<t?e="Good 🛌<br>Night<br>":4<t&&t<=10?e="Good 🌮<br>Morning<br>":10<t&&t<=12?e="Good 🍱<br>Noon<br>":12<t&&t<=17?e="Good ☕<br>Afternoon<br>":17<t&&t<=22&&(e="Good 🍇<br>Evening<br>"),e};function sayhi(){document.querySelector("#author-info__sayhi")&&(document.getElementById("author-info__sayhi").innerHTML=getTimeState()+"这里是 👇")}var navFn={switchDarkMode:function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200)}};