<template>
  <main>
    Not Found 404
    <a href="/" class="return-button">返回首页</a>
  </main>
</template>

<script setup>
const title = ref("404");
const description = ref("My amazing Nuxt app");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
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