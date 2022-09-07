<template>
  <div class="app">
    <nav-header v-show="isShow"></nav-header>
    <router-view class="wrapper"></router-view>
    <nav-footer v-show="isShow"></nav-footer>
  </div>
</template>

<script>
import NavHeader from "./components/NavHeaderTwo.vue";
import NavFooter from "./components/NavFooter.vue";

export default {
  name: "App",
  components: {
    NavHeader,
    NavFooter,
  },
  data() {
    return {
      isShow: true,
    };
  },
  mounted() {
    let lan = localStorage.getItem("language");
    this.$i18n.locale = lan;
  },
  watch: {
    $route: {
      handler: function (val) {
        if (val.name == "NotFound") {
          this.isShow = false;
        }
      },
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $main-text-color;
  font-family: "AlibabaPuHuiTi";
  background: $sub-color;
  font-size: 1.4rem;
}
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .wrapper {
    flex: 1;
    margin-top: 70px;
  }
}
</style>
