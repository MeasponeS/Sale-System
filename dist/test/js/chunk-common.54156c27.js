(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0418":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"cHeader"},[o("img",{attrs:{src:n("fef2"),alt:""},on:{click:e.goBack}}),o("h3",{on:{click:e.goBack}},[e._v("返回")])])},i=[],a={name:"Header",props:[],data:function(){return{}},methods:{goBack:function(){this.$emit("goBack")}},mounted:function(){},components:{}},r=a,c=(n("b89e"),n("2877")),s=Object(c["a"])(r,o,i,!1,null,"009b7296",null);s.options.__file="Header.vue";t["a"]=s.exports},"0ad9":function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return d}),n.d(t,"a",function(){return l}),n.d(t,"d",function(){return p});n("335a");var o=n("a78e"),i=n.n(o),a=n("3439"),r=n("9690");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return window.URLPARAMS||Object(r["b"])(),e?window.URLPARAMS.hasOwnProperty(e)?window.URLPARAMS[e]:null:window.URLPARAMS}function s(){return"null"==i.a.get(a["a"].tokenKey)||null==i.a.get(a["a"].tokenKey)||""==i.a.get(a["a"].tokenKey)?"":i.a.get(a["a"].tokenKey)}function u(e){return i.a.set(a["a"].tokenKey,e,{expires:a["a"].cookiesExpires})}function d(e){return i.a.set("currentPage",e,{expires:a["a"].cookiesExpires})}function l(){return i.a.get("currentPage")||""}function p(){return i.a.remove(a["a"].tokenKey)}},"0b08":function(e,t,n){e.exports=n.p+"img/0.3fce91bc.png"},"0c81":function(e,t,n){"use strict";var o=n("26d9"),i=n.n(o);i.a},"0d89":function(e,t,n){e.exports=n.p+"img/14.9f4d79e8.png"},"0f01":function(e,t,n){e.exports=n.p+"img/7.6b2ce989.png"},"17a4":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Popup",{attrs:{"close-on-click-overlay":!1},model:{value:e.share,callback:function(t){e.share=t},expression:"share"}},[o("div",{staticClass:"share",on:{click:e.know}},[o("img",{staticClass:"yd",attrs:{src:n("ceda"),alt:""}}),o("div",{staticClass:"tipp"},[e._v("点击右上角的“...”,开始分享吧！")])])])},i=[],a=n("b970"),r={name:"Share",props:["share"],components:{Popup:a["d"]},methods:{know:function(){this.$emit("know")}}},c=r,s=(n("0c81"),n("2877")),u=Object(s["a"])(c,o,i,!1,null,"a3b674c6",null);u.options.__file="Share.vue";t["a"]=u.exports},"1f66":function(e,t,n){e.exports=n.p+"img/3.b83278be.png"},"234c":function(e,t,n){},"26d9":function(e,t,n){},3322:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return s});var o=n("b775");function i(e){return Object(o["a"])({url:"/sale/api/recommender/generateRecommender",method:"post",data:e})}function a(e){return Object(o["a"])({url:"/sale/api/recommender/generateLeader",method:"get",params:e})}function r(e){return Object(o["a"])({url:"/sale/api/recommender/sendSmsCode",method:"post",data:e})}function c(e){return Object(o["a"])({url:"/sale/api/recommender/checkSmsCode",method:"post",data:e})}function s(e){return Object(o["a"])({url:"/sale/api/recommender/index",method:"get",params:e})}},"338d":function(e,t,n){e.exports=n.p+"img/6.6292d634.png"},3439:function(e,t,n){"use strict";var o="http://testsale.hulian120.com",i="https://pay.hulian120.com",a=!1;t["a"]={apiUrl:a?o:i,apiPrefix:"",timeout:5e3,designSize:375,cookiesExpires:7,activityId:1,countDown:60,tokenKey:"ACTIVITY_ACCESS_TOKEN",storageUserKey:"ACTIVITY_USER_STORAGE",wxUrl:"https://wxauth.hulian120.com/open/getPayCodeFor",shareUrl:"https://hsj.hulian120.com/pay/",requestRetry:4,serverUrl:"https://pay.hulian120.com/sale/api/wx/login",requestRetryDelay:800}},3967:function(e,t,n){e.exports=n.p+"img/12.543dc657.png"},"4abd":function(e,t,n){e.exports=n.p+"img/10.1d036bb7.png"},"4cfb":function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var o=n("b775");function i(e){return Object(o["a"])({closeLoading:!0,url:"https://wxauth.hulian120.com/open/wxSignature",method:"get",params:e})}function a(e){return Object(o["a"])({url:"https://wxauth.hulian120.com/open/getToken",method:"get",params:e})}},"50a0":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"countNum"},[(1==e.status||2==e.status)&&e.second>0?n("div",[n("span",[e._v(e._s(e.h))]),e._v(":"),n("span",[e._v(e._s(e.m))]),e._v(":"),n("span",[e._v(e._s(e.s))])]):n("div",[n("span",[e._v("00")]),e._v(":"),n("span",[e._v("00")]),e._v(":"),n("span",[e._v("00")])])])},i=[],a=(n("c5f6"),{name:"Countdown",props:{second:Number,status:Number},data:function(){return{h:"",m:"",s:""}},mounted:function(){this.initFn()},watch:{second:{deep:!0,handler:function(e,t){e>0?this.initFn():e<=0&&(clearInterval(window.Countdown),this.h="00",this.m="00",this.s="00",this.$emit("end"))}}},methods:{initFn:function(){var e=this;if(clearInterval(window.Countdown),!(this.second<=0)){var t=this.second,n=this;window.Countdown=setInterval(function(o){t<=0&&(clearInterval(window.Countdown),e.h="00",e.m="00",e.s="00",e.$emit("end")),t--;var i=Math.floor(t/3600),a=Math.floor(t%3600/60),r=Math.floor(t%60);n.h=i<10?"0"+i:i,n.m=a<10?"0"+a:a,n.s=r<10?"0"+r:r},1e3)}}}}),r=a,c=(n("b4da"),n("2877")),s=Object(c["a"])(r,o,i,!1,null,"377daef2",null);s.options.__file="Countdown.vue";t["a"]=s.exports},"5fa5":function(e,t,n){e.exports=n.p+"img/4.767dc8be.png"},6418:function(e,t,n){},6846:function(e,t,n){e.exports=n.p+"img/9.fde3240e.png"},"775a":function(e,t,n){e.exports=n.p+"img/1.df954714.png"},8314:function(e,t,n){},"8e30":function(e,t,n){e.exports=n.p+"img/2.16c924f5.png"},9541:function(e,t,n){"use strict";var o=n("0ad9"),i=n("4cfb"),a=n("18a0"),r=n.n(a),c=n("3439"),s=n("b970");t["a"]={data:function(){return{USERINFO:!1,info:{appId:"",nonceStr:"",signature:"",timestamp:""}}},created:function(){},methods:{},mounted:function(){var e=this;Object(i["b"])({url:window.location.href}).then(function(t){if(500!=t.resultCode){if(sessionStorage.setItem("appId",t.signature.appId),!Object(o["b"])())return Object(o["e"])(window.location.href),void(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+t.signature.appId+"&redirect_uri="+encodeURIComponent(c["a"].wxUrl)+"&response_type=code&scope=snsapi_userinfo&state=needJump#wechat_redirect");r.a.config({debug:!1,appId:t.signature.appId,nonceStr:t.signature.nonceStr,timestamp:t.signature.timestamp,signature:t.signature.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","checkJsApi","hideMenuItems","chooseWXPay","showMenuItems"]}),r.a.ready(function(){r.a.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","chooseWXPay","hideMenuItems","showMenuItems"],success:function(e){},fail:function(e){Object(s["e"])("配置失败")}}),r.a.hideMenuItems({menuList:["menuItem:share:appMessage","menuItem:share:timeline","menuItem:readMode","menuItem:share:qq","menuItem:share:weiboApp","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:QZone","menuItem:copyUrl"],success:function(e){},fail:function(e){}}),e.wxSignatureCallback()}),r.a.error(function(e){Object(s["e"])("签名失败")})}}).catch(function(e){Object(s["e"])("获取签名信息失败")})},beforeDestroy:function(){},components:{}}},9690:function(e,t,n){"use strict";n("ac6a"),n("28a5");var o=n("b775");function i(e){return Object(o["a"])({closeLoading:!0,url:"/sale/api/accesslog/log",method:"post",data:e})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=window.location.href.split("?");if(t.length<2)return e?null:{};var n=t[1].split("&"),o={};return n.forEach(function(e){var t=e.split("=");o[t[0]]=t[1]}),e?o.hasOwnProperty(e)?o[e]:null:o}function r(){window.URLPARAMS=a()}function c(e){i(e).then(function(e){}).catch(function(e){})}n.d(t,"b",function(){return r}),n.d(t,"a",function(){return c})},"9ebe":function(e,t,n){},b4da:function(e,t,n){"use strict";var o=n("9ebe"),i=n.n(o);i.a},b775:function(e,t,n){"use strict";var o,i=n("bc3a"),a=n.n(i),r=n("3439"),c=n("b970"),s=n("0ad9"),u=a.a.create({baseURL:r["a"].apiUrl+"/"+r["a"].apiPrefix,headers:{Accept:"*/*"},timeout:r["a"].timeout});u.defaults.retry=r["a"].requestRetry,u.defaults.retryDelay=r["a"].requestRetryDelay,u.interceptors.request.use(function(e){e.closeLoading||(o=c["e"].loading({mask:!0,message:"加载中..."}));var t=-1==e.url.indexOf("?");return e.url=t?e.url+"?access_token="+Object(s["b"])():e.url+"&access_token="+Object(s["b"])(),e},function(e){Promise.reject(e)}),u.interceptors.response.use(function(e){var t=e;if(e.config.closeLoading||setTimeout(function(e){o.clear()},800),200==t.status)return 200!=t.data.resultCode?102004==t.data.resultCode?void(window.location.href="./beforeLogin.html"):102005==t.data.resultCode?void Object(c["e"])("该推荐人已绑定其它微信"):402==t.data.resultCode?(Object(s["d"])(),void setTimeout(function(e){Object(s["e"])(window.location.href),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+sessionStorage.getItem("appId")+"&redirect_uri="+encodeURIComponent(r["a"].wxUrl)+"&response_type=code&scope=snsapi_userinfo&state=needJump#wechat_redirect"},600)):(Object(c["e"])(t.data.message),Promise.reject("error")):t.data.data;Object(c["e"])("数据返回出错")},function(e){return setTimeout(function(e){o.clear()},800),Object(c["e"])(e.message),Promise.reject(e)}),t["a"]=u},b7f1:function(e,t,n){"use strict";n("f5df"),n("157a"),n("4b8a"),n("6418");var o=n("9690"),i=n("3439"),a=100;function r(){var e=document.documentElement.clientWidth/i["a"].designSize;document.documentElement.style.fontSize=a*Math.min(e,2)+"px"}r(),window.onresize=function(){r()};var c=window.navigator.userAgent.toLowerCase(),s=(/(Android);?[\s/]+([\d.]+)?/.test(c),/(iPad).*OS\s([\d_]+)/.test(c)),u=(/(iPod)(.*OS\s([\d_]+))?/.test(c),!s&&/(iPhone\sOS)\s([\d_]+)/.test(c),/micromessenger/i.test(c));/alipayclient/i.test(c);Object(o["b"])(),window.actId=1,u||(document.body.style.display="none",alert("请在微信客户端打开该链接"))},b89e:function(e,t,n){"use strict";var o=n("8314"),i=n.n(o);i.a},c037:function(e,t,n){e.exports=n.p+"img/5.dd605e1e.png"},c2ae:function(e,t,n){e.exports=n.p+"img/16.d5ea0072.png"},c53f:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return s});var o=n("18a0"),i=n.n(o),a=n("b970");function r(e){i.a.showMenuItems({menuList:["menuItem:share:timeline","menuItem:share:appMessage"],success:function(e){},fail:function(e){}}),i.a.onMenuShareAppMessage({title:e.shareTitle,desc:e.shareBody,link:e.shareUrl,imgUrl:e.shareImg,success:function(){},cancel:function(){}})}function c(e){setTimeout(function(){i.a.onMenuShareTimeline({title:e.shareTitle,link:e.shareUrl,imgUrl:e.shareImg,success:function(){},cancel:function(){}})},600)}function s(e,t){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appId,timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.packageValue,signType:"MD5",paySign:e.paySign},function(n){"get_brand_wcpay_request:ok"==n.err_msg?t(e.orderNum):"get_brand_wcpay_request:cancel"==n.err_msg?Object(a["e"])("您已取消支付。"):Object(a["e"])("充值失败，请稍后再试。")})}},ca41:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"h",function(){return r}),n.d(t,"f",function(){return c}),n.d(t,"j",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"d",function(){return d}),n.d(t,"g",function(){return l}),n.d(t,"i",function(){return p}),n.d(t,"c",function(){return f});var o=n("b775");function i(e){return Object(o["a"])({url:"/sale/api/activity/activityReward",method:"get",params:e})}function a(e){return Object(o["a"])({url:"/sale/api/activity/leaderActivity",method:"get",params:e})}function r(e){return Object(o["a"])({url:"/sale/api/activity/userActivity",method:"get",params:e})}function c(e){return Object(o["a"])({url:"/sale/api/activity/rewardList",method:"get",params:e})}function s(e){return Object(o["a"])({url:"/sale/api/activity/withdrawList",method:"get",params:e})}function u(e){return Object(o["a"])({url:"/sale/api/activity/realNameAuth",method:"post",data:e})}function d(e){return Object(o["a"])({closeLoading:!0,url:"/sale/api/activity/randomImg",method:"get",params:e})}function l(e){return Object(o["a"])({closeLoading:!0,url:"/sale/api/activity/sendMsgCode",method:"get",params:e})}function p(e){return Object(o["a"])({url:"/sale/api/activity/withdraw",method:"post",data:e})}function f(e){return Object(o["a"])({closeLoading:!0,url:"/sale/api/activity/quickGroupList",method:"get",params:e})}},ccbb:function(e,t,n){"use strict";var o=n("234c"),i=n.n(o);i.a},ce54:function(e,t,n){e.exports=n.p+"img/15.f169297d.png"},ceda:function(e,t,n){e.exports=n.p+"img/fenxiang.2dc14274.png"},cf1c:function(e,t,n){e.exports=n.p+"img/loading.6dcefd6f.gif"},db11:function(e,t,n){e.exports=n.p+"img/13.ccaaf05a.png"},e509:function(e,t,n){e.exports=n.p+"img/11.99152ac7.png"},eadf:function(e,t,n){e.exports=n.p+"img/8.6b7ce3c4.png"},f8b7:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return r});var o=n("b775");function i(e){return Object(o["a"])({url:"/sale/api/order/creatLeaderOrder",method:"post",data:e})}function a(e){return Object(o["a"])({url:"/sale/api/order/creatGeneralOrder",method:"post",data:e})}function r(e){return Object(o["a"])({url:"/sale/api/order/wxQueryOrder",method:"post",data:e})}},fef2:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAABIklEQVRYR9XZPQ7CMAwF4KQd2Vg69g5cBq7A0VjoxsJdUnXsAZhQVZShEuqA4uQ9O2TOz5cosmzZO4PRdd1hnueX9GgvXVA6v+/7U9u2j2VZrtM0DZL9VLER2jTN03t/XNf1No7jpUrsN9Q5dw8hROi7OiwCGi9F/wYoKB2LhFKxaCgNy4BSsCwoHLuDDiGEszQ8/QplsGjAhsJeVgMKwWpBi7Ga0CKsNjQbawHNwlpBxVhLqAhrDU3G1gBNwtYCzcFmlSOS0qU4N2BmUpKLJCcyNYCTsfEFrMEirDVYjLUEZ2GtwNlYC3ARVhtcjNUEQ7BaYBhWAwzFssFwLBNMwbLANCwDTMWiwXQsEqyCRYHVsHtw1a2lrXz5m6bdBs5th34AilIMPPrXzVoAAAAASUVORK5CYII="},ff62:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Popup",{attrs:{"close-on-click-overlay":!1},on:{"click-overlay":function(t){e.$emit("closePay")}},model:{value:e.showMobile,callback:function(t){e.showMobile=t},expression:"showMobile"}},[n("div",{staticClass:"wrapMobile"},[n("h3",[e._v("填写手机号")]),n("Field",{staticClass:"input",attrs:{autofocus:"true",maxlength:"11",type:"tel",placeholder:"用于获取课程卡号/密码，请务必确认"},on:{blur:e.handleHeight},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),n("Button",{staticClass:"bottomBtn",on:{click:e.goPay}},[e._v("去支付")])],1)])},i=[],a=n("b970"),r={name:"PayPopup",props:["showMobile"],data:function(){return{mobile:""}},methods:{goPay:function(){0!=this.mobile.length&&this.mobile&&null!=this.mobile?this.$emit("wxPay",this.mobile):Object(a["e"])("请填写手机号")},handleHeight:function(){setTimeout(function(){var e=document.documentElement.scrollTop||document.body.scrollTop||0;window.scrollTo(0,Math.max(e-1,0))},100)}},mounted:function(){},components:{Popup:a["d"],Field:a["b"]}},c=r,s=(n("ccbb"),n("2877")),u=Object(s["a"])(c,o,i,!1,null,"62630c25",null);u.options.__file="PayPopup.vue";t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-common.54156c27.js.map