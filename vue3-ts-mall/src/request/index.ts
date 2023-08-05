import axios from "axios";
//引入进度条，nprogress里面封装的方法有start: 进度条开始 done: 进度条结束
// 引入进度条
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

//全局进度条的配置
// NProgress.configure({
//   easing: 'ease',  // 动画方式    
//   speed: 1000,  // 递增进度条的速度    
//   showSpinner: false, // 是否显示加载ico    
//   trickleSpeed: 200, // 自动递增间隔    
//   minimum: 0.3 // 初始化时的最小百分比
// })


// 创建axios实例
const service = axios.create({
  baseURL: "www.fastmocksite/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
});

// 请求拦截
service.interceptors.request.use(

  (config) => {
    config.headers = config.headers || {};
    // 如果有token的话
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getitem('token') || ""
    }
    //进度条开始
    // NProgress.start();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


// 响应拦截
service.interceptors.response.use(
  (response) => {
    const code: number = response.data.code;
    if (code === 200) {
      return response.data;
    } else {
      return Promise.reject(response.data);
    }

    // 进度条结束
    // NProgress.done();
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 暴露封装的axios 
export default service;