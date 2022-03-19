//配置路由
import Vue from "vue";
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter);

import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'

var originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err=>err)
}


// var originalReplace = VueRouter.prototype.replace
// VueRouter.prototype.push = function (location, resolve, reject) {
//     if (resolve && reject)
//         originalReplace.call(this, location, resolve, reject)
//     else
//         originalReplace.call(this, location, () => { }, () => { })
// }

//暴露
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { showFooter: true },
        },
        {
            name: 'search',
            path: '/search/:keyWord?',
            component: Search,
            meta: { showFooter: true },
        },
        {
            path: '/login',
            component: Login,
            meta: { showFooter: false },
        },
        {
            path: '/register',
            component: Register,
            meta: { showFooter: false },
        },
        //重定向，项目运行时导向首页
        {
            path: '*',
            redirect: '/home',
        },
    ]
})