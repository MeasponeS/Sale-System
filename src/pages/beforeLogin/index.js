import Vue from 'vue'
import App from './Index.vue'
import '../common'



import {wxSignature} from "../../api/wechat";
    if(!window.URLPARAMS.hasOwnProperty('code')){
        wxSignature({url:window.location.href.split('?')[0]}).then(r=>{
            window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="  +
                r.signature.appId  + "&redirect_uri=" + window.location.href.split('?')[0] +   "&response_type=code&scope=snsapi_userinfo&state=jkhh#wechat_redirect"

        }).catch(_=>{})
    }




new Vue({
    render: h => h(App)
}).$mount('#app')
