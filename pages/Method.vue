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
            {{ $t(`languageLearning[${index}].title`) }}
            <span class="bookmark"></span>
          </p>
        </li>
      </ul>
    </div>
  </main>
</template>
<script setup>
import aaa from "/assets/json/LanguageLearning.json";
const languageLearningJson = ref(aaa);
// const { data: languageLearningJson } = await useFetch(
//   "/api/json/LanguageLearning"
// );
const { locale } = useI18n();
const localePath = useLocalePath();

useHead({
  title:
    "同乐语言学习法，十数载理论探索，多年第一线教学实践，最领先、高效的语言学习方法",
  meta: [
    {
      name: "description",
      content:
        "学习中文语言时，听说读写是有规律的。要抓住学习中文的最佳时机，选择合适的评书，利用边角料时间去听，用深度的评书语言培养中文理解能力；还要坚持放声诵读，拒绝哑巴中文；汉字也是可以创新识字、灵活讲解的；最后，学习中文的眼光要长远，去理解语言背后的文化。",
    },
  ],
});
</script>
<script>
export default {
  name: "LanguageLearning",
  methods: {
    getItem(item) {
      navigateTo(this.localePath(`/detail/Method-${item.id}`));
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