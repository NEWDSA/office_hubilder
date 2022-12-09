<template>
	<TopNav>
		<template v-slot:topNavTitle>
			门锁
		</template>
		<template v-slot:topNavRight>
			<van-icon name="bell" size="25" color="white" />
		</template>
	</TopNav>
	
	<div class="mensuo">
		<div>
			<img src="/src/assets/hotelui/door.png" alt="" style="width: 100%;">
		</div>
		<div class="mensuo-con">
			<div class="mensuo-lock">
				<div class="title">门锁</div>
				<div class="lock-set">Locked <van-icon name="link-o" size="25" color="#08A491" style="margin-left: 5px;" /></div>
			</div>
			<div class="nowTime">{{ timeArry.timeText }}</div>
			<div class="lock-but">开 门</div>
			
			<div class="set-list">
				<div class="set-item" v-for="(item,index) in lockList" :key="index">
					<div class="item-title">{{ item.title }}</div>
					<div class="item-icon">
						<van-icon :name="item.icon" size="25" color="#08A491" />
					</div>
				</div>
			</div>
		</div>
	</div>		
</template>

<script setup>
	import { ref } from "vue";
	import { formatDate } from '@/util/index.js'
	
	const lockList = ref([
		{
			title:'远程呼叫开锁',
			icon:'phone-o'
		},
		{
			title:'申请远程授权开门',
			icon:'home-o'
		},
		{
			title:'电池电量',
			icon:'bulb-o'
		},
		{
			title:'获取临时密码',
			icon:'eye-o'
		},
		{
			title:'修改密码',
			icon:'edit'
		}
	])
	
	// nowtime
	const timeArry = ref(formatDate(new Date()))
	const timeStart = ()=> {
	  // 设置定时器
	  const timer = setInterval(() => {
		timeArry.value = formatDate(new Date());
	  }, 1000);
	}
	timeStart();	
	
</script>

<style lang="scss">
	.mensuo{
		margin-top: 10px;
	}
	.mensuo-con{
		margin-top: -15%;
		padding: 20px;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		background: white;
		
		.mensuo-lock{
			display: flex;
			justify-content: space-between;
			.title{
				font-size: 1.3rem;
			}
			.lock-set{
				font-size: 1.3rem;
				display: flex;
				align-items: center;
				color: #08A491;
			}
		}
		
		.nowTime{
			margin: 10px 0;
			color: #7E7E7E;
		}
		.lock-but{
			width: 100%;
			height: 4rem;
			margin: 0 auto;
			font-size: 1.5rem;
			line-height: 4rem;
			text-align: center;
			color: white;
			border-radius: 10px;
			background: #08A491;
			margin-bottom: 40px;
		}
		
		.set-list{
			padding: 10px;
			
			.set-item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 20px;
				
				.item-title{
					color: #08A491;
				}
				.item-icon{
					width: 2.5rem;
					height: 2.5rem;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
					background: #F1F7F6;
				}
			}
		}
		
		
		
	}
	
</style>