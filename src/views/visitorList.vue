<template>
	<TopNav >
		<template v-slot:topNavTitle>
			访客列表
		</template>
		<template v-slot:topNavRight>
			<div style="color: white;" @click="toAddVist">新增访客</div>
		</template>
	</TopNav>
	
	<div class="ZJ-visitorList">
		<div class="ZJ-visitorList-search">
			 <van-field
			    v-model="value1"
			    left-icon="search"
			    placeholder="搜索"
				center
			  />
		</div>
		
		<div class="ZJ-visitorList-item" v-for="(item,index) in vistList" :key="item.id">
			<div class="list-info">
				<div class="info-img">
					<img :src="item.img" alt="">
				</div>
				<div class="info-info">
					<div class="info-name">
						{{ item.name }}
					</div>
					<div class="info-company">
						{{ item.company }}
					</div>
					<div class="info-tel">
						{{ item.tel }}
					</div>
				</div>
				<div class="info-state" >
					<div class="state-wen" :style="item.status == 0 ? 'background:#E6AC11': item.status == 1 ? 'background:#10D772': 'background:#E6AC11'">
						{{ item.status == 0 ? '未到访': item.status == 1 ? '已到访': '未知'}}
					</div>
				</div>
			</div>
			<div class="list-time">
				<div class="list-time-sf">
					<van-icon name="underway-o" size="20" color="#929495" />
					<div class="value">{{ item.timeSf }}</div>
				</div>
				<div class="list-time-nyr">
					<van-icon name="calendar-o" size="20" color="#929495" />
					<div class="value">{{ item.timeNyr }}</div>
				</div>
			</div>
			<div class="list-note">
				<van-field
				   v-model="item.note"
				   placeholder="备注"
					center
					readonly
				 />
			</div>
			<div class="list-operate" v-if="item.status == 0" style="justify-content: space-between;">
				<van-button color="#10AF9C" class="list-operate-dengji" @click="item.status=1">登 记</van-button>
				<van-button color="#ECF4F3" class="list-operate-quxiao" @click="vistList.splice(index,1)">取 消</van-button>
				<van-button color="#ECF4F3" class="list-operate-xiugai" @click="setvistit(index)">修 改</van-button>
			</div>
			<div class="list-operate" v-if="item.status == 1" style="justify-content: flex-end;">
				<van-button color="#ECF4F3" class="list-operate-chakan">查 看</van-button>
			</div>
			
		</div>
		
	</div>
	
	<div class="component-container" v-if="detailShow">
		<visitorAdd :vistDetail="vistDetail" @backclickk="backclickke"></visitorAdd>
	</div>

</template>

<script setup>
	import {ref} from 'vue'
	import visitorAdd from './visitorAdd.vue'
	import {useRouter} from 'vue-router';
	const router = useRouter()
	
	const detailShow = ref(false);
	const vistDetail = ref();
	const value1 = ref();
	
	const vistList = ref([
		{
			id:1,
			img:'/src/assets/hotelui/user.png',
			name:'王先生',
			company:'广东智联蔚来科技有限公司',
			tel:'+86 18812345678',
			status:'0',
			timeSf:'01:32 PM',
			timeNyr:'February 19,2020',
			note:'签合同',
		},
		{
			id:2,
			img:'/src/assets/hotelui/user.png',
			name:'王先生',
			company:'广东智联蔚来科技有限公司',
			tel:'+86 18812345678',
			status:'1',
			timeSf:'01:32 PM',
			timeNyr:'February 19,2020',
			note:'面试',
		},
		{
			id:3,
			img:'/src/assets/hotelui/user.png',
			name:'王先生',
			company:'广东智联蔚来科技有限公司',
			tel:'+86 18812345678',
			status:'1',
			timeSf:'01:32 PM',
			timeNyr:'February 19,2020',
			note:'面试',
		}
	])
	
	const toAddVist = ()=>{
		router.push('/visitorAdd')
	}
	
	const setvistit = (index)=>{
		vistDetail.value = vistList.value[index];
		detailShow.value = true
	}

	const backclickke = ()=>{
		detailShow.value = false
	}
</script>

<style lang="scss">
	.ZJ-visitorList{
		background: #EAF4F4;
		padding: 10px;
		min-height: 90vh;
		.ZJ-visitorList-search{
			margin-top: 5px;
			margin-bottom: 20px;
			.van-cell{
				width: 100%;
				margin: 0 auto;
				height: 35px;
				input::-webkit-input-placeholder { /* WebKit browsers */ 
					color: #929495; 
				}
				border-radius: 10px;
				background:#C6E8E4;
				color: black;
			}
		}
		
		.ZJ-visitorList-item{
			background: #F6FCFB;
			border-radius: 5px;
			padding: 20px;
			margin-bottom: 10px;
			.list-info{
				display: flex;
				
				.info-img{
					width: 20%;
					img{
						width: 100%;
					}
				}
				
				.info-info{
					margin-left: 10px;
					width: 60%;
					.info-name{
						font-size: 1.8rem;
					}
					.info-company{
						font-size: .5rem;
						color:#929495;
					}
					.info-tel{
						font-size: .5rem;
						color:#929495;
					}
				}
				
				.info-state{
					width: 20%;
					.state-wen{
						width: 100%;
						height: 1.6rem;
						line-height: 1.6rem;
						text-align: center;
						border-radius: 20px;
						color: white;
					}
				}
			}
			
			.list-time{
				display: flex;
				align-items: center;
				margin-top: 10px;
				.list-time-sf{
					display: flex;
					align-items: center;
					
					.value{
						color: #929495;
						margin-left: .5rem;
					}
				}
				
				.list-time-nyr{
					display: flex;
					align-items: center;
					margin-left: 2rem;
					
					.value{
						color: #929495;
						margin-left: .5rem;
					}
				}
			}
			
			.list-note{
				margin: 20px 0;
				.van-cell{
					width: 100%;
					margin: 0 auto;
					height: 35px;
					input::-webkit-input-placeholder { /* WebKit browsers */ 
						color: #929495; 
					}
					border-radius: 10px;
					background:#ECF4F3;
					color: black;
				}
			}
			
			.list-operate{
				display: flex;
				
				.van-button{
					height: 2.8rem;
					width: 30%;
					border-radius: 8px;
					
					.van-button__content{
						color: #333333;
						span{
							font-size: 1.1rem;
						}
					}
				}
			}
			
		}
		
	}
	
</style>