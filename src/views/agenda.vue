<template>
	<TopNav>
		<template v-slot:topNavTitle>
			新增待办事项
		</template>
	</TopNav>
	<div class="ZJ-agenda">
		<van-field
		   v-model="value1"
		   placeholder="标题"
			center
		 />
		
		<div class="ZJ-set">
			<div class="ZJ-set-s" >
				<div class="ZJ-set-icon" style="background-color: #DBECEA;">
					<van-icon name="calendar-o" size="40" color="clack" />
				</div>
				<div class="ZJ-set-wen" @click="showtime = true">
					<div class="time-wen-ms" >
						日期时间
					</div>
					<div class="time-wen">
						{{ time }}
					</div>
				</div>
			</div>
			<div class="ZJ-set-s">
				<div class="ZJ-set-icon" style="background-color: #019583;">
					<van-icon name="manager" size="30" color="white" />
				</div>
				<div class="ZJ-set-wen">
					<div class="time-wen-ms">
						对接人员
					</div>
					<div class="time-wen" style="font-size: 1rem;">刘某某</div>
				</div>
			</div>
		</div>
		
		<div class="order">
			<!-- <div class="order-title">
				添加备注
			</div>
			<div class="icon-box">
				<van-icon name="plus" size="20" color="white" />
			</div> -->
		</div>
		<div class="order">
			<div class="order-title">
				事项描述
			</div>
			<div class="text">
				<textarea placeholder="描述内容"></textarea>
			</div>
		</div>
		
		<div class="add-but" @click="Toast('新增成功'),$router.go(-1)">
			确认新增
		</div>
		
	</div>
	
	<van-datetime-picker
	style="position: absolute;bottom: 0;left: 0;right: 0;"
	  v-model="currentDate"
	  v-show="showtime"
	  type="datetime"
	  title="选择完整时间"
	  :min-date="minDate"
	  :max-date="maxDate"
	  @confirm="checktime"
	  @cancel="showtime=false"
	/>
</template>

<script setup>
	import TopNav from '@/components/nav/TopNav.vue'
import { Toast } from 'vant';
	import {ref} from 'vue'
	const value1 = ref('')
	
	const showtime = ref(false)
	
	const date = new Date();
	
	const srtime = (date)=>{
		const year = date.getFullYear(); //getFullYear()代替getYear()
		//月 getMonth()：0 ~ 11
		const month = date.getMonth() + 1;
		//日 getDate()：(1 ~ 31)
		const day = date.getDate();
		//时 getHours()：(0 ~ 23)
		const hour = date.getHours();
		//分 getMinutes()： (0 ~ 59)
		const minute = date.getMinutes();
		//秒 getSeconds()：(0 ~ 59)
		const second = date.getSeconds();
		
		return year + '-' + addZero(month) + '-' + addZero(day) + '     ' + addZero(hour) + ':' + addZero(minute) 
	}
	
	//小于10的拼接上0字符串
	const addZero = (s)=> {
	    return s < 10 ? ('0' + s) : s;
	}
	const time = ref(srtime(date)) 
	
	const currentDate = ref(new Date())
	
	const checktime= (value)=>{
		time.value = srtime(value)
		showtime.value = false
	}

	
	const minDate = ref(new Date())
	const maxDate= ref(new Date(2099, 1, 1))
</script>

<style lang="scss">
	.ZJ-agenda{
		padding: 10px;
		.van-cell{
			
			width: 100%;
			margin: 0 auto;
			height: 50px;
			input { /* WebKit browsers */
				// color: #929495; 
				font-size:1.5rem;
			}
			input::-webkit-input-placeholder { /* WebKit browsers */ 
				color: #929495; 
			}
			border-radius: 5px;
			background:#C6E8E4;
			color: black;
		}
		
		.ZJ-set{
			display: flex;
			justify-content: space-around;
			margin-top: 2rem;
			padding:10px;
			.ZJ-set-s{
				display: flex;
				width: 50%;
				.ZJ-set-icon{
					width: 50%;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 4rem;
					height: 4rem;
				}
				.ZJ-set-wen{
					width: 50%;
					margin-left: 1rem;
					
					.time-wen-ms{
						color: #757575;
						font-size: .5rem;
					}
					.time-wen{
						font-size: .5rem;
					}
				}
			}
		}
		
		.order{
			padding:10px;
			
			.order-title{
				font-size: 1rem;
				
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
					height: 20rem;
					padding: 10px;
					border-radius: 10px;
					border: 1px solid #AAAAAA;
				}
			}
		}
		
		.add-but{
			width: 100%;
			height: 4rem;
			font-size: 1.3rem;
			border-radius: 10px;
			line-height: 4rem;
			text-align: center;
			color: white;
			background: #019583;
		}
		
		
	}
		
</style>