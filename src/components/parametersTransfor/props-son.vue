<template>
    <div class="red">
        <p>我是子组件</p>
        <p>{{dataList.title}}</p>
    </div>

</template>

<script>
export default {
    name: 'propsSon',
    props: {
        dataList: {
            type: [Object]
        }
    },
    mounted() {
        console.log(this.dataList.title);
    }
}

</script>

<style>
.red {
    color: red;
}

</style>