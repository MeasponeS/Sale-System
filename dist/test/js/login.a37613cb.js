(function(t){function n(n){for(var o,r,a=n[0],u=n[1],l=n[2],d=0,f=[];d<a.length;d++)r=a[d],i[r]&&f.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);s&&s(n);while(f.length)f.shift()();return c.push.apply(c,l||[]),e()}function e(){for(var t,n=0;n<c.length;n++){for(var e=c[n],o=!0,a=1;a<e.length;a++){var u=e[a];0!==i[u]&&(o=!1)}o&&(c.splice(n--,1),t=r(r.s=e[0]))}return t}var o={},i={login:0},c=[];function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var s=u;c.push([5,"chunk-vendors","chunk-common"]),e()})({5:function(t,n,e){t.exports=e("80c1")},"70d3":function(t,n,e){"use strict";var o=e("c9ee"),i=e.n(o);i.a},"80c1":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var o=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"main"},[e("h2",[t._v("您好，请登录！")]),e("div",{staticClass:"phone"},[e("vantIcon",{staticClass:"icon",attrs:{name:"phone"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"tel",attrs:{type:"tel",maxlength:"11",placeholder:"手机号",disabled:""!=t.mobile},domProps:{value:t.mobile},on:{input:function(n){n.target.composing||(t.mobile=n.target.value)}}}),e("div",{staticClass:"get-msg",style:{color:t.countDown!=t.initCountDown?"#DCDCDC":"#F46A21"},on:{click:t.getCode}},[e("div",{staticClass:"line"}),t._v("\n                "+t._s(t.countDown!=t.initCountDown?t.countDown+"s":"重新发送")+"\n            ")])],1),e("div",{staticClass:"code"},[e("vantIcon",{staticClass:"icon",attrs:{name:"lock"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticStyle:{"line-height":"30px"},attrs:{type:"tel",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(n){n.target.composing||(t.code=n.target.value)}}})],1),e("vantButton",{staticClass:"indexBtn",on:{click:t.checkCode}},[t._v("登录")])],1)])},c=[],r=e("b970"),a=e("3322"),u=e("3439"),l=e("0ad9"),s=e("4cfb"),d={name:"app",data:function(){return{countDown:u["a"].countDown,initCountDown:u["a"].countDown,mobile:"",code:"",wxCode:""}},methods:{checkCode:function(){var t=this;11==this.mobile.length?Object(a["a"])({mobile:this.mobile,smsCode:this.code,activityId:window.actId}).then(function(n){t.login()}).catch(function(t){console.log(t),Object(r["e"])("手机号与验证码不匹配")}):Object(r["e"])("请输入正确的手机号")},login:function(){var t=encodeURIComponent(u["a"].serverUrl);Object(s["a"])({actId:window.actId,code:this.wxCode,mp:"hushijia",serverUrl:t,mobile:this.mobile}).then(function(t){Object(l["f"])(t),Object(r["e"])("登陆成功"),window.setTimeout(function(){window.location.href="./mainPage.html?actId="+window.actId},200)}).catch(function(t){})},getCode:function(){var t=this;this.countDown<60||Object(a["d"])({mobile:this.mobile,activityId:window.actId}).then(function(n){var e=setInterval(function(){if(t.countDown<=0)return clearInterval(e),void(t.countDown=t.initCountDown);t.countDown--},1e3)}).catch(function(t){})}},mounted:function(){var t=this;if(this.mobile=Object(l["c"])("mobile"),this.wxCode=Object(l["c"])("code"),this.mobile.length>0&&""!=this.mobile){this.countDown=59;var n=setInterval(function(){if(t.countDown<=0)return clearInterval(n),void(t.countDown=t.initCountDown);t.countDown--},1e3)}},beforeDestroy:function(){},components:{vantButton:r["a"],vantIcon:r["c"]}},f=d,v=(e("70d3"),e("2877")),p=Object(v["a"])(f,i,c,!1,null,"2840bcb8",null);p.options.__file="Index.vue";var h=p.exports;e("b7f1");new o["a"]({render:function(t){return t(h)}}).$mount("#app")},c9ee:function(t,n,e){}});
//# sourceMappingURL=login.a37613cb.js.map