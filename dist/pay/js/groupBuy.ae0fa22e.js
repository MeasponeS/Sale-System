(function(t){function e(e){for(var s,o,r=e[0],c=e[1],u=e[2],d=0,g=[];d<r.length;d++)o=r[d],n[o]&&g.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(g.length)g.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={groupBuy:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;i.push([2,"chunk-vendors","chunk-common"]),a()})({2:function(t,e,a){t.exports=a("4d51")},3102:function(t,e,a){},"4d51":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.goodsInfo.sellPrice?s("div",[1==t.groupInfo.status?s("h3",{staticClass:"normal"},[t._v("拼团中")]):t._e(),3==t.groupInfo.status?s("h3",{staticClass:"fail"},[t._v("拼团失败")]):t._e(),2==t.groupInfo.status?s("h3",{staticClass:"success"},[t._v("拼团成功")]):t._e(),s("div",{staticClass:"goods"},[s("img",{attrs:{src:t.activity.imageUrl,alt:""}}),s("div",{staticClass:"desc"},[s("div",{staticClass:"title"},[s("h3",[t._v(t._s(t.goodsInfo.name))])]),s("div",{staticClass:"price"},[s("span",[t._v(" 原价"),s("em",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])]),s("span",{staticClass:"getGroup"},[t._v(t._s(t.activity.minCount||0)+"人可成团")])]),s("div",{staticClass:"sale"},[s("span",[t._v(t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]),s("span",{staticClass:"saveMoney"},[t._v("省 "+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))])])])]),s("div",{staticClass:"groupProgress"},[s("h3",[t._v("当前有"),s("span",[t._v(t._s(t.groupNum||0))]),t._v("人参团，倒计时结束后：")]),s("div",{staticClass:"progress"},[s("div",{staticClass:"box",class:t.className(0)},[t._v("不返利")]),s("div",{staticClass:"line",class:t.className2(0)}),s("div",{staticClass:"box",class:t.className(1)},[t._v("返"+t._s(t._f("Money")(t.regularLIst[1].rebateMoney)))]),s("div",{staticClass:"line",class:t.className2(1)}),s("div",{staticClass:"box",class:t.className(2)},[t._v("返"+t._s(t._f("Money")(t.regularLIst[2].rebateMoney)))]),s("div",{staticClass:"line",class:t.className2(2)}),s("div",{staticClass:"box",class:t.className(3)},[t._v("返"+t._s(t._f("Money")(t.regularLIst[3].rebateMoney)))])]),s("div",{staticClass:"progressNum"},t._l(t.regularLIst,function(e,a){return s("div",{class:t.className1(a)},[t._v(t._s(e.content))])}))]),s("div",{staticClass:"groupDetails"},[s("h3",[t._v("距结束只剩 "),s("Countdown",{attrs:{second:t.countDownSenconds,status:t.groupInfo.status},on:{end:t.timeOut}})],1),s("div",{staticClass:"groupMember"},[s("div",{staticClass:"groupLeader"},[s("img",{attrs:{src:t.leaderHeadImg,alt:""}}),s("span",[t._v("团长")])]),s("div",{staticClass:"groupFriends"},[""!=t.headList&&t.headList[0]?t._l(t.headList,function(t,e){return s("img",{style:"right:"+18*e+"px",attrs:{alt:"",src:t}})}):s("div",{staticClass:"emptyI",staticStyle:{"margin-left":"-72px"}},[t._v("?")])],2)]),t.countDownSenconds>0?s("div",["0"==t.isLeader&&"0"==t.userHasBuy?s("Button",{staticClass:"indexBtn",on:{click:t.inGroup}},[t._v("一键参团 "+t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]):s("Button",{staticClass:"indexBtn",on:{click:t.shareToFriend}},[t._v("邀请好友团购，拿更高返利")])],1):t._e(),t.countDownSenconds<=0&&3!=t.groupInfo.status?s("Button",{staticClass:"indexBtn endBtn"},[t._v("团购已结束")]):t._e(),t.countDownSenconds<=0&&3==t.groupInfo.status?s("Button",{staticClass:"indexBtn endBtn"},[t._v("请联系团长重新开团")]):t._e(),t._m(0)],1),t._m(1),t._m(2),s("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(e){t.showMobile=!1},wxPay:t.wxPay}}),s("Share",{attrs:{share:t.share},on:{know:function(e){t.share=!1}}})],1):s("div",{attrs:{id:"loading"}},[s("img",{attrs:{src:a("cf1c"),alt:""}})])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("em",[t._v("好友拼团·成团发货·"),a("a",{attrs:{href:"https://kf.qq.com/touch/sappfaq/180319FN3eUR180319JbURBr.html"}},[t._v("未成团退款")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playGuide"},[a("h3",[t._v("玩法说明")]),a("div",{staticClass:"topPlay"},[a("div",{staticClass:"ball"}),a("div",{staticClass:"ballLine"}),a("div",{staticClass:"ball"}),a("div",{staticClass:"ballLine"}),a("div",{staticClass:"ball"}),a("div",{staticClass:"ballLine"}),a("div",{staticClass:"ball"})]),a("div",{staticClass:"bottomPlay"},[a("span",[t._v("开团")]),a("span",[t._v("邀请好友")]),a("span",[t._v("6小时内成团")]),a("span",[t._v("发货")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goodDetails"},[s("h3",[t._v("商品详情")]),s("img",{attrs:{src:a("775a"),alt:""}}),s("img",{attrs:{src:a("8e30"),alt:""}}),s("img",{attrs:{src:a("1f66"),alt:""}}),s("img",{attrs:{src:a("5fa5"),alt:""}}),s("img",{attrs:{src:a("c037"),alt:""}}),s("img",{attrs:{src:a("338d"),alt:""}}),s("img",{attrs:{src:a("0f01"),alt:""}}),s("img",{attrs:{src:a("eadf"),alt:""}}),s("img",{attrs:{src:a("6846"),alt:""}}),s("img",{attrs:{src:a("4abd"),alt:""}}),s("img",{attrs:{src:a("e509"),alt:""}}),s("img",{attrs:{src:a("3967"),alt:""}}),s("img",{attrs:{src:a("db11"),alt:""}}),s("img",{attrs:{src:a("0d89"),alt:""}}),s("img",{attrs:{src:a("ce54"),alt:""}}),s("img",{attrs:{src:a("c2ae"),alt:""}})])}],o=a("c93e"),r=a("b970"),c={name:"app",data:function(){return{}},methods:{},mounted:function(){},beforeDestroy:function(){},components:{}},u=a("9541"),l=a("ca41"),d=a("0ad9"),g=a("50a0"),h=a("ff62"),p=a("c53f"),f=a("f8b7"),v=a("17a4"),m=a("9690"),w={name:"app",mixins:[c,u["a"]],data:function(){return{showMobile:!1,share:!1,groupNum:"",goodsInfo:{},activity:{},groupInfo:{},leaderHeadImg:"",headList:[],regularLIst:[],countDownSenconds:0,isLeader:"",userHasBuy:"",orderCount:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{shareToFriend:function(){this.share=!0;var t={activityId:window.actId,groupId:this.groupInfo.id,pageUrl:"/pages/groupBuy.html",pageName:"拼团页",clickEvent:"点击邀请好友参团",clickEventName:"邀请好友参团"};Object(m["a"])(t)},shareFriend:function(){var t={shareTitle:"『团购优惠』和好朋友一起领",shareBody:"健康管理师＆护理评估师，现在团购立减¥880",shareUrl:"https://hsj.hulian120.com/pay/groupBuy.html?groupId="+window.URLPARAMS.groupId+"&leaderId="+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(p["a"])(t),Object(p["b"])(t)},wxSignatureCallback:function(){var t=this;Object(l["g"])({groupId:this.id}).then(function(e){t.groupNum=e.orderCount,t.isLeader=e.isLeader,t.countDownSenconds=e.countDownSenconds,t.leaderHasBuy=e.leaderHasBuy,t.goodsInfo=Object(o["a"])({},e.goodsInfo),t.activity=Object(o["a"])({},e.activity),t.groupInfo=Object(o["a"])({},e.groupInfo),t.regularLIst=e.regularLIst,t.orderCount=e.orderCount,t.headList=e.headList,t.leaderHeadImg=e.leaderHeadImg,t.userHasBuy=e.userHasBuy,t.headList=t.headList.filter(function(t){return t}),t.headList=t.headList.reverse();var a={activityId:window.actId,groupId:t.groupInfo.id,pageUrl:"/pages/groupBuy.html",pageName:"拼团页",clickEvent:"",clickEventName:""};Object(m["a"])(a),t.shareFriend()}).catch(function(t){})},inGroup:function(){this.showMobile=!0;var t={activityId:window.actId,groupId:this.groupInfo.id,pageUrl:"/pages/groupBuy.html",pageName:"拼团页",clickEvent:"点击一键参团",clickEventName:"一键参团"};Object(m["a"])(t)},timeOut:function(){var t=this;window.setTimeout(function(){window.location.href="https://hsj.hulian120.com/pay/groupBuy.html?groupId="+window.URLPARAMS.groupId+"&leaderId="+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status},1e3),Object(l["g"])({groupId:this.id}).then(function(e){t.groupNum=e.orderCount,t.isLeader=e.isLeader,t.countDownSenconds=e.countDownSenconds,t.leaderHasBuy=e.leaderHasBuy,t.goodsInfo=Object(o["a"])({},e.goodsInfo),t.activity=Object(o["a"])({},e.activity),t.orderCount=e.orderCount,t.groupInfo=Object(o["a"])({},e.groupInfo),t.regularLIst=e.regularLIst,t.headList=e.headList,t.leaderHeadImg=e.leaderHeadImg,t.userHasBuy=e.userHasBuy,t.headList=t.headList.filter(function(t){return t}),t.headList=t.headList.reverse()}).catch(function(t){})},userBuy:function(){setTimeout(function(){window.location.href="https://hsj.hulian120.com/pay/groupBuy.html?groupId="+window.URLPARAMS.groupId+"&leaderId="+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status+"&pay=1"},300)},wxPay:function(t){var e=this,a={activityId:window.actId,groupId:this.groupInfo.id,pageUrl:"/pages/groupBuy.html",pageName:"拼团页",clickEvent:"点击发起微信支付",clickEventName:"发起微信支付"};Object(m["a"])(a),Object(f["a"])({activityId:window.actId,groupId:this.groupInfo.id,mobile:t}).then(function(t){e.showMobile=!1,Object(p["c"])(t,e.userBuy)}).catch(function(t){})},className:function(t){var e=this.groupNum,a=this.regularLIst;if(0!=a.length&&null!=e)switch(t){case 0:return e<=a[0].highCount?"active":"";case 1:return e<=a[0].highCount?"unActive":e>=a[1].lowCount&&e<=a[1].highCount?"active":"";case 2:return e<=a[0].highCount?"unActive":e>=a[1].lowCount&&e<=a[1].highCount?"unActive":e>=a[2].lowCount&&e<=a[2].highCount?"active":"";case 3:return e<=a[0].highCount?"unActive":e>=a[1].lowCount&&e<=a[1].highCount?"unActive":e>=a[2].lowCount&&e<=a[2].highCount?"unActive":"active"}},className1:function(t){var e=this.groupNum,a=this.regularLIst;if(0!=a.length&&null!=e)switch(t){case 0:if(e<=a[0].highCount)return"numActive";break;case 1:if(e>=a[1].lowCount&&e<=a[1].highCount)return"numActive";break;case 2:if(e>=a[2].lowCount&&e<=a[2].highCount)return"numActive";break;case 3:if(e>=a[3].lowCount)return"numActive"}},className2:function(t){var e=this.groupNum,a=this.regularLIst;if(0!=a.length&&null!=e)switch(t){case 0:return e<=a[0].highCount?"":"lineActive";case 1:if(e>=a[2].lowCount)return"lineActive";break;case 2:if(e>=a[3].lowCount)return"lineActive"}}},mounted:function(){this.id=Object(d["c"])("groupId");var t=document.getElementsByClassName("van-step__line");t.style.background="#ebedf0"},beforeDestroy:function(){},components:{Button:r["a"],Popup:r["d"],PayPopup:h["a"],Share:v["a"],Countdown:g["a"]}},I=w,y=(a("b785"),a("2877")),_=Object(y["a"])(I,n,i,!1,null,null,null);_.options.__file="Index.vue";var b=_.exports;a("b7f1"),a("3102");new s["a"]({render:function(t){return t(b)}}).$mount("#app")},"5d00":function(t,e,a){},b785:function(t,e,a){"use strict";var s=a("5d00"),n=a.n(s);n.a}});
//# sourceMappingURL=groupBuy.ae0fa22e.js.map