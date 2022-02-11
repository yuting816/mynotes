import Vue from 'vue'
// 主页面
import App from './App.vue'
// 路由
import router from './router'
// css 编译器 less
import less from 'less'
import ElementUI from 'element-ui';
// element-ui 样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入store， 全局状态管理
import store from './store.js';

Vue.config.productionTip = false
// 引入less
Vue.use(less)
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
  // 这可以把 store 的实例注入所有的子组件
  store
}).$mount('#app')
