<template>
	<TopNav :backrou="false">
		<template v-slot:topNavBack>
			<van-icon name="down" size="25" color="white" style="transform: rotate(90deg);" @click="backclick" />
		</template>
		<template v-slot:topNavTitle>
			{{ device.location.area }}-{{ device.location['device-name'] }}
		</template>

	</TopNav>

	<div>
		<div style="min-height: 40vh;display: flex;align-items: center;justify-content: center;">
			<img :src="'/src/assets/hotelui/' + checkImg(device) + '.png'" alt="" style="width: 100%;">
		</div>

		<div class="con">
			<div class="on-off" v-for="(item, index) in device.properties" :key="index">
				<div class="onoff">
					<Switch v-if="item.model.view == 'switch'" :deviceId="device.device.id"
						:model="device.device['model-id']" :field="item.model.field" :switchName="item.model.name"
						:switchValue="item.value.value"></Switch>
				</div>
			</div>

			<div class="model" v-for="(item, index) in device.properties" :key="index">
				<Select v-if="item.model.view == 'select'" :deviceId="device.device.id"
					:model="device.device['model-id']" :field="item.model.field" :tabList="item.model['select-item']"
					:tabName="item.model.name" :selectValue="item.value.value"></Select>
				<Slide v-if="item.model.view == 'slide'" :deviceId="device.device.id" :model="device.device['model-id']"
					:field="item.model.field" :slideObj="item.model['slide-range']" :slideName="item.model.name"
					:nowValue="item.value.value"></Slide>
				<Label v-if="item.model.view == 'label'" :deviceId="device.device.id" :model="device.device['model-id']"
					:field="item.model.field" :labelName="item.model.name" :labelvalue="item.value.value"></Label>
				<Camera v-if="item.model.view == 'camera'" :deviceId="device.device.id"
					:model="device.device['model-id']" :field="item.model.field" :name="'123'"></Camera>
			</div>

		</div>

	</div>

</template>

<script setup>
import { Toast } from 'vant';
import { ref } from 'vue';
import Select from './select.vue'
import Switch from './switch.vue';
import Slide from './slide.vue'
import Label from './label.vue'
import Camera from './camera.vue'

let emit = defineEmits(["backclick"]);

const props = defineProps({
	device: {
		type: Object,
		default: {}
	},

})


const tabIndex = ref('');
const tabList = ref([
	{
		icon: ''
	},
	{
		icon: ''
	},
	{
		icon: ''
	},
	{
		icon: ''
	}
])

const windSpeedIndex = ref('')
const windSpeedList = ref([
	{
		id: ''
	},
	{
		id: ''
	},
	{
		id: ''
	},
	{
		id: ''
	},
	{
		id: ''
	}
])

// 返回
const backclick = () => {
	emit("backclick", "关闭修改页");
}

const checkImg = (item) => {
	if (item.device['model-id'] == "switch3" || item.device['model-id'] == "switch2") {
		return 'openClose'
	}
	if (item.device['model-id'] == "ac") {
		return 'ac'
	}
	if (item.device['model-id'] == "wvp-channel") {
		return 'monitor'
	}
	if (item.device['model-id'] == "curtain") {
		return 'curtain'
	}
	if (item.device['model-id'] == "obe-smart-switch") {
		return 'teaRoom'
	}
	
	
}

</script>

<style lang="scss">
.con {
	padding: 10px;
	padding-bottom: 0px;

}

.con {
	padding: 20px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	background: #f7f7f7;

	.on-off {
		display: flex;
		align-items: content;
		justify-content: space-between;
		margin-bottom: 10px;

		.onoff {
			width: 100%;
			display: flex;
			align-items: center;
		}

	}

	.model {
		margin-bottom: 20px;

		.title {
			font-size: 1.2rem;
			// color: #9d9d9d;
		}

		.model {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.tab-item {
				// flex: 1;
				width: 30%;
				text-align: center;
				padding: 10px;
				background: white;
				border-radius: 20px;
				margin: 10px 0;
			}
		}

		.hua {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

	}

}

</style>