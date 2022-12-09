<template>
	<TopNav>
		<template v-slot:topNavTitle>
			插座
		</template>
		<template v-slot:topNavRight>
			<van-icon name="bell" size="25" color="white" />
		</template>
	</TopNav>
	
	<div class="con-chazuo">
		<div class="chazuo-tab">
			<div class="tab-item" v-for="(item,index) in tabList" :style="tabIndex == index ? 'background: #08A491;' : 'background: #F3F3F7;'" @click="tabIndex = index">
				<van-icon name="bell" size="25" :color="tabIndex == index ? 'white' : '#08A491'"/>
			</div>
		</div>
		
		<div class="con" style="text-align: center;padding: 20px 0;">
			<img src="/src/assets/hotelui/chazuo.png" alt="" style="width:60%" >
		</div>
		
		<div class="temperature-item">
			<div class="temperature">
				<div class="title">
					使用功率（W）
				</div>
				<div class="value">
					<van-icon name="play" size="20" color="#08A491" style="transform: rotate(-90deg);"/> <span>1200w </span>
				</div>
			</div>
			<div class="temperature">
				<div class="title">
					用电量（KW.h）
				</div>
				<div class="value">
					<van-icon name="play" size="20" color="#e2ebea" style="transform: rotate(90deg);"/> <span>58.5 KwH</span>
				</div>
			</div>
		</div>
		
		<div class="time">
			<div class="time-top">
				<div class="title">定时</div>
				<div class="add">
					<van-icon name="plus" size="25" color="#08A491"/>
					<span>Add</span>
				</div>
			</div>
			<div class="time-item">
				<div></div>
			</div>
		</div>
		
	</div>
	
</template>

<script setup> 
	import { ref } from "vue";
	const tabIndex = ref('');
	const tabList = ref([
		{
			icon:''
		},
		{
			icon:''
		},
		{
			icon:''
		},
		{
			icon:''
		}
	])
	
	const windSpeedIndex = ref('')
	const windSpeedList = ref([
		{
			id:''
		},
		{
			id:''
		},
		{
			id:''
		},
		{
			id:''
		},
		{
			id:''
		}
	])
</script>

<style lang="scss">
	.con-chazuo{
		padding: 10px;
		
		.chazuo-tab{
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			.tab-item{
				// flex: 1;
				
				width:20%;
				text-align: center;
				padding: 10px;
				// background: #F3F3F7;
				border-radius: 10px;
			}
		}
		
		.temperature-item{
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			.temperature{
				width: 47%;
				padding: 10px;
				text-align: center;
				border-radius: 10px;
				border: 1px solid #ececec;
				
				.title{
					color: #0AB7A3;
					// font-size: .5rem;
				}
				.value{
					margin: 5px 0;
					span{
						font-size: 1.3rem;
						font-weight: 600;
					}
					
				}
			}
		}
		
		.time{
			margin-top: 10px;
			padding: 10px;
			border-radius: 10px;
			border: 1px solid #ececec;
			
			.time-top{
				display: flex;
				align-items: center;
				justify-content: space-between;
				
				.title{
					font-size: 1.3rem;
				}
				.add{
					display: flex;
					align-items: center;
					font-size: 1.3rem;
				}
			}
		}
		
		
	}
	
</style>