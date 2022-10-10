<!--  首页同乐语言学习法  -->
<template>
  <main class="home-container" :home="home">
    <section class="home-learning">
      <h2 class="big-title">
        {{ $t(home.json.sloganTitle) }}
        <p class="see-more">
          <router-link :to="localePath({ name: 'Method' })"
            >{{ $t("msg.seeMore") }} ></router-link
          >
        </p>
      </h2>
      <p
        class="big-slogan"
        v-for="(item, index) in home.json.slogan"
        :key="index"
      >
        {{ $t(`homeSloganLearning.slogan[${index}]`) }}
      </p>
      <div class="home-learning-box row">
        <article class="home-learning-top col-12 col-md-9">
          <p
            class="big-detail"
            v-for="(item, index) in home.json.sloganDetail"
            :key="index"
          >
            {{ $t(`homeSloganLearning.sloganDetail[${index}]`) }}
          </p>
        </article>
        <ul class="home-learning-ul col-12 col-md-3" style="padding-left: 20px">
          <li
            class="language-list"
            v-for="(item, index) in home.json.sloganListOne"
            :key="index"
          >
            <NuxtLink
              :to="
                localePath(
                  `/detail/${home.json.id}-${$baseUtils.getTitleFormat(
                    item.title
                  )}`
                )
              "
            >
              <p class="language-list-detail">
                {{ $t(`homeSloganLearning.sloganListOne[${index}].title`) }}
              </p>
            </NuxtLink>
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
            <NuxtLink
              :to="
                localePath(
                  `/detail/${home.json.id}-${$baseUtils.getTitleFormat(
                    item.title
                  )}`
                )
              "
            >
              <p class="language-list-detail">
                {{ $t(`homeSloganLearning.sloganListTwo[${index}].title`) }}
              </p>
            </NuxtLink>
          </li>
        </ul>
        <article class="home-learning-top col-12 col-md-9">
          <p
            class="big-detail big-detail-p"
            v-for="(item, index) in home.json.sloganIntroduce"
            :key="index"
          >
            {{ $t(`homeSloganLearning.sloganIntroduce[${index}]`) }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>
<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();
const { $baseUtils } = useNuxtApp();
</script>

<script>
export default {
  name: "homeLearningAssembly",
  data() {
    return {};
  },
  props: {
    home: { type: Object },
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
  .home-learning {
    width: 90% !important;
  }
}

.home-learning {
  width: 75%;
  margin: 0 auto;
  position: relative;
  padding: 70px 0 40px;
  .big-slogan {
    margin-bottom: 10px;
  }
  &-box {
    padding: 10px 0;
    margin: 0;
    .home-learning-top {
      background: #fff;
      border-radius: 15px;
      box-shadow: 2px 2px 10px $shadow-color;
      padding: 30px 40px;
    }
    .home-learning-ul {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
    }
    .language-list {
      flex: 1;
      background: $main-color;
      box-shadow: 2px 2px 10px $shadow-color;
      color: #fff;
      border-radius: 15px;
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
      &-detail {
        color: white;
      }
      > a {
        width: 100%;
        display: inline-block;
        padding: 25px;
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