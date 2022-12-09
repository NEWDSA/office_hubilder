<template>
    <TopNav>
        <template v-slot:topNavTitle>
            设置
        </template>

    </TopNav>
    <div class="setting">
        <div class="about">
            <van-cell title="意见与反馈" is-link @click="$router.push('/feedback')" />
            <van-cell title="关于智慧酒店" value="1.0.0" />
        </div>


        <div class="outLogin">
            <van-cell value="退出登录" style="text-align: center;" @click="Toast('退出成功'),$router.push('/login')" />
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';

</script>

<style lang="scss">
    .setting{
        background: rgb(247, 247, 247);
        min-height: 90vh;
        
       .about{
        background: white;
       }
        .outLogin{
            background: white;
            margin-top: 20px;
            .van-cell {
                .van-cell__value{
                    text-align: center;
                }
            }
        }
    }
</style>