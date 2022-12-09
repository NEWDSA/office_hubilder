<template>
    <TopNav>
        <template v-slot:topNavTitle>
            我的考勤
        </template>
    </TopNav>
    <div class="BG-checkwork-Mywork">

        <div class="my-item">
            <div class="img">
                <img src="@/assets/hotelui/user.png" alt="">
            </div>
            <div class="info-item">
                <div class="name">王小明</div>
                <div class="department">财务部</div>
            </div>
        </div>

        <!--日历-->
        <div class="CalendarDiv">
            <nCalendar :dateList="obj1" v-on:choseDay="clickDay" v-on:changeMonth="changeDate" />

            <div v-if="showDeatil" style="margin-top: 2rem;">
                <van-steps direction="vertical" :active="-1">
                    <van-step>
                        <h2>上班打卡</h2>
                        <p :style="showdayDetail.dutyTimeStatus == '1' ? 'color:red;' : 'color:black;'" style="font-size: 1.3rem;margin: 10px 0;">打卡时间：{{ showdayDetail.dutyTime }}</p>
                        <p>{{ showdayDetail.address }}</p>
                    </van-step>
                    <van-step>
                        <h2>下班打卡</h2>
                        <p :style="showdayDetail.offdutyTimeStatus == '1' ? 'color:red;' : 'color:black;'" style="font-size: 1.3rem;margin: 10px 0;">打卡时间：{{ showdayDetail.offDutyTime }}</p>
                        <p>{{ showdayDetail.address }}</p>
                    </van-step>
                </van-steps>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import {srtime} from '@/util/index.js';
import nCalendar from '@/components/vue-calendar-component/index'

const obj1 = reactive([
    {
        recordDate: '2022/11/11',
        status: '1',
        dayDetail: {
            dutyTime: '10：49',
            dutyTimeStatus: '1',
            offDutyTime: '18：49',
            offdutyTimeStatus: '0',
            address: '广东智联蔚来科技有限公司'
        }
    },
    {
        recordDate: '2022/11/8',
        status: '0',
        dayDetail: {
            dutyTime: '8：49',
            dutyTimeStatus: '0',
            offDutyTime: '18：49',
            offdutyTimeStatus: '0',
            address: '广东智联蔚来科技有限公司'
        }
    },
    {
        recordDate: '2022/11/16',
        status: '0',
        dayDetail: {
            dutyTime: '9：49',
            dutyTimeStatus: '0',
            offDutyTime: '18：49',
            offdutyTimeStatus: '0',
            address: '广东智联蔚来科技有限公司'
        }
    },
    {
        recordDate: '2022/11/17',
        status: '0',
        dayDetail: {
            dutyTime: '7：49',
            dutyTimeStatus: '0',
            offDutyTime: '20：49',
            offdutyTimeStatus: '0',
            address: '广东智联蔚来科技有限公司'
        }
    }
])
const showDeatil = ref(false)
const showdayDetail = ref('')
const dateTemp = ref()

const checkQ = ()=>{
    for (var i = 0, val; val = obj1[i++];) {
        // console.log(val.recordDate)
        if (dateTemp.value == val.recordDate) {
            showdayDetail.value = val.dayDetail
            console.log(showdayDetail.value)
            showDeatil.value = true
            return;
        }
    }

    showDeatil.value = false
}
const clickDay = (data) => {//选中某天
    console.log(data)
    dateTemp.value = data
    checkQ();
}
const changeDate = (data) => {//左右点击切换月份
    console.log(data)
    dateTemp.value = data
    // checkQ();
}

clickDay(srtime(new Date(),'day'))
</script>

<style lang="scss">
.BG-checkwork-Mywork {
    padding: 20px;

    .my-item{
        display: flex;
        margin-bottom: 20px;

        .img{
            
            img{
                width: 4rem;
                height: 4rem;
                border-radius: 50%;

            }
        }
        .info-item{
            margin-left: 20px;
            .name{
                font-size: 1.2rem;
            }
            .department{
                font-size: .8rem;
                color: #999999;
            }
        }
    }




}
.van-step__circle{
    width: 10px;
    height: 10px;
}
</style>