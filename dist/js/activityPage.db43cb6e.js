(function(t){function e(e){for(var o,a,s=e[0],c=e[1],u=e[2],f=0,d=[];f<s.length;f++)a=s[f],i[a]&&d.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={activityPage:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("ace5")},"0ad9":function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"c",function(){return l});n("cadf"),n("551c"),n("097d"),n("335a");var o=n("a78e"),i=n.n(o),r=n("3439"),a=n("9690");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return window.URLPARAMS||Object(a["a"])(),t?window.URLPARAMS.hasOwnProperty(t)?window.URLPARAMS[t]:null:window.URLPARAMS}function c(){return i.a.get(r["a"].tokenKey)}function u(t){return i.a.set(r["a"].tokenKey,t,{expires:r["a"].cookiesExpires})}function l(){return i.a.remove(r["a"].tokenKey)}},"114c":function(t,e,n){},"1c86":function(t,e,n){},3439:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var o="http://192.168.50.104:8081",i="http://192.168.50.104:8081",r=!1;e["a"]={apiUrl:r?o:i,apiPrefix:"",timeout:5e3,designSize:375,cookiesExpires:7,activityId:1,countDown:60,tokenKey:"ACTIVITY_ACCESS_TOKEN",storageUserKey:"ACTIVITY_USER_STORAGE",requestRetry:4,requestRetryDelay:800}},"3e97":function(t,e,n){"use strict";var o=n("9d6e"),i=n.n(o);i.a},"4cfb":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("b775");function i(t){return Object(o["a"])({url:"https://wxauth.hulian120.com/open/wxSignature",method:"get",params:t})}},6418:function(t,e,n){},"7c9e":function(t,e,n){"use strict";var o=n("1c86"),i=n.n(o);i.a},"802f":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=window.navigator.userAgent.toLowerCase(),i=(/(Android);?[\s/]+([\d.]+)?/.test(o),/(iPad).*OS\s([\d_]+)/.test(o)),r=(/(iPod)(.*OS\s([\d_]+))?/.test(o),!i&&/(iPhone\sOS)\s([\d_]+)/.test(o),/micromessenger/i.test(o));/alipayclient/i.test(o)},9541:function(t,e,n){"use strict";n("28a5");var o=n("0ad9"),i=(n("c53f"),n("4cfb")),r=n("18a0"),a=n.n(r),s=n("b970");e["a"]={data:function(){return{USERINFO:!1,info:{appId:"",nonceStr:"",signature:"",timestamp:""}}},created:function(){},methods:{},mounted:function(){Object(o["a"])();Object(i["a"])({url:window.location.href.split("?")[0]}).then(function(t){a.a.config({debug:!1,appId:t.signature.appId,nonceStr:t.signature.nonceStr,signature:t.signature.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","showMenuItems","hideOptionMenu","closeWindow"]}),a.a.ready(function(){a.a.hideOptionMenu()}),a.a.error(function(){Object(s["f"])("微信签名失败")})}).catch(function(t){Object(s["f"])("获取签名信息失败")})},beforeDestroy:function(){},components:{}}},9690:function(t,e,n){"use strict";n.d(e,"a",function(){return i});n("ac6a"),n("28a5");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=window.location.href.split("?");if(e.length<2)return t?null:{};var n=e[1].split("&"),o={};return n.forEach(function(t){var e=t.split("=");o[e[0]]=e[1]}),t?o.hasOwnProperty(t)?o[t]:null:o}function i(){window.URLPARAMS=o()}},"9d6e":function(t,e,n){},ace5:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{src:t.activity.imageUrl,alt:""}}),t._m(0),o("div",{staticClass:"top"},[o("div",{staticClass:"goods"},[o("h3",[t._v("本次拼团商品")]),o("div",{staticClass:"good"},[o("div",{staticClass:"goodsName"},[o("h3",[t._v(t._s(t.goodsInfo.name||"无"))]),o("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])]),o("div",{staticClass:"goodsPrice"},[o("span",[t._v("拼团价"+t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]),o("em",[t._v("省"+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))]),o("strong",[t._v("价格 "),o("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])]),o("strong",{staticClass:"countNum"},[t._v("已有"+t._s(t.orderCount||0)+"人成团")])])])]),t._m(1),o("div",{staticClass:"goodDetails"},[o("h3",[t._v("商品详情")]),o("img",{attrs:{src:t.goodsInfo.imageUrl,alt:""}})])]),t.groupInfo&&0==t.groupInfo.status?o("div",{staticClass:"start",on:{click:function(e){t.showOpen=!0}}},[t._v("\n       我要开团\n    ")]):o("div",{staticClass:"start",on:{click:function(e){t.showOpen=!0}}},[t._v("\n        查看团详情\n    ")]),t._m(2),o("div",{staticClass:"income",on:{click:t.goIncome}},[o("img",{attrs:{src:n("d7c6"),alt:""}})]),o("Popup",{attrs:{"close-on-click-overlay":!1},model:{value:t.showOpen,callback:function(e){t.showOpen=e},expression:"showOpen"}},[o("div",{staticClass:"wrap"},[o("h3",[t._v("开团方式")]),o("Button",{staticClass:"indexBtn",attrs:{disabled:!t.groupInfo||0==!t.groupInfo.status},on:{click:t.goCheckMobile}},[t._v("A：购买商品，并成为团长")]),o("Button",{staticClass:"indexBtn",on:{click:t.goGroupBuy}},[t._v("B：通过邀请好友成为团长")]),o("Button",{staticClass:"bottomBtn",on:{click:function(e){t.showOpen=!1}}},[t._v("取消")])],1)]),o("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(e){t.showMobile=!1}}})],1)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title"},[o("img",{attrs:{src:n("e987"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rules"},[n("h3",[t._v("活动规则")]),n("span",[t._v("1. 一键开团成为团长，享受折扣优惠；")]),n("span",[t._v("2.邀请好友拼团享受折扣优惠，成团后你获得推广返佣")]),n("span",[t._v("3.推广返佣与购买人数正相关，每1人购买，推广返佣增加￥338.3")]),n("span",[t._v("4.拼团结束48小时后，推广返佣会划入到账户余额，支持提现")]),n("span",[t._v("5.工作人员会在每月1号处理上个月的提现申请，1-3天内到账")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"end"},[n("h3",[t._v("本次活动已结束")])])}],a=n("c93e"),s=n("9541"),c=n("ca41"),u=n("3439"),l=n("b970"),f=n("ff62"),d={name:"app",mixins:[s["a"]],data:function(){return{showOpen:!1,showMobile:!1,mobile:"",orderCount:"",leaderHasBuy:"",goodsInfo:{},activity:{},groupInfo:{}}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{goGroupBuy:function(){window.location.href="./groupBuy.html?id="+this.groupInfo.id+"&status="+this.groupInfo.status},goIncome:function(){window.location.href="./incomeDetails.html"},goCheckMobile:function(){this.showOpen=!1,this.showMobile=!0}},mounted:function(){var t=this;Object(c["b"])({activityId:u["a"].activityId}).then(function(e){t.orderCount=e.orderCount,t.leaderHasBuy=e.leaderHasBuy,t.goodsInfo=Object(a["a"])({},e.goodsInfo),t.activity=Object(a["a"])({},e.activity),t.groupInfo=Object(a["a"])({},e.groupInfo)}).catch(function(t){})},beforeDestroy:function(){},components:{Popup:l["c"],Button:l["a"],PayPopup:f["a"]}},p=d,v=(n("7c9e"),n("2877")),m=Object(v["a"])(p,i,r,!1,null,null,null);m.options.__file="Index.vue";var h=m.exports;n("b7f1"),n("114c");new o["a"]({render:function(t){return t(h)}}).$mount("#app")},b775:function(t,e,n){"use strict";var o=n("bc3a"),i=n.n(o),r=n("3439"),a=n("b970"),s=n("0ad9"),c=i.a.create({baseURL:r["a"].apiUrl+"/"+r["a"].apiPrefix,headers:{Accept:"*/*"},timeout:r["a"].timeout});c.defaults.retry=r["a"].requestRetry,c.defaults.retryDelay=r["a"].requestRetryDelay,c.interceptors.request.use(function(t){t.closeLoading;var e=-1==t.url.indexOf("?");return t.url=e?t.url+"?access_token="+Object(s["a"])():t.url+"&access_token="+Object(s["a"])(),t},function(t){Promise.reject(t)}),c.interceptors.response.use(function(t){var e=t;if(t.config.closeLoading||setTimeout(function(t){},400),200===e.status)return 200!=e.data.resultCode?(Object(a["f"])(e.data.message),402==e.data.resultCode&&(Object(s["c"])(),setTimeout(function(t){window.location.href="./login.html"},2e3)),Promise.reject("error")):e.data.data;Object(a["f"])("数据返回出错")},function(t){return setTimeout(function(t){},300),Object(a["f"])("请求未响应"),Promise.reject(t)}),e["a"]=c},b7f1:function(t,e,n){"use strict";n("f5df"),n("157a"),n("6418");var o=n("9690"),i=n("fe3c"),r=n.n(i);r.a.attach(document.body);var a=n("3439"),s=100;function c(){var t=document.documentElement.clientWidth/a["a"].designSize;document.documentElement.style.fontSize=s*Math.min(t,2)+"px"}c(),window.onresize=function(){c()};n("802f");Object(o["a"])()},c53f:function(t,e,n){"use strict";n("18a0"),n("b970"),n("802f"),n("b775")},ca41:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"g",function(){return a}),n.d(e,"e",function(){return s}),n.d(e,"h",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"c",function(){return l}),n.d(e,"f",function(){return f});var o=n("b775");function i(t){return Object(o["a"])({url:"/sale/api/activity/activityReward",method:"get",params:t})}function r(t){return Object(o["a"])({url:"/sale/api/activity/leaderActivity",method:"get",params:t})}function a(t){return Object(o["a"])({url:"/sale/api/activity/userActivity",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/sale/api/activity/rewardList",method:"get",params:t})}function c(t){return Object(o["a"])({url:"/sale/api/activity/withdrawList",method:"get",params:t})}function u(t){return Object(o["a"])({url:"/sale/api/activity/realNameAuth",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/sale/api/activity/randomImg",method:"get",params:t})}function f(t){return Object(o["a"])({url:"/sale/api/activity/sendMsgCode",method:"get",params:t})}},d7c6:function(t,e,n){t.exports=n.p+"img/2.657cacd1.png"},e987:function(t,e,n){t.exports=n.p+"img/long.3717fbac.png"},ff62:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Popup",{attrs:{"close-on-click-overlay":!1},model:{value:t.showMobile,callback:function(e){t.showMobile=e},expression:"showMobile"}},[n("div",{staticClass:"wrapMobile"},[n("h3",[t._v("填写手机号")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"number",placeholder:"用于获取课程卡号/密码，请务必确认"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),n("Button",{staticClass:"bottomBtn",on:{click:t.goPay}},[t._v("去支付")])],1)])},i=[],r=n("b970"),a={name:"PayPopup",props:["showMobile"],data:function(){return{mobile:""}},methods:{goPay:function(){var t=/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;0!=this.mobile.length&&this.mobile&&null!=this.mobile?t.test(this.mobile)&&Object(r["f"])("请输入正确格式的手机号"):Object(r["f"])("请填写手机号")}},components:{Popup:r["c"]}},s=a,c=(n("3e97"),n("2877")),u=Object(c["a"])(s,o,i,!1,null,"39b3b378",null);u.options.__file="PayPopup.vue";e["a"]=u.exports}});
//# sourceMappingURL=activityPage.db43cb6e.js.map