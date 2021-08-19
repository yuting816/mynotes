<template>
<!-- 右侧栏 -->
    <div id="right-panel">
        <!-- 上部盒子 -->
        <div id="top">
            <h3 class="title">今日市境界点进出深流量
                <!-- 使用elementUI实现文字框提示 -->
                <el-tooltip class="item" effect="light" placement="right">
                    <div slot="content">
                        市境界点，即深圳市与外市 <br>
                        交界处附近监测点位
                    </div>
                    <span class="iconfont icon-sutpc-shiyijieshizhushi_huaban" id="tip"></span>
                </el-tooltip>
            </h3>
            <div class="content">
                <div class="inflow">
                    <div class="img-shenzhen">
                        <svg class="shenzhen" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="70" height="36" viewBox="0 0 104 55">
                            <image width="100" height="52"
                            xlink:href="data:img/png;base64,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" />
                        </svg>
                        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="56" height="35" viewBox="0 0 1920 1080">
                            <image data-name="组 197" x="-10" y="-28" width="1947" height="1093"
                            xlink:href="data:img/png;base64,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" />
                        </svg>
                    </div>
                    <div>进深流量（pcu/天）</div>
                    <div class="value">1172212</div>
                </div>
                <div class="outflow">
                    <div class="img-shenzhen">
                    <svg class="shenzhen" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="70" height="36" viewBox="0 0 100 52">
                        <image width="100" height="52"
                            xlink:href="data:img/png;base64,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" />
                    </svg>
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="56" height="28" viewBox="0 0 1920 1080">
                        <image x="1736" y="158" width="100" height="52"
                            xlink:href="data:img/png;base64,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" />
                        <image y="-13" width="1947" height="1093"
                            xlink:href="data:img/png;base64,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" />
                    </svg>                        
                    </div>
                    <div>出深流量（pcu/天）</div>
                    <div class="value">383817</div>
                </div>
            </div>
        </div>
        <!-- 中部盒子 -->
        <div id="middle">
            <h3 class="title">今日市境界点进出深变化趋势</h3>
            <!-- 插入echart图表 -->
            <div id="echartContainer"></div>
        </div>
        <!-- 底部盒子 -->
        <div id="bottom">
            <h3 class="title">近5分钟流量TOP10点位</h3>
            <!-- 用一个值isAcitve来控制两者之间的切换 -->
            <span class="in-shenzhen" v-bind:class="{selected: isActive === 'inshenzhen'}" @click="getindata">进深</span>
            <span class="out-shenzhen" v-bind:class="{selected: isActive ==='outshenzhen'}" @click="getoutdata">出深</span>
            <!-- 直接使用elementUI中的表格 -->
            <!-- 表头和其余行设置不同的颜色 -->
            <el-table :data='tabledata'
                      height="300"
                      style="width: 100%"
                      :header-cell-style="headClass"
                      :cell-style="rowClass"
                      class="tableBox"
                      >
                <!-- 日期列, align="center" 文本居中对齐-->
                <el-table-column prop="date" label="日期" width="100" align="center"></el-table-column>
                <!-- 名字列 -->
                <el-table-column prop="name" label= "名字" width="100" align="center"></el-table-column>
                <!-- 地址列 -->
                <el-table-column prop="address" label= "地址" align="center"></el-table-column>
            </el-table>
        </div>
    </div>   
</template>

