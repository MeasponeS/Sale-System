(function(e){function t(t){for(var o,a,u=t[0],c=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={index:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([4,"chunk-vendors","chunk-common"]),n()})({"28f0":function(e,t,n){},"2bd3":function(e,t,n){"use strict";var o=n("28f0"),r=n.n(o);r.a},4:function(e,t,n){e.exports=n("44eb")},"44eb":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index",attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("h3",[e._v("邀请人手机号")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"number"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),n("h3",[e._v("您的销售推广码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inviteCode,expression:"inviteCode"}],attrs:{type:"number"},domProps:{value:e.inviteCode},on:{input:function(t){t.target.composing||(e.inviteCode=t.target.value)}}}),n("vantButton",{staticClass:"indexBtn",on:{click:e.createRecommender}},[e._v("生成邀请人")]),n("div",[n("a",{attrs:{href:"##"},on:{click:function(t){e.share=!0}}},[e._v("分享活动链接给邀请人")])]),n("Share",{attrs:{share:e.share},on:{know:e.know}})],1)])},i=[],a=(n("cadf"),n("551c"),n("097d"),n("b970")),u=n("9541"),c=n("3322"),s=(n("3439"),n("17a4")),l=n("18a0"),f=n.n(l),d={name:"app",mixins:[u["a"]],data:function(){return{mobile:"",inviteCode:"",share:!1}},methods:{wxSignatureCallback:function(){var e={shareTitle:"分享给好友开团",shareBody:"这是我分享给好友得团",shareUrl:"https://hsj.hulian120.com/pay/beforeLogin.html",shareImg:"https://www.baidu.com/img/bd_logo1.png?where=super"};f.a.onMenuShareAppMessage({title:e.shareTitle,desc:e.shareBody,link:e.shareUrl,imgUrl:e.shareImg,success:function(){console.log("配置分享成功")},cancel:function(){console.log("配置分享失败")}})},createRecommender:function(){11==this.mobile.length?6==this.inviteCode.length?Object(c["b"])({mobile:this.mobile,inviteCode:this.inviteCode,activityId:window.actId}).then(function(e){Object(a["f"])("生成邀请人成功，请分享链接给邀请人")}).catch(function(e){}):Object(a["f"])("请输入正确的邀请码"):Object(a["f"])("请输入正确的手机号")},know:function(){this.share=!1}},mounted:function(){},beforeDestroy:function(){},components:{vantButton:a["a"],Share:s["a"]}},p=d,h=(n("2bd3"),n("2877")),v=Object(h["a"])(p,r,i,!1,null,"61f2e6f0",null);v.options.__file="Index.vue";var m=v.exports;n("b7f1");new o["a"]({render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=index.9ad8c8f0.js.map