(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afa77"],{"0ef2":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("v-main",[t("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[t("v-card",{staticClass:"elevation-12"},[t("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[t("v-toolbar-title",[e._v("人体基本健康信息管理系统")])],1),t("v-card-text",[t("v-text-field",{attrs:{label:"用户名","prepend-icon":"mdi-account",type:"text"},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),t("v-text-field",{attrs:{label:"密码","prepend-icon":"mdi-lock",type:"password"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),t("div",{staticClass:"d-flex ma-0 pa-0"},[t("v-text-field",{staticClass:"d-inline-flex",attrs:{label:"验证码","hide-details":"","prepend-icon":"mdi-lock"},on:{keydown:e.codeKeydown},model:{value:e.code,callback:function(a){e.code=a},expression:"code"}}),t("v-img",{staticClass:"d-inline-flex ms-5 me-5",attrs:{height:50,src:e.src,contain:""},on:{click:e.getCaptchaImage},scopedSlots:e._u([{key:"placeholder",fn:function(){return[t("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}])})],1)],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)],1)],1)],1)],1)},o=[],i=(t("ac1f"),t("5319"),{name:"Login",props:{source:String},data:function(){return{username:"",password:"",code:"",uuid:"",src:""}},mounted:function(){"logined"===sessionStorage.getItem("state")?this.$router.replace({path:"/admin/home"}):this.getCaptchaImage()},methods:{login:function(){var e=this;if(0===this.username.length||0===this.password.length||0===this.code.length)alert("请补全输入");else{var a=this;this.axios.post(this.API.URL.USER_LOGIN+"?username="+this.username+"&password="+this.password+"&code="+this.code+"&uuid="+this.uuid).then((function(t){var s=t.data;s.success?(alert("登录成功"),sessionStorage.setItem("state","logined"),sessionStorage.setItem("username",a.username),e.$router.replace({path:"/admin/home"})):e.getCaptchaImage()}),(function(e){alert(e),console.log(e)}))}},getCaptchaImage:function(){this.code="";var e=this;this.axios.get(this.API.URL.CAPTCHA_IMAGE).then((function(a){var t=a.data;t.success&&(e.src="data:image/jpeg;base64,"+t.data.img,e.uuid=t.data.uuid)}),(function(e){console.log(e)}))},codeKeydown:function(e){13===e.which&&this.login()}}}),n=i,r=t("2877"),c=t("6544"),l=t.n(c),d=t("7496"),u=t("8336"),p=t("b0af"),h=t("99d9"),m=t("62ad"),f=t("a523"),g=t("adda"),v=t("f6c4"),w=t("490a"),C=t("0fd9"),b=t("2fa4"),x=t("8654"),V=t("71d9"),k=t("2a7f"),y=Object(r["a"])(n,s,o,!1,null,"f674612e",null);a["default"]=y.exports;l()(y,{VApp:d["a"],VBtn:u["a"],VCard:p["a"],VCardActions:h["a"],VCardText:h["b"],VCol:m["a"],VContainer:f["a"],VImg:g["a"],VMain:v["a"],VProgressCircular:w["a"],VRow:C["a"],VSpacer:b["a"],VTextField:x["a"],VToolbar:V["a"],VToolbarTitle:k["a"]})}}]);
//# sourceMappingURL=chunk-2d0afa77.20a1a958.js.map