// 页面2接收消息

<template>
    <div class="red">
        <p>页面2</p>
        <p>{{msg}}</p>
    </div>
</template>

<script>
import {eventbus} from './eventBus.js'

export default {
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        eventbus.$on('aMsg', (msg)=>{
            console.log(this);
            this.msg = msg
        })
       
        // eventbus.$on('aMsg', function(msg) {
        //       console.log(this);
        //       this.msg = msg
        // })
    }
}

</script>

<style>
.red {
    color: red;
}
</style>