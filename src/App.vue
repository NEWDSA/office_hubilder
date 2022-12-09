<template>
	<router-view/>
	
	<div v-if="$route.name == 'home' || $route.name=='work' || $route.name=='facility' || $route.name=='my' || $route.name == 'difinehome'" 
	style="height: 60px;width: 100%"></div>
	
	<div class="nav" v-if="$route.name == 'home' || $route.name=='work' || $route.name=='facility' || $route.name=='my' || $route.name == 'difinehome'">
		
		<router-link :to="item.path" class="nav-item" v-for="(item,index) in navList" :key="index">
			<div class="nav-item-img" >
				<img :src="$route.name == item.pathName ? item.checkImg : item.moImg" alt="">
			</div>
			<div class="nav-item-value" :style="$route.name == item.pathName ? 'color:#03BEA8' : ''">{{ item.title }}</div>
		</router-link>
		
	</div>

</template>

<script setup>
	import TopNav from '@/components/nav/TopNav.vue';
	import {ref} from 'vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import { Toast } from 'vant';	

	const navIndex = ref('0')
	const navList = ref([
		{
			title:'首页',
			moImg:'/src/assets/hotelui/home2.png',
			checkImg:'/src/assets/hotelui/home.png',
			path:'/home',
			pathName:'home'
		},
		{
			title:'工作台',
			moImg:'/src/assets/hotelui/briefcase_close.png',
			checkImg:'/src/assets/hotelui/briefcase.png',
			path:'/work',
			pathName:'work'
		},
		{
			title:'设备',
			moImg:'/src/assets/hotelui/ballot2.png',
			checkImg:'/src/assets/hotelui/ballot.png',
			path:'/facility',
			pathName:'facility'
		},
		{
			title:'我的',
			moImg:'/src/assets/hotelui/user2.png',
			checkImg:'/src/assets/hotelui/user.png',
			path:'/my',
			pathName:'my'
		}
	])
	
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
		font-size: 14px;
		font-family: "SourceHanSansCN-Medium";
	}
	
 .nav{
	 background:#F3F3F7;
	 display: flex;
	 position: fixed;
	 bottom: 0;
	 left: 0;
	 right: 0;
	 z-index: 99;
	 padding: 5px;
	 .nav-item{
		text-align: center;
		flex: 1;
		height: 50px;
		
		.nav-item-img{
			text-align: center;
			// width: 50%;
			img{
				// width: 100%;
				height: 20px;
			}
		}
	 }
 }
 .component-container{
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: white;
	z-index: 999;
	overflow-y: scroll;
}
</style>
