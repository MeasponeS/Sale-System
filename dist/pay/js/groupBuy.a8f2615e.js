(function(t){function e(e){for(var s,i,r=e[0],c=e[1],u=e[2],d=0,f=[];d<r.length;d++)i=r[d],o[i]&&f.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},o={groupBuy:0},a=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([2,"chunk-vendors","chunk-common"]),n()})({2:function(t,e,n){t.exports=n("4d51")},3102:function(t,e,n){},"4d51":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[1==t.groupInfo.status?s("h3",{staticClass:"normal"},[t._v("拼团中")]):t._e(),3==t.groupInfo.status?s("h3",{staticClass:"fail"},[t._v("拼团失败")]):t._e(),2==t.groupInfo.status?s("h3",{staticClass:"success"},[t._v("拼团成功")]):t._e(),s("div",{staticClass:"goods"},[s("img",{attrs:{src:t.activity.imageUrl,alt:""}}),s("div",{staticClass:"desc"},[s("div",{staticClass:"title"},[s("h3",[t._v(t._s(t.goodsInfo.name)),s("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])])]),s("div",{staticClass:"price"},[t._v("\n                价格\n                "),s("span",[t._v(t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))])]),s("div",{staticClass:"sale"},[s("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))]),s("span",[t._v("省 "+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))])])])]),s("div",{staticClass:"groupProgress"},[s("h3",[t._v("当前有"),s("span",[t._v(t._s(t.groupNum||0))]),t._v("人参团，倒计时结束48小时后：")]),s("div",{staticClass:"progress"},[s("div",{staticClass:"box",class:t.className(0)},[t._v("不返利")]),s("div",{staticClass:"line",class:t.className2(0)}),s("div",{staticClass:"box",class:t.className(1)},[t._v("返￥"+t._s(t.regularLIst[1].rebateMoney))]),s("div",{staticClass:"line",class:t.className2(1)}),s("div",{staticClass:"box",class:t.className(2)},[t._v("返￥"+t._s(t.regularLIst[2].rebateMoney))]),s("div",{staticClass:"line",class:t.className2(2)}),s("div",{staticClass:"box",class:t.className(3)},[t._v("返￥"+t._s(t.regularLIst[3].rebateMoney))])]),s("div",{staticClass:"progressNum"},t._l(t.regularLIst,function(e,n){return s("div",{class:t.className1(n)},[t._v(t._s(e.content))])}))]),s("div",{staticClass:"groupDetails"},[s("h3",[t._v("距结束只剩 "),s("Countdown",{attrs:{second:t.countDownSenconds},on:{toggle:function(e){t.countDownSenconds--},end:t.timeOut}})],1),s("div",{staticClass:"groupMember"},[s("div",{staticClass:"groupLeader"},[s("img",{attrs:{src:t.leaderHeadImg,alt:""}}),s("span",[t._v("团长")])]),s("div",{staticClass:"groupFriends"},[null==t.headList[0]?s("div",{staticClass:"emptyI",staticStyle:{"margin-left":"18px"}},[t._v("?")]):t._l(t.headList,function(t,e){return s("img",{style:"right:"+18*e+"px",attrs:{src:"",alt:""}})})],2)]),t.countDownSenconds<=0?s("Button",{staticClass:"indexBtn endBtn"},[t._v("团购已结束")]):s("div",[t.isLeader||t.userHasBuy?s("Button",{staticClass:"indexBtn",on:{click:function(e){t.share=!0}}},[t._v("邀请好友团购，拿更高返利")]):s("Button",{staticClass:"indexBtn",on:{click:function(e){t.showMobile=!0}}},[t._v("一键参团 "+t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])],1),s("em",[t._v("好友拼团·人满发货·不满退款")])],1),s("div",{staticClass:"playGuide"},[s("h3",[t._v("玩法说明")]),s("Steps",{attrs:{active:t.active}},[s("Step",[t._v("开团")]),s("Step",[t._v("邀请好友")]),s("Step",[t._v("6小时内成团")]),s("Step",[t._v("发货")])],1)],1),s("div",{staticClass:"goodDetails"},[s("h3",[t._v("商品详情")]),s("img",{attrs:{src:t.goodsInfo.imageUrl,alt:""}})]),s("div",{staticClass:"income",on:{click:t.goIncome}},[s("img",{attrs:{src:n("65a7"),alt:""}})]),s("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(e){t.showMobile=!1},wxPay:t.wxPay}}),s("Share",{attrs:{share:t.share},on:{know:function(e){t.share=!1}}})],1)},a=[],i=n("c93e"),r=n("b970"),c={name:"app",data:function(){return{}},methods:{},mounted:function(){},beforeDestroy:function(){},components:{}},u=n("9541"),l=n("ca41"),d=n("0ad9"),f=n("50a0"),v=n("ff62"),h=n("c53f"),g=n("f8b7"),p=n("17a4"),m=n("18a0"),w=n.n(m),_={name:"app",mixins:[c,u["a"]],data:function(){return{showMobile:!1,active:-1,share:!1,groupNum:"",goodsInfo:{},activity:{},groupInfo:{},leaderHeadImg:"",headList:[],regularLIst:[],countDownSenconds:"",isLeader:"",userHasBuy:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{wxSignatureCallback:function(){1==this.isLeader&&(window.URLPARAMS.groupId,window.URLPARAMS.leaderId,window.actId,window.URLPARAMS.status);var t={shareTitle:"分享给好友开团",shareBody:"这是我分享给好友得团",shareUrl:"https://hsj.hulian120.com/pay/groupBuy.html?groupId="+window.URLPARAMS.groupId+"leaderId"+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status,shareImg:"//www.baidu.com/img/bd_logo1.png?where=super"};w.a.onMenuShareAppMessage({title:t.shareTitle,desc:t.shareBody,link:t.shareUrl,imgUrl:t.shareImg,success:function(){console.log("配置分享成功")},cancel:function(){console.log("配置分享失败")}})},goIncome:function(){window.location.href="./incomeDetails.html"},timeOut:function(){this.countDownSenconds=0},wxPay:function(t){Object(g["a"])({activityId:window.actId,groupId:this.groupInfo.id,mobile:t}).then(function(t){Object(h["a"])(t)}).catch(function(t){})},className:function(t){var e=this.groupNum,n=this.regularLIst;if(0!=n.length&&null!=e)switch(t){case 0:return e<=n[0].highCount?"active":"";case 1:return e<=n[0].highCount?"unActive":e>=n[1].lowCount&&e<=n[1].highCount?"active":"";case 2:return e<=n[0].highCount?"unActive":e>=n[1].lowCount&&e<=n[1].highCount?"unActive":e>=n[2].lowCount&&e<=n[2].highCount?"active":"";case 3:return e<=n[0].highCount?"unActive":e>=n[1].lowCount&&e<=n[1].highCount?"unActive":e>=n[2].lowCount&&e<=n[2].highCount?"unActive":"active"}},className1:function(t){var e=this.groupNum,n=this.regularLIst;if(0!=n.length&&null!=e)switch(t){case 0:if(e<=n[0].highCount)return"numActive";break;case 1:if(e>=n[1].lowCount&&e<=n[1].highCount)return"numActive";break;case 2:if(e>=n[2].lowCount&&e<=n[2].highCount)return"numActive";break;case 3:if(e>=n[3].lowCount)return"numActive"}},className2:function(t){var e=this.groupNum,n=this.regularLIst;if(0!=n.length&&null!=e)switch(t){case 0:return e<=n[0].highCount?"":"lineActive";case 1:if(e>=n[2].lowCount)return"lineActive";break;case 2:if(e>=n[3].lowCount)return"lineActive"}}},mounted:function(){var t=this;this.id=Object(d["c"])("groupId"),Object(l["g"])({groupId:this.id}).then(function(e){t.groupNum=e.orderCount,t.countDownSenconds=e.countDownSenconds,t.leaderHasBuy=e.leaderHasBuy,t.goodsInfo=Object(i["a"])({},e.goodsInfo),t.activity=Object(i["a"])({},e.activity),t.groupInfo=Object(i["a"])({},e.groupInfo),t.regularLIst=e.regularLIst,t.headList=e.headList.reverse()}).catch(function(t){})},beforeDestroy:function(){},components:{Button:r["a"],Steps:r["e"],Step:r["d"],Popup:r["c"],Countdown:f["a"],PayPopup:v["a"],Share:p["a"]}},C=_,b=(n("b785"),n("2877")),y=Object(b["a"])(C,o,a,!1,null,null,null);y.options.__file="Index.vue";var I=y.exports;n("b7f1"),n("3102");new s["a"]({render:function(t){return t(I)}}).$mount("#app")},"5d00":function(t,e,n){},"65a7":function(t,e,n){t.exports=n.p+"img/2.657cacd1.png"},b785:function(t,e,n){"use strict";var s=n("5d00"),o=n.n(s);o.a}});
//# sourceMappingURL=groupBuy.a8f2615e.js.map