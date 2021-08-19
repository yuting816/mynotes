<template>
    <div class="red">
        <p>我是子组件</p>
        <button @click="getFatherFn">点我获取父组件中的方法</button>
    </div>
    
</template>

<script>
export default {
    name: 'emitSon',
    methods: {
        getFatherFn() {
            // 通过emit方法找到notice，从而获得fatherFn方法
            // console.log(1111);
            this.$emit('notice', {name: 'cherry', color: 'red'})
        },
    }
}

</script>

<style>
.red {
    color: red;
}

</style>