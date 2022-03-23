//管理所有的api接口
import requests from './ajax'
import mockRequests from './mockAjax'

//三级联动接口 GET: /api/product/getBaseCategoryList
//发请求:axios发请求返回Promise对象
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

//获取首页轮播图的接口
export const reqGetBannerList = () => mockRequests.get('/banner')

//获取floor组件数据
export const reqFloorList = () => mockRequests.get('/floor')

//获取搜索组件数据,带参数,post
export const reqGetSearchInfo = (params) => requests({
    url: '/list', method: 'post', data: params
})

//获取产品详情的接口 GET
export const reqGetDetail = (id) => requests({
    url: `/item/${id}`, method: 'get'
})

//添加购物车或更新个数
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post'
})

//获取购物车数据
export const reqCartList=()=>requests({
    url: `/cart/cartList`, method: 'get'
})