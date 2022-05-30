<template>
  <div class="language-learning home-container">
    <div class="language-left">
      <img src="../../../public/images/learning-child.png" alt="" />
    </div>
    <div class="language-right">
      <ul>
        <li
          class="language-list"
          v-for="(item, index) in languageLearningJson.languageLearning"
          :key="index"
        >
          <div class="language-list-detail" @click="getItem(item)">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
    <div class="language-banner">
      <img src="../../../public/images/learning-bird.png" alt="" />
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
  methods: {
    getItem(item) {
      this.$router.push({
        path: "/languageLearningDetail",
        query: {
          id: item.id,
        },
      });
      localStorage.setItem("item", JSON.stringify(item));
    },
  },
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
  .language-banner {
    img {
      display: none;
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
      width: 32rem;
      transform: rotateY(180deg);
    }
  }
  .language-right {
    z-index: 999;
    padding-bottom: 15px;;
    .language-list {
      height: 3.8rem;
      width: 18.4rem;
      border-left: 4px solid #EA4335;
      background: white;
      box-shadow: 0 0 12px #d1d1d1;
      float: left;
      display: block;
      white-space: nowrap;
      margin: 3rem 6rem 0 0;
      padding-left: 5px;
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
        cursor: pointer;
      }
    }
  }
  .language-banner {
    position: relative;
    img {
      position: absolute;
      top: 0;
      right: 0;
      object-fit: cover;
      width: 25rem;
      transform: rotateY(180deg);
    }
  }
}
</style>