(function(e){function t(t){for(var o,c,a=t[0],u=t[1],s=t[2],d=0,p=[];d<a.length;d++)c=a[d],i[c]&&p.push(i[c][0]),i[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},i={beforeLogin:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;r.push([1,"chunk-vendors","chunk-common"]),n()})({1:function(e,t,n){e.exports=n("2eae")},"2eae":function(e,t,n){"use strict";n.r(t);n("28a5"),n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main"},[n("h2",[e._v("您好，请登录！")]),n("div",{staticClass:"phone"},[n("vantIcon",{staticClass:"icon",attrs:{name:"phone"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"tel",attrs:{type:"tel",placeholder:"请输入手机号码",maxlength:"11"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})],1),n("vantButton",{staticClass:"indexBtn",on:{click:e.checkCode}},[e._v("下一步")])],1)])},r=[],c=n("b970"),a=n("3322"),u=n("0ad9"),s=(n("9b02"),{name:"app",data:function(){return{mobile:""}},methods:{checkCode:function(){var e=this;11==this.mobile.length?Object(a["e"])({mobile:this.mobile,activityId:Object(u["a"])()}).then(function(t){window.location.href="./login.html?mobile="+e.mobile+"&code="+window.URLPARAMS.code+"&actId="+Object(u["a"])()}).catch(function(e){}):Object(c["e"])("请输入正确的手机号")}},mounted:function(){this.showBlock=window.URLPARAMS.hasOwnProperty("student")?"none":"block"},beforeDestroy:function(){},components:{vantButton:c["a"],vantIcon:c["c"]}}),l=s,d=(n("93e2"),n("2877")),p=Object(d["a"])(l,i,r,!1,null,"48677cb0",null);p.options.__file="Index.vue";var f=p.exports,b=(n("b7f1"),n("3439")),h=n("4cfb");if(window.URLPARAMS.hasOwnProperty("state")&&"needJump"==window.URLPARAMS.state?document.body.style.display="none":document.body.style.display="block",window.URLPARAMS.hasOwnProperty("code")){if(window.URLPARAMS.hasOwnProperty("state")&&"needJump"==window.URLPARAMS.state&&Object(u["b"])()){var w=encodeURIComponent(b["a"].serverUrl);Object(h["a"])({actId:Object(u["a"])(),code:window.URLPARAMS.code,mp:"hushijia",serverUrl:w,mobile:""}).then(function(e){Object(u["h"])(e),Object(c["e"])("登陆成功"),window.setTimeout(function(){window.location.href=Object(u["b"])()},200)}).catch(function(e){})}}else Object(h["b"])({url:window.location.href.split("?")[0]}).then(function(e){window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+e.signature.appId+"&redirect_uri="+encodeURIComponent(b["a"].wxUrl)+"&response_type=code&scope=snsapi_userinfo&state=hushijia#wechat_redirect"}).catch(function(e){});new o["a"]({render:function(e){return e(f)}}).$mount("#app")},"402c":function(e,t,n){},"93e2":function(e,t,n){"use strict";var o=n("402c"),i=n.n(o);i.a}});
//# sourceMappingURL=beforeLogin.093a3b1f.js.map