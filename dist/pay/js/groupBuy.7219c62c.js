(function(t){function s(s){for(var n,i,r=s[0],c=s[1],u=s[2],d=0,f=[];d<r.length;d++)i=r[d],a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(s);while(f.length)f.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,s=0;s<o.length;s++){for(var e=o[s],n=!0,r=1;r<e.length;r++){var c=e[r];0!==a[c]&&(n=!1)}n&&(o.splice(s--,1),t=i(i.s=e[0]))}return t}var n={},a={groupBuy:0},o=[];function i(s){if(n[s])return n[s].exports;var e=n[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)i.d(e,n,function(s){return t[s]}.bind(null,n));return e},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var u=0;u<r.length;u++)s(r[u]);var l=c;o.push([2,"chunk-vendors","chunk-common"]),e()})({2:function(t,s,e){t.exports=e("4d51")},3102:function(t,s,e){},"4d51":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("097d");var n=e("2b0e"),a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"app"}},[1==t.groupInfo.status?n("h3",{staticClass:"normal"},[t._v("拼团中")]):t._e(),3==t.groupInfo.status?n("h3",{staticClass:"fail"},[t._v("拼团失败")]):t._e(),2==t.groupInfo.status?n("h3",{staticClass:"success"},[t._v("拼团成功")]):t._e(),n("div",{staticClass:"goods"},[n("img",{attrs:{src:t.activity.imageUrl,alt:""}}),n("div",{staticClass:"desc"},[n("div",{staticClass:"title"},[n("h3",[t._v(t._s(t.goodsInfo.name)),n("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])])]),n("div",{staticClass:"price"},[t._v("\n                价格\n                "),n("span",[t._v(t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))])]),n("div",{staticClass:"sale"},[n("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))]),n("span",[t._v("省 "+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))])])])]),n("div",{staticClass:"groupProgress"},[n("h3",[t._v("当前有"),n("span",[t._v(t._s(t.groupNum||0))]),t._v("人参团，倒计时结束48小时后：")]),n("div",{staticClass:"progress"},[n("div",{staticClass:"box",class:t.className(0)},[t._v("不返利")]),n("div",{staticClass:"line",class:t.className2(0)}),n("div",{staticClass:"box",class:t.className(1)},[t._v("返￥200")]),n("div",{staticClass:"line",class:t.className2(1)}),n("div",{staticClass:"box",class:t.className(2)},[t._v("返￥300")]),n("div",{staticClass:"line",class:t.className2(2)}),n("div",{staticClass:"box",class:t.className(3)},[t._v("返￥400")])]),n("div",{staticClass:"progressNum"},t._l(t.regularLIst,function(s,e){return n("div",{class:t.className1(e)},[t._v(t._s(s.content))])}))]),n("div",{staticClass:"groupDetails"},[n("h3",[t._v("距结束只剩 "),n("Countdown",{attrs:{second:t.countDownSenconds},on:{end:t.timeOut}})],1),n("div",{staticClass:"groupMember"},[n("div",{staticClass:"groupLeader"},[n("img",{attrs:{src:t.leaderHeadImg,alt:""}}),n("span",[t._v("团长")])]),n("div",{staticClass:"groupFriends"},[null==t.headList[0]?n("div",{staticClass:"emptyI",staticStyle:{"margin-left":"18px"}},[t._v("?")]):t._l(t.headList,function(t,s){return n("img",{style:"right:"+18*s+"px",attrs:{alt:"",src:t}})})],2)]),t.countDownSenconds>0?n("div",["0"==t.isLeader&&"0"==t.userHasBuy?n("Button",{staticClass:"indexBtn",on:{click:function(s){t.showMobile=!0}}},[t._v("一键参团 "+t._s(t._f("Money")(t.goodsInfo.originPrice||0)))]):n("Button",{staticClass:"indexBtn",on:{click:function(s){t.share=!0}}},[t._v("邀请好友团购，拿更高返利")])],1):n("Button",{staticClass:"indexBtn endBtn"},[t._v("团购已结束")]),t.countDownSenconds<=0&&3==t.groupInfo.status?n("Button",{staticClass:"indexBtn endBtn"},[t._v("请联系团长重新开团")]):t._e(),n("em",[t._v("好友拼团·人满发货·不满退款")])],1),n("div",{staticClass:"playGuide"},[n("h3",[t._v("玩法说明")]),n("Steps",{attrs:{active:t.active}},[n("Step",[t._v("开团")]),n("Step",[t._v("邀请好友")]),n("Step",[t._v("6小时内成团")]),n("Step",[t._v("发货")])],1)],1),t._m(0),n("div",{staticClass:"income",on:{click:t.goIncome}},[n("img",{attrs:{src:e("65a7"),alt:""}})]),n("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(s){t.showMobile=!1},wxPay:t.wxPay}}),n("Share",{attrs:{share:t.share},on:{know:function(s){t.share=!1}}})],1)},o=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"goodDetails"},[n("h3",[t._v("商品详情")]),n("img",{attrs:{src:e("775a"),alt:""}}),n("img",{attrs:{src:e("8e30"),alt:""}}),n("img",{attrs:{src:e("1f66"),alt:""}}),n("img",{attrs:{src:e("5fa5"),alt:""}}),n("img",{attrs:{src:e("c037"),alt:""}}),n("img",{attrs:{src:e("338d"),alt:""}}),n("img",{attrs:{src:e("0f01"),alt:""}}),n("img",{attrs:{src:e("eadf"),alt:""}}),n("img",{attrs:{src:e("6846"),alt:""}}),n("img",{attrs:{src:e("4abd"),alt:""}}),n("img",{attrs:{src:e("e509"),alt:""}}),n("img",{attrs:{src:e("3967"),alt:""}}),n("img",{attrs:{src:e("db11"),alt:""}}),n("img",{attrs:{src:e("0d89"),alt:""}}),n("img",{attrs:{src:e("ce54"),alt:""}}),n("img",{attrs:{src:e("c2ae"),alt:""}})])}],i=e("c93e"),r=e("b970"),c={name:"app",data:function(){return{}},methods:{},mounted:function(){},beforeDestroy:function(){},components:{}},u=e("9541"),l=e("ca41"),d=e("0ad9"),f=e("50a0"),g=e("ff62"),v=e("c53f"),h=e("f8b7"),p=e("17a4"),m=e("18a0"),_=e.n(m),C={name:"app",mixins:[c,u["a"]],data:function(){return{showMobile:!1,active:-1,share:!1,groupNum:"",goodsInfo:{},activity:{},groupInfo:{},leaderHeadImg:"",headList:[],regularLIst:[],countDownSenconds:0,isLeader:"",userHasBuy:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{wxSignatureCallback:function(){var t={shareTitle:"『团购优惠』和好朋友一起领",shareBody:"健康管理师＆护理评估师，现在团购立减¥880",shareUrl:"https://hsj.hulian120.com/pay/groupBuy.html?groupId="+window.URLPARAMS.groupId+"leaderId"+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};_.a.onMenuShareAppMessage({title:t.shareTitle,desc:t.shareBody,link:t.shareUrl,imgUrl:t.shareImg,success:function(){console.log("配置分享成功")},cancel:function(){console.log("配置分享失败")}})},goIncome:function(){window.location.href="./incomeDetails.html"},timeOut:function(){this.countDownSenconds=0},wxPay:function(t){Object(h["a"])({activityId:window.actId,groupId:this.groupInfo.id,mobile:t}).then(function(t){Object(v["a"])(t)}).catch(function(t){})},className:function(t){var s=this.groupNum,e=this.regularLIst;if(0!=e.length&&null!=s)switch(t){case 0:return s<=e[0].highCount?"active":"";case 1:return s<=e[0].highCount?"unActive":s>=e[1].lowCount&&s<=e[1].highCount?"active":"";case 2:return s<=e[0].highCount?"unActive":s>=e[1].lowCount&&s<=e[1].highCount?"unActive":s>=e[2].lowCount&&s<=e[2].highCount?"active":"";case 3:return s<=e[0].highCount?"unActive":s>=e[1].lowCount&&s<=e[1].highCount?"unActive":s>=e[2].lowCount&&s<=e[2].highCount?"unActive":"active"}},className1:function(t){var s=this.groupNum,e=this.regularLIst;if(0!=e.length&&null!=s)switch(t){case 0:if(s<=e[0].highCount)return"numActive";break;case 1:if(s>=e[1].lowCount&&s<=e[1].highCount)return"numActive";break;case 2:if(s>=e[2].lowCount&&s<=e[2].highCount)return"numActive";break;case 3:if(s>=e[3].lowCount)return"numActive"}},className2:function(t){var s=this.groupNum,e=this.regularLIst;if(0!=e.length&&null!=s)switch(t){case 0:return s<=e[0].highCount?"":"lineActive";case 1:if(s>=e[2].lowCount)return"lineActive";break;case 2:if(s>=e[3].lowCount)return"lineActive"}}},mounted:function(){var t=this;this.id=Object(d["c"])("groupId"),Object(l["g"])({groupId:this.id}).then(function(s){t.groupNum=s.orderCount,t.isLeader=s.isLeader,t.countDownSenconds=s.countDownSenconds,t.leaderHasBuy=s.leaderHasBuy,t.goodsInfo=Object(i["a"])({},s.goodsInfo),t.activity=Object(i["a"])({},s.activity),t.groupInfo=Object(i["a"])({},s.groupInfo),t.regularLIst=s.regularLIst,t.headList=s.headList.reverse(),t.leaderHeadImg=s.leaderHeadImg,t.userHasBuy=s.userHasBuy}).catch(function(t){})},beforeDestroy:function(){},components:{Button:r["a"],Steps:r["e"],Step:r["d"],Popup:r["c"],Countdown:f["a"],PayPopup:g["a"],Share:p["a"]}},w=C,b=(e("b785"),e("2877")),y=Object(b["a"])(w,a,o,!1,null,null,null);y.options.__file="Index.vue";var I=y.exports;e("b7f1"),e("3102");new n["a"]({render:function(t){return t(I)}}).$mount("#app")},"5d00":function(t,s,e){},"65a7":function(t,s,e){t.exports=e.p+"img/2.657cacd1.png"},b785:function(t,s,e){"use strict";var n=e("5d00"),a=e.n(n);a.a}});
//# sourceMappingURL=groupBuy.7219c62c.js.map