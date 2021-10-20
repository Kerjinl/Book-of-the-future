import axios from 'axios';
import { domain } from '../../http.config';

const message = {
  error: (v) => {
    console.error(v)
  }
}

const setInterceptors = (instance) => {

  const token = localStorage.getItem('token') || "null";

  // 设置interceptors
  instance.interceptors.request.use((config) => {
    if (token) {
      config.headers[`token`] = token;
    } else {
      delete config.headers[`toekn`]
    }
    return config;
  })

  instance.interceptors.response.use((resp) => {
    if (resp.status === 200) {
      if (resp.data.resultCode !== 200) {
        return Promise.reject(resp.data)
      }
      return resp.data
    }
    // return Promise.reject(resp.data)
  }, err => {
    /**
     * 401
     * 404
     * 500
    */
    const errInfo = JSON.stringify(err);
    if (errInfo.indexOf('401') !== -1) {
      if (!document.querySelector('.ant-message-notice-content')) message.error('登录失效，请重新登录');
      localStorage.clear();
      sessionStorage.clear();
      setTimeout(() => {
        window.location.href = '#/login';
      }, 1500)
    } else if (errInfo.indexOf('404') !== -1) {
      message.error('请求错误，请联系管理员');
    } else if (errInfo.indexOf('500') !== -1) {
      message.error('服务器内部错误，请稍后再试');
    }
    return Promise.reject(err);
  })

}

const baseHttp = (v) => {
  const {
    url,
    method = 'GET',
    params,
    headers = undefined
  } = v

  const instance = axios.create({
    baseURL: domain || 'http://localhost',
    timeout: 3000,
    headers
  });
  setInterceptors(instance)
  if (method.toLocaleUpperCase() === 'GET') {
    return instance.get(url)
  } else {
    return instance.post(url, params)
  }
  // return instance
}

const http = {
  get: (v) => {
    return baseHttp(v)
  },
  post: (v) => {
    return baseHttp({ ...v, ...{ method: 'POST' } })
  }
}

export default http;
