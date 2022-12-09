<template>
    <div></div>
    <div class="light-model">

        <div class="hua">
            <div style="text-align: center;font-size: 1.3rem;margin-left: 10px;">
                {{ slideName }}
            </div>
            <div style="width: 70%;margin-top: 40px;">
                <div style="width: 100%;">
                    <van-slider v-model="value" bar-height="5px" active-color="#08A491" :max="slideObj.max"
                        :min="slideObj.min" :step="slideObj.step" @change="sendDeviceCommand">
                        <template #button>
                            <div class="custom-button" style="width: 3rem;">

                                <div class="valuee">{{ value }}</div>
                                <van-icon name="play" size="20" color="#08A491" style="transform: rotate(90deg);" />

                            </div>
                        </template>
                    </van-slider>
                </div>
            </div>

            <!-- <div style="width: 10%;text-align: center;">
                <van-icon name="plus" size="25" color="#9d9d9d" />
            </div> -->
        </div>
    </div>

</template>

<script setup>
import { ref, watch } from 'vue';
import {send_device_command} from '@/util/iot.js'

const value = ref()

const props = defineProps({
    slideObj: {
        type: Object,
        default: {}
    },
    slideName: {
        type: String,
        default: ''
    },
    nowValue: {
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
value.value = props.nowValue

function sendDeviceCommand(e){
  send_device_command(e,props.deviceId,props.model,props.field,'value')
}

</script>

<style lang="scss">
.light-model {
    padding: 10px 40px 20px 10px;
    // padding: 10px;
    border: 1px solid #C6D4D2; 
    border-radius: 10px;

    .model {
        display: flex;
        align-items: center;
        justify-content: center;

        .tab-item {
            // flex: 1;
            width: 30%;
            text-align: center;
            padding: 10px;
            background: white;
            border-radius: 20px;
            margin: 10px 0;
        }
    }

    .hua {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .color {
            .van-slider__button {
                background: #FC9920;
                border: 3px solid white;
                box-shadow: none;
            }
        }
    }
}

.custom-button {
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    // background-color: #ee0a24;
    border-radius: 100px;
    margin-bottom: 3rem;


    .valuee {
        text-align: center;
        // padding: 5px 15px;
        width: 3rem;
        height: 2rem;
        line-height: 2rem;
        border-radius: 20px;
        color: white;
        background: #35B9A9;
        margin: 0 auto;
        // color: #6d6d6d;
    }
}
</style>