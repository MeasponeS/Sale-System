(function(t){function s(s){for(var a,i,r=s[0],c=s[1],u=s[2],d=0,f=[];d<r.length;d++)i=r[d],n[i]&&f.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(s);while(f.length)f.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,s=0;s<o.length;s++){for(var e=o[s],a=!0,r=1;r<e.length;r++){var c=e[r];0!==n[c]&&(a=!1)}a&&(o.splice(s--,1),t=i(i.s=e[0]))}return t}var a={},n={groupBuy:0},o=[];function i(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)i.d(e,a,function(s){return t[s]}.bind(null,a));return e},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var u=0;u<r.length;u++)s(r[u]);var l=c;o.push([2,"chunk-vendors","chunk-common"]),e()})({2:function(t,s,e){t.exports=e("4d51")},3102:function(t,s,e){},"4d51":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[1==t.groupInfo.status?e("h3",{staticClass:"normal"},[t._v("拼团中")]):t._e(),3==t.groupInfo.status?e("h3",{staticClass:"fail"},[t._v("拼团失败")]):t._e(),2==t.groupInfo.status?e("h3",{staticClass:"success"},[t._v("拼团成功")]):t._e(),e("div",{staticClass:"goods"},[e("img",{attrs:{src:t.activity.imageUrl,alt:""}}),e("div",{staticClass:"desc"},[e("div",{staticClass:"title"},[e("h3",[t._v(t._s(t.goodsInfo.name)),e("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])])]),e("div",{staticClass:"price"},[t._v("\n                原价\n                "),e("span",[t._v(t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))])]),e("div",{staticClass:"sale"},[e("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))]),e("span",[t._v("省 "+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))]),e("strong",{staticClass:"countNum"},[t._v("已有"+t._s(t.orderCount||0)+"人成团")])])])]),e("div",{staticClass:"groupProgress"},[e("h3",[t._v("当前有"),e("span",[t._v(t._s(t.groupNum||0))]),t._v("人参团，倒计时结束后：")]),e("div",{staticClass:"progress"},[e("div",{staticClass:"box",class:t.className(0)},[t._v("不返利")]),e("div",{staticClass:"line",class:t.className2(0)}),e("div",{staticClass:"box",class:t.className(1)},[t._v("返￥200")]),e("div",{staticClass:"line",class:t.className2(1)}),e("div",{staticClass:"box",class:t.className(2)},[t._v("返￥300")]),e("div",{staticClass:"line",class:t.className2(2)}),e("div",{staticClass:"box",class:t.className(3)},[t._v("返￥400")])]),e("div",{staticClass:"progressNum"},t._l(t.regularLIst,function(s,a){return e("div",{class:t.className1(a)},[t._v(t._s(s.content))])}))]),e("div",{staticClass:"groupDetails"},[e("h3",[t._v("距结束只剩 10:10:10 ")]),e("div",{staticClass:"groupMember"},[e("div",{staticClass:"groupMember"},[e("div",{staticClass:"groupLeader"},[e("img",{attrs:{src:t.leaderHeadImg,alt:""}}),e("span",[t._v("团长")])]),e("div",{staticClass:"groupFriends"},[null==t.headList[0]?e("div",{staticClass:"emptyI",staticStyle:{"margin-left":"-72px"}},[t._v("?")]):t._l(t.headList.reverse(),function(t,s){return e("img",{style:"right:"+18*s+"px",attrs:{alt:"",src:t}})})],2)]),t.countDownSenconds>0?e("div",["0"==t.isLeader&&"0"==t.userHasBuy?e("Button",{staticClass:"indexBtn",on:{click:function(s){t.showMobile=!0}}},[t._v("一键参团 "+t._s(t._f("Money")(t.goodsInfo.originPrice||0)))]):e("Button",{staticClass:"indexBtn",on:{click:function(s){t.share=!0}}},[t._v("邀请好友团购，拿更高返利")])],1):t._e(),t.countDownSenconds<=0&&3!=t.groupInfo.status?e("Button",{staticClass:"indexBtn endBtn"},[t._v("团购已结束")]):t._e(),t.countDownSenconds<=0&&3==t.groupInfo.status?e("Button",{staticClass:"indexBtn endBtn"},[t._v("请联系团长重新开团")]):t._e(),e("em",[t._v("好友拼团·人满发货·不满退款")])],1),e("div",{staticClass:"playGuide"},[e("h3",[t._v("玩法说明")]),e("Steps",{attrs:{active:t.active}},[e("Step",[t._v("开团")]),e("Step",[t._v("邀请好友")]),e("Step",[t._v("6小时内成团")]),e("Step",[t._v("发货")])],1)],1),t._m(0),e("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(s){t.showMobile=!1},wxPay:t.wxPay}}),e("Share",{attrs:{share:t.share},on:{know:function(s){t.share=!1}}})],1)])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"goodDetails"},[a("h3",[t._v("商品详情")]),a("img",{attrs:{src:e("775a"),alt:""}}),a("img",{attrs:{src:e("8e30"),alt:""}}),a("img",{attrs:{src:e("1f66"),alt:""}}),a("img",{attrs:{src:e("5fa5"),alt:""}}),a("img",{attrs:{src:e("c037"),alt:""}}),a("img",{attrs:{src:e("338d"),alt:""}}),a("img",{attrs:{src:e("0f01"),alt:""}}),a("img",{attrs:{src:e("eadf"),alt:""}}),a("img",{attrs:{src:e("6846"),alt:""}}),a("img",{attrs:{src:e("4abd"),alt:""}}),a("img",{attrs:{src:e("e509"),alt:""}}),a("img",{attrs:{src:e("3967"),alt:""}}),a("img",{attrs:{src:e("db11"),alt:""}}),a("img",{attrs:{src:e("0d89"),alt:""}}),a("img",{attrs:{src:e("ce54"),alt:""}}),a("img",{attrs:{src:e("c2ae"),alt:""}})])}],i=e("c93e"),r=e("b970"),c={name:"app",data:function(){return{}},methods:{},mounted:function(){},beforeDestroy:function(){},components:{}},u=e("9541"),l=e("ca41"),d=e("0ad9"),f=e("ff62"),v=e("c53f"),g=e("f8b7"),h=e("17a4"),p={name:"app",mixins:[c,u["a"]],data:function(){return{showMobile:!1,active:-1,share:!1,groupNum:"",goodsInfo:{},activity:{},groupInfo:{},leaderHeadImg:"",headList:[],regularLIst:[],countDownSenconds:0,isLeader:"",userHasBuy:"",orderCount:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{shareFriend:function(){var t={shareTitle:"『团购优惠』和好朋友一起领",shareBody:"健康管理师＆护理评估师，现在团购立减¥880",shareUrl:"https://hsj.hulian120.com/pay/groupBuy.html?groupId="+window.URLPARAMS.groupId+"&leaderId="+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(v["a"])(t),Object(v["b"])(t)},wxSignatureCallback:function(){},timeOut:function(){var t=this;Object(l["g"])({groupId:this.id}).then(function(s){t.groupNum=s.orderCount,t.isLeader=s.isLeader,t.countDownSenconds=s.countDownSenconds,t.leaderHasBuy=s.leaderHasBuy,t.goodsInfo=Object(i["a"])({},s.goodsInfo),t.activity=Object(i["a"])({},s.activity),t.orderCount=s.orderCount,t.groupInfo=Object(i["a"])({},s.groupInfo),t.regularLIst=s.regularLIst,t.headList=s.headList,t.leaderHeadImg=s.leaderHeadImg,t.userHasBuy=s.userHasBuy}).catch(function(t){})},userBuy:function(){setTimeout(function(){window.location.href="https://hsj.hulian120.com/pay/groupBuy.html?groupId="+window.URLPARAMS.groupId+"&leaderId="+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status+"&pay=1"},300)},wxPay:function(t){var s=this;Object(g["a"])({activityId:window.actId,groupId:this.groupInfo.id,mobile:t}).then(function(t){s.showMobile=!1,Object(v["c"])(t,s.userBuy)}).catch(function(t){})},className:function(t){var s=this.groupNum,e=this.regularLIst;if(0!=e.length&&null!=s)switch(t){case 0:return s<=e[0].highCount?"active":"";case 1:return s<=e[0].highCount?"unActive":s>=e[1].lowCount&&s<=e[1].highCount?"active":"";case 2:return s<=e[0].highCount?"unActive":s>=e[1].lowCount&&s<=e[1].highCount?"unActive":s>=e[2].lowCount&&s<=e[2].highCount?"active":"";case 3:return s<=e[0].highCount?"unActive":s>=e[1].lowCount&&s<=e[1].highCount?"unActive":s>=e[2].lowCount&&s<=e[2].highCount?"unActive":"active"}},className1:function(t){var s=this.groupNum,e=this.regularLIst;if(0!=e.length&&null!=s)switch(t){case 0:if(s<=e[0].highCount)return"numActive";break;case 1:if(s>=e[1].lowCount&&s<=e[1].highCount)return"numActive";break;case 2:if(s>=e[2].lowCount&&s<=e[2].highCount)return"numActive";break;case 3:if(s>=e[3].lowCount)return"numActive"}},className2:function(t){var s=this.groupNum,e=this.regularLIst;if(0!=e.length&&null!=s)switch(t){case 0:return s<=e[0].highCount?"":"lineActive";case 1:if(s>=e[2].lowCount)return"lineActive";break;case 2:if(s>=e[3].lowCount)return"lineActive"}}},mounted:function(){this.id=Object(d["c"])("groupId")},beforeDestroy:function(){},components:{Button:r["a"],Steps:r["f"],Step:r["e"],Popup:r["d"],PayPopup:f["a"],Share:h["a"]}},m=p,_=(e("b785"),e("2877")),C=Object(_["a"])(m,n,o,!1,null,null,null);C.options.__file="Index.vue";var w=C.exports;e("b7f1"),e("3102");new a["a"]({render:function(t){return t(w)}}).$mount("#app")},"5d00":function(t,s,e){},b785:function(t,s,e){"use strict";var a=e("5d00"),n=e.n(a);n.a}});
//# sourceMappingURL=groupBuy.17ac0661.js.map