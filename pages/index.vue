<template>
  <main class="home-page">
    <div class="home-rotation-map">
      <swiper
        :autoplay="swiper_options.autoplay"
        :loop="swiper_options.loop"
        :speed="swiper_options.speed"
        :pagination="swiper_options.pagination"
        :navigation="swiper_options.navigation"
        :centeredSlides="swiper_options.centeredSlides"
        :slidesPerView="swiper_options.slidesPerView"
        class="swiper"
      >
        <swiper-slide
          v-for="(item, index) in HomePage.rotationMap"
          :key="index"
        >
          <img
            class="my_swiper_imgs"
            :src="item.mapUrl"
            alt=""
            v-if="item.type == 0"
          />
        </swiper-slide>
      </swiper>
      <nav class="home-transition">
        <router-link
          :to="localePath({ name: 'Method' })"
          style="margin-right: 10px"
        >
          {{ $t("msg.languageLearning") }}
          <svg
            class="home-transition-svg"
            id="faa00db7-5049-4f88-91cb-430b5e5f1777"
            data-name="图层 20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40.73 25.04"
          >
            <polygon
              class="e7012c15-b97e-4beb-b68f-77e9c6a73f7b"
              points="2.37 25.04 0 22.67 10.16 12.51 0 2.37 2.37 0 14.89 12.51 2.37 25.04"
            />
            <polygon
              class="f318b36b-2f3d-4370-9f30-e11dbe5b7d64"
              points="15.27 25.04 12.9 22.67 23.06 12.51 12.9 2.37 15.27 0 27.79 12.51 15.27 25.04"
            />
            <polygon
              class="acfbcbba-992b-444a-97c4-531c4f40c44c"
              points="28.2 25.04 25.84 22.67 35.99 12.51 25.84 2.37 28.2 0 40.73 12.51 28.2 25.04"
            />
          </svg>
        </router-link>
        <router-link :to="localePath({ name: 'Theory' })">
          {{ $t("msg.holisticEducationTheory") }}
          <svg
            class="home-transition-svg"
            id="faa00db7-5049-4f88-91cb-430b5e5f1777"
            data-name="图层 20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40.73 25.04"
          >
            <polygon
              class="e7012c15-b97e-4beb-b68f-77e9c6a73f7b"
              points="2.37 25.04 0 22.67 10.16 12.51 0 2.37 2.37 0 14.89 12.51 2.37 25.04"
            />
            <polygon
              class="f318b36b-2f3d-4370-9f30-e11dbe5b7d64"
              points="15.27 25.04 12.9 22.67 23.06 12.51 12.9 2.37 15.27 0 27.79 12.51 15.27 25.04"
            />
            <polygon
              class="acfbcbba-992b-444a-97c4-531c4f40c44c"
              points="28.2 25.04 25.84 22.67 35.99 12.51 25.84 2.37 28.2 0 40.73 12.51 28.2 25.04"
            />
          </svg>
        </router-link>
      </nav>
    </div>
    <div class="home-big-box home-container">
      <HomeLearningAssembly :home="home[4]"></HomeLearningAssembly>
      <HomeLearningAssemblyTwo :home="home[5]"></HomeLearningAssemblyTwo>
    </div>
    <div class="home-video home-container">
      <section class="home-video-box">
        <h2 class="big-title">
          {{ $t("msg.educationalPractice") }}
          <p class="see-more">
            <router-link :to="localePath({ name: 'Speech' })"
              >{{ $t("msg.seeMore") }} ></router-link
            >
          </p>
        </h2>
        <p class="big-slogan">
          {{ $t("homeVideo.describe") }}
        </p>
        <ul class="row">
          <li
            class="home-list col-12 col-lg-3"
            v-for="(item, index) in HomePage.homeVideo.detail"
            :key="index"
          >
            <div class="home-list-div">
              <iframe
                :src="item.videoUrl"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p class="video-describe">
                {{ $t(`homeVideo.detail[${index}].videoDetail`) }}
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <div class="home-public home-container">
      <home-book-assembly-two :home="home[2]"></home-book-assembly-two>
      <home-book-assembly :home="home[0]"></home-book-assembly>
      <home-free-assembly :home="home[1]"></home-free-assembly>
    </div>
  </main>
</template>
<script setup>
import aaa from "/assets/json/HomePage.json";
const HomePage = ref(aaa);
// const { data: HomePage } = await useFetch("/api/json/HomePage");
const swiper_options = reactive({
  autoplay: {
    disableOnInteraction: false,
    delay: 3000,
  },
  speed: 500,
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  navigation: {
    nextElRef: ".swiper-button-next",
    prevElRef: ".swiper-button-prev",
  },
  pagination: {
    clickable: true,
  },
});
const home = [
  {
    title: "msg.classicAudio",
    json: HomePage.value.homeBible,
    slidesPerView: 4,
  },
  {
    title: "msg.originalArticle",
    json: HomePage.value.homeArticle,
  },
  {
    title: "msg.tongleBooks",
    json: HomePage.value.homeBook,
  },
  {
    title: "msg.classicMusic",
    json: HomePage.value.homeFree,
  },
  {
    json: HomePage.value.homeSloganLearning,
  },
  {
    json: HomePage.value.homeSloganTheory,
  },
];
</script>

<script>
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default {
  name: "HomePage",
  components: {
    Swiper,
    SwiperSlide,
  },
};
//
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .home-transition {
    width: 100% !important;
    right: 0 !important;
    bottom: -28% !important;
    .home-transition-svg {
      height: 16px !important;
    }
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none !important;
  }
  .home-video-box {
    width: 90% !important;
  }
}
@media screen and (max-width: 1140px) {
  .home-video {
    .col-lg-3 {
      width: 100% !important;
    }
  }
}
.home-page {
  background: $sub-color;
  padding: 70px 0 0;
  .home-rotation-map {
    position: relative;
    .swiper-slide {
      width: 100%;
      max-height: 750px;
      text-align: center;
      .my_swiper_imgs {
        width: 100%;
        height: auto;
      }
    }
    .home-transition {
      width: 48%;
      font-size: 1.5rem;
      background: $sub-color;
      border-radius: 30px 30px 0 0;
      position: absolute;
      right: 27%;
      bottom: -5%;
      z-index: 99;
      padding: 1.5rem 0;
      a:hover {
        color: $main-color;
        transition: all 0.4s ease 0s;
      }
      .e7012c15-b97e-4beb-b68f-77e9c6a73f7b {
        fill: #d0e8f5;
      }
      .f318b36b-2f3d-4370-9f30-e11dbe5b7d64 {
        fill: #9ac5e2;
      }
      .acfbcbba-992b-444a-97c4-531c4f40c44c {
        fill: #6dabdd;
      }
      .home-transition-svg {
        height: 20px;
      }
    }
    .map-video {
      object-fit: fill;
    }
    :deep(.swiper-pagination-bullet) {
      float: right;
    }
  }
  .home-video {
    position: relative;
    padding: 40px 0;
    .home-video-box {
      margin: 0 auto;
      width: 75%;
      ul {
        padding: 15px 20px;
        font-size: 1.4rem;
        background: #fff;
        border-radius: 15px;
        box-shadow: 2px 2px 10px $shadow-color;
        .home-list {
          padding: 1rem;
          .home-list-div {
            height: 100%;
            border: 2px solid $adorn-color;
            border-radius: 15px;
            padding: 15px 15px 0;
          }
          iframe {
            width: 100%;
            height: 230px;
            border-radius: 15px;
          }
        }
        .col-lg-3 {
          width: 20%;
        }
      }
    }
  }
}
</style>