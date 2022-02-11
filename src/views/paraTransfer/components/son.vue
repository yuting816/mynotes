<template>
    <div>
        <div>我是子组件</div>
        <div class="sonText">{{test}}</div>
    </div>
</template>

<script>

export default {
   props: {
       test: {
           type: String
       }
   }
}

</script>

<style lang="less" scoped>

.sonText {
   color: red
}

</style>