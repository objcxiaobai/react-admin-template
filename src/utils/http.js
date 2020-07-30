import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    //可以在这里做一些事情
    return config;
  },
  (error) => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
