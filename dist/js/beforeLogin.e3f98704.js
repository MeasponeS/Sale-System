(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],f=0,l=[];f<c.length;f++)a=c[f],o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={beforeLogin:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=u;i.push([1,"chunk-vendors"]),n()})({"0ad9":function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return d});n("cadf"),n("551c"),n("097d"),n("335a");var r=n("a78e"),o=n.n(r),i=n("3439"),a=n("9690");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return window.URLPARAMS||Object(a["a"])(),e?window.URLPARAMS.hasOwnProperty(e)?window.URLPARAMS[e]:null:window.URLPARAMS}function u(){return o.a.get(i["a"].tokenKey)}function s(e){return o.a.set(i["a"].tokenKey,e,{expires:i["a"].cookiesExpires})}function d(){return o.a.remove(i["a"].tokenKey)}},1:function(e,t,n){e.exports=n("2eae")},"2eae":function(e,t,n){"use strict";n.r(t);n("28a5"),n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main"},[n("h2",[e._v("您好，请登录！")]),n("div",{staticClass:"phone"},[n("vantIcon",{staticClass:"icon",attrs:{name:"phone"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"tel",attrs:{type:"number",placeholder:"请输入手机号码"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})],1),n("vantButton",{staticClass:"indexBtn",on:{click:e.checkCode}},[e._v("下一步")])],1)])},i=[],a=n("b970"),c=n("9541"),u=n("3322"),s=n("3439"),d={name:"app",mixins:[c["a"]],data:function(){return{mobile:""}},methods:{checkCode:function(){var e=this;11==this.mobile.length?Object(u["d"])({mobile:this.mobile,activityId:s["a"].activityId}).then(function(t){window.location.href="./login.html?mobile="+e.mobile}).catch(function(e){}):Object(a["f"])("请输入正确的手机号")}},mounted:function(){},beforeDestroy:function(){},components:{vantButton:a["a"],vantIcon:a["b"]}},f=d,l=(n("a281"),n("2877")),p=Object(l["a"])(f,o,i,!1,null,"45bf7e1a",null);p.options.__file="Index.vue";var m=p.exports,b=(n("b7f1"),n("4cfb"));window.URLPARAMS.hasOwnProperty("code")||Object(b["a"])({url:window.location.href.split("?")[0]}).then(function(e){window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+e.signature.appId+"&redirect_uri="+window.location.href.split("?")[0]+"&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect"}).catch(function(e){}),new r["a"]({render:function(e){return e(m)}}).$mount("#app")},3322:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return c});var r=n("b775");function o(e){return Object(r["a"])({url:"/sale/api/recommender/generateRecommender",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/sale/api/recommender/sendSmsCode",method:"post",data:e})}function a(e){return Object(r["a"])({url:"/sale/api/recommender/checkSmsCode",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/sale/api/recommender/index",method:"get",params:e})}},3439:function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d");var r="http://192.168.50.104:8081",o="http://192.168.50.104:8081",i=!1;t["a"]={apiUrl:i?r:o,apiPrefix:"",timeout:5e3,designSize:375,cookiesExpires:7,activityId:1,countDown:60,tokenKey:"ACTIVITY_ACCESS_TOKEN",storageUserKey:"ACTIVITY_USER_STORAGE",requestRetry:4,requestRetryDelay:800}},"4cfb":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("b775");function o(e){return Object(r["a"])({url:"https://wxauth.hulian120.com/open/wxSignature",method:"get",params:e})}},6418:function(e,t,n){},"802f":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=window.navigator.userAgent.toLowerCase(),o=(/(Android);?[\s/]+([\d.]+)?/.test(r),/(iPad).*OS\s([\d_]+)/.test(r)),i=(/(iPod)(.*OS\s([\d_]+))?/.test(r),!o&&/(iPhone\sOS)\s([\d_]+)/.test(r),/micromessenger/i.test(r));/alipayclient/i.test(r)},9540:function(e,t,n){},9541:function(e,t,n){"use strict";n("28a5");var r=n("0ad9"),o=(n("c53f"),n("4cfb")),i=n("18a0"),a=n.n(i),c=n("b970");t["a"]={data:function(){return{USERINFO:!1,info:{appId:"",nonceStr:"",signature:"",timestamp:""}}},created:function(){},methods:{},mounted:function(){Object(r["a"])();Object(o["a"])({url:window.location.href.split("?")[0]}).then(function(e){a.a.config({debug:!1,appId:e.signature.appId,nonceStr:e.signature.nonceStr,signature:e.signature.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","showMenuItems","hideOptionMenu","closeWindow"]}),a.a.ready(function(){a.a.hideOptionMenu()}),a.a.error(function(){Object(c["f"])("微信签名失败")})}).catch(function(e){Object(c["f"])("获取签名信息失败")})},beforeDestroy:function(){},components:{}}},9690:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n("ac6a"),n("28a5");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=window.location.href.split("?");if(t.length<2)return e?null:{};var n=t[1].split("&"),r={};return n.forEach(function(e){var t=e.split("=");r[t[0]]=t[1]}),e?r.hasOwnProperty(e)?r[e]:null:r}function o(){window.URLPARAMS=r()}},a281:function(e,t,n){"use strict";var r=n("9540"),o=n.n(r);o.a},b775:function(e,t,n){"use strict";var r=n("bc3a"),o=n.n(r),i=n("3439"),a=n("b970"),c=n("0ad9"),u=o.a.create({baseURL:i["a"].apiUrl+"/"+i["a"].apiPrefix,headers:{Accept:"*/*"},timeout:i["a"].timeout});u.defaults.retry=i["a"].requestRetry,u.defaults.retryDelay=i["a"].requestRetryDelay,u.interceptors.request.use(function(e){e.closeLoading;var t=-1==e.url.indexOf("?");return e.url=t?e.url+"?access_token="+Object(c["a"])():e.url+"&access_token="+Object(c["a"])(),e},function(e){Promise.reject(e)}),u.interceptors.response.use(function(e){var t=e;if(e.config.closeLoading||setTimeout(function(e){},400),200===t.status)return 200!=t.data.resultCode?(Object(a["f"])(t.data.message),402==t.data.resultCode&&(Object(c["c"])(),setTimeout(function(e){window.location.href="./login.html"},2e3)),Promise.reject("error")):t.data.data;Object(a["f"])("数据返回出错")},function(e){return setTimeout(function(e){},300),Object(a["f"])("请求未响应"),Promise.reject(e)}),t["a"]=u},b7f1:function(e,t,n){"use strict";n("f5df"),n("157a"),n("6418");var r=n("9690"),o=n("fe3c"),i=n.n(o);i.a.attach(document.body);var a=n("3439"),c=100;function u(){var e=document.documentElement.clientWidth/a["a"].designSize;document.documentElement.style.fontSize=c*Math.min(e,2)+"px"}u(),window.onresize=function(){u()};n("802f");Object(r["a"])()},c53f:function(e,t,n){"use strict";n("18a0"),n("b970"),n("802f"),n("b775")}});
//# sourceMappingURL=beforeLogin.e3f98704.js.map