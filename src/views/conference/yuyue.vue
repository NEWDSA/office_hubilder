<template>
	<TopNav>
		<template v-slot:topNavTitle>
			多功能会议室预约
		</template>
		<template v-slot:topNavRight>
			<!-- <van-icon name="weapp-nav" size="25" color="white" /> -->
		</template>
	</TopNav>

	<div class="yuyue" style="padding: 15px;">
		<div style="color: #10AF9C;font-weight: 600;">TODAY</div>
		<div class="" style="display: flex;align-items: center;;justify-content: space-between;">
			<div class="time" style="font-size: 1.3rem;font-weight: 600;">{{ timeArry.timeText }},{{ timeArry.week }}
			</div>
			<div class="icon"
				style="padding: 5px;border-radius: 5px;border: 1px solid #d3d3d3;display: flex;align-items: center;justify-content: center;">
				<van-icon name="plus" size="20" color="#7d7d7d"
					@click="$router.push('/conference/addConference?id=' + objId)" />
			</div>
		</div>

		<div class="cla-list">
			<div class="cla-item" v-for="(item, index) in clList" :key="index" @click="clIndex = index">
				<div class="ying">{{ item.ying }}</div>
				<div class="zhong" :style="clIndex == index ? 'background:#10AF9C;color:white' : ''">{{ item.zhong }}
				</div>
			</div>

		</div>

		<div style="padding: 1rem;background: #DFFFFF;position: relative;">
			<div v-for="(item, index) in timeList" :key="index"
				style="margin-bottom: 3rem;display: flex;align-items: center;height:2rem;">
				<div style="width:15%;color: #9B9B9B;font-size: 1.1rem;">{{ item.title }}</div>
				<div class="bor-bottom" style=""></div>
			</div>

			<div class="beiwang-box" v-for="(item, index) in beiList" :key="index"
				:style="'top:' + timeDifferencePo('9:00', item.startTime) + 'rem;height:' + timeDifference(item.startTime, item.endTime) + 'rem;'">
				<div class="title"> {{ item.title }}</div>
				<div class="address"><van-icon name="clock-o" size="20" color="black" style="margin-right:5px;"/>{{ item.address }}</div>
				<div class="time"><van-icon name="clock-o" size="20" color="black" style="margin-right:5px;"/>{{ item.time }}</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { formatDate } from '@/util/index.js'

const objId = ref('')
// nowtime
const timeArry = ref(formatDate(new Date(), 1))
// console.log(timeArry)

const clIndex = ref('2')
const clList = ref([
	{
		ying: 'SUN',
		zhong: 4
	},
	{
		ying: 'MON',
		zhong: 5
	},
	{
		ying: 'TUE',
		zhong: 6
	},
	{
		ying: 'WED',
		zhong: 7
	},
	{
		ying: 'THU',
		zhong: 8
	},
	{
		ying: 'FRI',
		zhong: 9
	},
	{
		ying: 'SAT',
		zhong: 10
	}
])

const timeList = reactive([
	{
		title: '9:00',
	},
	{
		title: '10:00',
	},
	{
		title: '11:00',
	},
	{
		title: '12:00',
	},
	{
		title: '13:00',
	},
	{
		title: '14:00',
	},
	{
		title: '15:00',
	},

])

const beiList = reactive([
	{
		startTime: '9:30',
		endTime: '11:00',
		title:'智慧办公项目进度会议',
		address:'多功能会议室',
		time:'9:30~11:00'
	},
	{
		startTime: '13:00',
		endTime: '14:30',
		title:'智慧办公项目进度会议',
		address:'多功能会议室',
		time:'9:30~11:00'
	}
])


//计算时间差计算高度（相差分钟）
function timeDifference(startTime, endTime) {
	var start1 = startTime.split(":");
	var startAll = parseInt(start1[0] * 60) + parseInt(start1[1]);

	var end1 = endTime.split(":");
	var endAll = parseInt(end1[0] * 60) + parseInt(end1[1]);
	// 计算经过的小时
	var a = (endAll - startAll) / 60
	// 小时的高度+经过多少小时的div高度
	return Number(endAll - startAll) * Number(0.05) + 2 * a

}

//计算时间差计算postion高度（相差分钟）
function timeDifferencePo(startTime, endTime) {
	var start1 = startTime.split(":");
	var startAll = parseInt(start1[0] * 60) + parseInt(start1[1]);

	var end1 = endTime.split(":");
	var endAll = parseInt(end1[0] * 60) + parseInt(end1[1]);

	// 计算经过的小时
	var a = (endAll - startAll) / 60
	a = Number(Math.ceil(a * 10) * 1 / 10) + 1
	// 小时的高度+经过多少小时的div高度
	return Number(endAll - startAll) * Number(0.05) + 2 * a

}

const shifunction = () => {
	var url = decodeURI(window.location.search); //?id="123456"&name="www";
	var object = {};
	if (url.indexOf("?") != -1)//url中存在问号，也就说有参数。  
	{
		var str = url.substr(1);  //得到?后面的字符串
		var strs = str.split("&");  //将得到的参数分隔成数组[id="123456",name="www"];
		for (var i = 0; i < strs.length; i++) {
			object[strs[i].split("=")[0]] = strs[i].split("=")[1];//得到{id:'123456',name:'www'}
		}
	}
	// shitextt.value = object.id
	objId.value = object.id
}

shifunction();
</script>

<style lang="scss">
.cla-list {
	display: flex;
	justify-content: space-between;
	margin: 10px 0;

	.cla-item {
		text-align: center;

		.ying {
			font-size: .5rem;
			color: #A1B1AF;
		}

		.zhong {
			text-align: center;
			width: 3rem;
			height: 3rem;
			line-height: 3rem;
			border-radius: 50%;
			border: 1px solid #dadada;
		}
	}
}

.beiwang-box {
	width: 75%;
	position: absolute;
	left: 20%;
	padding: 10px;
	background-color: white;
	border-radius: 10px;
	box-shadow: -5px 0px 0px #10AF9C;

	.title{
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 5px;
	}
	.address{
		display: flex;
		align-items: center;
		color: #5C5C5C;
		margin-bottom: 5px;
	}
	.time{
		display: flex;
		align-items: center;
		color: #5C5C5C;
		margin-bottom: 5px;
	}
}

.bor-bottom {
	background-image: linear-gradient(to right, #7A7A7A 0%, #7A7A7A 50%, transparent 50%);
	background-size: 30px 1.3px;
	background-repeat: repeat-x;
	width: 100%;
	background-position: center;
	height: 2rem;
	
}
</style>