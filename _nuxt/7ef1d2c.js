(window.webpackJsonp=window.webpackJsonp||[]).push([[48,31,33],{364:function(n,t,e){n.exports=e.p+"img/indexFirstBackground.fee8d0e.jpeg"},369:function(n,t,e){n.exports=e.p+"img/awards.ebc7ea7.jpg"},370:function(n,t,e){n.exports=e.p+"img/about-us.0442863.jpg"},371:function(n,t,e){var map={"./about-us.jpg":370,"./awards.jpg":369,"./image11.png":372,"./image12.png":373,"./image13.png":374,"./indexFirstBackground.jpeg":364,"./technology.jpeg":375,"./technologytwo.jpeg":376};function o(n){var t=c(n);return e(t)}function c(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=c,n.exports=o,o.id=371},372:function(n,t,e){n.exports=e.p+"img/image11.fcccb58.png"},373:function(n,t,e){n.exports=e.p+"img/image12.7a7339a.png"},374:function(n,t,e){n.exports=e.p+"img/image13.1ef038b.png"},375:function(n,t,e){n.exports=e.p+"img/technology.840a9b0.jpeg"},376:function(n,t,e){n.exports=e.p+"img/technologytwo.8232b07.jpeg"},377:function(n,t,e){var content=e(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("7e96cd33",content,!0,{sourceMap:!1})},382:function(n,t,e){var content=e(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("b15ae2ac",content,!0,{sourceMap:!1})},397:function(n,t,e){"use strict";e(377)},398:function(n,t,e){var o=e(38)((function(i){return i[1]}));o.push([n.i,'/*purgecss start ignore*/\n.items-container[data-v-dcbb0c7e]{\n  display:flex;\n  flex-direction:column;\n  align-items:center\n}\n.g-item-container[data-v-dcbb0c7e]{\n  display:flex;\n  justify-content:space-between;\n  padding-top:8rem\n}\n.g-item-image[data-v-dcbb0c7e]{\n  width:49%;\n  max-height:360px;\n  overflow:hidden;\n  opacity:1;\n  transform:translateX(0);\n  transition:all .6s ease-in-out;\n  justify-content:center\n}\n.g-item-container:nth-child(2n)>.g-item-image[data-v-dcbb0c7e]{\n  order:2\n}\n.g-item-content-container[data-v-dcbb0c7e]{\n  width:49%;\n  display:flex;\n  flex-direction:column;\n  align-items:flex-start;\n  opacity:1;\n  transform:translateX(0);\n  transition:all .6s ease-in-out\n}\n.g-item-image-active[data-v-dcbb0c7e]{\n  opacity:0;\n  transform:translateX(-270px)\n}\n.g-item-content-container-active[data-v-dcbb0c7e]{\n  opacity:0;\n  transform:translateX(270px)\n}\n.g-item-title[data-v-dcbb0c7e]{\n  color:#369;\n  font-size:1.74rem;\n  line-height:2.5;\n  font-weight:500;\n  position:relative;\n  opacity:1;\n  transform:translateX(0);\n  transition:all 1s ease\n}\n.g-item-title-active[data-v-dcbb0c7e]{\n  opacity:0;\n  transform:translateX(70px)\n}\n.g-item-title[data-v-dcbb0c7e]:before{\n  position:absolute;\n  content:"";\n  width:83px;\n  height:3px;\n  background:#369\n}\n.g-item-subtitle[data-v-dcbb0c7e]{\n  font-size:16px;\n  font-weight:300;\n  opacity:1;\n  transform:translateX(0);\n  transition:all 1.2s ease\n}\n.g-item-subtitle-active[data-v-dcbb0c7e]{\n  opacity:0;\n  transform:translateX(90px)\n}\n@media screen and (max-width:1200px){\n.g-item-container[data-v-dcbb0c7e]{\n    width:100%;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n    padding-top:50px\n}\n.g-item-title[data-v-dcbb0c7e]:before{\n    position:absolute;\n    content:"";\n    width:0;\n    height:3px\n}\n.g-item-image[data-v-dcbb0c7e]{\n    width:100%;\n    order:1;\n    align-items:center\n}\n.g-item-content-container[data-v-dcbb0c7e]{\n    width:100%;\n    order:2\n}\n}\n\n/*purgecss end ignore*/',""]),o.locals={},n.exports=o},404:function(n,t,e){"use strict";e.r(t);e(8),e(28);var o={props:{content:{default:function(){return[]},type:Array}},mounted:function(){this.scrollItem()},methods:{imagePath:function(n){return"require(@/assets/images/".concat(n,")")},scrollItem:function(){window.addEventListener("scroll",(function(){var n=document.querySelectorAll(".g-item-container"),t=document.querySelectorAll(".g-item-image"),e=document.querySelectorAll(".g-item-content-container"),o=document.querySelectorAll(".g-item-title"),c=document.querySelectorAll(".g-item-subtitle");n.forEach((function(n,r){n.offsetTop-scrollY>200&&n.offsetTop-scrollY<550&&(t[r].classList.remove("g-item-image-active"),e[r].classList.remove("g-item-content-container-active"),o[r].classList.remove("g-item-title-active"),c[r].classList.remove("g-item-subtitle-active"))}))}))}}},c=(e(397),e(16)),component=Object(c.a)(o,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"items-container"},n._l(n.content,(function(t,c){return o("div",{key:c,staticClass:"g-item-container"},[o("div",{staticClass:"g-item-image g-item-image-active"},[o("img",{staticClass:"g-img",attrs:{src:e(371)("./"+t.img)}})]),n._v(" "),o("div",{staticClass:"g-item-content-container g-item-content-container-active"},[o("h1",{staticClass:"g-item-title g-item-title-active"},[n._v("\n        "+n._s(t.title)+"\n      ")]),n._v(" "),o("p",{staticClass:"g-item-subtitle g-item-subtitle-active",domProps:{innerHTML:n._s(t.subtitle)}})])])})),0)}),[],!1,null,"dcbb0c7e",null);t.default=component.exports},408:function(n,t,e){"use strict";e(382)},409:function(n,t,e){var o=e(38)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.splash-title[data-v-5f23c9f5]{\n  font-weight:600;\n  font-size:4.5rem;\n  margin-bottom:4rem;\n  color:#fff;\n  text-align:center;\n  -webkit-animation:fadeIn-data-v-5f23c9f5 2s linear;\n          animation:fadeIn-data-v-5f23c9f5 2s linear\n}\n.splash-content[data-v-5f23c9f5]{\n  color:#fff;\n  margin:1rem 0;\n  -webkit-animation:subtitleTransition-data-v-5f23c9f5 1s;\n          animation:subtitleTransition-data-v-5f23c9f5 1s;\n  font-size:1.5rem;\n  padding:0 25%\n}\n.company-part-container[data-v-5f23c9f5]{\n  width:100%;\n  min-height:850px;\n  display:flex;\n  flex-direction:column;\n  justify-content:flex-start;\n  align-items:center;\n  height:100vh;\n  padding:8rem 0 4rem;\n  background-size:cover\n}\n@-webkit-keyframes fadeIn-data-v-5f23c9f5{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n@keyframes fadeIn-data-v-5f23c9f5{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n@-webkit-keyframes subtitleTransition-data-v-5f23c9f5{\n0%{\n    transform:translate(100%);\n    opacity:0\n}\nto{\n    transform:translate(0);\n    opacity:1\n}\n}\n@keyframes subtitleTransition-data-v-5f23c9f5{\n0%{\n    transform:translate(100%);\n    opacity:0\n}\nto{\n    transform:translate(0);\n    opacity:1\n}\n}\n@media screen and (max-width:1200px){\n.company-part-container[data-v-5f23c9f5]{\n    background-size:150%\n}\n.splash-content[data-v-5f23c9f5]{\n    padding:0 15%\n}\n}\n@media screen and (max-width:992px){\n.company-part-container[data-v-5f23c9f5]{\n    background-size:200%\n}\n.splash-content[data-v-5f23c9f5]{\n    padding:0 15%\n}\n}\n@media screen and (max-width:768px){\n.company-part-container[data-v-5f23c9f5]{\n    background-size:250%\n}\n.splash-title[data-v-5f23c9f5]{\n    font-size:3.5rem\n}\n.splash-content[data-v-5f23c9f5]{\n    padding:0 8%\n}\n}\n@media screen and (max-width:576px){\n.company-part-container[data-v-5f23c9f5]{\n    background-size:270%;\n    min-height:320px\n}\n.splash-title[data-v-5f23c9f5]{\n    font-size:3rem;\n    text-align:left\n}\n.splash-content[data-v-5f23c9f5]{\n    padding:0 8%\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},461:function(n,t,e){"use strict";e.r(t);var o={props:{title:{type:String,default:"{title} props goes here"},contents:{type:Array,default:function(){return["{content} props needed"]}}},computed:{background:function(){return{}}}},c=(e(408),e(16)),component=Object(c.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"company-part-container"},[e("h1",{staticClass:"splash-title"},[n._v(n._s(n.title))]),n._v(" "),n._l(n.contents,(function(content,t){return e("p",{key:t,staticClass:"splash-content"},[n._v("\n    "+n._s(content)+"\n  ")])}))],2)}),[],!1,null,"5f23c9f5",null);t.default=component.exports},475:function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},520:function(n,t,e){var content=e(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("3962d698",content,!0,{sourceMap:!1})},554:function(n,t,e){"use strict";e(520)},555:function(n,t,e){var o=e(38),c=e(475),r=e(369),l=o((function(i){return i[1]})),d=c(r);l.push([n.i,"/*purgecss start ignore*/\n.awards-container[data-v-b8cf7de8]{\n  overflow:hidden;\n  padding-bottom:8%\n}\n[data-v-b8cf7de8] .company-part-container{\n  background-image:linear-gradient(rgba(51,102,153,.75),#273244),url("+d+")\n}\n[data-v-b8cf7de8] .g-item-container:nth-child(2n)>.g-item-image{\n  order:0\n}\n@media screen and (max-width:1200px){\n[data-v-b8cf7de8] .g-item-content-container{\n    align-items:center\n}\n[data-v-b8cf7de8] .g-img{\n    margin-left:auto;\n    margin-right:auto\n}\n}\n\n/*purgecss end ignore*/",""]),l.locals={},n.exports=l},607:function(n,t,e){"use strict";e.r(t);var o={},c=(e(554),e(16)),component=Object(c.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("main",{staticClass:"awards-container"},[e("LandingComponent",{attrs:{title:n.$t("awards.landingTitle"),contents:n.$t("awards.landingContent")}}),n._v(" "),e("SlideInContent",{attrs:{content:n.$t("awards.content")}})],1)}),[],!1,null,"b8cf7de8",null);t.default=component.exports;installComponents(component,{LandingComponent:e(461).default,SlideInContent:e(404).default})}}]);