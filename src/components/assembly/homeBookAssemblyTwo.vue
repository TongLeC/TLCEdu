<template>
  <div class="home-find" :home="home">
    <h3 class="home-top-title">
      <span style="font-weight: bold">{{ $t(home.title) }}</span>
      <a :href="home.href">{{ $t("msg.seeMore") }}</a>
      <p class="home-top-describe">
        {{ home.json.describe }}
      </p>
    </h3>
    <div class="home-book row">
      <img
        :src="home.json.detail.homeImg"
        alt=""
        class="book-img col-sm-3 col-xs-12"
      />
      <div class="book-describe-box col-sm-9 col-xs-12">
        <p
          class="book-describe"
          v-for="(item, index) in home.json.detail.homeDescribe"
          :key="index"
        >
          {{ item }}
        </p>
        <p class="book-more">30+ 免费电子书与教材</p>
        <a :href="home.href">{{ $t("msg.seeMore") }}</a>
      </div>
      <!-- <div class="book-box col-sm-2 col-xs-12">
        <img src="" alt="">
        <a :href="home.href">{{ $t("msg.seeMore") }}</a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "homeBookAssemblyTwo",
  data() {
    return {};
  },
  components: {},
  props: {
    home: { type: Object },
  },
  methods: {},
  setup() {
    return {};
  },
};
</script>

<style scoped lang='scss'>
.home-find {
  margin: 5rem 0 0;
  padding: 0 4rem 20px;
  .home-top-title {
    font-size: 2.5rem;
    margin: 2rem 0;
    font-family: "SourceSansPro-Regular", "HeiTi";
    position: relative;
    a {
      font-size: 1.7rem;
      color: #a9a9a9;
      position: absolute;
      right: 0;
      top: 20%;
    }
  }
  .home-book {
    .book-describe-box {
      padding-top: 1rem;
      .book-describe {
        font-size: 1.5rem;
        font-family: "Kaiti";
        text-align: left;
        text-indent: 2em;
        margin: 0;
      }
      .book-more {
        font-size: 2rem;
        color: #ea4335;
        font-family: "SourceSansPro-Regular", "HeiTi";
        margin-top: 1.5rem;
      }
    }
  }
  .home-top-describe {
    margin-top: 2rem;
  }
  .home-top-describe,
  .home-list-describe {
    color: #a9a9a9;
    font-size: 1.5rem;
    font-family: "Kaiti";
  }
  a:hover {
    color: #ea4335;
    transition: all 0.4s ease 0s;
  }
}
</style>