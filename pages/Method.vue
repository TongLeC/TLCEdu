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
  title: "同乐中文|海外华人孩子学习中文最高效的方法是什么？",
  meta: [
    {
      name: "description",
      content:
        "同乐中文基于多年一线教学经验,首创“先语言文化后识字（Chinese character）,感知式学习,整体吸收,螺旋式上升”等崭新的、自然高效的学习理念和方法（The Most Effective Language Learning Method）。从引导孩子对中国文化（Chinese culture）的兴趣入手,遵循孩子智力发育和语言学习规律,精心创作学习材料,安排学习次序,达到三年一小成、五年一大成、十年精且纯的教学目标。",
    },
    {
      name: "keywords",
      content:
        "西雅图,同乐中文,一线教学经验,语言文化,识字,感知学习,整体吸收,崭新,自然高效,理念,方法,中国文化,兴趣,学习材料,学习次序,三年小成,五年大成,十年精纯,教学目标",
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