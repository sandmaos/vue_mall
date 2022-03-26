
import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'

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
    },
    {
        path: '/pay',
        component: Pay,
        meta: { showFooter: true },
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: { showFooter: true },
    },
    //重定向，项目运行时导向首页
    {
        path: '*',
        redirect: '/home',
    },
]