<template>
    <div class="switch-on-off">
      <div class="title">{{ switchName }}</div>
      <div class="onoffIcon">
        {{ Switch == false ? 'Off' : 'No' }}
        <van-switch v-model="Switch" active-color="#35B9A9" inactive-color="#929393" size="16" @change="sendDeviceCommand"
          style="margin-left: 10px;" />
      </div>
    </div>
</template>

<script setup>
import { send_device_command } from '@/util/iot.js'
import { ref } from 'vue';

const Switch = ref(false)

const props = defineProps({
  switchValue: {
    type: Boolean,
    default: false
  },
  switchName: {
    type: String,
    default: ''
  },
  deviceId:{
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

Switch.value = props.switchValue
function sendDeviceCommand(e) {
  // console.log(e)
  send_device_command(e,props.deviceId,props.model,props.field,'checked')
}


</script>

<style lang="scss">
.switch-on-off {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-bottom: 10px;
  padding: 0 20px;
  width: 100%;
  
  .title {
    margin: 0;
    font-size: 1.3rem;
  }

  .onoffIcon {
    display: flex;
    align-items: center;
  }

}
</style>