<script>
// 引入echart
let echart = require('echarts')
export default {
    data() {
        return {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
            flag: 'in',
            tabledata: '',
            tabledata1: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '进深---上海市普陀区金沙'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }               
            ],
            tabledata2: [
                {
          date: '2016-05-03',
          name: '王小虎',
          address: '出深----上海市普陀区金沙'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀'
        }  
            ],
            isActive: 'inshenzhen'
        }
    },
    methods: {
       headClass() {
           return 'background: #01a0c4; color: #fff'
       },
       rowClass() {
           return 'background: #002753; color: #fff'
       },
       getindata() {
           this.tabledata = this.tabledata1;
           this.isActive = 'inshenzhen'
       },
       getoutdata() {
           this.tabledata = this.tabledata2;
           this.isActive = 'outshenzhen'
       }

    },
    mounted() {
        let myChart = echart.init(document.getElementById('echartContainer'));
        let option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        icon: 'roundRect',
        right: '10%',
        data: ['进深', '出深'],
        textStyle:{
                color:"#fff"
        }
    },
    grid: {
        left: '15%',
        top: '20%',
        bottom: '20%'

    },
    xAxis: {
        name: '时间',
        type: 'category',
        boundaryGap: false,
        data: ['08/21', '08/22', '08/23', '08/24', '08/25', '08/26', '08/27'],
        // 修改坐标轴和tick颜色
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: true,
            color: ['#fff']
        },
        axisLabel:{//修改坐标系字体颜色
            show:true,
            textStyle:{
              color:"#fff"
            }
          },
    },
    yAxis: {
        name: '车流量',
        type: 'value',
        // 修改坐标轴和tick颜色
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel:{//修改坐标系字体颜色
            show:true,
            textStyle:{
              color:"#fff"
            }
          },
    },
    series: [
        {
            name: '进深',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
              normal: {
                color: "#65afe7", //改变折线点的颜色
                lineStyle: {
                  color: '#65afe7' //改变折线颜色
                }
              }
            },
            areaStyle: {
                color: '#65afe7',
                opacity: 0.1
            }
        },
        {
            name: '出深',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
              normal: {
                color: "#43d8a7", //改变折线点的颜色
                lineStyle: {
                  color: "#43d8a7" //改变折线颜色
                }
              }
            },
            areaStyle: {
                color: "#43d8a7",
                opacity: 0.1
            }
        }
    ]
};
        myChart.setOption(
            option
        );
        this.getindata()
        
    }
}

</script>

<style>
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

#right-panel {
    float: right;
    width: 400px;
    height: 750px;
    background-color: rgba(1, 17, 57, 0.8);
}
.title {
    font-size: 16px;
    color: white;
    margin-left: 10px;
}
/* 头部盒子样式 =================================================================*/
.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.inflow {
    padding-left: 30px;
    /* background-color: pink; */
    text-align: center;
    color: white;
}

.outflow {
    padding-right: 30px;
    /* background-color: pink; */
    text-align: center;
    color: white;
}
#top {
    margin-bottom: 20px;
}
#top .value {
    margin-top: 10px;
    color: rgb(2, 221, 253);
}
#top .title {
    margin: 15px 0 40px 10px;
}
#top .title #tip {
    font-size: 14px;
    color: rgb(2, 221, 253);
}
.img-shenzhen {
    position: relative;
    height: 40px;
    
}
.img-shenzhen .shenzhen {
    position: absolute;
    top: 0;
    left: 25%;
}

.img-shenzhen .arrow {
    position: absolute;
    top: 0;
    left: 25%;
}
#echartContainer {
    width: 380px;
    height: 150px;
}

/* 中间盒子的样式 =============================================================================*/
#middle {
    margin-bottom: 15px;
}

#middle .title {
    margin: 15px 0 30px 10px;
}

/* 底部盒子的样式 ================================================================================*/
#bottom .title {
    display: inline-block;
    margin-bottom: 15px;
}

/* elementUI表格组件修改行高 */
.tableBox th {
   padding: 0 !important;
   height: 30px;
   line-height: 30px;
}
.tableBox td {
   padding: 0 !important;
   height: 30px;
   line-height: 30px;
}

/* 选择切换数据栏 */
#bottom .in-shenzhen {
    float: right;
    margin-right: 15px;
    color:  rgb(2, 221, 253);
    font-size: 14px;
    padding: 0 4px;
}

/* 鼠标经过样式改变 */
#bottom .in-shenzhen:hover {
    cursor: pointer;
    background: rgba(2, 221, 253, 0.2);
    border-bottom: 2px solid #02ddfd;
}

#bottom .in-shenzhen-focus {
    background: rgba(2, 221, 253, 0.2);
    border-bottom: 2px solid #02ddfd;
}

#bottom .out-shenzhen {
    float: right;
    /* margin-right: 15px; */
    color:  rgb(2, 221, 253);
    font-size: 14px;
    padding: 0 4px;
}

#bottom .out-shenzhen:hover {
    cursor: pointer;
    background: rgba(2, 221, 253, 0.2);
    border-bottom: 2px solid #02ddfd;
}
#bottom .selected {
    background: rgba(2, 221, 253, 0.2);
    border-bottom: 2px solid #02ddfd;
}
</style>