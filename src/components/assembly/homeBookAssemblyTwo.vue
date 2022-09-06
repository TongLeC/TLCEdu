<!--  首页同乐书籍  -->
<template>
  <div class="home-find" :home="home">
    <div class="big-title">
      {{ $t(home.title) }}
      <div class="see-more">
        <router-link :to="home.href">{{ $t("msg.seeMore") }} ></router-link>
      </div>
    </div>
    <p class="big-slogan">
      {{ home.json.describe }}
    </p>
    <div class="home-book">
      <div class="home-public">
        <div class="home-public-title">
          {{ $t("msg.publicTitle") }} {{ $t("msg.publicTitleTwo") }}
        </div>
        <p class="book-more">—— 30+ 免费电子书与教材 ——</p>
      </div>
      <div class="row">
        <div class="img-box col-12 col-md-3">
          <div class="book-img">
            <img :src="home.json.detail.homeImg" />
            <div>海外中文教育的探索</div>
          </div>
        </div>

        <div class="book-describe-box col-12 col-md-9">
          <p
            class="book-describe"
            v-for="(item, index) in home.json.detail.homeDescribe"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
      </div>
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
  width: 75%;
  margin: 0 auto;
  padding: 40px 0 0;
  .home-public-title {
    color: $adorn-color;
    font-size: 2.2rem;
    font-weight: bold;
  }
  .book-more {
    font-size: 1.5rem;
  }
  .home-book {
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 10px $shadow-color;
    padding: 30px 40px;
    font-size: 1.5rem;
    .book-describe-box {
      padding-top: 1rem;
      .book-describe {
        text-align: left;
        text-indent: 2em;
        margin: 0;
      }
    }
    .img-box {
      display: flex;
      align-items: center;
      justify-content: center;
      .book-img {
        width: 100%;
        border: 2px solid $adorn-color;
        border-radius: 15px;
        padding: 15px;
        img {
          width: 100%;
          margin-bottom: 10px;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>