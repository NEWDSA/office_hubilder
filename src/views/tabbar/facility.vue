<template>
	<div class="ZJ-facility-header">
		<div class="ZJ-facility-header-more">
			<div class="ZJ-facility-menu-box">
				<div class="ZJ-facility-menu" @click="select('shop')">
					<div class="value">{{ actions[actionIndex].name }}</div>
					<div class="icon">
						<van-icon name="play" size="18" color="#008172" />
					</div>
				</div>
				<div class="ZJ-facility-menu" @click="select('ceng')">
					<div class="value">{{ actionsceng[actioncengIndex].name }}</div>
					<div class="icon">
						<van-icon name="play" size="18" color="#008172" />
					</div>
				</div>
			</div>

			<div class="ZJ-facility-menu-more">
				<van-icon name="apps-o" color="white" size="30" @click="showZhe = true" />
			</div>
		</div>

		<div class="ZJ-facility-header-tab">
			<van-tabs v-model:active="active" type="card" color="white" background="rgba(23,3,54,0)"
				title-inactive-color="" title-active-color="#008172">
				<van-tab title="列表模式" name="list"></van-tab>
				<van-tab title="地图模式" name="map"></van-tab>
			</van-tabs>
		</div>

	</div>

	<div class="ZJ-facility-map" v-show="active == 'map'">
		<div class="mapmap" id="mapmap" style="width: 90vw; height: 580px"></div>
		<!-- <span id="pendant" class="pendant" :style="{ backgroundImage: 'url(/src/assets/hotelui/word-map.png)' }"></span> -->
		<div id="pendant" class="pendant" style="position: relative;" :style="'width:' + imgMulriple + '%;'"
			ref="mapbox">
			<img src="@/assets/hotelui/word-map.png" alt="" style="width: 100%;">
			<div class="" :style="'position: absolute;left:' + item.x + '%;top:' + item.y + '%;'"
				v-for="(item, index) in locationList" :key="index" @click="mapClick(item.value, item.id)">
				<van-icon name="location" :size="locationIconSize"
					:color="locationIndex == item.id ? '#FFAF13' : '#35B9A9'"></van-icon>
			</div>

		</div>
		<div class="adjust">
			<div class="adjust-icon">
				<van-icon name="plus" size="18" color="#C7C7C7" @click="checkImgMulriple('plus')"></van-icon>
			</div>
			<div class="adjust-icon">
				<van-icon name="minus" size="18" color="#C7C7C7" @click="checkImgMulriple('minus')"></van-icon>
			</div>
			<div class="adjust-icon">
				<van-icon name="revoke" size="18" color="#C7C7C7" @click="checkImgMulriple('chong')"></van-icon>
			</div>
		</div>


	</div>

	<div class="ZJ-facility" v-if="active == 'list'">
		<div class="ZJ-facility-model">
			<div class="ZJ-facility-model-title">
				<div class="ZJ-facility-model-wen">区域</div>
				<van-field v-model="value1" left-icon="search" placeholder="区域搜索" center />
			</div>
			<div class="ZJ-facility-model-content">
				<div class="ZJ-facility-model-slide slide">
					<div style="width: 33%;height: 9rem;display: inline-block;margin-right: 10px;position: relative;"
						v-for="(item, index) in titles" :key="index" @click="toggleTab(item, index)">
						<div class="img"></div>
						<div style="position: absolute;bottom: .5%;left: .5%;width: 99.5%;padding-left: 10%;border-radius: 5px;"
							:style="titlesIndex == index ? 'background:#CCEAFA' : ''">
							<div style="font-size: .5rem;color:#1E5B84" v-if="current == item">{{ item }}</div>
							<div style="font-size: .5rem;color:#1E5B84" v-else>{{ item }}</div>
							<div style="font-size: .5rem;color:#1E5B84">Reception</div>
						</div>
					</div>


				</div>
			</div>
		</div>

		<div class="ZJ-facility-reception">
			<div class="ZJ-facility-reception-title">
				<div class="ZJ-facility-reception-wen">{{ titles[titlesIndex] }}</div>
				<div class="ZJ-facility-reception-ic">
					<div class="shi">
						<img src="/src/assets/hotelui/shuidi.png" alt="" style="width: 1rem;">
						72%
					</div>
					<div class="wen">
						<img src="/src/assets/hotelui/wenduji.png" alt="" style="width: 1rem;">
						30°
					</div>
				</div>
			</div>

			<div class="ZJ-facility-reception-content">

				<div class="ZJ-facility-reception-slide slide">
					<div class="ZJ-facility-reception-slide-list" style="width: 45%;display: inline-block"
						v-for="(item, index) in hallTask" :key="item.device.id"
						:class="item.properties[0].value.value == true ? 'open' : 'clock'"
						:style="item.properties[0].value.value == true ? 'background-image:url(/src/assets/hotelui/light_open.png);' : 'background-image:url(/src/assets/hotelui/light_close.png);'">
						<div class="slide-list">
							<div class="slide-list-img">
								{{ item.location.area }}-{{ item.location['device-name'] }}
							</div>
							<div class="slide-list-switch"
								v-if="item.properties.length == 1 && item.properties[0].model.field == 'switch'">
								<van-switch v-model="item.properties[0].value.value" active-color="#1D1E1E"
									inactive-color="#929393" size="16" @change="sendDeviceCommand($event, item)" />
							</div>
						</div>
						<div class="slide-info">
							<div class="slide-name">
								<div class="slide-name-yingwen">

								</div>
								<div class="slide-name-zhongwen">

								</div>
							</div>
							<div class="icon-ru" v-if="item.properties.length != '1'">
								<van-icon name="weapp-nav" size="20" color="black" @click="showDevice(item)" />
							</div>
						</div>

					</div>
				</div>

				<div class="ZJ-facility-reception-slide-main">
					<div class="ZJ-facility-reception-slide-list" style="width: 48%;"
						v-for="(item, index) in zhuhallTask" :key="item.device.id"
						:class="item.properties[0].model.field == 'switch' && item.properties[0].value.value == true ? 'open' : 'clock'"
						:style="ouStyle(item)">
						<div class="slide-list">
							<div class="slide-list-img">
								{{ item.location.area }}-{{ item.location['device-name'] }}
							</div>
							<div class="slide-list-switch"
								v-if="item.properties.length == 1 && item.properties[0].model.field == 'switch'">
								<van-button v-if="item.properties[0].model.view == 'button'" type="small"
									@click="sendDeviceCommand('true', item)">
									<Unlock style="width: 1em; height: 1em; margin-right: 8px" />
									<div>开</div>
								</van-button>
								<van-switch v-model="item.properties[0].value.value" active-color="#1D1E1E"
									inactive-color="#929393" size="16" @change="sendDeviceCommand($event, item)"
									v-else />



							</div>
						</div>
						<div class="slide-info">
							<div class="slide-name">
								<div class="slide-name-yingwen">

								</div>
								<div class="slide-name-zhongwen">

								</div>
							</div>
							<div class="icon-ru"
								v-if="item.properties.length != '1' || item.properties[0].model.view == 'camera'">
								<van-icon name="weapp-nav" size="20" color="black" @click="showDevice(item)" />
							</div>
						</div>
						<!-- 数字，绝对定位 -->
						<!-- <div style="color: black;position: absolute;right: 10%;bottom: 7%;z-index: 99;pointer-events: none;"
							v-if="item.checkHua" :style="item.check == false ? 'color:#b3b3b3' : ''">{{ item.huaValue
							}}%
						</div> -->
						<!-- 滑动 -->
						<!-- <van-slider v-model="item.huaValue" active-color="#FF9518" bar-height="20" v-if="item.checkHua"
							:disabled="item.check == false" style="position: relative;overflow: hidden">
							<template #button>
								<div class="custom-button" style="display: flex;"
									:style="item.huaValue < 1 ? 'margin-left: 1.5rem;' : 'margin-left: -1.5rem;'">
									<van-icon name="sort" size="12" color="white" style="transform: rotate(90deg);" />
								</div>
							</template>
						</van-slider> -->

					</div>
				</div>

			</div>

		</div>


	</div>


	<!-- 遮罩层 -->
	<van-overlay :show="showZhe" @click="showZhe = false" z-index="999"
		:custom-style="{ background: 'rgba(255,255,255)' }">
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
						<van-icon name="plus" size="35" color="white" @click="showZhe = false" />
					</div>
				</div>
			</div>
		</div>
	</van-overlay>


	<div class="component-container" v-if="deviceShow">
		<Collect :device="deviceDeail" @backclick="backclick"></Collect>
	</div>

	<van-action-sheet v-model:show="show" :actions="actions" cancel-text="取消" close-on-click-action
		@select="onSelect" />

	<van-action-sheet v-model:show="showc" :actions="actionsceng" cancel-text="取消" close-on-click-action
		@select="onSelectc" />


