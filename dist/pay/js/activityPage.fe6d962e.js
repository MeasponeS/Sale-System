(function(t){function o(o){for(var e,s,r=o[0],i=o[1],u=o[2],l=0,f=[];l<r.length;l++)s=r[l],a[s]&&f.push(a[s][0]),a[s]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);d&&d(o);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,o=0;o<c.length;o++){for(var n=c[o],e=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(e=!1)}e&&(c.splice(o--,1),t=s(s.s=n[0]))}return t}var e={},a={activityPage:0},c=[];function s(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,o,n){s.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,o){if(1&o&&(t=s(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)s.d(n,e,function(o){return t[o]}.bind(null,e));return n},s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,"a",o),o},s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=o,r=r.slice();for(var u=0;u<r.length;u++)o(r[u]);var d=i;c.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,o,n){t.exports=n("ace5")},"114c":function(t,o,n){},"1c86":function(t,o,n){},"7c9e":function(t,o,n){"use strict";var e=n("1c86"),a=n.n(e);a.a},ace5:function(t,o,n){"use strict";n.r(o);n("cadf"),n("551c"),n("097d");var e=n("2b0e"),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[t.goodsInfo.sellPrice?e("div",[e("img",{staticClass:"topImg",attrs:{src:t.activity.imageUrl,alt:""}}),t._m(0),e("div",{staticClass:"top"},[e("div",{staticClass:"goods"},[e("div",{staticClass:"good"},[e("div",{staticClass:"goodsName"},[e("h3",[t._v(t._s(t.goodsInfo.name||"无"))]),e("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])]),e("div",{staticClass:"goodsPrice"},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("拼团价"+t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]),e("em",[t._v("省"+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))]),e("strong",[t._v("原价"),e("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])]),e("strong",{staticClass:"countNum"},[t._v("已有"+t._s(t.orderCount||0)+"人成团")])])])]),t._m(1)]),1==t.groupInfo.status&&t.countDownSenconds>=0?e("div",{staticClass:"start",on:{click:function(o){t.share=!0}}},[t._v("\n            邀请好友获得更多返利\n            "),e("h4",[e("Countdown",{staticStyle:{display:"block"},attrs:{second:t.countDownSenconds,status:t.groupInfo.status},on:{toggle:function(o){t.countDownSenconds--},end:t.timeOut}})],1)]):e("div",{staticClass:"start",on:{click:function(o){t.showOpen=!0}}},[t._v("\n            我要开团\n        ")]),e("div",{staticClass:"income",on:{click:t.goIncome}},[e("img",{attrs:{src:n("d7c6"),alt:""}})]),e("Popup",{attrs:{"close-on-click-overlay":!1,position:"bottom"},model:{value:t.showOpen,callback:function(o){t.showOpen=o},expression:"showOpen"}},[e("div",{staticClass:"wrap"},[e("h3",[t._v("开团方式")]),e("Button",{staticClass:"indexBtn",attrs:{disabled:t.groupInfo&&t.groupInfo.status&&1==t.groupInfo.status},on:{click:t.goCheckMobile}},[t._v("A：购买商品，并成为团长")]),e("Button",{staticClass:"indexBtn",on:{click:t.openGroup}},[t._v("\n                    B：通过邀请好友成为团长\n                ")]),e("Button",{staticClass:"bottomBtn",on:{click:function(o){t.showOpen=!1}}},[t._v("取消")])],1)]),e("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(o){t.showMobile=!1},wxPay:t.wxPay}}),e("Share",{attrs:{share:t.share},on:{know:t.know}})],1):e("div",{attrs:{id:"loading"}},[e("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553344736815&di=6a000ecfd157400769abe837c3013928&imgtype=0&src=http%3A%2F%2Fimg10.cache.hxsd.com%2Fnews%2F2015%2F11%2F12%2F691442_1447295058_5.gif",alt:""}})])])},c=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"title"},[e("img",{attrs:{src:n("e987"),alt:""}})])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"goodDetails"},[e("h3",[t._v("商品详情")]),e("img",{attrs:{src:n("775a"),alt:""}}),e("img",{attrs:{src:n("8e30"),alt:""}}),e("img",{attrs:{src:n("1f66"),alt:""}}),e("img",{attrs:{src:n("5fa5"),alt:""}}),e("img",{attrs:{src:n("c037"),alt:""}}),e("img",{attrs:{src:n("338d"),alt:""}}),e("img",{attrs:{src:n("0f01"),alt:""}}),e("img",{attrs:{src:n("eadf"),alt:""}}),e("img",{attrs:{src:n("6846"),alt:""}}),e("img",{attrs:{src:n("4abd"),alt:""}}),e("img",{attrs:{src:n("e509"),alt:""}}),e("img",{attrs:{src:n("3967"),alt:""}}),e("img",{attrs:{src:n("db11"),alt:""}}),e("img",{attrs:{src:n("0d89"),alt:""}}),e("img",{attrs:{src:n("ce54"),alt:""}}),e("img",{attrs:{src:n("c2ae"),alt:""}})])}],s=n("c93e"),r=n("9541"),i=n("ca41"),u=n("b970"),d=n("ff62"),l=n("17a4"),f=n("f8b7"),p=n("b775");function g(t){return Object(p["a"])({url:"/sale/api/group/crtGroupOpen",method:"post",data:t})}var h=n("c53f"),v=(n("18a0"),n("50a0")),m={name:"app",mixins:[r["a"]],data:function(){return{showOpen:!1,showMobile:!1,share:!1,mobile:"",orderCount:"",leaderHasBuy:"",goodsInfo:{},activity:{},groupInfo:{},countDownSenconds:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{shareFriend:function(){var t={shareTitle:"『团购优惠』和好朋友一起领",shareBody:"健康管理师＆护理评估师，现在团购立减¥880",shareUrl:"https://hsj.hulian120.com/pay/groupBuy.html?groupId="+this.groupInfo.id+"&leaderId="+this.groupInfo.leaderId+"&actId="+window.actId+"&status="+this.groupInfo.status,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(h["a"])(t),Object(h["b"])(t)},wxSignatureCallback:function(){var t=this;Object(i["b"])({activityId:window.actId}).then(function(o){t.orderCount=o.orderCount,t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(s["a"])({},o.goodsInfo),t.activity=Object(s["a"])({},o.activity),t.groupInfo=Object(s["a"])({},o.groupInfo),t.countDownSenconds=o.countDownSenconds,t.groupInfo.id&&null!=t.groupInfo.id&&t.shareFriend()}).catch(function(t){})},goIncome:function(){window.location.href="./incomeDetails.html"},goCheckMobile:function(){this.showOpen=!1,this.showMobile=!0},know:function(){var t=this;this.showOpen=!1,this.share=!1,Object(i["b"])({activityId:window.actId}).then(function(o){t.orderCount=o.orderCount,t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(s["a"])({},o.goodsInfo),t.activity=Object(s["a"])({},o.activity),t.groupInfo=Object(s["a"])({},o.groupInfo),t.countDownSenconds=o.countDownSenconds}).catch(function(t){})},leaderPay:function(){var t=this;Object(i["b"])({activityId:window.actId}).then(function(o){t.orderCount=o.orderCount,t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(s["a"])({},o.goodsInfo),t.activity=Object(s["a"])({},o.activity),t.groupInfo=Object(s["a"])({},o.groupInfo),t.countDownSenconds=o.countDownSenconds,t.shareFriend(),window.location.href="https://hsj.hulian120.com/pay/groupBuy.html?groupId="+t.groupInfo.id+"&leaderId="+t.groupInfo.leaderId+"&actId="+window.actId+"&status="+t.groupInfo.status}).catch(function(t){})},wxPay:function(t){var o=this;Object(f["b"])({activityId:window.actId,groupId:this.groupInfo.id,mobile:t,recommenderUserId:window.URLPARAMS.recommenderUserId}).then(function(t){o.showMobile=!1,Object(h["c"])(t,o.leaderPay)}).catch(function(t){})},openGroup:function(){var t=this;this.share=!0,g({activityId:window.actId,groupId:this.groupInfo.id,recommenderUserId:window.URLPARAMS.recommenderUserId}).then(function(o){Object(i["b"])({activityId:window.actId}).then(function(o){t.orderCount=o.orderCount,t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(s["a"])({},o.goodsInfo),t.activity=Object(s["a"])({},o.activity),t.groupInfo=Object(s["a"])({},o.groupInfo),t.countDownSenconds=o.countDownSenconds,t.shareFriend()}).catch(function(t){})}).catch(function(t){})},timeOut:function(){var t=this;Object(i["b"])({activityId:window.actId}).then(function(o){t.orderCount=o.orderCount,t.leaderHasBuy=o.leaderHasBuy,t.goodsInfo=Object(s["a"])({},o.goodsInfo),t.activity=Object(s["a"])({},o.activity),t.groupInfo=Object(s["a"])({},o.groupInfo),t.countDownSenconds=o.countDownSenconds,t.shareFriend()}).catch(function(t){})}},mounted:function(){},beforeDestroy:function(){},components:{Popup:u["d"],Button:u["a"],PayPopup:d["a"],Share:l["a"],Countdown:v["a"]}},b=m,I=(n("7c9e"),n("2877")),w=Object(I["a"])(b,a,c,!1,null,null,null);w.options.__file="Index.vue";var y=w.exports;n("b7f1"),n("114c");new e["a"]({render:function(t){return t(y)}}).$mount("#app")},d7c6:function(t,o,n){t.exports=n.p+"img/2.657cacd1.png"},e987:function(t,o,n){t.exports=n.p+"img/long.3717fbac.png"}});
//# sourceMappingURL=activityPage.fe6d962e.js.map