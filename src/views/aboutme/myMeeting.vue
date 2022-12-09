<template>
	<TopNav>
		<template v-slot:topNavTitle>
			我的会议
		</template>
		<template v-slot:topNavRight>
			<van-icon name="plus" size="25" color="white" @click="$router.push('/conference/appointList')" />
		</template>
	</TopNav>
	<div class="my-meeting">
		<div class="ZJ-metting-search">
			<van-field v-model="value1" left-icon="search" placeholder="搜索" center />
		</div>

		<!-- <div class="msgtab-item"> -->
			<van-tabs v-model:active="audTabIndex" background="#FAFAFA" color="#C6E8E4">
				<van-tab :title="item.value" v-for="(item, index) in msgTab" :key="index">

				</van-tab>
			</van-tabs>

			<!-- <div class="msgtab" v-for="(item, index) in msgTab" :key="index">
				<div class="msgtab-img" v-if="item.icon">
					<van-icon :name="item.icon" size="20" :color="item.color" />
				</div>
				<div class="msgtab-title">{{ item.value }}</div>

			</div> -->
		<!-- </div> -->

		<div class="huiyi-item">
			<div class="huiyi-info" v-for="(item, index) in huiyiList" :key="item.id">
				<div class="info-num">
					<div class="num-b">{{ item.id }}</div>
				</div>
				<div class="info-con">
					<div class="info-title">{{ item.title }}</div>
					<div class="info-address">
						<van-icon name="clock-o" color="black" size="16" />
						<div style="margin-left: 5px;">{{ item.address }}</div>
					</div>
					<div class="info-time">
						<van-icon name="clock-o" color="black" size="16" />
						<div style="margin-left: 5px;">{{ item.time }}</div>
					</div>
				</div>
				<div class="info-set">
					<div>
						<!-- <van-icon name="browsing-history-o" color="#10AF9C" size="30" /> -->
					</div>
					<div>
						<van-icon name="close" color="#EF8776" size="30" @click="huiyiList.splice(index,1)"/>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('');

const msgTab = ref([
	{
		icon: 'envelop-o',
		color: 'black',
		value: '全部',
		path: ''
	},
	{
		color: 'green',
		value: '未开始'
	},
	{
		color: 'black',
		value: '进行中',
		path: ''
	},
	{
		color: 'black',
		value: '已结束'
	},
	{
		icon: 'records',
		color: 'black',
		value: '我的预约'
	}
])

// 会议
const huiyiList = ref([
	{
		id: '1',
		title: '智慧办公项目进度会议',
		address: '多功能会议室',
		time: '09/13  6:30~7:00',
		stuts: '0'
	},
	{
		id: '2',
		title: '智慧办公项目进度会议',
		address: '小会议室',
		time: '09/13  9:30~11:00',
		stuts: '1'
	},
	{
		id: '3',
		title: '智慧办公项目进度会议',
		address: '多功能会议室',
		time: '09/13  18:30~19:00',
		stuts: '0'
	},

])
</script>

<style lang="scss">
.my-meeting {
	.ZJ-metting-search {
		background: #10AF9C;
		padding: 10px 0;

		.van-cell {
			width: 90%;
			margin: 0 auto;
			height: 35px;

			input::-webkit-input-placeholder {
				/* WebKit browsers */
				color: #929495;
			}

			border-radius: 10px;
			background:#C6E8E4;
			color: black;
		}
	}

	.msgtab-item {
		margin: 10px 0;
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.msgtab {
			display: flex;

			.msgtab-img {}

			.msgtab-title {
				margin-left: 5px;
			}
		}
	}

	.huiyi-item {
		padding: 20px;

		.huiyi-info {
			display: flex;
			border-radius: 10px;
			border: 1px solid #10AF9C;
			margin-bottom: 20px;
			overflow: hidden;

			.info-num {
				width: 20%;
				background: #10AF9C;
				display: flex;
				align-items: center;
				justify-content: center;

				.num-b {
					width: 3rem;
					height: 3rem;
					line-height: 3rem;
					font-size: 2rem;
					color: #7F8181;
					text-align: center;
					background: white;
					border-radius: 50%;
				}
			}

			.info-con {
				padding: 10px 0 10px 10px;
				width: 60%;
				background: white;
				border-radius: 10px;

				.info-title {
					font-size: 1.2rem;
					color: black;
					margin-bottom: 10px;
				}

				.info-address {
					display: flex;
					align-items: center;
					font-size: 12px;
					color: #5C5C5C;
					margin-bottom: 10px;
				}

				.info-time {
					display: flex;
					align-items: center;
					font-size: 12px;
					color: #5C5C5C;
				}
			}

			.info-set {
				margin-right: 10px;
				width: 20%;
				display: flex;
				align-items: flex-end;
				justify-content: space-between;
			}

		}
	}








}
</style>