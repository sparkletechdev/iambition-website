(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{465:function(n,t,e){var content=e(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(34).default)("2ea61257",content,!0,{sourceMap:!1})},512:function(n,t,e){"use strict";e(465)},513:function(n,t,e){var c=e(33)((function(i){return i[1]}));c.push([n.i,"/*purgecss start ignore*/\n.client-container[data-v-238836c6]{\n  padding:4rem 25% 0\n}\n.client-name[data-v-238836c6]{\n  font-size:2rem;\n  font-weight:600;\n  color:#369\n}\n.client-description[data-v-238836c6]{\n  margin:1.5rem 0\n}\n.client-video[data-v-238836c6]{\n  margin-bottom:1.5rem\n}\n.client-image[data-v-238836c6]{\n  cursor:zoom-in;\n  -o-object-fit:cover;\n     object-fit:cover;\n  height:100%;\n  width:100%\n}\n.client-image[data-v-238836c6]:hover{\n  box-shadow:0 5px 15px rgba(0,0,0,.35);\n  opacity:.8;\n  transition:all .2s ease-in-out\n}\n.client-image[data-v-238836c6]:not(:hover){\n  box-shadow:none;\n  opacity:1;\n  transition:all .2s ease-in-out\n}\n.client-image-grid[data-v-238836c6]{\n  display:grid;\n  grid-template-columns:repeat(3,1fr);\n  grid-auto-rows:300px;\n  gap:1rem\n}\n@media screen and (max-width:1200px){\n.client-image-grid[data-v-238836c6]{\n    grid-template-columns:repeat(2,1fr);\n    grid-auto-rows:300px\n}\n}\n@media screen and (max-width:992px){\n.client-image-grid[data-v-238836c6]{\n    grid-template-columns:repeat(1,1fr);\n    grid-auto-rows:300px\n}\n.client-container[data-v-238836c6]{\n    padding:4rem 8% 0\n}\n.client-name[data-v-238836c6]{\n    text-align:center\n}\n}\n\n/*purgecss end ignore*/",""]),c.locals={},n.exports=c},601:function(n,t,e){"use strict";e.r(t);e(24),e(41),e(49);var c=e(464),r={components:{FsLightbox:e.n(c).a},props:{client:{default:null,type:Object}},data:function(){return{toggler:!1,lbIndex:1}},methods:{lightboxImages:function(){var n=this;return this.client.images.map((function(image){return n.staticPath(image.path)}))},showLightbox:function(n){this.lbIndex=n+1,this.toggler=!this.toggler}}},o=(e(512),e(13)),component=Object(o.a)(r,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"client-container"},[t("FsLightbox",{attrs:{toggler:n.toggler,slide:n.lbIndex,sources:n.lightboxImages()}}),n._v(" "),t("div",{staticClass:"client-name",attrs:{id:n.client.id}},[n._v(n._s(n.client.clientName))]),n._v(" "),t("div",{staticClass:"client-description"},n._l(n.client.description,(function(desc,i){return t("p",{key:i},[n._v("\n        "+n._s(desc)+"\n      ")])})),0),n._v(" "),n.client.video?t("div",{staticClass:"client-video"},[t("iframe",{staticClass:"yt-vid",attrs:{frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope;",allowfullscreen:"",src:n.client.video}})]):n._e(),n._v(" "),t("div",{staticClass:"client-image-grid"},n._l(n.client.images,(function(image,i){return t("img",{key:i,staticClass:"client-image",attrs:{src:n.staticPath(image.path),alt:image.alt},on:{click:function(t){return n.showLightbox(i)}}})})),0)],1)}),[],!1,null,"238836c6",null);t.default=component.exports}}]);