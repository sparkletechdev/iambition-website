(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4,33],{387:function(n,t,e){n.exports=e.p+"img/indexFirstBackground.fee8d0e.jpeg"},388:function(n,t,e){n.exports=e.p+"img/mission-statement.7faea0b.jpg"},389:function(n,t,e){n.exports=e.p+"img/contact-us.1eafaae.jpg"},390:function(n,t,e){n.exports=e.p+"img/about-us.0442863.jpg"},391:function(n,t,e){n.exports=e.p+"img/awards.ebc7ea7.jpg"},393:function(n,t,e){var map={"./about-us.jpg":390,"./awards.jpg":391,"./contact-us.jpg":389,"./customer-first.jpg":394,"./image11.png":395,"./image12.png":396,"./image13.png":397,"./indexFirstBackground.jpeg":387,"./integrity.jpg":398,"./mission-statement.jpg":388,"./people-oriented.jpg":399,"./sustainability.jpg":400,"./technology.jpeg":401,"./technologytwo.jpeg":402};function o(n){var t=r(n);return e(t)}function r(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=393},394:function(n,t,e){n.exports=e.p+"img/customer-first.d38e5ae.jpg"},395:function(n,t,e){n.exports=e.p+"img/image11.fcccb58.png"},396:function(n,t,e){n.exports=e.p+"img/image12.7a7339a.png"},397:function(n,t,e){n.exports=e.p+"img/image13.1ef038b.png"},398:function(n,t,e){n.exports=e.p+"img/integrity.8c458d8.jpg"},399:function(n,t,e){n.exports=e.p+"img/people-oriented.e557de0.jpg"},400:function(n,t,e){n.exports=e.p+"img/sustainability.4c07304.jpg"},401:function(n,t,e){n.exports=e.p+"img/technology.840a9b0.jpeg"},402:function(n,t,e){n.exports=e.p+"img/technologytwo.8232b07.jpeg"},411:function(n,t,e){var content=e(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(40).default)("60850a20",content,!0,{sourceMap:!1})},439:function(n,t,e){"use strict";e(411)},440:function(n,t,e){var o=e(39)((function(i){return i[1]}));o.push([n.i,'/*purgecss start ignore*/\n.items-container[data-v-665ee189]{\n  display:flex;\n  flex-direction:column;\n  align-items:center\n}\n.g-item-container[data-v-665ee189]{\n  display:flex;\n  justify-content:space-between;\n  padding-top:8rem\n}\n.g-item-image[data-v-665ee189]{\n  width:49%;\n  max-height:360px;\n  overflow:hidden;\n  opacity:1;\n  transform:translateX(0);\n  transition:all .6s ease-in-out;\n  justify-content:center\n}\n.g-item-container:nth-child(2n)>.g-item-image[data-v-665ee189]{\n  order:2\n}\n.g-item-content-container[data-v-665ee189]{\n  width:49%;\n  display:flex;\n  flex-direction:column;\n  align-items:flex-start;\n  opacity:1;\n  transform:translateX(0);\n  transition:all .6s ease-in-out\n}\n.g-item-image-active[data-v-665ee189]{\n  opacity:0;\n  transform:translateX(-270px)\n}\n.g-item-content-container-active[data-v-665ee189]{\n  opacity:0;\n  transform:translateX(270px)\n}\n.g-item-title[data-v-665ee189]{\n  color:#369;\n  font-size:1.74rem;\n  line-height:2.5;\n  font-weight:500;\n  position:relative;\n  opacity:1;\n  transform:translateX(0);\n  transition:all 1s ease\n}\n.g-item-title-active[data-v-665ee189]{\n  opacity:0;\n  transform:translateX(70px)\n}\n.g-item-title[data-v-665ee189]:before{\n  position:absolute;\n  content:"";\n  width:83px;\n  height:3px;\n  background:#369\n}\n.g-item-subtitle[data-v-665ee189]{\n  font-size:16px;\n  font-weight:300;\n  opacity:1;\n  transform:translateX(0);\n  transition:all 1.2s ease\n}\n.g-item-subtitle-active[data-v-665ee189]{\n  opacity:0;\n  transform:translateX(90px)\n}\n@media screen and (max-width:1200px){\n.g-item-container[data-v-665ee189]{\n    width:100%;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n    padding-top:50px\n}\n.g-item-title[data-v-665ee189]:before{\n    position:absolute;\n    content:"";\n    width:0;\n    height:3px\n}\n.g-item-image[data-v-665ee189]{\n    width:100%;\n    order:1;\n    align-items:center\n}\n.g-item-content-container[data-v-665ee189]{\n    width:100%;\n    order:2;\n    align-items:center\n}\n.g-img[data-v-665ee189]{\n    margin-left:auto;\n    margin-right:auto\n}\n}\n\n/*purgecss end ignore*/',""]),o.locals={},n.exports=o},486:function(n,t,e){var content=e(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(40).default)("074d1a00",content,!0,{sourceMap:!1})},487:function(n,t,e){"use strict";e.r(t);e(9),e(32);var o={props:{content:{default:function(){return[]},type:Array}},mounted:function(){this.scrollItem()},methods:{scrollItem:function(){window.addEventListener("scroll",(function(){var n=document.querySelectorAll(".g-item-container"),t=document.querySelectorAll(".g-item-image"),e=document.querySelectorAll(".g-item-content-container"),o=document.querySelectorAll(".g-item-title"),r=document.querySelectorAll(".g-item-subtitle");n.forEach((function(n,c){n.offsetTop-scrollY>200&&n.offsetTop-scrollY<550&&(t[c].classList.remove("g-item-image-active"),e[c].classList.remove("g-item-content-container-active"),o[c].classList.remove("g-item-title-active"),r[c].classList.remove("g-item-subtitle-active"))}))}))}}},r=(e(439),e(18)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"items-container"},n._l(n.content,(function(t,r){return o("div",{key:r,staticClass:"g-item-container"},[o("div",{staticClass:"g-item-image g-item-image-active"},[o("img",{staticClass:"g-img",attrs:{src:e(393)("./"+t.img)}})]),n._v(" "),o("div",{staticClass:"g-item-content-container g-item-content-container-active"},[o("h1",{staticClass:"g-item-title g-item-title-active"},[n._v("\n        "+n._s(t.title)+"\n      ")]),n._v(" "),o("p",{staticClass:"g-item-subtitle g-item-subtitle-active",domProps:{innerHTML:n._s(t.subtitle)}})])])})),0)}),[],!1,null,"665ee189",null);t.default=component.exports},540:function(n,t,e){"use strict";e(486)},541:function(n,t,e){var o=e(39)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.clients-container[data-v-23a0ddee]{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  margin-top:8rem\n}\n.clients-content[data-v-23a0ddee]{\n  line-height:1.5;\n  font-weight:lighter;\n  text-align:center\n}\n.client-box[data-v-23a0ddee]{\n  margin:50px 0 55px\n}\n.clients-button[data-v-23a0ddee]{\n  background:linear-gradient(90deg,#145484 50%,#1868a4 0);\n  background-size:200% 100%;\n  background-position:100% 100%;\n  font-weight:bolder;\n  padding:15px 50px;\n  border-radius:30px;\n  transition:all .3s ease-out;\n  color:#fff;\n  outline:none\n}\n.clients-button[data-v-23a0ddee]:hover{\n  background-position:0 100%;\n  cursor:pointer\n}\n.clients-button[data-v-23a0ddee]:not(:hover){\n  background-position:100% 100%\n}\n@media screen and (max-width:1200px){\n.clients-container[data-v-23a0ddee]{\n    margin-top:5rem\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},556:function(n,t,e){var content=e(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(40).default)("5ccbc044",content,!0,{sourceMap:!1})},576:function(n,t,e){"use strict";e.r(t);e(540);var o=e(18),component=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"clients-container"},[n._m(0),n._v(" "),e("div",{ref:"companyGoingClients",staticClass:"client-box",on:{click:function(t){return n.customerReload()}}},[e("nuxt-link",{staticClass:"clients-button",attrs:{to:"/CUSTOMERS"}},[n._v("\n      Meet Our Clients\n    ")])],1)])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("p",{staticClass:"clients-content"},[n._v("\n      We are working with leading organizations to prepare them for a future\n      where utilizing the data is a necessity. We are designing products which\n      can withstand digital disruption and keep bringing value to the\n      companies willing to change with time.\n    ")])])}],!1,null,"23a0ddee",null);t.default=component.exports},606:function(n,t,e){"use strict";e(556)},607:function(n,t,e){var o=e(39)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.main-container[data-v-0ce64814]{\n  width:100%;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  padding:4% 25%\n}\n.content-container[data-v-0ce64814],.title-container[data-v-0ce64814]{\n  display:flex;\n  flex-direction:column;\n  align-items:center\n}\n.going-title[data-v-0ce64814]{\n  font-size:4rem;\n  font-weight:bolder;\n  line-height:1.2;\n  margin-bottom:.5rem\n}\n.going-subtitle[data-v-0ce64814]{\n  font-weight:300;\n  text-align:center\n}\n@media screen and (max-width:1200px){\n.main-container[data-v-0ce64814]{\n    padding:4% 15%\n}\n.going-title[data-v-0ce64814]{\n    font-size:3rem\n}\n}\n@media screen and (max-width:992px){\n.main-container[data-v-0ce64814]{\n    padding:4% 8%\n}\n.going-title[data-v-0ce64814]{\n    font-size:2.5rem\n}\n}\n@media screen and (max-width:576px){\n.main-container[data-v-0ce64814]{\n    padding:4% 8%\n}\n.title-container[data-v-0ce64814]{\n    padding:0\n}\n.going-title[data-v-0ce64814]{\n    font-size:1.75rem\n}\n.going-subtitle[data-v-0ce64814]{\n    font-size:.8rem\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},645:function(n,t,e){"use strict";e.r(t);var o={},r=(e(606),e(18)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"main-container"},[e("div",{staticClass:"content-container"},[e("div",{staticClass:"title-container"},[e("h1",{staticClass:"going-title"},[n._v(n._s(n.$t("company.aboutUs.going.title")))]),n._v(" "),e("p",{staticClass:"going-subtitle"},[n._v("\n        "+n._s(n.$t("company.aboutUs.going.subtitle"))+"\n      ")])]),n._v(" "),e("SlideInContent",{attrs:{content:n.$t("company.aboutUs.going.data")}}),n._v(" "),e("AboutMeetClient")],1)])}),[],!1,null,"0ce64814",null);t.default=component.exports;installComponents(component,{SlideInContent:e(487).default,AboutMeetClient:e(576).default})}}]);