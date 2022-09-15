<template>
  <main id="app" class="app">
    <nav-header />
    <NuxtPage />
    <nav-footer />
  </main>
</template>
<script setup>
const i18nHead = useLocaleHead({ addSeoAttributes: true });
useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
});
import { ID_INJECTION_KEY } from "element-plus";
provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
});
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
}
</style>