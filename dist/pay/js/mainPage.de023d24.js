(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={mainPage:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([7,"chunk-vendors","chunk-common"]),n()})({"37d5":function(t,e,n){},"5e66":function(t,e,n){},7:function(t,e,n){t.exports=n("a67b")},"8d31":function(t,e,n){"use strict";var o=n("5e66"),r=n.n(o);r.a},a67b:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"top"},[n("div",{staticClass:"header"},[n("div",{staticClass:"left"},[n("h3",[t._v("成功购买人数")]),n("span",[t._v(t._s(t.orderCount||0))])]),n("div",{staticClass:"right",on:{click:t.goWithdraw}},[t._v("查看详情")])]),n("div",{staticClass:"goods"},[n("h3",[t._v("本次拼团商品")]),n("div",{staticClass:"good"},[n("div",{staticClass:"goodsName"},[n("h3",[t._v(t._s(t.goodsInfo.name||"无"))]),n("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])]),n("div",{staticClass:"goodsPrice"},[n("span",[t._v("拼团价"+t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]),n("em",[t._v("省"+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))]),n("strong",[t._v("价格 "),n("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])])])])]),t._m(0),n("div",{staticClass:"goodDetails"},[n("h3",[t._v("商品详情")]),n("img",{attrs:{src:t.goodsInfo.imageUrl,alt:""}})])]),n("div",{staticClass:"start",on:{click:t.openGroupByShare}},[n("h3",[t._v("邀请好友开团")]),n("span",[t._v("每成交一人获得返佣"+t._s(t._f("Money")(t.activity.leaderReward||0)))])]),n("div",{staticClass:"end",on:{click:function(e){t.show=!0}}},[n("h3",[t._v("本次活动已结束")])]),n("Popup",{attrs:{"close-on-click-overlay":!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"wrap"},[n("h3",[t._v("开团方式")]),n("Button",{staticClass:"indexBtn",on:{click:t.goActivityPage}},[t._v("A：分享到朋友圈")]),n("Button",{staticClass:"indexBtn"},[t._v("B：分享给好友")]),n("Button",{staticClass:"bottomBtn",on:{click:function(e){t.show=!1}}},[t._v("取消")])],1)]),n("Share",{attrs:{share:t.share},on:{know:function(e){t.share=!1}}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rules"},[n("h3",[t._v("活动规则")]),n("span",[t._v("1. 一键开团成为团长，享受折扣优惠；")]),n("span",[t._v("2.邀请好友拼团享受折扣优惠，成团后你获得推广返佣")]),n("span",[t._v("3.推广返佣与购买人数正相关，每1人购买，推广返佣增加￥338.3")]),n("span",[t._v("4.拼团结束48小时后，推广返佣会划入到账户余额，支持提现")]),n("span",[t._v("5.工作人员会在每月1号处理上个月的提现申请，1-3天内到账")])])}],i=n("c93e"),s=n("b970"),c=n("9541"),u=n("3322"),l=n("3439"),d=n("17a4"),f=n("18a0"),v=n.n(f),h={name:"app",mixins:[c["a"]],data:function(){return{show:!1,orderCount:0,share:!1,goodsInfo:{},activity:{},recommenderId:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{wxSignatureCallback:function(){var t={shareTitle:"分享给好友开团",shareBody:"这是我分享给好友得团",shareUrl:"https://hsj.hulian120.com/pay/groupBuy.html?recommenderUserId="+window.URLPARAMS.id+"activityId"+l["a"].activityId,shareImg:"//www.baidu.com/img/bd_logo1.png?where=super"};v.a.onMenuShareAppMessage({title:t.shareTitle,desc:t.shareBody,link:t.shareUrl,imgUrl:t.shareImg,success:function(){Object(s["f"])("分享成功")},cancel:function(){Object(s["f"])("分享失败")}})},goWithdraw:function(){window.location.href="./withdraw.html"},goActivityPage:function(){window.location.href="./activityPage.html?id="+this.recommenderId},openGroupByShare:function(){this.share=!0,this.show=!1}},mounted:function(){var t=this;Object(u["c"])({activityId:l["a"].activityId}).then(function(e){t.orderCount=e.orderCount,t.goodsInfo=Object(i["a"])({},e.goodsInfo),t.activity=Object(i["a"])({},e.activity),t.recommenderId=e.recommenderUserId}).catch(function(t){})},beforeDestroy:function(){},components:{Button:s["a"],Popup:s["c"],Share:d["a"]}},p=h,_=(n("8d31"),n("2877")),g=Object(_["a"])(p,r,a,!1,null,"3360a700",null);g.options.__file="Index.vue";var m=g.exports;n("b7f1"),n("37d5");new o["a"]({render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=mainPage.de023d24.js.map