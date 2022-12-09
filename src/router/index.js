import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// 登录
const login = () => import('../views/login/login.vue')

const home = () => import('../views/tabbar/home.vue')
const work = () => import('../views/tabbar/work.vue')
const facility = () => import('../views/tabbar/facility.vue')
const my = () => import('../views/tabbar/my.vue')

// 待办
const agenda = () => import('../views/agenda.vue')
// 修改待办
const setAgenda = () => import('../views/setAgenda.vue')


const visitorList = () => import('../views/visitorList.vue')
const visitorAdd = () => import('../views/visitorAdd.vue')

const myHome = () => import('../views/myhome/index.vue')

const door = () => import('../views/door/index.vue')

const scene = () => import('../views/scene.vue')

const config = () => import('../views/config.vue')

// 预约会议列表
const appointList = () => import('../views/conference/appointList.vue')
// 新增预约
const addConference = () => import('../views/conference/addConference.vue')
// 会议审核
const audit = () => import('../views/conference/audit.vue')
// 会议详情
const conferDetail = () => import('../views/conference/detail.vue')
// 会议预约日期
const yuyueTime = () => import('../views/conference/yuyue.vue')

// 我的会议
const myMeeting = () => import('../views/aboutme/myMeeting.vue')

// 请假列表
const askforleaveList = () => import('../views/askforleave/list.vue')
// 请假历史
const askforleaveHistory = () => import('../views/askforleave/history.vue')
// 请假详情
const askforleaveDetail = () => import('../views/askforleave/detail.vue')
// 请假申请
const askforleaveApplyfor = () => import('../views/askforleave/applyfor.vue')

// 节假日列表
const festivalList = () => import('../views/festival/list.vue')
// 节假日设置
const festivalSet = () => import('../views/festival/set.vue')

// 我的考勤
const myWork = () => import('../views/checkwork/mywork.vue')
// 考勤组
const groupWork = () => import('../views/checkwork/groupwork.vue')
// 设置考勤组
const setGroupWork = () => import('../views/checkwork/setgroupwork.vue')

// 设备
const kongTiao = () => import('../views/control/kongtiao.vue')
const fengShan = () => import('../views/control/fengshan.vue')
const chaZuo = () => import('../views/control/chazuo.vue')
const menSuo = () => import('../views/control/mensuo.vue')
const deng = () => import('../views/control/deng.vue')
const chuangLian = () => import('../views/control/chuanglian.vue')
const collect = ()=>import('../views/control/collect.vue')

// 消息
const message = () => import('../views/order/message.vue')
// 问题
const question = () => import('../views/order/question.vue')
// 设置
const setting = () => import('../views/order/setting.vue')
// 日历
const calendar = () => import('../views/order/calendar.vue')
// 反馈
const feedback = () => import('../views/order/feedback.vue')
// 备忘录
const memo = () => import('../views/order/memo.vue')
// 新增备忘录
const addMemo = () => import('../views/order/addMemo.vue')

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'defind',
			component: login
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/work',
			name: 'work',
			component: work
		},
		{
			path: '/facility',
			name: 'facility',
			component: facility
		},
		{
			path: '/my',
			name: 'my',
			component: my
		},
		{
			path: '/Addagenda',
			name: 'agenda',
			component: agenda
		},
		{
			path: '/setAgenda',
			name: 'setAgenda',
			component: setAgenda
		},
		{
			path: '/visitorList',
			name: 'visitorList',
			component: visitorList
		},
		{
			path: '/visitorAdd',
			name: 'visitorAdd',
			component: visitorAdd
		},
		{
			path: '/myHome',
			name: 'myHome',
			component: myHome
		},
		{
			path: '/door',
			name: 'door',
			component: door
		},
		{
			path: '/scene',
			name: 'scene',
			component: scene
		},
		{
			path: '/config',
			name: 'config',
			component: config
		},
		{
			path: '/conference/appointList',
			name: 'appointList',
			component: appointList
		},
		{
			path: '/conference/addConference',
			name: 'addConference',
			component: addConference
		},
		{
			path: '/conference/audit',
			name: 'audit',
			component: audit
		},
		{
			path: '/conference/conferDetail',
			name: 'conferDetail',
			component: conferDetail
		},
		{
			path: '/conference/yuyueTime',
			name: 'yuyueTime',
			component: yuyueTime
		},
		{
			path: '/aboutme/myMeeting',
			name: 'myMeeting',
			component: myMeeting
		},
		{
			path: '/askforleave/list',
			name: 'askforleaveList',
			component: askforleaveList
		},
		{
			path: '/askforleave/history',
			name: 'askforleaveHistory',
			component: askforleaveHistory
		},
		{
			path: '/askforleave/detail',
			name: 'askforleaveDetail',
			component: askforleaveDetail
		},
		{
			path: '/askforleave/applyfor',
			name: 'askforleaveApplyfor',
			component: askforleaveApplyfor
		},
		{
			path: '/festival/list',
			name: 'festivalList',
			component: festivalList
		},
		{
			path: '/festival/set',
			name: 'festivalSet',
			component: festivalSet
		},
		{
			path: '/checkwork/mywork',
			name: 'myWork',
			component: myWork
		},
		{
			path: '/checkwork/groupwork',
			name: 'groupWork',
			component: groupWork
		},
		{
			path: '/checkwork/setgroupwork',
			name: 'setGroupWork',
			component: setGroupWork
		},
		{
			path: '/control/kongtiao',
			name: 'kongTiao',
			component: kongTiao
		},
		{
			path: '/control/fengshan',
			name: 'fengShan',
			component: fengShan
		},
		{
			path: '/control/chazuo',
			name: 'chaZuo',
			component: chaZuo
		},
		{
			path: '/control/mensuo',
			name: 'menSuo',
			component: menSuo
		},
		{
			path: '/control/deng',
			name: 'deng',
			component: deng
		},
		{
			path: '/control/chuanglian',
			name: 'chuangLian',
			component: chuangLian
		},
		{
			path: '/control/collect',
			name: 'collect',
			component: collect
		},
		{
			path: '/message',
			name: 'message',
			component: message
		},
		{
			path: '/question',
			name: 'question',
			component: question
		},
		{
			path: '/setting',
			name: 'setting',
			component: setting
		},
		{
			path: '/calendar',
			name: 'calendar',
			component: calendar
		},
		{
			path: '/feedback',
			name: 'feedback',
			component: feedback
		},
		{
			path: '/memo',
			name: 'memo',
			component: memo
		},
		{
			path: '/addMemo',
			name: 'addMemo',
			component: addMemo
		},
	]
})

export default router
