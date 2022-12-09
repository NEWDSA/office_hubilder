<template>
    <TopNav>
        <template v-slot:topNavTitle>
            请假申请
        </template>
        <template v-slot:topNavRight>
            <van-icon name="todo-list-o" size="25" color="white" style="margin-right: 20px;"
                @click="askforclick('history')" />
            <!-- <van-icon name="plus" size="25" color="white" style="margin-right: 20px;" @click="askforclick('add')" /> -->
        </template>
    </TopNav>
    <div class="BG-askforleaveDetail">
        <van-cell-group>
            <van-cell :value="detail.type" is-link @click="showPicker = true">
                <template #title>
                    <span class="custom-title">请假类型</span>
                    <span style="font-size: 1.2rem;color: red;margin-left: 5px;">*</span>
                </template>
            </van-cell>
            <van-cell :value="detail.startTime" is-link @click="showetime = false; showstime = true">
                <template #title>
                    <span class="custom-title">开始时间</span>
                    <span style="font-size: 1.2rem;color: red;margin-left: 5px;">*</span>
                </template>
            </van-cell>
            <van-cell :value="detail.endTime" is-link @click="showstime = false; showetime = true">
                <template #title>
                    <span class="custom-title">结束时间</span>
                    <span style="font-size: 1.2rem;color: red;margin-left: 5px;">*</span>
                </template>
            </van-cell>
            <van-cell :value="detail.longTime" title="请假时长" />
        </van-cell-group>
        <div class="cause-from" style="position: relative;margin-bottom: 2rem;">
            <van-uploader v-model="detail.causeImg" multiple :max-count="1"
                style="position: absolute;left: 1rem;bottom:-2rem;z-index: 99;" />

            <van-field v-model="detail.cause" rows="2" autosize label="请假事由" type="textarea" maxlength="200"
                placeholder="请输入原因" show-word-limit />
        </div>
        <div class="cause-from" style="position: relative;">
            <div class="title">汇报对象</div>
            <div class="acv-box">
                <div class="add">
                    <van-icon name="plus" size="25" color="#dddddd"></van-icon>
                </div>
            </div>
        </div>
        <div class="cause-from" style="position: relative;">
            <div class="title">抄送对象</div>
            <div class="acv-box">
                <div class="add">
                    <van-icon name="plus" size="25" color="#dddddd"></van-icon>
                </div>
            </div>
        </div>

        <div class="but-box">
            <div class="but">立刻提交</div>
        </div>
    </div>

    <van-datetime-picker style="position: fixed;bottom: 0;left: 0;right: 0;z-index: 999;" v-model="sdate"
        v-show="showstime" type="datetime" title="选择开始请假时间" :min-date="minDate" :max-date="maxDate"
        @confirm="checkstime" @cancel="showstime = false" />

    <van-datetime-picker style="position: fixed;bottom: 0;left: 0;right: 0;z-index: 999;" v-model="edate"
        v-show="showetime" type="datetime" title="选择结束请假时间" :min-date="minDate" :max-date="maxDate"
        @confirm="checketime" @cancel="showetime = false" />

    <van-popup v-model:show="showPicker" position="bottom">
        <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import { suantime, srtime } from '@/util/index.js'
import { useRouter } from 'vue-router';
const router = useRouter()

const detail = reactive({
    type: '',
    startTime: '请选择时间',
    endTime: '请选择时间',
    longTime: '',
    cause: '',
    causeImg: [],
    report: [],
    copyfor: []
})

const sdate = ref()
const edate = ref()

// 类型选择
const showPicker = ref(false)

// 初始化时间
const minDate = ref(new Date())
const maxDate = ref(new Date(2099, 1, 1))

const showstime = ref(false)
const showetime = ref(false)

// 选择时间点击确定 	
const checkstime = (value) => {
    detail.startTime = srtime(value)
    showstime.value = false
}
// 选择时间点击确定 	
const checketime = (value) => {
    detail.endTime = srtime(value)
    showetime.value = false
}

// 监听时间计算天数
watch(() => detail.startTime, (newVal, oldVal) => {
    if (detail.endTime != '请选择时间') {
        let timejie = parseInt(new Date(detail.endTime) - new Date(newVal)) / 1000
        console.log(timejie)
        if (Number(timejie) > 0) {
            detail.longTime = suantime(timejie)
        } else {
            detail.longTime = ''
        }
    }

})

watch(() => detail.endTime, (newVal, oldVal) => {
    if (detail.startTime != '请选择时间') {
        let timejie = parseInt(new Date(newVal) - new Date(detail.startTime)) / 1000
        console.log(timejie)
        if (Number(timejie) > 0) {
            detail.longTime = suantime(timejie)
        } else {
            detail.longTime = ''
        }
    }

})

const columns = ['事假','病假','外出'];

const onConfirm = (value) => {
  detail.type = value;
  showPicker.value = false;
};

// 判断处理
const askforclick = (type) => {
    if (type == 'history') {
        router.push('/askforleave/history')
    } else if (type == 'add') {
        router.push('/askforleave/applyfor')
    }
}

</script>

<style lang="scss">
.BG-askforleaveDetail {

    // 重装组件
    .van-cell-group {
        .van-cell {
            justify-content: space-between;

            .van-cell__title {
                flex: auto;

                color: #909399;
            }

            .van-cell__value {
                flex: auto;
                margin-right: 10px;
                color: #303133;
            }
        }
    }

    // 重装组件
    .cause-from {
        margin-bottom: 10px;

        .van-cell {
            display: block;

            .van-cell__title {

                margin-bottom: 10px;

                label {
                    color: black;
                    font-size: 1.2rem;
                    font-weight: 600;
                }
            }

            .van-field__word-num {
                color: red;
            }

        }

        .van-uploader__upload {
            width: 50px;
            height: 50px;
        }

        .van-image {
            width: 50px;
            height: 50px;
        }

        .acv-box {
            display: flex;
            align-items: center;
            padding: 10px;
            padding-left: 1rem;

            .add {
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                border: 1px solid #eeeeee;
            }
        }


        .title {
            color: black;
            font-size: 1.2rem;
            font-weight: 600;
            margin-left: 1rem;
        }
    }

    .but-box {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 6rem;

        .but {
            width: 90%;
            height: 3rem;
            margin: 10px auto;
            font-size: 1.2rem;
            line-height: 3rem;
            text-align: center;
            color: white;
            border-radius: 30px;
            background: #E6AC11;
        }
    }
}
</style>