(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["recovery"],{7624:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("section",{staticClass:"login_box_area section-margin"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"login_box_img"},[s("div",{staticClass:"hover"},[s("h4",[e._v("New to our website?")]),s("p",[e._v("There are advances being made in science and technology everyday, and a good example of this is the")]),s("router-link",{staticClass:"button button-account",attrs:{to:"/login"}},[e._v("Login Now")])],1)])]),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"login_form_inner"},[s("h3",[e._v("Account recovery")]),s("form",{staticClass:"row login_form",attrs:{action:"#/",id:"contactForm"},on:{submit:function(e){e.preventDefault()}}},[s("div",{staticClass:"col-md-12 form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.emailAddress,expression:"emailAddress"}],staticClass:"form-control",attrs:{type:"text",id:"name",name:"name",placeholder:"emailAddress",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'emailAddress'"},domProps:{value:e.emailAddress},on:{input:function(t){t.target.composing||(e.emailAddress=t.target.value)}}})]),s("div",{staticClass:"col-md-12 form-group"},[s("button",{staticClass:"button button-login w-100",attrs:{type:"submit",value:"submit"},on:{click:e.Funcion_Recuperacion}},[e._v("Send Request")])])])])])])])])])},a=[],i=s("dc59"),n=s("1940"),c=s.n(n),r={name:"Recovery",data:function(){return{emailAddress:""}},methods:{Funcion_Recuperacion:function(){i["b"].auth().sendPasswordResetEmail(this.emailAddress).then((function(){c()({title:"Verifica tu correo",text:"Hemos enviado un link a tu correo para recuperar tu clave",icon:"success"})})).catch((function(e){c()({title:"Oops !",text:e.message,icon:"error"})}))}}},l=r,d=s("2877"),u=Object(d["a"])(l,o,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=recovery.519f6adc.js.map