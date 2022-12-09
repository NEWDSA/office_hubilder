<template>
    <TopNav>
        <template v-slot:topNavTitle>
            请假详情
        </template>
    </TopNav>
    <div class="BG-askforleaveDetail">
        <van-cell-group>
            <van-cell title="请假类型" :value="detail.type" />
            <van-cell title="开始时间" :value="detail.startTime" />
            <van-cell title="结束时间" :value="detail.endTime" />
            <van-cell title="请假时长" :value="detail.longTime" />
        </van-cell-group>
        <div class="cause-from" style="position: relative;">
            <van-uploader v-model="fileList" multiple :max-count="1" readonly
                style="position: absolute;left: 1rem;bottom:-2rem;z-index: 99;" />

            <van-field v-model="detail.cause" rows="2" autosize readonly label="请假事由" type="textarea" maxlength="200"
                placeholder="" show-word-limit />
        </div>
        <div class="cause-from" style="position: relative;margin-bottom: 5rem;">
            <div class="title">汇报对象</div>
            <van-uploader v-model="fileList" multiple :max-count="1" readonly
                style="position: absolute;left: 1rem;bottom:-5rem;z-index: 99;" />
        </div>
        <div class="cause-from" style="position: relative;">
            <div class="title">抄送对象</div>
            <van-uploader v-model="fileList" multiple :max-count="1" readonly
                style="position: absolute;left: 1rem;bottom:-5rem;z-index: 99;" />
        </div>

        <div class="but-box" >
           <div class="but">同意</div>
           <div class="but">拒绝</div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const detail = reactive({
    type: '事假',
    startTime: '2022-10-27 09:00(星期五)',
    endTime: '2022-10-27 18:30(星期五)',
    longTime: '1天',
    cause: '生病',
    causeImg: '',
    report: '',
    copyfor: ''
})
const fileList = ref()
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
        margin-bottom: 3rem;
        .van-cell {
            display: block;

            .van-cell__title{
                
                margin-bottom: 10px;
                label{
                    color: black;
                    font-size: 1.2rem;
                    font-weight: 600;
                }
            }

            .van-field__word-num{
                color: red;
            }

        }

        .van-uploader__upload{
            width: 50px;
            height: 50px;
        }

        .title{
            color: black;
            font-size: 1.2rem;
            font-weight: 600;
            margin-left: 1rem;
        }
    }
    
    .but-box{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 6rem;

        .but {
        width: 43%;
        height: 3rem;
        margin: 10px auto;
        font-size: 1.3rem;
        line-height: 3rem;
        text-align: center;
        color: white;
        border-radius: 30px;
        background: #E6AC11;
    }
    }
}
</style>