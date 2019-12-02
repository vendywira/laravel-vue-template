<template>
    <div class="banner">
      <vue-h-carousel
        :images="images"
        :width="840"
        :height="280"
        :leftWingWidth="250"
        :rightWingWidth="250"
        :interval="3000"
        :slidingDuration="1000"
        :postPaginationLabel="label"
        @slideClicked="slideClicked"
        @pagingButtonClicked="pagingButtonClicked"
        @arrowButtonClicked="arrowButtonClicked"
        @postPaginationLabelClicked="postPaginationLabelClicked"
      ></vue-h-carousel>
    </div>
</template>

<style lang="scss" scoped>
	.banner {
		margin-bottom: 50px;
	}
</style>


<script src="./js/carousel.js">
</script>
