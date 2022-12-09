<template>
	<div class="top-nav">
		<div class="back-icon">
			<van-icon name="down" size="25" color="white" style="transform: rotate(90deg);" @click="$router.back(-1)" v-if="backrou"/>
			<slot name="topNavBack" v-else></slot>
		</div>
		<div class="title">
			<slot name="topNavTitle"></slot>
		</div>
		<div class="more-icon">
			<slot name="topNavRight"></slot>
		</div>
	</div>



</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
	backrou: {
		type: Boolean,
		default: true
	}
})
</script>

<style lang="scss">
.top-nav {
	background: #10AF9C;
	height: 4rem;
	display: flex;
	font-size: 16px;

	// position: fixed;
	// top: 0;
	// left: 0;
	// right:0;
	.back-icon {
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.title {
		width: 60%;
		text-align: center;
		line-height: 4rem;
		font-size: 1.3rem;
		color: white;
	}

	.more-icon {
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>