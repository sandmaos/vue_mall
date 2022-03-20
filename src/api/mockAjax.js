//axios的封装
import axios from 'axios'

//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css";
//start:进度条开始 done:结束

const requests = axios.create({
    //基础路径
    baseURL:"/mock",
    timeout:10000,
})

//请求拦截器：发请求之前的操作
requests.interceptors.request.use((config)=>{
    //config配置对象，包含请求头
    nprogress.start()
    return config
})


//响应拦截器：服务器响应数据回来后的操作
requests.interceptors.response.use((res)=>{
    //config配置对象，包含请求头
    //进度条结束
    nprogress.done()
    return res.data
},(error)=>{
    return Promise.reject(new Error('fail'))
})

//暴露
export default requests