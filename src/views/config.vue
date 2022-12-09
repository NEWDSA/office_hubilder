<template>
	<TopNav>
		<template v-slot:topNavTitle>
			环境
		</template>
	</TopNav>
	
	<div class="ZJ-Hj">
		<div class="ZJ-Hj-model">
			<div class="ZJ-Hj-model-title">
				<div class="ZJ-Hj-model-wen">环境参数</div>
				<div class="ZJ-Hj-model-setting">
					<van-icon name="setting-o" size="20" color="#10AF9C"/>
				</div>
			</div>
			<div class="ZJ-Hj-model-content">
				<div class="ZJ-Hj-model-slide slide">
					<div class="slide-item" v-for="(item,index) in huanList" :key="index" :style="item.stuts==0 ? 'background: #eeffff;' : 'background: #fff8f8;'">
						<div class="item-top">{{ item.danwei }}</div>
						<div class="item-shu" :style="item.stuts==0 ? 'color:#10AF9C' : 'color:#af0000'">{{ item.value }}</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="ZJ-config-reception">
			<!-- <div class="ZJ-config-reception-title">
				<div class="ZJ-config-reception-wen">前台大厅</div>
				<div class="ZJ-config-reception-ic"></div>
			</div> -->
			
			<div class="ZJ-config-reception-content">
				
				<div class="ZJ-config-reception-slide-main">
					<div class="ZJ-config-reception-slide-list" style="width: 46%;" v-for="(item,index) in zhuhallTask" :key="item.id"
					:style="item.check == true ? 'background: url(/src/assets/hotelui/fan2.png) no-repeat;background-size:100% 100%;' : 'background: white;' ">
						<div class="slide-list">
							<div class="slide-list-img">
								<img :src="item.check == true ? item.checkImg : item.moImg" alt="" >
							</div>
							<div class="slide-list-switch">
								<van-switch v-model="item.check" active-color="#1D1E1E" inactive-color="#929393" size="16" :click="tocheck(item.id)" />
							</div>
						</div>
						<div class="slide-name">
							<div class="slide-name-yingwen">
								{{ item.yingwen }}
							</div>
							<div class="slide-name-zhongwen">
								{{ item.zhongwen }}
							</div>
						</div>
						
					</div>
				</div>
				
			</div>
			
		</div>
		
		<div class="ZJ-door-model">
			<!-- <div class="ZJ-door-model-title">
				快速开门
			</div> -->
			<div class="ZJ-door-model-content">
				<div class="ZJ-door-yewu-menu-item">
					<div class="ZJ-door-yewu-menu" v-for="(item,index) in openDoorList" :key="index"  
					:style="openDoorList[index].stuts == 0 ? 'background:white;color:#32CDB9;' : 'background:#32CDB9;color:white;'"
					@click="openDoorList[index].stuts == 0 ? openDoorList[index].stuts = 1 : openDoorList[index].stuts = 0">
						<div class="ZJ-door-menu-stuts" :style="item.stuts == 0 ? 'background:#D1E6E4;' : 'background:#c6e1e0;'" >
							<img :src="item.stuts == 0 ? '/src/assets/hotelui/home2.png' : '/src/assets/hotelui/home.png'" alt="">
							<!-- {{ item.stuts == 0 ? '开门' : '已开' }} -->
						</div>
						<div class="ZJ-door-menu-value" >
							{{ item.value }}
						</div>
						<div class="ZJ-door-menu-value-fu" 
						:style="openDoorList[index].stuts == 0 ? 'color:#FF9518;' : 'color:white;'">
							{{ openDoorList[index].stuts == 0 ? 'Closed' : 'Opened' }}
						</div>
						<div class="ZJ-door-menu-stuts" :style="item.stuts == 0 ? 'background:#ffddb3;' : 'background:#c6e1e0;'" >
							<img :src="item.stuts == 0 ? '/src/assets/hotelui/user2.png' : '/src/assets/hotelui/user.png'" alt="">
							<!-- {{ item.stuts == 0 ? '开门' : '已开' }} -->
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script setup>
	import {ref} from 'vue';
	
	// 环境
	const huanList = ref([
		{
			danwei: '℃',
			value: 24.5,
			stuts:0,
		},
		{
			danwei: '% ',
			value: 56.0,
			stuts:0,
		},
		{
			danwei: 'ppm',
			value: 514,
			stuts:1,
		},
		{
			danwei: 'mmHg',
			value: 754.8,
			stuts:0,
		},
	]);
	
	// 主要滑块
	const zhuhallTask = ref([
		{
			id:'1',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'背景墙灯',
			valueImg:'',
			value:'',
			huaValue:100,
			checkValue:false,
			checkMore:false,
			checkHua:true,
		},
		{
			id:'2',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Fan',
			zhongwen:'风扇',
			valueImg:'',
			value:'',
			huaValue:100,
			checkValue:false,
			checkMore:false,
			checkHua:false,
		},
		{
			id:'3',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'背景墙灯',
			valueImg:'',
			value:'',
			huaValue:100,
			checkValue:false,
			checkMore:false,
			checkHua:false,
		},
		{
			id:'4',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Fan',
			zhongwen:'风扇',
			valueImg:'',
			value:'',
			huaValue:100,
			checkValue:false,
			checkMore:false,
			checkHua:false,
		},
		{
			id:'5',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'背景墙灯',
			valueImg:'',
			value:'',
			huaValue:100,
			checkValue:false,
			checkMore:false,
			checkHua:false,
		},
		{
			id:'6',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Fan',
			zhongwen:'风扇',
			valueImg:'',
			value:'',
			huaValue:100,
			checkValue:false,
			checkMore:false,
			checkHua:false,
		},
	]);
	const tocheck = (index) => {
		// 默认情况下点击选项时不会自动收起
		// 可以通过 close-on-click-action 属性开启自动收起
		
	};
	
	const openDoorList = ref([
		{
			stuts:'0',
			value:'公司大门',
		},
		{
			stuts:'0',
			value:'直播间门',
		},
	])
	
