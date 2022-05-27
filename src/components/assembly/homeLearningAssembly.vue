<template>
  <div class="home-container" :home="home">
    <div class="home-learning row">
      <img :src="home.imgSrc" alt="" />
      <div class="home-learning-left col-sm-6 col-xs-12">
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
        <!-- <p
          class="big-slogan"
          v-for="(item, index) in home.json.slogan"
          :key="index"
        >
          {{ item }}
        </p> -->
      </div>
      <div class="home-learning-right col-sm-6 col-xs-12">
        <p
          class="big-slogan"
          v-for="(item, index) in home.json.slogan"
          :key="index"
        >
          {{ item }}
        </p>
        <div class="home-learning-top">
          <div v-for="(item, index) in home.json.sloganIntroduce" :key="index">
            {{ item }}
          </div>
        </div>
        <ul class="home-learning-ul row">
          <li
            class="language-list col-md-5 col-xs-12"
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
    .big-title {
      font-size: 2.5rem !important;
    }
    .big-slogan {
      font-size: 2rem !important;
    }
    .big-detail {
      font-size: 1.5rem !important;
    }
    img {
      width: 25rem !important;
    }
  }
}
@media screen and (max-width: 768px) {
  .home-learning {
    padding: 5rem 2rem 0 !important;
    img {
      display: none;
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
  padding: 8rem 5rem 0;
  position: relative;
  margin: 0;
  img {
    position: absolute;
    object-fit: cover;
    width: 35rem;
    left: 2rem;
    bottom: -5rem;
    transform: rotateY(180deg);
  }
  .home-learning-left {
    font-weight: bold;
    z-index: 999;
    .big-title {
      font-size: 3.7rem;
      color: #d11a2d;
      margin-bottom: 1.5rem;
    }
    // .big-slogan {
    //   font-size: 2.5rem;
    //   color: #d11a2d;
    // }
    .big-detail {
      font-size: 2.5rem;
    }
  }
  .home-learning-right {
    z-index: 999;
    position: relative;
    padding-top: 1.5rem;
    .big-slogan {
      font-size: 2.5rem;
      color: #d11a2d;
      font-weight: bold;
    }
    .home-learning-top {
      width: 100%;
      padding: 2rem;
      text-align: left;
      text-indent: 2em;
      color: #000;
    }
    .home-learning-ul {
      margin: 1rem 0;
      padding: 0;
      .language-list {
        border-left: 4px solid #d11a2d;
        box-shadow: 0 0 12px #d1d1d1;
        margin: 1rem 2rem 1.5rem 0;
        .language-list-detail {
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
        width: 100%;
        float: right;
        a {
          color: #d11a2d;
          font-weight: bold;
        }
      }
    }
  }
}
</style>