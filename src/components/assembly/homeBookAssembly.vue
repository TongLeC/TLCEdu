<!--  首页网上读经机-免费  -->
<template>
  <div class="bible-find" :home="home">
    <div class="big-title">
      {{ $t(home.title) }}
      <div class="see-more">
        <router-link :to="{ name: 'publicResources' }"
          >{{ $t("msg.seeMore") }} ></router-link
        >
      </div>
    </div>
    <p class="big-slogan">
      {{ home.json.describe }}
    </p>
    <div class="list-box">
      <swiper
        v-if="showSwiper"
        :slidesPerView="4"
        :spaceBetween="30"
        :slidesPerGroup="4"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper bible-list-box"
      >
        <swiper-slide
          class="bible-list"
          v-for="(item, index) in home.json.detail"
          :key="index"
        >
          <a class="bible-list-detail" target="blank" :href="item.homeUrl">
            <img :src="item.homeImg" :alt="item.homeDetail" />
          </a>
          <div
            class="bible-list-title"
            v-for="(content, index) in item.homeDetail"
            :key="index"
          >
            {{ content }}
          </div>
        </swiper-slide>
      </swiper>
      <swiper
        v-else
        :slidesPerView="1"
        :spaceBetween="30"
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper bible-list-box"
      >
        <swiper-slide
          class="bible-list"
          v-for="(item, index) in home.json.detail"
          :key="index"
        >
          <a class="bible-list-detail" target="blank" :href="item.homeUrl">
            <img :src="item.homeImg" :alt="item.homeDetail" />
          </a>
          <div
            class="bible-list-title"
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
// import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default {
  name: "homeBookAssembly",
  data() {
    return {
      screenWidth: null,
      showSwiper: true,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    home: { type: Object },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
      })();
    };
  },
  watch: {
    screenWidth: {
      handler: function (val) {
        if (val > 768) {
          this.showSwiper = true;
        } else if (val < 768) {
          this.showSwiper = false;
        }
      },
      immediate: true,
    },
  },
  // 销毁，防止继续占用内存
  unmounted() {
    window.onresize = null;
  },
};
</script>

<style>
.bible-list-box .swiper-button-prev {
  position: absolute;
  left: -2px !important;
}
.bible-list-box .swiper-button-next {
  position: absolute;
  right: -2px !important;
}
</style>
<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .bible-find {
    width: 90% !important;
  }
}
.bible-find {
  width: 75%;
  margin: 80px auto 0;
  .list-box {
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 10px $shadow-color;
    padding: 30px 20px;
    .bible-list-box {
      padding: 0 1.5rem;
      height: 100%;
      position: relative;
      .bible-list {
        border: 2px solid $adorn-color;
        border-radius: 15px;
        padding: 15px;
        height: auto;
        .bible-list-detail {
          display: block;
          width: 100%;
          object-fit: cover;
          img {
            width: 100%;
            border-radius: 15px;
          }
        }
        .bible-list-title {
          margin-top: 5px;
        }
      }
      .bible-list-detail:hover img {
        transition: all 0.4s ease 0s;
      }
      .swiper-button-prev {
        position: absolute;
        left: 0 !important;
      }
      .swiper-button-next {
        position: absolute;
        right: 0 !important;
      }
    }
  }
  :deep(.swiper-pagination) {
    bottom: -10px !important;
  }
}
</style>