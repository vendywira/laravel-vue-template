module.exports = {
  api: {
    base: 'http://dummy.restapiexample.com',
    announcement: {
      home: '/api/v1/home/announcementBanners',
      detail: ''
    },
    event: {
      home: '/api/v1/home/events',
      detail: ''
    },
    video: {
      home: '/api/v1/home/videos',
      detail: ''
    },
    article: {
      home: '/api/v1/home/articles',
      detail: ''
    },
    time_out: 500
  },
  getApiPath: function(apiPath) {
    return this.api.base + apiPath
  },
  app: {
    pages: {
      error_404: '/errors/404'
    }
  },
  gapi: {
    apiKey: "AIzaSyD8dV78_HnHzTPeCCBiomUqHK3YFNGoOMs",
    clientId: "200227827665-0d83t0tdqrdtjqjumnjkl5dcckur7q04.apps.googleusercontent.com",
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scope: "https://www.googleapis.com/auth/spreadsheets"
  }
}