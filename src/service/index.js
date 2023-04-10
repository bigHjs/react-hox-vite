//引入封装好的 service
import service from "./httpMethod";
 
//声明一个基础接口变量
let baseURL;
 
//配置开发环境
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://www.****.com:8000/';
}
 
// 配置生产环境
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://www.*****.com:8001/';
}
 
//设置请求头（如果请求头统一的话可以在axios文件设置，则无须从这里传过去）
const header = {
  Accept: 'application/json;charset=UTF-8',
}

const request = (url, params = {}, headers = {}) => {
  service(baseURL+ url, params, {...headers, header})
}
export { service }
export default request