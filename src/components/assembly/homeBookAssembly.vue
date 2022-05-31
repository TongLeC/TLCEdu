<template>
  <div class="home-find row" :home="home">
    <div class="home-bottom-left col-xs-12">
      <h3 class="home-top-title">
        {{ $t(home.title) }}
        <a :href="home.href">{{ $t("msg.seeMore") }}</a>
      </h3>
      <ul class="home-bottom-left-ul row">
        <li
          class="home-list col-sm-3 col-xs-12"
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
    <!-- <div class="home-bottom-right col-sm-3 col-xs-12">
      <img :src="home.imgSrc" alt="" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "homeBookAssembly",
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
    display: none;
  }
  .col-sm-3 {
    width: 100% !important;
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
      max-height: 520px;
      width: 100%;
      // white-space: nowrap;
      // overflow-x: scroll;
      overflow-y: auto;
      .home-list {
        padding: 0 2.5rem 20px;
        white-space: nowrap;
        .home-list-detail {
          display: block;
          width: 100%;
          object-fit: cover;
          img {
            width: 100%;
            border-radius: 15px;
            box-shadow: 5px 5px 10px #a9a9a9;
          }
        }
        .home-list-title {
          margin-top: 5px;
        }
      }
      .col-sm-3 {
        width: 20%;
      }
    }
    .home-top-title {
      font-size: 2.5rem;
      margin: 2rem 0;
      font-family: "SourceSansPro-Regular", "HeiTi";
      position: relative;
      a {
        font-size: 1.7rem;
        color: #a9a9a9;
        position: absolute;
        right: 0;
        top: 15%;
      }
    }
  }
  .home-bottom-right {
    padding: 7rem 0 0;
    img {
      // align-items: center;
      transform: rotateY(180deg);
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>