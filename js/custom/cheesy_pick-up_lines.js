"use strict";function cheesy_pick_up_lines(){for(var n="",e=0;e<3;e++)fetch("https://api.vvhan.com/api/love").then(function(e){return e.text()}).then(function(e){n+="<li>"+e+"</li>",document.querySelector("#cheesy_pick-up_lines-container").innerHTML=n}).catch(function(e){console.log(e)})}