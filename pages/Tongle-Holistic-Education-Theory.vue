<template>
  <main class="language-learning home-container">
    <section class="other-page">
      <h1 class="other-page-title">{{ $t("msg.holisticEducationTheory") }}</h1>
      <p class="other-page-slogan">{{ $t("msg.slogan[1]") }}</p>
    </section>
    <div class="language-learning-box">
      <ul class="language-right row">
        <li
          class="language-list col-sm-4 col-xs-12"
          v-for="(item, index) in educationalTheoryJson.educationalTheory"
          :key="index"
        >
          <p class="language-list-detail" @click="getItem(item)">
            {{ $t(`educationalTheory[${index}].title`) }}
            <span class="bookmark"></span>
          </p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import EducationalTheory from "/assets/json/EducationalTheory.json";
const educationalTheoryJson = ref(EducationalTheory);
const { locale, t } = useI18n();
const localePath = useLocalePath();
// const { data: educationalTheoryJson } = await useFetch(
//   "/api/json/EducationalTheory"
// );

useHead({
  title: t("msg.SeoContent.theory.title"),
  meta: [
    {
      name: "description",
      content: t("msg.SeoContent.theory.description"),
    },
    {
      name: "keywords",
      content: t("msg.SeoContent.theory.keywords"),
    },
  ],
});
const { $baseUtils } = useNuxtApp();
</script>
<script>
export default {
  name: "EducationalTheory",
  methods: {
    getItem(item) {
      navigateTo(
        this.localePath(`/detail/${this.$baseUtils.getTitleFormat(item.title)}`)
      );
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
          padding: 15px 20px;
          display: flex;
          background: #fff;
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