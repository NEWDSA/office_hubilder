<template>
    <TopNav :back="false">
        <template v-slot:topNavTitle>
            登录
        </template>
    </TopNav>

    <div class="login">
        <!-- <div class="login-title">登录</div> -->
        <div class="roomAdd-con-box">
            <van-field v-model="username" type="text" label="用户名：" placeholder="请输入用户名" style="display: block;" />
            <van-field v-model="password" :type="eye" label="密码：" placeholder="密码"
                :right-icon="eye == 'password' ? 'closed-eye' : 'eye'" style="display: block;"
                @click-right-icon="switchPasswordType" />

            <!-- 没用 -->
            <van-field v-model="kong" required readonly />
        </div>

        <div class="add-but" @click="tologin">
           登 录
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';

import { useRouter } from 'vue-router';
const router = useRouter()

const username = ref('');
const password = ref('');
const kong = ref('');


const eye = ref('password')

const switchPasswordType = () => {
    eye.value = eye.value == 'password' ? 'text' : 'password'
}

const tologin = () => {
    if (username.value === '1' && password.value === '1') {
        Toast('登录成功，正在跳转到首页...');
        setTimeout(() => {

            router.push('/home');
        }, 2000)
    } else {
        Toast('账号或密码错误，请重试！');
    }

}

</script>

<style lang="scss">
.login {
    padding: 20px;

    .login-title {
        font-size: 3rem;
    }

    .van-cell {
        margin-bottom: 10px;

        .van-cell__title {
            width: 100%;

            label {
                font-size: 1.3rem;
            }

        }

        .van-cell__value {
            margin-top: 10px;
        }
    }

    .van-cell:after {
        border-bottom: 1px solid #10AF9C;
    }

    .add-but {
        width: 95%;
        height: 2.8rem;
        margin: 10px auto;
        font-size: 1.3rem;
        line-height: 2.8rem;
        text-align: center;
        color: white;
        border-radius: 30px;
        background: #32CDB9;
    }
}
</style>