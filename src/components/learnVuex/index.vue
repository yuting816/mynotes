<template>
    <div>
        <div>vuex学习</div>
        <div>
            <!-- <el-button @click="increment(10)">增加</el-button> -->
            <el-button @click="increase">增加</el-button>
            <span>{{number}}</span>
            <el-button @click="add">action 增加</el-button>
        </div>
        <div>
            getter 方法
        </div>
        <div>mutation中只能是同步函数</div>
        <div>action 提交mutation, 可以包含异步操作</div>
    </div>
</template>

<script>
// mapState，辅助函数，帮助一次性从vuex中导入多个属性
import { mapState, mapGetters, mapMutations } from 'vuex'
// mapGetters， 将store中的getter映射到局部计算属性

export default {
    data () {
      return {
        radio: '1'
      };
    },
    computed: {
        number() {
            return this.$store.state.count
        },
        ...mapState({
            //方式一： 为了获取"this", 要使用常规函数
            test(state) {
               return state.count + this.radio
            },
            // 方式二
            localNum: state => state.count,
            // 方式三
            localNum1: 'count',
            // 方法四：数组里面直接 ['state']
            //==============================================================
        }),
        doneTodos() {
            // 访问getters里面的状态
            return this.$store.getters.doneTodos
        },
        // doneTodosCount() {
        //     return this.$store.getters.doneTodosCount
        // },
        // getter回调函数支持传参, 筛选id为2的todo
        targetTodo() {
            return this.$store.getters.getTodoById(2) 
        },
        // 将store中的getter映射到局部计算属性
        ...mapGetters([
            'doneTodosCount',
        ])
    },
    methods: {
        increase() {
            this.$store.commit('increment', 10)
        },
        // 使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（
        ...mapMutations(['increment']),
        add() {
            // Action 通过 store.dispatch 方法触发
            this.$store.dispatch('increment')
        }
    },
    mounted() {
        console.log(333, this.doneTodosCount);
    }
}

</script>

