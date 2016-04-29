Object.observe||function(N,A,F,C){var E,J,B=["add","update","delete","reconfigure","setPrototype","preventExtensions"],P=A.isArray||function(a){return function(b){return"[object Array]"===a.call(b)}}(N.prototype.toString),R=A.prototype.indexOf?A.indexOf||function(b,c,a){return A.prototype.indexOf.call(b,c,a)}:function(c,a,d){for(var b=d||0;b<c.length;b++){if(c[b]===a){return b}}return -1},M=F.Map!==C&&Map.prototype.forEach?function(){return new Map}:function(){var b=[],a=[];return{size:0,has:function(c){return R(b,c)>-1},get:function(c){return a[R(b,c)]},set:function(e,c){var d=R(b,e);-1===d?(b.push(e),a.push(c),this.size++):a[d]=c},"delete":function(d){var c=R(b,d);c>-1&&(b.splice(c,1),a.splice(c,1),this.size--)},forEach:function(d){for(var c=0;c<b.length;c++){d.call(arguments[1],a[c],b[c],this)}}}},z=N.getOwnPropertyNames?function(){var a=N.getOwnPropertyNames;try{arguments.callee}catch(c){var b=(a(R).join(" ")+" ").replace(/prototype |length |name /g,"").slice(0,-1).split(" ");b.length&&(a=function(e){var g=N.getOwnPropertyNames(e);if("function"==typeof e){for(var f,d=0;d<b.length;){(f=R(g,b[d++]))>-1&&g.splice(f,1)}}return g})}return a}():function(a){var d,b,c=[];if("hasOwnProperty" in a){for(d in a){a.hasOwnProperty(d)&&c.push(d)}}else{b=N.hasOwnProperty;for(d in a){b.call(a,d)&&c.push(d)}}return P(a)&&c.push("length"),c},D=N.getPrototypeOf,H=N.defineProperties&&N.getOwnPropertyDescriptor,K=F.requestAnimationFrame||F.webkitRequestAnimationFrame||function(){var b=+new Date,a=b;return function(c){return setTimeout(function(){c((a=+new Date)-b)},17)}}(),x=function(c,a,d){var b=E.get(c);b?(O(b,c),q(c,b,a,d)):(b=Q(c),q(c,b,a,d),1===E.size&&K(k))},Q=function(b,g){var e,a=z(b),d=[],f=0,g={handlers:M(),frozen:N.isFrozen?N.isFrozen(b):!1,extensible:N.isExtensible?N.isExtensible(b):!0,proto:D&&D(b),properties:a,values:d,notifier:I(b,g)};if(H){for(e=g.descriptors=[];f<a.length;){e[f]=H(b,a[f]),d[f]=b[a[f++]]}}else{for(;f<a.length;){d[f]=b[a[f++]]}}return E.set(b,g),g},O=function(){var a=H?function(j,p,g,d,f){var h=p.properties[g],u=j[h],l=p.values[g],m=p.descriptors[g];"value" in f&&(l===u?0===l&&1/l!==1/u:l===l||u===u)&&(G(j,p,{name:h,type:"update",object:j,oldValue:l},d),p.values[g]=u),!m.configurable||f.configurable&&f.writable===m.writable&&f.enumerable===m.enumerable&&f.get===m.get&&f.set===m.set||(G(j,p,{name:h,type:"reconfigure",object:j,oldValue:l},d),p.descriptors[g]=f)}:function(h,d,l,g){var j=d.properties[l],c=h[j],f=d.values[l];(f===c?0===f&&1/f!==1/c:f===f||c===c)&&(G(h,d,{name:j,type:"update",object:h,oldValue:f},g),d.values[l]=c)},b=H?function(h,m,g,j,d){for(var f,l=m.length;g&&l--;){null!==m[l]&&(f=H(h,m[l]),g--,f?a(h,j,l,d,f):(G(h,j,{name:m[l],type:"delete",object:h,oldValue:j.values[l]},d),j.properties.splice(l,1),j.values.splice(l,1),j.descriptors.splice(l,1)))}}:function(g,d,j,f,h){for(var c=d.length;j&&c--;){null!==d[c]&&(G(g,f,{name:d[c],type:"delete",object:g,oldValue:f.values[c]},h),f.properties.splice(c,1),f.values.splice(c,1),j--)}};return function(e,l,n){if(e.handlers.size&&!e.frozen){var Y,T,u,p,X,V,S,U,t=e.values,m=e.descriptors,W=0;if(e.extensible){if(Y=e.properties.slice(),T=Y.length,u=z(l),m){for(;W<u.length;){X=u[W++],p=R(Y,X),U=H(l,X),-1===p?(G(l,e,{name:X,type:"add",object:l},n),e.properties.push(X),t.push(l[X]),m.push(U)):(Y[p]=null,T--,a(l,e,p,n,U))}b(l,Y,T,e,n),N.isExtensible(l)||(e.extensible=!1,G(l,e,{type:"preventExtensions",object:l},n),e.frozen=N.isFrozen(l))}else{for(;W<u.length;){X=u[W++],p=R(Y,X),V=l[X],-1===p?(G(l,e,{name:X,type:"add",object:l},n),e.properties.push(X),t.push(V)):(Y[p]=null,T--,a(l,e,p,n))}b(l,Y,T,e,n)}}else{if(!e.frozen){for(;W<Y.length;W++){X=Y[W],a(l,e,W,n,H(l,X))}N.isFrozen(l)&&(e.frozen=!0)}}D&&(S=D(l),S!==e.proto&&(G(l,e,{type:"setPrototype",name:"__proto__",object:l,oldValue:e.proto}),e.proto=S))}}}(),k=function(){E.size&&(E.forEach(O),J.forEach(L),K(k))},L=function(b,a){var c=b.changeRecords;c.length&&(b.changeRecords=[],a(c))},I=function(b,a){return arguments.length<2&&(a=E.get(b)),a&&a.notifier||{notify:function(d){d.type;var f=E.get(b);if(f){var e,c={object:b};for(e in d){"object"!==e&&(c[e]=d[e])}G(b,f,c)}},performChange:function(g,m){if("string"!=typeof g){throw new TypeError("Invalid non-string changeType")}if("function"!=typeof m){throw new TypeError("Cannot perform non-function")}var e,h,l=E.get(b),d=arguments[2],j=d===C?m():m.call(d);if(l&&O(l,b,g),l&&j&&"object"==typeof j){h={object:b,type:g};for(e in j){"object"!==e&&"type"!==e&&(h[e]=j[e])}G(b,l,h)}}}},q=function(c,a,f,b){var d=J.get(f);d||J.set(f,d={observed:M(),changeRecords:[]}),d.observed.set(c,{acceptList:b.slice(),data:a}),a.handlers.set(f,d)},G=function(c,a,d,b){a.handlers.forEach(function(e){var f=e.observed.get(c).acceptList;("string"!=typeof b||-1===R(f,b))&&R(f,d.type)>-1&&e.changeRecords.push(d)})};E=M(),J=M(),N.observe=function(a,c,b){if(!a||"object"!=typeof a&&"function"!=typeof a){throw new TypeError("Object.observe cannot observe non-object")}if("function"!=typeof c){throw new TypeError("Object.observe cannot deliver to non-function")}if(N.isFrozen&&N.isFrozen(c)){throw new TypeError("Object.observe cannot deliver to a frozen function object")}if(b===C){b=B}else{if(!b||"object"!=typeof b){throw new TypeError("Third argument to Object.observe must be an array of strings.")}}return x(a,c,b),a},N.unobserve=function(c,a){if(null===c||"object"!=typeof c&&"function"!=typeof c){throw new TypeError("Object.unobserve cannot unobserve non-object")}if("function"!=typeof a){throw new TypeError("Object.unobserve cannot deliver to non-function")}var d,b=J.get(a);return b&&(d=b.observed.get(c))&&(b.observed.forEach(function(g,f){O(g.data,f)}),K(function(){L(b,a)}),1===b.observed.size&&b.observed.has(c)?J["delete"](a):b.observed["delete"](c),1===d.data.handlers.size?E["delete"](c):d.data.handlers["delete"](a)),c},N.getNotifier=function(a){if(null===a||"object"!=typeof a&&"function"!=typeof a){throw new TypeError("Object.getNotifier cannot getNotifier non-object")}return N.isFrozen&&N.isFrozen(a)?null:I(a)},N.deliverChangeRecords=function(b){if("function"!=typeof b){throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function")}var a=J.get(b);a&&(a.observed.forEach(function(d,c){O(d.data,c)}),L(a,b))}}(Object,Array,this);window.BarakaLyrics=window.BarakaLyrics||{};window.BarakaRadiant=window.BarakaRadiant||{};if(typeof BarakaRadiant=="undefined"){var BarakaRadiant={}}BarakaRadiant={hasLyrics:false,LyricsIn:false,GoogleColor:null,load:function(){if(document.querySelector("#baraka-lyrics")===null){var d=document.createElement("link")}d.rel="import";d.href="https://radiant-player-mac/js/barakalyrics.html";document.head.appendChild(d);console.clear();var e=BarakaRadiant.create('<style id="baraka-lyrics">.baraka-icon{margin-left:-20px!important;margin-right:45px!important;position:relative;top:1px}.lyric-fade:before{background-image:-webkit-linear-gradient(bottom,rgba(255,255,255,0) 0,#fff 100%);background-image:linear-gradient(bottom,rgba(255,255,255,0) 0,#fff 100%);left:0}.lyric-fade:before{content:"";width:100%;height:20px;border-top-left-radius:4px;border-top-right-radius:4px;position:absolute;top:0;z-index:100}@media(max-width:1024px){paper-drawer-panel:not([narrow]) #lyric-overlay{width:664px}}#lyric-overlay{top:auto;left:auto;right:32px;margin-right:0;bottom:110px;margin-bottom:0;width:280px;height:calc(100vh - 85%);border-radius:4px;z-index:1!important;transition:width .3s ease}#lyric-overlay::-webkit-scrollbar{display:none}#lyric-overlay:after{content:"";position:absolute;width:0;height:0;box-sizing:border-box;right:16px;border-style:solid;border-width:12px 12px 0 12px;border-color:#fff rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);z-index:-1;transform-origin:0 0;-webkit-transform-origin:0 0;box-shadow:-12px 12px 15px 0 rgba(0,0,0,.1)}#avail-lyr li iron-icon svg{display:inline-block!important;max-height:100vh;height:21px!important;position:relative;top:-3px}#avail-lyr li#azlyrics iron-icon svg{margin-bottom:-11px;height:40px!important;left:-125px}#avail-lyr li#genius iron-icon svg{margin-bottom:-14px;height:40px!important;left:-126px}#avail-lyr li#metrolyrics iron-icon svg{margin-bottom:-6px;height:20px!important;left:-134px}#avail-lyr li#lyricwiki iron-icon svg{margin-bottom:-16px;height:40px!important;left:-125px}#avail-lyr li#musixmatch iron-icon svg{margin-bottom:-10px;height:39px!important;left:-129px}#song-lyrics{width:650px;border-radius:4px;z-index:1!important;transition:width .3s ease;position:initial!important}#song-lyrics>#scrollable{padding:8px 24px 8px}#song-lyrics::-webkit-scrollbar,#song-lyrics>#scrollable::-webkit-scrollbar{display:none}.bl-close{min-width:35px;border-radius:100%;background-color:#FFF;line-height:9px;border:1px solid #c3c3c3}.baraka-icon.opened{color:#000}.DarkCyan baraka-lyrics#lyric-overlay{background-color:rgba(3,156,172,0.9);border:1px solid #007a87}.DarkCyan .paper-dialog-scrollable-0.can-scroll:not(.scrolled-to-bottom):not(:last-child):after{background-color:rgba(3,156,172,0.9)}.DarkCyan #lyric-overlay:after{box-shadow:none;border-color:#1ba5b4 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.DarkCyan .lyric-header.baraka-lyrics{color:#fff;border-bottom:1px solid #007a87}.DarkCyan .lyric-fade:before{background-image:-webkit-linear-gradient(bottom,rgba(3,156,172,0) 0,#039cac 100%);background-image:linear-gradient(bottom,rgba(3,156,172,0) 0,#039cac 100%)}.DarkCyan #avail-lyr.baraka-lyrics li.baraka-lyrics:hover{background-color:#007a87}.DarkCyan #avail-lyr.baraka-lyrics li.baraka-lyrics:before{border-color:#007a87}.DarkCyan #avail-lyr.baraka-lyrics li.baraka-lyrics:after{border-color:#0cacbd}.DarkCyan #avail-lyr li#azlyrics iron-icon svg path{fill:#fff}.DarkCyan #avail-lyr li#metrolyrics iron-icon svg path{fill:#fff}.DarkCyan #avail-lyr li#metrolyrics iron-icon svg path.metrolyrics_s{fill:#01434a}.DarkCyan #avail-lyr li#musixmatch iron-icon svg path{fill:#fff}.DarkCyan #avail-lyr li#lyricwiki iron-icon svg path{fill:#fff}.DarkCyan baraka-lyrics-song#service{border:1px solid #007a87;color:#fff;background-color:rgba(3,156,172,0.9)}.DarkCyan baraka-lyrics-song#service:before{background-image:-webkit-linear-gradient(bottom,rgba(3,156,172,0) 0,#039cac 100%);background-image:linear-gradient(bottom,rgba(3,156,172,0) 0,#039cac 100%)}.DarkCyan baraka-lyrics-song#service:after{background-image:-webkit-linear-gradient(top,rgba(3,156,172,0) 0,#039cac 100%);background-image:linear-gradient(top,rgba(3,156,172,0) 0,#039cac 100%)}.DarkCyan #inputlyrics{color:#fff}.DarkCyan .bl-close{background-color:#039cac;border-color:#007a87}.DarkCyan .buttons .bl-close{color:#fff}.DarkCyan .buttons .bl-close paper-ripple #background,.DarkCyan .buttons .bl-close paper-ripple #waves .wave-container .wave{background-color:#007a87!important}.Black baraka-lyrics#lyric-overlay{background-color:rgba(34,35,38,0.9);border:1px solid #000}.Black .paper-dialog-scrollable-0.can-scroll:not(.scrolled-to-bottom):not(:last-child):after{background-color:rgba(34,35,38,0.9)}.Black #lyric-overlay:after{box-shadow:none;border-color:#37383b rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.Black .lyric-header.baraka-lyrics{color:#fff;border-bottom:1px solid #000}.Black .lyric-fade:before{background-image:-webkit-linear-gradient(bottom,rgba(34,35,38,0) 0,#222326 100%);background-image:linear-gradient(bottom,rgba(34,35,38,0) 0,#222326 100%)}.Black #avail-lyr.baraka-lyrics li.baraka-lyrics:hover{background-color:#000}.Black #avail-lyr.baraka-lyrics li.baraka-lyrics:before{border-color:#000}.Black #avail-lyr.baraka-lyrics li.baraka-lyrics:after{border-color:#3a3a3a}.Black #avail-lyr li#azlyrics iron-icon svg path{fill:#fff}.Black #avail-lyr li#metrolyrics iron-icon svg path{fill:#fff}.Black #avail-lyr li#metrolyrics iron-icon svg path.metrolyrics_s{fill:#ed1b5a}.Black #avail-lyr li#musixmatch iron-icon svg path{fill:#fff}.Black #avail-lyr li#lyricwiki iron-icon svg path{fill:#fff}.Black baraka-lyrics-song#service{border:1px solid #000;color:#fff;background-color:rgba(34,35,38,0.9)}.Black baraka-lyrics-song#service:before{background-image:-webkit-linear-gradient(bottom,rgba(34,35,38,0) 0,#222326 100%);background-image:linear-gradient(bottom,rgba(34,35,38,0) 0,#222326 100%)}.Black baraka-lyrics-song#service:after{background-image:-webkit-linear-gradient(top,rgba(34,35,38,0) 0,#222326 100%);background-image:linear-gradient(top,rgba(34,35,38,0) 0,#222326 100%)}.Black #inputlyrics{color:#fff}.Black .bl-close{background-color:#000;border-color:#3a3a3a}.Black .buttons .bl-close{color:#fff}.Black .buttons .bl-close paper-ripple #background,.Black .buttons .bl-close paper-ripple #waves .wave-container .wave{background-color:#222326!important}.Rdiant .buttons .bl-close{color:#018fd5}.Rdiant .buttons .bl-close paper-ripple #background,.Rdiant .buttons .bl-close paper-ripple #waves .wave-container .wave{background-color:#018fd5!important}.BarakaHide{opacity:0!important}.lyricsbreak,#mid-song-discussion,.desc.compress,.lyricsh,.ringtone,.noprint,.div-share,.fb-like,.div-share,#addsong,#corlyr,.smt,.hidden,.album-panel,.songlist-panel,[action="http://search.azlyrics.com/search.php"]{display:none}</style>');document.body.insertBefore(e,document.body.childNodes[0]);var c=BarakaRadiant.create('<baraka-lyrics id="lyric-overlay" class="lyric-fade baraka"></baraka-lyrics><baraka-lyrics-song id="service"></baraka-lyrics-song>');BarakaRadiant.insertAfter(document.getElementById("queue-overlay"),c);var a=BarakaRadiant.create('<paper-toast id="baraka-toast" text="No lyrics available."></paper-toast>');document.body.insertBefore(a,document.body.childNodes[0]);var b=setInterval(function(){if(document.readyState=="complete"){var g=document.querySelector("paper-button"),h=window.getComputedStyle(g),f=h.getPropertyValue("color");BarakaRadiant.GoogleColor=f;if(BarakaRadiant.GoogleColor!=="rgb(255, 255, 255)"&&BarakaRadiant.GoogleColor!=="rgb(0, 0, 0)"){var i=BarakaRadiant.create('<paper-icon-button style="display: none;" id="barakaButton" data-baraka="lyric-overlay" class="baraka-icon" icon="bl2:lyric-black" raised onclick="Baraka(event)"></paper-icon-button>')}BarakaRadiant.insertAfter(document.getElementById("queue"),i);if(!BarakaRadiant.hasLyrics){if(document.querySelector(".baraka-icon")!==null){document.querySelector(".baraka-icon").style.display="none"}}else{if(document.querySelector(".baraka-icon")!==null){document.querySelector(".baraka-icon").style.display="block"}}clearInterval(b)}},10)},init:function(){BarakaRadiant.Lyrics()},check:function(){Object.observe(window.BarakaLyrics,function(c){var b,a;if(Object.keys(BarakaLyrics).length!==0){Object.keys(window.BarakaLyrics).forEach(function(e,d){switch(e){case"BarakaLyricMusix":a="musixmatch";if(this[e]==="none"){b=false}else{b=true}break;case"BarakaLyricWikia":a="lyricwiki";if(this[e][0]==="none"){b=false}else{b=true}break;case"BarakaLyricMetro":a="metrolyrics";if(this[e][0]==="none"){b=false}else{b=true}break;case"BarakaLyricGenius":a="genius";if(this[e][0]==="none"){b=false}else{b=true}break;case"BarakaLyricAZ":a="azlyrics";if(this[e][0]==="none"){b=false}else{b=true}break}if(b){BarakaRadiant.hasLyrics=true;document.querySelector('[data-baraka="service"]#'+a).style.display="block";document.querySelector("#barakaButton").style.display="block"}else{document.querySelector('[data-baraka="service"]#'+a).style.display="none"}if(BarakaLyrics.hasOwnProperty("BarakaLyricMusix")){if(BarakaLyrics.BarakaLyricMusix[0]==="none"&&BarakaLyrics.BarakaLyricWikia[0]==="none"&&BarakaLyrics.BarakaLyricMetro[0]==="none"&&BarakaLyrics.BarakaLyricGenius[0]==="none"&&BarakaLyrics.BarakaLyricAZ[0]==="none"){BarakaRadiant.hasLyrics=false;document.querySelector("#barakaButton").style.display="none";return document.querySelector("#baraka-toast").show()}}else{if(BarakaLyrics.BarakaLyricWikia[0]==="none"&&BarakaLyrics.BarakaLyricMetro[0]==="none"&&BarakaLyrics.BarakaLyricGenius[0]==="none"&&BarakaLyrics.BarakaLyricAZ[0]==="none"){BarakaRadiant.hasLyrics=false;document.querySelector("#barakaButton").style.display="none";return document.querySelector("#baraka-toast").show()}}},window.BarakaLyrics)}else{document.querySelector("#barakaButton").style.display="none";document.querySelector("#baraka-toast").show()}})},RadiantStyles:function(){if(typeof RadiantStyle!=="undefined"){if(RadiantStyle.appliedStyles.hasOwnProperty("Yosemite")||RadiantStyle.appliedStyles.hasOwnProperty("Black")||RadiantStyle.appliedStyles.hasOwnProperty("Light")||RadiantStyle.appliedStyles.hasOwnProperty("Dark Cyan")||RadiantStyle.appliedStyles.hasOwnProperty("Google")||RadiantStyle.appliedStyles.hasOwnProperty("Rdiant")){var a=(Object.keys(RadiantStyle.appliedStyles)[3]=="navigation")?Object.keys(RadiantStyle.appliedStyles)[4]:Object.keys(RadiantStyle.appliedStyles)[3];(a!="Dark Cyan"?BarakaRadiant.AddClass(document.body,a,true):BarakaRadiant.AddClass(document.body,"DarkCyan",true))}}},hasClass:function(b,a){if(b!==null){return(" "+b.className+" ").indexOf(" "+a+" ")>-1}else{return false}},hasID:function(b,a){if(b!==null){return(" "+b[0].id+" ").indexOf(" "+a+" ")>-1}else{return false}},AddClass:function(f,d,g){var e=f.className.split(" ");if(e.indexOf(d)!==-1){if(!g){delete e[e.indexOf(d)]}}else{if(g){e[e.length]=d}}f.className=e.join(" ")},insertAfter:function(b,a){b.parentNode.insertBefore(a,b.nextSibling)},create:function(a){var c=document.createDocumentFragment(),b=document.createElement("div");b.innerHTML=a;while(b.firstChild){c.appendChild(b.firstChild)}return c},hasKey:function(b,a){if(b!==null){return(" "+b+" ").indexOf(" "+a+" ")>-1}else{return false}},Lyrics:function(c){for(var a in BarakaLyrics){if(a.hasOwnProperty("0")){var b;switch(a){case"BarakaLyricWikia":b=BarakaRadiant.hasKey(a,"BarakaLyricWikia")?true:false;break;case"BarakaLyricMetro":b=BarakaRadiant.hasKey(a,"BarakaLyricMetro")?true:false;break;case"BarakaLyricGenius":b=BarakaRadiant.hasKey(a,"BarakaLyricGenius")?true:false;break;case"BarakaLyricAZ":b=BarakaRadiant.hasKey(a,"BarakaLyricAZ")?true:false;break;case"BarakaLyricMusix":b=BarakaRadiant.hasKey(a,"BarakaLyricMusix")?true:false;break;default:b=false;break}if(b){BarakaRadiant.hasLyrics=true}else{BarakaRadiant.hasLyrics=false;return document.querySelector("#baraka-toast").show()}}else{BarakaRadiant.hasLyrics=false;return document.querySelector("#baraka-toast").show()}}},};function Baraka(g){var a=document.querySelector("#barakaButton");BarakaRadiant.AddClass(a,"opened",false);if(g.srcElement._iconName!==null&&g.srcElement._iconName!==""){var f;document.querySelector("#lyric-overlay").close();BarakaRadiant.AddClass(a,"opened",true);switch(g.srcElement._iconName){case"musixmatch":if(BarakaLyrics.BarakaLyricWikia.length!==0){f=BarakaRadiant.create(BarakaLyrics.BarakaLyricMusix[0].trim())}else{f="No Lyrics Available :("}break;case"lyricwiki":if(BarakaLyrics.BarakaLyricWikia.length!==0){f=BarakaRadiant.create(BarakaLyrics.BarakaLyricWikia[0].trim())}else{f="No Lyrics Available :("}break;case"metrolyrics":if(BarakaLyrics.BarakaLyricMetro.length!==0){f=BarakaRadiant.create(BarakaLyrics.BarakaLyricMetro[0].trim())}else{f="No Lyrics Available :("}break;case"genius":if(BarakaLyrics.BarakaLyricGenius.length!==0){f=BarakaRadiant.create(BarakaLyrics.BarakaLyricGenius[0].trim())}else{f="No Lyrics Available :("}break;case"azlyrics":if(BarakaLyrics.BarakaLyricAZ.length!==0){f=BarakaRadiant.create(BarakaLyrics.BarakaLyricAZ[0].trim().slice(0,-18))}else{BarakaRadiant.hasLyrics=false;f="No Lyrics Available :("}break;default:BarakaRadiant.hasLyrics=false;f=BarakaRadiant.create("No Lyrics Available :(");break}document.getElementById("inputlyrics").innerHTML='<div id="p-h"></div>';BarakaRadiant.insertAfter(document.getElementById("p-h"),f)}var a=g.target;while(!a.hasAttribute("data-baraka")&&a!==document.body){a=a.parentElement}if(!a.hasAttribute("data-baraka")){return}var j=a.getAttribute("data-baraka");var h=document.getElementById(j);if(h){h.classList.toggle("baraka");var i=BarakaRadiant.hasClass(document.querySelector("#lyric-overlay"),"baraka");if(!i){h.open()}else{h.close()}}};