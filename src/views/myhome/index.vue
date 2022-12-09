<template>
	<TopNav>
		<template v-slot:topNavTitle>
			我的房间
		</template>
	</TopNav>
	
	<div class="ZJ-myhome-header">
		<div class="ZJ-myhome-header-more">
			<div class="ZJ-myhome-menu-box">
				<div class="ZJ-myhome-menu" >
					<div class="value">我的房间</div>
				</div>
			</div>
			
			<div class="ZJ-myhome-menu-more">
				<van-icon name="apps-o" color="white" size="30" @click="showZhe = true" />
			</div>
		</div>
		
		<div class="" style="display: flex;color: white;margin: 20px 0;">
			<div style="margin-right: 10px;padding-right: 10px;border-right: 1px solid white;">房间已锁</div>
			<div>3008</div>
		</div>
	</div>
	
	<div class="ZJ-myhome">
		<div class="ZJ-myhome-model">
			<div class="ZJ-myhome-model-title">
				<div class="ZJ-myhome-model-wen">环境参数</div>
			</div>
			<div class="ZJ-myhome-model-content">
				<div class="ZJ-myhome-model-slide slide">
					<div class="slide-item" v-for="(item,index) in huanList" :key="index" :style="item.stuts==0 ? 'background: #eeffff;' : 'background: #fff8f8;'">
						<div class="item-top">{{ item.danwei }}</div>
						<div class="item-shu" :style="item.stuts==0 ? 'color:#10AF9C' : 'color:#af0000'">{{ item.value }}</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="ZJ-myhome-reception">
			<div class="ZJ-myhome-reception-title">
				<div class="ZJ-myhome-reception-wen">照明控制</div>
				<div class="ZJ-myhome-reception-ic"></div>
			</div>
			
			<div class="ZJ-myhome-reception-content">
				
				<div class="ZJ-myhome-reception-slide slide">
					<div class="ZJ-myhome-reception-slide-list" style="width: 45%;display: inline-block" v-for="(item,index) in hallTask" :key="item.id"
					:style="item.check == true ? 'background: -webkit-linear-gradient(top,#65E5D5,#23C7B3);' : 'background: white;' ">
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
		<div class="ZJ-myhome-reception-slide-main">
			<div class="ZJ-myhome-reception-slide-list" style="width: 48%;" v-for="(item,index) in zhuhallTask" :key="item.id"
			:style="item.check == true ? 'background: -webkit-linear-gradient(top,#65E5D5,#23C7B3);' : 'background: white;' ">
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
				
				<!-- 数字，绝对定位 -->
				<div style="color: black;position: absolute;right: 10%;bottom: 7%;z-index: 99;pointer-events: none;" v-if="item.checkHua" 
				:style="item.check == false ? 'color:#b3b3b3':''">{{ item.huaValue }}%</div> 
				<!-- 滑动 -->
				<van-slider v-model="item.huaValue" active-color="#FF9518" bar-height="20" v-if="item.checkHua" 
				:disabled="item.check == false" style="position: relative;overflow: hidden">
				  <template #button>
				    <div class="custom-button" style="display: flex;" :style="item.huaValue <8 ? 'margin-left: 1.5rem;' : 'margin-left: -1.5rem;'"> 
					<van-icon name="sort" size="12" color="white" style="transform: rotate(90deg);"/></div>
				  </template>
				</van-slider>
				
			</div>
		</div>
		
	</div>
	
	
	<!-- 遮罩层 -->
	<van-overlay :show="showZhe" @click="showZhe = false" z-index="999" :custom-style="{background:'rgba(255,255,255)'}">
		<div class="wrapper" @click="showZhe = false">
			<div class="block" @click.stop>
				<div class="more-task-item">
					<div class="more-task">
						<img src="@/assets/hotelui/logo.png" alt="" @click="showZhe = false">
					</div>
					<div class="more-task">
						<img src="@/assets/hotelui/logo2.png" alt="" @click="showZhe = false">
					</div>
					<div class="more-task">
						<van-icon name="plus" size="35" color="white" @click="showZhe = false"/>
					</div>
				</div>
			</div>
		</div>
	</van-overlay>

</template>

<script setup>
	import {
		ref,nextTick 
	} from 'vue';
	
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
	
	// 窗帘。。。滑块
	const hallTask = ref([
		{
			id:'1',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'背景墙灯'
		},
		{
			id:'2',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'背景墙灯'
		},
		{
			id:'3',
			moImg: '/src/assets/hotelui/chuanglian_no.png',
			checkImg: '/src/assets/hotelui/chuanglian_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'背景墙灯'
		},
	]);
	const tocheck = (index) => {
		// 默认情况下点击选项时不会自动收起
		// 可以通过 close-on-click-action 属性开启自动收起
		
	};
	
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
			checkImg: '/src/assets/hotelui/kongtiao_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'空调',
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
			checkImg: '/src/assets/hotelui/kongtiao_yes.png',
			check: false,
			yingwen:'Wall light',
			zhongwen:'空调',
			valueImg:'',
			value:'',
			huaValue:100,
			checkValue:false,
			checkMore:false,
			checkHua:false,
		},
	]);
	
	// 遮罩层
	const showZhe = ref(false)
	
