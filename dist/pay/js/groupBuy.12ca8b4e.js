(function(t){function e(e){for(var s,i,r=e[0],c=e[1],u=e[2],l=0,f=[];l<r.length;l++)i=r[l],n[i]&&f.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={groupBuy:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var d=c;o.push([2,"chunk-vendors","chunk-common"]),a()})({2:function(t,e,a){t.exports=a("4d51")},3102:function(t,e,a){},"4d51":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.goodsInfo.sellPrice?s("div",[1==t.groupInfo.status?s("h3",{staticClass:"normal"},[t._v("拼团中")]):t._e(),3==t.groupInfo.status?s("h3",{staticClass:"fail"},[t._v("拼团失败")]):t._e(),2==t.groupInfo.status?s("h3",{staticClass:"success"},[t._v("拼团成功")]):t._e(),s("div",{staticClass:"groupDetails"},[s("h3",[t._v("距结束只剩 "),s("Countdown",{attrs:{second:t.countDownSenconds,status:t.groupInfo.status},on:{end:t.timeOut}})],1),s("div",{staticClass:"groupMember"},[s("div",{staticClass:"groupLeader"},[s("img",{attrs:{src:t.leaderHeadImg,alt:""}}),s("span",[t._v("团长")])]),s("div",{staticClass:"groupFriends"},[""!=t.headList&&t.headList[0]?t._l(t.headList,function(t,e){return s("img",{style:"right:"+18*e+"px",attrs:{alt:"",src:t}})}):s("div",{staticClass:"emptyI",staticStyle:{"margin-left":"-72px"}},[t._v("?")])],2)]),0==t.userHasBuy?s("h3",{staticClass:"ad"},[t._v("就差你了，参团购买可省￥880")]):s("h3",{staticClass:"ad"},[t._v("您已购买成功")]),t.countDownSenconds>0?s("div",["0"==t.isLeader&&"0"==t.userHasBuy?s("Button",{staticClass:"indexBtn",on:{click:t.inGroup}},[t._v("一键参团 "+t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]):s("Button",{staticClass:"indexBtn",on:{click:t.shareToFriend}},[t._v("邀请好友拼团")])],1):t._e(),t.countDownSenconds<=0&&1==t.groupInfo.kolStatus?s("Button",{staticClass:"indexBtn endBtn"},[t._v("请联系团长重新开团")]):t._e(),t.countDownSenconds<=0&&0==t.groupInfo.kolStatus?s("Button",{staticClass:"indexBtn",on:{click:t.restartGroup}},[t._v("重新开团")]):t._e(),t._m(0)],1),t._m(1),s("div",{staticClass:"goods"},[s("img",{attrs:{src:t.activity.imageUrl,alt:""}}),s("div",{staticClass:"desc"},[s("div",{staticClass:"title"},[s("h3",[t._v(t._s(t.goodsInfo.name))])]),s("div",{staticClass:"price"},[s("span",[t._v(" 原价"),s("em",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])]),s("span",{staticClass:"getGroup"},[t._v(t._s(t.activity.minCount||0)+"人可成团")])]),s("div",{staticClass:"sale"},[s("span",[t._v(t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]),s("span",{staticClass:"saveMoney"},[t._v("省 "+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))])])])]),t._m(2),s("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(e){t.showMobile=!1},wxPay:t.wxPay}}),s("Share",{attrs:{share:t.share},on:{know:function(e){t.share=!1}}})],1):s("div",{attrs:{id:"loading"}},[s("img",{attrs:{src:a("cf1c"),alt:""}})])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("em",[t._v("好友拼团·成团发货·"),a("a",{attrs:{href:"./tuikuan.html"}},[t._v("未成团退款")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playGuide"},[a("h3",[t._v("玩法说明")]),a("div",{staticClass:"topPlay"},[a("div",{staticClass:"ball"}),a("div",{staticClass:"ballLine"}),a("div",{staticClass:"ball"}),a("div",{staticClass:"ballLine"}),a("div",{staticClass:"ball"}),a("div",{staticClass:"ballLine"}),a("div",{staticClass:"ball"})]),a("div",{staticClass:"bottomPlay"},[a("span",[t._v("开团")]),a("span",[t._v("邀请好友")]),a("span",[t._v("6小时内成团")]),a("span",[t._v("成团即发货\n\n                ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goodDetails"},[s("h3",[t._v("商品详情")]),s("img",{attrs:{src:a("775a"),alt:""}}),s("img",{attrs:{src:a("8e30"),alt:""}}),s("img",{attrs:{src:a("1f66"),alt:""}}),s("img",{attrs:{src:a("5fa5"),alt:""}}),s("img",{attrs:{src:a("c037"),alt:""}}),s("img",{attrs:{src:a("338d"),alt:""}}),s("img",{attrs:{src:a("0f01"),alt:""}}),s("img",{attrs:{src:a("eadf"),alt:""}}),s("img",{attrs:{src:a("6846"),alt:""}}),s("img",{attrs:{src:a("4abd"),alt:""}}),s("img",{attrs:{src:a("e509"),alt:""}}),s("img",{attrs:{src:a("3967"),alt:""}}),s("img",{attrs:{src:a("db11"),alt:""}}),s("img",{attrs:{src:a("0d89"),alt:""}}),s("img",{attrs:{src:a("ce54"),alt:""}}),s("img",{attrs:{src:a("c2ae"),alt:""}})])}],i=a("c93e"),r=a("b970"),c=a("9541"),u=a("ca41"),d=a("0ad9"),l=a("50a0"),f=a("ff62"),g=a("c53f"),p=a("f8b7"),v=a("17a4"),h=a("9690"),m=a("3439"),I={name:"app",mixins:[c["a"]],data:function(){return{showMobile:!1,share:!1,groupNum:"",goodsInfo:{},activity:{},groupInfo:{},leaderHeadImg:"",headList:[],countDownSenconds:0,isLeader:"",userHasBuy:"",orderCount:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{restartGroup:function(){window.location.href="./activityPage.html?kolStatus=0&actId="+window.actId+"&sellId="+window.URLPARAMS.sellId||-1},shareToFriend:function(){this.share=!0;var t={activityId:window.actId,groupId:this.groupInfo.id,pageUrl:"/pages/groupBuy.html",pageName:"拼团页",clickEvent:"点击邀请好友参团",clickEventName:"邀请好友参团"};Object(h["a"])(t)},shareFriend:function(){var t={shareTitle:"『团购优惠』和好朋友一起领",shareBody:"健康管理师＆护理评估师，现在团购立减¥880",shareUrl:m["a"].shareUrl+"groupBuy.html?groupId="+window.URLPARAMS.groupId+"&leaderId="+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status+"&sellId="+window.URLPARAMS.sellId||-1,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(g["a"])(t),Object(g["b"])(t)},wxSignatureCallback:function(){var t=this;Object(u["g"])({groupId:this.id}).then(function(e){t.groupNum=e.orderCount,t.isLeader=e.isLeader,t.countDownSenconds=e.countDownSenconds,t.leaderHasBuy=e.leaderHasBuy,t.goodsInfo=Object(i["a"])({},e.goodsInfo),t.activity=Object(i["a"])({},e.activity),t.groupInfo=Object(i["a"])({},e.groupInfo),t.orderCount=e.orderCount,t.headList=e.headList,t.leaderHeadImg=e.leaderHeadImg,t.userHasBuy=e.userHasBuy,t.headList=t.headList.filter(function(t){return t}),t.headList=t.headList.reverse();var a={activityId:window.actId,groupId:t.groupInfo.id,pageUrl:"/pages/groupBuy.html",pageName:"拼团页",clickEvent:"",clickEventName:""};Object(h["a"])(a),t.shareFriend()}).catch(function(t){})},inGroup:function(){this.showMobile=!0;var t={activityId:window.actId,groupId:this.groupInfo.id,pageUrl:"/pages/groupBuy.html",pageName:"拼团页",clickEvent:"点击一键参团",clickEventName:"一键参团"};Object(h["a"])(t)},timeOut:function(){var t=this;Object(u["g"])({groupId:this.id}).then(function(e){t.groupNum=e.orderCount,t.isLeader=e.isLeader,t.countDownSenconds=e.countDownSenconds,t.leaderHasBuy=e.leaderHasBuy,t.goodsInfo=Object(i["a"])({},e.goodsInfo),t.activity=Object(i["a"])({},e.activity),t.orderCount=e.orderCount,t.groupInfo=Object(i["a"])({},e.groupInfo),t.regularLIst=e.regularLIst,t.headList=e.headList,t.leaderHeadImg=e.leaderHeadImg,t.userHasBuy=e.userHasBuy,t.headList=t.headList.filter(function(t){return t}),t.headList=t.headList.reverse()}).catch(function(t){})},userBuy:function(){setTimeout(function(){window.location.href=m["a"].shareUrl+"groupBuy.html?groupId="+window.URLPARAMS.groupId+"&leaderId="+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status+"&pay=1"},300)},wxPay:function(t){var e=this,a={activityId:window.actId,groupId:this.groupInfo.id,pageUrl:"/pages/groupBuy.html",pageName:"拼团页",clickEvent:"点击发起微信支付",clickEventName:"发起微信支付"};Object(h["a"])(a),Object(p["a"])({activityId:window.actId,groupId:this.groupInfo.id,mobile:t}).then(function(t){e.showMobile=!1,Object(g["c"])(t,e.userBuy)}).catch(function(t){})}},mounted:function(){var t=this;this.id=Object(d["c"])("groupId"),document.addEventListener("visibilitychange",function(){"hidden"==document.visibilityState&&clearInterval(window.Countdown),"visible"==document.visibilityState&&Object(u["g"])({groupId:t.id}).then(function(e){t.groupNum=e.orderCount,t.isLeader=e.isLeader,t.countDownSenconds=e.countDownSenconds,t.leaderHasBuy=e.leaderHasBuy,t.goodsInfo=Object(i["a"])({},e.goodsInfo),t.activity=Object(i["a"])({},e.activity),t.groupInfo=Object(i["a"])({},e.groupInfo),t.regularLIst=e.regularLIst,t.orderCount=e.orderCount,t.headList=e.headList,t.leaderHeadImg=e.leaderHeadImg,t.userHasBuy=e.userHasBuy,t.headList=t.headList.filter(function(t){return t}),t.headList=t.headList.reverse(),t.shareFriend()}).catch(function(t){})})},beforeDestroy:function(){},components:{Button:r["a"],Popup:r["d"],PayPopup:f["a"],Share:v["a"],Countdown:l["a"]}},y=I,w=(a("b785"),a("2877")),b=Object(w["a"])(y,n,o,!1,null,null,null);b.options.__file="Index.vue";var _=b.exports;a("b7f1"),a("3102");new s["a"]({render:function(t){return t(_)}}).$mount("#app")},"5d00":function(t,e,a){},b785:function(t,e,a){"use strict";var s=a("5d00"),n=a.n(s);n.a}});
//# sourceMappingURL=groupBuy.12ca8b4e.js.map