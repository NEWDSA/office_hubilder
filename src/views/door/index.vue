<template>
	<TopNav>
		<template v-slot:topNavTitle>
			智能门禁
		</template>
	</TopNav>
	
	<div class="door-header">
		<div class="title-box">
			<div class="door-header-title">智能门禁系统</div>
			<div class="door-header-subhead">让建筑更智慧    让工作更高效</div>
		</div> 
		<div class="sao">
			<van-icon name="scan" size="25px" @click="Toast('点击扫一扫')"/>
		</div>
	</div>
	
	<div class="ZJ-door-tab-box">
		
		<div class="ZJ-door-tab-box-tabItem">
			<div class="ZJ-door-tab-item">
				<div class="ZJ-door-tab"  v-for="(item,index) in tab" :key="index" @click="Toast('点击门禁tab')">
					<div class="ZJ-door-tab-img">
						<img :src="item.icon" alt="">
						<!-- <van-icon :name="item.icon" size="25" color="white" /> -->
					</div>
					<div class="ZJ-door-tab-value" >
						{{ item.value }}
					</div>
				</div>
			</div>
			
			<div class="ZJ-door-jor">
				<div class="ZJ-door-jor-title">通告</div>
				<div class="ZJ-door-jor-icon"></div>
				<div class="ZJ-door-jor-item">智慧酒店应用2 .0产品已经上线公测. . .</div>
			</div>
			
		</div>
		
		<div class="ZJ-door-model" style="padding-top: 3rem;">
			<div class="ZJ-door-model-title">
				业务分类
			</div>
			<div class="ZJ-door-model-content">
				<div class="ZJ-door-yewu-tab-item">
					<div class="ZJ-door-yewu-tab" v-for="(item,index) in yewuTab" :key="index" :class="yewuTabIndex == index ? 'ZJ-door-yewu-tab-check' : ''"
					@click="yewuTabIndex = index">
						{{ item.value }}
					</div>
				</div>
				
				<div class="ZJ-door-yewu-menu-item">
					<div class="ZJ-door-yewu-menu" v-for="(item,index) in yewuMenuList" :key="index" @click="Toast('点击业务分类tab')">
						<div class="ZJ-door-menu-img">
							<!-- <van-icon :name="item.icon" size="25" color="white" /> -->
							<img :src="item.icon" alt="">
						</div>
						<div class="ZJ-door-menu-value" >
							{{ item.value }}
						</div>
						<div class="ZJ-door-menu-value-fu" >
							{{ item.fValue }}
						</div>
					</div>
				</div>
				
			</div>
		</div>
		
		<div class="ZJ-door-model">
			<div class="ZJ-door-model-title">
				快速开门
			</div>
			<div class="ZJ-door-model-content">
				<div class="ZJ-door-yewu-menu-item">
					<div class="ZJ-door-yewu-menu" v-for="(item,index) in openDoorList" :key="index" 
					@click="openDoorList[index].stuts == 0 ? openDoorList[index].stuts = 1 : openDoorList[index].stuts = 0">
						<div class="ZJ-door-menu-value" >
							{{ item.value }}
						</div>
						<div class="ZJ-door-menu-value-fu" >
							{{ item.value }}
						</div>
						<div class="ZJ-door-menu-stuts" :style="item.stuts == 0 ? 'background:#05CDB6' : 'background:#071E40;color:white;'" >
							{{ item.stuts == 0 ? '开门' : '已开' }}
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script setup>
	import { Toast } from "vant";