</template>

<script setup>
import '@/components/map/index.js';
import { ref, watch, reactive, onMounted, nextTick } from 'vue';
import { Toast } from 'vant';
import Collect from '@/views/control/collect.vue';
import { list_device_by_area } from '@/util/iot.js'
import { Drag } from '@/util/hammerDrag'

// 请求
import { connect, registerTopAreaRef, registerCurrentAreaRef, registerDevicesRef } from '@/util/iot.js'

import { send_device_command } from '@/util/iot.js'

setTimeout(() => {

}, 500)
const mapbox = ref(null);

const titlesIndex = ref(0)

const titles = ref([])
registerTopAreaRef(titles)
const current = ref("")
registerCurrentAreaRef(current)
const devices = ref([])
registerDevicesRef(devices)
connect()

function toggleTab(e, index) {
	// console.log(e)
	list_device_by_area(e)
	titlesIndex.value = index
	// intoList()
	hallTask.length = 0
	zhuhallTask.length = 0
}

// 设备页面
const deviceShow = ref(false)
const deviceDeail = ref();

// 酒店名
let show = ref(false);
const actions = reactive([{
	name: '智联酒店',
	value: 0
},
{
	name: 'XX酒店',
	value: 1
},
{
	name: 'XX酒店',
	value: 2
},
]);
const actionIndex = ref(0);
const onSelect = (item) => {
	// 默认情况下点击选项时不会自动收起
	// 可以通过 close-on-click-action 属性开启自动收起
	show.value = false;
	actionIndex.value = item.value;
};

