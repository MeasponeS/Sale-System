(function(e){function t(t){for(var o,a,c=t[0],u=t[1],s=t[2],d=0,f=[];d<c.length;d++)a=c[d],r[a]&&f.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={index:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;i.push([4,"chunk-vendors","chunk-common"]),n()})({4:function(e,t,n){e.exports=n("44eb")},"44eb":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index",attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("h3",[e._v("邀请人手机号")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"number"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),n("h3",[e._v("您的销售推广码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inviteCode,expression:"inviteCode"}],attrs:{type:"number"},domProps:{value:e.inviteCode},on:{input:function(t){t.target.composing||(e.inviteCode=t.target.value)}}}),n("vantButton",{staticClass:"indexBtn",on:{click:e.createRecommender}},[e._v("生成邀请人")]),n("div",[n("a",{attrs:{href:"##"},on:{click:function(t){e.share=!0}}},[e._v("分享活动链接给邀请人")])]),n("Share",{attrs:{share:e.share},on:{know:e.know}})],1)])},i=[],a=(n("cadf"),n("551c"),n("097d"),n("b970")),c=n("9541"),u=n("3322"),s=n("3439"),l=n("17a4"),d=n("18a0"),f=n.n(d),p={name:"app",mixins:[c["a"]],data:function(){return{mobile:"",inviteCode:"",share:!1}},methods:{wxSignatureCallback:function(){var e={shareTitle:"分享给好友开团",shareBody:"这是我分享给好友得团",shareUrl:"https://hsj.hulian120.com/pay/beforeLogin.html?actId="+s["a"].activityId,shareImg:"https://www.baidu.com/img/bd_logo1.png?where=super"};f.a.onMenuShareAppMessage({title:e.shareTitle,desc:e.shareBody,link:e.shareUrl,imgUrl:e.shareImg,success:function(){console.log("配置分享成功")},cancel:function(){console.log("配置分享失败")}})},createRecommender:function(){11==this.mobile.length?6==this.inviteCode.length?Object(u["b"])({mobile:this.mobile,inviteCode:this.inviteCode,activityId:s["a"].activityId}).then(function(e){Object(a["f"])("生成邀请人成功，请分享链接给邀请人")}).catch(function(e){}):Object(a["f"])("请输入正确的邀请码"):Object(a["f"])("请输入正确的手机号")},know:function(){this.share=!1}},mounted:function(){},beforeDestroy:function(){},components:{vantButton:a["a"],Share:l["a"]}},h=p,v=(n("4c4c"),n("2877")),m=Object(v["a"])(h,r,i,!1,null,"445ce00e",null);m.options.__file="Index.vue";var b=m.exports;n("b7f1");new o["a"]({render:function(e){return e(b)}}).$mount("#app")},"45d2":function(e,t,n){},"4c4c":function(e,t,n){"use strict";var o=n("45d2"),r=n.n(o);r.a}});
//# sourceMappingURL=index.6a13d515.js.map