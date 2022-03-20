//管理所有的api接口
import requests from './request'
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
