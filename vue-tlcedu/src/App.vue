<template>
  <div class="app">
    <nav-header></nav-header>
    <div class="wrapper"></div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader.vue";
import NavFooter from "./components/NavFooter.vue";

export default {
  name: "App",
  components: {
    NavHeader,
    NavFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
}
.app {
  display: flex;
  flex-direction: column;
  min-height:100vh;
  .wrapper {
    flex: 1;
  }
}
</style>
