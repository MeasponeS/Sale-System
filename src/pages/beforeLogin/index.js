import Vue from 'vue'
import App from './Index.vue'
import '../common'
import {setToken,getKey} from "../../utils/dataStorage";
import Config from '../../config/app'
import {Toast} from 'vant'
import {wxSignature,getTokenMethods} from "../../api/wechat";
if(!window.URLPARAMS.hasOwnProperty('code')){


    let state = encodeURIComponent('https://hsj.hulian120.com/pay/beforeLogin.html?beforePage='+window.location.href)


    wxSignature({url:window.location.href.split('?')[0]}).then(r=>{
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="  +
            r.signature.appId  + "&redirect_uri=" + encodeURIComponent('https://wxauth.hulian120.com/open/getCodeFor')  +   "&response_type=code&scope=snsapi_userinfo&state="+state+"#wechat_redirect"
    }).catch(_=>{})
} else {
    if(window.URLPARAMS.hasOwnProperty('beforePage')){
        let server_url = encodeURIComponent('https://testsale.hulian120.com/sale/api/wx/login');
        getTokenMethods({
            actId:Config.activityId,
            code:window.URLPARAMS.code,
            mp:'hushijia',
            serverUrl:server_url,
            mobile:''
        }).then(r=>{
            setToken(r);
            Toast('登陆成功');
            window.setTimeout(()=>{
                window.location.href = URLPARAMS.beforePage
            },200);
        }).catch(_=>{})
    }

}




new Vue({
    render: h => h(App)
}).$mount('#app')
