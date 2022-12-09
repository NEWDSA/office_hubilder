<template>
	<TopNav>
		<template v-slot:topNavTitle>
			新增会议预约
		</template>
		<template v-slot:topNavRight>
			<!-- <van-icon name="bell" size="25" color="white" /> -->
		</template>
	</TopNav>

	<div class="addConference-from">
		<div class="Add-model">
			<div class="visitorA-from" style="position: relative;">
				<van-cell-group inset>
					<!-- 输入任意文本 -->
					<van-field v-model="name" label="会议名称" placeholder="请输入访客姓名" style="display: block;" />
					<van-field v-model="date" right-icon="calendar-o" readonly label="日期" placeholder="请选择时间"
						@click="showCalendar = true" style="display: block;" />
					<div class="use-time">
						<van-field v-model="actionTime" right-icon="underway-o" readonly label="开始时间"
							placeholder="请选择时间" @click="showActionTime = true, showEndTime = false"
							style="display: block;" />
						<van-field v-model="endTime" right-icon="underway-o" readonly label="结束时间" placeholder="请选择时间"
							@click="showEndTime = true, showActionTime = false" style="display: block;" />
					</div>
					<van-field v-model="shitextt" label="会议室" readonly placeholder="请选择会议室" @click="shifunction()"
						style="display: block;" />

					<div class="order">
						<div class="order-title">
							<div>参会人员</div>
							<div class="addset-box" @click="addset">
								<van-icon name="plus" size="25" color="#10AF9C" />
								<div style="color: #10AF9C;font-size: 1.3rem;font-weight: 600;">Add</div>
							</div>
						</div>
						<div class="addp">
							<div class="addp-item" v-for="(item, index) in renyuan" :key="item.id">
								<div class="info-box">
									<div class="info-img"><img :src="item.img" alt=""></div>
									<div class="info-na">
										<div class="info-name">{{ item.name }}</div>
										<div class="info-act">{{ item.act }}</div>
									</div>
								</div>
								<div class="info-stu">
									<div class="info-xm-zz" v-if="item.stuts == 0">{{ item.stuts == 0 ? '会议主持人' : '' }}
									</div>
									<div class="info-xm-xx" v-if="item.stuts != 0">
										<van-icon name="cross" size="25" color="#929998" @click="renyuan.splice(index,1)"/>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div class="order">
						<div class="order-title">
							事项描述
						</div>
						<div class="text">
							<textarea placeholder="描述内容"></textarea>
						</div>
					</div>

				</van-cell-group>
			</div>

			<div class="add-but" @click="Toast('新增成功'),$router.go(-1)">
				创建
			</div>
		</div>
	</div>



	<van-datetime-picker style="position:fixed;bottom: 0;left: 0;right: 0;" v-show="showActionTime" v-model="actionTime"
		type="time" title="选择开始时间" :min-hour="0" :max-hour="23" @confirm="checktime('act', $event)"
		@cancel="showActionTime = false" />

	<van-datetime-picker style="position:fixed ;bottom: 0;left: 0;right: 0;" v-show="showEndTime" v-model="endTime"
		type="time" title="选择结束时间" :min-hour="0" :max-hour="23" @confirm="checktime('end', $event)"
		@cancel="showEndTime = false" />

	<van-calendar v-model:show="showCalendar" :show-confirm="false" @confirm="onConfirm" color="#10AF9C" />

</template>

<script setup>
import { Toast } from 'vant';
import { ref } from 'vue'
const currentTime = ref('12:00');
const shitextt = ref('');

const name = ref('')
// 开始结束
const showActionTime = ref(false)
const actionTime = ref('')

const showEndTime = ref(false)
const endTime = ref('')

// 选择时间点击确定
const checktime = (type, value) => {
	console.log(value)
	if (type == 'act') {
		actionTime.value = value
		showActionTime.value = false
	} else {
		endTime.value = value
		showEndTime.value = false
	}
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
	if (object.id == 1) {
		shitextt.value = '多功能会议室'
	} else if (object.id == 2) {
		shitextt.value = '中会议室'
	} else {
		shitextt.value = '小会议室'
	}
}

