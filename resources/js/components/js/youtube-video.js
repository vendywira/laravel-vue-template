import Vue from "vue";
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

export default {
  name: 'YoutubeVideo',
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  methods: {
    getId() {
      return this.$youtube.getIdFromUrl(this.video.url)
    },
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('\\o/ we are watching!!!')
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}