// @ is an alias to /src
import Toolbar from "@component/Toolbar.vue";
import Carousel from "@component/Carousel.vue"
import EventSlider from "@component/EventSlider.vue";
import VideoSlider from "@component/VideoSlider.vue";
import ArticleSlider from "@component/ArticleSlider.vue";

export default {
  name: "home",
  data() {
    return {
      menuVisible: false
    }
  },
  components: {
    Toolbar,
    Carousel,
    EventSlider,
    VideoSlider,
    ArticleSlider,
  }
};
