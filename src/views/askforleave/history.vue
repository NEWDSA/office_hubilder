<template>
  <TopNav>
      <template v-slot:topNavTitle>
          请假记录
      </template>
  </TopNav>
  <div class="BG-askforleave">
      <div class="tab">
          <van-tabs v-model:active="festivalTabIndex" background="#FAFAFA" color="#333333" line-width="15px"
              title-inactive-color="#BFBFBF">
              <van-tab :title="item.title" v-for="(item, index) in festivalTabList" :key="index" :name="item.value">

              </van-tab>
          </van-tabs>
      </div>

      <div class="list">
          <div class="list-item"
              v-for="(item, index) in festivalTabIndex == 1 ? leaveList.all : festivalTabIndex == 2 ? leaveList.await : leaveList.succeed "
              :key="item.id" @click="askforclick('detail')">
              <div class="item-top">
                  <div class="item-type">
                      <div class="tag">假</div>
                      <div class="title">{{ item.title }}</div>
                  </div>
                  <div class="item-time">{{ item.time }} ></div>
              </div>

              <div class="schedule">
                  <div class="schedule-status" style="border-right: 1px solid #eeeeee;">
                      <div class="title">当前步骤</div>
                      <div class="value"
                          :style="item.step == 0 ? 'color:#10AF9C' : item.step == 1 ? 'color:#FF5143' : 'color:#50A3EF'">
                          {{ item.step == 0 ? '已同意' : item.step == 1 ? '已拒绝' : '待审核' }}</div>

                  </div>
                  <div class="schedule-status">
                      <div class="title">{{ item.day }}</div>
                      <div class="value" :style="item.status == 0 ? 'color:#10AF9C' : 'color:#FFAA72'">{{ item.status
                              == 0 ? '事假' : '病假'
                      }}</div>
                  </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script setup>
import { values } from 'lodash';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const festivalTabIndex = ref(0)
const festivalTabList = ref([
  {
      title: '全部',
      value: 1
  },
  {
      title: '待审核',
      value: 2
  },
  {
      title: '已处理',
      value: 3
  },

])

const leaveList = reactive({
  all: [
      {
          id: '1',
          title: '请假申请',
          time: '2022/09/29  11:16:39',
          step: '2',
          type: '1',
          day:'1天'
      },
      {
          id: '2',
          title: '请假申请',
          time: '2022/09/29  11:16:39',
          step: '0',
          type: '0',
          day:'0.5天'
      },
      {
          id: '3',
          title: '请假申请',
          time: '2022/09/29  11:16:39',
          step: '1',
          type: '0',
          day:'2天'
      }
  ],
  await: [
      {
          id: '1',
          title: '请假申请',
          time: '2022/09/29  11:16:39',
          step: '2',
          type: '1',
          day:'1天'
      },
  ],
  succeed: [
      {
          id: '2',
          title: '请假申请',
          time: '2022/09/29  11:16:39',
          step: '0',
          type: '0',
          day:'0.5天'
      },
      {
          id: '3',
          title: '请假申请',
          time: '2022/09/29  11:16:39',
          step: '1',
          type: '0',
          day:'2天'
      }
  ]
})
</script>

<style lang="scss">
.BG-askforleave {
  .list {
      padding: 20px 10px;
      background: #F4F4F4;
      min-height: 85vh;

      .list-item {
          background: white;
          margin-bottom: 10px;
          box-shadow: 1px 2px 5px #eeeeee;
          border-radius: 5px;

          .item-top {
              padding: 10px 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid #EEEEEE;

              .item-type {
                  display: flex;
                  align-items: center;

                  .tag {
                      margin-right: 5px;
                      background: #FF5143;
                      color: white;
                      padding: 0 5px;
                  }
              }

              .item-time {
                  color: #BDBDBD;
                  font-size: .9rem;
              }
          }

          .schedule {
              display: flex;

              .schedule-status {
                  width: 50%;
                  text-align: center;
                  padding: 10px 0;

                  .title {
                      font-size: .9rem;
                      color: #C8C8C8;
                  }

                  .value {
                      font-size: 1.2rem;
                  }
              }

          }
      }
  }
}
</style>