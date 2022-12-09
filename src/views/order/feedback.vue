<template>
    <TopNav>
        <template v-slot:topNavTitle>
            意见反馈
        </template>

    </TopNav>

    <div class="feedback">
        <div class="feedback-from" style="position: relative;">
            <van-uploader v-model="fileList" multiple :max-count="1"
                style="position: absolute;left: 2rem;bottom:-5rem;z-index: 99;" />
            <van-cell-group inset>
                <van-field v-model="message" rows="2" autosize label="" type="textarea" maxlength="200"
                    placeholder="请输入反馈内容，我们会为您更好的服务" show-word-limit />
            </van-cell-group>
        </div>

        <div class="add-but" @click="Toast('提交成功'), $router.go(-1)">
            提交反馈
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';
const message = ref('');
const fileList = ref()
</script>

<style lang="scss">
.feedback {
    font-size: 3rem;

    .add-but {
        width: 95%;
        height: 3rem;
        margin: 7rem auto;
        font-size: 1.3rem;
        line-height: 3.5rem;
        text-align: center;
        color: white;
        border-radius: 30px;
        background: #32CDB9;
    }
}
</style>