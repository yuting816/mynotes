<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
       return this.$route.params.username
    }
  },
  methods: {
      // goBack() {
      //   window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      // }
  },
  mounted() {
    // console.log('userName', this.username);
    // console.log('router', this.$router);
  }
}
</script>
