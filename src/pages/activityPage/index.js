import Vue from 'vue'
import App from './Index.vue'
import '../common'
import './index.less'
import "jweixin"


new Vue({
    render: h => h(App)
}).$mount('#app')
