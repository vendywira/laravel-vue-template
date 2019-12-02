<template>
  <slider :items="items">
    <template slot-scope="{content}">
      <article-overview :article="content"></article-overview>
    </template>
  </slider>
</template>

<script src="./js/article-slider.js">
</script>