// 层数
let showc = ref(false);
const actionsceng = ref([{
	name: '一层',
	value: 0
},
{
	name: '两层',
	value: 1
},
{
	name: '三层',
	value: 2
},
]);
const actioncengIndex = ref(0);
const onSelectc = (item) => {
	// 默认情况下点击选项时不会自动收起
	// 可以通过 close-on-click-action 属性开启自动收起
	showc.value = false;
	actioncengIndex.value = item.value;
};


// 判断显示那个层数?酒店名？
const select = (value) => {
	value == 'shop' ? show.value = true : showc.value = true

}
const value1 = ref('')
const active = ref('list')

// 窗帘。。。滑块
const hallTask = reactive([]);


// 主要滑块
const zhuhallTask = reactive([]);


watch(() => devices.value, (newVal, oldVal) => {

	for (let i = 0, val; val = devices.value[i++];) {
		// console.log(val)
		if (val.device['model-id'] == 'light') {
			hallTask.push(val)
		} else {
			zhuhallTask.push(val)
		}
	}

})

const showDevice = (item) => {
	deviceDeail.value = item
	// console.log(item)
	deviceShow.value = true
}
// 设备返回
const backclick = () => {
	deviceShow.value = false
}

function sendDeviceCommand(e, item) {
	send_device_command(e, item.device.id, item.device['model-id'], item.properties[0].model.field, 'checked')
}

// 控制style
const ouStyle = (item) => {
	if (item.device['model-id'] == "obe-smart-switch") {
		return 'background-image:url(/src/assets/hotelui/mensuo_close.png)'
	}
	if (item.device['model-id'] == "ac") {
		return 'background-image:url(/src/assets/hotelui/ac_close.png)'
	}
	if (item.device['model-id'] == "wvp-channel") {
		return 'background-image:url(/src/assets/hotelui/monitor_close.png)'
	}
	if (item.device['model-id'] == "curtain") {
		return 'background-image:url(/src/assets/hotelui/curtain_close.png)'
	}
}

// 地图模式
const locationIconSize = ref(16);
const mapshow = ref(false)
const locationIndex = ref();
const locationList = reactive([
	{
		id: 1,
		x: '135',
		y: '50',
		value: '会议室'
	},
	{
		id: 2,
		x: '170',
		y: '80',
		value: '办公区'
	},
	{
		id: 3,
		x: '60',
		y: '20',
		value: '培训室'
	},
	{
		id: 4,
		x: '240',
		y: '140',
		value: '老板办公室'
	}
])

const imgMulriple = ref(100)
const checkImgMulriple = (type) => {
	if (type == 'plus') {
		if (imgMulriple.value < 400) {
			imgMulriple.value += 50
			locationIconSize.value += 3
		} else {
			Toast('已缩放到最大')
		}
	} else if (type == 'minus') {
		if (imgMulriple.value > 100) {
			imgMulriple.value -= 50
			locationIconSize.value -= 3
		} else {
			Toast('已缩放到最小')
		}
	} else {
		Drag('#pendant', { isReset: true })
		imgMulriple.value = 100
	}
}

