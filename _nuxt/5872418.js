(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{469:function(n,t,e){var content=e(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(34).default)("76dbece0",content,!0,{sourceMap:!1})},522:function(n,t,e){"use strict";e(469)},523:function(n,t,e){var c=e(33)((function(i){return i[1]}));c.push([n.i,"/*purgecss start ignore*/\n.ilc-container{\n  width:100%;\n  display:flex;\n  justify-content:center;\n  padding:4rem 10%\n}\n.ilc-content{\n  display:flex;\n  flex-direction:column\n}\n.ilc-title{\n  text-align:center;\n  color:#369;\n  font-size:2.5rem;\n  font-weight:700;\n  margin-bottom:3rem\n}\n.ilc-text-container{\n  display:flex\n}\n.ilc-text{\n  width:50%\n}\n.ilc-paragraph{\n  font-size:1.2rem;\n  font-weight:700;\n  line-height:1.7;\n  margin-bottom:20px\n}\n.ilc-image-container{\n  width:50%;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  order:1\n}\n.ilc-image{\n  width:90%\n}\n.ilc-image:hover{\n  box-shadow:0 5px 15px rgba(0,0,0,.35);\n  opacity:.8;\n  transition:all .4s ease-in-out\n}\n.ilc-image:not(:hover){\n  box-shadow:none;\n  opacity:1;\n  transition:all .4s ease-in-out\n}\n@media screen and (max-width:1200px){\n.ilc-container{\n    padding:3rem 8%\n}\n.ilc-title{\n    font-size:2.5rem\n}\n}\n@media screen and (max-width:992px){\n.ilc-title{\n    margin-bottom:50px\n}\n.ilc-text-container{\n    display:flex;\n    flex-direction:column;\n    align-items:center\n}\n.ilc-text{\n    width:90%\n}\n.ilc-image-container{\n    margin-bottom:45px;\n    width:90%\n}\n}\n@media screen and (max-width:786px){\n.ilc-title{\n    font-size:2rem\n}\n.ilc-image{\n    width:90%\n}\n}\n@media screen and (max-width:576px){\n.ilc-container{\n    padding:2rem 10%\n}\n}\n\n/*purgecss end ignore*/",""]),c.locals={},n.exports=c},579:function(n,t,e){"use strict";e.r(t);e(167),e(49);var c=e(481),o={components:{FsLightbox:e.n(c).a},props:{section:{default:function(){},type:Object},alignLeft:{default:Number,type:Boolean}},data:function(){return{toggler:!1}},computed:{order:function(){var n=this.alignLeft?0:2;return{order:"".concat(n)}}},methods:{lightboxImages:function(){var n=this;return this.section.images.map((function(image){return n.staticPath(image)}))}}},l=(e(522),e(13)),component=Object(l.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"ilc-container"},[e("FsLightbox",{attrs:{toggler:n.toggler,sources:n.lightboxImages()}}),n._v(" "),e("div",{staticClass:"ilc-content"},[e("h1",{staticClass:"ilc-title"},[n._v(n._s(n.section.title))]),n._v(" "),e("div",{staticClass:"ilc-text-container"},[e("div",{staticClass:"ilc-text",style:n.order},n._l(n.section.content,(function(t,c){return e("p",{key:c,staticClass:"ilc-paragraph"},[n._v("\n          "+n._s(t)+"\n        ")])})),0),n._v(" "),e("div",{staticClass:"ilc-image-container"},[1===n.section.images.length?e("img",{staticClass:"ilc-image",attrs:{src:n.staticPath(n.section.images[0])},on:{click:function(t){n.toggler=!n.toggler}}}):n.section.images.length>0?e("stack",{attrs:{"column-min-width":480,"gutter-width":8,"gutter-height":8,"monitor-images-loaded":!0}},n._l(n.section.images,(function(image,i){return e("stack-item",{key:i},[e("img",{staticClass:"ilc-image",attrs:{src:n.staticPath(image),alt:image.alt},on:{click:function(t){n.toggler=!n.toggler}}})])})),1):n._e()],1)])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);