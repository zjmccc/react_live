import axios from "axios";
import { message } from "antd";

//默认地址
axios.defaults.baseURL = 'http://127.0.0.1:7001/'

// 请求前拦截
axios.interceptors.request.use(
  config => {
    config.headers = {
      // 切记 token 不要直接发送，要在前面加上 Bearer 字符串和一个空格
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    return config;
  },
  err => {
    console.log("请求超时");
    return Promise.reject(err);
  }
);

// 返回后拦截
axios.interceptors.response.use(
  data => {
    if (data.data.code === 200) {
      message.success('操作成功');
      return data.data;
    } else {
      message.error('失败');
      return data.data;
    }
  },
  err => {
    if (err.response.status === 504 || err.response.status === 404) {
      console.log("服务器被吃了⊙﹏⊙∥");
    } else if (err.response.status === 401) {
      console.log("登录信息失效⊙﹏⊙∥");
    } else if (err.response.status === 500) {
      console.log("服务器开小差了⊙﹏⊙∥");
    }
    return Promise.reject(err);
  }
);


export default axios;