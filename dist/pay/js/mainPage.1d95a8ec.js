(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],l=0,f=[];l<o.length;l++)s=o[l],r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={mainPage:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;i.push([6,"chunk-vendors","chunk-common"]),n()})({1446:function(t,e,n){},"37d5":function(t,e,n){},"4b14":function(t,e,n){"use strict";var a=n("1446"),r=n.n(a);r.a},6:function(t,e,n){t.exports=n("a67b")},a67b:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.goodsInfo.sellPrice?a("div",[a("div",{staticClass:"top"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("h3",[t._v("购买人数")]),a("span",[t._v(t._s(t.orderCount||0))])]),a("div",{staticClass:"right",on:{click:t.goWithdraw}},[t._v("查看详情")])]),a("div",{staticClass:"goods"},[a("h3",[t._v("本次团购商品")]),a("div",{staticClass:"good"},[a("div",{staticClass:"goodsName"},[a("h3",[t._v(t._s(t.goodsInfo.name||"无"))]),a("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])]),a("div",{staticClass:"goodsPrice"},[a("span",[t._v("拼团价"+t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]),a("em",[t._v("省"+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))]),a("strong",[t._v("原价 "),a("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])])])])]),t._m(0),t._m(1)]),a("div",{staticClass:"start",on:{click:t.shareToFriend}},[a("h3",[t._v("邀请好友开团")]),a("span",[t._v("每成交一人获得返佣"+t._s(t._f("Money")(t.activity.leaderReward||0)))])]),a("Share",{attrs:{share:t.share},on:{know:function(e){t.share=!1}}})],1):a("div",{attrs:{id:"loading"}},[a("img",{attrs:{src:n("cf1c"),alt:""}})])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rules"},[n("h3",[t._v("活动规则")]),n("span",[t._v("1. 一键开团成为团长，享受折扣优惠；")]),n("span",[t._v("2.邀请好友拼团享受折扣优惠，成团后你获得推广返佣")]),n("span",[t._v("3.推广返佣与购买人数正相关，每1人购买，推广返佣增加￥338.3")]),n("span",[t._v("4.拼团结束48小时后，推广返佣会划入到账户余额，支持提现")]),n("span",[t._v("5.工作人员会在每月1号处理上个月的提现申请，1-3天内到账")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goodDetails"},[a("h3",[t._v("商品详情")]),a("img",{attrs:{src:n("775a"),alt:""}}),a("img",{attrs:{src:n("8e30"),alt:""}}),a("img",{attrs:{src:n("1f66"),alt:""}}),a("img",{attrs:{src:n("5fa5"),alt:""}}),a("img",{attrs:{src:n("c037"),alt:""}}),a("img",{attrs:{src:n("338d"),alt:""}}),a("img",{attrs:{src:n("0f01"),alt:""}}),a("img",{attrs:{src:n("eadf"),alt:""}}),a("img",{attrs:{src:n("6846"),alt:""}}),a("img",{attrs:{src:n("4abd"),alt:""}}),a("img",{attrs:{src:n("e509"),alt:""}}),a("img",{attrs:{src:n("3967"),alt:""}}),a("img",{attrs:{src:n("db11"),alt:""}}),a("img",{attrs:{src:n("0d89"),alt:""}}),a("img",{attrs:{src:n("ce54"),alt:""}}),a("img",{attrs:{src:n("c2ae"),alt:""}})])}],s=n("c93e"),o=n("b970"),c=n("0ad9"),u=n("4cfb"),d=n("18a0"),l=n.n(d),f={data:function(){return{USERINFO:!1,info:{appId:"",nonceStr:"",signature:"",timestamp:""}}},created:function(){},methods:{},mounted:function(){var t=this;Object(u["b"])({url:window.location.href}).then(function(e){500!=e.resultCode&&(sessionStorage.setItem("appId",e.signature.appId),Object(c["b"])()?(l.a.config({debug:!1,appId:e.signature.appId,nonceStr:e.signature.nonceStr,timestamp:e.signature.timestamp,signature:e.signature.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","checkJsApi","hideMenuItems","chooseWXPay","showMenuItems"]}),l.a.ready(function(){l.a.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","chooseWXPay","hideMenuItems","showMenuItems"],success:function(t){},fail:function(t){Object(o["g"])("配置失败")}}),l.a.hideMenuItems({menuList:["menuItem:share:appMessage","menuItem:share:timeline","menuItem:readMode","menuItem:share:qq","menuItem:share:weiboApp","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:QZone","menuItem:copyUrl"],success:function(t){},fail:function(t){}}),t.wxSignatureCallback()}),l.a.error(function(t){Object(o["g"])("签名失败")})):window.location.href="./beforeLogin.html")}).catch(function(t){Object(o["g"])("获取签名信息失败")})},beforeDestroy:function(){},components:{}},m=n("3322"),p=n("17a4"),h=n("c53f"),g=n("9690"),v={name:"app",mixins:[f],data:function(){return{orderCount:0,share:!1,goodsInfo:{},activity:{},recommenderId:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{shareToFriend:function(){this.share=!0;var t={activityId:window.actId,groupId:this.groupInfo.id,pageUrl:"/pages/mainPage.html",pageName:"邀请人主页",clickEvent:"点击邀请好友开团",clickEventName:"邀请好友开团"};Object(g["a"])(t)},shareFriend:function(){var t={shareTitle:"团长主页",shareBody:"赶快进入主页参与活动吧",shareUrl:"https://hsj.hulian120.com/pay/activityPage.html?recommenderUserId="+this.recommenderId+"&actId="+window.actId,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(h["a"])(t),Object(h["b"])(t)},wxSignatureCallback:function(){var t=this;Object(m["c"])({activityId:window.actId}).then(function(e){t.orderCount=e.orderCount,t.goodsInfo=Object(s["a"])({},e.goodsInfo),t.activity=Object(s["a"])({},e.activity),t.recommenderId=e.recommenderUserId,t.shareFriend();var n={activityId:window.actId,groupId:t.groupInfo.id,pageUrl:"/pages/mainPage.html",pageName:"邀请人主页",clickEvent:"",clickEventName:""};Object(g["a"])(n)}).catch(function(t){})},goWithdraw:function(){window.location.href="./withdraw.html"}},mounted:function(){},beforeDestroy:function(){},components:{Button:o["a"],Popup:o["d"],Share:p["a"]}},b=v,I=(n("4b14"),n("2877")),_=Object(I["a"])(b,r,i,!1,null,"40d93e78",null);_.options.__file="Index.vue";var y=_.exports;n("b7f1"),n("37d5");new a["a"]({render:function(t){return t(y)}}).$mount("#app")}});
//# sourceMappingURL=mainPage.1d95a8ec.js.map