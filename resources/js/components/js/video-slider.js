import YoutubeVideo from "@component/YoutubeVideo.vue"
import Slider from "@component/Slider.vue"
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Slider,
    YoutubeVideo
  },
  mounted() {
    this.loadVideos()
  },
  computed: {
    ...mapGetters({
      items: 'videos'
    })
  },
  methods: {
    ...mapActions([
      'loadVideos'
    ])
  }
}