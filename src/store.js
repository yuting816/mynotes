import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
          ]
    },
    // 更改state中状态唯一的方法就是提交mutation, 只能是同步函数
    mutations: {
        // 注册增加事件, 提交要用commit
        // 可以向mutation中添加额外的参数, payload
        increment(state, n) {
            state.count+= n
        },
        increment1(state) {
            state.count++
        }
    },
    // 类似于计算属性，当依赖的值发生变化时重新计算
    getters: {
        doneTodos: state =>{
            return state.todos.filter(todo =>todo.done)
        },
        // getters可以接受其他getters作为第二个参数
        doneTodosCount: (state, getters) =>{
            return getters.doneTodos.length
        },
        // 在回调函数中传参
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
        
    },
    // actions处理异步事件
    actions: {
        // context 是一个与 store 实例具有相同方法和属性的对象
        increment(context) {
            console.log(11111111);
            context.commit('increment1')
        }
    }
})

// 已经调用一次事件
// store.commit('increment', 10)

// 注意导出的时候加没加大括号
export default store
