<template>
  <div id="app">
    <!-- 左右布局 -->
    <div class="left">
      <div class="title">
        前端笔记
      </div>
      <ol class="list">
        <li>
          <router-link to="/">VUE Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/user/foo">userPage-foo</router-link>
        </li>
        <li>
           <router-link to="/myPage">MyPage</router-link>
        </li>
        <li>
           <router-link to="/user/bar">userPage-bar</router-link>
        </li>
        <li>
           <router-link to="/student">嵌套路由</router-link>
        </li>
        <li>
           <router-link to="/codeNavigation">编程式导航</router-link>
        </li>
        <li>
          <router-link to="/nameView">命名视图</router-link>
        </li>
        <li>
          <router-link to="/mapbox">mapbox测试</router-link>
        </li>
        <li>
          <router-link to="/learn-vuex">学习vuex</router-link>
        </li>
        <li>
          <router-link to="/paraTransfer">学习参数传递</router-link>
        </li>
        <li>
          <router-link to="/learnMenu">学习菜单</router-link>
        </li>
        <li>
          <router-link to="/vuePractice">vue练习</router-link>
        </li>
      </ol>
    </div>
    <div class="right">
       <router-view class="view one"/>
      <router-view class="view two" name="a"></router-view>
      <router-view class="view three" name="b"></router-view>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
    },
    mounted() {
    },
    methods: {
    }
}

</script>

<style lang="less">
/* @import '../assets/reset.less'; */

html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
    .left {
      position: absolute;
      left: 0;
      top: 0;
      width: 10%;
      height: 100%;
      border-right: 1px solid rgb(216, 214, 214);
     
      // background-color: pink;
      .title {
        text-align: center;
        font-weight: bold;
        color: #42b983
      }
    }   
    .right {
      position: absolute;
      right: 0;
      top: 0;
      width: calc(90% - 40px);
      height: calc(100% - 40px);
      display: inline-block;
      margin: 20px;
      /* background-color: green; */
    }
  
}

#nav {
  /* padding: 30px; */
}

a {
  font-weight: bold;
  color: #2c3e50;
}

 a.router-link-exact-active {
  color: #42b983;
}
.list {
  /* list-style-type: none; */
  padding-left: 40px
}
</style>
