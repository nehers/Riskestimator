!function(){function i(i,n,e){return n in i?Object.defineProperty(i,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[n]=e,i}function n(i,n,e,t,r,o,s){try{var l=i[o](s),c=l.value}catch(a){return void e(a)}l.done?n(c):Promise.resolve(c).then(t,r)}function e(i){return function(){var e=this,t=arguments;return new Promise((function(r,o){var s=i.apply(e,t);function l(i){n(s,r,o,l,c,"next",i)}function c(i){n(s,r,o,l,c,"throw",i)}l(void 0)}))}}function t(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function r(i,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function o(i,n,e){return n&&r(i.prototype,n),e&&r(i,e),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{nf6t:function(n,r,s){"use strict";s.r(r),s.d(r,"ion_infinite_scroll",(function(){return h})),s.d(r,"ion_infinite_scroll_content",(function(){return u}));var l=s("c1op"),c=s("AfW+"),a=s("YtD4"),h=function(){function n(i){var e=this;t(this,n),Object(l.l)(this,i),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var i=e.scrollEl;if(!i||!e.canStart())return 1;var n=e.el.offsetHeight;if(0===n)return 2;var t=i.scrollTop,r=i.offsetHeight,o=0!==e.thrPc?r*e.thrPc:e.thrPx;if(("bottom"===e.position?i.scrollHeight-n-t-o-r:t-n-o)<0){if(!e.didFire)return e.isLoading=!0,e.didFire=!0,e.ionInfinite.emit(),3}else e.didFire=!1;return 4},this.ionInfinite=Object(l.e)(this,"ionInfinite",7)}var r,s;return o(n,[{key:"thresholdChanged",value:function(){var i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}},{key:"disabledChanged",value:function(){var i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}},{key:"connectedCallback",value:(s=e(regeneratorRuntime.mark((function i(){var n,e=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(n=this.el.closest("ion-content"))){i.next=10;break}return i.next=4,n.getScrollElement();case 4:this.scrollEl=i.sent,this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(l.m)((function(){e.scrollEl&&(e.scrollEl.scrollTop=e.scrollEl.scrollHeight-e.scrollEl.clientHeight)})),i.next=11;break;case 10:console.error("<ion-infinite-scroll> must be used inside an <ion-content>");case 11:case"end":return i.stop()}}),i,this)}))),function(){return s.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.enableScrollEvents(!1),this.scrollEl=void 0}},{key:"complete",value:(r=e(regeneratorRuntime.mark((function i(){var n,e,t=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:n=this.scrollEl,this.isLoading&&n&&(this.isLoading=!1,"top"===this.position)&&(this.isBusy=!0,e=n.scrollHeight-n.scrollTop,requestAnimationFrame((function(){Object(l.g)((function(){var i=n.scrollHeight-e;requestAnimationFrame((function(){Object(l.m)((function(){n.scrollTop=i,t.isBusy=!1}))}))}))})));case 2:case"end":return i.stop()}}),i,this)}))),function(){return r.apply(this,arguments)})},{key:"canStart",value:function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}},{key:"enableScrollEvents",value:function(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}},{key:"render",value:function(){var n,e=Object(l.d)(this),t=this.disabled;return Object(l.i)(l.a,{class:(n={},i(n,e,!0),i(n,"infinite-scroll-loading",this.isLoading),i(n,"infinite-scroll-enabled",!t),n)})}},{key:"el",get:function(){return Object(l.f)(this)}}],[{key:"watchers",get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}},{key:"style",get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"}}]),n}(),u=function(){function n(i){t(this,n),Object(l.l)(this,i)}return o(n,[{key:"componentDidLoad",value:function(){if(void 0===this.loadingSpinner){var i=Object(l.d)(this);this.loadingSpinner=c.b.get("infiniteLoadingSpinner",c.b.get("spinner","ios"===i?"lines":"crescent"))}}},{key:"render",value:function(){var n,e=Object(l.d)(this);return Object(l.i)(l.a,{class:(n={},i(n,e,!0),i(n,"infinite-scroll-content-"+e,!0),n)},Object(l.i)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(l.i)("div",{class:"infinite-loading-spinner"},Object(l.i)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(l.i)("div",{class:"infinite-loading-text",innerHTML:Object(a.a)(this.loadingText)})))}}],[{key:"style",get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"}}]),n}()}}])}();