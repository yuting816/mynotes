<template>
    <div class="red">
        <p>我是子组件</p>
        <!-- <button>按钮</button> -->
    </div>
    
</template>

<script>
export default {
    name: 'refsSon',
    methods: {
        _changeSonColor: function(data) {
            alert(data)
        }
    }
}
</script>

<style>
.red {
    color: red;
}
</style>