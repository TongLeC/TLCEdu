<template>
  <div class="home-find row" :home="home">
    <div class="home-bottom-left col-sm-9 col-xs-12">
      <h3 class="home-top-title">
        {{ $t(home.title) }}
        <a :href="home.href">{{ $t("msg.seeMore") }}</a>
      </h3>
      <ul class="home-bottom-left-ul row">
        <li
          class="home-list col-sm-4 col-xs-12"
          v-for="(item, index) in home.json"
          :key="index"
        >
          <a class="home-list-detail" :href="item.homeUrl">
            <img :src="item.homeImg" :alt="item.homeDetail" />
          </a>
          <div class="home-list-title">{{ item.homeDetail }}</div>
        </li>
      </ul>
    </div>
    <div class="home-bottom-right col-sm-3 col-xs-12">
      <img :src="home.imgSrc" alt="" />
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
    home: { type: Object },
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  ul {
    padding-left: 15px !important;
  }
  .home-bottom-right {
    img {
      display: none;
    }
  }
}
@media screen and (max-width: 1500px) {
  .home-list {
    padding: 0 1rem !important;
  }
  ul {
    padding-left: 0 !important;
  }
}
.home-find {
  margin: 4rem 0 0;
  .home-bottom-left {
    position: relative;
    z-index: 100;
    padding: 0 2rem;
    .home-bottom-left-ul {
      padding-left: 1.4rem;
      .home-list {
        padding: 0 2.5rem;
        .home-list-detail {
          display: block;
          width: 100%;
          object-fit: cover;
          img {
            width: 100%;
            border: 2px solid #d11a2d;
          }
        }
        .home-list-title {
          margin-top: 5px;
        }
      }
    }
    .home-top-title {
      font-size: 2.5rem;
      color: #d11a2d;
      margin: 2rem 0 1.3rem 0;
      a {
        font-size: 1.7rem;
        color: #9c9c9c;
      }
    }
  }
  .home-bottom-right {
    // display: flex;
    // align-items: center;
    // height: 500px;
    img {
      // align-items: center;
      transform: rotateY(180deg);
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>