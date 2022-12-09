<template>
	<TopNav>
		<template v-slot:topNavTitle>
			节假日列表
		</template>
		<template v-slot:topNavRight>
			<van-icon name="plus" size="26" color="#ffffff" @click="$router.push('/festival/set')" />
		</template>
	</TopNav>
	<div class="ZJ-festival">
		<van-tabs v-model:active="festivalTabIndex" background="#FAFAFA" color="#333333" line-width="15px"
			title-inactive-color="#BFBFBF">
			<van-tab :title="item.title" v-for="(item, index) in festivalTabList" :key="index">

			</van-tab>
		</van-tabs>

		<div class="festival-list">
			<div class="festival-item" v-for="(item, index) in festivalList" :key="item.id">
				<div class="item-day-tag">
					<div class="day">{{ item.day }}</div>
					<div class="tag" v-for="(item1, index1) in item.tag" :key="item1.id"
						:style="item1.id == 1 ? 'background:#10AF9C' : item1.id == 3 ? 'background:#AE52D5;' : 'background:#E6AC11'">
						{{ item1.title }}</div>
				</div>

				<div class="item-time-set">
					<div class="time">
						<div>假期：{{ item.timeFrame }}</div>
						<div>调配日期：{{ item.fitTime }}</div>
					</div>
					<div class="set">
						<div class="xiugai" @click="showDetail(index)">修改</div>
						<div class="shanchu" @click="festivalList.splice(index,1)">删除</div>
					</div>
				</div>
			</div>
		</div>


	</div>


	<div class="component-container" v-if="detailShow">
		<festival-add :festivalDetail="festivalDetail" @backclickk="backclickke"></festival-add>
	</div>

</template>

<script setup>
import { ref } from 'vue';
import festivalAdd from './set.vue';

const festivalTabIndex = ref(0)
const festivalTabList = ref([
	{
		title: '全部'
	},
	{
		title: '传统'
	},
	{
		title: '国际'
	},
	{
		title: '生活'
	},
])

const festivalList = ref([
	{
		id: '1',
		day: '元旦 1月1日',
		tag: [
			{
				id: 1,
				title: '未到时间',

			},
			{
				id: 3,
				title: '国际节日',

			}
		],
		timeFrame: '2022-01-01~2022-01-03',
		fitTime: '01-04 、01-05'
	},
	{
		id: '2',
		day: '元宵 ',
		tag: [
			{
				id: 2,
				title: '传统节日',

			},
			{
				id: 1,
				title: '未到时间',

			}
		],
		timeFrame: '2022-01-01~2022-01-03',
		fitTime: '01-04 、01-05'
	},
	{
		id: '3',
		day: '元旦 1月1日',
		tag: [
			{
				id: 2,
				title: '传统节日',

			},
			{
				id: 1,
				title: '未到时间',

			}
		],
		timeFrame: '2022-01-01~2022-01-03',
		fitTime: '01-04 、01-05'
	}
])

const detailShow = ref(false)
const festivalDetail = ref('')

const showDetail = (index) => {
	detailShow.value = true

	festivalDetail.value = festivalList.value[index]
}

const backclickke = () => {

	detailShow.value = false
}

</script>

<style lang="scss">
.festival-list {
	padding: 10px;
	background: #F4F4F4;
	min-height: 75vh;

	.festival-item {
		padding: 10px;
		background: white;
		margin-bottom: 10px;

		.item-day-tag {
			display: flex;
			margin-bottom: 10px;

			.day {
				margin-right: 10px;
				font-size: 1.2rem;
			}

			.tag {
				margin-right: 10px;
				display: flex;
				align-items: center;
				border-radius: 10px;
				font-size: .5rem;
				padding: 0 10px;
				color: white;
			}
		}

		.item-time-set {
			display: flex;
			align-items: flex-end;
			justify-content: space-between;

			.time {
				div {
					font-size: .5rem;
					color: #BBBFC7;
				}
			}

			.set {
				display: flex;

				.xiugai {
					border: 1px solid #10AF9C;
					background: #DDF7F3;
					color: #10AF9C;
					padding: 0px 15px;
					border-radius: 10px;
					margin-right: 10px;
				}

				.shanchu {
					border: 1px solid #E95647;
					color: #E95647;
					background: #ECC6C1;
					padding: 0px 15px;
					border-radius: 10px;
				}
			}

		}
	}

}
</style>