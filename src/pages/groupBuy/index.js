import Vue from 'vue'
import App from './Index.vue'
import '../common'
import './groupProgress'
import './index.less'
// import {getToken,removeToken,setToken} from "../../utils/dataStorage";
// import {wxSignature,getTokenMethods} from "../../api/wechat";
// import Config from '../../config/app'
//
//
// let userToken = getToken();
// if(!userToken){
//     if(!window.URLPARAMS.hasOwnProperty('code')){
//         wxSignature({url:window.location.href.split('?')[0]}).then(r=>{
//             window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="  +
//                 r.signature.appId  + "&redirect_uri=" + encodeURIComponent('https://wxauth.hulian120.com/open/getCodeFor')  +   "&response_type=code&scope=snsapi_userinfo&state=student#wechat_redirect"
//         }).catch(_=>{})
//     } else {
//         let server_url = encodeURIComponent('https://testsale.hulian120.com/sale/api/wx/login');
//         getTokenMethods({
//             actId:Config.activityId,
//             code:this.wxCode,
//             mp:'hushijia',
//             serverUrl:server_url,
//             mobile:this.mobile
//         }).then(r=>{
//             setToken(r);
//             window.setTimeout(()=>{
//                 window.location.href = './groupBuy.html'
//             },200);
//         }).catch(_=>{})
//     }
//
// }



new Vue({
    render: h => h(App)
}).$mount('#app')
