(function(t){function o(o){for(var e,s,r=o[0],c=o[1],u=o[2],l=0,p=[];l<r.length;l++)s=r[l],a[s]&&p.push(a[s][0]),a[s]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);d&&d(o);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,o=0;o<i.length;o++){for(var n=i[o],e=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(e=!1)}e&&(i.splice(o--,1),t=s(s.s=n[0]))}return t}var e={},a={activityPage:0},i=[];function s(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,o,n){s.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,o){if(1&o&&(t=s(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)s.d(n,e,function(o){return t[o]}.bind(null,e));return n},s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,"a",o),o},s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=o,r=r.slice();for(var u=0;u<r.length;u++)o(r[u]);var d=c;i.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,o,n){t.exports=n("ace5")},"114c":function(t,o,n){},"1c86":function(t,o,n){},"7c9e":function(t,o,n){"use strict";var e=n("1c86"),a=n.n(e);a.a},ace5:function(t,o,n){"use strict";n.r(o);n("cadf"),n("551c"),n("097d");var e=n("2b0e"),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.goodsInfo.sellPrice,expression:"goodsInfo.sellPrice"}]},[e("div",{attrs:{id:"app"}},[e("div",[e("img",{staticClass:"topImg",attrs:{src:t.activity.imageUrl,alt:""}}),t._m(0),e("div",{staticClass:"top"},[e("div",{staticClass:"goods",on:{click:t.goMyGroup}},[e("div",{staticClass:"good"},[e("div",{staticClass:"goodsName"},[e("h3",[t._v(t._s(t.goodsInfo.name||"无"))]),e("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])]),e("div",{staticClass:"goodsPrice"},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("拼团价"+t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]),e("em",[t._v("省"+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))]),e("strong",[t._v("原价"),e("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])]),t.groupInfo.status&&(1==t.groupInfo.status||2==t.groupInfo.status)&&t.countDownSenconds&&t.countDownSenconds>=0?e("strong",{staticClass:"countNum"},[t._v("当前团已有"+t._s(t.orderCount||0)+"人参团")]):t._e()])])]),0==t.kolStatus&&Array.isArray(t.quickGroupList)&&t.quickGroupList.length>0?e("div",[e("RollNotice",{staticClass:"quickGroup",attrs:{autoplay:"3000",height:"50"}},t._l(t.quickGroupList,function(o){return e("RollNoticeItem",[e("a",{staticClass:"roll",attrs:{href:"./groupBuy.html?groupId="+o.groupId}},[e("img",{attrs:{src:o.leaderHeadUrl,alt:""}}),e("h3",[e("span",{staticClass:"quickName"},[t._v(t._s(o.leaderName))]),e("span",{staticClass:"quickNum"},[t._v("的团还差"+t._s(o.surplusCount)+"人")])]),e("span",{staticClass:"right"},[t._v("快速参团")])])])}))],1):t._e(),0==t.kolStatus?e("div",{staticClass:"rules"},[e("h3",[t._v("活动玩法")]),e("span",[t._v("开团  -  邀请好友  -  48小时内成团 -发货")]),e("span",{staticClass:"ruleHeader"},[t._v("用户参与团购的具体玩法：")]),e("span",[t._v("1.点击链接进入商品详情，通过购买入口支付订单，付款成功后，按页面提示邀好友一起学习")]),e("span",[t._v("2.支付人数在团购有效时间内达到门槛值，即成团；成团后有效时间内仍可以继续参团，达到团购结束时间后，团购结束。")]),e("span",[t._v("3.团单成功，订单进入发学习卡流程；团单失败，订单全额退款。")]),e("span",{staticClass:"ruleHeader"},[t._v("参与限制：")]),e("span",[t._v("1.成团人数（包含团长）至少3人")]),e("span",[t._v("2.一名团长一次只能开一个团，已有团购结束方可开第二个团")]),e("span",{staticClass:"ruleHeader"},[t._v("取消规则")]),e("span",[t._v("1.未成团时不可主动取消订单")])]):t._e(),t._m(1)])])]),1==t.kolStatus?e("div",{staticClass:"income",on:{click:t.goIncome}},[e("img",{attrs:{src:n("d7c6"),alt:""}})]):t._e(),e("Popup",{attrs:{"close-on-click-overlay":!1,position:"bottom"},model:{value:t.showOpen,callback:function(o){t.showOpen=o},expression:"showOpen"}},[e("div",{staticClass:"wrap"},[e("h3",[t._v("开团方式（二选一）")]),e("div",{staticClass:"indexBtn",on:{click:t.goCheckMobile}},[t._v("\n                    A：立即购买并分享链接，成为团长\n                    ")]),e("div",{staticClass:"indexBtn",on:{click:t.openGroup}},[t._v("\n                    B：直接分享购买链接给好友，成为团长\n                    ")]),e("Button",{staticClass:"bottomBtn",on:{click:function(o){t.showOpen=!1}}},[t._v("取消")])],1)]),e("Share",{attrs:{share:t.share},on:{know:t.know}}),e("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(o){t.showMobile=!1},wxPay:t.wxPay}}),t.groupInfo.status&&(1==t.groupInfo.status||2==t.groupInfo.status)&&t.countDownSenconds&&t.countDownSenconds>=0?e("div",{staticClass:"start",on:{click:t.shareToFriend}},[t._v("\n            邀请好友参团\n            "),e("h4",[e("Countdown",{staticStyle:{display:"block"},attrs:{second:t.countDownSenconds,status:t.groupInfo.status},on:{toggle:function(o){t.countDownSenconds--},end:t.timeOut}})],1)]):e("div",{staticClass:"start",on:{click:t.openAllGroup}},[t._v("\n            我要开团\n        ")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.goodsInfo.sellPrice,expression:"!goodsInfo.sellPrice"}],attrs:{id:"loading"}},[e("img",{attrs:{src:n("cf1c"),alt:""}})])])},i=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"title"},[e("img",{attrs:{src:n("e987"),alt:""}})])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"goodDetails ",attrs:{id:"scroll"}},[e("h3",[t._v("商品详情")]),e("img",{attrs:{src:n("0b08"),alt:""}}),e("img",{attrs:{src:n("775a"),alt:""}}),e("img",{attrs:{src:n("8e30"),alt:""}}),e("img",{attrs:{src:n("1f66"),alt:""}}),e("img",{attrs:{src:n("5fa5"),alt:""}}),e("img",{attrs:{src:n("c037"),alt:""}}),e("img",{attrs:{src:n("338d"),alt:""}}),e("img",{attrs:{src:n("0f01"),alt:""}}),e("img",{attrs:{src:n("eadf"),alt:""}}),e("img",{attrs:{src:n("6846"),alt:""}}),e("img",{attrs:{src:n("4abd"),alt:""}}),e("img",{attrs:{src:n("e509"),alt:""}}),e("img",{attrs:{src:n("3967"),alt:""}}),e("img",{attrs:{src:n("db11"),alt:""}}),e("img",{attrs:{src:n("0d89"),alt:""}}),e("img",{attrs:{src:n("ce54"),alt:""}}),e("img",{attrs:{src:n("c2ae"),alt:""}})])}],s=n("c93e"),r=n("1fba"),c=n("9541"),u=n("c31e"),d=n("ca41"),l=n("b970"),p=n("ff62"),g=n("17a4"),f=n("f8b7"),I=n("b775");function h(t){return Object(I["a"])({url:"/sale/api/group/crtGroupOpen",method:"post",data:t})}var v=n("c53f"),w=n("50a0"),m=n("9690"),y=n("3439"),k={name:"app",mixins:[c["a"]],data:function(){return{showOpen:!1,showMobile:!1,share:!1,mobile:"",orderCount:"",leaderHasBuy:"",goodsInfo:{},activity:{},groupInfo:{},countDownSenconds:"",kolStatus:"",quickGroupList:[],timer:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{goMyGroup:function(){1!=this.groupInfo.status&&2!=this.groupInfo.status||null==this.groupInfo.id?console.log("======"):(clearInterval(window.Countdown),this.countDownSenconds="",window.location.href="./groupBuy.html?groupId="+this.groupInfo.id+"&leaderId="+this.groupInfo.leaderId+"&actId="+window.actId+"&status="+this.groupInfo.status+"&sellId="+window.URLPARAMS.sellId||-1)},shareToFriend:function(){this.share=!0;var t={activityId:window.actId,groupId:this.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击分享好友开团",clickEventName:"分享好友开团"};Object(m["a"])(t)},openAllGroup:function(){0==this.kolStatus?this.showMobile=!0:this.showOpen=!0;var t={activityId:window.actId,groupId:this.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击我要开团",clickEventName:"我要开团"};Object(m["a"])(t)},shareFriend:function(){var t={shareTitle:"我已领取团购优惠，你也来吧",shareBody:"健康管理师＆护理评估师，现在团购立减¥880",shareUrl:y["a"].shareUrl+"groupBuy.html?groupId="+this.groupInfo.id+"&leaderId="+this.groupInfo.leaderId+"&actId="+window.actId+"&status="+this.groupInfo.status+"&sellId="+window.URLPARAMS.sellId||-1,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(v["a"])(t),Object(v["b"])(t)},wxSignatureCallback:function(){var t=this;Object(d["b"])({activityId:window.actId,kolStatus:this.kolStatus}).then(function(o){t.leaderHasBuy=o.leaderHasBuy,o.groupInfo.kolStatus==t.kolStatus&&(t.groupInfo=Object(s["a"])({},o.groupInfo),0==o.groupInfo.status?t.orderCount=0:t.orderCount=o.orderCount,1!=t.groupInfo.status&&2!=t.groupInfo.status||null==t.groupInfo.id||t.shareFriend()),t.goodsInfo=Object(s["a"])({},o.goodsInfo),t.activity=Object(s["a"])({},o.activity),t.countDownSenconds=o.countDownSenconds,t.quickGroupList=o.quickGroupList||[];var n={activityId:window.actId,groupId:t.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"",clickEventName:""};Object(m["a"])(n)}).catch(function(t){})},goIncome:function(){var t={activityId:window.actId,groupId:this.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击查看活动收益",clickEventName:"查看活动收益"};Object(m["a"])(t),window.location.href="./incomeDetails.html?groupId="+this.groupInfo.id||""},goCheckMobile:function(){this.showOpen=!1,this.showMobile=!0;var t={activityId:window.actId,groupId:this.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击支付成为团长开团",clickEventName:"支付成为团长开团开团"};Object(m["a"])(t)},know:function(){var t=this;this.showOpen=!1,this.share=!1,Object(d["b"])({activityId:window.actId,kolStatus:this.kolStatus}).then(function(o){t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(s["a"])({},o.goodsInfo),t.activity=Object(s["a"])({},o.activity),o.groupInfo.kolStatus==t.kolStatus&&(t.groupInfo=Object(s["a"])({},o.groupInfo),0==o.groupInfo.status?t.orderCount=0:t.orderCount=o.orderCount),t.quickGroupList=o.quickGroupList||[],t.countDownSenconds=o.countDownSenconds}).catch(function(t){})},leaderPay:function(t){var o=this;Object(f["c"])({orderNum:t}).then(function(t){console.log(t)}),Object(d["b"])({activityId:window.actId,kolStatus:this.kolStatus}).then(function(t){console.log(t),o.leaderHasBuy=t.leaderHasBuy,o.goodsInfo=Object(s["a"])({},t.goodsInfo),o.activity=Object(s["a"])({},t.activity),o.quickGroupList=t.quickGroupList||[],t.groupInfo.kolStatus==o.kolStatus&&(o.groupInfo=Object(s["a"])({},t.groupInfo),0==t.groupInfo.status?o.orderCount=0:o.orderCount=t.orderCount),o.countDownSenconds=t.countDownSenconds,o.shareFriend(),window.setTimeout(function(){clearInterval(window.Countdown),o.countDownSenconds="",window.location.href=y["a"].shareUrl+"groupBuy.html?groupId="+o.groupInfo.id+"&leaderId="+o.groupInfo.leaderId+"&actId="+window.actId+"&status="+o.groupInfo.status+"&sellId="+window.URLPARAMS.sellId||-1},1e3)}).catch(function(t){})},wxPay:function(t){var o=this,n={activityId:window.actId,groupId:"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击发起微信支付",clickEventName:"发起微信支付"};Object(m["a"])(n),Object(f["b"])({activityId:window.actId,groupId:this.groupInfo.id,mobile:t,groupKolStatus:this.kolStatus,recommenderUserId:window.URLPARAMS.recommenderUserId||window.URLPARAMS.sellId||-1}).then(function(t){o.showMobile=!1,Object(v["c"])(t,o.leaderPay)}).catch(function(t){})},openGroup:function(){var t=this,o={activityId:window.actId,groupId:this.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"点击分享好友开团",clickEventName:"分享好友开团"};Object(m["a"])(o),h({activityId:window.actId,groupId:this.groupInfo.id,groupKolStatus:this.kolStatus,recommenderUserId:window.URLPARAMS.recommenderUserId}).then(function(o){Object(d["b"])({activityId:window.actId,kolStatus:t.kolStatus}).then(function(o){t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(s["a"])({},o.goodsInfo),t.activity=Object(s["a"])({},o.activity),o.groupInfo.kolStatus==t.kolStatus&&(t.groupInfo=Object(s["a"])({},o.groupInfo),0==o.groupInfo.status?t.orderCount=0:t.orderCount=o.orderCount),t.quickGroupList=o.quickGroupList||[],t.countDownSenconds=o.countDownSenconds,window.setTimeout(function(){clearInterval(window.Countdown),t.countDownSenconds="",window.location.href="./groupBuy.html?groupId="+t.groupInfo.id+"&leaderId="+t.groupInfo.leaderId+"&actId="+window.actId+"&status="+t.groupInfo.status+"&sellId="+window.URLPARAMS.sellId||-1},1e3)}).catch(function(t){})}).catch(function(t){})},timeOut:function(){var t=this;Object(d["b"])({activityId:window.actId,kolStatus:this.kolStatus}).then(function(o){t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(s["a"])({},o.goodsInfo),t.activity=Object(s["a"])({},o.activity),o.groupInfo.kolStatus==t.kolStatus&&(t.groupInfo=Object(s["a"])({},o.groupInfo),0==o.groupInfo.status?t.orderCount=0:t.orderCount=o.orderCount),t.quickGroupList=o.quickGroupList||[],t.countDownSenconds=o.countDownSenconds,t.shareFriend()}).catch(function(t){})},updateList:function(){var t=this,o=0===this.quickGroupList.length?2500:3e3*this.quickGroupList.length-500;0==this.kolStatus&&Object(d["c"])({activityId:window.actId}).then(function(n){t.quickGroupList.length>0&&t.quickGroupList[t.quickGroupList.length-1].groupId==n[0].groupId&&(n.push(n[0]),n.shift()),t.quickGroupList=[],t.$nextTick(function(o){t.quickGroupList=n||[]}),t.timer=setTimeout(function(){t.updateList()},o)}).catch(function(t){})}},mounted:function(){var t=this,o=document.querySelector("#app"),n={click:!0,taps:!0};new r["a"](o,n);this.kolStatus=window.URLPARAMS.kolStatus;var e=this;document.addEventListener("visibilitychange",function(){var t=this;"hidden"==document.visibilityState&&(clearInterval(window.Countdown),clearTimeout(this.timer)),"visible"==document.visibilityState&&Object(d["b"])({activityId:window.actId,kolStatus:e.kolStatus}).then(function(o){e.leaderHasBuy=o.leaderHasBuy,e.goodsInfo=Object(s["a"])({},o.goodsInfo),e.activity=Object(s["a"])({},o.activity),o.groupInfo.kolStatus==t.kolStatus&&(e.groupInfo=Object(s["a"])({},o.groupInfo),0==o.groupInfo.status?e.orderCount=0:e.orderCount=o.orderCount),e.quickGroupList=o.quickGroupList||[],e.countDownSenconds=o.countDownSenconds,e.shareFriend()}).catch(function(t){})}),Object(d["b"])({activityId:window.actId,kolStatus:e.kolStatus}).then(function(o){t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(s["a"])({},o.goodsInfo),t.activity=Object(s["a"])({},o.activity),o.groupInfo.kolStatus==t.kolStatus&&(t.groupInfo=Object(s["a"])({},o.groupInfo),0==o.groupInfo.status?t.orderCount=0:t.orderCount=o.orderCount),t.countDownSenconds=o.countDownSenconds,t.quickGroupList=o.quickGroupList||[];var n={activityId:window.actId,groupId:t.groupInfo.id||"",pageUrl:"/pages/activityPage.html",pageName:"活动主页",clickEvent:"",clickEventName:""};Object(m["a"])(n),1!=t.groupInfo.status&&2!=t.groupInfo.status||null==t.groupInfo.id||t.shareFriend()}).catch(function(t){}),this.updateList()},beforeDestroy:function(){},components:{Popup:l["d"],Button:l["a"],PayPopup:p["a"],Share:g["a"],Countdown:w["a"],RollNotice:u["RollNotice"],RollNoticeItem:u["RollNoticeItem"]}},b=k,S=(n("7c9e"),n("2877")),O=Object(S["a"])(b,a,i,!1,null,null,null);O.options.__file="Index.vue";var _=O.exports;n("b7f1"),n("114c");new e["a"]({render:function(t){return t(_)}}).$mount("#app")},d7c6:function(t,o,n){t.exports=n.p+"img/2.1d5f3a58.png"},e987:function(t,o,n){t.exports=n.p+"img/long.3717fbac.png"}});
//# sourceMappingURL=activityPage.864fa7f1.js.map