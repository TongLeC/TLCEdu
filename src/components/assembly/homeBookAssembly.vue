<template>
  <div class="home-find" :home="home">
    <h3 class="home-top-title">
      {{ $t(home.title) }}
      <a :href="home.href">{{ $t("msg.seeMore") }}</a>
      <p class="home-top-describe">
        {{ home.json.describe }}
      </p>
    </h3>
    <div class="list-box" v-if="isShow == 1">
      <swiper
        :slidesPerView="home.slidesPerView"
        :spaceBetween="30"
        :slidesPerGroup="home.slidesPerView"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper home-list-box"
      >
        <swiper-slide
          class="home-list"
          v-for="(item, index) in home.json.detail"
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
        </swiper-slide>
      </swiper>
    </div>
    <div class="list-box" v-else>
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper home-list-box"
      >
        <swiper-slide
          class="home-list"
          v-for="(item, index) in home.json.detail"
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
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default {
  name: "homeBookAssembly",
  data() {
    return {
      isShow: "1",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    home: { type: Object },
  },
  methods: {},
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  mounted() {
    if (document.body.clientWidth < 768) {
      this.isShow = "0";
    }
  },
  // 销毁，防止继续占用内存
  unmounted() {
    window.onresize = null;
  },
};
</script>

<style scoped lang='scss'>
.home-find {
  margin: 5rem 0 0;
  padding: 0 4rem 20px;
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
      top: 20%;
    }
  }
  .list-box {
    .home-list-box {
      padding: 0 1rem;
      .home-list {
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
  ::v-deep .swiper-pagination {
    bottom: -10px !important;
  }
}
</style>