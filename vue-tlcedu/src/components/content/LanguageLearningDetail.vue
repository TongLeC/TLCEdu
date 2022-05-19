<template>
  <div class="language-learning-detail">
    <h3 class="detail-title">{{ this.detail.title }}</h3>
    <div class="detail-content-box">
      <p
        class="detail-content"
        v-for="(item, index) in this.detail.detail"
        :key="index"
      >
        {{ item }}
      </p>
    </div>
    <img class="detail-img" :src="this.detail.imgUrl" alt="" />
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
    this.detail = JSON.parse(localStorage.getItem('item'))
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
.language-learning-detail {
  width: 68%;
  background: white;
  box-shadow: 0 0 12px #d1d1d1;
  margin: 3rem auto 2rem;
  padding-top: 10px;
  .detail-title {
    font-size: 1.9rem;
    color: #a61b29;
    margin: 2rem 0;
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
    float: right;
  }
}
</style>