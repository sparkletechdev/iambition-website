(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{426:function(t,n,o){var content=o(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("07b7f2fc",content,!0,{sourceMap:!1})},438:function(t,n,o){"use strict";o(426)},439:function(t,n,o){var e=o(33)((function(i){return i[1]}));e.push([t.i,"/*purgecss start ignore*/\n.solution-button{\n  z-index:1;\n  font-size:16px;\n  background:linear-gradient(90deg,#369 50%,#fff 0);\n  background-size:200% 100%;\n  background-position:100% 100%;\n  color:#369;\n  padding:10px 50px;\n  border-radius:30px;\n  font-weight:800;\n  margin:10px 0;\n  transition:.4s\n}\n\n/*purgecss end ignore*/",""]),e.locals={},t.exports=e},440:function(t,n,o){"use strict";o.r(n);o(85);var e={props:{button:{type:Object,default:function(){}}},methods:{show:function(){var t=this.$refs;t.solutionButton.style.backgroundPosition="left bottom",t.solutionButton.style.cursor="pointer",t.solutionButton.style.color="white"},hide:function(){var t=this.$refs;t.solutionButton.style.backgroundPosition="right bottom",t.solutionButton.style.cursor="pointer",t.solutionButton.style.color="#369",t.solutionButton.style.transition=".2s"},reload:function(){setTimeout((function(){window.location.reload()}),500)}}},r=(o(438),o(13)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return t.button?o("div",{ref:"solutionButton",staticClass:"solution-button",on:{mouseenter:function(n){return t.show()},mouseleave:function(n){return t.hide()},click:t.reload}},[o("nuxt-link",{attrs:{to:t.localePath(""+t.button.link)}},[o("button",{attrs:{type:"button"}},[t._v("\n      "+t._s(t.button.button)+"\n    ")])])],1):t._e()}),[],!1,null,null,null);n.default=component.exports}}]);