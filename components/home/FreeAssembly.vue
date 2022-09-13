<!--  首页原创文章  -->
<template>
  <main class="free-box" :home="home">
    <h2 class="big-title">
      {{ $t(home.title) }}
      <p class="see-more">
        <router-link :to="localePath({ name: 'Article' })"
          >{{ $t("msg.seeMore") }} ></router-link
        >
      </p>
    </h2>
    <p class="big-slogan">
      {{ home.json.describe }}
    </p>
    <ul class="free-top-right row">
      <li
        class="free-list col-sm-3 col-xs-12"
        v-for="(item, index) in home.json.detail"
        :key="index"
      >
        <a class="free-list-detail" :href="item.homeUrl" target="blank">
          <img :src="item.homeImg" :alt="item.homeDetail" />
          <p class="free-list-title">{{ item.homeDetail }}</p>
        </a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "homeFreeAssembly",
  data() {
    return {};
  },
  props: {
    home: { type: Object },
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .col-sm-3 {
    width: 100% !important;
  }
  .free-box {
    width: 90% !important;
  }
}
.free-box {
  width: 75%;
  margin: 4rem auto 0;
  .free-top-right {
    padding: 0;
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 10px $shadow-color;
    padding: 25px 25px 10px;
    .free-list {
      margin-bottom: 15px;
    }
    .free-list-detail {
      display: block;
      width: 100%;
      object-fit: cover;
      margin-bottom: 10px;
      border: 2px solid $adorn-color;
      border-radius: 15px;
      padding: 15px 15px 0;
      height: 100%;
      img {
        width: 100%;
      }
    }
    .col-sm-3 {
      width: 20%;
    }
  }
}
</style>