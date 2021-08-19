import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: ()=>import(/* webpackChunkName: "home" */'../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/myPage',
      name: 'MyPage',
      component: () => import(/* webpackChunkName: "myPage" */ '../views/myPage.vue')
    },
    // 动态路由配置
    {
      path: '/user/:id',
      name: 'UserPage',
      component: ()=>import(/* webpackChunkName: "user" */'../views/user.vue')
    },
    // 嵌套路由
    {
      path: '/student',
      name: 'StudentPage',
      component: ()=>import(/* webpackChunkName: "student" */'../views/nested-router/student.vue'),
      children: [
        {
          path: 'profile',
          // profile.vue会被渲染到student.vue中的router-view组件中
          component: ()=>import('../views/nested-router/profile.vue')
        },
        {
          path: 'friends',
          component: ()=>import('../views/nested-router/friends.vue')
        }
      ]
    },
    // 编程式导航
    {
      path:'/codeNavigation',
      name: 'CodeNavigation',
      component: ()=>import(/* webpackChunkName: "codeNavigation" */'../views/code-navigation/index.vue')
    },
    // 命名视图
    {
      path: '/nameView',
      components: {
        // default: import('../views/name-view/view-default.vue'),
        "a": ()=>import(/* webpackChunkName: "nameView" */'../views/name-view/view-a.vue'),
        "b": ()=>import(/* webpackChunkName: "nameView" */'../views/name-view/view-b.vue')
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
