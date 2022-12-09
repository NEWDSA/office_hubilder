export const formatDate = (date, id) => {
	// 格式化时间为 YYYY-MM-DD HH:MM:SS
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds(); // 判断是不是小于10 返回01 02 03
	function check(num) {
		if (num < 10) {
			// 如果数字小于10,前边拼接个0
			return "0" + num;
		} else {
			return num;
		}
	}
	const timeArry = {};

	if (id) {
		var timeText = `${check(year)}年${check(month)}月${check(day)}日`;
	} else {
		var timeText = `${check(year)}年${check(month)}月${check(day)}日  ${check(hours)}: ${check(minutes)}: ${check(seconds)}`;
	}



	let nowDay = date.getDay();
	let weeks = new Array(
		"星期日",
		"星期一",
		"星期二",
		"星期三",
		"星期四",
		"星期五",
		"星期六"
	);
	let week = weeks[nowDay]; // let state = ``; // // 判断当前时间段 // if (hours >= 0 && hours <= 10) { //   state = `早上`; // } else if (hours > 10 && hours <= 14) { //   state = `中午`; // } else if (hours > 14 && hours <= 18) { //   state = `下午`; // } else if (hours > 18 && hours <= 24) { //   state = `晚上`; // }
	timeArry.timeText = timeText;
	timeArry.week = week; // timeArry.state = state;
	return timeArry;

}

// 时间计算
export const suantime = (value) => {
	let result = ""

	let sencond = parseInt(value)

	//3600秒等于60分钟等于1小时

	if (sencond > 3600 * 24) {  //表示大于一天

		let day = sencond / (3600 * 24);

		sencond = sencond % (3600 * 24);    //求天数整除外剩余的秒数

		let hour = sencond / 3600;          //1小时==60分钟==3600秒，所以剩余的秒数÷3600= 得到几个小时数

		result = parseInt(day) + "天" + parseInt(hour) + "小时";

	} else if (sencond > 3600) {     //表示大于一个小时

		let hour = sencond / 3600;

		let minute = sencond % 3600 / 60;         //求小时数整除外剩余的秒数， 秒数÷60秒 = 得到几分钟

		result = parseInt(hour) + "小时" + parseInt(minute) + "分";

	} else if (sencond > 60) {  //表示大于一分钟

		let minute = sencond / 60;

		let sec = sencond % 60;           //求分钟数整除外剩余的秒数

		result = parseInt(minute) + "分" + parseInt(sec) + "秒";




	} else {  //不大于一天、不大于一个小时、也不大于一分钟，那就是秒数

		result = "" + parseInt(sencond) + "秒";

	}

	return result

}

// 转换时间格式
export const srtime = (date,type) => {
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

	if(type=='day'){
		return year + '/' + addZero(month) + '/' + addZero(day)
	}
    return year + '/' + addZero(month) + '/' + addZero(day) + ' ' + addZero(hour) + ':' + addZero(minute) + ':' + addZero(second)
}
//小于10的拼接上0字符串
const addZero = (s) => {
    return s < 10 ? ('0' + s) : s;
}