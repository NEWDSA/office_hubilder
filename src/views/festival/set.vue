<template>
	<TopNav :backrou="props.festivalDetail ? false : true">
		<template v-slot:topNavBack v-if="props.festivalDetail">
			<van-icon name="down" size="25" color="white" style="transform: rotate(90deg);" @click="backclick" />
		</template>


		<template v-slot:topNavTitle>
			{{ props.festivalDetail ? '修改节假日' : '新增节假日' }}
		</template>
	</TopNav>

	<div class="festvial-set">
		<van-field v-model="festivalName" required placeholder="请输入节假日名称" style="display: block;" />

		<div class="set-from">
			<div class="set-from-data">
				<div class="data-title">选择日期</div>
				<div class="data-box">
					<div class="start-data" @click="showStartDay = true">{{ startDay }}</div>
					<div class="end-data" @click="showEndDay = true">{{ endDay }}</div>
				</div>
			</div>

			<div class="set-from-data">
				<div class="data-title">调配工作日</div>
				<div class="data-box">
					<div class="fit-data" @click="showFitDay = true">{{ fitDay }}</div>
				</div>
			</div>

			<div class="personnel-item">
				<div class="item-top">
					<div class="item-title">受调整考勤组</div>
					<div class="item-add">+ 受调整考勤组</div>
				</div>
				<div class="item-con">
					<div class="bumen">财务部，研发部</div>
				</div>

			</div>

		</div>
	</div>

	<div class="add-but" @click="addFestival">
		{{ props.festivalDetail ? '确认修改' : '确认新增' }}
	</div>

	<van-calendar v-model:show="showStartDay" :show-confirm="false" @confirm="onConfirm(1, $event)" color="#10AF9C" />

	<van-calendar v-model:show="showEndDay" :show-confirm="false" @confirm="onConfirm(2, $event)" color="#10AF9C" />
	<van-calendar v-model:show="showFitDay" :show-confirm="false" @confirm="onConfirm(3, $event)" color="#10AF9C" />

</template>

<script setup>
import { ref } from "vue";

import { Toast } from "vant";
import { useRouter } from "vue-router";
const route = useRouter();
let emit = defineEmits(["backclickk"]);

// 日期
const startDay = ref('请选择时间');
const showStartDay = ref(false)

const endDay = ref('请选择时间');
const showEndDay = ref(false)

const fitDay = ref('请选择时间');
const showFitDay = ref(false)

const festivalName = ref('')

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
const onConfirm = (id, value) => {
	showStartDay.value = false;
	showEndDay.value = false;
	showFitDay.value = false;
	if (id == 1) {
		startDay.value = formatDate(value);
	} else if (id == 2) {
		endDay.value = formatDate(value);
	} else {
		fitDay.value = formatDate(value);
	}
	// console.log(formatDate(value))
};

const props = defineProps({
	festivalDetail: {
		type: Object,
		default: ''
	}
})

if (props.festivalDetail) {
	festivalName.value = props.festivalDetail.day
	
}

const backclick = () => {
	emit("backclickk", "关闭修改页");
}

// 新增游客
const addFestival = () => {
	if (props.festivalDetail) {
		Toast('修改成功');
		emit("backclickk", "关闭修改页");
	} else {
		Toast('新增成功');
		setTimeout(() => {
			route.go(-1)
		}, 1000)
	}

}

</script>

<style lang="scss">
.festvial-set {
	padding: 10px;
	margin-bottom: 20px;

	.van-cell {
		width: 100%;
		text-align: center;
		border-bottom: 1px solid #10AF9C;

		.van-cell__title {
			margin-bottom: 5px;
		}

		.van-cell__value {
			background: white;
			padding: 5px 10px 5px 20px;
			border-radius: 10px;

			.van-field__body {
				input {
					color: #10AF9C;
					text-align: center;
				}

				input::placeholder {
					color: #10AF9C;
					// text-align: center;
				}
			}
		}

	}

	.set-from {
		// padding: 10px;
		margin-top: 10px;
		border-radius: 10px;
		border: 1px solid #e6e6e6;

		.set-from-data {
			padding: 10px;
			// border: 1px solid #10AF9C;
			border-radius: 20px;

			.data-title {
				color: #10AF9C;
				margin-bottom: 20px;
				font-size: .5rem;
			}

			.data-box {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.start-data {
					padding: 8px 20px;
					width: 45%;
					border: 1px solid #10AF9C;
					color: #10AF9C;
					border-radius: 20px;
				}

				.end-data {
					padding: 8px 20px;
					width: 45%;
					border: 1px solid #10AF9C;
					color: #10AF9C;
					border-radius: 20px;
				}

				.fit-data {
					padding: 10px 20px;
					width: 100%;
					border: 1px solid #10AF9C;
					color: #10AF9C;
					border-radius: 20px;
				}
			}
		}

		.personnel-item {

			// padding:10px;
			.item-top {
				display: flex;
				align-items: center;
				justify-content: space-between;
				background: #E0F7F5;
				padding: 10px;

				.item-title {
					color: #999999;
					font-size: .5rem;
				}

				.item-add {
					color: #FF5E3A;
					font-size: .5rem;
				}
			}


			.item-con {
				padding: 20px 10px;
			}
		}


	}

}

.add-but {
	width: 95%;
	height: 3rem;
	margin: 0 auto;
	font-size: 1.3rem;
	line-height: 3.5rem;
	text-align: center;
	color: white;
	border-radius: 30px;
	background: #FFA516;
}
</style>