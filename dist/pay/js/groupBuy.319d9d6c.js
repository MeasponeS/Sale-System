(function(t){function s(s){for(var e,i,r=s[0],c=s[1],u=s[2],d=0,f=[];d<r.length;d++)i=r[d],a[i]&&f.push(a[i][0]),a[i]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);l&&l(s);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,s=0;s<o.length;s++){for(var n=o[s],e=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(e=!1)}e&&(o.splice(s--,1),t=i(i.s=n[0]))}return t}var e={},a={groupBuy:0},o=[];function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,s,n){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)i.d(n,e,function(s){return t[s]}.bind(null,e));return n},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var u=0;u<r.length;u++)s(r[u]);var l=c;o.push([2,"chunk-vendors","chunk-common"]),n()})({2:function(t,s,n){t.exports=n("4d51")},3102:function(t,s,n){},"4d51":function(t,s,n){"use strict";n.r(s);n("cadf"),n("551c"),n("097d");var e=n("2b0e"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[1==t.groupInfo.status?e("h3",{staticClass:"normal"},[t._v("拼团中")]):t._e(),3==t.groupInfo.status?e("h3",{staticClass:"fail"},[t._v("拼团失败")]):t._e(),2==t.groupInfo.status?e("h3",{staticClass:"success"},[t._v("拼团成功")]):t._e(),e("div",{staticClass:"goods"},[e("img",{attrs:{src:t.activity.imageUrl,alt:""}}),e("div",{staticClass:"desc"},[e("div",{staticClass:"title"},[e("h3",[t._v(t._s(t.goodsInfo.name)),e("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])])]),e("div",{staticClass:"price"},[t._v("\n                价格\n                "),e("span",[t._v(t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))])]),e("div",{staticClass:"sale"},[e("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))]),e("span",[t._v("省 "+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))])])])]),e("div",{staticClass:"groupProgress"},[e("h3",[t._v("当前有"),e("span",[t._v(t._s(t.groupNum||0))]),t._v("人参团，倒计时结束48小时后：")]),e("div",{staticClass:"progress"},[e("div",{staticClass:"box",class:t.className(0)},[t._v("不返利")]),e("div",{staticClass:"line",class:t.className2(0)}),e("div",{staticClass:"box",class:t.className(1)},[t._v("返￥200")]),e("div",{staticClass:"line",class:t.className2(1)}),e("div",{staticClass:"box",class:t.className(2)},[t._v("返￥300")]),e("div",{staticClass:"line",class:t.className2(2)}),e("div",{staticClass:"box",class:t.className(3)},[t._v("返￥400")])]),e("div",{staticClass:"progressNum"},t._l(t.regularLIst,function(s,n){return e("div",{class:t.className1(n)},[t._v(t._s(s.content))])}))]),e("div",{staticClass:"groupDetails"},[e("h3",[t._v("距结束只剩 "),e("Countdown",{attrs:{second:t.countDownSenconds},on:{toggle:function(s){t.countDownSenconds--},end:t.timeOut}})],1),e("div",{staticClass:"groupMember"},[e("div",{staticClass:"groupLeader"},[e("img",{attrs:{src:t.leaderHeadImg,alt:""}}),e("span",[t._v("团长")])]),e("div",{staticClass:"groupFriends"},[null==t.headList[0]?e("div",{staticClass:"emptyI",staticStyle:{"margin-left":"18px"}},[t._v("?")]):t._l(t.headList,function(t,s){return e("img",{style:"right:"+18*s+"px",attrs:{src:"",alt:""}})})],2)]),t.countDownSenconds<=0?e("Button",{staticClass:"indexBtn endBtn"},[t._v("团购已结束")]):e("div",[t.isLeader||t.userHasBuy?e("Button",{staticClass:"indexBtn",on:{click:function(s){t.share=!0}}},[t._v("邀请好友团购，拿更高返利")]):e("Button",{staticClass:"indexBtn",on:{click:function(s){t.showMobile=!0}}},[t._v("一键参团 "+t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])],1),t.countDownSenconds<=0&&3==t.groupInfo.status?e("Button",{staticClass:"indexBtn endBtn"},[t._v("请联系团长重新开团")]):t._e(),e("em",[t._v("好友拼团·人满发货·不满退款")])],1),e("div",{staticClass:"playGuide"},[e("h3",[t._v("玩法说明")]),e("Steps",{attrs:{active:t.active}},[e("Step",[t._v("开团")]),e("Step",[t._v("邀请好友")]),e("Step",[t._v("6小时内成团")]),e("Step",[t._v("发货")])],1)],1),t._m(0),e("div",{staticClass:"income",on:{click:t.goIncome}},[e("img",{attrs:{src:n("65a7"),alt:""}})]),e("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(s){t.showMobile=!1},wxPay:t.wxPay}}),e("Share",{attrs:{share:t.share},on:{know:function(s){t.share=!1}}})],1)},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goodDetails"},[e("h3",[t._v("商品详情")]),e("img",{attrs:{src:n("775a"),alt:""}}),e("img",{attrs:{src:n("8e30"),alt:""}}),e("img",{attrs:{src:n("1f66"),alt:""}}),e("img",{attrs:{src:n("5fa5"),alt:""}}),e("img",{attrs:{src:n("c037"),alt:""}}),e("img",{attrs:{src:n("338d"),alt:""}}),e("img",{attrs:{src:n("0f01"),alt:""}}),e("img",{attrs:{src:n("eadf"),alt:""}}),e("img",{attrs:{src:n("6846"),alt:""}}),e("img",{attrs:{src:n("4abd"),alt:""}}),e("img",{attrs:{src:n("e509"),alt:""}}),e("img",{attrs:{src:n("3967"),alt:""}}),e("img",{attrs:{src:n("db11"),alt:""}}),e("img",{attrs:{src:n("0d89"),alt:""}}),e("img",{attrs:{src:n("ce54"),alt:""}}),e("img",{attrs:{src:n("c2ae"),alt:""}})])}],i=n("c93e"),r=n("b970"),c={name:"app",data:function(){return{}},methods:{},mounted:function(){},beforeDestroy:function(){},components:{}},u=n("9541"),l=n("ca41"),d=n("0ad9"),f=n("50a0"),g=n("ff62"),v=n("c53f"),h=n("f8b7"),p=n("17a4"),m=n("18a0"),_=n.n(m),C={name:"app",mixins:[c,u["a"]],data:function(){return{showMobile:!1,active:-1,share:!1,groupNum:"",goodsInfo:{},activity:{},groupInfo:{},leaderHeadImg:"",headList:[],regularLIst:[],countDownSenconds:"",isLeader:"",userHasBuy:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{wxSignatureCallback:function(){var t={shareTitle:"『团购优惠』和好朋友一起领",shareBody:"健康管理师＆护理评估师，现在团购立减¥880",shareUrl:"https://hsj.hulian120.com/pay/groupBuy.html?groupId="+window.URLPARAMS.groupId+"leaderId"+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};_.a.onMenuShareAppMessage({title:t.shareTitle,desc:t.shareBody,link:t.shareUrl,imgUrl:t.shareImg,success:function(){console.log("配置分享成功")},cancel:function(){console.log("配置分享失败")}})},goIncome:function(){window.location.href="./incomeDetails.html"},timeOut:function(){this.countDownSenconds=0},wxPay:function(t){Object(h["a"])({activityId:window.actId,groupId:this.groupInfo.id,mobile:t}).then(function(t){Object(v["a"])(t)}).catch(function(t){})},className:function(t){var s=this.groupNum,n=this.regularLIst;if(0!=n.length&&null!=s)switch(t){case 0:return s<=n[0].highCount?"active":"";case 1:return s<=n[0].highCount?"unActive":s>=n[1].lowCount&&s<=n[1].highCount?"active":"";case 2:return s<=n[0].highCount?"unActive":s>=n[1].lowCount&&s<=n[1].highCount?"unActive":s>=n[2].lowCount&&s<=n[2].highCount?"active":"";case 3:return s<=n[0].highCount?"unActive":s>=n[1].lowCount&&s<=n[1].highCount?"unActive":s>=n[2].lowCount&&s<=n[2].highCount?"unActive":"active"}},className1:function(t){var s=this.groupNum,n=this.regularLIst;if(0!=n.length&&null!=s)switch(t){case 0:if(s<=n[0].highCount)return"numActive";break;case 1:if(s>=n[1].lowCount&&s<=n[1].highCount)return"numActive";break;case 2:if(s>=n[2].lowCount&&s<=n[2].highCount)return"numActive";break;case 3:if(s>=n[3].lowCount)return"numActive"}},className2:function(t){var s=this.groupNum,n=this.regularLIst;if(0!=n.length&&null!=s)switch(t){case 0:return s<=n[0].highCount?"":"lineActive";case 1:if(s>=n[2].lowCount)return"lineActive";break;case 2:if(s>=n[3].lowCount)return"lineActive"}}},mounted:function(){var t=this;this.id=Object(d["c"])("groupId"),Object(l["g"])({groupId:this.id}).then(function(s){t.groupNum=s.orderCount,t.countDownSenconds=s.countDownSenconds,t.leaderHasBuy=s.leaderHasBuy,t.goodsInfo=Object(i["a"])({},s.goodsInfo),t.activity=Object(i["a"])({},s.activity),t.groupInfo=Object(i["a"])({},s.groupInfo),t.regularLIst=s.regularLIst,t.headList=s.headList.reverse()}).catch(function(t){})},beforeDestroy:function(){},components:{Button:r["a"],Steps:r["e"],Step:r["d"],Popup:r["c"],Countdown:f["a"],PayPopup:g["a"],Share:p["a"]}},w=C,b=(n("b785"),n("2877")),y=Object(b["a"])(w,a,o,!1,null,null,null);y.options.__file="Index.vue";var I=y.exports;n("b7f1"),n("3102");new e["a"]({render:function(t){return t(I)}}).$mount("#app")},"5d00":function(t,s,n){},"65a7":function(t,s,n){t.exports=n.p+"img/2.657cacd1.png"},b785:function(t,s,n){"use strict";var e=n("5d00"),a=n.n(e);a.a}});
//# sourceMappingURL=groupBuy.319d9d6c.js.map