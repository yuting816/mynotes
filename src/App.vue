<template>
  <div id="app">
    <div id="nav">
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/myPage">MyPage</router-link> | 
      <!-- 动态路由，foo和bar都指向同一个页面组件 -->
      <router-link to="/user/foo">userPage-foo</router-link> |
      <router-link to="/user/bar">userPage-bar</router-link> |
      <!-- 嵌套路由 -->
      <router-link to="/student">嵌套路由</router-link> |
      <!-- 编程式导航：可实现点击跳转路由 --> 
      <router-link to="/codeNavigation">编程式导航</router-link> |
      <router-link to="/nameView">命名视图</router-link>
    </div> 
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view class="view one"/>
    <!-- 命名视图 -->
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
