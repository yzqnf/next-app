import axios from "axios";
import Cookies from "js-cookie";

const service = axios.create({
  baseURL: process.env.baseUrl,
  timeout: 50000,
});

service.interceptors.request.use(
  (config) => {
    config.headers["Accept"] = "application/json";
    config.headers["content-type"] = "application/json";
    config.headers["X-TOKEN"] = Cookies.get("token") || "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    const { code, message: msg } = res || {};
    if (code !== 0 && code !== 1290) {
      message.error(msg);
    }
    return res;
  },
  (error) => {
    const { response } = error;
    switch (response.status) {
      case 401: {
        message.warn('无权限访问');
        break
      }
      case 500: case 501: case 502: case 503: case 504: {
        message.error('服务器发生错误，请重试');
        break
      }
    }
    return Promise.reject(error);
  }
);

export default service;
