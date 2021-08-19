<template>
    <div>
        <button @click="goAbout">去到About page</button>
        <button @click="goMypage">去到My page</button>
        <button @click="goUserPage">去到userPage</button>
    </div>
</template>

<script>
export default {
    methods:{
        goAbout() {
            this.$router.push({path: 'about'})
        },
        goMypage() {
            this.$router.push({path:'myPage'})
        },
        goUserPage() {
            this.$router.push({path:'user/foo'})
        },
        mouted() {
            console.log('load-codeNavigation');
        }
    }
}
</script>