<template>
	<TopNav :backrou="props.vistDetail ? false : true">

		<template v-slot:topNavBack v-if="props.vistDetail">
			<van-icon name="down" size="25" color="white" style="transform: rotate(90deg);" @click="backclick" />
		</template>


		<template v-slot:topNavTitle>
			{{ props.vistDetail ? '修改访客信息' : '新增访客信息' }}
		</template>
	</TopNav>

	<div class="visitor-add">
		<div class="Add-model">
			<div class="model-title">访客信息</div>
			<div class="visitorA-from" style="position: relative;">
				<van-uploader v-model="fileList" multiple :max-count="1"
					style="position: absolute;right: 2rem;top:-2rem;z-index: 99;" />
				<van-cell-group inset>
					<!-- 输入任意文本 -->
					<van-field v-model="name" label="访客姓名" placeholder="请输入访客姓名" style="display: block;" />
					<!-- 输入手机号，调起手机号键盘 -->
					<van-field v-model="tel" type="tel" label="联系电话" placeholder="请输入电话号码" style="display: block;" />
					<div class="time" style="padding: 10px 20px ;">
						<div>到访时间</div>
						<van-cell is-link :title="time" @click="showtime = true" />
					</div>
					<van-field v-model="com" label="所属公司" placeholder="请输入公司名称" style="display: block;" />
					<van-field class="last-bottom" v-model="note" label="来访事由" placeholder="请输入内容"
						style="display: block; " />
				</van-cell-group>
			</div>
		</div>

		<div class="add-but" @click="addVisit">

			{{ props.vistDetail ? '确认修改' : '确认新增' }}
		</div>
	</div>


	<van-datetime-picker style="position: absolute;bottom: 0;left: 0;right: 0;" v-model="currentDate" v-show="showtime"
		type="datetime" title="选择完整时间" :min-date="minDate" :max-date="maxDate" @confirm="checktime"
		@cancel="showtime = false" />
</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
Toast.setDefaultOptions({ duration: 1000 });

let emit = defineEmits(["backclickk"]);

const props = defineProps({
	vistDetail: {
		type: Object,
		default: ''
	}
})



const route = useRouter();

const name = ref()
const tel = ref()
const showtime = ref(false)
const com = ref()
const note = ref()

const currentDate = ref()

const date = new Date();

const srtime = (date) => {
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
const addZero = (s) => {
	return s < 10 ? ('0' + s) : s;
}

const time = ref(srtime(date))
const minDate = ref(new Date())
const maxDate = ref(new Date(2099, 1, 1))

// 选择时间点击确定 	
const checktime = (value) => {
	time.value = srtime(value)
	showtime.value = false
}

// 上传图片
const fileList = ref([]);

// 新增游客
const addVisit = () => {
	if (props.vistDetail) {
		Toast('修改成功');
		emit("backclickk", "关闭修改页");
	} else {
		Toast('新增成功');
		setTimeout(() => {
			route.go(-1)
		}, 1000)
	}

}

if (props.vistDetail) {
	name.value = props.vistDetail.name
	tel.value = props.vistDetail.tel
	com.value = props.vistDetail.company
	note.value = props.vistDetail.note
}

const backclick = () => {
	emit("backclickk", "关闭修改页");
}

</script>

<style lang="scss">
.visitor-add {

	// background: white;
	.Add-model {
		padding-top: 10px;
		margin-bottom: 4rem;

		.model-title {
			padding-left: 1rem;
			font-size: 1.3rem;
		}

		.van-cell-group {
			margin: 0;
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


	}

	.Add-model::after {
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

	.add-but {
		width: 100%;
		height: 3rem;
		font-size: 1.1rem;
		line-height: 3rem;
		text-align: center;
		color: white;
		background: #10AF9C;
	}
}
</style>