//管理所有的api接口
import requests from './request'

//三级联动接口 GET: /api/product/getBaseCategoryList
//发请求:axios发请求返回Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
