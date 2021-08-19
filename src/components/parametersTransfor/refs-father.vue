// refs 父组件使用子组件中定义的方法
<template>
    <div>
        <p>我是父组件</p>
        <button  @click="_changeColor">点击我改变颜色</button>
        <!-- 子组件要使用ref属性把自己的方法抛出来给父组件使用 -->
        <refs-son  ref="sonFunction"></refs-son> 
    </div>
    
</template>

<script>
import refsSon from './refs-son.vue'

export default {
    components: {
        refsSon
    },
    methods: {
        _changeColor: function() {
            // console.log(111);
            this.$refs.sonFunction._changeSonColor('改变颜色')
        }
    }
}


</script>

<style>
</style>