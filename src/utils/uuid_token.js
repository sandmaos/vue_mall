import { v4 as uuidv4 } from 'uuid'
//生成随机字符串作为游客身份
export const getUUID = () => {
    //先从本地存储获取
    var uuid_token = localStorage.getItem('UUIDTOKEN')
    if (!uuid_token){
        //只生成一次，保证每次的uuid都一样
        uuid_token=uuidv4()
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    return uuid_token
}