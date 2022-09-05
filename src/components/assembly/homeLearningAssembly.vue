<template>
  <div class="home-container" :home="home">
    <div class="home-learning row">
      <div class="big-title">
        {{ $t(home.json.sloganTitle) }}
        <span class="see-more"
          ><router-link :to="home.href"
            >{{ $t("msg.seeMore") }} ></router-link
          ></span
        >
      </div>
      <p
        class="big-slogan"
        v-for="(item, index) in home.json.slogan"
        :key="index"
      >
        {{ item }}
      </p>
      <div class="home-learning-left" :class="classCol">
        <p
          class="big-detail"
          v-for="(item, index) in home.json.sloganDetail"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
      <div class="home-learning-right" :class="classCol">
        <div class="home-learning-top">
          <div v-for="(item, index) in home.json.sloganIntroduce" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
      <ul class="home-learning-ul row">
        <li
          class="language-list col-md-3 col-xs-12"
          v-for="(item, index) in home.json.sloganList"
          :key="index"
        >
          <div class="language-list-detail" @click="getItem(item, home.json)">
            {{ item.title }}
          </div>
        </li>
      </ul>
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
@media screen and (max-width: 420px) {
  .home-learning {
    padding: 5rem !important;
    .big-detail {
      font-size: 1.5rem !important;
    }
    img {
      width: 25rem !important;
    }
  }
}
@media screen and (max-width: 768px) {
  .home-learning {
    padding: 5rem 2rem 0 !important;
    img {
      display: none;
    }
    .home-learning-right {
      padding-top: 4rem !important;
    }
  }
}
@media screen and (max-width: 860px) {
  .home-learning {
    display: block !important;
  }
}

.home-learning {
  width: 80%;
  margin: 0 auto;
  position: relative;
  padding: 40px 0;
  img {
    position: absolute;
    object-fit: cover;
    width: 35rem;
    left: 2rem;
    bottom: -5rem;
    transform: rotateY(180deg);
  }
  .big-title {
    font-size: 2.8rem;
    color: $main-text-color;
    border-left: 8px solid $adorn-color;
    text-align: left;
    font-weight: bold;
    .see-more {
      font-size: 1.5rem;
      color: $main-text-color;
      float: right;
    }
    .see-more:hover a {
      color: $main-color;
      transition: all 0.4s ease 0s;
    }
  }
  .big-slogan {
    font-size: 1.5rem;
    color: $main-color;
    text-align: left;
  }
  .home-learning-left {
    font-weight: bold;
    font-size: 2rem;
  }
  .home-learning-right {
    .home-learning-top {
      width: 100%;
      padding: 2rem;
      text-align: left;
      text-indent: 2em;
      color: #322f3b;
      font-family: "KaiTi";
    }
  }
  .home-learning-ul {
    margin: 1rem 0;
    padding: 0;
    .language-list {
      font-family: "HeiTi";
      margin: 2rem 0 2rem 0;
      color: white;
      .language-list-detail {
        display: block;
        height: 100%;
        width: 100%;
        text-align: center;
        line-height: 3.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        background: #ea4335;
        padding: 0 1.5rem;
        border-radius: 10px;
      }
      .language-list-detail:hover {
        transform: scale(1.05);
        box-shadow: 0 0 12px #d1d1d1;
        transition: all 0.4s ease 0s;
      }
    }
    .language-a {
      width: 100%;
      float: right;
      a {
        color: #ea4335;
      }
    }
    .language-a a:hover {
      color: #ffd111;
      transition: all 0.4s ease 0s;
    }
  }
}
</style>