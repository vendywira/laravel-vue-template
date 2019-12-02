<template>
  <slider :items="items">
    <template slot-scope="{content}">
      <event :event="content"></event>
    </template>
  </slider>
</template>

<script src="./js/event-slider.js">
</script>
