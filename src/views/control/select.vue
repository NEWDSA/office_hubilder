<template>
  <div class="select">
    <div class="title">{{ tabName }}</div>
    <div class="kongtiao-tab">
      <div class="tab-item" v-for="(item, index) in tabList" :key="item.value"
        :style="item.value == selectValue ? 'background: #08A491;' : 'background: #F3F3F7;'" @click="item.value == selectValue ? '' : sendDeviceCommand(item.value)">
        <div :style="item.value == selectValue ? 'color:white' : 'color:#08A491'">{{ item.name }}</div>

        <!-- <van-icon name="bell" size="25" :color=" /> -->
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import {send_device_command} from '@/util/iot.js'

const props = defineProps({
  tabList: {
    type: Array,
    default: []
  },
  tabName: {
    type: String,
    default: ''
  },
  selectValue:{
    type: Number,
    default: 0
  },
  deviceId: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  field: {
    type: String,
    required: true
  }
})


function sendDeviceCommand(e){
  send_device_command(e,props.deviceId,props.model,props.field,'value')
}
</script>

<style lang="scss">
.select {
  border: 1px solid #C6D4D2;
  border-radius: 10px;
  padding: 10px;

  .title {
    font-size: 1.3rem;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  .kongtiao-tab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .tab-item {
      flex: 1;
      // width: 20%;
      text-align: center;
      padding: 10px;
      margin-right: 10px;
      // background: #F3F3F7;
      border-radius: 10px;
    }
  }
}
</style>