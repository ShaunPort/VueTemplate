import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
Vue.use(less)
// 字体图标库
import '/src/assets/font-awesome-4.7.0/css/font-awesome.min.css';



import './css/style.less'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
