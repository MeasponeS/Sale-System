(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],f=0,l=[];f<u.length;f++)a=u[f],o[a]&&l.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={index:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=c;i.push([4,"chunk-vendors"]),n()})({"0ad9":function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return d});n("cadf"),n("551c"),n("097d"),n("335a");var r=n("a78e"),o=n.n(r),i=n("3439"),a=n("9690");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return window.URLPARAMS||Object(a["a"])(),e?window.URLPARAMS.hasOwnProperty(e)?window.URLPARAMS[e]:null:window.URLPARAMS}function c(){return o.a.get(i["a"].tokenKey)}function s(e){return o.a.set(i["a"].tokenKey,e,{expires:i["a"].cookiesExpires})}function d(){return o.a.remove(i["a"].tokenKey)}},3272:function(e,t,n){},3322:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return u});var r=n("b775");function o(e){return Object(r["a"])({url:"/sale/api/recommender/generateRecommender",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/sale/api/recommender/sendSmsCode",method:"post",data:e})}function a(e){return Object(r["a"])({url:"/sale/api/recommender/checkSmsCode",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/sale/api/recommender/index",method:"get",params:e})}},3439:function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d");var r="http://192.168.50.104:8081",o="http://192.168.50.104:8081",i=!1;t["a"]={apiUrl:i?r:o,apiPrefix:"",timeout:5e3,designSize:375,cookiesExpires:7,activityId:1,countDown:60,tokenKey:"ACTIVITY_ACCESS_TOKEN",storageUserKey:"ACTIVITY_USER_STORAGE",requestRetry:4,requestRetryDelay:800}},4:function(e,t,n){e.exports=n("44eb")},"44eb":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index",attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("h3",[e._v("邀请人手机号")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"number"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),n("h3",[e._v("您的销售推广码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inviteCode,expression:"inviteCode"}],attrs:{type:"number"},domProps:{value:e.inviteCode},on:{input:function(t){t.target.composing||(e.inviteCode=t.target.value)}}}),n("vantButton",{staticClass:"indexBtn",on:{click:e.createRecommender}},[e._v("生成邀请人")]),n("div",[n("a",{attrs:{href:"./beforeLogin.html"},on:{click:e.shareActivity}},[e._v("分享活动链接给邀请人")])])],1)])},i=[],a=(n("cadf"),n("551c"),n("097d"),n("b970")),u=n("9541"),c=n("3322"),s=(n("c53f"),n("3439")),d={name:"app",mixins:[u["a"]],data:function(){return{mobile:"",inviteCode:""}},methods:{createRecommender:function(){11==this.mobile.length?6==this.inviteCode.length?Object(c["b"])({mobile:this.mobile,inviteCode:this.inviteCode,activityId:s["a"].activityId}).then(function(e){console.log(e),Object(a["f"])("生成邀请人成功，请分享链接给邀请人")}).catch(function(e){}):Object(a["f"])("请输入正确的邀请码"):Object(a["f"])("请输入正确的手机号")},shareActivity:function(){alert(111)}},mounted:function(){console.log(this.activityId)},beforeDestroy:function(){},components:{vantButton:a["a"]}},f=d,l=(n("623d"),n("2877")),p=Object(l["a"])(f,o,i,!1,null,"2abdef78",null);p.options.__file="Index.vue";var m=p.exports;n("b7f1");new r["a"]({render:function(e){return e(m)}}).$mount("#app")},"4cfb":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("b775");function o(e){return Object(r["a"])({url:"https://wxauth.hulian120.com/open/wxSignature",method:"get",params:e})}},"623d":function(e,t,n){"use strict";var r=n("3272"),o=n.n(r);o.a},6418:function(e,t,n){},"802f":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=window.navigator.userAgent.toLowerCase(),o=(/(Android);?[\s/]+([\d.]+)?/.test(r),/(iPad).*OS\s([\d_]+)/.test(r)),i=(/(iPod)(.*OS\s([\d_]+))?/.test(r),!o&&/(iPhone\sOS)\s([\d_]+)/.test(r),/micromessenger/i.test(r));/alipayclient/i.test(r)},9541:function(e,t,n){"use strict";n("28a5");var r=n("0ad9"),o=(n("c53f"),n("4cfb")),i=n("18a0"),a=n.n(i),u=n("b970");t["a"]={data:function(){return{USERINFO:!1,info:{appId:"",nonceStr:"",signature:"",timestamp:""}}},created:function(){},methods:{},mounted:function(){Object(r["a"])();Object(o["a"])({url:window.location.href.split("?")[0]}).then(function(e){a.a.config({debug:!1,appId:e.signature.appId,nonceStr:e.signature.nonceStr,signature:e.signature.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","showMenuItems","hideOptionMenu","closeWindow"]}),a.a.ready(function(){a.a.hideOptionMenu()}),a.a.error(function(){Object(u["f"])("微信签名失败")})}).catch(function(e){Object(u["f"])("获取签名信息失败")})},beforeDestroy:function(){},components:{}}},9690:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n("ac6a"),n("28a5");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=window.location.href.split("?");if(t.length<2)return e?null:{};var n=t[1].split("&"),r={};return n.forEach(function(e){var t=e.split("=");r[t[0]]=t[1]}),e?r.hasOwnProperty(e)?r[e]:null:r}function o(){window.URLPARAMS=r()}},b775:function(e,t,n){"use strict";var r=n("bc3a"),o=n.n(r),i=n("3439"),a=n("b970"),u=n("0ad9"),c=o.a.create({baseURL:i["a"].apiUrl+"/"+i["a"].apiPrefix,headers:{Accept:"*/*"},timeout:i["a"].timeout});c.defaults.retry=i["a"].requestRetry,c.defaults.retryDelay=i["a"].requestRetryDelay,c.interceptors.request.use(function(e){e.closeLoading;var t=-1==e.url.indexOf("?");return e.url=t?e.url+"?access_token="+Object(u["a"])():e.url+"&access_token="+Object(u["a"])(),e},function(e){Promise.reject(e)}),c.interceptors.response.use(function(e){var t=e;if(e.config.closeLoading||setTimeout(function(e){},400),200===t.status)return 200!=t.data.resultCode?(Object(a["f"])(t.data.message),402==t.data.resultCode&&(Object(u["c"])(),setTimeout(function(e){window.location.href="./login.html"},2e3)),Promise.reject("error")):t.data.data;Object(a["f"])("数据返回出错")},function(e){return setTimeout(function(e){},300),Object(a["f"])("请求未响应"),Promise.reject(e)}),t["a"]=c},b7f1:function(e,t,n){"use strict";n("f5df"),n("157a"),n("6418");var r=n("9690"),o=n("fe3c"),i=n.n(o);i.a.attach(document.body);var a=n("3439"),u=100;function c(){var e=document.documentElement.clientWidth/a["a"].designSize;document.documentElement.style.fontSize=u*Math.min(e,2)+"px"}c(),window.onresize=function(){c()};n("802f");Object(r["a"])()},c53f:function(e,t,n){"use strict";n("18a0"),n("b970"),n("802f"),n("b775")}});
//# sourceMappingURL=index.028ce63e.js.map