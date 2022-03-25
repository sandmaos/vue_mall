//配置路由
import Vue from "vue";
import VueRouter from 'vue-router'
import store from '@/store'


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

// 全局前置守卫
var router = new VueRouter({
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 } //滚动条在最上方
    }
})
router.beforeEach(async (to, from, next) => {
    //next():放行函数,next('/path')放行到指定路由, next(false)中断导航
    const token = store.state.user.token
    const username = store.state.user.userInfo.name
    if (token) { //已经登录,不能继续去login
        if (to.path === '/login')
            next('/home')
        else {
            if (username)
                next()
            else {
                //派发action让仓库存储用户信息
                //获取用户信息，去user仓库拿userInfo, 以为每次刷新vuex仓库都没数据
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) { //token过期了
                    alert('登录过期!')
                    await store.dispatch('getLogout')
                    next('/login')
                }
            }
        }
    }else next()

})
//暴露
export default router