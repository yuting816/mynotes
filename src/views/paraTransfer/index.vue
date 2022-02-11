<template>
    <div>
        <div>
            <span>我是父组件 </span> 
            <el-button @click="transfer">点击改变</el-button>
        </div>
        <son :test="test"></son>
    </div>
</template>

<script>
import son from './components/son.vue'

export default {
    data() {
        return {
            test: '原来参数'
        }
    },
    components: {
        son
    },
    methods: {
        transfer() {
            this.test='我是改变后的参数'
        }
    }
}
</script>