<template>
  <div class="language-learning">
    <div class="language-left">
      <img src="../../assets/img-language.png" alt="" />
    </div>
    <div class="language-right">
      <ul>
        <li
          class="language-list"
          v-for="(item, index) in languageLearningJson.languageLearning"
          :key="index"
        >
          <router-link
            class="language-list-detail"
            :to="{ path: '/languageLearningDetail', query: { id: item.id } }"
            >{{ item.title }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import languageLearningJson from "../../../public/json/LanguageLearning.json";

export default {
  name: "LanguageLearning",
  data() {
    return {
      languageLearningJson,
    };
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 430px) {
  .language-left {
    img {
      object-fit: cover;
      width: 30rem !important;
    }
  }
}
@media screen and (max-width: 900px) {
  .language-left {
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}

.language-learning {
  display: flex;
  .language-left {
    img {
      float: left;
      object-fit: cover;
      width: 38rem;
      opacity: 0.55;
    }
  }
  .language-right {
    z-index: 999;
    .language-list {
      height: 3.8rem;
      width: 18.4rem;
      border-left: 4px solid #a61b29;
      background: white;
      box-shadow: 0 0 12px #d1d1d1;
      float: left;
      display: block;
      white-space: nowrap;
      margin: 3rem 6rem 0 0;
      .language-list-detail {
        font-size: 1.4rem;
        display: block;
        height: 100%;
        width: 100%;
        text-align: center;
        line-height: 3.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>