import {ref} from "vue"

	
	const tab = ref([
		{
			icon:'/src/assets/hotelui/erweima.png',
			value:'二维码开门',
			path:'/visitorList'
		},
		{
			icon:'/src/assets/hotelui/kaoqin.png',
			value:'考勤签到',
			path:'/myHome'
		},
		{
			icon:'/src/assets/hotelui/dengji.png',
			value:'访客登记'
		},
		{
			icon:'/src/assets/hotelui/yaoqing.png',
			value:'访客邀请'
		},
	])
	
	const yewuTabIndex = ref(0)
	const yewuTab = ref([
		{
			value:'门禁',
		},
		{
			value:'考勤',
		},
		{
			value:'停车场'
		},
		{
			value:'访客'
		},
		{
			value:'消费'
		},
	])
	
	
	const yewuMenuList = ref([
		{
			icon:'/src/assets/hotelui/erweima.png',
			value:'二维码开门',
			fValue:'Qd  code'
		},
		{
			icon:'/src/assets/hotelui/kaoqin.png',
			value:'刷脸开门',
			fValue:'Face swiping'
		},
		{
			icon:'/src/assets/hotelui/dengji.png',
			value:'远程开门',
			fValue:'Remotely'
		},
	])
	
	
	const openDoorList = ref([
		{
			stuts:'0',
			value:'公司大门',
		},
		{
			stuts:'0',
			value:'多功能会议室',
		},
		{
			stuts:'0',
			value:'中会议室',
		},
	])
	
	// const doorTab = (index)=>{
	// 	openDoorListIndex.value=index
	// 	openDoorList._rawValue[index].stuts == 0 ? openDoorList._rawValue[index].stuts = 1 : openDoorList._rawValue[index].stuts = 0
		
	// }
	
</script>

<style lang="scss">
	.door-header{
		width: 100%;
		height: 15rem;
		background-image: linear-gradient(180deg, #2ECCB7,#93EADF);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		
		.title-box{
			.door-header-title{
				color: black;
				font-size: 1.6rem;
				font-weight: 600;
			}
			.door-header-subhead{
			}
		}
		.sao{
			
		}
	}
	
	.ZJ-door-tab-box{
		padding: 10px;
		background: #D3E8E6;
		min-height: 60vh;
		.ZJ-door-tab-box-tabItem{
			border-radius: 10px;
			margin-top: -40px;
			box-shadow: 2px 5px 10px #c3c3c3;
			background: white;
			.ZJ-door-tab-item{
				padding-top: 20px;
				width: 100%;
				display: flex;
				border-bottom: 1px solid #f5f5f5;
				
				.ZJ-door-tab{
					width: 25%;
					text-align: center;
					margin-bottom: 15px;
					
					.ZJ-door-tab-img{
						// background: #0AB7A3;
						border-radius:10px ;
						height: 50px;
						width:50px;
						display: flex;
						justify-content: center;
						align-items: center;
						margin: 0 auto;
						
						img{
							width: 100%;
						}
					}
					.ZJ-door-tab-value{}
				}
			}
			
			.ZJ-door-jor{
				display: flex;
				align-items: center;
				padding:10px;
				.ZJ-door-jor-title{
					
				}
				.ZJ-door-jor-icon{
					width: 2rem;
					height: 1.2rem;
					text-align: center;
					background: #35CEB9;
					border-radius: 3px;
					transform: skewX(-10deg);
					margin: 0 5px;
				}
				.ZJ-door-jor-item{
					color: #BBBBBB;
				}
			}
			
		}
	}
	
	.ZJ-door-model{
		margin-bottom: 20px;
		.ZJ-door-model-title{
			margin-bottom: 10px;
			font-size: 1.2rem;
			font-weight: 600;
		}
		.ZJ-door-model-content{
			.ZJ-door-yewu-tab-item{
				margin: 10px 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.ZJ-door-yewu-tab{
					width: 18%;
					text-align: center;
					height: 1.5rem;
					line-height: 1.5rem;
					border-radius: 5px;
				}
				.ZJ-door-yewu-tab-check{
					color: white;
					background: #05CDB6;
				}
				
			}
			
			.ZJ-door-yewu-menu-item{
				display: flex;
				justify-content:space-between;
				
				.ZJ-door-yewu-menu{
					width: 32%;
					padding: 1rem;
					text-align: center;
					background: white;
					box-shadow: 2px 5px 10px #d4d4d4;
					border-radius: 15px;
					.ZJ-door-menu-img{
						// background: #0AB7A3;
						border-radius:10px ;
						height: 50px;
						width:50px;
						display: flex;
						justify-content: center;
						align-items: center;
						margin: 0 auto;
						
						img{
							width: 100%;
						}
					}
					.ZJ-door-menu-value{
						font-size: 1rem;
					}
					.ZJ-door-menu-value-fu{
						font-size: .5rem;
						color:#D3D3D3;
						margin: 10px 0;
					}
					.ZJ-door-menu-stuts{
						margin:0 auto;
						width: 3rem;
						text-align: center;
						height: 1.5rem;
						line-height: 1.5rem;
						border-radius: 5px;
					}
				}
			}
			
			
			
			
		}
	}
</style>