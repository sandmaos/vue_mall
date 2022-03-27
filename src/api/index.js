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

//删除购物车数据
export const reqDeleteCartById=(skuId)=>requests({
    url: `/cart/deleteCart/${skuId}`, method: 'delete'
})

//修改购物车选中状态
export const reqUpdateCheckedById=(skuId,isChecked)=>requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get'
})

//获取手机验证码
export const reqGetCode=(phone)=>requests({
    url: `/user/passport/sendCode/${phone}`, method: 'get'
})

//注册提交
export const reqRegister=(data)=>requests({
    url: `/user/passport/register`,data:data, method: 'post'
})

//登录
export const reqLogin=(data)=>requests({
    url: `/user/passport/login`,data:data, method: 'post'
})

//登录成功后获取userInfo
export const reqUserInfo=()=>requests({
    url: `/user/passport/auth/getUserInfo`, method: 'get'
})

//退出
export const reqLogout=()=>requests({
    url: `/user/passport/logout`, method: 'get'
})

//获取用户地址信息
export const reqUserAddress=()=>requests({
    url: `/user/userAddress/auth/findUserAddressList`, method: 'get'
})

//获取购物车结算订单
export const reqOrderInfo=()=>requests({
    url: `/order/auth/trade`, method: 'get'
})

//提交订单
export const reqSubmitOrder=(tradeNo,data)=>requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,data:data, method: 'post'
})

//获取支付信息
export const reqPayInfo=(orderId)=>requests({
    url: `/payment/weixin/createNative/${orderId}`, method: 'get'
})

//获取支付状态
export const reqPayStatus=(orderId)=>requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get'
})

//获取个人中心数据
export const reqMyOrderList=(page,limit)=>requests({
    url: `/order/auth/${page}/${limit}`, method: 'get'
})

