<template>
  <div class="home-free" :home="home">
    <div class="home-top-left">
      <img :src="home.imgSrc" alt="" />
    </div>
    <div class="home-top-right">
      <h3 class="home-top-title">
        {{ $t(home.title) }}
        <a :href="home.href">{{ $t("msg.seeMore") }}</a>
      </h3>
      <ul>
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
  name: "homeFreeAssembly",
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
  .home-free {
    display: block !important;
  }
  .home-top-left {
    position: relative;
    margin: 0 auto !important;
    img {
      position: static !important;
      margin: 1.5rem auto 2rem !important;
    }
  }
  .home-top-right {
    position: relative;
    z-index: 999;
    padding-top: 1rem;
    margin: 0 auto !important;
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

.home-free {
  display: flex;
  position: relative;
  .home-top-left {
    margin: 4rem 30px 1.5rem 9rem;
    img {
      object-fit: cover;
      width: 26rem;
      transform: rotateY(180deg);
    }
  }
  .home-top-right {
    width: 59%;
    background: white;
    box-shadow: 0 0 12px #d1d1d1;
    z-index: 999;
    margin: 3rem 30px 1.5rem 2rem;
    padding: 1rem 0;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      max-height: 390px;
      padding-left: 1.4rem;
      overflow-y: auto;
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
}
</style>