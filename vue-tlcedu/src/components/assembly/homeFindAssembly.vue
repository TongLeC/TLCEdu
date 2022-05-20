<template>
  <div class="home-find" :home="home">
    <div class="home-bottom-right">
      <img :src="home.imgSrc" alt="" />
    </div>
    <div class="home-bottom-left">
      <h3 class="home-top-title">
        {{ $t(home.title) }}
        <a :href="home.href">{{ $t("msg.seeMore") }}</a>
      </h3>
      <ul class="home-bottom-left-ul">
        <li class="home-list" v-for="(item, index) in home.json" :key="index">
          <a class="home-list-detail" :href="item.homeUrl">
            <img :src="item.homeImg" :alt="item.homeDetail" />
          </a>
          <div class="home-list-title">{{ item.homeDetail }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeFindAssembly",
  data() {
    return {};
  },
  props: {
    home: { type: Object }
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 420px) {
  ul {
    .home-list {
      flex: 0 0 90% !important;
    }
  }
}
@media (min-width: 420px) and (max-width: 760px) {
  .home-list {
    flex: 0 0 90% !important;
  }
}
@media screen and (max-width: 860px) {
  .home-bottom-left {
    margin: 1.5rem auto 0 !important;
  }
  .home-bottom-right {
    position: relative !important;
    img {
      position: static !important;
      margin: 2rem auto 0 !important;
    }
  }
}
@media (min-width: 760px) and (max-width: 900px) {
  .home-list {
    flex: 0 0 42% !important;
  }
}
@media (min-width: 900px) and (max-width: 1600px) {
  .home-list {
    flex: 0 0 27% !important;
  }
}

.home-find {
  position: relative;
  .home-bottom-left {
    width: 59%;
    background: white;
    box-shadow: 0 0 12px #d1d1d1;
    margin: 4rem 0 2rem 10rem;
    padding: 0.7rem 0 1rem 0;
    position: relative;
    z-index: 100;
    .home-bottom-left-ul {
      overflow-y: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      max-height: 390px;
      padding-left: 1.4rem;
      .home-list {
        margin: 10px 28px 20px 0;
        flex: 0 0 29%;
        .home-list-detail {
          display: block;
          width: 100%;
          object-fit: cover;
          img {
            width: 100%;
            border: 1px solid #a61b29;
          }
        }
        .home-list-title {
          font-size: 1.3rem;
          margin-top: 5px;
        }
      }
    }
    .home-top-title {
      font-size: 1.9rem;
      color: #a61b29;
      margin: 2rem 0 1.3rem 0;
      a {
        font-size: 1.2rem;
        color: #9c9c9c;
      }
    }
  }
  .home-bottom-right {
    img {
      transform: rotateY(180deg);
      position: absolute;
      right: 8rem;
      object-fit: cover;
      width: 26rem;
    }
  }
}
</style>