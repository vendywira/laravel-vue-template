import Vue from 'vue'
import router from './router'
import store from '@store'
import App from '@/App.vue'

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial);

export default {
  start(createInstance = true) {
    this.loadMock();

    if (process.env.NODE_ENV !== 'production') {
      Vue.config.devtools = true;
      Vue.config.productionTip = false;
    }

    if (createInstance) {
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount("#app");
    }
    this.started = true
  },
  loadMock() {
    if (process.env.MIX_APP_MOCK_ENV &&
      process.env.MIX_APP_MOCK_ENV === 'true') {
      require('@mock')
    }
    this.mockLoaded = true
  },
  mockLoaded: false,
  started: false
}
