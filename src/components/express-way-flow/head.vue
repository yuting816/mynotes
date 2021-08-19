<template>
    <div class="head">
        <div id="menu">
            <div id="systemTitle" class="iconfont icon-tocc">深圳市道路交通运行指数系统</div>
            <ul>
                <li>
                    <p class="iconfont icon-jiaotonglukuang"></p>
                    <p class="rightLine">全景交通</p>
                </li>
                <span>|</span>
                <li>
                    <p class="iconfont icon-jiancejihua"></p>
                    <p class="rightLine">监测预警</p>
                </li>
                <span>|</span>
                <li>
                    <p class="iconfont icon-bk-datatable2"></p>
                    <p class="rightLine">数据查询</p> 
                </li>
                <span>|</span>
                <li>
                    <p class="iconfont icon-fenxi"></p>
                    <p class="rightLine">专业分析</p>
                </li>
                <span>|</span>
                <li>
                    <p class="iconfont icon-xitongguanli"></p>
                    <p class="rightLine">系统管理</p>
                </li>
                <span>|</span>
            </ul>
        </div>
        <div id="userManage">
            <ul>
                <li>
                    <span class="iconfont icon-yijianfankui"></span>
                    <a href="">意见反馈</a>欢迎您，超级管理员
                </li>
                <li>
                    <span id="time">{{msg}}</span>
                    <a href="">修改密码</a>
                    <a href="">退出</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "head",
    data() {
        return {
            msg: 0
        }
    },
    methods: {
        // 定义方法，不需要function声明？
        setTime() {
            // 每秒钟刷新获取时间
            setInterval(this.getCurrentTime, 1000)
        },
        getCurrentTime() {
            let time = new Date()
            const weeks = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            // 拼接时间
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDate();
            let week = time.getDay();
            let chineseWeek = weeks[week-1]
            let currentTime = time.toTimeString().split(" ")[0];
            this.msg = year + '-' + month + '-' + day + chineseWeek + currentTime  
        }
    },
    mounted() {
        this.setTime()
    }
}
</script>

<style>
/* scoped属性实现样式私有化 */
@font-face {font-family: "iconfont";
  src: url('../../assets/iconfont/iconfont.eot?t=1603357718137');
  src: 
  url('../../assets/iconfont/iconfont.eot?t=1603357718137#iefix') format('embedded-opentype') /* IE6-IE8 */,
  url('../../assets/iconfont/iconfont.woff?t=1603357718137') format('woff'),
  url('../../assets/iconfont/iconfont.ttf?t=1603357718137') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('../../assets/iconfont/iconfont.svg?t=1603357718137#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

li {
   list-style: none;
   color: white;
}

.head {
    height: 80px;
    display: flex;
    /* 设置容器主轴的方向 */
    flex-direction: row;
    /* 水平排列左边对齐 */
    justify-content: space-between;
    /* 垂直居中对齐 */
    align-items: center;
    /* 子div在父div中垂直居中 */
    /* line-height: 75px; */
    background-color: rgba(27, 61, 96, 0.8);
    color: white;
    border-bottom: 1px solid rgb(2, 221, 253);
    
}

#menu {
    display: flex;
    align-items: center;
    
}
#systemTitle {
    height: 39px;
    /* line-height: 39px; */
    padding: 0 40px; 
    font-size: 20px;
    
}

#menu ul {
    display: flex;
    align-items: center;
}

#menu ul li {
    display: inline-block; 
    padding: 0 30px;
    text-align: center;
}

/* #menu ul li::after {
    display: inline-block;
    content: '';
    height: 10px;
    border: 1px solid white
} */

#menu  ul li:hover {
    color: rgb(2, 221, 253);
    /* border-right: 0px solid white; */
}

#userManage {
    padding-right: 20px;
}

#userManage li {
    list-style: none;
}

#userManage ul a {
    padding-right: 10px;
    color: white;
    font-size: 14px;

}
.icon-tocc:before {
  font-size: 30px;
  padding-right: 10px;
}

.icon-yijianfankui {
    padding-right: 5px;
}
#time {
    padding-right: 5px;
    font-size: 14px;
}


</style>