// 在子组件中使用父组件定义的数据
<template>
    <div>
        <div>我是父组件</div>
        <props-son :dataList="appData"></props-son>
    </div>
</template>

<script>
import propsSon from './props-son.vue'
export default {
    data() {
        return {
            appData: {title: '我是父组件中定义的数据'}
        }
    },
    components: {
        propsSon
    }
}
</script>

<style>
</style>