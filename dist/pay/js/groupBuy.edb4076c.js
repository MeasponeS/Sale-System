(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],d=0,g=[];d<i.length;d++)r=i[d],n[r]&&g.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(g.length)g.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={groupBuy:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([2,"chunk-vendors","chunk-common"]),s()})({2:function(t,e,s){t.exports=s("4d51")},3102:function(t,e,s){},"4d51":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.goodsInfo.sellPrice?a("div",[1==t.groupInfo.status?a("h3",{staticClass:"normal"},[t._v("拼团中")]):t._e(),3==t.groupInfo.status?a("h3",{staticClass:"fail"},[t._v("拼团失败")]):t._e(),2==t.groupInfo.status?a("h3",{staticClass:"success"},[t._v("拼团成功")]):t._e(),a("div",{staticClass:"goods"},[a("img",{attrs:{src:t.activity.imageUrl,alt:""}}),a("div",{staticClass:"desc"},[a("div",{staticClass:"title"},[a("h3",[t._v(t._s(t.goodsInfo.name))])]),a("div",{staticClass:"price"},[a("span",[t._v(" 原价"),a("em",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])]),a("span",{staticClass:"getGroup"},[t._v(t._s(t.activity.minCount||0)+"人可成团")])]),a("div",{staticClass:"sale"},[a("span",[t._v(t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]),a("span",{staticClass:"saveMoney"},[t._v("省 "+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))])])])]),a("div",{staticClass:"groupProgress"},[a("h3",[t._v("当前有"),a("span",[t._v(t._s(t.groupNum||0))]),t._v("人参团，倒计时结束后：")]),a("div",{staticClass:"progress"},[a("div",{staticClass:"box",class:t.className(0)},[t._v("不返利")]),a("div",{staticClass:"line",class:t.className2(0)}),a("div",{staticClass:"box",class:t.className(1)},[t._v("返￥"+t._s(t.regularLIst[1].rebateMoney))]),a("div",{staticClass:"line",class:t.className2(1)}),a("div",{staticClass:"box",class:t.className(2)},[t._v("返￥"+t._s(t.regularLIst[2].rebateMoney))]),a("div",{staticClass:"line",class:t.className2(2)}),a("div",{staticClass:"box",class:t.className(3)},[t._v("返￥"+t._s(t.regularLIst[3].rebateMoney))])]),a("div",{staticClass:"progressNum"},t._l(t.regularLIst,function(e,s){return a("div",{class:t.className1(s)},[t._v(t._s(e.content))])}))]),a("div",{staticClass:"groupDetails"},[a("h3",[t._v("距结束只剩 "),a("Countdown",{attrs:{second:t.countDownSenconds,status:t.groupInfo.status},on:{end:t.timeOut}})],1),a("div",{staticClass:"groupMember"},[a("div",{staticClass:"groupLeader"},[a("img",{attrs:{src:t.leaderHeadImg,alt:""}}),a("span",[t._v("团长")])]),a("div",{staticClass:"groupFriends"},[""!=t.headList&&t.headList[0]?t._l(t.headList,function(t,e){return a("img",{style:"right:"+18*e+"px",attrs:{alt:"",src:t}})}):a("div",{staticClass:"emptyI",staticStyle:{"margin-left":"-72px"}},[t._v("?")])],2)]),t.countDownSenconds>0?a("div",["0"==t.isLeader&&"0"==t.userHasBuy?a("Button",{staticClass:"indexBtn",on:{click:t.inGroup}},[t._v("一键参团 "+t._s(t._f("Money")(t.goodsInfo.originPrice||0)))]):a("Button",{staticClass:"indexBtn",on:{click:t.shareToFriend}},[t._v("邀请好友团购，拿更高返利")])],1):t._e(),t.countDownSenconds<=0&&3!=t.groupInfo.status?a("Button",{staticClass:"indexBtn endBtn"},[t._v("团购已结束")]):t._e(),t.countDownSenconds<=0&&3==t.groupInfo.status?a("Button",{staticClass:"indexBtn endBtn"},[t._v("请联系团长重新开团")]):t._e(),t._m(0)],1),a("div",{staticClass:"playGuide"},[a("h3",[t._v("玩法说明")]),a("div",{staticStyle:{padding:"0 15px"}},[a("Steps",{attrs:{active:t.active}},[a("Step",[t._v("开团")]),a("Step",[t._v("邀请好友")]),a("Step",[t._v("6小时内成团")]),a("Step",[t._v("发货")])],1)],1)]),t._m(1),a("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(e){t.showMobile=!1},wxPay:t.wxPay}}),a("Share",{attrs:{share:t.share},on:{know:function(e){t.share=!1}}})],1):a("div",{attrs:{id:"loading"}},[a("img",{attrs:{src:s("cf1c"),alt:""}})])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("em",[t._v("好友拼团·人满发货·"),s("a",{attrs:{href:"https://kf.qq.com/touch/sappfaq/180319FN3eUR180319JbURBr.html"}},[t._v("不满退款")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goodDetails"},[a("h3",[t._v("商品详情")]),a("img",{attrs:{src:s("775a"),alt:""}}),a("img",{attrs:{src:s("8e30"),alt:""}}),a("img",{attrs:{src:s("1f66"),alt:""}}),a("img",{attrs:{src:s("5fa5"),alt:""}}),a("img",{attrs:{src:s("c037"),alt:""}}),a("img",{attrs:{src:s("338d"),alt:""}}),a("img",{attrs:{src:s("0f01"),alt:""}}),a("img",{attrs:{src:s("eadf"),alt:""}}),a("img",{attrs:{src:s("6846"),alt:""}}),a("img",{attrs:{src:s("4abd"),alt:""}}),a("img",{attrs:{src:s("e509"),alt:""}}),a("img",{attrs:{src:s("3967"),alt:""}}),a("img",{attrs:{src:s("db11"),alt:""}}),a("img",{attrs:{src:s("0d89"),alt:""}}),a("img",{attrs:{src:s("ce54"),alt:""}}),a("img",{attrs:{src:s("c2ae"),alt:""}})])}],r=s("c93e"),i=s("b970"),c={name:"app",data:function(){return{}},methods:{},mounted:function(){},beforeDestroy:function(){},components:{}},u=s("9541"),l=s("ca41"),d=s("0ad9"),g=s("50a0"),h=s("ff62"),p=s("c53f"),f=s("f8b7"),v=s("17a4"),m=s("9690"),I={name:"app",mixins:[c,u["a"]],data:function(){return{showMobile:!1,active:-1,share:!1,groupNum:"",goodsInfo:{},activity:{},groupInfo:{},leaderHeadImg:"",headList:[],regularLIst:[],countDownSenconds:0,isLeader:"",userHasBuy:"",orderCount:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{shareToFriend:function(){this.share=!0;var t={activityId:window.actId,groupId:this.groupInfo.id,pageUrl:"/pages/groupBuy.html",pageName:"拼团页",clickEvent:"点击邀请好友参团",clickEventName:"邀请好友参团"};Object(m["a"])(t)},shareFriend:function(){var t={shareTitle:"『团购优惠』和好朋友一起领",shareBody:"健康管理师＆护理评估师，现在团购立减¥880",shareUrl:"https://hsj.hulian120.com/pay/groupBuy.html?groupId="+window.URLPARAMS.groupId+"&leaderId="+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(p["a"])(t),Object(p["b"])(t)},wxSignatureCallback:function(){var t=this;Object(l["g"])({groupId:this.id}).then(function(e){t.groupNum=e.orderCount,t.isLeader=e.isLeader,t.countDownSenconds=e.countDownSenconds,t.leaderHasBuy=e.leaderHasBuy,t.goodsInfo=Object(r["a"])({},e.goodsInfo),t.activity=Object(r["a"])({},e.activity),t.groupInfo=Object(r["a"])({},e.groupInfo),t.regularLIst=e.regularLIst,t.orderCount=e.orderCount,t.headList=e.headList,t.leaderHeadImg=e.leaderHeadImg,t.userHasBuy=e.userHasBuy,t.headList=t.headList.filter(function(t){return t}),console.log(e.headList,"r"),console.log(t.headList,"h"),t.headList=t.headList.reverse(),console.log(t.headList,"hr"),t.shareFriend()}).catch(function(t){})},inGroup:function(){this.showMobile=!0;var t={activityId:window.actId,groupId:this.groupInfo.id,pageUrl:"/pages/groupBuy.html",pageName:"拼团页",clickEvent:"点击一键参团",clickEventName:"一键参团"};Object(m["a"])(t)},timeOut:function(){var t=this;Object(l["g"])({groupId:this.id}).then(function(e){t.groupNum=e.orderCount,t.isLeader=e.isLeader,t.countDownSenconds=e.countDownSenconds,t.leaderHasBuy=e.leaderHasBuy,t.goodsInfo=Object(r["a"])({},e.goodsInfo),t.activity=Object(r["a"])({},e.activity),t.orderCount=e.orderCount,t.groupInfo=Object(r["a"])({},e.groupInfo),t.regularLIst=e.regularLIst,t.headList=e.headList,t.leaderHeadImg=e.leaderHeadImg,t.userHasBuy=e.userHasBuy}).catch(function(t){})},userBuy:function(){setTimeout(function(){window.location.href="https://hsj.hulian120.com/pay/groupBuy.html?groupId="+window.URLPARAMS.groupId+"&leaderId="+window.URLPARAMS.leaderId+"&actId="+window.actId+"&status="+window.URLPARAMS.status+"&pay=1"},300)},wxPay:function(t){var e=this,s={activityId:window.actId,groupId:this.groupInfo.id,pageUrl:"/pages/groupBuy.html",pageName:"拼团页",clickEvent:"点击发起微信支付",clickEventName:"发起微信支付"};Object(m["a"])(s),Object(f["a"])({activityId:window.actId,groupId:this.groupInfo.id,mobile:t}).then(function(t){e.showMobile=!1,Object(p["c"])(t,e.userBuy)}).catch(function(t){})},className:function(t){var e=this.groupNum,s=this.regularLIst;if(0!=s.length&&null!=e)switch(t){case 0:return e<=s[0].highCount?"active":"";case 1:return e<=s[0].highCount?"unActive":e>=s[1].lowCount&&e<=s[1].highCount?"active":"";case 2:return e<=s[0].highCount?"unActive":e>=s[1].lowCount&&e<=s[1].highCount?"unActive":e>=s[2].lowCount&&e<=s[2].highCount?"active":"";case 3:return e<=s[0].highCount?"unActive":e>=s[1].lowCount&&e<=s[1].highCount?"unActive":e>=s[2].lowCount&&e<=s[2].highCount?"unActive":"active"}},className1:function(t){var e=this.groupNum,s=this.regularLIst;if(0!=s.length&&null!=e)switch(t){case 0:if(e<=s[0].highCount)return"numActive";break;case 1:if(e>=s[1].lowCount&&e<=s[1].highCount)return"numActive";break;case 2:if(e>=s[2].lowCount&&e<=s[2].highCount)return"numActive";break;case 3:if(e>=s[3].lowCount)return"numActive"}},className2:function(t){var e=this.groupNum,s=this.regularLIst;if(0!=s.length&&null!=e)switch(t){case 0:return e<=s[0].highCount?"":"lineActive";case 1:if(e>=s[2].lowCount)return"lineActive";break;case 2:if(e>=s[3].lowCount)return"lineActive"}}},mounted:function(){this.id=Object(d["c"])("groupId")},beforeDestroy:function(){},components:{Button:i["a"],Steps:i["f"],Step:i["e"],Popup:i["d"],PayPopup:h["a"],Share:v["a"],Countdown:g["a"]}},y=I,w=(s("b785"),s("2877")),_=Object(w["a"])(y,n,o,!1,null,null,null);_.options.__file="Index.vue";var b=_.exports;s("b7f1"),s("3102");new a["a"]({render:function(t){return t(b)}}).$mount("#app")},"5d00":function(t,e,s){},b785:function(t,e,s){"use strict";var a=s("5d00"),n=s.n(a);n.a}});
//# sourceMappingURL=groupBuy.edb4076c.js.map