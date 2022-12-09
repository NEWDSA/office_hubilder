<template>
	<TopNav>
		<template v-slot:topNavTitle>
			会议室列表
		</template>
		<template v-slot:topNavRight>
			<!-- <van-icon name="weapp-nav" size="25" color="white" /> -->
		</template>
	</TopNav>
	
	<div class="appoint-list">
		<div class="ZJ-appoint-search">
			 <van-field
			    v-model="value1"
			    left-icon="search"
			    placeholder="搜索"
				center
			  />
		</div>
		
		<div class="room-list-item">
			<div class="room-list" v-for="(item,index) in roomList" :key="index">
				<div class="room-img">
					<img :src="item.img" alt="">
				</div>
				<div class="room-info">
					<div class="room-name">{{ item.title }}</div>
					<div class="room-address">
						<van-icon name="location" size="15" color="#808F8D" />
						<span style="margin-left: 5px;">{{ item.addres }}</span>
					</div>
					<div class="room-use">
						<div><img src="/src/assets/hotelui/appuser.png" alt=""></div>
						<span>{{ item.rnum }}</span>
						<div><img src="/src/assets/hotelui/game.png" alt=""></div>
						<div><img src="/src/assets/hotelui/xiyi.png" alt=""></div>
					</div>
					<div class="room-employ-but">
						<van-button color="#01BFA8" @click="toyuyue(index)" plain class="yuyue"  >预约会议</van-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {ref} from 'vue'
	
	import {useRouter} from 'vue-router';
	const router = useRouter()
	
	const value1 = ref('')
	
	const roomList = ref([
		{
			img:'/src/assets/hotelui/huiyi.png',
			title:'多功能会议室',
			addres:'610主会议室,培训室',
			rnum:'18',
		},
		{
			img:'/src/assets/hotelui/huiyi.png',
			title:'中会议室',
			addres:'610主会议室,培训室',
			rnum:'18',
		},
		{
			img:'/src/assets/hotelui/huiyi.png',
			title:'小会议室',
			addres:'610主会议室,培训室',
			rnum:'18',
		},
		{
			img:'/src/assets/hotelui/huiyi.png',
			title:'多功能会议室',
			addres:'610主会议室,培训室',
			rnum:'18',
		}
	])
	
	const toyuyue = (index)=>{
		router.push('/conference/yuyueTime?id='+index)
	}
</script>

<style lang="scss">
	.appoint-list{
		padding: 15px;
		.ZJ-appoint-search{
			.van-cell{
				width: 100%;
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
		
		.room-list-item{
			margin-top: 20px;
			.room-list{
				margin-bottom: 15px;
				box-shadow: 1px 2px 8px #d1d1d1;
				display: flex;
				border-radius: 20px;
				background: #E9F5F5;
				padding: 15px;
				
				.room-img{
					width: 40%;
					height: 160px;
					border-radius: 20px;
					overflow: hidden;
					
					img{
						width: 100%;
						height: 100%;
					}
				}
				.room-info{
					width: 60%;
					padding-left: 20px;
					
					.room-name{
						font-size: 22px;
						font-weight: 600;
						margin-bottom: 10px;
					}
					.room-address{
						color: #A2B3B1;
						font-size: .3rem;
						margin-bottom: 10px;
					}
					.room-use{
						color: black;
						display: flex;
						margin-bottom: 10px;
						
						div{
							width: 1.3rem;
							margin-right: 5px;
							
							img{
								width: 100%;
								// height: 100%;
							}
						}
						
						span{
							margin-right: 5px;
						}
						
					}
					.room-employ-but{
						.yuyue{
							border-radius: 25px;font-size: 30px;border: 2px solid rgb(1, 191, 168);padding: 10px 30px;
							span{
								font-size: 1.2rem;
							}
						}
					}
				}
			}
		}
		
		
		
		
		
	}
	
</style>