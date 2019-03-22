import Axios from 'axios'
import Config from '../config/app.js'
import { Toast } from 'vant';
import {getToken,removeToken} from '../utils/dataStorage.js'
import {setCurrentPage} from "../utils/dataStorage";

const service = Axios.create({
    baseURL: Config.apiUrl + '/' + Config.apiPrefix,
    headers: {
        'Accept': '*/*',

    },
    timeout: Config.timeout
});

// let toast = Toast.loading({
//     mask: true,
//     message: '加载中...'
// });

service.defaults.retry = Config.requestRetry;
service.defaults.retryDelay = Config.requestRetryDelay;

service.interceptors.request.use(
    config => {
        if(!config.closeLoading){
            //window.loadingInstance = toast;
        }

        let noParameters = config.url.indexOf('?')  == -1;
        //config.headers['X-Token'] = getToken() //

        config.url = noParameters ? config.url+'?access_token=' + getToken(): config.url+'&access_token='+ getToken();

        return config
    },
    error => {
        Promise.reject(error)
    }
);

service.interceptors.response.use(
    response => {
        const res = response;

        if(!response.config.closeLoading){
            setTimeout(_=>{
                //window.loadingInstance.clear();
            },400);
        }

        if (res.status != 200) {
            Toast('数据返回出错');
            //return Promise.reject('error')
        } else {
            if(res.data.resultCode != 200){

                Toast(res.data.message);
                if(res.data.resultCode == 402){
                    Toast('Token失效，重新登陆中');
                    removeToken();
                    setTimeout(_=>{
                        setCurrentPage(window.location.href);
                        window.location.href =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid="  +
                           sessionStorage.getItem('appId')  + "&redirect_uri=" + encodeURIComponent('https://wxauth.hulian120.com/open/getCodeFor')  +   "&response_type=code&scope=snsapi_userinfo&state=needJump#wechat_redirect";
                    },600)
                }
                return Promise.reject('error');
            }

            return res.data.data
        }
    },
    error => {
        setTimeout(_=>{
            //window.loadingInstance.clear();
        },300)

        Toast(error.message);
        return Promise.reject(error)
    }
)

export default service
