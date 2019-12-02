import api from '@api'

export const state = {
  bannerAnnouncements: [],
  articles: [],
  videos: [],
  events: [],
}

export const getters = {
  bannerAnnouncements: (state) => {
    return state.bannerAnnouncements
  },
  articles: (state) => {
    return state.articles
  },
  videos: (state) => {
    return state.videos
  },
  events: (state) => {
    return state.events
  }
}

export const mutations = {
  setBannerAnnouncements(state, value) {
    state.bannerAnnouncements = value
  },
  setArticles(state, value) {
    state.articles = value
  },
  setVideos(state, value) {
    state.videos = value
  },
  setEvents(state, value) {
    state.events = value
  }
}

export const actions = {
  loadBannerAnnouncements: ({ commit }) => {
    api.getBannerAnnouncements(resp => {
      commit('setBannerAnnouncements', resp.data.contents)
    }, error => console.log(error))
  },
  loadArticles: ({ commit }) => {
    api.getArticles(resp => {
      commit('setArticles', resp.data.contents)
    }, error => console.log(error))
  },
  loadVideos: ({ commit }) => {
    api.getVideos(resp => {
      commit('setVideos', resp.data.contents)
    }, error => console.log(error))
  },
  loadEvents: ({ commit }) => {
    api.getEvents(resp => {
      commit('setEvents', resp.data.contents)
    }, error => console.log(error))
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}