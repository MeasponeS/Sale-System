(function(t){function o(o){for(var a,c,s=o[0],r=o[1],d=o[2],u=0,p=[];u<s.length;u++)c=s[u],e[c]&&p.push(e[c][0]),e[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);l&&l(o);while(p.length)p.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,o=0;o<i.length;o++){for(var n=i[o],a=!0,s=1;s<n.length;s++){var r=n[s];0!==e[r]&&(a=!1)}a&&(i.splice(o--,1),t=c(c.s=n[0]))}return t}var a={},e={activityPage:0},i=[];function c(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,o,n){c.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,o){if(1&o&&(t=c(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var a in t)c.d(n,a,function(o){return t[o]}.bind(null,a));return n},c.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(o,"a",o),o},c.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=o,s=s.slice();for(var d=0;d<s.length;d++)o(s[d]);var l=r;i.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,o,n){t.exports=n("ace5")},"114c":function(t,o,n){},"1c86":function(t,o,n){},"7c9e":function(t,o,n){"use strict";var a=n("1c86"),e=n.n(a);e.a},ace5:function(t,o,n){"use strict";n.r(o);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{attrs:{id:"app"}},[t.goodsInfo.sellPrice?a("div",[a("img",{staticClass:"topImg",attrs:{src:t.activity.imageUrl,alt:""}}),t._m(0),a("div",{staticClass:"top"},[a("div",{staticClass:"goods"},[a("div",{staticClass:"good"},[a("div",{staticClass:"goodsName"},[a("h3",[t._v(t._s(t.goodsInfo.name||"无"))]),a("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])]),a("div",{staticClass:"goodsPrice"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("拼团价"+t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]),a("em",[t._v("省"+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))]),a("strong",[t._v("原价"),a("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])]),a("strong",{staticClass:"countNum"},[t._v("已有"+t._s(t.orderCount||0)+"人成团")])])])]),0==t.kolStatus?a("RollNotice",{staticClass:"quickGroup",attrs:{autoplay:"3000",height:"50"}},[a("RollNoticeItem",[a("div",{staticClass:"roll"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:n("d7c6"),alt:""}}),a("h3",[t._v("张小黑的团还差1人")])]),a("span",{staticClass:"right"},[t._v("快速参团")])])]),a("RollNoticeItem",[a("div",{staticClass:"roll"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:n("d7c6"),alt:""}}),a("h3",[t._v("张二黑的团还差2人")])]),a("span",{staticClass:"right"},[t._v("快速参团")])])]),a("RollNoticeItem",[a("div",{staticClass:"roll"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:n("d7c6"),alt:""}}),a("h3",[t._v("张三黑的团还差3人")])]),a("span",{staticClass:"right"},[t._v("快速参团")])])])],1):t._e(),0==t.kolStatus?a("div",{staticClass:"rules"},[a("h3",[t._v("活动玩法")]),a("span",[t._v("开团  -  邀请好友  -  6小时内成团 -发货")]),a("span",{staticClass:"ruleHeader"},[t._v("用户参与团购的具体玩法：")]),a("span",[t._v("1.点击链接进入商品详情，通过购买入口进入订单支付页，用户付款成功后，按页面提示邀好友一起学习")]),a("span",[t._v("2.支付人数在团购有效时间内达到门槛值，即成团；成团后有效时间内仍可以继续参团，达到团购结束时间后，团购结束。")]),a("span",[t._v("3.团单成功，订单进入发学习卡流程；团单失败，订单全额退款。")]),a("span",{staticClass:"ruleHeader"},[t._v("参与限制：")]),a("span",[t._v("1.成团人数（包含团长）至少3人")]),a("span",[t._v("2.一名团长一次只能开一个团，已有团购结束方可开第二个团")]),a("span",{staticClass:"ruleHeader"},[t._v("取消规则")]),a("span",[t._v("未成团时不可主动取消订单")])]):t._e(),t._m(1)],1),1==t.groupInfo.status&&t.countDownSenconds>=0?a("div",{staticClass:"start",on:{click:t.shareToFriend}},[t._v("\n            邀请好友获得更多返利\n            "),a("h4",[a("Countdown",{staticStyle:{display:"block"},attrs:{second:t.countDownSenconds,status:t.groupInfo.status},on:{toggle:function(o){t.countDownSenconds--},end:t.timeOut}})],1)]):a("div",{staticClass:"start",on:{click:t.openAllGroup}},[t._v("\n            我要开团\n        ")]),1==t.kolStatus?a("div",{staticClass:"income",on:{click:t.goIncome}},[a("img",{attrs:{src:n("d7c6"),alt:""}})]):t._e(),a("Popup",{attrs:{"close-on-click-overlay":!1,position:"bottom"},model:{value:t.showOpen,callback:function(o){t.showOpen=o},expression:"showOpen"}},[a("div",{staticClass:"wrap"},[a("h3",[t._v("开团方式")]),a("div",{staticClass:"indexBtn",on:{click:t.goCheckMobile}},[t._v("\n                    A：购买商品，并成为团长\n                    "),a("span",{staticClass:"btnWord"},[t._v("*支付成功后，团购开始倒计时")])]),a("div",{staticClass:"indexBtn",on:{click:t.openGroup}},[t._v("\n                    B：通过邀请好友成为团长\n                    "),a("span",{staticClass:"btnWord"},[t._v("*点击该按钮，团购开始倒计时")])]),a("Button",{staticClass:"bottomBtn",on:{click:function(o){t.showOpen=!1}}},[t._v("取消")])],1)]),a("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(o){t.showMobile=!1},wxPay:t.wxPay}}),a("Share",{attrs:{share:t.share},on:{know:t.know}})],1):a("div",{attrs:{id:"loading"}},[a("img",{attrs:{src:n("cf1c"),alt:""}})])])},i=[function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"title"},[a("img",{attrs:{src:n("e987"),alt:""}})])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"goodDetails"},[a("h3",[t._v("商品详情")]),a("img",{attrs:{src:n("775a"),alt:""}}),a("img",{attrs:{src:n("8e30"),alt:""}}),a("img",{attrs:{src:n("1f66"),alt:""}}),a("img",{attrs:{src:n("5fa5"),alt:""}}),a("img",{attrs:{src:n("c037"),alt:""}}),a("img",{attrs:{src:n("338d"),alt:""}}),a("img",{attrs:{src:n("0f01"),alt:""}}),a("img",{attrs:{src:n("eadf"),alt:""}}),a("img",{attrs:{src:n("6846"),alt:""}}),a("img",{attrs:{src:n("4abd"),alt:""}}),a("img",{attrs:{src:n("e509"),alt:""}}),a("img",{attrs:{src:n("3967"),alt:""}}),a("img",{attrs:{src:n("db11"),alt:""}}),a("img",{attrs:{src:n("0d89"),alt:""}}),a("img",{attrs:{src:n("ce54"),alt:""}}),a("img",{attrs:{src:n("c2ae"),alt:""}})])}],c=n("c93e"),s=n("9541"),r=n("c31e"),d=n("ca41"),l=n("b970"),u=n("ff62"),p=n("17a4"),g=n("f8b7"),f=n("b775");function v(t){return Object(f["a"])({url:"/sale/api/group/crtGroupOpen",method:"post",data:t})}var h=n("c53f"),I=(n("18a0"),n("50a0")),m=n("9690"),w=n("3439"),b={name:"app",mixins:[s["a"]],data:function(){return{showOpen:!1,showMobile:!1,share:!1,mobile:"",orderCount:"",leaderHasBuy:"",goodsInfo:{},activity:{},groupInfo:{},countDownSenconds:"",kolStatus:"",quickGroupList:[]}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{shareToFriend:function(){this.share=!0;var t={activityId:window.actId,groupId:this.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击分享好友开团",clickEventName:"分享好友开团"};Object(m["a"])(t)},openAllGroup:function(){0==this.kolStatus?this.showMobile=!0:this.showOpen=!0;var t={activityId:window.actId,groupId:this.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击我要开团",clickEventName:"我要开团"};Object(m["a"])(t)},shareFriend:function(){var t={shareTitle:"『团购优惠』和好朋友一起领",shareBody:"健康管理师＆护理评估师，现在团购立减¥880",shareUrl:w["a"].shareUrl+"groupBuy.html?groupId="+this.groupInfo.id+"&leaderId="+this.groupInfo.leaderId+"&actId="+window.actId+"&status="+this.groupInfo.status,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(h["a"])(t),Object(h["b"])(t)},wxSignatureCallback:function(){var t=this;Object(d["b"])({activityId:window.actId,kolStatus:this.kolStatus}).then(function(o){t.orderCount=o.orderCount,t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(c["a"])({},o.goodsInfo),t.activity=Object(c["a"])({},o.activity),t.groupInfo=Object(c["a"])({},o.groupInfo),t.countDownSenconds=o.countDownSenconds,t.quickGroupList=o.quickGroupList||[];var n={activityId:window.actId,groupId:t.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"",clickEventName:""};Object(m["a"])(n),1==t.groupInfo.status&&null!=t.groupInfo.id&&t.shareFriend()}).catch(function(t){})},goIncome:function(){var t={activityId:window.actId,groupId:this.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击查看活动收益",clickEventName:"查看活动收益"};Object(m["a"])(t),window.location.href="./incomeDetails.html?groupId="+this.groupInfo.id||""},goCheckMobile:function(){this.showOpen=!1,this.showMobile=!0;var t={activityId:window.actId,groupId:this.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击支付成为团长开团",clickEventName:"支付成为团长开团开团"};Object(m["a"])(t)},know:function(){var t=this;this.showOpen=!1,this.share=!1,Object(d["b"])({activityId:window.actId}).then(function(o){t.orderCount=o.orderCount,t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(c["a"])({},o.goodsInfo),t.activity=Object(c["a"])({},o.activity),t.groupInfo=Object(c["a"])({},o.groupInfo),t.countDownSenconds=o.countDownSenconds}).catch(function(t){})},leaderPay:function(){var t=this;Object(d["b"])({activityId:window.actId}).then(function(o){t.orderCount=o.orderCount,t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(c["a"])({},o.goodsInfo),t.activity=Object(c["a"])({},o.activity),t.groupInfo=Object(c["a"])({},o.groupInfo),t.countDownSenconds=o.countDownSenconds,t.shareFriend(),window.location.href=w["a"].shareUrl+"groupBuy.html?groupId="+t.groupInfo.id+"&leaderId="+t.groupInfo.leaderId+"&actId="+window.actId+"&status="+t.groupInfo.status}).catch(function(t){})},wxPay:function(t){var o=this,n={activityId:window.actId,groupId:"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击发起微信支付",clickEventName:"发起微信支付"};Object(m["a"])(n),Object(g["b"])({activityId:window.actId,groupId:this.groupInfo.id,mobile:t,recommenderUserId:window.URLPARAMS.recommenderUserId}).then(function(t){o.showMobile=!1,Object(h["c"])(t,o.leaderPay)}).catch(function(t){})},openGroup:function(){var t=this;this.share=!0;var o={activityId:window.actId,groupId:this.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击分享好友开团",clickEventName:"分享好友开团"};Object(m["a"])(o),v({activityId:window.actId,groupId:this.groupInfo.id,recommenderUserId:window.URLPARAMS.recommenderUserId}).then(function(o){Object(d["b"])({activityId:window.actId}).then(function(o){t.orderCount=o.orderCount,t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(c["a"])({},o.goodsInfo),t.activity=Object(c["a"])({},o.activity),t.groupInfo=Object(c["a"])({},o.groupInfo),t.countDownSenconds=o.countDownSenconds,t.shareFriend()}).catch(function(t){})}).catch(function(t){})},timeOut:function(){var t=this;Object(d["b"])({activityId:window.actId}).then(function(o){t.orderCount=o.orderCount,t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(c["a"])({},o.goodsInfo),t.activity=Object(c["a"])({},o.activity),t.groupInfo=Object(c["a"])({},o.groupInfo),t.countDownSenconds=o.countDownSenconds,t.shareFriend()}).catch(function(t){})}},mounted:function(){this.kolStatus=window.URLPARAMS.kolStatus;var t=this;document.addEventListener("visibilitychange",function(){"hidden"==document.visibilityState&&clearInterval(window.Countdown),"visible"==document.visibilityState&&Object(d["b"])({activityId:window.actId}).then(function(o){t.orderCount=o.orderCount,t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(c["a"])({},o.goodsInfo),t.activity=Object(c["a"])({},o.activity),t.groupInfo=Object(c["a"])({},o.groupInfo),t.countDownSenconds=o.countDownSenconds,t.shareFriend()}).catch(function(t){})})},beforeDestroy:function(){},components:{Popup:l["d"],Button:l["a"],PayPopup:u["a"],Share:p["a"],Countdown:I["a"],RollNotice:r["RollNotice"],RollNoticeItem:r["RollNoticeItem"]}},y=b,_=(n("7c9e"),n("2877")),O=Object(_["a"])(y,e,i,!1,null,null,null);O.options.__file="Index.vue";var C=O.exports;n("b7f1"),n("114c");new a["a"]({render:function(t){return t(C)}}).$mount("#app")},d7c6:function(t,o,n){t.exports=n.p+"img/2.657cacd1.png"},e987:function(t,o,n){t.exports=n.p+"img/long.3717fbac.png"}});
//# sourceMappingURL=activityPage.c83d0b8f.js.map