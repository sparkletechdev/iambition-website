(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{442:function(t,e,n){var content=n(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("ac77ab72",content,!0,{sourceMap:!1})},504:function(t,e,n){"use strict";n(442)},505:function(t,e,n){var r=n(33)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.client-container[data-v-2f186407]{\n  padding:4rem 25% 0\n}\n.client-name[data-v-2f186407]{\n  font-size:2rem;\n  font-weight:600;\n  color:#369\n}\n.client-description[data-v-2f186407]{\n  margin:1.5rem 0\n}\n.client-video[data-v-2f186407]{\n  margin-bottom:1.5rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},578:function(t,e,n){"use strict";n.r(e);var r={props:{client:{default:null,type:Object}}},c=(n(504),n(13)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"client-container"},[n("div",{staticClass:"client-name",attrs:{id:t.client.id}},[t._v(t._s(t.client.clientName))]),t._v(" "),n("div",{staticClass:"client-description"},t._l(t.client.description,(function(desc,i){return n("p",{key:i},[t._v("\n      "+t._s(desc)+"\n    ")])})),0),t._v(" "),t.client.video?n("video",{staticClass:"client-video",attrs:{controls:"",autoplay:"",muted:""},domProps:{muted:!0}},[n("source",{attrs:{src:t.$store.state.baseUrl+t.client.video,type:"video/mp4"}})]):t._e(),t._v(" "),n("stack",{attrs:{"column-min-width":300,"gutter-width":8,"gutter-height":8,"monitor-images-loaded":!0}},t._l(t.client.images,(function(image,i){return n("stack-item",{key:i},[n("a",{attrs:{href:t.$store.state.baseUrl+image.path,target:"_blank"}},[n("img",{attrs:{src:t.$store.state.baseUrl+image.path,alt:image.alt}})])])})),1)],1)}),[],!1,null,"2f186407",null);e.default=component.exports}}]);