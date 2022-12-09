<template>
	<TopNav>
		<template v-slot:topNavTitle>
			窗帘
		</template>
		<template v-slot:topNavRight>
			<van-icon name="bell" size="25" color="white" />
		</template>
	</TopNav>

	<div class="chuanglian">
		<div class="chuanglian-img" style="text-align:center;margin-top: 20px;">
			<img src="/src/assets/hotelui/chuanlian.png" alt="" style="width: 90%;">
		</div>

		<div class="chuanglian-tag">
			<div class="open"><img src="/src/assets/hotelui/1771964.png" alt=""></div>
			<div class="pause">
				<van-icon name="pause" size="25" color="#FC9920" />
			</div>
			<div class="close"><img src="/src/assets/hotelui/1771934.png" alt=""></div>
		</div>

		<div class="chuanglian-model">
			<div class="hua">
				<div style="width: 10%;">
					<img src="/src/assets/hotelui/1771964.png" alt="" style="width:80%;opacity: .5;">
				</div>
				<div style="width: 70%;">
					<van-slider v-model="value" bar-height="5px" active-color="#08A491" />
				</div>
				<div style="width: 10%;">
					<img src="/src/assets/hotelui/1771934.png" alt="" style="width:80%;opacity: .5;">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue"
	
	const value = ref()
</script>

<style lang="scss">
	.chuanglian {
		padding: 10px;

		.chuanglian-tag {
			display: flex;
			align-items: center;
			justify-content: center;

			.open {
				width: 4.5rem;
				height: 4.5rem;
				padding: 10px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				box-shadow: 1px 2px 5px #d3d3d3;

				img {
					width: 80%;
				}
			}

			.pause {
				width: 6rem;
				height: 6rem;
				padding: 10px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				box-shadow: 1px 2px 5px #d3d3d3;
				margin: 0 20px;
			}

			.close {
				width: 4.5rem;
				height: 4.5rem;
				padding: 10px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				box-shadow: 1px 2px 5px #d3d3d3;

				img {
					width: 80%;
				}
			}
		}

		.chuanglian-model {
			padding: 20px;

			.title {
				font-size: 1.2rem;
				color: #9d9d9d;
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
	}
</style>
