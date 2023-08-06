//对于axios进行二次封装，为了用它的请求和响应拦截器
import axios from "axios";



//1.利用axios对象的方法create,创建一个axios实例
//2.mockRequests就是axios，只不过稍微配置一下
const mockRequests = axios.create({
  //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
  baseURL: "/mock",
  //超时的设置
  timeout: 5000
});
//请求拦截器: 在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
mockRequests.interceptors.request.use(config => {
  //config:配置对象，对象里面有一个属性很重要，headers请求头
  return config;
})

//响应拦截器：请求数据返回会执行
mockRequests.interceptors.response.use((res) => {
  return res.data;
}), (err: { message: any; }) => {
  //响应失败的回调函数
  //温馨提示:某一天发请求,请求失败,请求失败的信息打印出来
  alert(err.message);
  //响应失败的回调函数
  return Promise.reject(new Error('fail'));
}



//对外暴露
export default mockRequests;