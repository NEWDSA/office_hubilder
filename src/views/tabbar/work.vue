<template>
	<div class="work-box">
		<div class="ZJ-work-header">
			<div class="ZJ-work-basic">
				<div class="ZJ-work-photo">
					<div class="ZJ-work-photo-img">
						<van-image round width="2rem" height="2rem"
							src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
					</div>
					<div class="ZJ-work-user">王小明</div>
				</div>
			</div>
			<div class="ZJ-work-search">
				<van-field v-model="value1" left-icon="search" placeholder="搜索" center />
			</div>
		</div>

		<div style="margin-top: 10px;">
			<img src="/src/assets/hotelui/guanggao.png" alt="" style="width: 100%;">
		</div>

		<div class="ZJ-work-model">
			<div class="model-top">
				<div class="model-title">我的</div>
				<div class="model-setting">
					<!-- <van-icon name="bars" size="20" color="#929495"/>
					<div class="model-setting-wen">管理</div> -->
				</div>
			</div>
			<div class="ZJ-work-tab-item">
				<van-row gutter="20">
					<van-col class="ZJ-work-tab" span="6" v-for="(item, index) in wordTab" :key="index"
						@click="$router.push(item.path)">
						<div class="ZJ-work-tab-img">
							<van-icon :name="item.icon" size="25" color="white" />
						</div>
						<div class="ZJ-work-tab-value" :style="index == 7 ? 'font-weight: 600;' : ''">
							{{ item.value }}
						</div>
					</van-col>
				</van-row>
			</div>
		</div>

		<div class="ZJ-work-model">
			<div class="model-top">

				<div class="model-title">
					<van-icon name="notes-o" size="25" color="#000000" />
					<span>待办</span>
					<van-icon name="arrow" size="20" color="#000000" />
				</div>

				<div class="model-setting">
					<van-icon name="plus" size="35" color="#000000" @click="$router.push('/Addagenda')" />
				</div>
			</div>
			<div class="ZJ-work-tab-daiban">
				<van-row tag="dai-col" v-for="(item, index) in taskList" :key="index"
					@click="$router.push('/setAgenda')">
					<van-col span="8" style="background: #0AB7A3;" tag="col-left">
						<div class="ZJ-work-tab-daiban-time">{{ item.time }}</div>
						<div class="ZJ-work-tab-daiban-day">Task</div>
					</van-col>
					<van-col span="16" tag="col-right">
						<div class="ZJ-work-tab-daiban-taskTab">
							<div class="ZJ-work-tab-daiban-task">
								{{ item.task }}
							</div>
							<div class="ZJ-work-tab-daiban-timeRe">
								<div class="ZJ-work-tab-daiban-remainTime">
									<van-icon name="underway-o" size="14" color="#838383" />
									<span style="margin-left: 5px;">{{ item.remainTime }}</span>
								</div>
								<div class="ZJ-work-tab-daiban-duty">
									<van-icon name="manager" size="14" color="#838383" />
									<span style="margin-left: 5px;">{{ item.duty }}</span>
								</div>
							</div>
						</div>
						<div class="ZJ-work-tab-daiban-taskTab-rightTou">
							<van-icon name="arrow" size="20" color="#35B9A9" />
						</div>
					</van-col>
				</van-row>
			</div>
		</div>

	</div>
</template>
<!-- @click="openDoorList[index].stuts == 0 ? openDoorList[index].stuts = 1 : openDoorList[index].stuts = 0" -->
<script setup>
import { ref } from "vue"

const wordTab = ref([
	{
		icon: 'desktop-o',
		value: '房间',
		path: '/myHome'
	},
	{
		icon: 'home-o',
		value: '会议',
		path: '/aboutme/myMeeting'
	},
	{
		icon: 'envelop-o',
		value: '会议审核',
		path: '/conference/audit'
	},
	{
		icon: 'cluster-o',
		value: '会议室列表',
		path: '/conference/appointList'
	},
	{
		icon: 'home-o',
		value: '请假审批',
		path: '/askforleave/list'
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
		icon: 'ellipsis',
		value: '. . .',
		path: '/festival/list'
	}
])

const taskList = ref([
	{
		time: '09:30',
		task: '一层客房清洁任务',
		remainTime: '3 h',
		duty: '任务相关人员'
	},
	{
		time: '10:30',
		task: '咖啡厅设备检修',
		remainTime: '30 min',
		duty: '任务相关人员'
	},
])


</script>

<style lang="scss">
.work-box {
	padding: 20px;
}

.ZJ-work-header {
	.ZJ-work-basic {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 45px;
	}

	.ZJ-work-photo {
		display: flex;
		align-items: center;
	}

	.ZJ-work-user {
		font-weight: 600;
		margin-left: 10px;
	}

	.ZJ-work-search {
		margin-top: 5px;

		.van-cell {
			width: 100%;
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
}

.ZJ-work-model {
	padding: 10px;
	background: #DBFFFB;
	border-radius: 10px;
	margin-top: 10px;

	.model-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;

		.model-title {
			display: flex;
			align-items: center;
			font-size: 19px;
			font-weight: 600;

			span {
				margin: 0 5px;
				font-size: 19px;
				font-weight: 600;
			}
		}

		.model-setting {
			display: flex;
			align-items: center;
			color: #929495;

			.model-setting-wen {
				font-size: 18px;
			}
		}
	}

	.ZJ-work-tab-item {
		display: flex;
		margin-top: 10px;
		padding: 10px;

		.ZJ-work-tab {
			text-align: center;
			margin-bottom: 15px;

			.ZJ-work-tab-img {
				background: #0AB7A3;
				border-radius: 10px;
				height: 50px;
				width: 50px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 auto;
			}

			.ZJ-work-tab-value {}
		}
	}

	dai-col {
		border-radius: 10px;
		border: 1px solid #0AB7A3;
		margin-bottom: 5px;

		col-left {
			background: #0AB7A3;
			border-top-left-radius: 9px;
			border-bottom-left-radius: 9px;
			text-align: center;
			color: white;

			.ZJ-work-tab-daiban-time {
				font-size: 20px;
				margin-top: 10px;
			}

			.ZJ-work-tab-daiban-day {
				font-size: 16px;
			}

		}

		col-right {
			background: white;
			border-top-right-radius: 9px;
			border-bottom-right-radius: 9px;
			display: flex;

			.ZJ-work-tab-daiban-taskTab {
				padding: 10px 10px;
				width: 90%;

				.ZJ-work-tab-daiban-task {
					font-size: 14px;
				}

				.ZJ-work-tab-daiban-timeRe {
					display: flex;
					align-items: center;

					.ZJ-work-tab-daiban-remainTime {
						width: 40%;
						margin-top: 10px;

						span {
							transform: scale(0.5);
							color: #838383;
							font-size: 3px;
						}

					}

					.ZJ-work-tab-daiban-duty {
						width: 60%;
						margin-left: 15px;
						margin-top: 10px;

						span {
							color: #838383;
							font-size: 2px;
						}
					}
				}
			}

			.ZJ-work-tab-daiban-taskTab-rightTou {
				display: flex;
				align-items: center;
				justify-content: center;
			}

		}
	}

}
</style>