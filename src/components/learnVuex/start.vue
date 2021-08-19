<template>
    <div>
        <div>根组件</div>
        <div>{{count}}</div>
        <state></state>
        <div>{{doneTodosCount}}</div>
    </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'

Vue.use(Vuex);
// store来管理公共的状态
const store = new Vuex.Store({
   state: {
       count:0,
       todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
       ]
   },
   mutations: { 
       //    必须是同步函数
        increment(state) {
            state.count += 1
        },
        //   还可以传入荷载
        incrementN(state, payload) {
            state.count += payload.amount
        }
   },
   //  提交Mutation，可包含异步操作
   actions: {
    //    increment(context) {
    //     //    context 对象具有和store实例相同的方法和属性
    //        context.commit('increment')
    //    },
    //    参数解构的写法
       increment({commit}) {
           commit('increment')
       },
       incrementAsync({commit}) {
           setTimeout(()=>{
              commit('increment')
           }, 1000)

       }
   },

   //  相当于组件的vue组件的计算实例
   getters: {
        // 可接受state作为第一个参数
        doneTodos: state => {
            // 返回一个新的状态
            return state.todos.filter(todo => todo.done)
        },
        // 接受其他getter作为第二个参数
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        // 通过让getter返回函数实现传参，当需对store中数据查询时有用
        getTodoById: function(state) {
            return (id)=>{
                return state.todos.find(todo => todo.id === id)
            }
        }
   }
});
// commit方法调用increment触发状态变更
// store.commit('increment');
// console.log(store.state.count);
// console.log(store.getters.getTodoById(2));
store.dispatch('increment')

export default {
    components: {
        state
    },
    computed: {
        count: function() {
            return this.$store.state.count
        },
        doneTodosCount: function() {
            return this.$store.getters.doneTodosCount
        }
    },
    store: store,
    methods: {
      increment() {
        //   this.$store.commit('increment');
        //   console.log(this.$store.state.count);
            this.$store.commit('incrementN', {
                amount: 10
            })
      }

    },
    mounted() {
        this.increment()
    }
    
}
</script>


<style>

</style>