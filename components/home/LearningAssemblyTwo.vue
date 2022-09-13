<!--  首页同乐整体教育理论  -->
<template>
  <main class="home-container" :home="home">
    <section class="home-learning">
      <h2 class="big-title">
        {{ $t(home.json.sloganTitle) }}
        <p class="see-more">
          <router-link :to="localePath({ name: 'Theory' })"
            >{{ $t("msg.seeMore") }} ></router-link
          >
        </p>
      </h2>
      <p
        class="big-slogan"
        v-for="(item, index) in home.json.slogan"
        :key="index"
      >
        {{ item }}
      </p>
      <div class="home-learning-box row">
        <p class="home-learning-top big-detail-p col-12 col-md-9">
          {{ home.json.sloganIntroduce }}
        </p>
        <ul class="home-learning-ul col-12 col-md-3" style="padding-left: 20px">
          <li
            class="language-list"
            v-for="(item, index) in home.json.sloganList"
            :key="index"
          >
            <p class="language-list-detail" @click="getItem(item, home.json)">
              {{ item.title }}
            </p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup>
const { locale } = useI18n();
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
      navigateTo(`/${this.locale}/detail/${item.id}-${list.id}`);
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
  padding: 70px 0 20px;
  &-box {
    padding: 12px 0;
    .home-learning-top {
      background: #fff;
      border-radius: 15px;
      box-shadow: 2px 2px 10px $shadow-color;
      padding: 30px 40px;
      display: flex;
      align-items: center;
      line-height: 60px;
    }
    .home-learning-ul {
      padding: 0;
      margin: 0;
    }
    .language-list {
      background: $main-color;
      box-shadow: 2px 2px 10px $shadow-color;
      color: #fff;
      border-radius: 15px;
      padding: 25px;
      text-align: left;
      cursor: pointer;
      margin-bottom: 20px;
      &:hover {
        color: $main-color;
        background: $bg-main-color;
        transition: all 0.4s ease 0s;
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