(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{378:function(t,e,n){var content=n(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("1402e550",content,!0,{sourceMap:!1})},432:function(t,e,n){"use strict";n(378)},433:function(t,e,n){var l=n(50)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n.sliderborder{\n  height:100%;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-around;\n  align-items:center\n}\n.sliderbordercontain{\n  width:100%;\n  display:flex;\n  transition:.6s\n}\n.slidercardborder{\n  background-color:#fff;\n  padding:42px 25px;\n  border-radius:42px;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  margin:0 15px\n}\n.slidercardtitle{\n  text-align:center;\n  font-size:2rem;\n  margin-bottom:15px\n}\n.sliderbordersbutitle{\n  width:290px;\n  height:120px;\n  max-height:120px;\n  text-align:center;\n  font-size:8px\n}\n.sliderborderbuttton{\n  display:flex;\n  justify-content:center;\n  border-radius:30px;\n  background:linear-gradient(90deg,#145484 50%,#1868a4 0);\n  background-size:200% 100%;\n  background-position:100% 100%;\n  color:#fff;\n  padding:15px 50px;\n  font-weight:700;\n  width:60%;\n  transition:.4s\n}\n.sliderborderbuttton:hover{\n  background-position:0 100%\n}\n.sliderborderbuttton:not(:hover){\n  background-position:100% 100%\n}\n.sliderdotcontain{\n  display:flex\n}\n.sliderdotborder{\n  display:flex;\n  justify-content:center;\n  margin:0 15px\n}\n.dot{\n  width:20px;\n  height:20px;\n  border-radius:50%;\n  background-color:silver\n}\n.dot:hover{\n  cursor:pointer\n}\n.darkdot{\n  background-color:#2c8dc9\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},457:function(t,e,n){"use strict";n.r(e);n(83);var l={props:{hone:{type:Object,default:function(){}},honetitle:{type:Object,default:function(){}}},data:function(){return{datas:[{id:"1",title:{titleelement:"intel",titlestyle:""},subtitle:[{subtitleelement:"just test"},{subtitlestyle:""}],button:[{buttonelement:"read me"},{buttonstyle:""},{buttonlink:"/"}]},{id:"2",title:{titleelement:"google",titlestyle:""},subtitle:[{subtitleelement:"do not test"},{subtitlestyle:""}],button:[{buttonelement:"read me"},{buttonstyle:""},{buttonlink:"/"}]},{id:"3",title:{titleelement:"facebook",titlestyle:""},subtitle:[{subtitleelement:"do you like it"},{subtitlestyle:""}],button:[{buttonelement:"read me"},{buttonstyle:""},{buttonlink:"/"}]},{id:"4",title:{titleelement:"telegram",titlestyle:""},subtitle:[{subtitleelement:"talk to me"},{subtitlestyle:""}],button:[{buttonelement:"read me"},{buttonstyle:""},{buttonlink:"/"}]},{id:"5",title:{titleelement:"line",titlestyle:""},subtitle:[{subtitleelement:"hi ding dong"},{subtitlestyle:""}],button:[{buttonelement:"read me"},{buttonstyle:""},{buttonlink:"/"}]},{id:"6",title:{titleelement:"microsoft",titlestyle:""},subtitle:[{subtitleelement:"hello bye bye"},{subtitlestyle:""}],button:[{buttonelement:"read me"},{buttonstyle:""},{buttonlink:"/"}]},{id:"7",title:{titleelement:"test",titlestyle:""},subtitle:[{subtitleelement:"just test"},{subtitlestyle:""}],button:[{buttonelement:"read me"},{buttonstyle:""},{buttonlink:"/"}]}],index:0,stop:0}},mounted:function(){this.slider()},updated:function(){this.slider()},methods:{slider:function(i){var t=this,e=document.getElementsByClassName("sliderdotborder"),n=e.length;(e[n-1].style.display="none",e[n-2].style.display="none",0===document.getElementsByClassName("darkdot").length)&&document.getElementsByClassName("dot")[0].classList.add("darkdot");this.stop=setInterval((function(){t.index=t.index+1,5===t.index&&(t.index=0),void 0!==i&&(t.index=i,5===(i+=1)&&(i=0)),t.looppic(t.index),t.loopdot(t.index)}),1500)},looppic:function(i){this.$refs.sliderbordercontain.style.transform="translateX(-".concat(372*i,"px)")},loopdot:function(i){var t=document.getElementsByClassName("dot"),e=document.getElementsByClassName("darkdot");if(t[i].classList.add("darkdot"),e.length>=2){for(var n=0;n<t.length;n++)t[n].classList.remove("darkdot");t[i].classList.add("darkdot")}},mousehover:function(){clearInterval(this.stop)},mouseleave:function(){this.slider()},dotclick:function(i){clearInterval(this.stop),this.slider(i),this.looppic(i),this.loopdot(i)}}},o=(n(432),n(25)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sliderborder"},[n("div",{ref:"sliderbordercontain",staticClass:"sliderbordercontain",on:{mouseenter:function(e){return t.mousehover()},mouseleave:function(e){return t.mouseleave()}}},t._l(t.datas,(function(data){return n("div",{key:data.id,staticClass:"slidercardborder"},[n("h1",{staticClass:"slidercardtitle"},[t._v("\n        "+t._s(data.title.titleelement)+"\n      ")]),t._v(" "),n("p",{staticClass:"sliderbordersbutitle"},[t._v("\n        Featured among Singapore’s Top IT companies by Connectbit for Tuple’s new approach to AI Technology Innovation.\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"sliderborderbuttton",attrs:{to:"/"}},[t._v("\n        read me\n      ")])],1)})),0),t._v(" "),n("div",{staticClass:"sliderdotcontain"},t._l(t.datas,(function(data){return n("div",{key:data.id,staticClass:"sliderdotborder",on:{click:function(e){return t.dotclick(data.id-1)}}},[n("div",{staticClass:"dot",attrs:{"data-id":data.id-1}})])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);