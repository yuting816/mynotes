<template>
    <div>
        <div>vue练习</div>
        <h1>v-if用法</h1>
        <div v-if="Math.random() > 0.5">
            Now you see me
        </div>
        <div v-else>
            Now you don't
        </div>
        <template>
            <h1>key 管理可复用的元素</h1>
            <template v-if="loginType === 'username'">
                <label>Username</label>
                <input placeholder="Enter your username" key="username-input">
            </template>
            <template v-else>
                <label>Email</label>
                <input placeholder="Enter your email address" key="email-input">
            </template>
            <div>
                <button @click="changeLogin">切换登录方式</button>
            </div>
            <h5>*使用独立的Key， 不复用元素， 否则使用v-if进行条件渲染的时候，对于相同的元素将被复用</h5>
        </template>
        <template>
            <div v-show="ifshow">能看到</div>
            <div>
                <button @click="ifshow=!ifshow">change</button>
            </div>
        </template>
        <template>
            <h1>遍历对象</h1>
            <ul >
                <li v-for="(value, key, index) in object" :key="value">
                  {{index}}-{{ key }}:  {{ value }}
                </li>
            </ul>
            <h1>遍历数组</h1>
            <h2>(深入理解响应式)</h2>
            <ul>
                <li v-for="(item, index) in items" :key="item.message">
                    {{ parentMessage }} - {{ index }} - {{ item.message }}
                </li>
            </ul>
            <div>
                <button @click="changeArr">改变数组</button>
            </div>
        </template>
        <template>
            <h1>VUE异步更新dom</h1>
            <div>
                <button @click="renewDom">更新dom</button>
            </div>
        </template>

    </div>
</template>

<script>

export default {
    data() {
        return {
            loginType: 'username',
            ifshow: true,
            object: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
            parentMessage: 'Parent',
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ],
            message: '123'
        }
    },
    methods: {
        changeLogin() {
           if (this.loginType === 'username') {
               this.loginType = 'email'
           } else {
               this.loginType = 'username'
           }
        },
        changeArr() {
            // this.items.push({
            //     message: 'a'
            // })
            // 不是响应性的
            // this.items[2] = {
            //     message: 'a'
            // }
            // 使用set方法解决响应问题
            this.$set(this.items, 2, {
                message: 'a'
            })
            console.log(66, this.items);
        }
    }

}

</script>

<style lang="less" scoped>
</style>