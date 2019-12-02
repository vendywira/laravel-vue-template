import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import config from '@config'


Vue.use && Vue.use(VueAxios, axios)

function getApi(path, callback, errorHandler, headerParams) {
  let header = { 'Cache-Control': 'no-cache' }
  Vue.axios.get(config.getApiPath(path), {
    headers: typeof headerParams !== 'undefined' ? Object.assign(header, headerParams) : header
  }).then((res) => {
    callback(res)
  }, (error) => {
    errorHandler(error)
  })
}

function postApi(path, callback, data, errorHandler) {
  Vue.axios.post(config.getApiPath(path), data).then((res) => {
    callback(res)
  }, (error) => {
    if (typeof errorHandler === 'function') {
      errorHandler(error)
    }
  })
}

function putApi(path, callback, data) {
  Vue.axios.put(config.getApiPath(path), data).then((res) => {
    callback(res)
  }, (error) => {
    console.log(error);
  })
}

function deleteApi(path, callback, errorHandler) {
  Vue.axios.delete(config.getApiPath(path)).then((res) => {
    callback(res)
  }, (error) => {
    if (typeof errorHandler === 'function') {
      errorHandler(error)
    }
  })
}

export default {
  getApi,
  postApi,
  putApi,
  deleteApi
}