//对axios进行二次封装
import axios from "axios";

//引入进度条
import nProgress from "nprogress";
//引入进度条央视
import "nprogress/nprogress.css";
//利用axios对象的create方法，去创建一个axios实例
//request 就是axios对象，只不过要稍微配置以下
//引入store
import store from "@/store";
const requests = axios.create({
  //基础路径，发请求的时候，路径当中会出现/api
  baseURL: "/api",
  //timeOut，代表请求超时的时间
  timeout: 5000,
});

//请求拦截器 ，再发请求之前，请求拦截器都可以检测得到，可以再发请求之前做一些事情
requests.interceptors.request.use((config) => {
  if (store.state.detailAbount.uuid_token) {
    //在请求头添加userTempId
    config.headers.userTempId = store.state.detailAbount.uuid_token;
  }
  //需要携带的token
  if (store.state.userAbount.token) {
    //在请求头添加userTempId
    config.headers.token = store.state.userAbount.token;
  }
  //进度条开始
  nProgress.start();
  //config配置对象,里面有一个请求头很重要
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    //成功回调
    //进度条结束
    nProgress.done();
    return res.data;
  },
  (err) => {
    //失败回调 --终止promise链
    return Promise.reject(new Error("faill"));
  }
);
export default requests;
