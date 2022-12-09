<template>
	<TopNav>
		<template v-slot:topNavTitle>
			场景模式
		</template>
	</TopNav>
	
	<div class="scene">
		<div class="scene-header">
			<div class="scene-title">场景模式设置</div>
			<div class="scene-tab">
				<div class="ZJ-scene-menu" @click="show = true">
					<div class="value">{{ actions[actionIndex].name }}</div>
					<div class="icon">
						<van-icon name="play" size="18" color="white" />
					</div>
				</div>
			</div>
		</div>
		
		<div class="scene-moshi-box">
			
			<div class="ZJ-scene-menu-slide-list" v-for="(item,index) in hallTask" :key="item.id" @click="item.check = item.check == true ? false:true "
			:style="item.check == true ? 'background: -webkit-linear-gradient(top,#65E5D5,#23C7B3);' : 'background: white;' ">
				<div class="slide-list" v-if="item.id">
					<div class="slide-list-img" style="width: 30px;">
						<img :src="item.check == true ? item.checkImg : item.moImg" alt="" style="width: 2.5rem;height: 2.5rem;">
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
		
		<div class="setting-list">
			<div class="ZJ-scene-menu-slide-list" style="width: 47%;padding:10px;margin-bottom: 20px;" v-for="(item,index) in hallTask2" :key="item.id"
			:style="item.check == true ? 'background: -webkit-linear-gradient(top,#65E5D5,#23C7B3);' : 'background: white;' ">
				<div class="slide-list">
					<div class="slide-list-img" style="width: 50px;">
						<img :src="item.check == true ? item.checkImg : item.moImg" alt="" style="width: 4rem;height: 4rem;">
					</div>
					<div class="slide-list-value" style="margin-top: 5%;">
						<div class="slide-list-value-num" style="font-size: 2rem;line-height: 1.5rem;">{{ item.value }}</div>
						<div class="slide-list-value-yinwen" style="font-size: .8rem;">{{ item.valueY }}</div>
					</div>
				</div>
				<div class="slide-name" style="margin-top: 3rem;">
					<van-switch v-model="item.check" active-color="#1D1E1E" inactive-color="#929393" size="16" @click="tocheck" />
				</div>
			</div>
		</div>
	</div>
	
	<div class="sub-but">
		确认新增
	</div>
	
	
	<van-action-sheet v-model:show="show" :actions="actions" cancel-text="取消" close-on-click-action @select="onSelect" />
	
</template>

<script setup>
	import {ref,nextTick} from 'vue';
	import { Toast } from 'vant';
	const hallTask = ref([
		{
			id:'1',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/briefcase2.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'工作',
			value:'0%',
			valueY:'value'
		},
		{
			id:'2',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'离开模式',
			value:'60%',
			valueY:'value'
		},
		{
			// id:'3',
			moImg: '/src/assets/hotelui/deng_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'离开模式',
			value:'60%',
			valueY:'value'
		},
	]);
	
	const hallTask2 = ref([
		{
			id:'1',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/briefcase2.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'工作',
			value:'0%',
			valueY:'value'
		},
		{
			id:'2',
			moImg: '/src/assets/hotelui/deng_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'离开模式',
			value:'60%',
			valueY:'value'
		},
		{
			// id:'3',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'离开模式',
			value:'60%',
			valueY:'value'
		},
	]);
	
	// 酒店名
	let show = ref(false);
	const actions = ref([{
			name: '智联酒店',
			value: 0
		},
		{
			name: 'XX酒店',
			value: 1
		},
		{
			name: 'XX酒店',
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
	
	const tocheck = (index) => {
		// 默认情况下点击选项时不会自动收起
		// 可以通过 close-on-click-action 属性开启自动收起
		
	};
</script>

<style lang="scss">
	.scene{
		padding: 10px;
		
		.scene-header{
			display: flex;
			align-items: center;
			justify-content: space-between;
			.scene-title{
				font-size: 1.3rem;
			}
			.scene-tab{
				.ZJ-scene-menu {
					margin-right: 10px;
					padding: 5px 10px 5px 20px;
					border-radius: 10px;
					display: flex;
					align-items: center;
					justify-content: center;
					background-image: linear-gradient(180deg, #2ECCB7,#93EADF);
				
					.value {
						font-size: 1.1rem;
						margin-right: 0.5rem;
						color: white;
					}
				
					.icon {
						transform: rotate(90deg);
					}
				}
			}
		}
		
		.scene-moshi-box{
			width: 100%;
			background: #D3E8E6;
			border-radius: 10px;
			display: flex;
			justify-content: space-between;
			padding: 1rem;
			margin: 20px 0px;
		}
		.setting-list{
			padding: 10px;
			background-color: #f4ffff;
			border-radius: 20px;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-bottom: 20px;
		}
		
		.ZJ-scene-menu-slide-list{
			width: 31%;
			padding: 10px;
			border-radius: 10px;
			box-shadow: 2px 5px 8px #d9d9d9;
			.slide-list{
				display: flex;
				justify-content: space-between;
				
				.slide-list-value{
					text-align: center;
					.slide-list-value-num{
						font-weight: 600;
						font-size: 1.2rem;
					}
					.slide-list-value-yinwen{
						font-size: .5rem;
					}
				}
			}
			
			.slide-name{
				text-align: left;
				.slide-name-yingwen{
					// transform: scale(0.7);
					font-size: .5rem;
				}
				.slide-name-zhongwen{
					font-size: 6px;
					font-weight: 600;
				}
			}
			
			
			
		}
		
	}
	
	.sub-but{
		width: 95%;
		height: 4rem;
		font-size: 1.5rem;
		line-height: 4rem;
		text-align: center;
		border-radius: 10px;
		color: white;
		margin: 0 auto;
		background: #071E40;
	}
	
	
</style>