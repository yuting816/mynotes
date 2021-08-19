<template>
    <div id="left-panel">
        <div id="legend" v-bind:class="{show: isActive}">111</div>
        <div id="shouqi" v-bind:class="{move: isActive}" @click='hide'>{{msg}}</div>

    </div>
    
</template>

<script>
// 实现left-panel盒子的收缩： left-panel盒子动态绑定一个类，这个类是否active由 shouqi span是否被点击控制
export default {
    data() {
        return {
            isActive: false,
            msg: '收 起',
            flag: 1
        }
    },
    methods: {
        // 绑定方法动态切换class
        hide() {
            this.isActive = !this.isActive;
            if (this.flag % 2 === 0) {
                this.msg = '收 起';
                this.flag ++
            } else {
                this.msg = '图 例';
                this.flag ++
            }
        }
    }

}
</script>

<style>
#left-panel {
    width: 230px;
    height: 520px;
    /* background-color: pink; */
}
.show {
    transform: scale(0);
    
}
#legend {
    float: left;
    width: 200px;
    height: 516px;
    background-color: #01123d;
    border: 2px solid #1bcae4;
    color: white;
    /* 左下方收缩 */
    transform-origin: left bottom;
    /* 收缩过渡时间为1秒 */
    transition: 0.5s;
}
#shouqi {
    float: left;
    color: white;
    background-color:#1bcae4;
    font-size: 14px;
    padding: 3px 2px 2px 0;
    /* 内容垂直从上到下排列 */
    writing-mode: vertical-lr;
    transition: 0.5s;
}
.move {
    transform: translate(-202px, 485px);

}
#shouqi:hover {
    cursor: pointer
}
</style>