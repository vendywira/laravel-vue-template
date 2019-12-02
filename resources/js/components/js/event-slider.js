import Event from "@component/Event.vue";
import Slider from "@component/Slider.vue";
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Slider,
    Event
  },
  mounted() {
    this.loadEvents()
  },
  computed: {
    ...mapGetters({
      items: 'events'
    })
  },
  methods: {
    ...mapActions([
      'loadEvents'
    ])
  }
}