(function(e){function n(n){for(var t,a,c=n[0],u=n[1],d=n[2],f=0,l=[];f<c.length;f++)a=c[f],i[a]&&l.push(i[a][0]),i[a]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);s&&s(n);while(l.length)l.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var e,n=0;n<r.length;n++){for(var o=r[n],t=!0,c=1;c<o.length;c++){var u=o[c];0!==i[u]&&(t=!1)}t&&(r.splice(n--,1),e=a(a.s=o[0]))}return e}var t={},i={realNameAuth:0},r=[];function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,n,o){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(o,t,function(n){return e[n]}.bind(null,t));return o},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var s=u;r.push([7,"chunk-vendors","chunk-common"]),o()})({7:function(e,n,o){e.exports=o("b2b1")},8251:function(e,n,o){},b2b1:function(e,n,o){"use strict";o.r(n);o("cadf"),o("551c"),o("097d");var t=o("2b0e"),i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("Header",{on:{goBack:e.goBack}}),o("div",{staticClass:"idBox"},[o("ul",{staticClass:"idContent"},[o("li",[o("span",[e._v("手机号码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.mobile,expression:"userInfo.mobile"}],attrs:{type:"tel",placeholder:"请输入当前微信绑定的手机号",maxlength:"11"},domProps:{value:e.userInfo.mobile},on:{blur:e.changeMobile,input:function(n){n.target.composing||e.$set(e.userInfo,"mobile",n.target.value)}}})]),o("li",[o("div",[o("span",[e._v("图形验证码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.verifyCodeInfo.imgCode,expression:"verifyCodeInfo.imgCode"}],attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.verifyCodeInfo.imgCode},on:{input:function(n){n.target.composing||e.$set(e.verifyCodeInfo,"imgCode",n.target.value)}}})]),o("div",{staticClass:"codeImg",on:{click:e.changeImgCode}},[o("img",{attrs:{src:"data:image/jpg;base64,"+e.verifyCodeInfo.randomImg,alt:""}})])]),o("li",[o("div",[o("span",[e._v("验证码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.verifyCodeInfo.code,expression:"verifyCodeInfo.code"}],attrs:{type:"tel",placeholder:"请输入验证码"},domProps:{value:e.verifyCodeInfo.code},on:{input:function(n){n.target.composing||e.$set(e.verifyCodeInfo,"code",n.target.value)}}})]),o("div",{staticClass:"code"},[o("i"),o("em",{style:{color:e.countDown!=e.initCountDown?"#999":"#F46A21"},on:{click:e.getCode}},[e._v("\n                        "+e._s(e.countDown!=e.initCountDown?e.countDown+"s":"获取验证码")+"\n                    ")])])]),o("li",[o("span",[e._v("真实姓名")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.name,expression:"userInfo.name"}],attrs:{type:"text",placeholder:"请输入真实姓名"},domProps:{value:e.userInfo.name},on:{input:function(n){n.target.composing||e.$set(e.userInfo,"name",n.target.value)}}})]),o("li",[o("span",[e._v("身份证号码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.idNum,expression:"userInfo.idNum"}],staticClass:"idCard",attrs:{type:"text",placeholder:"填写错误会导致提现失败"},domProps:{value:e.userInfo.idNum},on:{input:function(n){n.target.composing||e.$set(e.userInfo,"idNum",n.target.value)}}})])]),o("Button",{staticClass:"idBtn",on:{click:e.checkData}},[e._v("提交认证")])],1)],1)},r=[],a=(o("7f7f"),o("9541")),c=o("9690"),u=o("b970"),d=o("ca41"),s=o("3439"),f=o("0418"),l={name:"app",mixins:[a["a"]],data:function(){return{countDown:s["a"].countDown,initCountDown:s["a"].countDown,verifyCodeInfo:{randomImg:"",key:"",imgCode:"",code:""},userInfo:{idNum:"",name:"",mobile:""}}},methods:{goBack:function(){window.history.back()},wxSignatureCallback:function(){var e=this;Object(d["c"])({}).then(function(n){e.verifyCodeInfo.randomImg=n.verifyCodeInfo.imageBase64,e.verifyCodeInfo.key=n.verifyCodeInfo.validateKey;var o={activityId:window.actId,groupId:"",pageUrl:"/pages/realNameAuth.html",pageName:"实名认证页",clickEvent:"",clickEventName:""};Object(c["a"])(o)}).catch(function(e){})},changeMobile:function(){11==this.userInfo.mobile.length||Object(u["e"])("手机号格式有误")},getCode:function(){var e=this;this.countDown<60||(11==this.userInfo.mobile.length?""!=this.verifyCodeInfo.imgCode?Object(d["f"])({validateKey:this.verifyCodeInfo.key,verifyCode:this.verifyCodeInfo.imgCode,mobile:this.userInfo.mobile}).then(function(n){var o=setInterval(function(){if(e.countDown<=0)return clearInterval(o),void(e.countDown=e.initCountDown);e.countDown--},1e3)}).catch(function(e){}):Object(u["e"])("请先输入图形验证码"):Object(u["e"])("手机号格式有误"))},changeImgCode:function(){var e=this;Object(d["c"])({}).then(function(n){e.verifyCodeInfo.randomImg=n.verifyCodeInfo.imageBase64,e.verifyCodeInfo.key=n.verifyCodeInfo.validateKey}).catch(function(e){})},checkData:function(){if(11==this.userInfo.mobile.length)if(""!=this.verifyCodeInfo.imgCode)if(""!=this.verifyCodeInfo.code){var e=/(^\d{18}$)|(^\d{17}(\d|X|x)$)/;if(e.test(this.userInfo.idNum))if(""!=this.userInfo.name){var n={id:this.userInfo.idNum,mobile:this.userInfo.mobile,name:this.userInfo.name,code:this.verifyCodeInfo.code};this.submit(n)}else Object(u["e"])("请输入真实姓名");else Object(u["e"])("请输入有效格式的身份证号")}else Object(u["e"])("请输入验证码");else Object(u["e"])("请输入图片验证码");else Object(u["e"])("请输入正确的手机号")},submit:function(e){Object(d["d"])({idCard:e.id,mobile:e.mobile,realName:e.name,smsCode:e.code}).then(function(e){var n={activityId:window.actId,groupId:"",pageUrl:"/pages/realNameAuth.html",pageName:"实名认证页",clickEvent:"实名认证",clickEventName:"点击实名认证"};Object(c["a"])(n),window.URLPARAMS.getMoney>0&&Object(d["h"])({activityId:window.actId,applyMoney:100*window.URLPARAMS.getMoney}).then(function(e){Object(u["e"])("申请提现成功"),1==window.URLPARAMS.type?window.location.href="./withdraw.html":window.location.href="./incomeDetails.html"}).catch(function(e){})}).catch(function(e){})}},mounted:function(){},beforeDestroy:function(){},components:{Header:f["a"]}},m=l,v=(o("fd96"),o("2877")),p=Object(v["a"])(m,i,r,!1,null,"5d92f38e",null);p.options.__file="Index.vue";var h=p.exports;o("b7f1");new t["a"]({render:function(e){return e(h)}}).$mount("#app")},fd96:function(e,n,o){"use strict";var t=o("8251"),i=o.n(t);i.a}});
//# sourceMappingURL=realNameAuth.7a2f297d.js.map