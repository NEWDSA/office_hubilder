<template>
    <TopNav>
        <template v-slot:topNavTitle>
            常见问题
        </template>

    </TopNav>

    <div class="question">
        <div class="ZJ-question-search">
            <van-field v-model="value1" left-icon="search" placeholder="搜索" center />
        </div>
        <div class="question-list">
            <div class="question-item" v-for="(item, index) in questionList" :key="index">
                {{ item.value }}
            </div>

            <div style="color:#999999;font-size: .5rem;text-align: center;margin-top: 30px;">没有更多啦</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const questionList = ref([
    {
        value: '常见问题常见问题常见问题常见问题?'
    },
    {
        value: '常见问题常见问题常见问题常见问题?'
    },
    {
        value: '常见问题常见问题常见问题常见问题?'
    },
    {
        value: '常见问题常见问题常见问题常见问题?'
    }
])
</script>

<style lang="scss">
.question {
    font-size: 3rem;
    padding: 20px;

    .ZJ-question-search {
        margin-top: 5px;

        .van-cell {
            width: 100%;
            margin: 0 auto;
            height: 35px;

            input::-webkit-input-placeholder {
                /* WebKit browsers */
                color: #929495;
            }

            border-radius: 10px;
            background:#C6E8E4;
            color: black;
        }
    }

    .question-list {
        margin-top: 20px;

        .question-item {
            padding: 20px 10px;
            border-bottom: 1px solid #dddddd;
        }
    }

}
</style>