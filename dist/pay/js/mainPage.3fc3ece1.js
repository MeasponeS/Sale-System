(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={mainPage:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=c;s.push([7,"chunk-vendors","chunk-common"]),n()})({3106:function(e,t,n){},"37d5":function(e,t,n){},7:function(e,t,n){e.exports=n("a67b")},a67b:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.goodsInfo.sellPrice?n("div",{attrs:{id:"app"}},[n("div",{staticClass:"top"},[n("div",{staticClass:"header"},[n("div",{staticClass:"left"},[n("h3",[e._v("购买人数")]),n("span",[e._v(e._s(e.orderCount||0))])]),n("div",{staticClass:"right",on:{click:e.goWithdraw}},[e._v("查看详情")])]),n("div",{staticClass:"goods"},[n("h3",[e._v("本次团购商品")]),n("div",{staticClass:"good"},[n("div",{staticClass:"goodsName"},[n("h3",[e._v(e._s(e.goodsInfo.name||"无"))]),n("span",[e._v(e._s(e.activity.minCount||0)+"人可成团")])]),n("div",{staticClass:"goodsPrice"},[n("span",[e._v("拼团价"+e._s(e._f("Money")(e.goodsInfo.sellPrice||0)))]),n("em",[e._v("省"+e._s(e._f("Money")(e.goodsInfo.saveMoney||0)))]),n("strong",[e._v("价格 "),n("span",[e._v(e._s(e._f("Money")(e.goodsInfo.originPrice||0)))])])])])]),e._m(0),e._m(1)]),n("div",{staticClass:"start",on:{click:function(t){e.share=!0}}},[n("h3",[e._v("邀请好友开团")]),n("span",[e._v("每成交一人获得返佣"+e._s(e._f("Money")(e.activity.leaderReward||0)))])]),n("Share",{attrs:{share:e.share},on:{know:function(t){e.share=!1}}})],1):e._e()},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rules"},[n("h3",[e._v("活动规则")]),n("span",[e._v("1. 一键开团成为团长，享受折扣优惠；")]),n("span",[e._v("2.邀请好友拼团享受折扣优惠，成团后你获得推广返佣")]),n("span",[e._v("3.推广返佣与购买人数正相关，每1人购买，推广返佣增加￥338.3")]),n("span",[e._v("4.拼团结束48小时后，推广返佣会划入到账户余额，支持提现")]),n("span",[e._v("5.工作人员会在每月1号处理上个月的提现申请，1-3天内到账")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goodDetails"},[a("h3",[e._v("商品详情")]),a("img",{attrs:{src:n("775a"),alt:""}}),a("img",{attrs:{src:n("8e30"),alt:""}}),a("img",{attrs:{src:n("1f66"),alt:""}}),a("img",{attrs:{src:n("5fa5"),alt:""}}),a("img",{attrs:{src:n("c037"),alt:""}}),a("img",{attrs:{src:n("338d"),alt:""}}),a("img",{attrs:{src:n("0f01"),alt:""}}),a("img",{attrs:{src:n("eadf"),alt:""}}),a("img",{attrs:{src:n("6846"),alt:""}}),a("img",{attrs:{src:n("4abd"),alt:""}}),a("img",{attrs:{src:n("e509"),alt:""}}),a("img",{attrs:{src:n("3967"),alt:""}}),a("img",{attrs:{src:n("db11"),alt:""}}),a("img",{attrs:{src:n("0d89"),alt:""}}),a("img",{attrs:{src:n("ce54"),alt:""}}),a("img",{attrs:{src:n("c2ae"),alt:""}})])}],o=n("c93e"),i=n("b970"),c=n("3322"),u=n("17a4"),d=n("18a0"),l=n.n(d),f=n("c53f"),m={name:"app",data:function(){return{orderCount:0,share:!1,goodsInfo:{},activity:{},recommenderId:""}},filters:{Money:function(e){return"￥"+parseInt(e)/100}},methods:{shareFriend:function(){var e={shareTitle:"团长主页",shareBody:"赶快进入主页参与活动吧",shareUrl:"https://hsj.hulian120.com/pay/activityPage.html?recommenderUserId="+this.recommenderId+"&actId="+window.actId,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(f["a"])(e),Object(f["b"])(e)},wxSignatureCallback:function(){var e=this;Object(c["c"])({activityId:window.actId}).then(function(t){e.orderCount=t.orderCount,e.goodsInfo=Object(o["a"])({},t.goodsInfo),e.activity=Object(o["a"])({},t.activity),e.recommenderId=t.recommenderUserId,e.shareFriend()}).catch(function(e){})},goWithdraw:function(){window.location.href="./withdraw.html"}},mounted:function(){},beforeDestroy:function(){},components:{Button:i["a"],Popup:i["d"],Share:u["a"]}},p=m,h=(n("d7e9"),n("2877")),g=Object(h["a"])(p,r,s,!1,null,"5ece81a0",null);g.options.__file="Index.vue";var v=g.exports,_=(n("b7f1"),n("37d5"),n("4cfb")),b=n("0ad9"),I=void 0;Object(_["b"])({url:window.location.href}).then(function(e){500!=e.resultCode&&(sessionStorage.setItem("appId",e.signature.appId),Object(b["b"])()||(window.location.href="./beforeLogin.html"),l.a.config({debug:!1,appId:e.signature.appId,nonceStr:e.signature.nonceStr,timestamp:e.signature.timestamp,signature:e.signature.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","checkJsApi","hideMenuItems","chooseWXPay","showMenuItems"]}),l.a.ready(function(){l.a.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","chooseWXPay","hideMenuItems","showMenuItems"],success:function(e){},fail:function(e){Object(i["g"])("配置失败")}}),l.a.hideMenuItems({menuList:["menuItem:share:appMessage","menuItem:share:timeline","menuItem:readMode","menuItem:share:qq","menuItem:share:weiboApp","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:QZone","menuItem:copyUrl"],success:function(e){},fail:function(e){}}),I.wxSignatureCallback()}),l.a.error(function(e){Object(i["g"])("签名失败")}))}).catch(function(e){Object(i["g"])("获取签名信息失败")}),new a["a"]({render:function(e){return e(v)}}).$mount("#app")},d7e9:function(e,t,n){"use strict";var a=n("3106"),r=n.n(a);r.a}});
//# sourceMappingURL=mainPage.3fc3ece1.js.map