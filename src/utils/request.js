import Axios from 'axios'
import Config from '../config/app.js'
import { Toast } from 'vant';
import {getToken,removeToken} from '../utils/dataStorage.js'
import {setCurrentPage} from "../utils/dataStorage";
import G from 'lodash/get'

const service = Axios.create({
    baseURL: Config.apiUrl + '/' + Config.apiPrefix,
    headers: {
        'Accept': '*/*',
    },
    timeout: Config.timeout
});

let toastLoading;

service.defaults.retry = Config.requestRetry;
service.defaults.retryDelay = Config.requestRetryDelay;

service.interceptors.request.use(
    config => {
        if(!config.closeLoading){
            toastLoading = Toast.loading({
                mask: true,
                message: '加载中...'
            });
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
                toastLoading.clear();
            },800);
        }

        if (res.status != 200) {
            Toast('数据返回出错');
            //return Promise.reject('error')
        } else {
            if(res.data.resultCode != 200){
                if(res.data.resultCode == 102004){   // 您不是推荐人
                    window.location.href = './beforeLogin.html?actId=' + G(window,'URLPARAMS.actId',1);
                    return
                }
                if(res.data.resultCode == 102005){   // 该推荐人已绑定其它微信
                    Toast('该推荐人已绑定其它微信')
                    return
                }
                if(res.data.resultCode == 402){
                    removeToken();
                    setTimeout(_=>{
                        setCurrentPage(window.location.href);
                        window.location.href =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid="  +
                           sessionStorage.getItem('appId')  + "&redirect_uri=" + encodeURIComponent(Config.wxUrl)  +   "&response_type=code&scope=snsapi_userinfo&state=needJump#wechat_redirect";
                    },600)
                    return
                }

                Toast(res.data.message);
                return Promise.reject('error');
            }

            return res.data.data
        }
    },
    error => {
        setTimeout(_=>{
            toastLoading.clear();
        },800)

        Toast(error.message);
        return Promise.reject(error)
    }
)

export default service
