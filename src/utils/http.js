import axios from 'axios';
import { message } from 'antd';

const service = axios.create({
  baseURL: 'https://newsapi.org',
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    //可以在这里做一些事情
    config.params.apiKey = 'b59af8d0c19e4917bf5d5712e56e9090';
    return config;
  },
  (error) => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    let status = response.status;

    if (status > 200) {
      message.error('请求失败');
      return Promise.reject('error');
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
