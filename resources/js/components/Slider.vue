<template>
  <div class="card-carousel-wrapper">
    <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div
          class="card-carousel-cards"
          :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
        >
          <div v-for="item in items" :key="item.sequence">
            <slot :content="item"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
  </div>
</template>

<style lang="scss" scoped>
	$vue-navy: #2c3e50;
	$vue-navy-light: #3a5169;
	$vue-teal: #42b883;
	$vue-teal-light: #42b983;
	$gray: #666a73;
	$light-gray: #f8f8f8;

	.card-carousel-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px 0 40px;
		color: $gray;
	}

	.card-carousel {
		display: flex;
		justify-content: center;
		width: 95%;

		&--overflow-container {
			overflow: hidden;
		}

		&--nav__left,
		&--nav__right {
			display: inline-block;
			width: 15px;
			height: 15px;
			padding: 10px;
			box-sizing: border-box;
			border-top: 2px solid $vue-teal;
			border-right: 2px solid $vue-teal;
			cursor: pointer;
			margin: 0 10px;
			transition: transform 150ms linear;
			&[disabled] {
				opacity: 0.2;
				border-color: black;
			}
		}

		&--nav__left {
			transform: rotate(-135deg);
			&:active {
				transform: rotate(-135deg) scale(0.9);
			}
		}

		&--nav__right {
			transform: rotate(45deg);
			&:active {
				transform: rotate(45deg) scale(0.9);
			}
		}
	}

	.card-carousel-cards {
		display: flex;
		transition: transform 150ms ease-out;
		transform: translatex(0px);

		&:first-child {
			margin-left: 0;
		}

		&:last-child {
			margin-right: 0;
		}
	}
</style>

<script src="./js/slider.js">
</script>
