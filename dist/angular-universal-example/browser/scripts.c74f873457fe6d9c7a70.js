$(document).ready((function(){var e=".MultiCarousel-inner",t="";function n(){var n=0,i="",r="",a=$(".MultiCarousel").width(),l=$("body").width();$(e).each((function(){n+=1;var e=$(this).find(".item").length;i=$(this).parent().attr("data-items"),r=i.split(","),$(this).parent().attr("id","MultiCarousel"+n),t=l>=1200?a/r[3]:l>=992?a/r[2]:l>=768?a/r[1]:a/r[0],$(this).css({transform:"translateX(0px)",width:t*e}),$(this).find(".item").each((function(){$(this).outerWidth(t)})),$(".leftLst").addClass("over"),$(".rightLst").removeClass("over")}))}$(".leftLst, .rightLst").click((function(){var n;(function(n,i,r){var a="",l=$(i+" "+e).css("transform").match(/-?[\d\.]+/g),o=Math.abs(l[4]);if(0==n)a=parseInt(o)-parseInt(t*r),$(i+" .rightLst").removeClass("over"),a<=t/2&&(a=0,$(i+" .leftLst").addClass("over"));else if(1==n){var u=$(i).find(e).width()-$(i).width();a=parseInt(o)+parseInt(t*r),$(i+" .leftLst").removeClass("over"),a>=u-t/2&&(a=u,$(i+" .rightLst").addClass("over"))}$(i+" "+e).css("transform","translateX("+-a+"px)")})($(this).hasClass("leftLst")?0:1,n="#"+$(this).parent().attr("id"),$(n).attr("data-slide"))})),n(),$(window).resize((function(){n()}))})),function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}((function(e){"use strict";function t(t){return!t||void 0!==t.allowPageScroll||void 0===t.swipe&&void 0===t.swipeStatus||(t.allowPageScroll=s),void 0!==t.click&&void 0===t.tap&&(t.tap=t.click),t||(t={}),t=e.extend({},e.fn.swipe.defaults,t),this.each((function(){var i=e(this),r=i.data(M);r||(r=new n(this,t),i.data(M,r))}))}function n(t,n){function $(t){if(!(!0===Ee.data(M+"_intouch")||e(t.target).closest(n.excludedElements,Ee).length>0)){var o=t.originalEvent?t.originalEvent:t;if(!o.pointerType||"mouse"!=o.pointerType||0!=n.fallbackToMouseEvents){var u,s=o.touches,c=s?s[0]:o;return xe=b,s?Se=s.length:!1!==n.preventDefaultEvents&&t.preventDefault(),he=0,pe=null,fe=null,be=null,ge=0,ve=0,we=0,Te=1,me=0,(d={})[i]=te(i),d[r]=te(r),d[a]=te(a),d[l]=te(l),ye=d,G(),J(0,c),!s||Se===n.fingers||n.fingers===T||X()?(Le=ae(),2==Se&&(J(1,s[1]),ve=we=ie(Oe[0].start,Oe[1].start)),(n.swipeStatus||n.pinchStatus)&&(u=A(o,xe))):u=!1,!1===u?(A(o,xe=x),u):(n.hold&&(ke=setTimeout(e.proxy((function(){Ee.trigger("hold",[o.target]),n.hold&&(u=n.hold.call(Ee,o,o.target))}),this),n.longTapThreshold)),B(!0),null)}}var d}function D(t){var d,h,p,f,g=t.originalEvent?t.originalEvent:t;if(xe!==E&&xe!==x&&!Z()){var m,b=g.touches,S=K(b?b[0]:g);if(Me=ae(),b&&(Se=b.length),n.hold&&clearTimeout(ke),xe=y,2==Se&&(0==ve?(J(1,b[1]),ve=we=ie(Oe[0].start,Oe[1].start)):(K(b[1]),we=ie(Oe[0].end,Oe[1].end),be=1>Te?u:o),Te=(we/ve*1).toFixed(2),me=Math.abs(ve-we)),Se===n.fingers||n.fingers===T||!b||X()){if(pe=re(S.start,S.end),function(e,t){if(!1!==n.preventDefaultEvents)if(n.allowPageScroll===s)e.preventDefault();else{var o=n.allowPageScroll===c;switch(t){case i:(n.swipeLeft&&o||!o&&n.allowPageScroll!=v)&&e.preventDefault();break;case r:(n.swipeRight&&o||!o&&n.allowPageScroll!=v)&&e.preventDefault();break;case a:(n.swipeUp&&o||!o&&n.allowPageScroll!=w)&&e.preventDefault();break;case l:(n.swipeDown&&o||!o&&n.allowPageScroll!=w)&&e.preventDefault()}}}(t,fe=re(S.last,S.end)),p=S.start,f=S.end,he=Math.round(Math.sqrt(Math.pow(f.x-p.x,2)+Math.pow(f.y-p.y,2))),ge=ne(),function(e,t){e!=s&&(t=Math.max(t,ee(e)),ye[e].distance=t)}(pe,he),m=A(g,xe),!n.triggerOnTouchEnd||n.triggerOnTouchLeave){var O=!0;if(n.triggerOnTouchLeave){var L={left:(h=(d=e(d=this)).offset()).left,right:h.left+d.outerWidth(),top:h.top,bottom:h.top+d.outerHeight()};O=function(e,t){return e.x>t.left&&e.x<t.right&&e.y>t.top&&e.y<t.bottom}(S.end,L)}!n.triggerOnTouchEnd&&O?xe=R(y):n.triggerOnTouchLeave&&!O&&(xe=R(E)),xe!=x&&xe!=E||A(g,xe)}}else A(g,xe=x);!1===m&&A(g,xe=x)}}function P(e){var t=e.originalEvent?e.originalEvent:e,i=t.touches;if(i){if(i.length&&!Z())return function(e){$e=ae(),De=e.touches.length+1}(t),!0;if(i.length&&Z())return!0}return Z()&&(Se=De),Me=ae(),ge=ne(),N()||!U()?A(t,xe=x):n.triggerOnTouchEnd||!1===n.triggerOnTouchEnd&&xe===y?(!1!==n.preventDefaultEvents&&e.preventDefault(),A(t,xe=E)):!n.triggerOnTouchEnd&&Y()?j(t,xe=E,p):xe===y&&A(t,xe=x),B(!1),null}function C(){Se=0,Me=0,Le=0,ve=0,we=0,Te=1,G(),B(!1)}function k(e){n.triggerOnTouchLeave&&A(e.originalEvent?e.originalEvent:e,xe=R(E))}function I(){Ee.unbind(oe,$),Ee.unbind(de,C),Ee.unbind(ue,D),Ee.unbind(se,P),ce&&Ee.unbind(ce,k),B(!1)}function R(e){var t=e,i=H(),r=U(),a=N();return!i||a?t=x:!r||e!=y||n.triggerOnTouchEnd&&!n.triggerOnTouchLeave?!r&&e==E&&n.triggerOnTouchLeave&&(t=x):t=E,t}function A(e,t){var i,r=e.touches;return(!(!_()||!q())||q())&&(i=j(e,t,d)),(!(!Q()||!X())||X())&&!1!==i&&(i=j(e,t,h)),V()&&z()&&!1!==i?i=j(e,t,f):ge>n.longTapThreshold&&m>he&&n.longTap&&!1!==i?i=j(e,t,g):!(1!==Se&&S||!(isNaN(he)||he<n.threshold)||!Y())&&!1!==i&&(i=j(e,t,p)),t===x&&C(),t===E&&(r&&r.length||C()),i}function j(t,s,c){var v;if(c==d){if(Ee.trigger("swipeStatus",[s,pe||null,he||0,ge||0,Se,Oe,fe]),n.swipeStatus&&!1===(v=n.swipeStatus.call(Ee,t,s,pe||null,he||0,ge||0,Se,Oe,fe)))return!1;if(s==E&&_()){if(clearTimeout(Ce),clearTimeout(ke),Ee.trigger("swipe",[pe,he,ge,Se,Oe,fe]),n.swipe&&!1===(v=n.swipe.call(Ee,t,pe,he,ge,Se,Oe,fe)))return!1;switch(pe){case i:Ee.trigger("swipeLeft",[pe,he,ge,Se,Oe,fe]),n.swipeLeft&&(v=n.swipeLeft.call(Ee,t,pe,he,ge,Se,Oe,fe));break;case r:Ee.trigger("swipeRight",[pe,he,ge,Se,Oe,fe]),n.swipeRight&&(v=n.swipeRight.call(Ee,t,pe,he,ge,Se,Oe,fe));break;case a:Ee.trigger("swipeUp",[pe,he,ge,Se,Oe,fe]),n.swipeUp&&(v=n.swipeUp.call(Ee,t,pe,he,ge,Se,Oe,fe));break;case l:Ee.trigger("swipeDown",[pe,he,ge,Se,Oe,fe]),n.swipeDown&&(v=n.swipeDown.call(Ee,t,pe,he,ge,Se,Oe,fe))}}}if(c==h){if(Ee.trigger("pinchStatus",[s,be||null,me||0,ge||0,Se,Te,Oe]),n.pinchStatus&&!1===(v=n.pinchStatus.call(Ee,t,s,be||null,me||0,ge||0,Se,Te,Oe)))return!1;if(s==E&&Q())switch(be){case o:Ee.trigger("pinchIn",[be||null,me||0,ge||0,Se,Te,Oe]),n.pinchIn&&(v=n.pinchIn.call(Ee,t,be||null,me||0,ge||0,Se,Te,Oe));break;case u:Ee.trigger("pinchOut",[be||null,me||0,ge||0,Se,Te,Oe]),n.pinchOut&&(v=n.pinchOut.call(Ee,t,be||null,me||0,ge||0,Se,Te,Oe))}}return c==p?s!==x&&s!==E||(clearTimeout(Ce),clearTimeout(ke),z()&&!V()?(Pe=ae(),Ce=setTimeout(e.proxy((function(){Pe=null,Ee.trigger("tap",[t.target]),n.tap&&(v=n.tap.call(Ee,t,t.target))}),this),n.doubleTapThreshold)):(Pe=null,Ee.trigger("tap",[t.target]),n.tap&&(v=n.tap.call(Ee,t,t.target)))):c==f?s!==x&&s!==E||(clearTimeout(Ce),clearTimeout(ke),Pe=null,Ee.trigger("doubletap",[t.target]),n.doubleTap&&(v=n.doubleTap.call(Ee,t,t.target))):c==g&&(s!==x&&s!==E||(clearTimeout(Ce),Pe=null,Ee.trigger("longtap",[t.target]),n.longTap&&(v=n.longTap.call(Ee,t,t.target)))),v}function U(){var e=!0;return null!==n.threshold&&(e=he>=n.threshold),e}function N(){var e=!1;return null!==n.cancelThreshold&&null!==pe&&(e=ee(pe)-he>=n.cancelThreshold),e}function H(){return!(n.maxTimeThreshold&&ge>=n.maxTimeThreshold)}function Q(){var e=F(),t=W();return e&&t&&(null===n.pinchThreshold||me>=n.pinchThreshold)}function X(){return!!(n.pinchStatus||n.pinchIn||n.pinchOut)}function _(){var e=H(),t=U(),n=F(),i=W();return!N()&&i&&n&&t&&e}function q(){return!!(n.swipe||n.swipeStatus||n.swipeLeft||n.swipeRight||n.swipeUp||n.swipeDown)}function F(){return Se===n.fingers||n.fingers===T||!S}function W(){return 0!==Oe[0].end.x}function Y(){return!!n.tap}function z(){return!!n.doubleTap}function V(){if(null==Pe)return!1;var e=ae();return z()&&e-Pe<=n.doubleTapThreshold}function G(){$e=0,De=0}function Z(){var e=!1;return $e&&ae()-$e<=n.fingerReleaseThreshold&&(e=!0),e}function B(e){Ee&&(!0===e?(Ee.bind(ue,D),Ee.bind(se,P),ce&&Ee.bind(ce,k)):(Ee.unbind(ue,D,!1),Ee.unbind(se,P,!1),ce&&Ee.unbind(ce,k,!1)),Ee.data(M+"_intouch",!0===e))}function J(e,t){var n={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return n.start.x=n.last.x=n.end.x=t.pageX||t.clientX,n.start.y=n.last.y=n.end.y=t.pageY||t.clientY,Oe[e]=n,n}function K(e){var t=void 0!==e.identifier?e.identifier:0,n=function(e){return Oe[e]||null}(t);return null===n&&(n=J(t,e)),n.last.x=n.end.x,n.last.y=n.end.y,n.end.x=e.pageX||e.clientX,n.end.y=e.pageY||e.clientY,n}function ee(e){return ye[e]?ye[e].distance:void 0}function te(e){return{direction:e,distance:0}}function ne(){return Me-Le}function ie(e,t){var n=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return Math.round(Math.sqrt(n*n+i*i))}function re(e,t){if((n=e).x==(o=t).x&&n.y==o.y)return s;var n,o,u=function(e,t){var n=Math.atan2(t.y-e.y,e.x-t.x),i=Math.round(180*n/Math.PI);return 0>i&&(i=360-Math.abs(i)),i}(e,t);return 45>=u&&u>=0||360>=u&&u>=315?i:u>=135&&225>=u?r:u>45&&135>u?l:a}function ae(){return(new Date).getTime()}n=e.extend({},n);var le=S||L||!n.fallbackToMouseEvents,oe=le?L?O?"MSPointerDown":"pointerdown":"touchstart":"mousedown",ue=le?L?O?"MSPointerMove":"pointermove":"touchmove":"mousemove",se=le?L?O?"MSPointerUp":"pointerup":"touchend":"mouseup",ce=le?L?"mouseleave":null:"mouseleave",de=L?O?"MSPointerCancel":"pointercancel":"touchcancel",he=0,pe=null,fe=null,ge=0,ve=0,we=0,Te=1,me=0,be=0,ye=null,Ee=e(t),xe="start",Se=0,Oe={},Le=0,Me=0,$e=0,De=0,Pe=0,Ce=null,ke=null;try{Ee.bind(oe,$),Ee.bind(de,C)}catch(Ie){e.error("events not supported "+oe+","+de+" on jQuery.swipe")}this.enable=function(){return this.disable(),Ee.bind(oe,$),Ee.bind(de,C),Ee},this.disable=function(){return I(),Ee},this.destroy=function(){I(),Ee.data(M,null),Ee=null},this.option=function(t,i){if("object"==typeof t)n=e.extend(n,t);else if(void 0!==n[t]){if(void 0===i)return n[t];n[t]=i}else{if(!t)return n;e.error("Option "+t+" does not exist on jQuery.swipe.options")}return null}}var i="left",r="right",a="up",l="down",o="in",u="out",s="none",c="auto",d="swipe",h="pinch",p="tap",f="doubletap",g="longtap",v="horizontal",w="vertical",T="all",m=10,b="start",y="move",E="end",x="cancel",S="ontouchstart"in window,O=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!S,L=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!S,M="TouchSwipe";e.fn.swipe=function(n){var i=e(this),r=i.data(M);if(r&&"string"==typeof n){if(r[n])return r[n].apply(r,Array.prototype.slice.call(arguments,1));e.error("Method "+n+" does not exist on jQuery.swipe")}else if(r&&"object"==typeof n)r.option.apply(r,arguments);else if(!(r||"object"!=typeof n&&n))return t.apply(this,arguments);return i},e.fn.swipe.version="1.6.18",e.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0},e.fn.swipe.phases={PHASE_START:b,PHASE_MOVE:y,PHASE_END:E,PHASE_CANCEL:x},e.fn.swipe.directions={LEFT:i,RIGHT:r,UP:a,DOWN:l,IN:o,OUT:u},e.fn.swipe.pageScroll={NONE:s,HORIZONTAL:v,VERTICAL:w,AUTO:c},e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:T}})),function(e){"use strict";e.fn.bsTouchSlider=function(t){var n=e(".carousel");return this.each((function(){function t(t){t.each((function(){var t=e(this),n=t.data("animation");t.addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){t.removeClass(n)}))}))}var i=n.find(".item:first").find("[data-animation ^= 'animated']");n.carousel(),t(i),n.on("slide.bs.carousel",(function(n){t(e(n.relatedTarget).find("[data-animation ^= 'animated']"))})),e(".carousel .carousel-inner").swipe({swipeLeft:function(e,t,n,i,r){this.parent().carousel("next")},swipeRight:function(){this.parent().carousel("prev")},threshold:0})}))}}(jQuery);