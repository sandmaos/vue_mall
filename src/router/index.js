//配置路由
import Vue from "vue";
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter);
import routes from "./routes"

let originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err=>err)
// }

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originalPush.call(this, location, resolve, reject)
    }
    else {
        originalPush.call(this, location, () => { }, () => { })
    }
}


// let originalReplace = VueRouter.prototype.replace
// var originalReplace = VueRouter.prototype.replace
// VueRouter.prototype.push = function (location, resolve, reject) {
//     if (resolve && reject)
//         originalReplace.call(this, location, resolve, reject)
//     else
//         originalReplace.call(this, location, () => { }, () => { })
// }

//暴露
export default new VueRouter({
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 } //滚动条在最上方
    }
})