</script>

<style lang="scss">
	.ZJ-myhome-header {
		padding: 20px;
		background: url('/src/assets/hotelui/by-bg.png');
		background-size: 100% 100%;
		

		.ZJ-myhome-header-more {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.ZJ-myhome-menu-box {
				display: flex;

				.ZJ-myhome-menu {
					margin-right: 10px;
					padding: 5px 10px 5px 20px;
					border-radius: 10px;
					display: flex;
					align-items: center;
					justify-content: center;
					background: #E4FFFC;

					.value {
						font-size: 1.1rem;
						margin-right: 0.5rem;
						color: #008172;
					}

					.icon {
						transform: rotate(90deg);
					}
				}

			}
		}
		.ZJ-myhome-header-tab{
			width: 100%;
			height: 3rem;
			margin-top: 20px;
			.van-tabs__wrap{
				overflow: inherit;
				width: 100%;
				border-radius: 10px;
				height: 3rem;
				.van-tabs__nav{
					height: 3rem;
					border-radius: 10px;
					overflow: inherit;
					margin: 0;
					.van-tabs__nav--card{
						height: 3rem;
					}
					.van-tab{
						border: 0;
						height: 3rem;
					}
					.van-tab--active{
						border-radius: 9px;
					}
				}
				
			}
		}
	}
	
	.ZJ-myhome{
		padding: 20px;
		.ZJ-myhome-model{
			border-radius: 15px;
			border: 1px solid #f1f1f1;
			padding: 10px 20px;
			.ZJ-myhome-model-title{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.ZJ-myhome-model-wen{
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
			
			.ZJ-myhome-model-content{
				overflow:hidden;
				.ZJ-myhome-model-slide{
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
				.slide::-webkit-scrollbar{
				    width:2px;
				    height:2px;
				    background-color: #07CFB8;
				}
				.slide::-webkit-scrollbar-track{
				    background: #213147;
				    border-radius:2px;
				}
				.slide::-webkit-scrollbar-thumb{
				    background: #07CFB8;
				    border-radius:2px;
				}
				.slide::-webkit-scrollbar-thumb:hover{
				    background: #07CFB8;
				}
				.slide::-webkit-scrollbar-corner{
				    background: #07CFB8;
				}
			}
		}
		
		.ZJ-myhome-reception{
			background: #D3E8E6;
			border-radius: 20px;
			padding: 15px;
			margin-top: 20px;
			.ZJ-myhome-reception-title{
				display: flex;
				justify-content: space-between;
				
				.ZJ-myhome-reception-wen{
					font-size: 1.4rem;
				}
				.ZJ-myhome-reception-ic{
					
				}
			}
			
			.ZJ-myhome-reception-content{
				overflow:hidden;
				
				.ZJ-myhome-reception-slide{
					white-space: nowrap;
					overflow-x:auto;
					
					.ZJ-myhome-reception-slide-list{
						border-radius: 10px;
						box-shadow: 2px 5px 10px #888888;
						padding: 10px;
						margin: 0 10px 15px 0px;
						
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
						}
						.slide-name-yingwen{
							font-size: 0.1rem;
						}
						.slide-name-zhongwen{
							font-size: 1rem;
						}
					}
				}
				
				// 滚动条
				.slide::-webkit-scrollbar{
				    width:2px;
				    height:2px;
				    background-color: #07CFB8;
				}
				.slide::-webkit-scrollbar-track{
				    background: #213147;
				    border-radius:2px;
				}
				.slide::-webkit-scrollbar-thumb{
				    background: #07CFB8;
				    border-radius:2px;
				}
				.slide::-webkit-scrollbar-thumb:hover{
				    background: #07CFB8;
				}
				.slide::-webkit-scrollbar-corner{
				    background: #07CFB8;
				}
			}
			
		}
		
		.ZJ-myhome-reception-slide-main{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			
			.ZJ-myhome-reception-slide-list{
				border-radius: 10px;
				box-shadow: 2px 5px 10px #888888;
				padding: 10px;
				margin-top:20px;
				
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
	
	.custom-button {
		width: 20px;
		color: #fff;
		font-size: 10px;
		line-height: 18px;
		text-align: center;
		// background-color: #ee0a24;
		border-radius: 100px;
	}
	
	// 遮罩层
	.wrapper {
		display: flex;
		align-items: center;
		justify-content:flex-end;
		height: 100%;
	}
	
	.block {
		margin-left: 0;
		width: 80px;
		height: 100%;
		background-color: #DDFFFB;
		
		.more-task-item{
			padding-top: 5rem;
			.more-task{
				width: 3.5rem;
				height: 3.5rem;
				margin: 2rem auto;
				background: #35B9A9;
				border-radius: 5px;
				display: flex;
				align-items: center;
				justify-content: center;
				img{
					width: 2.5rem;
					height: 2.5rem;
				}
			}
		}
		
	}
	
</style>
