<template>
  <div class="home-free row" :home="home">
    <!-- <div class="home-top-left col-sm-3 col-xs-12 center-block">
      <img :src="home.imgSrc" alt="" />
    </div> -->
    <h3 class="home-top-title">
      <span style="font-weight:bold;">{{ $t(home.title) }}</span>
      <a :href="home.href">{{ $t("msg.seeMore") }}</a>
      <p class="home-top-describe">
        {{ home.json.describe }}
      </p>
    </h3>
    <div class="home-top-right col-xs-12">
      <ul class="row">
        <li
          class="home-list col-sm-3 col-xs-12"
          v-for="(item, index) in home.json.detail"
          :key="index"
        >
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
@media screen and (max-width: 768px) {
  ul {
    padding-left: 15px !important;
    .col-sm-3 {
      width: 100% !important;
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
.home-free {
  margin: 4rem 0 0;
  padding: 0 4rem;
  .home-top-title {
    font-size: 2.5rem;
    margin: 2rem 0;
    font-family: "SourceSansPro-Regular", "HeiTi";
    position: relative;
    a {
      font-size: 1.7rem;
      color: #EA4335;
      position: absolute;
      right: 0;
      top: 20%;
    }
    a:hover{
      color: #ffd111;
      transition: all 0.4s ease 0s;
    }
  }
  .home-top-right {
    z-index: 999;
    ul {
      padding: 0;
      .home-list {
        padding: 0 1.5rem;
        .home-list-detail {
          display: block;
          width: 100%;
          object-fit: cover;
          img {
            width: 100%;
            background: white;
            border-radius: 15px;
            box-shadow: 5px 5px 10px #a9a9a9;
          }
        }
        .home-list-title {
          margin-top: 5px;
        }
      }
      .home-list-detail:hover img {
        box-shadow: 5px 5px 10px #ee958d;
        transition: all 0.4s ease 0s;
      }
      .col-sm-3 {
        width: 20%;
      }
    }
  }
  .home-top-describe {
    margin-top: 2rem;
  }
  .home-top-describe,
  .home-list-describe {
    color: #a9a9a9;
    // text-indent: 2em;
    font-size: 1.5rem;
    font-family: "Kaiti";
    // text-align: left;
  }
}
</style>