/**
 *  导入Axios
 *  Axios 是一个基于 promise 的 HTTP 库
 *  
 */
import axios from 'axios'

let timeout = 1000 * 10;
let baseURL = "";

/**
 * axios 对象创建配置
 */
let config = {
    baseURL: baseURL,
    timeout: timeout,
}

/**
 * 创建axios实例
 */
const instance = axios.create(config);

/**
 * 请求配置
 */
let requestConfig = {
    // `url` 是用于请求的服务器 URL
    url: '',

    // `method` 是创建请求时使用的方法
    method: 'get', // default

    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    baseURL: baseURL,

    // `params` 是即将与请求一起发送的 URL 参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
    // get 请求用 params 传递参数
    params: {
    
    },

    // `data` 是作为请求主体被发送的数据
    // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    // 在没有设置 `transformRequest` 时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 浏览器专属：FormData, File, Blob
    // - Node 专属： Stream
    // put , post , patch 请求用 data 传递参数
    data: {
        
    },

    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeout: timeout,

    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // default

    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default

    // 响应编码
    responseEncoding: 'utf8', // default

    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function (status) {
    return status >= 200 && status < 300; // default
    },
}

/**
 * 请求url 返回数据
 */
function selfRequest(transportConfig){
    //Object.assign()拷贝的是属性值  不建议使用

    //应用深度复制 先将obj转换为JSON字符串，然后再转回对象
    let newConfig = JSON.parse(JSON.stringify(requestConfig));//先将obj转换为JSON字符串，然后再转回对象
    //覆盖需要传递的参数
    newConfig = Object.assign(newConfig , transportConfig)

    //请求
    instance.request(newConfig).then(
        res => {
            return res.data;
        },
        err => {}
    )
}

export default instance;
export {selfRequest}