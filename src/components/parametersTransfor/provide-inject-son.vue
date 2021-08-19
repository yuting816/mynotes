<template>
    <div class="red">
        <p>我是子组件</p>
        <p>{{fatherMsg}}</p>
    </div>
    
</template>

<script>
export default {
    // name: 'provideInjectSon',
    inject: ['fatherMsg'],
    // methods: {
    //     getmsg() {
    //         console.log(this.fatherMsg);
    //     }
    // },
    created() {
        console.log(this.fatherMsg);
    }
}

</script>

<style>
.red {
    color: red;
}
</style>