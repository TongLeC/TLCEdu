<template>
  <main id="app" class="app">
    <nav-header />
    <NuxtPage />
    <nav-footer />
    <a
      href="https://www.tongleclass.com/"
      target="blank"
      class="main-course-btn"
    >
      {{ $t("msg.experienceCourses") }}
    </a>
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
@media screen and (max-width: 768px) {
  .main-course-btn {
    writing-mode: horizontal-tb !important;
    border-radius: 15px;
    right: 5px;
    bottom: 5px !important;
    box-shadow: 0 0 5px $shadow-color;
  }
}
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
.main-course-btn {
  writing-mode: vertical-rl;
  background: #ea4335;
  color: #fff;
  padding: 10px;
  border-radius: 15px;
  position: fixed;
  right: 5px;
  bottom: 50%;
  z-index: 999;
}
</style>