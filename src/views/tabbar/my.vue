<template>
	<div class="ZJ-my-header">
		<div class="ZJ-my-basic">
			<div class="ZJ-my-photo">
				<div class="ZJ-my-photo-img">
					<van-image
					  round
					  width="2rem"
					  height="2rem"
					  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
					/>
				</div>
				<div class="ZJ-my-user">王小明</div>
			</div>
			<div class="ZJ-my-header-right">
				<van-icon name="setting-o" size="20" color="#0AB7A3" @click="$router.push('/setting')"/>
			</div>
		</div>
		<div class="ZJ-my-search">
			 <van-field
			    v-model="value1"
			    left-icon="search"
			    placeholder="搜索"
				center
			  />
		</div>
		
		<div class="msgtab-item">
			<div class="msgtab" v-for="(item,index) in msgTab" :key="index" @click="$router.push(item.path);">
				<div class="msgtab-img">
					<van-icon :name="item.icon" size="20" :color="item.color" />
					</div>
				<div class="msgtab-title">{{ item.value }}</div>
				
			</div>
		</div>
	</div>
	
	<div class="ZJ-my-advert">
		<img src="/src/assets/hotelui/guanggao.png" alt="" style="width: 100%;">
	</div>
	
	<div class="ZJ-my-model-item">
		<van-cell is-link v-for="(item,index) in modelTab" :key="index" @click="tolink(index)" >
		 <template #title>
			 <van-icon :name="item.icon" size="20" :color="item.color" />
		     <span class="custom-title">{{ item.value }}</span>
		   </template>
		</van-cell>
	</div>
	
	
</template>

<script setup>
	import { ref } from 'vue';
	import { Toast } from 'vant';
	import { useRouter } from 'vue-router';
	const router = useRouter();

	const msgTab = ref([
		{
			icon:'envelop-o',
			color:'black',
			value:'消息',
			path:'/message'
		},
		{
			icon:'calendar-o',
			color:'green',
			value:'日历',
			path:'/calendar'
		},
		{
			icon:'completed',
			color:'black',
			value:'待办',
			path:'/work'
		},
		{
			icon:'records',
			color:'black',
			value:'备忘录',
			path:'/memo'
		}
	])
	
	const modelTab = ref([
		// {
		// 	icon:'shopping-cart-o',
		// 	color:'#0AB7A3',
		// 	value:'广场'
		// },
		{
			icon:'share-o',
			color:'#0AB7A3',
			value:'分享客户端',
			path:'toast'
		},
		{
			icon:'warning-o',
			color:'#0AB7A3',
			value:'常见问题',
			path:'/question'
		},
		{
			icon:'setting-o',
			color:'#0AB7A3',
			value:'设置',
			path:'/setting'
		},
		{
			icon:'chat-o',
			color:'#0AB7A3',
			value:'意见反馈',
			path:'/feedback'
		},
		
	])
	
	const value1 = ref()
	
	const tolink = (index)=>{
		if(index== 0){
			Toast('分享客户端成功。')
		}else{
			router.push(modelTab.value[index].path)
		}
	}
</script>

<style lang="scss">
	.ZJ-my-header{
		margin: 20px;
		border-bottom: 1px solid #eef0f1;
		.ZJ-my-basic{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 45px;
		}
		.ZJ-my-photo{
			display: flex;
			align-items: center;
		}
		.ZJ-my-user{
			font-weight: 600;
			margin-left: 10px;
		}
		
		.ZJ-my-search{
			margin-top: 5px;
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
		
		.msgtab-item{
			margin: 20px 0;
			display: flex;
			.msgtab{
				flex: 1;
				display:flex ;
				.msgtab-img{
					
				}
				.msgtab-title{
					margin-left: 10px;
				}
			}
		}
	}
	
	.ZJ-my-advert{
		padding: 10px;
	}
	
	.ZJ-my-model-item{
		.custom-title{
			margin-left: 10px;
		}
	}
	
</style>