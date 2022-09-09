<template>
  <div class="home-container">
    <div class="language-learning-detail">
      <h3 class="detail-title">{{ this.detail.title }}</h3>
      <div class="detail-content-box">
        <p
          class="detail-content"
          v-for="(item, index) in this.detail.detail"
          :key="index"
          v-html="item"
        ></p>
      </div>
      <img class="detail-img" :src="this.detail.imgUrl" alt="" />
    </div>
  </div>
</template>

<script>
import languageLearningJson from "../../../public/json/LanguageLearning.json";

export default {
  name: "LanguageLearningDetail",
  data() {
    return {
      id: this.$route.query.id,
      detail: {},
      languageArr: languageLearningJson.languageLearning,
      languageDetail: [],
    };
  },
  mounted() {
    this.languageArr.forEach((item) => {
      if (item.id.toString() === this.id) {
        this.languageDetail = item;
      }
    });
    this.detail = JSON.parse(localStorage.getItem("detail"));
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
.language-learning-detail {
  width: 68%;
  background: white;
  box-shadow: 0 0 12px #d1d1d1;
  margin: 4rem auto !important;
  padding-top: 10px;
  .detail-title {
    font-size: 1.9rem;
    color: #ea4335;
    margin: 2rem 0;
    font-weight: bold;
  }
  .detail-content-box {
    margin: 1.5rem;
    .detail-content {
      margin: 0 4rem;
      text-align: left;
      text-indent: 2em;
      font-size: 1.4rem;
      line-height: 3rem;
    }
  }
  .detail-img {
    width: 18rem;
    object-fit: cover;
    opacity: 0.5;
    z-index: -1;
  }
}
</style>