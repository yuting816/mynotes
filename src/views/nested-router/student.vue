<template>
    <div class="student">
        <h2>student</h2>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('load-student');
    }
}
</script>