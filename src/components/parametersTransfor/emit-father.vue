// 子组件使用父组件中定义的方法
<template>
    <div>
        <p>我是父组件</p>
        <!-- 通过notice标签(notice是自定义的名称)，告诉子组件fatherFn可以调用 -->
        <emit-son @notice="fatherFn"></emit-son>
    </div>
    
</template>

<script>
import emitSon from './emit-son.vue'

export default {
    components: {
       emitSon
    },
    methods: {
        fatherFn: function(data) {
            console.log([data.name, data.color]);
        }
    }
}


</script>

<style>

</style>