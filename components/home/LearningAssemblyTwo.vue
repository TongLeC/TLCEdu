<!--  首页同乐整体教育理论  -->
<template>
  <main class="home-container" :home="home">
    <section class="home-learning">
      <h2 class="big-title">
        {{ $t(home.json.sloganTitle) }}
        <p class="see-more">
          <router-link
            :to="localePath({ name: 'Tongle-Holistic-Education-Theory' })"
            >{{ $t("msg.seeMore") }} ></router-link
          >
        </p>
      </h2>
      <p
        class="big-slogan"
        v-for="(item, index) in home.json.slogan"
        :key="index"
      >
        {{ $t(`homeSloganTheory.slogan[${index}]`) }}
      </p>
      <div class="home-learning-box row">
        <p class="home-learning-top big-detail-p col-12 col-md-9">
          {{ $t(`homeSloganTheory.sloganIntroduce`) }}
        </p>
        <ul class="home-learning-ul col-12 col-md-3" style="padding-left: 20px">
          <li
            class="language-list"
            v-for="(item, index) in home.json.sloganList"
            :key="index"
          >
            <NuxtLink
              :to="
                localePath(`/detail/${$baseUtils.getTitleFormat(item.title)}`)
              "
            >
              <p class="language-list-detail">
                {{ $t(`homeSloganTheory.sloganList[${index}].title`) }}
              </p>
            </NuxtLink>
          </li>
        </ul>
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
  methods: {
    getItem(list, item) {
      navigateTo(
        this.localePath(`/detail/${$baseUtils.getTitleFormat(list.title)}`)
      );
    },
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .home-learning {
    padding: 30px 0 20px !important;
  }
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
  .home-learning-box {
    .home-learning-top {
      margin: 10px 0 0;
      line-height: 30px !important;
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
  padding: 0 0 50px;
  &-box {
    margin: 0;
    padding: 0;
    .home-learning-top {
      background: #fff;
      border-radius: 15px;
      box-shadow: 2px 2px 10px $shadow-color;
      padding: 30px 40px;
      display: flex;
      align-items: center;
      line-height: 60px;
      margin: 0;
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
      margin-bottom: 20px;
      &:hover {
        color: $main-color;
        background: $bg-main-color;
        transition: all 0.4s ease 0s;
      }
      > a {
        display: inline-block;
        width: 100%;
        padding: 25px;
      }
      &-detail {
        color: white;
      }
      &:last-child {
        margin-bottom: 0;
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