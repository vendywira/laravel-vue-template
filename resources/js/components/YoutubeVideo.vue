<template>
  <div>
    <md-card>
      <md-card-media-actions>
        <md-card-media>
          <youtube
            :fitParent=true
            :resize=true
            :video-id="getId()"
            ref="youtube"
            @playing="playing"
          ></youtube>
        </md-card-media>

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
      </md-card-media-actions>
      <md-card-header>
        <div class="md-subhead">{{video.title}}</div>
      </md-card-header>
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

<script src="./js/youtube-video.js">
</script>
