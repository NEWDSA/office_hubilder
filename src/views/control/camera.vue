<script setup>
import { send_device_command, video_stop } from '@/util/iot.js'

const props = defineProps({
    deviceId: {
        type: String,
        required: true
    },
    name: {
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

function sendDeviceCommand(e) {
    console.log(e)
    send_device_command(e,props.deviceId,props.model,props.field,'value')
}

function videoStop(e) {
    video_stop(e.target)
}
</script>

<template>
    <div class="ui_form_item flexbox">
        <figure class="mb5"><img :id="deviceId + '-cover'" width="100%" src="@/assets/camera.jpg"
                class="loading_gif success" data--lazy-load-img-state="success" :device="deviceId" :model="model"
                :field="field" vfield="" @click="sendDeviceCommand"></figure>
        </div>
        <button type="button" style="display:none" :device="deviceId" :id="deviceId + '-closeButton'" @click="videoStop"
            class="ui_btn ui_inline" size="xs">关闭</button>

        <div class="player" :id="deviceId + '-player'"></div>
</template>
<style scoped>
.player {
    background: rgba(13, 14, 27, 0.7);
    width: 100vw;
    height: calc(100vh - 600px);
    display: none;
}

@media (max-width: 720px) {
    .player {
        width: 90vw;
        height: 52.7vw;
    }
}

.ui_form_item img{
    width: 100%;
}
</style>