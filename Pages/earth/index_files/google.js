(function(){
  var g=!0,h=this;function j(a,c){var b=a.split("."),d=h;!(b[0]in d)&&d.execScript&&d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)!b.length&&void 0!==c?d[e]=c:d=d[e]?d[e]:d[e]={}}function l(a,c,b){return a.call.apply(a.bind,arguments)}
function n(a,c,b){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}}function p(a,c,b){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:n;return p.apply(null,arguments)}
Function.prototype.bind=Function.prototype.bind||function(a,c){if(1<arguments.length){var b=Array.prototype.slice.call(arguments,1);b.unshift(this,a);return p.apply(null,b)}return p(this,a)};function r(a){this.a=a||{};this.pathname=window.location.pathname;window._gaq=window._gaq||[];this.g=g;if(!1===this.a.tracklinks||!1===this.a.trackClicks)this.g=!1;this.a.trackQueryParams&&(this.m=g);this.l=void 0===this.a.adsDbCompatible?g:this.a.adsDbCompatible;this.c=this.a.tracker?this.a.tracker+".":"";this.f=this.a.cookiePath||/^(.*\/)/.exec(this.pathname)[0];this.d=this.a.cookiePathCopy||[];this.prefix=this.a.prefix||"";this.i=this.a.defaultEventName;this.h=this.a.defaultAction;this.j=this.a.defaultLabel;
a=this.a.profile;var c=this.prefix+this.pathname;this.m&&(c+=window.location.search);if(this.l&&(window.location.hash||window.location.search)){var b=window.location.href;this.b([this.c+"_setCampIdKey","cid"]);-1==b.indexOf("utm_campaign=")&&this.b([this.c+"_setCampNameKey","sourceid"]);-1==b.indexOf("utm_medium=")&&this.b([this.c+"_setCampMediumKey","medium"]);-1==b.indexOf("utm_source=")&&this.b([this.c+"_setCampSourceKey","subid"]);-1==b.indexOf("utm_term=")&&this.b([this.c+"_setCampTermKey","term"]);
-1==b.indexOf("utm_content=")&&this.b([this.c+"_setCampContentKey","content"])}var d=this.a.commands;if(d)for(var b=0,e;e=d[b];b++)e[0]=e[0]&&this.c+e[0],this.b(e);if(this.d){b=0;for(d=this.d.length;b<d;b++)0>this.f.indexOf(this.d[b])&&this.b([this.c+"_cookiePathCopy",this.d[b]])}this.b([this.c+"_setAccount",a]);this.b([this.c+"_setCookiePath",this.f]);this.b([this.c+"_setAllowAnchor",g]);this.b([this.c+"_trackPageview",c]);window._gat||(a=document.createElement("script"),a.type="text/javascript",
a.async=g,a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js",c=document.getElementsByTagName("script")[0],c.parentNode.insertBefore(a,c));var f=this.k,k=this;k&&(f=p(f,k));if(document.addEventListener)try{s(document,"DOMContentLoaded",f,this)}catch(v){s(window,"load",f,this)}else if(!document.uniqueID&&document.expando)var q=document.createElement("tempnode"),m=window.setInterval(function(){try{q.doScroll("left")}catch(a){return}window.clearInterval(m);
m=q=null;k&&(f=p(f,k));f()},50);else"readyState"in document?m=window.setInterval(function(){/loaded|complete/.test(document.readyState)&&(window.clearInterval(m),m=null,k&&(f=p(f,k)),f())},50):s(window,"load",f,this);this.a.trackUnload&&s(window,"unload",this.n,this);t=g}var t=!1;
r.prototype.k=function(){this.g&&s(document.body,"click",function(a){a=a||window.event;a=a.target||a.srcElement;a=3==a.nodeType?a.parentNode:a;do{if(Boolean("a"==a.nodeName.toLowerCase()||a.getAttribute("data-g-event")||a.getAttribute("data-g-action")||a.getAttribute("data-g-label"))){var c=u(this,"eventname",a),b=u(this,"action",a),d=u(this,"label",a);this.e(c,b,d)}a.parentNode&&(a=a.parentNode)}while(a.parentNode)},this);this.a.heatMapper&&s(document.body,"click",function(a){this.e("AutoTrack: Heatmap",
"Click",a.clientX+","+a.clientY)},this)};r.prototype.n=function(){this.e("AutoTrack: Navigation","Unload",window.location.href)};r.prototype.e=function(a,c,b){this.prefix&&(b=this.prefix+b);this.b([this.c+"_trackEvent",a,c,b])};
function u(a,c,b){function d(a){if("string"==typeof a)return a;if("function"==typeof a)return a(b)}if("eventname"==c)return b.getAttribute("data-g-event")||d(a.i)||("a"==b.tagName.toLowerCase()?b.hostname==window.location.hostname?"AutoTrack: Link Click":"AutoTrack: Outbound Click":"AutoTrack: Element Click");if("action"==c)return b.getAttribute("data-g-action")||d(a.h)||b.getAttribute("href")||"AutoTrack: Element Click";if("label"==c)return b.getAttribute("data-g-label")||d(a.j)||a.pathname}
function s(a,c,b,d){d&&(b=p(b,d));a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent&&a.attachEvent("on"+c,b)}r.prototype.b=function(a){a instanceof Array&&window._gaq.push(a)};j("gweb.analytics.AutoTrack",r);r.prototype.trackEvent=r.prototype.e;r.prototype.pushCommand=r.prototype.b;j("gweb.analytics.AutoTrack.hasInstance",function(){return t});
})()