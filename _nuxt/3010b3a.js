(window.webpackJsonp=window.webpackJsonp||[]).push([[32,27,28,29],{367:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("1bbbe306",content,!0,{sourceMap:!1})},368:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("00ce0ffe",content,!0,{sourceMap:!1})},369:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("7ca4dd8a",content,!0,{sourceMap:!1})},370:function(t,e,n){"use strict";n(367)},371:function(t,e,n){var o=n(38)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.slideroneborder{\n  overflow:hidden;\n  position:relative;\n  width:1112px;\n  height:100%\n}\n.slideroneborder .item{\n  position:absolute;\n  top:0;\n  right:0;\n  left:0;\n  bottom:0;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  width:100%;\n  height:95%\n}\n.slideroneborder .item:first-of-type{\n  position:relative\n}\n.slidercontainer{\n  position:absolute;\n  width:95%;\n  border:1px solid #e3edf3;\n  box-shadow:1px 1px 22px -9px rgba(201,208,212,.75);\n  padding:42px 25px;\n  border-radius:42px;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  background:#fff\n}\n.slidercardtitle{\n  text-align:center;\n  font-size:2rem;\n  margin-bottom:15px\n}\n.slideronebordersbutitle{\n  width:1000px;\n  height:120px;\n  max-height:120px;\n  text-align:center;\n  font-size:8px\n}\n.slideroneborderbuttton{\n  color:#5a5a5a;\n  font-weight:600;\n  font-size:1rem\n}\n.dotgroup,.slideroneborderbuttton{\n  display:flex;\n  justify-content:center\n}\n.dotgroup{\n  right:0;\n  bottom:8px;\n  left:0\n}\n.dotgroup a{\n  display:block;\n  margin-right:8px;\n  margin-left:8px;\n  width:16px;\n  height:16px;\n  background:#2c8dc9;\n  border:2px solid #2c8dc9;\n  border-radius:50%;\n  transition:.3s\n}\n.dotgroup a.active,.dotgroup a:hover{\n  background:#fff\n}\n.carousel-next-enter-active,.carousel-next-leave-active,.carousel-prev-enter-active,.carousel-prev-leave-active{\n  transition:transform 1s cubic-bezier(.215,.61,.355,1);\n  will-change:transform\n}\n.carousel-next-enter,.carousel-prev-leave-to{\n  transform:translateX(100%)\n}\n.carousel-next-leave-to,.carousel-prev-enter{\n  transform:translateX(-100%)\n}\n@media screen and (max-width:576px){\n.slidercardtitle{\n    font-size:1.5rem\n}\n.slideronebordersbutitle{\n    width:80%\n}\n.slideroneborderbuttton{\n    text-align:center\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},372:function(t,e,n){var content=n(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("a01042c4",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n.r(e);n(234),n(82);var o={props:{hone:{type:Object,default:function(){}},honetitle:{type:Object,default:function(){}}},data:function(){return{datas:[{id:"1",title:{titleelement:"intel",titlestyle:""},subtitle:{subtitleelement:"just test",subtitlestyle:""},button:{buttonelement:"– Bala Chandrasekaran, Director",buttonstyle:"",buttonlink:"/"}},{id:"2",title:{titleelement:"google",titlestyle:""},subtitle:{subtitleelement:"do not test",subtitlestyle:""},button:{buttonelement:"- Danny Lai, Vice President, Head of Marketing & Strategic Projects",buttonstyle:"",buttonlink:"/"}},{id:"3",title:{titleelement:"facebook",titlestyle:""},subtitle:{subtitleelement:"do you like it",subtitlestyle:""},button:{buttonelement:"– Joseph Phua, CEO",buttonstyle:"",buttonlink:"/"}},{id:"4",title:{titleelement:"telegram",titlestyle:""},subtitle:{subtitleelement:"talk to me",subtitlestyle:""},button:{buttonelement:"– Latif Sim, Chief Information Officer",buttonstyle:"",buttonlink:"/"}},{id:"5",title:{titleelement:"line",titlestyle:""},subtitle:{subtitleelement:"hi ding dong",subtitlestyle:""},button:{buttonelement:"- Danny Lai, Vice President, Head of Marketing & Strategic Projects",buttonstyle:"",buttonlink:"/"}}],carouselName:"carousel-next",len:0,show:0,xDown:null,yDown:null,autoplay:!1,timer:null,timerDelay:3e3,toggleTimer:!0}},mounted:function(){this.len=this.datas.length,this.autoplay="true"===this.$refs.carousel.dataset.auto,this.timerDelay=Number(this.$refs.carousel.dataset.delay)||3e3,this.autoplay&&this.autoPlay()},methods:{toNext:function(){this.carouselName="carousel-next",this.show+1>=this.len?this.show=0:this.show=this.show+1},toPrev:function(){this.carouselName="carousel-prev",this.show-1<0?this.show=this.len-1:this.show=this.show-1},touchStart:function(t){this.xDown=t.touches[0].clientX,this.yDown=t.touches[0].clientY,window.console.log(t.touches[0].clientX)},touchMove:function(t){if(this.xDown&&this.yDown){var e=t.touches[0].clientX,n=t.touches[0].clientY,o=this.xDown-e,l=this.yDown-n;Math.abs(o)>Math.abs(l)&&(o>0?this.toNext():this.toPrev()),this.xDown=null,this.yDown=null}},autoPlay:function(){var t=this;setInterval((function(){t.toggleTimer&&t.toNext()}),this.timerDelay)}}},l=(n(370),n(16)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"carousel",staticClass:"slideroneborder",attrs:{"data-auto":"true","data-delay":"5000"},on:{mouseenter:function(e){e.stopPropagation(),t.toggleTimer=!1},mouseleave:function(e){e.stopPropagation(),t.toggleTimer=!0},touchstart:function(e){return e.stopPropagation(),t.touchStart.apply(null,arguments)},touchmove:function(e){return e.stopPropagation(),t.touchMove.apply(null,arguments)}}},[n("keep-alive",[n("transition",{attrs:{name:t.carouselName}},t._l(t.datas,(function(data,i){return t.show==i?n("div",{key:i,staticClass:"item"},[n("div",{staticClass:"slidercontainer"},[n("h1",{staticClass:"slidercardtitle"},[t._v("\n            "+t._s(data.title.titleelement)+"\n          ")]),t._v(" "),n("p",{staticClass:"slideronebordersbutitle"},[t._v("\n            Featured among Singapore’s Top IT companies by Connectbit for Tuple’s new approach to AI Technology Innovation.\n          ")]),t._v(" "),n("p",{staticClass:"slideroneborderbuttton"},[t._v("\n            "+t._s(data.button.buttonelement)+"\n          ")])])]):t._e()})),0)],1),t._v(" "),n("div",{staticClass:"dotgroup"},t._l(t.len,(function(data,i){return n("a",{key:i,class:{active:t.show==i},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.show=i}}})})),0)],1)}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,n){"use strict";n(368)},387:function(t,e,n){var o=n(38)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.slideroneborderhidden{\n  overflow:hidden;\n  margin-top:20px;\n  width:100%;\n  height:420px;\n  position:relative;\n  display:flex;\n  justify-content:center;\n  margin-bottom:25px\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},388:function(t,e,n){"use strict";n(369)},389:function(t,e,n){var o=n(38)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.sliderbuttononeborder{\n  margin:10px 0 55px\n}\n.sliderbuttonone{\n  background:linear-gradient(90deg,#145484 50%,#1868a4 0);\n  background-size:200% 100%;\n  background-position:100% 100%;\n  font-weight:bolder;\n  padding:15px 50px;\n  border-radius:30px;\n  transition:all .5s ease-out;\n  color:#fff\n}\n.sliderbuttonone:hover{\n  background-position:0 100%;\n  cursor:pointer\n}\n.sliderbuttonone:not(:hover){\n  background-position:100% 100%\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},391:function(t,e,n){"use strict";n.r(e);var o={props:{hone:{type:Object,default:function(){}},honetitle:{type:Object,default:function(){}}}},l=(n(386),n(16)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slideroneborderhidden"},[e("ElementSliderOneCard")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ElementSliderOneCard:n(385).default})},392:function(t,e,n){"use strict";n.r(e);n(82);var o={props:{hone:{type:Object,default:function(){}},honetitle:{type:Object,default:function(){}}},methods:{reload:function(){setTimeout((function(){window.location.reload()}),500)}}},l=(n(388),n(16)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sliderbuttononeborder",on:{click:t.reload}},[n("nuxt-link",{staticClass:"sliderbuttonone",attrs:{to:"/"}},[t._v(" Meet Our Clients ")])],1)}),[],!1,null,null,null);e.default=component.exports},396:function(t,e,n){"use strict";n(372)},397:function(t,e,n){var o=n(38)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.slideronepart{\n  width:100%;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  background:#fff;\n  position:relative;\n  overflow:hidden\n}\n.slideronetitle{\n  margin-top:20px;\n  font-size:2.5em;\n  font-weight:700\n}\n.slideronesubtitle{\n  margin-top:10px;\n  font-size:12px\n}\n@media screen and (max-width:768px){\n.slideronetitle{\n    font-size:2rem;\n    text-align:center\n}\n.slideronesubtitle{\n    width:80%;\n    text-align:center\n}\n}\n@media screen and (max-width:576px){\n.slideronetitle{\n    font-size:1.3rem;\n    text-align:center\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},446:function(t,e,n){"use strict";n.r(e);var o={},l=(n(396),n(16)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slideronepart",attrs:{id:"slideronepart"}},[n("h1",{staticClass:"slideronetitle"},[t._v("See What Our Clients Are Saying")]),t._v(" "),n("h3",{staticClass:"slideronesubtitle"},[t._v("Take an inside look at how Industry leaders leveraged Tuple's Data Science Platform to achieve real results.")]),t._v(" "),n("ElementSliderOneBorder"),t._v(" "),n("ElementSliderOneButton")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ElementSliderOneBorder:n(391).default,ElementSliderOneButton:n(392).default})}}]);