<template>
	<TopNav>
		<template v-slot:topNavTitle>
			会议审核
		</template>
	</TopNav>
	
	<div class="ZJ-audit">
		<div class="ZJ-audit-search">
			 <van-field
			    v-model="value1"
			    left-icon="search"
			    placeholder="搜索"
				center
			  />
		</div>
		
		<van-tabs v-model:active="audTabIndex" background="#FAFAFA" color="#C6E8E4">
		  <van-tab :title="item.title" v-for="(item,index) in audTabList" :key="index">
			  
		  </van-tab>
		</van-tabs>
		
		<div class="ZJ-audit-list">
			<div class="ZJ-audit-item" v-for="(item,index) in audTabIndex == 0 ? audListz : audList[audTabIndex-1]" :key="item.id">
				<div class="ZJ-audit-title">
					<div class="audit-id">序号：{{ item.id }}</div>
					<div class="audit-ctime">
						<van-icon name="underway-o" size="16" color="block" style="margin-right: 5px;"/>
						{{ item.ctime }}
					</div>
				</div>
				<div class="ZJ-audit-con">
					<div class="audit-title">{{ item.title }}</div>
					<div class="audit-info">
						<div class="audit-day">会议日期：{{ item.day }}</div>
						<div class="audit-time">会议时间：{{ item.time }}</div>
						<div class="audit-por">预约人：{{ item.por }}</div>
						<div class="audit-address">会议室：{{ item.address }}</div>
					</div>
				</div>
				<div class="ZJ-audit-but">
					<div class="audit-detail" @click="$router.push('/conference/conferDetail')">会议详情</div>
					<div class="audit-set" v-if="item.status == 1">
						<div class="quren"><van-button size="small" type="default" @click="item.status = 2">同意</van-button></div>
						<div class="quxiao"><van-button size="small" type="default" @click="item.status = 0">拒绝</van-button></div>
					</div>
				</div>
				
				<div class="audit-stu" :style="item.status == 1 ? 'background:#FAC127' : item.status == 2 ? 'background:#10AF9C' : 'background:#FD5367'">
					{{ item.status == 1 ? '待审核' : item.status == 2 ? '已通过' : '已拒绝' }}
				</div>
			</div>
		</div>
		
	</div>
</template>

<script setup>
	import {ref} from 'vue'
	
	const value1 = ref('')
	const audTabIndex = ref(0)
	const audTabList = ref([
		{
			title:'全部'
		},
		{
			title:'待审核'
		},
		{
			title:'已通过'
		},
		{
			title:'已拒绝'
		},
		{
			title:'已取消'
		},
		{
			title:'已结束'
		}
	])
	
	const audList = ref([
	[
		{
			id:'01',
			ctime:'2022-09-15 10:35',
			title:'智慧办公项目进度会议',
			day:'2022-09-15',
			time:'9:00~10:00',
			por:'王小明',
			address:'多功能会议室',
			status:'1'
		},
	],[
		{
			id:'02',
			ctime:'2022-09-15 10:35',
			title:'智慧办公项目进度会议',
			day:'2022-09-15',
			time:'9:00~10:00',
			por:'王小明',
			address:'多功能会议室',
			status:'2'
		},
	],[
		{
			id:'03',
			ctime:'2022-09-15 10:35',
			title:'智慧办公项目进度会议',
			day:'2022-09-15',
			time:'9:00~10:00',
			por:'王小明',
			address:'多功能会议室',
			status:'3'
		}
	]])
	
	const audListz = ref([
		{
			id:'01',
			ctime:'2022-09-15 10:35',
			title:'智慧办公项目进度会议',
			day:'2022-09-15',
			time:'9:00~10:00',
			por:'王小明',
			address:'多功能会议室',
			status:'1'
		},
		{
			id:'02',
			ctime:'2022-09-15 10:35',
			title:'智慧办公项目进度会议',
			day:'2022-09-15',
			time:'9:00~10:00',
			por:'王小明',
			address:'多功能会议室',
			status:'2'
		},
		{
			id:'03',
			ctime:'2022-09-15 10:35',
			title:'智慧办公项目进度会议',
			day:'2022-09-15',
			time:'9:00~10:00',
			por:'王小明',
			address:'多功能会议室',
			status:'3'
		}
	])
	
</script>

<style lang="scss">
	.ZJ-audit-search{
		.van-cell{
			width: 95%;
			margin: 10px auto;
			height: 35px;
			input::-webkit-input-placeholder { /* WebKit browsers */ 
				color: #929495; 
			}
			border-radius: 10px;
			background:#C6E8E4;
			color: black;
		}
	}
	
	.ZJ-audit-list{
		padding: 10px;
		
		.ZJ-audit-item{
			// color: #23b7cb;
			font-size: 15px;
			padding: 5px 15px;
			background: #fff;
			border: 2px transparent solid;
			border-radius: 6px;
			position: relative;
			margin-bottom: 10px;
			
			.ZJ-audit-title{
				padding: 10px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #f1f1f1;
				
				.audit-id{
					font-size: 1.2rem;
				}
				.audit-ctime{
					display: flex;
					align-items: center;
					font-size: .6rem;
				}
			}
			
			.ZJ-audit-con{
				padding: 10px;
				
				.audit-title{
					font-size: 1.2rem;
					margin-bottom: 10px;
				}
				
				.audit-info{
					display: flex;
					align-items: center;
					width: 100%;
					flex-wrap: wrap;
					
					.audit-day{
						font-size: .5rem;
						width: 50%;
					}
					.audit-time{
						font-size: .5rem;
						width: 50%;
					}
					.audit-por{
						font-size: .5rem;
						width: 50%;
					}
					.audit-address{
						font-size: .5rem;
						width: 50%;
					}
				}
			}
			
			.ZJ-audit-but{
				padding: 10px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				
				.audit-detail{
					font-size: 1.3rem;
					color: #10AF9C;
				}
				
				.audit-set{
					display: flex;
					align-items: center;
					
					.quren{
						margin-right: 10px;
					}
				}
			}
			
			.audit-stu{
				position: absolute;
				right: -1%;
				top: 30%;
				padding: 2px 10px;
				color: white;
				border-top-left-radius: 20px;
				border-bottom-left-radius: 20px;
			}
			
		}
		.ZJ-audit-item::after{
			content:'';
			position: absolute;
			top: -3px; bottom: -3px;
			left: -3px; right: -3px;
			background: linear-gradient(90deg,#10AF9C, #FAC127);
			border-radius: 7px;
			content: '';
			z-index: -1;
		}
	}
	
</style>