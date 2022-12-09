<template>
	<div class="ZJ-home-header">
		<div class="ZJ-home-logo">
			<div class="ZJ-home-logo-img">
				<van-image round width="2rem" height="2rem" src="/src/assets/hotelui/logo.png" />
			</div>
			<div class="ZJ-home-logo-title">广东智联蔚来科技有限公司</div>
		</div>
		<div class="ZJ-home-header-right">
			<!-- <van-icon name="bars" size="25" color="white" /> -->
		</div>
	</div>

	<div class="ZJ-home-body" ref="messageContainer">
		<div class="ZJ-home-search">
			<van-field v-model="value1" left-icon="search" placeholder="搜索" center />
		</div>
		<div class="ZJ-home-tab-item">
			<van-row gutter="20">
				<van-col class="ZJ-home-tab" span="6" v-for="(item, index) in tab" :key="index"
					@click="$router.push(item.path);">
					<div class="ZJ-home-tab-img">
						<van-icon :name="item.icon" size="25" color="white" />
					</div>
					<div class="ZJ-home-tab-value">
						{{ item.value }}
					</div>
				</van-col>
			</van-row>
		</div>

		<div class="ZJ-home-model">
			<div class="ZJ-home-model-title">
				常用功能
			</div>
			<div class="ZJ-home-model-content">
				<div class="tab" style="display: flex;">
					<div class="img1" style="" @click="$router.push('/work')">工作台</div>
					<div class="img2" style="" @click="$router.push('/facility')">区域设备</div>
				</div>
			</div>
		</div>

		<div class="ZJ-home-model model-bg">
			<div class="ZJ-home-model-title">
				<div class="" style="font-size: 20px;">场景模式</div>
				<div class="ZJ-facility-menu" @click="select('shop')">
					<div class="value">{{ actions[actionIndex].name }}</div>
					<div class="icon">
						<van-icon name="play" size="18" color="black" />
					</div>
				</div>
			</div>
			<div class="scene-moshi-box">

				<div class="ZJ-scene-menu-slide-list" v-for="(item, index) in hallTask" :key="item.id"
					@click="index == 2 ? Toast('添加场景') :item.check = item.check == true ? false : true"
					:style="item.check == true ? 'background: -webkit-linear-gradient(top,#65E5D5,#23C7B3);' : 'background: white;'">
					<div class="slide-list" v-if="item.id">
						<div class="slide-list-img" style="width: 30px;">
							<img :src="item.check == true ? item.checkImg : item.moImg" alt=""
								style="width: 2.5rem;height: 2.5rem;">
						</div>
						<div class="slide-list-value">
							<div class="slide-list-value-num">{{ item.value }}</div>
							<div class="slide-list-value-yinwen">{{ item.valueY }}</div>
						</div>
					</div>
					<div class="slide-name" v-if="item.id">
						<div class="slide-name-yingwen">
							{{ item.yingwen }}
						</div>
						<div class="slide-name-zhongwen">
							{{ item.zhongwen }}
						</div>
					</div>

					<div style="text-align: center;margin-top: 15%;" v-if="!item.id">
						<van-icon name="plus" size="50" color="black" />
					</div>

				</div>

			</div>
		</div>

		<div class="ZJ-home-model" style="background: #D3E8E6;margin: 10px;border-radius: 20px;">

			<div class="scene-moshi-box" style="justify-content: space-around;">

				<div class="electric-quantity">
					<div class="img">
						<img src="@/assets/hotelui/dian1.png" alt="" />
					</div>
					<div class="value-info">
						<div class="value">48.2 KwH</div>
						<div class="unit">今日使用电量 (度)</div>
					</div>
				</div>

				<div class="electric-quantity">
					<div class="img">
						<img src="@/assets/hotelui/dian2.png" alt="" />
					</div>
					<div class="value-info">
						<div class="value">48.2 KwH</div>
						<div class="unit">今日使用电量 (度)</div>
					</div>
				</div>

			</div>
		</div>


	</div>
	<van-action-sheet v-model:show="show" :actions="actions" cancel-text="取消" close-on-click-action
		@select="onSelect" />

</template>

<script setup>
import {
	ref,reactive
} from "vue"
import { Toast } from "vant";
const value1 = ref('')
const tab = ref([{
	icon: 'desktop-o',
	value: '访客管理',
	path: '/visitorList'
},
{
	icon: 'home-o',
	value: '请假审批',
	path: '/askforleave/list'
},
{
	icon: 'envelop-o',
	value: '场景',
	path: '/scene'
},
{
	icon: 'description',
	value: '请假申请',
	path: '/askforleave/applyfor'
},
{
	icon: 'map-marked',
	value: '考勤',
	path: '/checkwork/mywork'
},
{
	icon: 'contact',
	value: '人员管理',
	path: '/checkwork/groupwork'
},
{
	icon: 'wap-home-o',
	value: '门禁',
	path: '/door'
},
{
	icon: 'calendar-o',
	value: '节假日',
	path: '/festival/list'
}
])

