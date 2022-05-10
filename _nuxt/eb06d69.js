/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{418:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},504:function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return M})),n.d(e,"d",(function(){return P}));var o=n(0);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},e=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(source).filter((function(t){return Object.getOwnPropertyDescriptor(source,t).enumerable})))),e.forEach((function(e){r(t,e,source[e])}))}return t}function c(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(t,e,n){return Math.max(Math.min(t,n),e)}function d(){return Date.now()}function f(t,time){this.create=function(){return window.setInterval(t,time)},this.stop=function(){this.timer&&(window.clearInterval(this.timer),this.timer=null)},this.start=function(){this.timer||(this.timer=this.create())},this.restart=function(t){time=t||time,this.stop(),this.start()},this.timer=this.create()}function v(t,e){var n;return(n=t<0?(t+e)%e:t%e)!=n?0:n}function m(t,e){var n=e.children||e.componentOptions.children||e.text;return t(e.componentOptions.Ctor,e.data,n)}var S=Object.assign||function(t){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n){n=Object(n);for(var o=Object.keys(Object(n)),r=0,h=o.length;r<h;r++){var c=o[r],desc=Object.getOwnPropertyDescriptor(n,c);void 0!==desc&&desc.enumerable&&(e[c]=n[c])}}}return e};var y=Math.sign||function(t){return t<0?-1:t>0?1:0};function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.$scopedSlots.default?t.$scopedSlots.default(e)||[]:t.$slots.default||[]}var $=new o.a,x={name:"Hooper",provide:function(){return{$hooper:this}},props:{itemsToShow:{default:1,type:Number},itemsToSlide:{default:1,type:Number},initialSlide:{default:0,type:Number},infiniteScroll:{default:!1,type:Boolean},centerMode:{default:!1,type:Boolean},vertical:{default:!1,type:Boolean},rtl:{default:null,type:Boolean},autoPlay:{default:!1,type:Boolean},playSpeed:{default:2e3,type:Number},mouseDrag:{default:!0,type:Boolean},touchDrag:{default:!0,type:Boolean},wheelControl:{default:!0,type:Boolean},keysControl:{default:!0,type:Boolean},shortDrag:{default:!0,type:Boolean},transition:{default:300,type:Number},hoverPause:{default:!0,type:Boolean},trimWhiteSpace:{default:!1,type:Boolean},settings:{default:function(){return{}},type:Object},group:{type:String,default:null}},data:function(){return{isDragging:!1,isSliding:!1,isTouch:!1,isHover:!1,isFocus:!1,initialized:!1,slideWidth:0,slideHeight:0,slidesCount:0,trimStart:0,trimEnd:1,currentSlide:null,timer:null,defaults:{},breakpoints:{},delta:{x:0,y:0},config:{}}},computed:{slideBounds:function(){var t=this.config,e=this.currentSlide,n=t.itemsToShow;return{lower:t.centerMode?Math.ceil(e-n/2):e,upper:t.centerMode?Math.floor(e+n/2):Math.floor(e+n-1)}},trackTransform:function(){var t=this.config,e=t.infiniteScroll,n=t.vertical,o=t.rtl,r=t.centerMode,h=o?-1:1,c=n?this.slideHeight:this.slideWidth,l=n?this.containerHeight:this.containerWidth,d=(n?this.delta.y:this.delta.x)+h*((r?(l-c)/2:0)-(e?c*this.slidesCount:0)-this.currentSlide*c);return n?"transform: translate(0, ".concat(d,"px);"):"transform: translate(".concat(d,"px, 0);")},trackTransition:function(){return this.initialized&&this.isSliding?"transition: ".concat(this.config.transition,"ms"):""}},watch:{group:function(t,e){t!==e&&($.$off("slideGroup:".concat(e),this._groupSlideHandler),this.addGroupListeners())}},methods:{slideTo:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.isSliding&&t!==this.currentSlide){this.$emit("beforeSlide",{currentSlide:this.currentSlide,slideTo:d});var o=this.config,r=o.infiniteScroll,h=o.transition,c=this.currentSlide,d=r?t:l(t,this.trimStart,this.slidesCount-this.trimEnd);this.group&&n&&$.$emit("slideGroup:".concat(this.group),t),this.currentSlide=d,this.isSliding=!0,window.setTimeout((function(){e.isSliding=!1,e.currentSlide=v(d,e.slidesCount)}),h),this.$emit("slide",{currentSlide:this.currentSlide,slideFrom:c})}},slideNext:function(){this.slideTo(this.currentSlide+this.config.itemsToSlide)},slidePrev:function(){this.slideTo(this.currentSlide-this.config.itemsToSlide)},initEvents:function(){null===this.defaults.rtl&&(this.defaults.rtl="rtl"===getComputedStyle(this.$el).direction),this.config.autoPlay&&this.initAutoPlay(),this.config.mouseDrag&&this.$refs.list.addEventListener("mousedown",this.onDragStart),this.config.touchDrag&&this.$refs.list.addEventListener("touchstart",this.onDragStart,{passive:!0}),this.config.keysControl&&this.$el.addEventListener("keydown",this.onKeypress),this.config.wheelControl&&(this.lastScrollTime=d(),this.$el.addEventListener("wheel",this.onWheel,{passive:!1})),window.addEventListener("resize",this.update)},initAutoPlay:function(){var t=this;this.timer=new f((function(){t.isSliding||t.isDragging||t.isHover&&t.config.hoverPause||t.isFocus||(t.currentSlide!==t.slidesCount-1||t.config.infiniteScroll?t.slideNext():t.slideTo(0))}),this.config.playSpeed)},initDefaults:function(){this.breakpoints=this.settings.breakpoints,this.defaults=S({},this.$props,this.settings),this.config=S({},this.defaults)},update:function(){this.breakpoints&&this.updateConfig(),this.updateWidth(),this.updateTrim(),this.$emit("updated",{containerWidth:this.containerWidth,containerHeight:this.containerHeight,slideWidth:this.slideWidth,slideHeight:this.slideHeight,settings:this.config})},updateTrim:function(){var t=this.config,e=t.trimWhiteSpace,n=t.itemsToShow,o=t.centerMode,r=t.infiniteScroll;if(!e||r)return this.trimStart=0,void(this.trimEnd=1);this.trimStart=o?Math.floor((n-1)/2):0,this.trimEnd=o?Math.ceil(n/2):n},updateWidth:function(){var rect=this.$el.getBoundingClientRect();this.containerWidth=rect.width,this.containerHeight=rect.height,this.config.vertical?this.slideHeight=this.containerHeight/this.config.itemsToShow:this.slideWidth=this.containerWidth/this.config.itemsToShow},updateConfig:function(){var t,e=this;Object.keys(this.breakpoints).sort((function(a,b){return b-a})).some((function(n){if(t=window.matchMedia("(min-width: ".concat(n,"px)")).matches)return e.config=S({},e.config,e.defaults,e.breakpoints[n]),!0})),t||(this.config=S(this.config,this.defaults))},restartTimer:function(){this.timer&&this.timer.restart()},restart:function(){var t=this;this.$nextTick((function(){t.update()}))},onDragStart:function(t){this.isTouch="touchstart"===t.type,(this.isTouch||0===t.button)&&(this.startPosition={x:0,y:0},this.endPosition={x:0,y:0},this.isDragging=!0,this.startPosition.x=this.isTouch?t.touches[0].clientX:t.clientX,this.startPosition.y=this.isTouch?t.touches[0].clientY:t.clientY,document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),document.addEventListener(this.isTouch?"touchend":"mouseup",this.onDragEnd))},isInvalidDirection:function(t,e){return this.config.vertical?!!this.config.vertical&&Math.abs(e)<=Math.abs(t):Math.abs(t)<=Math.abs(e)},onDrag:function(t){if(!this.isSliding){this.endPosition.x=this.isTouch?t.touches[0].clientX:t.clientX,this.endPosition.y=this.isTouch?t.touches[0].clientY:t.clientY;var e=this.endPosition.x-this.startPosition.x,n=this.endPosition.y-this.startPosition.y;this.isInvalidDirection(e,n)||(this.delta.y=n,this.delta.x=e,this.isTouch||t.preventDefault())}},onDragEnd:function(){var t=this.config.shortDrag?.5:.15;if(this.isDragging=!1,this.config.vertical){var e=Math.round(Math.abs(this.delta.y/this.slideHeight)+t);this.slideTo(this.currentSlide-y(this.delta.y)*e)}if(!this.config.vertical){var n=(this.config.rtl?-1:1)*y(this.delta.x),o=Math.round(Math.abs(this.delta.x/this.slideWidth)+t);this.slideTo(this.currentSlide-n*o)}this.delta.x=0,this.delta.y=0,document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onDragEnd),this.restartTimer()},onTransitionend:function(){this.isSliding=!1,this.$emit("afterSlide",{currentSlide:this.currentSlide})},onKeypress:function(t){var e=t.key;return e.startsWith("Arrow")&&t.preventDefault(),this.config.vertical?("ArrowUp"===e&&this.slidePrev(),void("ArrowDown"===e&&this.slideNext())):this.config.rtl?("ArrowRight"===e&&this.slidePrev(),void("ArrowLeft"===e&&this.slideNext())):("ArrowRight"===e&&this.slideNext(),void("ArrowLeft"===e&&this.slidePrev()))},onWheel:function(t){if(t.preventDefault(),!(d()-this.lastScrollTime<200)){this.lastScrollTime=d();var e=t.wheelDelta||-t.deltaY,n=y(e);-1===n&&this.slideNext(),1===n&&this.slidePrev()}},addGroupListeners:function(){var t=this;this.group&&(this._groupSlideHandler=function(e){t.slideTo(e,!1)},$.$on("slideGroup:".concat(this.group),this._groupSlideHandler))}},created:function(){this.initDefaults()},mounted:function(){var t=this;this.initEvents(),this.addGroupListeners(),this.$nextTick((function(){t.update(),t.slideTo(t.config.initialSlide||0),setTimeout((function(){t.$emit("loaded"),t.initialized=!0}),t.transition)}))},beforeDestroy:function(){window.removeEventListener("resize",this.update),this.group&&$.$off("slideGroup:".concat(this.group),this._groupSlideHandler),this.timer&&this.timer.stop()},render:function(t){var e=this,body=D.call(this,t);return t("section",{class:{hooper:!0,"is-vertical":this.config.vertical,"is-rtl":this.config.rtl},attrs:{tabindex:"0"},on:{focusin:function(){return e.isFocus=!0},focusout:function(){return e.isFocus=!1},mouseover:function(){return e.isHover=!0},mouseleave:function(){return e.isHover=!1}}},body)}};function T(t){for(var e=w(this),n=e.length,o=0,r=[],i=0;i<n;i++){var l=e[i],d=l.componentOptions&&l.componentOptions.Ctor;d&&"HooperSlide"===d.options.name&&(l.componentOptions.propsData.index=o,l.data.key=o,l.key=o,l.data.props=h({},l.data.props||{},{isClone:!1,index:o++}),r.push(l))}return this.slidesCount=r.length,this.config.infiniteScroll&&(r=function(t,e){for(var n=[],o=[],r=e.length,i=0;i<r;i++){var h=e[i],l=m(t,h),d=i-r;l.data.key="before_".concat(i),l.key=l.data.key,l.componentOptions.propsData.index=d,l.data.props={index:d,isClone:!0},n.push(l);var f=m(t,h);d=i+r,f.data.key="after_".concat(d),f.componentOptions.propsData.index=d,f.key=f.data.key,f.data.props={index:d,isClone:!0},o.push(f)}return[].concat(n,c(e),o)}(t,r)),t("ul",{class:{"hooper-track":!0,"is-dragging":this.isDragging},style:this.trackTransform+this.trackTransition,ref:"track",on:{transitionend:this.onTransitionend}},r)}function D(t){var e=T.call(this,t),n=this.$slots["hooper-addons"]||[],o=t("div",{class:"hooper-liveregion hooper-sr-only",attrs:{"aria-live":"polite","aria-atomic":"true"}},"Item ".concat(this.currentSlide+1," of ").concat(this.slidesCount));return[t("div",{class:"hooper-list",ref:"list"},[e].concat(c(n),[o]))]}var P={name:"HooperSlide",inject:["$hooper"],props:{isClone:{type:Boolean,default:!1},index:{type:Number,required:!0}},computed:{style:function(){var t=this.$hooper||{},e=t.config,n=t.slideHeight,o=t.slideWidth;return e.vertical?"height: ".concat(n,"px"):"width: ".concat(o,"px")},isActive:function(){var t=this.$hooper.slideBounds,e=t.upper,n=t.lower;return this.index>=n&&this.index<=e},isPrev:function(){var t=this.$hooper.slideBounds.lower,e=this.$hooper.config.itemsToSlide;return this.index<t&&this.index>=t-e},isNext:function(){var t=this.$hooper.slideBounds.upper,e=this.$hooper.config.itemsToSlide;return this.index>t&&this.index<=t+e},isCurrent:function(){return this.index===this.$hooper.currentSlide}},render:function(t){var e={"hooper-slide":!0,"is-clone":this.isClone,"is-active":this.isActive,"is-prev":this.isPrev,"is-next":this.isNext,"is-current":this.isCurrent},n=w(this);return t("li",{class:e,style:this.style,attrs:{"aria-hidden":!this.isActive}},n)}},k={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},C={name:"HooperIcon",functional:!0,inheritAttrs:!0,props:{name:{type:String,required:!0,validator:function(t){return t in k}}},render:function(t,e){var n,o=e.props,r=k[o.name],h=[];return h.push(t("title",(n=(n=o.name).replace(/([A-Z]+)/g," $1")).charAt(0).toUpperCase()+n.slice(1))),h.push(t("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})),h.push(t("path",{attrs:{d:r}})),t("svg",{attrs:{class:"icon icon-".concat(o.name),viewBox:"0 0 24 24",width:"24px",height:"24px"}},h)}};var M={inject:["$hooper"],name:"HooperPagination",props:{mode:{default:"indicator",type:String}},computed:{currentSlide:function(){return v(this.$hooper.currentSlide,this.$hooper.slidesCount)},slides:function(){var t=this.$hooper.slides.map((function(t,e){return e}));return t.slice(this.$hooper.trimStart,this.$hooper.slidesCount-this.$hooper.trimEnd+1)}},render:function(t){var e=this,n=this.$hooper.slidesCount,o="indicator"===this.mode?function(t,e,n,o){for(var r=[],h=function(i){r.push(function(t,e,n,o){return t("li",[t("button",{class:{"hooper-indicator":!0,"is-active":n},on:{click:o},attrs:{type:"button"}},[t("span",{class:"hooper-sr-only"},"item ".concat(e))])])}(t,i,i===e,(function(){return o(i)})))},i=0;i<n;i++)h(i);return[t("ol",{class:"hooper-indicators"},r)]}(t,this.currentSlide,n,(function(t){return e.$hooper.slideTo(t)})):function(t,e,n){return[t("span",e+1),t("span","/"),t("span",n)]}(t,this.currentSlide,n);return t("div",{class:{"hooper-pagination":!0,"is-vertical":this.$hooper.config.vertical}},o)}};function H(t,e,n){return n?t?"arrowUp":e?"arrowRight":"arrowLeft":t?"arrowDown":e?"arrowLeft":"arrowRight"}function L(t,e,slot,n,o,h){var c,l=o.isVertical,d=o.isRTL,f=slot&&slot.length?slot:[t(C,{props:{name:H(l,d,n)}})];return t("button",{class:(c={},r(c,"hooper-".concat(n?"prev":"next"),!0),r(c,"is-disabled",e),c),attrs:{type:"button"},on:{click:h}},f)}var O={inject:["$hooper"],name:"HooperNavigation",computed:{isPrevDisabled:function(){return!this.$hooper.config.infiniteScroll&&0===this.$hooper.currentSlide},isNextDisabled:function(){return!this.$hooper.config.infiniteScroll&&(this.$hooper.config.trimWhiteSpace?this.$hooper.currentSlide===this.$hooper.slidesCount-Math.min(this.$hooper.config.itemsToShow,this.$hooper.slidesCount):this.$hooper.currentSlide===this.$hooper.slidesCount-1)}},methods:{slideNext:function(){this.$hooper.slideNext(),this.$hooper.restartTimer()},slidePrev:function(){this.$hooper.slidePrev(),this.$hooper.restartTimer()}},render:function(t){var e=this,n={isRTL:this.$hooper.config.rtl,isVertical:this.$hooper.config.vertical},o=[L(t,this.isPrevDisabled,this.$slots["hooper-prev"],!0,n,(function(){return e.slidePrev()})),L(t,this.isNextDisabled,this.$slots["hooper-next"],!1,n,(function(){return e.slideNext()}))];return t("div",{class:{"hooper-navigation":!0,"is-vertical":this.$hooper.config.vertical,"is-rtl":this.$hooper.config.rtl}},o)}}}}]);