// 人员
const renyuan = ref([
	{
		id: '0',
		img: '/src/assets/hotelui/user.png',
		name: '王小明',
		act: '项目负责人',
		stuts: '0'
	},
	{
		id: '1',
		img: '/src/assets/hotelui/user.png',
		name: '韩梅梅',
		act: '研发',
		stuts: '1'
	}
])

const addset = ()=>{
	renyuan.value.push({
		id: '1',
		img: '/src/assets/hotelui/user.png',
		name: '新增人员',
		act: '研发',
		stuts: '1'
	})
}


// 日期
const date = ref('');
const showCalendar = ref(false)

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
const onConfirm = (value) => {
	showCalendar.value = false;
	date.value = formatDate(value);
	// console.log(formatDate(value))
};

</script>

<style lang="scss">
.addConference-from {
	.Add-model {
		padding-top: 10px;
		margin-bottom: 4rem;
		background: #F9F9F9;

		.model-title {
			padding-left: 1rem;
			font-size: 1.3rem;
		}

		.van-cell-group {
			background: #F9F9F9;
			margin: 0;

			.van-cell {
				background: #F9F9F9;

				.van-cell__title {
					margin-left: 20px;
				}
			}

			.van-cell:after {
				border: 0;
			}

			.van-field__body {
				position: relative;

				.van-field__right-icon {
					color: #10AF9C;
					position: absolute;
					left: 10px;
				}

				input {
					background: white;
					padding: 10px 35px;
					border-radius: 10px;
					border: 1px solid #d0d0d0;
				}
			}
		}

		.use-time {
			display: flex;

		}

		.time {
			.van-cell {
				padding: 0;
			}
		}

		.time::after {
			position: absolute;
			box-sizing: border-box;
			content: " ";
			pointer-events: none;
			right: var(--van-padding-md);
			bottom: 0;
			left: var(--van-padding-md);
			border-bottom: 1px solid var(--van-cell-border-color);
			transform: scaleY(.5);
		}

		.order {
			padding: 15px;

			.order-title {
				margin: 0px 20px;
				font-size: 1rem;
				display: flex;
				justify-content: space-between;

				.addset-box {
					display: flex;
				}
			}

			.icon-box {
				width: 3rem;
				height: 3rem;
				border-radius: 50%;
				background: #019583;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 10px;
			}

			.text {
				margin-top: 10px;

				textarea {
					width: 100%;
					height: 20rem;
					padding: 20px;
					border-radius: 10px;
					border: 1px solid #d0d0d0;
				}
			}

			.addp {
				margin-bottom: 5px;

				.addp-item {
					border-radius: 50px;
					display: flex;
					padding: 10px;
					border: 1px solid #019D8A;
					background-color: #ffffff;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 10px;

					.info-box {
						display: flex;
						align-items: center;

						.info-img {
							width: 3rem;
							height: 3rem;
							border-radius: 50%;
							overflow: hidden;

							img {
								width: 100%;
							}
						}

						.info-na {
							margin-left: 20px;

							.info-name {
								font-size: 1.5rem;
								color: black;
							}

							.info-act {
								font-size: 1rem;
								color: #929998;
							}
						}
					}

					.info-stu {
						.info-xm-zz {
							border-radius: 20px;
							font-size: .5rem;
							padding: 5px 10px;
							background: #D3F4EE;
							color: #019D8A;
						}

						.info-xm-xx {
							border-radius: 20px;
							font-size: .5rem;
							padding: 5px 10px;
						}
					}

				}




			}
		}

		.add-but {
			width: 95%;
			height: 4rem;
			margin: 0 auto;
			font-size: 1.5rem;
			line-height: 4rem;
			text-align: center;
			color: white;
			border-radius: 30px;
			background: #10AF9C;
		}
	}
}
</style>