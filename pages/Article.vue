<template>
  <main class="language-learning home-container">
    <section class="other-page">
      <h1 class="other-page-title">{{ $t("msg.originalArticle") }}</h1>
      <p class="other-page-slogan">{{ $t("msg.slogan[5]") }}</p>
    </section>
    <div class="language-learning-box">
      <ul class="language-right row">
        <li
          class="language-list col-sm-4 col-xs-12"
          v-for="(item, index) in createdArticleJson.someArticles"
          :key="index"
        >
          <!-- <a
            class="language-list-detail"
            :href="item.articleLink"
            target="blank"
          >
            {{ $t(`CreatedArticle[${index}].articleTitle`) }}
            <span class="bookmark"></span>
          </a> -->
          <p class="language-list-detail" @click="getItem(item)">
            {{ $t(`someArticles[${index}].title`) }}
            <span class="bookmark"></span>
          </p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import aaa from "/assets/json/CreatedArticle.json";
const createdArticleJson = ref(aaa);
const localePath = useLocalePath();

useHead({
  title: "秉持着“文以载道”的原则，通过趣味解说汉字，传递中国古代的文化和智慧",
  meta: [
    {
      name: "description",
      content:
        "对汉字的解读，不仅是理解字义，更是通达汉字背后的“道”。文与武、朋与友、仙与俗，简单的文字背后，蕴含着深刻的“道”",
    },
  ],
});
</script>
<script>
export default {
  name: "CreatedArticle",
  methods: {
    getItem(item) {
      navigateTo(this.localePath(`/detail/Article-${item.id}`));
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