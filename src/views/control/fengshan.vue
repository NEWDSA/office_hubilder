<template>
	<TopNav>
		<template v-slot:topNavTitle>
			风扇
		</template>
		<template v-slot:topNavRight>
			<van-icon name="bell" size="25" color="white" />
		</template>
	</TopNav>
	
	<div class="fengshan">
		<div class=""> 
			<img src="/src/assets/hotelui/fan.png" alt="" style="width: 100%;">
		</div>
		
		<div class="con-fengshan">
			<div class="fengshan-on-off">
				<div class="title">办公区风扇</div>
				<div class="onoff">
					{{ fengshanSwitch == false ? 'Off' : 'No' }}
					<van-switch v-model="fengshanSwitch" active-color="#35B9A9" inactive-color="#929393" size="16"  style="margin-left: 10px;" />
				</div>
			</div>
			
			<div class="fengshan-model">
				<div class="title">模式Model</div>
				<div class="model">
					<div class="tab-item" v-for="(item,index) in tabList" :style="tabIndex == index ? 'color: black;' : 'color: #ceced0;'" @click="tabIndex = index">
						{{ item.title }}
					</div>
					
				</div>
			</div>
			
			<div class="fengshan-model">
				<div class="title">风速调节</div>
				<div class="hua">
					<div style="width: 10%;"><van-icon name="bell" size="25" color="#9d9d9d" /></div>
					<div style="width: 75%;">
						<van-slider v-model="value" bar-height="3px" active-color="#08A491" />
					</div>
					<div style="width: 10%;"><van-icon name="bell" size="25" color="#9d9d9d" /></div>
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
	</div>
</template>

<script setup>
	import { ref } from "vue"
	const tabIndex = ref('');
	const tabList = ref([
		{
			title:'Slow'
		},
		{
			title:'Mid'
		},
		{
			title:'Fast'
		},
		
	]);
	const value = ref(50);
	const fengshanSwitch = ref(false)
	
</script>

<style lang="scss">
	.con-fengshan{
		padding: 20px;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		background: #f7f7f7;
		
		.fengshan-on-off{
			display: flex;
			align-items: content;
			justify-content: space-between;
			margin-bottom: 10px;
			
			.title{
				font-size: 1.3rem;
			}
			.onoff{
				display: flex;
				align-items: center;
			}
			
		}
		
		.fengshan-model{
			.title{
				font-size: .5rem;
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
</style>