(window.webpackJsonp=window.webpackJsonp||[]).push([[36,35],{400:function(e,n,t){e.exports=t.p+"img/news.abc737a.jpg"},435:function(e,n,t){var content=t(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(34).default)("72004c90",content,!0,{sourceMap:!1})},466:function(e,n,t){var content=t(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(34).default)("44d5468a",content,!0,{sourceMap:!1})},467:function(e,n,t){"use strict";t(435)},468:function(e,n,t){var o=t(33)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\na[data-v-526e4f98]{\n  color:#0cf\n}\n.news-card[data-v-526e4f98]{\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  width:100%;\n  height:250px;\n  background:rgba(39,50,68,.75);\n  padding:2rem;\n  align-items:center;\n  border-left:1px solid #369;\n  border-right:1px solid #369\n}\n.news-title[data-v-526e4f98]{\n  font-size:1.5rem;\n  font-weight:600;\n  color:#369\n}\n.news-desc[data-v-526e4f98]{\n  font-size:1rem;\n  color:#fff\n}\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},491:function(e,n,t){"use strict";t.r(n);var o={props:{newsItem:{type:Object,default:null}}},r=(t(467),t(13)),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"news-card"},[t("div",{staticClass:"news-title"},[e._v(e._s(e.newsItem.title))]),e._v(" "),t("div",{staticClass:"news-desc"},[e._v(e._s(e.newsItem.description))]),e._v(" "),t("a",{staticClass:"read-more",attrs:{href:e.newsItem.link,target:"_blank"}},[e._v("Read More")])])}),[],!1,null,"526e4f98",null);n.default=component.exports},520:function(e,n,t){"use strict";t(466)},521:function(e,n,t){var o=t(33),r=t(424),c=t(400),l=o((function(i){return i[1]})),d=r(c);l.push([e.i,"/*purgecss start ignore*/\n.news-container[data-v-4fc0e3f5]{\n  width:100%;\n  padding:4% 15%;\n  background-image:linear-gradient(rgba(51,102,153,.5),#273244),url("+d+");\n  background-size:cover;\n  background-position-y:50%\n}\n.news-container-title[data-v-4fc0e3f5]{\n  text-align:center;\n  font-size:2rem;\n  color:#fff;\n  padding:1rem\n}\n.hooper[data-v-4fc0e3f5]{\n  height:auto\n}\n\n/*purgecss end ignore*/",""]),l.locals={},e.exports=l},578:function(e,n,t){"use strict";t.r(n);var o=t(498),r={components:{Hooper:o.a,Slide:o.d,HooperPagination:o.c},data:function(){return{hooperSettings:{centerMode:!0,itemsToShow:2,wheelControl:!1,autoPlay:"true",playSpeed:4e3,trimWhiteSpace:!0}}}},c=(t(520),t(13)),component=Object(c.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"news-container"},[t("div",{staticClass:"news-container-title"},[e._v(e._s(e.$t("index.news.title")))]),e._v(" "),t("hooper",{attrs:{settings:e.hooperSettings}},[e._l(e.$t("index.news.items"),(function(e,i){return t("slide",{key:i,attrs:{index:i}},[t("NewsCard",{attrs:{"news-item":e}})],1)})),e._v(" "),t("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1)}),[],!1,null,"4fc0e3f5",null);n.default=component.exports;installComponents(component,{NewsCard:t(491).default})}}]);