(function(t){function n(n){for(var e,s,i=n[0],c=n[1],u=n[2],l=0,f=[];l<i.length;l++)s=i[l],a[s]&&f.push(a[s][0]),a[s]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);d&&d(n);while(f.length)f.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,n=0;n<r.length;n++){for(var o=r[n],e=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(e=!1)}e&&(r.splice(n--,1),t=s(s.s=o[0]))}return t}var e={},a={activityPage:0},r=[];function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,n,o){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)s.d(o,e,function(n){return t[n]}.bind(null,e));return o},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var d=c;r.push([0,"chunk-vendors","chunk-common"]),o()})({0:function(t,n,o){t.exports=o("ace5")},"114c":function(t,n,o){},"1c86":function(t,n,o){},"7c9e":function(t,n,o){"use strict";var e=o("1c86"),a=o.n(e);a.a},ace5:function(t,n,o){"use strict";o.r(n);o("cadf"),o("551c"),o("097d");var e=o("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("img",{staticClass:"topImg",attrs:{src:t.activity.imageUrl,alt:""}}),t._m(0),e("div",{staticClass:"top"},[e("div",{staticClass:"goods"},[e("div",{staticClass:"good"},[e("div",{staticClass:"goodsName"},[e("h3",[t._v(t._s(t.goodsInfo.name||"无"))]),e("span",[t._v(t._s(t.activity.minCount||0)+"人可成团")])]),e("div",{staticClass:"goodsPrice"},[e("span",[t._v("拼团价"+t._s(t._f("Money")(t.goodsInfo.sellPrice||0)))]),e("em",[t._v("省"+t._s(t._f("Money")(t.goodsInfo.saveMoney||0)))]),e("strong",[t._v("原价"),e("span",[t._v(t._s(t._f("Money")(t.goodsInfo.originPrice||0)))])]),e("strong",{staticClass:"countNum"},[t._v("已有"+t._s(t.orderCount||0)+"人成团")])])])]),t._m(1)]),t.groupInfo&&t.groupInfo.status&&1==t.groupInfo.status?e("div",{staticClass:"start",on:{click:function(n){t.share=!0}}},[t._v("\n        邀请好友获得更多返利\n        ")]):e("div",{staticClass:"start",on:{click:function(n){t.showOpen=!0}}},[t._v("\n       我要开团\n    ")]),e("div",{staticClass:"income",on:{click:t.goIncome}},[e("img",{attrs:{src:o("d7c6"),alt:""}})]),e("Popup",{attrs:{"close-on-click-overlay":!1,position:"bottom"},model:{value:t.showOpen,callback:function(n){t.showOpen=n},expression:"showOpen"}},[e("div",{staticClass:"wrap"},[e("h3",[t._v("开团方式")]),e("Button",{staticClass:"indexBtn",attrs:{disabled:t.groupInfo&&t.groupInfo.status&&1==t.groupInfo.status},on:{click:t.goCheckMobile}},[t._v("A：购买商品，并成为团长")]),e("Button",{staticClass:"indexBtn",on:{click:t.openGroup}},[t._v("\n                B：通过邀请好友成为团长\n            ")]),e("Button",{staticClass:"bottomBtn",on:{click:function(n){t.showOpen=!1}}},[t._v("取消")])],1)]),e("PayPopup",{attrs:{showMobile:t.showMobile},on:{closePay:function(n){t.showMobile=!1},wxPay:t.wxPay}}),e("Share",{attrs:{share:t.share},on:{know:t.know}})],1)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"title"},[e("img",{attrs:{src:o("e987"),alt:""}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"goodDetails"},[e("h3",[t._v("商品详情")]),e("img",{attrs:{src:o("775a"),alt:""}}),e("img",{attrs:{src:o("8e30"),alt:""}}),e("img",{attrs:{src:o("1f66"),alt:""}}),e("img",{attrs:{src:o("5fa5"),alt:""}}),e("img",{attrs:{src:o("c037"),alt:""}}),e("img",{attrs:{src:o("338d"),alt:""}}),e("img",{attrs:{src:o("0f01"),alt:""}}),e("img",{attrs:{src:o("eadf"),alt:""}}),e("img",{attrs:{src:o("6846"),alt:""}}),e("img",{attrs:{src:o("4abd"),alt:""}}),e("img",{attrs:{src:o("e509"),alt:""}}),e("img",{attrs:{src:o("3967"),alt:""}}),e("img",{attrs:{src:o("db11"),alt:""}}),e("img",{attrs:{src:o("0d89"),alt:""}}),e("img",{attrs:{src:o("ce54"),alt:""}}),e("img",{attrs:{src:o("c2ae"),alt:""}})])}],s=o("c93e"),i=o("9541"),c=o("ca41"),u=o("b970"),d=o("ff62"),l=o("17a4"),f=o("f8b7"),p=o("b775");function h(t){return Object(p["a"])({url:"/sale/api/group/crtGroupOpen",method:"post",data:t})}var v=o("c53f"),g=(o("18a0"),function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"countdown"},[o("span",[t._v(t._s(t.h))]),t._v(":"),o("span",[t._v(t._s(t.m))]),t._v(":"),o("span",[t._v(t._s(t.s))])])}),m=[],w=(o("c5f6"),{name:"Countdown",props:{second:Number},data:function(){return{h:"",m:"",s:""}},mounted:function(){this.initFn()},watch:{second:{deep:!0,handler:function(t,n){t>0?this.initFn():t<=0&&(this.h="00",this.m="00",this.s="00")}}},methods:{initFn:function(){var t=this;if(0!=this.second){var n=this.second,o=this;window.Countdown=setInterval(function(e){if(n<=0)return t.h="00",t.m="00",t.s="00",t.$emit("end"),void clearInterval(window.Countdown);n--;var a=Math.floor(n/3600),r=Math.floor(n%3600/60),s=Math.floor(n%60);o.h=a<10?"0"+a:a,o.m=r<10?"0"+r:r,o.s=s<10?"0"+s:s},1e3)}}}}),b=w,I=(o("cca6"),o("2877")),y=Object(I["a"])(b,g,m,!1,null,"bcdbe258",null);y.options.__file="Countdown.vue";var _=y.exports,O={name:"app",mixins:[i["a"]],data:function(){return{showOpen:!1,showMobile:!1,share:!1,mobile:"",orderCount:"",leaderHasBuy:"",goodsInfo:{},activity:{},groupInfo:{},countDownSenconds:""}},filters:{Money:function(t){return"￥"+parseInt(t)/100}},methods:{shareFriend:function(){var t={shareTitle:"『团购优惠』和好朋友一起领",shareBody:"健康管理师＆护理评估师，现在团购立减¥880",shareUrl:"https://hsj.hulian120.com/pay/groupBuy.html?groupId="+this.groupInfo.id+"&leaderId="+this.groupInfo.leaderId+"&actId="+window.actId+"&status="+this.groupInfo.status,shareImg:"http://static.hulian120.com/activity/sale/saleicon.png"};Object(v["a"])(t),Object(v["b"])(t)},wxSignatureCallback:function(){var t=this;Object(c["b"])({activityId:window.actId}).then(function(n){t.orderCount=n.orderCount,t.leaderHasBuy=n.leaderHasBuy,t.goodsInfo=Object(s["a"])({},n.goodsInfo),t.activity=Object(s["a"])({},n.activity),t.groupInfo=Object(s["a"])({},n.groupInfo),t.countDownSenconds=n.countDownSenconds,t.groupInfo.id&&null!=t.groupInfo.id&&t.shareFriend()}).catch(function(t){})},goIncome:function(){window.location.href="./incomeDetails.html"},goCheckMobile:function(){this.showOpen=!1,this.showMobile=!0},know:function(){var t=this;this.showOpen=!1,this.share=!1,Object(c["b"])({activityId:window.actId}).then(function(n){t.orderCount=n.orderCount,t.leaderHasBuy=n.leaderHasBuy,t.goodsInfo=Object(s["a"])({},n.goodsInfo),t.activity=Object(s["a"])({},n.activity),t.groupInfo=Object(s["a"])({},n.groupInfo),t.countDownSenconds=n.countDownSenconds}).catch(function(t){})},leaderPay:function(){alert("马上刷新啦"),window.location.reload()},wxPay:function(t){var n=this;Object(f["b"])({activityId:window.actId,groupId:this.groupInfo.id,mobile:t,recommenderUserId:window.URLPARAMS.recommenderUserId}).then(function(t){n.showMobile=!1,Object(v["c"])(t,n.leaderPay)}).catch(function(t){})},openGroup:function(){var t=this;this.share=!0,h({activityId:window.actId,groupId:this.groupInfo.id,recommenderUserId:window.URLPARAMS.recommenderUserId}).then(function(n){Object(c["b"])({activityId:window.actId}).then(function(n){t.orderCount=n.orderCount,t.leaderHasBuy=n.leaderHasBuy,t.goodsInfo=Object(s["a"])({},n.goodsInfo),t.activity=Object(s["a"])({},n.activity),t.groupInfo=Object(s["a"])({},n.groupInfo),t.countDownSenconds=n.countDownSenconds,t.shareFriend()}).catch(function(t){})}).catch(function(t){})},timeOut:function(){var t=this;Object(c["b"])({activityId:window.actId}).then(function(n){t.orderCount=n.orderCount,t.leaderHasBuy=n.leaderHasBuy,t.goodsInfo=Object(s["a"])({},n.goodsInfo),t.activity=Object(s["a"])({},n.activity),t.groupInfo=Object(s["a"])({},n.groupInfo),t.countDownSenconds=n.countDownSenconds,t.shareFriend()}).catch(function(t){})}},mounted:function(){},beforeDestroy:function(){},components:{Popup:u["d"],Button:u["a"],PayPopup:d["a"],Share:l["a"],Countdown:_}},C=O,j=(o("7c9e"),Object(I["a"])(C,a,r,!1,null,null,null));j.options.__file="Index.vue";var P=j.exports;o("b7f1"),o("114c");new e["a"]({render:function(t){return t(P)}}).$mount("#app")},cca6:function(t,n,o){"use strict";var e=o("fcde"),a=o.n(e);a.a},d7c6:function(t,n,o){t.exports=o.p+"img/2.657cacd1.png"},e987:function(t,n,o){t.exports=o.p+"img/long.3717fbac.png"},fcde:function(t,n,o){}});
//# sourceMappingURL=activityPage.7e9733e0.js.map