import Vue from 'vue'
import Url from 'url'
import ApiRoutes from '@mock/api-routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MockAdapter from 'axios-mock-adapter'

Vue.use && Vue.use(VueAxios, axios)

if (process.env.NODE_ENV !== 'production') {
  let mock = new MockAdapter(Vue.axios)

  // Match ALL requests
  mock.onAny().reply(request => {
    let urlParse = {}
    if (request.url) {
      urlParse = Url.parse(request.url, true)
    }
    let urlPath = urlParse.pathname
    let urlQuery = urlParse.query

    let route = ApiRoutes.find((item) => {
      let params = []
      let requestMethod = request.method.toUpperCase()
      let itemMethod = item.method.toUpperCase()

      if (urlQuery) {
        for (const i in urlQuery) {
          params.push(i + '=' + urlQuery[i])
        }
      }
      const path = urlPath + (params.length > 0 ? '?' + params.join('&') : '')
      let result = (requestMethod === itemMethod && path === item.url)

      if (!result && requestMethod === itemMethod && requestMethod === 'DELETE') {
        // try to remove the last segment
        let to = urlPath.lastIndexOf('/')
        to = to === -1 ? urlPath.length : to
        let url = urlPath.substring(0, to)

        result = item.url === url
      }

      if (item.param_values && request.body) {
        // compare the value if exist
        let body = JSON.parse(request.body)
        result = true
        for (let i in item.param_values) {
          if (item.param_values[i] !== body[i]) {
            result = false
            break
          }
        }
      }
      return result
    })
    if (route) {
      return [200, route.response];
    }
    // Unexpected request, error out
    return [500, {}];
  });
}