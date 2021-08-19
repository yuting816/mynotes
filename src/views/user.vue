<template>
    <div>
        <div>user</div>
        <div>{{$route.params.id}}</div>
    </div>
</template>

<script>

export default {
    mounted() {
        // 切换路由该组件只会渲染一次，可以通过$route.params.id获取不同的ID
        // 但是组件的生命周期钩子不会被多次调用
        console.log('load-user', this.$route.params);
    }
}
</script>