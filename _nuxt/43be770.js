(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{478:function(n,t,e){var content=e(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(40).default)("0fd02fa4",content,!0,{sourceMap:!1})},522:function(n,t,e){"use strict";e(478)},523:function(n,t,e){var o=e(39)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.contact-us-container{\n  width:100%;\n  height:600px;\n  margin-top:4rem;\n  align-items:center\n}\n.content{\n  box-shadow:0 0 15px 0 rgba(0,0,0,.3);\n  width:1140px;\n  height:700px;\n  display:flex;\n  margin-left:auto;\n  margin-right:auto\n}\n.left-container{\n  background:hsla(0,0%,100%,.5);\n  width:65%\n}\n.mail-form-container{\n  padding:50px 100px 50px 50px\n}\n.mail-title{\n  font-size:1.6rem\n}\n.mail-subtitle,.mail-title{\n  color:#273244;\n  font-weight:700;\n  line-height:1.2;\n  margin-bottom:.5rem\n}\n.mail-subtitle{\n  font-size:1rem\n}\n.send-success{\n  display:none\n}\n.send-success-show{\n  display:block;\n  text-align:center;\n  font-size:2rem;\n  line-height:10;\n  color:#2c75c4\n}\n.contact-form{\n  padding:30px 0 0;\n  display:flex;\n  flex-direction:column;\n  opacity:1;\n  transform:translateY(0);\n  transition:all .6s ease-in-out\n}\n.contact-form-none{\n  display:none\n}\n.name-inputs-container{\n  width:100%;\n  justify-content:space-between;\n  display:flex;\n  margin-bottom:.5em\n}\n.name-container{\n  width:49%;\n  display:flex;\n  flex-direction:column\n}\n.form-label{\n  width:100%;\n  font-size:14px!important;\n  font-weight:lighter;\n  color:#273244\n}\n.form-input{\n  height:calc(2.25rem + 2px);\n  padding:.375rem .75rem;\n  font-size:1rem;\n  font-weight:400;\n  line-height:1.5;\n  background-clip:padding-box;\n  border:1px solid #273244;\n  border-radius:.25rem;\n  transition:border-color .05s linear,border-width .05s linear\n}\n.form-input,.form-input:focus{\n  color:#273244;\n  background-color:transparent\n}\n.form-input:focus{\n  border-color:#369;\n  border-width:2px;\n  outline:0\n}\n.message-text-area{\n  height:auto\n}\n.input-container{\n  width:100%;\n  display:flex;\n  flex-direction:column;\n  margin-bottom:.5em\n}\n.submit-button{\n  color:#fff;\n  text-align:center;\n  margin-top:20px;\n  padding:10px 50px;\n  border-radius:30px;\n  background:linear-gradient(90deg,#145484 50%,#1868a4 0);\n  background-size:200% 100%;\n  background-position:100% 100%;\n  transition:all .5s ease-out;\n  text-decoration:none;\n  font-weight:700\n}\n.submit-button:hover{\n  background-position:0 100%\n}\n.submit-button:not(:hover){\n  background-position:100% 100%\n}\n.right-container{\n  background:rgba(39,50,68,.5);\n  width:35%;\n  display:flex;\n  justify-content:center;\n  align-items:center\n}\n.information-container{\n  display:flex;\n  flex-direction:column;\n  height:30%;\n  justify-content:space-evenly;\n  align-items:center\n}\n.information-title{\n  font-size:1.5rem;\n  font-weight:700;\n  color:#fff\n}\n.information-content{\n  color:#fff;\n  align-self:flex-start\n}\n.social-media-container{\n  display:flex;\n  flex-direction:row;\n  margin-top:2rem\n}\n.social-icon{\n  color:#fff;\n  font-size:2rem\n}\n@media screen and (max-width:1200px){\n.content{\n    display:flex;\n    flex-direction:column;\n    width:740px;\n    height:auto;\n    top:-30%\n}\n.left-container{\n    width:100%\n}\n.right-container{\n    width:100%;\n    padding:8% 0\n}\n.mail-form-container{\n    padding:50px\n}\n}\n@media screen and (max-width:768px){\n.content{\n    width:480px\n}\n}\n@media screen and (max-width:576px){\n.content{\n    width:320px;\n    top:-10%\n}\n.mail-form-container{\n    padding:20px\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},567:function(n,t,e){"use strict";e.r(t);e(85);var o={data:function(){return{show:!1,firstName:"",lastName:"",email:"",company:"",message:""}},methods:{onSubmit:function(n){var t=this,e=this.$refs;this.message&&(n.preventDefault(),this.show=!0,setTimeout((function(){t.show=!1,e.contactUsForm.style.transform="translateY(80px)"}),3e3),setTimeout((function(){e.contactUsForm.style.transform="translateY(0px)"}),3050),this.message="")}}},r=(e(522),e(17)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"contact-us-container"},[e("div",{staticClass:"content"},[e("div",{staticClass:"left-container"},[e("div",{staticClass:"mail-form-container"},[e("h3",{staticClass:"mail-title"},[n._v(n._s(n.$t("contact.formTitle")))]),n._v(" "),e("h5",{staticClass:"mail-subtitle"},[n._v(n._s(n.$t("contact.formSubtitle")))]),n._v(" "),e("h1",{class:{"send-success":!0,"send-success-show":n.show}},[n._v("\n          Sending Mail Success\n        ")]),n._v(" "),e("form",{ref:"contactUsForm",class:{"contact-form":!0,"contact-form-none":n.show},attrs:{autocomplete:"off"}},[e("div",{staticClass:"name-inputs-container"},[e("div",{staticClass:"name-container"},[e("label",{staticClass:"form-label",attrs:{for:"first-name-input"}},[n._v("\n                "+n._s(n.$t("contact.formFirstName"))+"\n              ")]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.firstName,expression:"firstName"}],staticClass:"form-input",attrs:{id:"first-name-input",type:"text",required:"",pattern:"[a-zA-Z]{3,}",oninvalid:"this.setCustomValidity('Please Enter a Valid Name.')",oninput:"this.setCustomValidity('')"},domProps:{value:n.firstName},on:{input:function(t){t.target.composing||(n.firstName=t.target.value)}}})]),n._v(" "),e("div",{staticClass:"name-container"},[e("label",{staticClass:"form-label",attrs:{for:"last-name-input"}},[n._v("\n                "+n._s(n.$t("contact.formLastName"))+"\n              ")]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.lastName,expression:"lastName"}],staticClass:"form-input",attrs:{id:"last-name-input",type:"text",required:"",pattern:"[a-zA-Z]{2,}",oninvalid:"this.setCustomValidity('Please Enter a Valid Last Name.')",oninput:"this.setCustomValidity('')"},domProps:{value:n.lastName},on:{input:function(t){t.target.composing||(n.lastName=t.target.value)}}})])]),n._v(" "),e("div",{staticClass:"input-container"},[e("label",{staticClass:"form-label",attrs:{for:"mail-input"}},[n._v("\n              "+n._s(n.$t("contact.formEmail"))+"\n            ")]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.email,expression:"email"}],staticClass:"form-input",attrs:{id:"mail-input",type:"email",required:"",pattern:"^\\w.+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(.+)$",oninvalid:"this.setCustomValidity('Please Enter Business Email Only.')",oninput:"this.setCustomValidity('')"},domProps:{value:n.email},on:{input:function(t){t.target.composing||(n.email=t.target.value)}}})]),n._v(" "),e("div",{staticClass:"input-container"},[e("label",{staticClass:"form-label",attrs:{for:"company-input"}},[n._v("\n              "+n._s(n.$t("contact.formCompany"))+"\n            ")]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.company,expression:"company"}],staticClass:"form-input",attrs:{id:"company-input",type:"text",required:"",pattern:"[A-Za-z ]{3,}",oninvalid:"this.setCustomValidity('Please Enter a Valid Company Name.')",oninput:"this.setCustomValidity('')"},domProps:{value:n.company},on:{input:function(t){t.target.composing||(n.company=t.target.value)}}})]),n._v(" "),e("div",{staticClass:"input-container"},[e("label",{staticClass:"form-label",attrs:{for:"message-input"}},[n._v("\n              "+n._s(n.$t("contact.formMessage"))+"\n            ")]),n._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:n.message,expression:"message"}],staticClass:"form-input message-text-area",attrs:{id:"message-input",rows:"5",required:""},domProps:{value:n.message},on:{input:function(t){t.target.composing||(n.message=t.target.value)}}})]),n._v(" "),e("div",{staticClass:"submit-container"},[e("button",{staticClass:"submit-button",attrs:{type:"submit"},on:{click:function(t){return n.onSubmit(t)}}},[n._v("\n              "+n._s(n.$t("contact.formSubmit"))+"\n            ")])])])])]),n._v(" "),e("div",{staticClass:"right-container"},[e("div",{staticClass:"information-container"},[e("h1",{staticClass:"information-title"},[n._v("\n          "+n._s(n.$t("contact.contactInformation"))+"\n        ")]),n._v(" "),n._l(n.$t("contact.information"),(function(content,t){return e("p",{key:t,staticClass:"information-content"},[n._v("\n          "+n._s(content)+"\n        ")])})),n._v(" "),e("div",{staticClass:"social-media-container"},[e("a",{attrs:{href:"https://www.instagram.com"}},[e("div",{staticClass:"social-icon"},[e("fa",{attrs:{icon:["fab","instagram-square"]}})],1)]),n._v(" "),e("a",{attrs:{href:"https://zh-tw.facebook.com"}},[e("div",{staticClass:"social-icon"},[e("fa",{attrs:{icon:["fab","facebook-square"]}})],1)]),n._v(" "),e("a",{attrs:{href:"https://twitter.com"}},[e("div",{staticClass:"social-icon"},[e("fa",{attrs:{icon:["fab","twitter-square"]}})],1)]),n._v(" "),e("a",{attrs:{href:"https://tw.linkedin.com"}},[e("div",{staticClass:"social-icon"},[e("fa",{attrs:{icon:["fab","linkedin"]}})],1)])])],2)])])])}),[],!1,null,null,null);t.default=component.exports}}]);