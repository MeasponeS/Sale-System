(function(t){function e(e){for(var o,a,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],i[a]&&f.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={login:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=u;r.push([6,"chunk-vendors"]),n()})({"0ad9":function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"a",function(){return u}),n.d(e,"d",function(){return s}),n.d(e,"c",function(){return d});n("cadf"),n("551c"),n("097d"),n("335a");var o=n("a78e"),i=n.n(o),r=n("3439"),a=n("9690");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return window.URLPARAMS||Object(a["a"])(),t?window.URLPARAMS.hasOwnProperty(t)?window.URLPARAMS[t]:null:window.URLPARAMS}function u(){return i.a.get(r["a"].tokenKey)}function s(t){return i.a.set(r["a"].tokenKey,t,{expires:r["a"].cookiesExpires})}function d(){return i.a.remove(r["a"].tokenKey)}},3322:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"d",function(){return r}),n.d(e,"a",function(){return a}),n.d(e,"c",function(){return c});var o=n("b775");function i(t){return Object(o["a"])({url:"/sale/api/recommender/generateRecommender",method:"post",data:t})}function r(t){return Object(o["a"])({url:"/sale/api/recommender/sendSmsCode",method:"post",data:t})}function a(t){return Object(o["a"])({url:"/sale/api/recommender/checkSmsCode",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/sale/api/recommender/index",method:"get",params:t})}},3439:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var o="http://192.168.50.104:8081",i="http://192.168.50.104:8081",r=!1;e["a"]={apiUrl:r?o:i,apiPrefix:"",timeout:5e3,designSize:375,cookiesExpires:7,activityId:1,countDown:60,tokenKey:"ACTIVITY_ACCESS_TOKEN",storageUserKey:"ACTIVITY_USER_STORAGE",requestRetry:4,requestRetryDelay:800}},"4cfb":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("b775");function i(t){return Object(o["a"])({url:"https://wxauth.hulian120.com/open/wxSignature",method:"get",params:t})}},6:function(t,e,n){t.exports=n("80c1")},6418:function(t,e,n){},"802f":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=window.navigator.userAgent.toLowerCase(),i=(/(Android);?[\s/]+([\d.]+)?/.test(o),/(iPad).*OS\s([\d_]+)/.test(o)),r=(/(iPod)(.*OS\s([\d_]+))?/.test(o),!i&&/(iPhone\sOS)\s([\d_]+)/.test(o),/micromessenger/i.test(o));/alipayclient/i.test(o)},"809f":function(t,e,n){"use strict";var o=n("be9f"),i=n.n(o);i.a},"80c1":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main"},[n("h2",[t._v("您好，请登录！")]),n("div",{staticClass:"phone"},[n("vantIcon",{staticClass:"icon",attrs:{name:"phone"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"tel",attrs:{type:"number",placeholder:"手机号",disabled:""},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),n("div",{staticClass:"get-msg",style:{color:t.countDown!=t.initCountDown?"#DCDCDC":"#F46A21"},on:{click:t.getCode}},[n("div",{staticClass:"line"}),t._v("\n                "+t._s(t.countDown!=t.initCountDown?t.countDown+"s":"重新发送")+"\n            ")])],1),n("div",{staticClass:"code"},[n("vantIcon",{staticClass:"icon",attrs:{name:"lock"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"number",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})],1),n("vantButton",{staticClass:"indexBtn",on:{click:t.checkCode}},[t._v("登陆")])],1)])},r=[],a=n("b970"),c=n("9541"),u=n("3322"),s=n("3439"),d=n("0ad9"),l={name:"app",mixins:[c["a"]],data:function(){return{countDown:s["a"].countDown,initCountDown:s["a"].countDown,mobile:"",code:""}},methods:{checkCode:function(){11==this.mobile.length?this.login(this.mobile,this.code):Object(a["f"])("请输入正确的手机号")},login:function(t,e){Object(u["a"])({mobile:t,smsCode:e,activityId:s["a"].activityId}).then(function(t){Object(d["d"])("5d3d8375a0674c01a628b9c9896cbbd3_2"),setTimeout(function(t){var e=Object(d["b"])("from");window.location.href=e?"./"+e+".html":"./mainPage.html"},200)}).catch(function(t){})},getCode:function(){var t=this;this.countDown<60||Object(u["d"])({mobile:this.mobile,activityId:s["a"].activityId}).then(function(e){var n=setInterval(function(){if(t.countDown<=0)return clearInterval(n),void(t.countDown=t.initCountDown);t.countDown--},1e3)}).catch(function(t){})}},mounted:function(){var t=this;if(this.mobile=Object(d["b"])("mobile"),this.mobile.length>0&&""!=this.mobile){this.countDown=59;var e=setInterval(function(){if(t.countDown<=0)return clearInterval(e),void(t.countDown=t.initCountDown);t.countDown--},1e3)}},beforeDestroy:function(){},components:{vantButton:a["a"],vantIcon:a["b"]}},f=l,p=(n("809f"),n("2877")),m=Object(p["a"])(f,i,r,!1,null,"1414fcca",null);m.options.__file="Index.vue";var b=m.exports;n("b7f1");new o["a"]({render:function(t){return t(b)}}).$mount("#app")},9541:function(t,e,n){"use strict";n("28a5");var o=n("0ad9"),i=(n("c53f"),n("4cfb")),r=n("18a0"),a=n.n(r),c=n("b970");e["a"]={data:function(){return{USERINFO:!1,info:{appId:"",nonceStr:"",signature:"",timestamp:""}}},created:function(){},methods:{},mounted:function(){Object(o["a"])();Object(i["a"])({url:window.location.href.split("?")[0]}).then(function(t){a.a.config({debug:!1,appId:t.signature.appId,nonceStr:t.signature.nonceStr,signature:t.signature.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","showMenuItems","hideOptionMenu","closeWindow"]}),a.a.ready(function(){a.a.hideOptionMenu()}),a.a.error(function(){Object(c["f"])("微信签名失败")})}).catch(function(t){Object(c["f"])("获取签名信息失败")})},beforeDestroy:function(){},components:{}}},9690:function(t,e,n){"use strict";n.d(e,"a",function(){return i});n("ac6a"),n("28a5");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=window.location.href.split("?");if(e.length<2)return t?null:{};var n=e[1].split("&"),o={};return n.forEach(function(t){var e=t.split("=");o[e[0]]=e[1]}),t?o.hasOwnProperty(t)?o[t]:null:o}function i(){window.URLPARAMS=o()}},b775:function(t,e,n){"use strict";var o=n("bc3a"),i=n.n(o),r=n("3439"),a=n("b970"),c=n("0ad9"),u=i.a.create({baseURL:r["a"].apiUrl+"/"+r["a"].apiPrefix,headers:{Accept:"*/*"},timeout:r["a"].timeout});u.defaults.retry=r["a"].requestRetry,u.defaults.retryDelay=r["a"].requestRetryDelay,u.interceptors.request.use(function(t){t.closeLoading;var e=-1==t.url.indexOf("?");return t.url=e?t.url+"?access_token="+Object(c["a"])():t.url+"&access_token="+Object(c["a"])(),t},function(t){Promise.reject(t)}),u.interceptors.response.use(function(t){var e=t;if(t.config.closeLoading||setTimeout(function(t){},400),200===e.status)return 200!=e.data.resultCode?(Object(a["f"])(e.data.message),402==e.data.resultCode&&(Object(c["c"])(),setTimeout(function(t){window.location.href="./login.html"},2e3)),Promise.reject("error")):e.data.data;Object(a["f"])("数据返回出错")},function(t){return setTimeout(function(t){},300),Object(a["f"])("请求未响应"),Promise.reject(t)}),e["a"]=u},b7f1:function(t,e,n){"use strict";n("f5df"),n("157a"),n("6418");var o=n("9690"),i=n("fe3c"),r=n.n(i);r.a.attach(document.body);var a=n("3439"),c=100;function u(){var t=document.documentElement.clientWidth/a["a"].designSize;document.documentElement.style.fontSize=c*Math.min(t,2)+"px"}u(),window.onresize=function(){u()};n("802f");Object(o["a"])()},be9f:function(t,e,n){},c53f:function(t,e,n){"use strict";n("18a0"),n("b970"),n("802f"),n("b775")}});
//# sourceMappingURL=login.98794377.js.map