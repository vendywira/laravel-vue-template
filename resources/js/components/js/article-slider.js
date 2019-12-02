import ArticleOverview from '@component/ArticleOverview.vue'
import Slider from '@component/Slider.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Slider,
    ArticleOverview
  },
  mounted() {
    this.loadArticles()
  },
  computed: {
    ...mapGetters({
      items: 'articles'
    })
  },
  methods: {
    ...mapActions([
      'loadArticles'
    ])
  }
}