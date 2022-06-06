<template>
  <div class="language-learning home-container">
    <div class="language-learning-title">
      {{ $t("msg.holisticEducationTheory") }}
    </div>
    <div class="language-learning-box row">
      <div class="language-left col-sm-3 col-xs-12">
        <img src="../../../public/images/learning-child.png" alt="" />
      </div>
      <div class="language-right col-sm-9 col-xs-12">
        <ul class="row">
          <li
            class="language-list col-sm-4 col-xs-12"
            v-for="(item, index) in languageLearningJson.languageLearning"
            :key="index"
          >
            <div class="language-list-detail" @click="getItem(item)">
              {{ item.title }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="language-banner">
      <img src="../../../public/images/learning-bird.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import { mapGetters } from "vuex";
import languageLearningJson from "../../../public/json/LanguageLearning.json";

export default {
  name: "LanguageLearning",
  data() {
    return {
      languageLearningJson,
      zhFanlanguageLearningJson: {},
      zhlanguageLearningJson: languageLearningJson,
    };
  },
  methods: {
    getItem(item) {
      this.$router.push({
        path: "/LanguageLearningDetailTwo",
        query: {
          id: item.id,
        },
      });
      localStorage.setItem(
        "detail",
        JSON.stringify(this.languageLearningJson.languageLearning)
      );
    },
  },
  mounted() {
    const { proxy } = getCurrentInstance();
    this.zhFanlanguageLearningJson = proxy.$deepClone(languageLearningJson);
    if (this.$store.state.language == "zhFan") {
      this.languageLearningJson = this.zhFanlanguageLearningJson;
    } else if (this.$store.state.language == "zh") {
      this.languageLearningJson = this.zhlanguageLearningJson;
    }
  },
  computed: {
    ...mapGetters(["getLanguage"]),
  },
  watch: {
    getLanguage() {
      if (this.$store.state.language == "zhFan") {
        this.languageLearningJson = this.zhFanlanguageLearningJson;
      } else if (this.$store.state.language == "zh") {
        this.languageLearningJson = this.zhlanguageLearningJson;
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .language-learning {
    .language-left {
      display: none !important;
    }
  }
}

.language-learning {
  position: relative;
  padding: 3rem;
  .language-learning-title {
    font-size: 2.5rem;
    font-family: "SourceSansPro-Regular", "HeiTi";
    font-weight: bold;
  }
  .language-learning-box {
    .language-left {
      position: sticky;
      top: 3rem;
      img {
        object-fit: cover;
        width: 100%;
        transform: rotateY(180deg);
      }
    }
    .language-right {
      z-index: 99;
      ul {
        padding: 0;
        .language-list {
          height: 3.8rem;
          border-left: 4px solid #ea4335;
          background: white;
          box-shadow: 0 0 12px #d1d1d1;
          margin: 3rem 6rem 0 0;
          .language-list-detail {
            height: 100%;
            line-height: 3.8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
          }
        }
        .language-list:hover {
          transform: scale(1.05);
          transition: all 0.4s ease 0s;
        }
      }
    }
  }
  .language-banner {
    position: absolute;
    top: 0;
    right: 0;
    img {
      object-fit: cover;
      width: 25rem;
      transform: rotateY(180deg);
    }
  }
}
</style>