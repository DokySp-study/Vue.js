import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueRouter) // 이걸 빼먹으면 App.vue에서 VueRouter가 정의되었지만 사용되지 않았다는 에러 발생.
// Vue.use() --> 전역 메소드를 등록 

new Vue({
    render: h => h(App),
}).$mount('#app')
