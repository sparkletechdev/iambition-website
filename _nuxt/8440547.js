(window.webpackJsonp=window.webpackJsonp||[]).push([[37,36],{403:function(n,e,t){n.exports=t.p+"img/news.abc737a.jpg"},453:function(n,e,t){var content=t(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(34).default)("06c136df",content,!0,{sourceMap:!1})},471:function(n,e,t){var content=t(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(34).default)("78c28774",content,!0,{sourceMap:!1})},472:function(n,e,t){"use strict";t(453)},473:function(n,e,t){var o=t(33)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\na[data-v-32630e55]{\n  color:#0cf\n}\n.news-card[data-v-32630e55]{\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  width:100%;\n  height:20rem;\n  background:rgba(39,50,68,.75);\n  padding:2rem;\n  align-items:center;\n  border-left:1px solid #369;\n  border-right:1px solid #369\n}\n.news-title[data-v-32630e55]{\n  font-size:1.5rem;\n  font-weight:600;\n  color:#369\n}\n.news-desc[data-v-32630e55]{\n  color:#fff;\n  overflow:auto;\n  text-overflow:ellipsis;\n  margin:.5rem 0\n}\n@media screen and (max-width:992px){\n.news-title[data-v-32630e55]{\n    font-size:1.25rem;\n    font-weight:600;\n    color:#369\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},503:function(n,e,t){"use strict";t.r(e);t(24),t(41),t(250);var o={props:{newsItem:{type:Object,default:null}}},r=(t(472),t(13)),component=Object(r.a)(o,(function(){var n=this,e=n._self._c;return e("div",{staticClass:"news-card"},[e("div",{staticClass:"news-title"},[n._v(n._s(n.newsItem.title))]),n._v(" "),e("div",{staticClass:"news-desc"},[n._v(n._s(n.newsItem.description))]),n._v(" "),e("a",{staticClass:"read-more",attrs:{href:n.newsItem.link,target:"_blank"}},[n._v(n._s(n.$t("index.news.readMore")))])])}),[],!1,null,"32630e55",null);e.default=component.exports},519:function(n,e,t){"use strict";t(471)},520:function(n,e,t){var o=t(33),r=t(521),c=t(403),d=o((function(i){return i[1]})),l=r(c);d.push([n.i,"/*purgecss start ignore*/\n.news-container[data-v-a093ea56]{\n  width:100%;\n  padding:4% 15%;\n  background-image:linear-gradient(rgba(51,102,153,.5),#273244),url("+l+");\n  background-size:cover;\n  background-position-y:50%\n}\n.news-container-title[data-v-a093ea56]{\n  text-align:center;\n  font-size:2rem;\n  color:#fff;\n  padding:1rem\n}\n.hooper[data-v-a093ea56]{\n  height:auto\n}\n@media screen and (max-width:1200px){\n.news-container[data-v-a093ea56]{\n    padding:4% 8%\n}\n}\n@media screen and (max-width:992px){\n.news-container[data-v-a093ea56]{\n    padding:4% 0\n}\n.news-container-title[data-v-a093ea56]{\n    text-align:center;\n    font-size:1.5rem;\n    color:#fff;\n    padding:1rem\n}\n}\n\n/*purgecss end ignore*/",""]),d.locals={},n.exports=d},521:function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},605:function(n,e,t){"use strict";t.r(e);var o=t(500),r={components:{Hooper:o.a,Slide:o.e,HooperPagination:o.c},data:function(){return{hooperSettings:{centerMode:!0,itemsToShow:1,wheelControl:!1,autoPlay:"true",playSpeed:2e3,trimWhiteSpace:!0,breakpoints:{1e3:{itemsToShow:2}}}}}},c=(t(519),t(13)),component=Object(c.a)(r,(function(){var n=this,e=n._self._c;return e("div",{staticClass:"news-container"},[e("div",{staticClass:"news-container-title"},[n._v(n._s(n.$t("index.news.title")))]),n._v(" "),e("hooper",{attrs:{settings:n.hooperSettings}},[n._l(n.$t("index.news.items"),(function(n,i){return e("slide",{key:i,attrs:{index:i}},[e("NewsCard",{attrs:{"news-item":n}})],1)})),n._v(" "),e("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1)}),[],!1,null,"a093ea56",null);e.default=component.exports;installComponents(component,{NewsCard:t(503).default})}}]);