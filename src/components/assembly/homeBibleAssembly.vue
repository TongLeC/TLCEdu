<template>
  <div class="home-free row" :home="home">
    <div class="home-top-left col-sm-3 col-xs-12 center-block">
      <img :src="home.imgSrc" alt="" />
    </div>
    <div class="home-top-right col-sm-9 col-xs-12">
      <h3 class="home-top-title">
        {{ $t(home.title) }}
        <a :href="home.href">{{ $t("msg.seeMore") }}</a>
      </h3>
      <ul class="row">
        <li
          class="home-list col-sm-4 col-xs-12"
          v-for="(item, index) in home.json"
          :key="index"
        >
          <a class="home-list-detail" :href="item.homeUrl">
            <img :src="item.homeImg" :alt="item.homeDetail" />
          </a>
          <div
            class="home-list-title"
            v-for="(content, index) in item.homeDetail"
            :key="index"
          >
            {{ content }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeBibleAssembly",
  data() {
    return {};
  },
  props: {
    home: { type: Object },
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  ul {
    padding-left: 15px !important;
    max-height: 440px !important;
  }
  .home-list {
    padding: 0 15px !important;
  }
}
@media (min-width: 768px) and (max-width: 960px) {
  .home-list {
    padding: 0 2.5rem !important;
  }
  ul {
    padding-left: 0 !important;
  }
}
@media (min-width: 960px) and (max-width: 1100px) {
  .home-list {
    padding: 0 0.5rem !important;
  }
  ul {
    padding-left: 0 !important;
  }
}
@media (min-width: 1100px) and (max-width: 1500px) {
  .home-list {
    padding: 0 1.5rem !important;
  }
  ul {
    padding-left: 0 !important;
  }
}
.home-free {
  margin: 7rem 0;
  .home-top-left {
    height: 100%;
    padding: 2.5rem 0 0;
    img {
      object-fit: cover;
      width: 90%;
      transform: rotateY(180deg);
    }
  }
  .home-top-right {
    z-index: 999;
    ul {
      // display: flex;
      // flex-direction: row;
      // flex-wrap: wrap;
      // justify-content: space-between;
      max-height: 330px;
      overflow-y: auto;
      .home-list {
        padding: 0 3rem;
        margin-bottom: 1rem;
        .home-list-detail {
          display: block;
          width: 100%;
          object-fit: cover;
          img {
            width: 100%;
            border: 2px solid #ffd111;
          }
        }
        .home-list-title {
          margin-top: 5px;
        }
      }
    }
    .home-top-title {
      font-size: 2.5rem;
      color: #EA4335;
      margin: 2rem 0 1.3rem 0;
      font-family: "SourceSansPro-Regular",'HeiTi';
      a {
        font-size: 1.7rem;
        color: #a9a9a9;
      }
    }
  }
}
</style>