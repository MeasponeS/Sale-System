(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)o=i[u],a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={mainPage:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;s.push([7,"chunk-vendors","chunk-common"]),r()})({"37d5":function(t,e,r){},3843:function(t,e,r){"use strict";var n=r("4c4e"),a=r.n(n);a.a},"4c4e":function(t,e,r){},7:function(t,e,r){t.exports=r("a67b")},a67b:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.goodsInfo.sellPrice?r("div",{attrs:{id:"app"}},[r("div",{staticClass:"top"},[r("div",{staticClass:"header"},[r("div",{staticClass:"left"},[r("h3",[t._v("购买人数")]),r("span",[t._v(t._s(t.orderCount||0))])]),r("div",{staticClass:"right",on:{click:t.goWithdraw}},[t._v("查看详情")])]),r("div",{staticClass:"goods"},[r("h3",[t._v("本次团购商品")]),r("div",{staticClass:"good"},[r("div",{staticClass:"goodsName"},[r("h3",[t._v(t._s(t.goodsInfo.name||"无"))]),r("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])]),r("div",{staticClass:"goodsPrice"},[r("span",[t._v("拼团价"+t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]),r("em",[t._v("省"+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))]),r("strong",[t._v("价格 "),r("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])])])])]),t._m(0),t._m(1)]),r("div",{staticClass:"start",on:{click:function(e){t.share=!0}}},[r("h3",[t._v("邀请好友开团")]),r("span",[t._v("每成交一人获得返佣"+t._s(t._f("Money")(t.activity.leaderReward||0)))])]),r("Share",{attrs:{share:t.share},on:{know:function(e){t.share=!1}}})],1):t._e()},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rules"},[r("h3",[t._v("活动规则")]),r("span",[t._v("1. 一键开团成为团长，享受折扣优惠；")]),r("span",[t._v("2.邀请好友拼团享受折扣优惠，成团后你获得推广返佣")]),r("span",[t._v("3.推广返佣与购买人数正相关，每1人购买，推广返佣增加￥338.3")]),r("span",[t._v("4.拼团结束48小时后，推广返佣会划入到账户余额，支持提现")]),r("span",[t._v("5.工作人员会在每月1号处理上个月的提现申请，1-3天内到账")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goodDetails"},[n("h3",[t._v("商品详情")]),n("img",{attrs:{src:r("775a"),alt:""}}),n("img",{attrs:{src:r("8e30"),alt:""}}),n("img",{attrs:{src:r("1f66"),alt:""}}),n("img",{attrs:{src:r("5fa5"),alt:""}}),n("img",{attrs:{src:r("c037"),alt:""}}),n("img",{attrs:{src:r("338d"),alt:""}}),n("img",{attrs:{src:r("0f01"),alt:""}}),n("img",{attrs:{src:r("eadf"),alt:""}}),n("img",{attrs:{src:r("6846"),alt:""}}),n("img",{attrs:{src:r("4abd"),alt:""}}),n("img",{attrs:{src:r("e509"),alt:""}}),n("img",{attrs:{src:r("3967"),alt:""}}),n("img",{attrs:{src:r("db11"),alt:""}}),n("img",{attrs:{src:r("0d89"),alt:""}}),n("img",{attrs:{src:r("ce54"),alt:""}}),n("img",{attrs:{src:r("c2ae"),alt:""}})])}],o=r("c93e"),i=r("b970"),c=r("9541"),l=r("3322"),d=r("17a4"),u=(r("18a0"),r("c53f")),f={name:"app",mixins:[c["a"]],data:function(){return{orderCount:0,share:!1,goodsInfo:{},activity:{},recommenderId:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{shareFriend:function(){var t={shareTitle:"团长主页",shareBody:"赶快进入主页参与活动吧",shareUrl:"https://hsj.hulian120.com/pay/activityPage.html?recommenderUserId="+this.recommenderId+"&actId="+window.actId,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(u["a"])(t),Object(u["b"])(t)},wxSignatureCallback:function(){var t=this;Object(l["c"])({activityId:window.actId}).then(function(e){t.orderCount=e.orderCount,t.goodsInfo=Object(o["a"])({},e.goodsInfo),t.activity=Object(o["a"])({},e.activity),t.recommenderId=e.recommenderUserId,t.shareFriend()}).catch(function(t){})},goWithdraw:function(){window.location.href="./withdraw.html"}},mounted:function(){},beforeDestroy:function(){},components:{Button:i["a"],Popup:i["d"],Share:d["a"]}},v=f,p=(r("3843"),r("2877")),h=Object(p["a"])(v,a,s,!1,null,"acf65a76",null);h.options.__file="Index.vue";var m=h.exports;r("b7f1"),r("37d5");new n["a"]({render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=mainPage.819e9505.js.map