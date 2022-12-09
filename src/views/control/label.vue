<template>
    <div class="temperature-item">
        <div class="temperature">
            <div class="title">
                {{ labelName }}
            </div>
            <div class="value">
                <span>{{ labelvalue }}</span>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    labelName: {
        type: String,
        default: ''
    },
    labelvalue: {
        type: String,
        default: ''
    },

})
</script>

<style lang="scss">
.temperature-item {
    width: 100%;

    .temperature {
        // width: 100%;
        padding: 10px 20px;
        text-align: center;
        border-radius: 10px;
        border: 1px solid #ececec;

        display: flex;
    justify-content: space-between;
    align-items: center;

        .title {
            // color: #0AB7A3;
            font-size: 1.2rem;
        }

        .value {
            margin: 5px 0;

            span {
                font-size: 1.3rem;
                font-weight: 600;
            }

        }
    }
}
</style>