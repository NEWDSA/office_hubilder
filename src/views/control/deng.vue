<template>
	<TopNav>
		<template v-slot:topNavTitle>
			吊灯
		</template>
		<template v-slot:topNavRight>
			<van-icon name="bell" size="25" color="white" />
		</template>
	</TopNav>
	<div class="deng">
		<div class="deng-img" style="text-align: center;">
			<img src="/src/assets/hotelui/light.png" alt="" style="width: 50%;">
		</div>
		
		<div class="light-model">
			<div class="title">亮度</div>
			<div class="hua">
				<div style="width: 10%;"><van-icon name="minus" size="25" color="#9d9d9d" /></div>
				<div style="width: 75%;">
					<van-slider v-model="value" bar-height="5px" active-color="#08A491" />
				</div>
				<div style="width: 10%;"><van-icon name="plus" size="25" color="#9d9d9d" /></div>
			</div>
		</div>
		
		<div class="light-model">
			<div class="title">色温</div>
			<div class="hua">
				<div style="width: 10%;"><van-icon name="minus" size="25" color="#9d9d9d" /></div>
				<div style="width: 75%;" class="color">
					<van-slider v-model="value2" bar-height="5px" active-color="#FC9920" inactive-color="#3ED4FF" />
				</div>
				<div style="width: 10%;"><van-icon name="plus" size="25" color="#9d9d9d" /></div>
			</div>
		</div>
		
	</div>
</template>

<script setup>
	import { ref } from "vue"
	
	const value = ref('')
	const value2 = ref('30')
</script>

<style lang="scss">
	.light-model{
		padding: 20px;
		.title{
			font-size: 1.2rem;
			color: #9d9d9d;
		}
		
		.model{
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			.tab-item{
				// flex: 1;
				width:30%;
				text-align: center;
				padding: 10px;
				background: white;
				border-radius: 20px;
				margin: 10px 0;
			}
		}
		
		.hua{
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			.color{
				.van-slider__button{
					background:#FC9920;
					border: 3px solid white;
					box-shadow:none;
				}
			}
		}
		
	}
</style>