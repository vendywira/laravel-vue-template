<template>
  <div>
    <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="https://vuematerial.io/assets/examples/card-example.jpg" alt="Coffee House">
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">[{{event.level}}] {{event.title}}</h2>
          <div class="md-subhead">
            <md-icon>location_on</md-icon>
            <span>{{event.location}}</span>
          </div>
        </md-card-header>

        <md-card-content>{{event.prerequisite}}</md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Pelaksanaan: {{event.date}}</h3>
        <div class="card-reservation">
          <md-icon>access_time</md-icon>
            <h4>Start <br> {{event.startTime}}</h4>
            <h4>Finish <br> {{event.endTime}}</h4>
        </div>
      </md-card-content>

      <md-card-actions>
        <h4>Quota: {{event.quota}}</h4>
        <md-button class="md-primary">Book</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
	.elevation-demo {
		padding: 16px;
		display: flex;
		flex-wrap: wrap;
	}

	.md-content {
		width: 100px;
		height: 100px;
		margin: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.md-card {
		width: 320px;
		margin: 4px;
		display: inline-block;
		vertical-align: top;
	}

	.md-card-example {
		.md-subhead {
			.md-icon {
				$size: 16px;

				width: $size;
				min-width: $size;
				height: $size;
				font-size: $size !important;
			}

			span {
				vertical-align: middle;
			}
		}

		.card-reservation {
			margin-top: 8px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.md-icon {
				margin: 8px;
			}
		}

		.md-button-group {
			display: flex;

			.md-button {
				min-width: 60px;
				border-radius: 2px;
			}
		}
	}
</style>

<script src="./js/event.js"></script>
