(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={mainPage:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=c;s.push([7,"chunk-vendors","chunk-common"]),n()})({"37d5":function(e,t,n){},"677a":function(e,t,n){},7:function(e,t,n){e.exports=n("a67b")},a67b:function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.goodsInfo.sellPrice,expression:"goodsInfo.sellPrice"}]},[a("div",{attrs:{id:"app"}},[a("div",[a("div",{staticClass:"top"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("h3",[e._v("购买人数")]),a("span",[e._v(e._s(e.orderCount||0))]),a("h4",[e._v("注:如果拼团失败，则购买人数会相应减少")])]),a("div",{staticClass:"right",on:{click:e.goWithdraw}},[e._v("查看详情")])]),a("div",{staticClass:"goods"},[a("h3",[e._v("本次团购商品")]),a("div",{staticClass:"good"},[a("div",{staticClass:"goodsName"},[a("h3",[e._v(e._s(e.goodsInfo.name||"无"))]),a("span",[e._v(e._s(e.activity.minCount||0)+"人可成团")])]),a("div",{staticClass:"goodsPrice"},[a("span",[e._v("拼团价"+e._s(e._f("Money")(e.goodsInfo.sellPrice||0)))]),a("em",[e._v("省"+e._s(e._f("Money")(e.goodsInfo.saveMoney||0)))]),a("strong",[e._v("原价 "),a("span",[e._v(e._s(e._f("Money")(e.goodsInfo.originPrice||0)))])])])])]),e._m(0),e._m(1)])])]),a("div",{staticClass:"start",on:{click:e.shareToFriend}},[a("h3",[e._v("邀请好友开团")]),a("span",[e._v("每成交一人获得返佣"+e._s(e._f("Money")(e.activity.leaderReward||0)))])]),a("Share",{attrs:{share:e.share},on:{know:function(t){e.share=!1}}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.goodsInfo.sellPrice,expression:"!goodsInfo.sellPrice"}],attrs:{id:"loading"}},[a("img",{attrs:{src:n("cf1c"),alt:""}})])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rules"},[n("h3",[e._v("活动规则")]),n("span",[e._v("1. 一键开团成为团长，享受折扣优惠；")]),n("span",[e._v("2.邀请好友拼团享受折扣优惠，成团后你获得推广返佣")]),n("span",[e._v("3.推广返佣与购买人数正相关，每1人购买，推广返佣增加￥338.3")]),n("span",[e._v("4.拼团结束48小时后，推广返佣会划入到账户余额，支持提现")]),n("span",[e._v("5.工作人员会在每月1号处理上个月的提现申请，1-3天内到账")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goodDetails"},[a("h3",[e._v("商品详情")]),a("img",{attrs:{src:n("0b08"),alt:""}}),a("img",{attrs:{src:n("775a"),alt:""}}),a("img",{attrs:{src:n("8e30"),alt:""}}),a("img",{attrs:{src:n("1f66"),alt:""}}),a("img",{attrs:{src:n("5fa5"),alt:""}}),a("img",{attrs:{src:n("c037"),alt:""}}),a("img",{attrs:{src:n("338d"),alt:""}}),a("img",{attrs:{src:n("0f01"),alt:""}}),a("img",{attrs:{src:n("eadf"),alt:""}}),a("img",{attrs:{src:n("7de7"),alt:""}}),a("img",{attrs:{src:n("5e10"),alt:""}}),a("img",{attrs:{src:n("520a"),alt:""}}),a("img",{attrs:{src:n("b9fe"),alt:""}}),a("img",{attrs:{src:n("e018"),alt:""}})])}],o=n("c93e"),i=(n("cadf"),n("551c"),n("097d"),n("b970")),c=n("0ad9"),u=n("4cfb"),d=n("18a0"),l=n.n(d),f={data:function(){return{USERINFO:!1,info:{appId:"",nonceStr:"",signature:"",timestamp:""}}},created:function(){},methods:{},mounted:function(){var e=this;Object(u["b"])({url:window.location.href}).then(function(t){500!=t.resultCode&&(sessionStorage.setItem("appId",t.signature.appId),Object(c["b"])()?(l.a.config({debug:!1,appId:t.signature.appId,nonceStr:t.signature.nonceStr,timestamp:t.signature.timestamp,signature:t.signature.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","checkJsApi","hideMenuItems","chooseWXPay","showMenuItems"]}),l.a.ready(function(){l.a.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","chooseWXPay","hideMenuItems","showMenuItems"],success:function(e){},fail:function(e){Object(i["e"])("配置失败")}}),l.a.hideMenuItems({menuList:["menuItem:share:appMessage","menuItem:share:timeline","menuItem:readMode","menuItem:share:qq","menuItem:share:weiboApp","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:QZone","menuItem:copyUrl"],success:function(e){},fail:function(e){}}),e.wxSignatureCallback()}),l.a.error(function(e){Object(i["e"])("签名失败")})):window.location.href="./beforeLogin.html")}).catch(function(e){Object(i["e"])("获取签名信息失败")})},beforeDestroy:function(){},components:{}},m=n("3322"),p=n("17a4"),h=n("c53f"),v=n("9690"),g=n("3439"),I=(n("1fba"),{name:"app",mixins:[f],data:function(){return{orderCount:0,share:!1,goodsInfo:{},activity:{},recommenderId:""}},filters:{Money:function(e){return"￥"+parseInt(e)/100}},methods:{shareToFriend:function(){this.share=!0;var e={activityId:window.actId,groupId:this.groupInfo.id,pageUrl:"/pages/mainPage.html",pageName:"邀请人主页",clickEvent:"点击邀请好友开团",clickEventName:"邀请好友开团"};Object(v["a"])(e)},shareFriend:function(){var e={shareTitle:"团购优惠已送达，快来领取",shareBody:"快接受邀请，获取拼团优惠吧！",shareUrl:g["a"].shareUrl+"activityPage.html?recommenderUserId="+this.recommenderId+"&actId="+window.actId+"&kolStatus=1",shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(h["a"])(e),Object(h["b"])(e)},wxSignatureCallback:function(){var e=this;Object(m["d"])({activityId:window.actId}).then(function(t){e.orderCount=t.orderCount,e.goodsInfo=Object(o["a"])({},t.goodsInfo),e.activity=Object(o["a"])({},t.activity),e.recommenderId=t.recommenderUserId,e.shareFriend();var n={activityId:window.actId,groupId:e.groupInfo.id,pageUrl:"/pages/mainPage.html",pageName:"邀请人主页",clickEvent:"",clickEventName:""};Object(v["a"])(n)}).catch(function(e){})},goWithdraw:function(){window.location.href="./withdraw.html"}},mounted:function(){},beforeDestroy:function(){},components:{Button:i["a"],Popup:i["d"],Share:p["a"]}}),b=I,_=(n("f810"),n("2877")),w=Object(_["a"])(b,r,s,!1,null,"563d80a5",null);w.options.__file="Index.vue";var y=w.exports;n("b7f1"),n("37d5");new a["a"]({render:function(e){return e(y)}}).$mount("#app")},f810:function(e,t,n){"use strict";var a=n("677a"),r=n.n(a);r.a}});
//# sourceMappingURL=mainPage.398325b5.js.map