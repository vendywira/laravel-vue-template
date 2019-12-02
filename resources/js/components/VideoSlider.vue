<template>
  <slider :items="items">
    <template slot-scope="{content}">
      <youtube-video :video="content"></youtube-video>
    </template>
  </slider>
</template>

<script src="./js/video-slider.js">
</script>
