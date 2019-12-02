import VueHCarousel from 'vue-h-carousel';
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Carausel',
  data() {
    return {
      label: '<a href="/announcements" target="_blank">Lihat Semua Pengumuman</a>',
    }
  },
  components: {
    VueHCarousel
  },
  mounted() {
    this.loadBannerAnnouncements()
  },
  computed: {
    ...mapGetters({
      images: 'bannerAnnouncements'
    })
  },
  methods: {
    ...mapActions([
      'loadBannerAnnouncements'
    ]),
    slideClicked(i) {
      console.log('sideClicked', JSON.stringify(i))
    },
    pagingButtonClicked(i) {
      console.log('pagingButtonClicked', JSON.stringify(i))
    },
    arrowButtonClicked(i) {
      console.log('arrowButtonClicked', JSON.stringify(i))
    },
    postPaginationLabelClicked() {
      console.log('postPaginationLabelClicked')
    }
  }
}