<template>
    <TopNav :backrou="props.groupworkDetail ? false : true">
        <template v-slot:topNavBack v-if="props.groupworkDetail">
            <van-icon name="down" size="25" color="white" style="transform: rotate(90deg);" @click="backclick" />
        </template>


        <template v-slot:topNavTitle>
            {{ props.groupworkDetail ? '修改考勤组' : '设置考勤组' }}
        </template>
    </TopNav>

    <div class="groupwork-set">
        <div class="groupwork-name">
            <van-field v-model="groupworkName" required placeholder="请输入节假日名称" style="display: block;" />
        </div>


        <div class="set-from">
            <div class="set-from-data">
                <div class="data-title">上班时间</div>
                <div class="data-box">
                    <div class="start-data" @click="showStartDay = true">{{ startDay }}</div>
                    <div class="end-data" @click="showEndDay = true">{{ endDay }}</div>
                </div>
            </div>

            <div class="set-from-data" style="margin-bottom:20px;">
                <div class="data-title">工作日</div>
                <div class="data-box">
                    <div class="fit-data" v-for="(item, index) in dayList" :key="index"
                        :style="item.status == false ? 'border:1px solid #A1B1AF;color:#A1B1AF' : 'background:#10AF9C;color:white;'"
                        @click="item.status = !item.status">{{ item.value }}</div>
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
            <div class="personnel-item">
                <div class="item-top">
                    <div class="item-title">不需考勤人员</div>
                    <div class="item-add">+ 人员</div>
                </div>
                <div class="item-con">
                    <div class="bumen">财务部，研发部</div>
                </div>

            </div>
            <div class="personnel-item">
                <div class="item-top">
                    <div class="item-title"> 请假审批人</div>
                    <div class="item-add">+ 人员</div>
                </div>
                <div class="item-con">
                    <div class="bumen">财务部，研发部</div>
                </div>

            </div>

        </div>
    </div>

    <div class="add-but" @click="addgroupwork">
        {{ props.groupworkDetail ? '确认修改' : '确认新增' }}
    </div>

    <van-calendar v-model:show="showStartDay" :show-confirm="false" @confirm="onConfirm(1, $event)" color="#10AF9C" />

    <van-calendar v-model:show="showEndDay" :show-confirm="false" @confirm="onConfirm(2, $event)" color="#10AF9C" />

</template>

<script setup>
import { ref, reactive } from "vue";

import { Toast } from "vant";
import { useRouter } from "vue-router";
const route = useRouter();
let emit = defineEmits(["backclickk"]);

const dayList = reactive([
    { value: 'SUN', status: false },
    { value: 'MON', status: false },
    { value: 'TUE', status: false },
    { value: 'WED', status: false },
    { value: 'THU', status: false },
    { value: 'FRI', status: false },
    { value: 'STA', status: false },
])

// 日期
const startDay = ref('请选择时间');
const showStartDay = ref(false)

const endDay = ref('请选择时间');
const showEndDay = ref(false)


const groupworkName = ref('')

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
const onConfirm = (id, value) => {
    showStartDay.value = false;
    showEndDay.value = false;
    if (id == 1) {
        startDay.value = formatDate(value);
    } else if (id == 2) {
        endDay.value = formatDate(value);
    }
    // console.log(formatDate(value))
};

const props = defineProps({
    groupworkDetail: {
        type: Object,
        default: ''
    }
})

if (props.groupworkDetail) {
    groupworkName.value = props.groupworkDetail.title

    // dayList是从0开始 所以要加一个1
    let day = [1,1, 2, 3, 4, 5];
    for (let i = 0, val; val = day[i++];) {
        for (let y = 0, vall; vall = dayList[y++];) {
            // console.log(i,'jasoid',y)
            if (y == day[i]){
                dayList[y].status = true
            }
               
        }
    }

}

const backclick = () => {
    emit("backclickk", "关闭修改页");
}

// 新增游客
const addgroupwork = () => {
    if (props.groupworkDetail) {
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
.groupwork-set {
    padding: 10px;
    margin-bottom: 20px;

    .groupwork-name {
        input {
            font-size: 1.3rem;
        }
    }

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

        .set-from-data {
            padding: 10px;
            // border: 1px solid #10AF9C;
            border-radius: 20px;

            .data-title {
                color: #10AF9C;
                margin-bottom: 10px;
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
                    font-size: .9rem;
                    width: 3rem;
                    height: 3rem;
                    line-height: 3rem;
                    text-align: center;
                    border-radius: 50%;
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

                }

                .item-add {
                    color: #FF5E3A;

                }
            }

            .item-con {
                padding: 20px 10px;

                .bumen {
                    font-size: 1.2rem;
                }
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