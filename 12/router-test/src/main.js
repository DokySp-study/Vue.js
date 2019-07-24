import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueRouter) // if ommit this line, error occur because of VueRouter obj in App.vue is defined but never used.

new Vue({
    render: h => h(App),
}).$mount('#app')