</script>

<style lang="scss">
	.ZJ-Hj{
		padding: 10px;
		.ZJ-Hj-model{
			border-radius: 15px;
			background: #D3E8E6;
			padding: 10px 20px;
			margin: 10px 0;
			.ZJ-Hj-model-title{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.ZJ-Hj-model-wen{
					font-size: 20px;
				}
				.van-cell{
					width: 55%;
					// margin: 0 auto;
					height: 35px;
					input::-webkit-input-placeholder { /* WebKit browsers */ 
						color: #929495; 
					}
					border-radius: 20px;
					background:#C6E8E4;
					color: black;
				}
			}
			
			.ZJ-Hj-model-content{
				margin: 10px 0;
				overflow:hidden;
				.ZJ-Hj-model-slide{
					white-space: nowrap;
					overflow-x:auto;
					display: flex;
					justify-content: space-between;
					.slide-item{
						width: 23%;
						height: 50px;
						padding: 5px;
						border-radius: 5px;
						// background: #eeffff;
						.item-top{
							color: #bcbcbc;
							font-size: .3rem;
						}
						.item-shu{
							font-size: 1.2rem;
							font-weight: 600;
						}
					}
					
				}
			}
		}
		
		.ZJ-config-reception{
			// border-radius: 20px;
			padding: 15px;
			
			.ZJ-config-reception-title{
				display: flex;
				justify-content: space-between;
				
				.ZJ-config-reception-wen{
					font-size: 1.4rem;
				}
				.ZJ-config-reception-ic{
					
				}
			}
			
			.ZJ-config-reception-content{
				overflow:hidden;
				
				.ZJ-config-reception-slide{
					white-space: nowrap;
					overflow-x:auto;
				}
				
				.ZJ-config-reception-slide-main{
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;
					.ZJ-config-reception-slide-list{
						border-radius: 10px;
						box-shadow: 1px 2px 5px #c6c6c6;
						padding: 10px;
						margin:10px 0;
						
						.slide-list{
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin-bottom: 20px;
							
							.slide-list-img{
								width: 2.5rem;
								height: 2.5rem;
								
								img{
									width: 100%;
								}
							}
							
							.slide-name-yingwen{
								font-size: 0.1rem;
							}
							.slide-name-zhongwen{
								font-size: 1rem;
							}
							
						}
						
					}
				}
			}
			
		}
		
		
		.ZJ-door-model{
			margin-bottom: 20px;
			padding: 10px;
			.ZJ-door-model-title{
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
					flex-wrap: wrap;
					.ZJ-door-yewu-menu{
						width: 47%;
						padding: 1rem;
						text-align: center;
						background: white;
						box-shadow: 2px 5px 10px #d4d4d4;
						border-radius: 15px;
						.ZJ-door-menu-img{
							background: #0AB7A3;
							border-radius:10px ;
							height: 50px;
							width:50px;
							display: flex;
							justify-content: center;
							align-items: center;
							margin: 0 auto;
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
							height: 3rem;
							border-radius: 5px;
							display: flex;
							justify-content: center;
							align-items: center;
							img{
								width: 60%;
							}
						}
					}
				}
				
				
				
				
			}
		}
	}
</style>