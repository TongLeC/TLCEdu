<!--  首页同乐语言学习法  -->
<template>
  <div class="home-container" :home="home">
    <div class="home-learning">
      <div class="big-title">
        {{ $t(home.json.sloganTitle) }}
        <div class="see-more">
          <router-link :to="home.href">{{ $t("msg.seeMore") }} ></router-link>
        </div>
      </div>
      <p
        class="big-slogan"
        v-for="(item, index) in home.json.slogan"
        :key="index"
      >
        {{ item }}
      </p>
      <div class="home-learning-box row">
        <div class="home-learning-top col-12 col-md-9">
          <p
            class="big-detail"
            v-for="(item, index) in home.json.sloganDetail"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
        <ul class="home-learning-ul col-12 col-md-3" style="padding-left: 20px">
          <li
            class="language-list"
            v-for="(item, index) in home.json.sloganListOne"
            :key="index"
          >
            <div class="language-list-detail" @click="getItem(item, home.json)">
              {{ item.title }}
            </div>
          </li>
        </ul>
      </div>
      <div class="home-learning-box home-learning-last row">
        <ul
          class="home-learning-ul col-12 col-md-3"
          style="padding-right: 20px"
        >
          <li
            class="language-list"
            v-for="(item, index) in home.json.sloganListTwo"
            :key="index"
          >
            <div class="language-list-detail" @click="getItem(item, home.json)">
              {{ item.title }}
            </div>
          </li>
        </ul>
        <div class="home-learning-top col-12 col-md-9">
          <p
            class="big-detail big-detail-p"
            v-for="(item, index) in home.json.sloganIntroduce"
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
  name: "homeLearningAssembly",
  data() {
    return {};
  },
  props: {
    home: { type: Object },
    classCol: { type: String },
  },
  methods: {
    getItem(item, json) {
      if (json.id == "learn") {
        this.$router.push({
          path: "/LanguageLearningDetailTwo",
          query: {
            id: item.id,
            file: "LanguageLearning",
          },
        });
      } else if (json.id == "theory") {
        this.$router.push({
          path: "/LanguageLearningDetailTwo",
          query: {
            id: item.id,
            file: "EducationalTheory",
          },
        });
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .home-learning-ul {
    padding: 0 !important;
  }
  .language-list {
    margin-top: 20px;
    text-align: center !important;
  }
  .home-learning-box:last-child {
    padding-top: 0 !important;
  }
  .home-learning-last {
    .language-list:first-child {
      margin: 0 !important;
    }
    .home-learning-top {
      margin-top: 20px;
    }
  }
}

.home-learning {
  width: 75%;
  margin: 0 auto;
  position: relative;
  padding: 70px 0 20px;
  &-box {
    padding: 12px 0;
    .home-learning-top {
      background: #fff;
      border-radius: 15px;
      box-shadow: 2px 2px 10px $shadow-color;
      padding: 30px 40px;
    }
    .home-learning-ul {
      padding: 0;
      margin: 0;
    }
    .language-list {
      background: $main-color;
      box-shadow: 2px 2px 10px $shadow-color;
      color: #fff;
      border-radius: 15px;
      padding: 25px;
      text-align: left;
      cursor: pointer;
      &:last-child {
        margin-top: 20px;
      }
      &:hover {
        color: $main-color;
        background: $bg-main-color;
        transition: all 0.4s ease 0s;
      }
    }
    p:last-child {
      margin: 0;
    }
    .big-detail-p {
      text-align: left;
      text-indent: 2em;
    }
  }
}
</style>