const hallTask = ref([
	{
		id: '1',
		moImg: '/src/assets/hotelui/briefcase_close.png',
		checkImg: '/src/assets/hotelui/briefcase_open.png',
		check: false,
		yingwen: 'Wall light',
		zhongwen: '工作模式',
		value: '0%',
		valueY: 'value'
	},
	{
		id: '2',
		moImg: '/src/assets/hotelui/chuanglian_no.png',
		checkImg: '/src/assets/hotelui/chuanglian_yes.png',
		check: false,
		yingwen: 'Wall light',
		zhongwen: '离开模式',
		value: '60%',
		valueY: 'value'
	},
	{
		// id:'3',
		moImg: '/src/assets/hotelui/deng_no.png',
		checkImg: '/src/assets/hotelui/chuanglian_yes.png',
		check: false,
		yingwen: 'Wall light',
		zhongwen: '离开模式',
		value: '60%',
		valueY: 'value'
	},
]);

let show = ref(false);
const actions = reactive([{
	name: '办公区',
	value: 0
},
{
	name: '茶水间',
	value: 1
},
{
	name: '会议室',
	value: 2
},
]);
const actionIndex = ref(0);
const onSelect = (item) => {
	// 默认情况下点击选项时不会自动收起
	// 可以通过 close-on-click-action 属性开启自动收起
	show.value = false;
	actionIndex.value = item.value;
};

const select = (value) => {
	value == 'shop' ? show.value = true : showc.value = true

}

</script>

<style lang="scss">
.ZJ-home-header {
	background: #01A995;
	height: 90px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;

	.ZJ-home-logo {
		display: flex;
		align-items: center;
	}

	.ZJ-home-logo-title {
		margin-left: 10px;
		color: white;
	}
}

.ZJ-home-body {
	background: white;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	margin-top: -15px;

	// padding: 20px;
	.ZJ-home-search {
		padding: 20px;
		padding-bottom: 0;

		.van-cell {
			width: 95%;
			margin: 0 auto;
			height: 35px;

			input::-webkit-input-placeholder {
				/* WebKit browsers */
				color: #929495;
			}

			border-radius: 20px;
			background:#C6E8E4;
			color: black;
		}
	}

	.ZJ-home-tab-item {
		display: flex;
		margin-top: 40px;
		padding: 0 20px;

		.ZJ-home-tab {
			text-align: center;
			margin-bottom: 15px;

			.ZJ-home-tab-img {
				background: #0AB7A3;
				border-radius: 10px;
				height: 50px;
				width: 50px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 auto;
			}

		}
	}

	.model-bg {
		background: #D3E8E6;
		margin: 10px;
		border-radius: 20px;
	}

	.ZJ-home-model {
		overflow: hidden;
		margin-bottom: 20px;

		.ZJ-home-model-title {
			padding: 0 20px;
			padding-top: 10px;
			display: flex;
			justify-content: space-between;

			.ZJ-facility-menu {
				margin-right: 10px;
				padding: 5px 10px 5px 20px;
				border-radius: 30px;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #ffffff;
				border: 1px solid #1DA796;

				.value {
					font-size: 1.1rem;
					margin-right: 0.5rem;
					color: #071E40;
				}

				.icon {
					transform: rotate(90deg);
				}
			}
		}

		.ZJ-home-model-content {

			.tab {
				width: 100%;
				margin-left: 20px;

				.img1 {
					padding: 10px;
					color: white;
					background: url('/src/assets/hotelui/home-hua-tab2.png') no-repeat;
					background-size: 100% 100%;
					margin-right: 20px;
					width: 45%;
					height: 80px;
				}

				.img2 {
					padding: 10px;
					color: white;
					background: url('/src/assets/hotelui/home-hua-tab1.png') no-repeat;
					background-size: 100% 100%;
					margin-right: 20px;
					width: 45%;
					height: 80px;
				}
			}

			.money {
				display: flex;
				align-items: center;
				justify-content: space-around;
				margin-bottom: 30px;

				.shou {
					width: 45%;
					color: white;
					padding: 10px;
					border-radius: 10px;
					background: pink;
					background: linear-gradient(145deg, #35B9A9, #51F3DF);
					box-shadow: -2px 6px 15px #abd1d9;
				}

				.liu {
					width: 45%;
					color: white;
					padding: 10px;
					color: white;
					border-radius: 10px;
					background: pink;
					background: linear-gradient(145deg, #d88244, #ffdcb4);
					box-shadow: -2px 6px 15px #abd1d9;
				}
			}

		}
	}



	.scene-moshi-box {
		width: 100%;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		padding: 1rem;

		.ZJ-scene-menu-slide-list {
			width: 31%;
			padding: 10px;
			border-radius: 10px;
			box-shadow: 2px 5px 8px #d9d9d9;

			.slide-list {
				display: flex;
				justify-content: space-between;

				.slide-list-value {
					text-align: center;

					.slide-list-value-num {
						font-weight: 600;
						font-size: 1.2rem;
					}

					.slide-list-value-yinwen {
						font-size: .5rem;
					}
				}
			}

			.slide-name {
				text-align: left;

				.slide-name-yingwen {
					// transform: scale(0.7);
					font-size: .5rem;
				}

				.slide-name-zhongwen {
					font-size: 6px;
					font-weight: 600;
				}
			}



		}

		.electric-quantity {
			display: flex;
			align-items: center;
			
			.img{
				display: flex;
				justify-content: center;
				align-items: center;

				img {
				width: 3rem;
			}
			}
			.value-info{
				margin-left: 10px;
				.value{
					font-size: 1.3rem;
					font-weight: 600;
				}
			}
			
		}
	}


}
</style>
