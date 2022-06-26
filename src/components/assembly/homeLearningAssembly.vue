<template>
  <div class="home-container" :home="home">
    <div class="home-learning row">
      <a class="big-title" :href="home.href">
        {{ $t(home.json.sloganTitle) }}
      </a>
      <div v-if="!home.json.image.floatLeft" class="col col-5">
        <img :src="home.json.image.url" class="mx-auto rounded d-block img-fluid">
      </div>
      <div class="col col-7 text-center">
        <p
          class=""
          v-for="(item, index) in home.json.bulletPointDescription"
          :key="index"
        >
          <strong>{{ item.bold }}</strong>
          {{ item.text }}
        </p>
      </div>
      <div v-if="home.json.image.floatLeft" class="col col-5">
        <img :src="home.json.image.url" class="mx-auto rounded d-block img-fluid">
      </div>
    </div>
  </div>
</template>

<script>
import languageLearningJson from "../../../public/json/LanguageLearning.json";
import educationalTheoryJson from "../../../public/json/EducationalTheory.json";

export default {
  name: "homeLearningAssembly",
  data() {
    return {};
  },
  props: {
    home: { type: Object },
  },
  methods: {
    getItem(item, json) {
      this.$router.push({
        path: "/languageLearningDetailTwo",
        query: {
          id: item.id,
        },
      });
      if (json.id == "learn") {
        localStorage.setItem(
          "detail",
          JSON.stringify(languageLearningJson.languageLearning)
        );
      } else if (json.id == "theory") {
        localStorage.setItem(
          "detail",
          JSON.stringify(educationalTheoryJson.educationalTheory)
        );
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 420px) {
  .home-learning {
    padding: 5rem !important;
    .big-title {
      font-size: 2.5rem !important;
    }
    .big-slogan {
      font-size: 2rem !important;
    }
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

p {
  font-family: "YaHei";
}

.home-learning {
  width: 100%;
  padding: 4rem 5rem 5rem;
  position: relative;
  margin: 0;
  img {
    //position: absolute;
    object-fit: cover;
    //width: 35rem;
    //left: 2rem;
    //bottom: -5rem;
    //transform: rotateY(180deg);
  }
  .big-title {
    font-size: 3.7rem;
    color: #EA4335;
    margin-bottom: 4rem;
    font-family: "SourceSansPro-Regular", "Lishu";
    text-align: center;
    font-weight: bold;
    display: block;
  }
  .big-title:hover {
    color: #ffd111;
    transition: all 0.4s ease 0s;
  }
  .home-learning-left {
    font-weight: bold;
    font-size: 2rem;
  }
  .home-learning-right {
    .big-slogan {
      font-size: 2.5rem;
      color: #322f3b;
      font-weight: bold;
    }
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
        color: #EA4335;
      }
    }
    .language-a a:hover {
      color: #ffd111;
      transition: all 0.4s ease 0s;
    }
  }
}
</style>