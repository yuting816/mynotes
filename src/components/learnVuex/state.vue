<template>
    <div class="red">
        <div>子组件</div>
        <div>{{count}}</div>
    </div>
</template>

<script>
export default {
    computed: {
        // count: () => {
        //    return this.$store.state.count
        // }
        // 从根组件直接传入状态
        count() {
           return this.$store.state.count
        }
    },
    methods: {
        increment() {
          // 根组件传入的方法
          this.$store.commit('increment');
          //   console.log(this.$store.state.count);
        }
    },
    mounted() {
        this.increment()
    }
}

</script>

<style>
.red {
    color: red;
}

</style>