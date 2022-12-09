<template>
    <TopNav>
        <template v-slot:topNavTitle>
            考勤组列表
        </template>
        <template v-slot:topNavRight>
			<van-icon name="plus" size="26" color="#ffffff" @click="$router.push('/checkwork/setgroupwork')" />
		</template>
    </TopNav>

    <div class="BG-checkwork-groupwork">
        <div class="tab">
            <van-tabs v-model:active="groupworkTabIndex" background="#FAFAFA" color="#333333" line-width="15px"
                title-inactive-color="#BFBFBF">
                <van-tab :title="item.title" v-for="(item, index) in groupworkTabList" :key="index" :name="item.value">

                </van-tab>
            </van-tabs>
        </div>

        <div class="list">
            <div class="list-item"
                v-for="(item, index) in groupworkTabIndex == 1 ? leaveList.all : groupworkTabIndex == 2 ? leaveList.finance : leaveList.ministry "
                :key="item.id">
                <div class="item-top">
                    <div class="item-type">
                        <div class="title">{{ item.title }}</div>
                    </div>
                    <div class="item-time">{{ item.time }}</div>
                </div>

                <div class="info-item">
                    <div class="schedule">
                        <div class="schedule-status" style="border-right: 1px solid #eeeeee;">
                            <div class="value" >
                            </div>

                        </div>
                        <div class="schedule-status">
                            <div class="title">工作日：</div>
                            <div class="value" v-for="(item2, index2) in item.workDay" :key="index2">{{ item2 }}，</div>
                        </div>
                    </div>

                    <div class="set">
                    <van-icon name="edit" color="#10AF9C" size="23" @click="askforclick(item)"/>
                    <van-icon name="delete-o" color="#ED3B65" size="23" style="margin-left: 15px;" @click="delect(index)"/>
                </div>
                </div>
               

            </div>
        </div>

    </div>

    <div class="component-container" v-if="setShow">
        <setgroupwork :groupworkDetail="groupworkDetail" @backclickk="backclickke"></setgroupwork>
	</div>
    
</template>

<script setup>
import { values } from 'lodash';
import { ref, reactive } from 'vue';
import setgroupwork from './setgroupwork.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const groupworkDetail = ref()
const setShow = ref(false)

const groupworkTabIndex = ref(0)
const groupworkTabList = ref([
    {
        title: '全部',
        value: 1
    },
    {
        title: '财务部',
        value: 2
    },
    {
        title: '人事部',
        value: 3
    },

])

const leaveList = reactive({
    all: [
        {
            id: '1',
            title: '考勤组 1',
            time: '9:00~6:30',
            department: '1',
            workDay: ['一', '二', '三', '四', '五']
        },
        {
            id: '2',
            title: '考勤组 2',
            time: '9:00~6:30',
            department: '1',
            workDay: ['一', '二', '三', '四', '五']
        },
        {
            id: '3',
            title: '考勤组 3',
            time: '9:00~6:30',
            department: '2',
            workDay: ['一', '二', '三', '四', '五']
        }
    ],
    finance: [
        {
            id: '1',
            title: '考勤组 1',
            time: '9:00~6:30',
            department: ['财务部', '人事部'],
            workDay: ['一', '二', '三', '四', '五']
        },
    ],
    ministry: [
        {
            id: '2',
            title: '考勤组 2',
            time: '9:00~6:30',
            department: ['财务部', '人事部'],
            workDay: ['一', '二', '三', '四', '五']
        },
        {
            id: '3',
            title: '考勤组 3',
            time: '9:00~6:30',
            department: ['财务部', '人事部'],
            workDay: ['一', '二', '三', '四', '五']
        }
    ]
})
const askforclick = (item) => {
    if(item){
        groupworkDetail.value = item
    }
    
    setShow.value = true
}
const backclickke = ()=>{
    setShow.value = false
}

const delect = (index)=>{
    if(groupworkTabIndex.value == 1){
        leaveList.all.splice(index,1)
    }else if(groupworkTabIndex.value == 2){
        finance.all.splice(index,1)
    }else{
        ministry.all.splice(index,1)
    }
}
</script>

<style lang="scss">
.BG-checkwork-groupwork {
    .list {
        padding: 20px 10px;
        background: #F4F4F4;
        min-height: 85vh;

        .list-item {
            background: white;
            margin-bottom: 10px;
            box-shadow: 1px 2px 5px #eeeeee;
            border-radius: 5px;
            padding: 10px 20px;

            .item-top {
                display: flex;
                justify-content: space-between;
                align-items: center;


                .item-type {
                    display: flex;
                    align-items: center;

                    .title {
                        font-size: 1.3rem;
                    }

                    .tag {
                        margin-right: 5px;
                        background: #FF5143;
                        color: white;
                        padding: 0 5px;
                    }
                }

            }

            .info-item {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;

                .schedule {

                    .schedule-status {
                        padding: 5px 0;
                        display: flex;
                        align-items: center;

                        .title {
                            font-size: 1rem;
                            color: #C8C8C8;
                        }

                        .value {
                            font-size: 1rem;
                            color: #C8C8C8;
                        }
                    }

                }

                .set{
                    display: flex;
                    align-items: center;
                }
            }

        }
    }
}
</style>