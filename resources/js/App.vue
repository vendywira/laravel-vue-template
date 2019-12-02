<template>
  <div class="app">
    <Home></Home>
  </div>
</template>
<script>
	import Home from "@page/Home.vue";
	export default {
		data() {
			return {};
		},
		components: { Home }
	};
</script>

<style lang="scss">
	// First, set the value for variable
	$mdc-typography-font-family: "Roboto Mono", monospace;

	// Then, import required files
	@import "~@material/typography/mixins";

	html {
		width: 100%;
		height: 100%;
	}

	body {
		@include mdc-typography(body2);

		width: 100%;
		min-height: 100%;
		margin: 0;
	}
</style>
