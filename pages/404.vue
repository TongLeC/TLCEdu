<template>
  <main id="app" class="app">
    <nav-header />
    <main class="notfound">
      <h1>Not Found 404</h1>
      <a href="/" class="return-button">返回首页</a>
    </main>
    <nav-footer />
  </main>
</template>

<script setup>
useHead({
  title: "404",
  meta: [
    {
      name: "description",
      content: "404页面",
    },
  ],
});
</script>
<script>
export default {
  name: "NotFound",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
.notfound {
  padding-top: 70px;
  min-height: calc(100vh - 280px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
div {
  font-size: 10rem;
  .return-button {
    display: block;
    padding: 15px 20px;
    background: rgb(230, 230, 230);
    color: #ea4335;
    font-size: 3rem;
  }
}
</style>