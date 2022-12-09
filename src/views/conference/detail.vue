<template>
	<TopNav>
		<template v-slot:topNavTitle>
			会议详情
		</template>
	</TopNav>

	<div class="conference-detail">
		<div class="conference-detail-top">
			<div class="conference-detail-day">{{ detail.day }}</div>
			<div class="conference-detail-share">
				<van-icon name="share-o" size="18" color="#10AF9C" />
			</div>
		</div>
		<div class="conference-detail-car">
			<div class="car-time">{{ detail.time }}</div>
			<div class="car-title">{{ detail.title }}</div>
			<div class="car-address">会议室：{{ detail.address }}</div>
			<div class="car-pornum">会议人数：{{ detail.rnum }}人</div>
			<div class="car-more-item">

				<div class="more-box">
					<div class="tou-item">
						<div class="tou" v-for="(item,index) in 4" :key="index" style="background: url('/src/assets/hotelui/user2.png') no-repeat; background-size: 100% 100%;"
							:style="{zIndex: 5+item, position: 'absolute', left: (item * 20 - 20) + 'px' }">
							<img src="" alt="">
						</div>
					</div>

					<!-- <div class="more-icon">
					1
					</div> -->
				</div>


				<div class="more-qiandao" @click="Toast('已签到。'),qian = true">{{ qian ? '已签到':'未签到' }}</div>

			</div>
		</div>

		<div class="por-list">
			<div class="list-top">
				<div class="list-title">主讲人员</div>
				<!-- <div class="add-por">
					<van-icon name="plus" size="18" color="#ffffff" />
				</div> -->
			</div>
			<div class="por-model-content">
				<div class="por-model-slide slide">
					<div v-for="(item,index) in renyuan" :key="index" 
					class="por-model-item">
						<div class="por-xing-img">{{ item.xing }}</div>
						<div class="por-name">{{ item.name }}</div>
						<div class="por-zhi">{{ item.zhi }}</div>
						<div class="por-status">{{ item.status == 0 ? '未签到' : '已签到' }}</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<div class="order">
			<div class="order-title">
				会议任务
			</div>
			<div class="text">
				<textarea placeholder="描述内容" v-model="detail.note" readonly="readonly"></textarea>
			</div>
		</div>
		
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import { Toast } from 'vant';
	const qian = ref(false);
	
	const detail = ref({
		day:'9月26日，周三',
		time:'13:30-14:30',
		title:'智联例会',
		address:'608 中会议室',
		rnum:'10',
		note:'ad'
	})
	
	const renyuan = ref([
		{
			name:'之笑脸',
			xing:'之',
			zhi:'主管',
			status:'1'
		},
		{
			name:'之笑脸',
			xing:'之',
			zhi:'主管',
			status:'0'
		},
		
	])
	
</script>

<style lang="scss">
	.conference-detail {
		padding: 20px;

		.conference-detail-top {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.conference-detail-day {
				font-size: 1.3rem;
			}

			.conference-detail-share {}
		}

		.conference-detail-car {
			background: #10AF9C;
			border-radius: 5px;
			padding: 10px 10px 20px 10px;
			color: white;

			.car-time {}

			.car-title {
				font-size: 1.1rem;
			}

			.car-address {}

			.car-pornum {}

			.car-more-item {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.more-box {
					display: flex;
					align-items: center;

					.tou-item {
						.tou {
							top: -10px;
							width: 2rem;
							height: 2rem;
							background: #ffffff;
							border-radius: 50%;
							border: 1px solid #10AF9C;
						}
					}
					
					.more-icon{
						
					}
					
				}
				
				.more-qiandao{
					padding: 2px 20px;
					background: white;
					border-radius: 20px;
					color:#10AF9C;
				}
			}
		}

		
	}

	.por-list{
		.list-top{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 10px 0;
			
			.list-title{
				font-size: 1.2rem;
				
			}
			.add-por{
				width: 2rem;
				height: 2rem;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				background: #10AF9C;
			}
		}
		
		.por-model-content{
			overflow: hidden;
			
			.por-model-slide {
				white-space: nowrap;
				overflow-x: auto;
				// display: flex;
				padding: 10px;
				
				.por-model-item{
					border-radius: 10px;
					width: 28%;
					display: inline-block;
					box-shadow: 1px 2px 5px #d9d9d9;
					margin-right: 10px;
					padding: 10px;
					text-align: center;
					
					.por-xing-img{
						margin: 0 auto;
						width: 3rem;
						height: 3rem;
						line-height: 3rem;
						background: #10AF9C;
						border-radius: 50%;
						font-size: 1.5rem;
						color: white;
						text-align: center;
						margin-bottom: 2px;
					}
					.por-name{
						font-size: 1.2rem;
						margin-bottom: 2px;
					}
					.por-zhi{
						color: #909399;
						font-size: .5rem;
						margin-bottom: 2px;
					}
					.por-status{
						font-size: .5rem;
						padding: 1px 10px;
						border-radius: 20px;
						color: #10AF9C;
						background: #d7ecfe;
					}
				}
				
			}
		}
		
	}
	
	.order{
		.order-title{
			// margin: 0px 20px;
			font-size: 1.2rem;
			display: flex;
			justify-content: space-between;
			
			.addset-box{
				display: flex;
			}
		}
		.icon-box{
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			background: #019583;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 10px;
		}
		.text{
			margin-top: 10px;
			textarea {
				width: 100%;
				height: 10rem;
				padding: 20px;
				border-radius: 10px;
				border: 1px solid #d0d0d0;
			}
		}
		
	}
	
</style>
