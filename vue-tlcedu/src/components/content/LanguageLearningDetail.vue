<template>
  <div class="language-learning-detail">
    <h3 class="detail-title">爱莲说</h3>
    <div class="detail-content-box">
      <p class="detail-content">
        水陆草木之花，可爱者甚蕃。晋陶渊明独爱菊。自李唐来，世人甚爱牡丹。予独爱莲之出淤泥而不染，濯清涟而不妖，中通外直，不蔓不枝，香远益清，亭亭净植，可远观而不可亵玩焉。(甚爱一作：盛爱)
      </p>
      <p class="detail-content">
        予谓菊，花之隐逸者也；牡丹，花之富贵者也；莲，花之君子者也。噫！菊之爱，陶后鲜闻。莲之爱，同予者何人？牡丹之爱，宜乎众矣。
      </p>
    </div>
    <img class="detail-img" src="../../assets/detail-bird.png" alt="">
  </div>
</template>

<script>
export default {
  name: "LanguageLearningDetail",
  data() {
    return {};
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