<!--  首页网上读经机-免费  -->
<template>
  <main class="bible-find" :home="home">
    <h2 class="big-title">
      {{ $t(home.title) }}
      <p class="see-more">
        <router-link :to="localePath({ name: 'Resources' })"
          >{{ $t("msg.seeMore") }} ></router-link
        >
      </p>
    </h2>
    <p class="big-slogan">
      {{ $t("homeBible.describe") }}
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
          :key="'bi' + index"
        >
          <a class="bible-list-detail" target="blank" :href="item.homeUrl">
            <img
              :src="item.homeImg"
              :alt="
                $t(`homeBible.detail[${index}].homeDetail[${0}]`) +
                $t(`homeBible.detail[${index}].homeDetail[${1}]`)
              "
            />
            <p
              class="bible-list-title"
              v-for="(content, index2) in item.homeDetail"
              :key="'bi2' + index2"
            >
              {{ $t(`homeBible.detail[${index}].homeDetail[${index2}]`) }}
            </p>
          </a>
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
          :key="'bi3' + index"
        >
          <a class="bible-list-detail" target="blank" :href="item.homeUrl">
            <img :src="item.homeImg" :alt="item.homeDetail" />
            <p
              class="bible-list-title"
              v-for="(content, index2) in item.homeDetail"
              :key="'bi4' + index2"
            >
              {{ $t(`homeBible.detail[${index}].homeDetail[${index2}]`) }}
            </p>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </main>
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

<style lang="scss">
.bible-list-box .swiper-button-prev {
  position: absolute;
  left: -2px !important;
}
.bible-list-box .swiper-button-next {
  position: absolute;
  right: -2px !important;
}
.bible-list {
  border: 2px solid $adorn-color;
  border-radius: 15px;
  padding: 20px 20px 0;
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
</style>
<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .bible-find {
    width: 90% !important;
  }
}
.bible-find {
  width: 75%;
  margin: 0 auto;
  padding: 0 0 50px;
  .list-box {
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 10px $shadow-color;
    padding: 20px 10px;
  }
  .bible-list-box {
    padding: 0 30px;
    height: 100%;
    .bible-list-detail:hover img {
      transition: all 0.4s ease 0s;
    }
  }
  :deep(.swiper-pagination) {
    bottom: -10px !important;
  }
}
</style>