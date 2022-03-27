
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'

export default [
    {
        path: '/home',
        component: Home,
        meta: { showFooter: true },
    },
    {
        name: 'search',
        path: '/search/:keyword?',
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
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: { showFooter: true },
    },
    {
        path: '/addcartsuccess',
        name:'addcartsuccess',
        component: AddCartSuccess,
        meta: { showFooter: true },
    },
    {
        path: '/shopcart',
        name:'shopcart',
        component: ShopCart,
        meta: { showFooter: true },
    },
    {
        path: '/trade',
        name:'trade',
        component: Trade,
        meta: { showFooter: true },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            if(from.path==='/shopcart') //去交易页面必须从shopcart来
                next()
            else next(false) //留在原地
        }
    },
    {
        path: '/pay',
        component: Pay,
        meta: { showFooter: true },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            if(from.path==='/trade') 
                next()
            else next(false) 
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: { showFooter: true },
    },
    {
        path: '/center',
        component: Center,
        meta: { showFooter: true },
        //引入二级路由
        children:[
            {
                path: 'myorder',
                component: MyOrder,
                meta: { showFooter: false },
            },
            {
                path: 'grouporder',
                component: GroupOrder,
                meta: { showFooter: false },
            },
            //重定向
            {
                path: '/center',
                redirect: '/center/myorder',
            }
        ]
    },
    //重定向，项目运行时导向首页
    {
        path: '*',
        redirect: '/home',
    },
]