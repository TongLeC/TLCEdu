<template>
  <main id="app" class="app">
    <nav-header />
    <NuxtPage />
    <nav-footer />
    <div class="footer-box"></div>
    <a
      href="https://www.tongleclass.com/"
      target="blank"
      class="main-course-btn"
    >
      <svg-course-svg></svg-course-svg>
    </a>
    <div class="phone-course-box">
      <a
        href="https://www.tongleclass.com/"
        target="blank"
        class="phone-course-btn"
      >
        {{ $t("msg.experienceCourses") }}
      </a>
    </div>
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
    display: none;
  }
  .phone-course-box,
  .footer-box {
    display: block !important;
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
  position: fixed;
  right: 5px;
  bottom: 50%;
  z-index: 999;
}
.footer-box {
  width: 100%;
  height: 64px;
  display: none;
}
.phone-course-box {
  display: none;
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 100%;
  height: auto;
  // text-align: center;
  // padding: 20px;
  // background: $bg-main-color;
}
.phone-course-btn {
  display: block;
  padding: 17px 25px;
  font-size: 20px;
  // border-radius: 15px;
  color: $main-color;
  background: $bg-main-color;
}
</style>