watch(() => active.value, (newVal, oldVal) => {
	console.log(newVal)
	if (newVal == 'map') {
		init();

// 完成之后
nextTick(() => {
	// postion计算
	// for (var i = 0, val; val = locationList[i++];) {
	// 	val.x = (Number(val.x) / Number(mapbox.value.offsetWidth)).toFixed(2) * 100
	// 	val.y = (Number(val.y) / Number(mapbox.value.offsetHeight)).toFixed(2) * 100
	// }

	if (mapshow.value == false) {
		var map = L.map('mapmap').setView([51.505, -0.09], 1);

L.tileLayer('/src/assets/hotelui/word-map.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();



		// var mapOptions = {
		// 	center: [16.506174, 80.648015],
		// 	zoom: 7
		// }
		// // Creating a map object
		// var map = new L.map('mapmap', mapOptions);
		// // Creating a Layer object
		// var layer = new L.TileLayer('/src/assets/hotelui/word-map.png');
		// var layere = new L.TileLayer('/src/assets/hotelui/user.png',{
        //     attribution: "stamen"
        // });
		// // Adding layer to the map
		// map.addLayer(layer);
		// map.addLayer(layere);
		// // Creating latlng object
		// var latlngs = [
		// 	[17.385044, 78.486671],
		// 	[16.506174, 80.648015],
		// 	[17.686816, 83.218482]
		// ];
		// // Creating a poly line
		// var polygon = L.polygon(latlngs, { color: 'red' });
		// // Adding to poly line to map
		// polygon.addTo(map);


		// var mapOptions = {
		// 	center: [17.385044, 78.486671],
		// 	zoom: 10
		// }

		// // Creating a map object
		// var map = new L.map('mapmap', mapOptions);
		// // Creating a Layer object
		// var layer = new L.TileLayer('/src/assets/hotelui/word-map.png');
		// // Adding layer to the map
		// map.addLayer(layer);	
		// var marker = new L.Marker([17.385044, 78.486671]);
		// marker.addTo(map);

		mapshow.value = true
	}else{
		
	}


})
	}


})



// 点击地图坐标
const mapClick = (item, index) => {
	locationIndex.value = index
	console.log(index)
}

// 地图拖拽
const init = () => {

	if (document.querySelector('#pendant')) {
		console.log(1)
		Drag('#pendant')
	}
	// dom元素
}

// 遮罩层
const showZhe = ref(false)

</script>

<style lang="scss">
.ZJ-facility-header {
	padding: 20px;
	background: #23C7B3;

	.ZJ-facility-header-more {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.ZJ-facility-menu-box {
			display: flex;

			.ZJ-facility-menu {
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

	.ZJ-facility-header-tab {
		width: 100%;
		height: 3rem;
		margin-top: 20px;

		.van-tabs__wrap {
			overflow: inherit;
			width: 100%;
			border-radius: 10px;
			height: 3rem;

			.van-tabs__nav {
				height: 3rem;
				border-radius: 10px;
				overflow: inherit;
				margin: 0;

				.van-tabs__nav--card {
					height: 3rem;
				}

				.van-tab {
					border: 0;
					height: 3rem;
				}

				.van-tab--active {
					border-radius: 9px;
				}
			}

		}
	}
}

.ZJ-facility {
	padding: 10px 20px;

	.ZJ-facility-model {
		.ZJ-facility-model-title {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 5px;

			.ZJ-facility-model-wen {
				font-size: 20px;
			}

			.van-cell {
				width: 55%;
				// margin: 0 auto;
				height: 35px;

				input::-webkit-input-placeholder {
					/* WebKit browsers */
					color: #929495;
				}

				border-radius: 20px;
				background:#C6E8E4;
				color: black;
			}
		}

		.ZJ-facility-model-content {
			overflow: hidden;

			.ZJ-facility-model-slide {
				margin: 20px 0;
				white-space: nowrap;
				overflow-x: auto;

				// display: flex;
				.img {
					width: 100%;
					height: 100%;
					background: url('/src/assets/hotelui/shebei1.png');
					background-size: 100% 100%;
				}
			}

			.slide::-webkit-scrollbar {
				width: 2px;
				height: 2px;
				background-color: #07CFB8;
			}

			.slide::-webkit-scrollbar-track {
				background: #213147;
				border-radius: 2px;
			}

			.slide::-webkit-scrollbar-thumb {
				background: #07CFB8;
				border-radius: 2px;
			}

			.slide::-webkit-scrollbar-thumb:hover {
				background: #07CFB8;
			}

			.slide::-webkit-scrollbar-corner {
				background: #07CFB8;
			}
		}
	}

	.ZJ-facility-reception {
		background: #D3E8E6;
		border-radius: 20px;
		padding: 15px;
		margin-bottom: 10px;
		max-height: 50vh;
		overflow-y: auto;

		.ZJ-facility-reception-title {
			display: flex;
			justify-content: space-between;
			margin-bottom: 10px;

			.ZJ-facility-reception-wen {
				font-size: 1.4rem;
			}

			.ZJ-facility-reception-ic {
				display: flex;
				align-items: center;

				.shi {
					margin-right: 10px;
					padding-right: 10px;
					border-right: 2px solid #000000;
				}
			}
		}

		.ZJ-facility-reception-content {
			overflow: hidden;

			.ZJ-facility-reception-slide {
				white-space: nowrap;
				overflow-x: auto;

				.ZJ-facility-reception-slide-list {
					border-radius: 10px;
					box-shadow: 2px 5px 10px #888888;
					padding: 10px;
					margin: 0 10px 15px 0px;
					min-height: 8rem;

					.slide-list {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 40px;


						.slide-list-switch {
							display: flex;
							align-items: center;
						}
					}

					.slide-info {
						display: flex;
						align-items: flex-end;
						justify-content: space-between;
					}


					.slide-name-yingwen {
						font-size: 0.1rem;
					}

					.slide-name-zhongwen {
						font-size: 1rem;
					}
				}
			}

			.ZJ-facility-reception-slide-main {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.ZJ-facility-reception-slide-list {
					border-radius: 10px;
					box-shadow: 1px 2px 5px #888888;
					padding: 10px;
					margin-bottom: 20px;
					min-height: 7rem;

					.slide-list {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 40px;


						.slide-list-switch {
							display: flex;
							align-items: center;
						}

						.slide-name-yingwen {
							font-size: 0.1rem;
						}

						.slide-name-zhongwen {
							font-size: 1rem;
						}

					}

					.slide-info {
						display: flex;
						align-items: flex-end;
						justify-content: space-between;
					}

				}
			}


			// 滚动条
			.slide::-webkit-scrollbar {
				width: 2px;
				height: 2px;
				background-color: #07CFB8;
			}

			.slide::-webkit-scrollbar-track {
				background: #213147;
				border-radius: 2px;
			}

			.slide::-webkit-scrollbar-thumb {
				background: #07CFB8;
				border-radius: 2px;
			}

			.slide::-webkit-scrollbar-thumb:hover {
				background: #07CFB8;
			}

			.slide::-webkit-scrollbar-corner {
				background: #07CFB8;
			}
		}

	}

}

.ZJ-facility-map {
	width: 100%;
	overflow: hidden;
	overflow-x: auto;
	min-height: 100vh;
	padding: 20px;

	.adjust {
		position: fixed;
		right: 5%;
		top: 20%;
		z-index: 999;

		.plus {
			border: 3px solid #C7C7C7;
			border-radius: 50%;
			width: 2rem;
			height: 2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 10px;
		}

		.adjust-icon {
			border: 3px solid #C7C7C7;
			border-radius: 50%;
			width: 2rem;
			height: 2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 10px;
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
	justify-content: flex-end;
	height: 100%;
}

.block {
	margin-left: 0;
	width: 80px;
	height: 100%;
	background-color: #DDFFFB;

	.more-task-item {
		padding-top: 5rem;

		.more-task {
			width: 3.5rem;
			height: 3.5rem;
			margin: 2rem auto;
			background: #35B9A9;
			border-radius: 5px;
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				width: 2.5rem;
				height: 2.5rem;
			}
		}
	}

}

.open {
	background-color: #65E5D5;
	background-image: url(/src/assets/hotelui/mensuo_open.png);
	background-repeat: no-repeat;
	background-position: right;
}

.clock {
	background-image: url(/src/assets/hotelui/mensuo_close.png);
	background-color: white;
	background-repeat: no-repeat;
	background-position: right;
}

// 门锁
.van-button__text {
	display: flex;
	align-items: center;
}
</style>
