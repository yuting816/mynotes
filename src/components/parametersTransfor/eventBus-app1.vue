// 页面1， 传递数据
<template>
    <div>
        <p>页面1</p>
        <button @click="sendMsg()">点击传送页面1的数据到页面2</button>
        <!-- <button @click="test">测试</button> -->
    </div>
</template>

<script>
import {eventbus} from './eventBus.js';

export default {
    methods: {
        sendMsg() {
            // 通过EventBus的$emit方法把标签为aMasg的消息传递给另外一个页面
            // console.log(EventBus);
            eventbus.$emit("aMsg", '页面1的消息')
        }
    }
}
</script>