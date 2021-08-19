<template>
    <div>
        <p>父组件</p>
        <provide-inject-son></provide-inject-son>
    </div>
</template>

<script>
import provideInjectSon from './provide-inject-son.vue'

export default {
    components: { provideInjectSon },
    provide: {
        fatherMsg: '父组件数据'
    },
    data() {
        return {
            fruit: 'cherry'
        }
    }
}

</script>

<style>
</style>