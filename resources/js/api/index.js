import config from '@config'
import http from '@util/http'

export default {
  getBannerAnnouncements: (callback, errorHandler) => {
    http.getApi(config.api.announcement.home, callback, errorHandler)
  },
  getArticles: (callback, errorHandler) => {
    http.getApi(config.api.article.home, callback, errorHandler)
  },
  getVideos: (callback, errorHandler) => {
    http.getApi(config.api.video.home, callback, errorHandler)
  },
  getEvents: (callback, errorHandler) => {
    http.getApi(config.api.event.home, callback, errorHandler)
  }
}