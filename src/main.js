import Vue from "vue"
import App from "./App.vue"
//三级联动组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

//引入路由器
import router from "@/router"

//引入vuex
import store from '@/store'

//测试api请求
// import { reqCategoryList } from "@/api"
// reqCategoryList()

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router,
    store: store, //组件身上多了$store属性
}).$mount("#app");