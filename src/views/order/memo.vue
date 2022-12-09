<template>
    <TopNav>
        <template v-slot:topNavTitle>
            备忘录
        </template>
        <template v-slot:topNavRight>
            <van-icon name="plus" color="white" size="20" @click="$router.push('/addMemo')"></van-icon>
        </template>
    </TopNav>

  <div class="memo">
    <div class="memo-list">
        <div class="memo-item" v-for="(item,index) in memoList" :key="index">
            <div class="memo-time">
                <div class="icon" :style="'background:'+item.iconColor+';'"></div>
                <div>{{ item.time }}</div>
            </div>
            <div class="memo-con">
                <div class="memo-img"><img :src="item.img" alt=""/></div>
                <div class="memo-value">{{ item.value }}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from 'vue';

    const memoList = ref([
        {
            img:'/src/assets/hotelui/computer.png',
            value:'今天早上九点开部门例会',
            time:'09月18日 16:23',
            iconColor:'#BF9AFF'
        },
        {
            img:'/src/assets/hotelui/watch.png',
            value:'这周日早上九点到下午六点加班',
            time:'09月19日 16:23',
            iconColor:'#58DA79'
        },
        {
            img:'/src/assets/hotelui/reader.png',
            value:'读书一小时',
            time:'09月10日 16:23',
            iconColor:'#8898FF'
        },
        {
            img:'/src/assets/hotelui/can.png',
            value:'中午没吃午饭',
            time:'09月18日 16:23',
            iconColor:'#F19E70'
        },
        {
            img:'/src/assets/hotelui/computer.png',
            value:'总结',
            time:'09月16日 16:23',
            iconColor:'#BF9AFF'
        }
        
    ])
</script>

<style lang="scss">
.memo{
    background: #ECFEFF;
    min-height: 90vh;
    padding: 10px;

.memo-list{
    .memo-item{
        margin-bottom: 20px;

        .memo-time{
            display: flex;
            align-items: center;

            .icon{
                margin-left: 10px;
                margin-right: 10px;
                width: .5rem;
                height: .5rem;
                border-radius: 50%;

            }
        }

        .memo-con{
            background: white;
            padding: 10px;
            display: flex;
            align-items: center;
            box-shadow: 1px 1px 5px #bae3e5;
            border-radius: 10px;

            .memo-img{
                width: 20%;

                img{
                    width: 80%;
                }
            }

            .memo-value{
                width: 70%;
            }
        }
    }
}





}
</style>