<template>
  <div class="home-learning" :home="home">
    <img :src="home.imgSrc" alt="" />
    <div class="home-learning-left">
      <p class="big-title">
        {{ home.json.sloganTitle }}
      </p>
      <p
        class="big-detail"
        v-for="(item, index) in home.json.sloganDetail"
        :key="index"
      >
        {{ item }}
      </p>
      <p
        class="big-slogan"
        v-for="(item, index) in home.json.slogan"
        :key="index"
      >
        {{ item }}
      </p>
    </div>
    <div class="home-learning-right">
      <div class="home-learning-top">
        <div v-for="(item, index) in home.json.sloganIntroduce" :key="index">
          {{ item }}
        </div>
      </div>
      <ul class="home-learning-ul">
        <li
          class="language-list"
          v-for="(item, index) in home.json.sloganList"
          :key="index"
        >
          <div class="language-list-detail" @click="getItem(item)">
            {{ item.title }}
          </div>
        </li>
        <li class="language-a">
          <a :href="home.href">{{ $t("msg.seeMore") }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

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
    getItem(item) {
      this.$router.push({
        path: "/languageLearningDetail",
        query: {
          id: item.id,
        },
      });
      localStorage.setItem("item", JSON.stringify(item));
    },
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 420px) {
  .home-learning {
    padding: 5rem !important;
    .big-title,
    .big-slogan {
      font-size: 2rem !important;
    }
    .big-detail {
      font-size: 1.5rem !important;
    }
  }
}
@media screen and (max-width: 860px) {
  .home-learning {
    display: block !important;
  }
}

.home-learning {
  width: 100%;
  padding: 8rem;
  display: flex;
  position: relative;
  img {
    position: absolute;
    object-fit: cover;
    width: 37rem;
    right: 0;
    top: -20rem;
  }
  .home-learning-left {
    font-weight: bold;
    flex: 1.5;
    z-index: 999;
    .big-title {
      font-size: 3rem;
      color: #a61b29;
    }
    .big-slogan {
      font-size: 3rem;
      color: #020077;
    }
    .big-detail {
      font-size: 1.6rem;
    }
  }
  .home-learning-right {
    flex: 1;
    z-index: 999;
    position: relative;
    .home-learning-top {
      background: white;
      box-shadow: 0 0 12px #d1d1d1;
      width: 100%;
      padding: 2rem;
      font-size: 1.4rem;
      text-align: left;
      text-indent: 2em;
    }
    .home-learning-ul {
      margin-bottom: 1.5rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      max-height: 350px;
      padding-left: 1.4rem;
      .language-list {
        width: 18.4rem;
        border-left: 4px solid #a61b29;
        background: white;
        box-shadow: 0 0 12px #d1d1d1;
        float: left;
        display: block;
        white-space: nowrap;
        margin: 3rem 1rem 0 0;
        .language-list-detail {
          font-size: 1.4rem;
          display: block;
          height: 100%;
          width: 100%;
          text-align: center;
          line-height: 3.8rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
        }
      }
      .language-a {
        margin-top: 1rem;
        width: 100%;
        float: right;
        a {
          font-size: 1.4rem;
          color: #a61b29;
          font-weight: bold;
        }
      }
    }
  }
}
</style>