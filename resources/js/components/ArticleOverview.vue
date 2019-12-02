<template>
  <div>
    <md-card>
      <md-card-media>
        <md-ripple>
          <img :src="article.src" :alt="article.alt">
        </md-ripple>
      </md-card-media>

      <md-card-header>
        <div class="md-subhead">{{article.title}}</div>
      </md-card-header>

      <md-card-actions>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>bookmark</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
	.md-card {
		width: 360px;
		margin: 4px;
		display: inline-block;
		vertical-align: top;
	}
</style>

<script src="./js/article-overview.js">
</script>
