(function(t){function n(n){for(var o,a,r=n[0],u=n[1],l=n[2],d=0,f=[];d<r.length;d++)a=r[d],i[a]&&f.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);s&&s(n);while(f.length)f.shift()();return c.push.apply(c,l||[]),e()}function e(){for(var t,n=0;n<c.length;n++){for(var e=c[n],o=!0,r=1;r<e.length;r++){var u=e[r];0!==i[u]&&(o=!1)}o&&(c.splice(n--,1),t=a(a.s=e[0]))}return t}var o={},i={login:0},c=[];function a(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=o,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)a.d(e,o,function(n){return t[n]}.bind(null,o));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=n,r=r.slice();for(var l=0;l<r.length;l++)n(r[l]);var s=u;c.push([6,"chunk-vendors","chunk-common"]),e()})({"36dc":function(t,n,e){"use strict";var o=e("4c6b"),i=e.n(o);i.a},"4c6b":function(t,n,e){},6:function(t,n,e){t.exports=e("80c1")},"80c1":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var o=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"main"},[e("h2",[t._v("您好，请登录！")]),e("div",{staticClass:"phone"},[e("vantIcon",{staticClass:"icon",attrs:{name:"phone"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"tel",attrs:{type:"number",placeholder:"手机号",disabled:""!=t.mobile},domProps:{value:t.mobile},on:{input:function(n){n.target.composing||(t.mobile=n.target.value)}}}),e("div",{staticClass:"get-msg",style:{color:t.countDown!=t.initCountDown?"#DCDCDC":"#F46A21"},on:{click:t.getCode}},[e("div",{staticClass:"line"}),t._v("\n                "+t._s(t.countDown!=t.initCountDown?t.countDown+"s":"重新发送")+"\n            ")])],1),e("div",{staticClass:"code"},[e("vantIcon",{staticClass:"icon",attrs:{name:"lock"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"number",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(n){n.target.composing||(t.code=n.target.value)}}})],1),e("vantButton",{staticClass:"indexBtn",on:{click:t.checkCode}},[t._v("登陆")])],1)])},c=[],a=e("b970"),r=e("3322"),u=e("3439"),l=e("0ad9"),s=e("4cfb"),d={name:"app",data:function(){return{countDown:u["a"].countDown,initCountDown:u["a"].countDown,mobile:"",code:"",wxCode:""}},methods:{checkCode:function(){var t=this;11==this.mobile.length?Object(r["a"])({mobile:this.mobile,smsCode:this.code,activityId:window.URLPARAMS.actId}).then(function(n){t.login()}).catch(function(t){Object(a["f"])(t)}):Object(a["f"])("请输入正确的手机号")},login:function(){var t=encodeURIComponent("https://testsale.hulian120.com/sale/api/wx/login");Object(s["a"])({actId:window.URLPARAMS.actId,code:this.wxCode,mp:"hushijia",serverUrl:t,mobile:this.mobile}).then(function(t){Object(l["f"])(t),Object(a["f"])("登陆成功"),window.setTimeout(function(){window.location.href="./mainPage.html?actId="+window.URLPARAMS.actId},200)}).catch(function(t){})},getCode:function(){var t=this;this.countDown<60||Object(r["d"])({mobile:this.mobile,activityId:u["a"].activityId}).then(function(n){var e=setInterval(function(){if(t.countDown<=0)return clearInterval(e),void(t.countDown=t.initCountDown);t.countDown--},1e3)}).catch(function(t){})}},mounted:function(){var t=this;if(this.mobile=Object(l["c"])("mobile"),this.wxCode=Object(l["c"])("code"),this.mobile.length>0&&""!=this.mobile){this.countDown=59;var n=setInterval(function(){if(t.countDown<=0)return clearInterval(n),void(t.countDown=t.initCountDown);t.countDown--},1e3)}},beforeDestroy:function(){},components:{vantButton:a["a"],vantIcon:a["b"]}},f=d,p=(e("36dc"),e("2877")),v=Object(p["a"])(f,i,c,!1,null,"1c8affc5",null);v.options.__file="Index.vue";var m=v.exports;e("b7f1");new o["a"]({render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=login.6a5a3a96.js.map