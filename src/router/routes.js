
import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Detail from '../pages/Detail'

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
    //重定向，项目运行时导向首页
    {
        path: '*',
        redirect: '/home',
    },
]