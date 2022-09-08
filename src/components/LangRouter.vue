<template>
  <nav-header v-show="isShow"></nav-header>
  <router-view class="lang-router"></router-view>
</template>
<script>
import NavHeader from "./NavHeaderTwo.vue";

export default {
  name: "App",
  components: {
    NavHeader,
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style lang="scss">
.lang-router {
  flex: 1;
  margin-top: 70px;
}
</style>
