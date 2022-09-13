<template>
  <main class="language-learning home-container">
    <section class="other-page">
      <h1 class="other-page-title">{{ $t("msg.languageLearning") }}</h1>
      <p class="other-page-slogan">{{ $t("msg.slogan[0]") }}</p>
    </section>
    <div class="language-learning-box">
      <ul class="language-right row">
        <li
          class="language-list col-sm-4 col-xs-12"
          v-for="(item, index) in languageLearningJson.languageLearning"
          :key="index"
        >
          <p class="language-list-detail" @click="getItem(item)">
            {{ item.title }}
            <span class="bookmark"></span>
          </p>
        </li>
      </ul>
    </div>
  </main>
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
        name: "LanguageLearningDetailTwo",
        query: {
          id: item.id,
          file: "LanguageLearning",
        },
      });
    },
  },
  mounted() {
    const { proxy } = getCurrentInstance();
    this.zhFanlanguageLearningJson = proxy.$deepClone(languageLearningJson);
    if (this.$store.state.language == "zh-hant") {
      this.languageLearningJson = this.zhFanlanguageLearningJson;
    } else if (this.$store.state.language == "zh-hans") {
      this.languageLearningJson = this.zhlanguageLearningJson;
    }
  },
  computed: {
    ...mapGetters(["getLanguage"]),
  },
  watch: {
    getLanguage() {
      if (this.$store.state.language == "zh-hant") {
        this.languageLearningJson = this.zhFanlanguageLearningJson;
      } else if (this.$store.state.language == "zh-hans") {
        this.languageLearningJson = this.zhlanguageLearningJson;
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .language-list {
    margin: 10px 0 !important;
  }
  .language-learning {
    width: 90% !important;
  }
}

.language-learning {
  width: 75%;
  margin: 70px auto;
  position: relative;
  .language-learning-box {
    .language-right {
      padding: 0;
      .language-list {
        margin: 20px 0;
        .language-list-detail {
          height: 100%;
          padding: 15px 30px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 15px;
          box-shadow: 2px 2px 10px $shadow-color;
          position: relative;
          .bookmark {
            width: 16px;
            height: 30px;
            background: $main-color;
            position: absolute;
            top: 0;
            right: 18px;
            &::before {
              content: "";
              display: block;
              width: 10px;
              height: 5px;
              border: 8px solid;
              border-color: $main-color transparent transparent transparent;
              position: absolute;
              bottom: -16px;
              right: 0;
            }
          }
        }
      }
      .language-list:hover .language-list-detail {
        color: #fff;
        background: $main-color;
        transition: all 0.4s ease 0s;
        .bookmark {
          background: #fff;
          &::before {
            border-color: #fff transparent transparent transparent;
          }
        }
      }
    }
  }
}
</style>