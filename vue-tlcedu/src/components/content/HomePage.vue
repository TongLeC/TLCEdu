<template>
  <div class="home-page">
    <div class="home-rotation-map">
      <swiper
        :autoplay="swiper_options.autoplay"
        :loop="swiper_options.loop"
        :speed="swiper_options.speed"
        :pagination="swiper_options.pagination"
        :navigation="swiper_options.navigation"
        :spaceBetween="swiper_options.spaceBetween"
        :centeredSlides="swiper_options.centeredSlides"
        :slidesPerView="swiper_options.slidesPerView"
        class="swiper"
      >
        <swiper-slide
          v-for="(item, index) in homePageJson.rotationMap"
          :key="index"
        >
          <img class="my_swiper_imgs" :src="item.mapUrl" alt="" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="home-big-box">
      <home-learning-assembly :home="home[4]"></home-learning-assembly>
    </div>
    <home-learning-assembly :home="home[5]"></home-learning-assembly>
    <div class="home-video">
      <div class="home-video-left">
        <img src="../../../public/images/video-child.png" alt="" />
      </div>
      <div class="home-video-box">
        <h3 class="home-top-title">
          {{ $t("msg.tongleVideo") }}
          <a href="/educationalPractice">{{ $t("msg.seeMore") }}</a>
        </h3>
        <ul>
          <li
            class="home-list"
            v-for="(item, index) in homePageJson.homeVideo"
            :key="index"
          >
            <iframe
              :src="item.videoUrl"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
        </ul>
      </div>
    </div>
    <div class="home-public">
      <div class="home-public-title">
        不忘初心·方得始终
        <i class="glyphicon glyphicon-heart" style="color: red"></i>
        公益分享
      </div>
      <home-find-assembly :home="home[2]"></home-find-assembly>
      <home-free-assembly :home="home[0]"></home-free-assembly>
      <home-find-assembly :home="home[3]"></home-find-assembly>
      <home-free-assembly :home="home[1]"></home-free-assembly>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);

import homeFreeAssembly from "../assembly/homeFreeAssembly.vue";
import homeFindAssembly from "../assembly/homeFindAssembly.vue";
import homeLearningAssembly from "../assembly/homeLearningAssembly.vue";
import homePageJson from "../../../public/json/HomePage.json";

export default {
  name: "HomePage",
  data() {
    return {
      homePageJson,
      home: [
        {
          imgSrc: "/images/home-bible.png",
          title: "msg.classicAudio",
          href: "/publicResources",
          json: homePageJson.homeBible,
        },
        {
          imgSrc: "/images/public-child.jpg",
          title: "msg.originalArticle",
          href: "/createdArticle",
          json: homePageJson.homeArticle,
        },
        {
          imgSrc: "/images/book-child.png",
          title: "msg.tongleBooks",
          href: "/publicResources",
          json: homePageJson.homeFind,
        },
        {
          imgSrc: "/images/article-child.jpg",
          title: "msg.classicMusic",
          href: "/publicResources",
          json: homePageJson.homeFree,
        },
        {
          href: "/languageLearning",
          json: homePageJson.homeSloganLearning,
        },
        {
          imgSrc: "/images/home-flower.png",
          href: "/educationalTheory",
          json: homePageJson.homeSloganTheory,
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    homeFreeAssembly,
    homeFindAssembly,
    homeLearningAssembly,
  },
  methods: {
    getItem(item) {
      this.$router.push({
        path: "/languageLearningDetail",
        query: {
          id: item.id,
        },
      });
      localStorage.setItem("item", JSON.stringify(item));
    },
  },
  setup() {
    let swiper_options = reactive({
      autoplay: {
        disableOnInteraction: false,
        delay: 3000,
      },
      speed: 500,
      loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
      navigation: {
        nextElRef: ".swiper-button-next",
        prevElRef: ".swiper-button-prev",
      },
      pagination: {
        clickable: true,
      },
    });
    return { swiper_options };
  },
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
  .home-video-left {
    position: relative;
    img {
      margin: 0 auto !important;
      width: 15rem !important;
    }
  }
  .home-top-right {
    position: relative;
    margin-left: 10rem !important;
    z-index: 999;
    padding-top: 1rem;
  }
  .home-video {
    margin: 0 auto !important;
    display: block !important;
    .home-video-box {
      position: relative !important;
      margin: 0 auto !important;
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

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 350px;
  padding-left: 1.4rem;
}

.home-page {
  .home-rotation-map {
    .swiper-slide {
      width: 100%;
      max-height: 890px;
      text-align: center;
      .my_swiper_imgs {
        width: 100%;
        max-height: 890px;
      }
    }
  }
  .home-big-box {
    width: 100%;
    background: url("../../../public/images/source-banner.png") no-repeat;
    background-size: 100% 100%;
  }
  .home-video {
    width: 100%;
    background: url("../../../public/images/video-banne.png") no-repeat;
    background-size: 100% 150%;
    padding: 5rem 0;
    display: flex;
    position: relative;
    .home-video-left {
      margin: 4rem 30px 1.5rem 2rem;
      img {
        object-fit: cover;
        width: 25rem;
      }
    }
    .home-video-box {
      width: 57%;
      background: white;
      box-shadow: 0 0 12px #d1d1d1;
      z-index: 999;
      margin: 0 auto;
      padding: 1rem;
      ul {
        overflow-y: auto;
        .home-list {
          margin: 10px 28px 20px 0;
          flex: 0 0 45%;
          iframe {
            width: 100%;
            height: 290px;
          }
        }
      }
      .home-top-title {
        font-size: 1.9rem;
        color: #a61b29;
        margin: 1.2rem 0 1.3rem 0;
        a {
          font-size: 1.2rem;
          color: #9c9c9c;
        }
      }
    }
  }
  .home-public {
    width: 100%;
    padding: 4rem 0;
    .home-public-title {
      font-size: 4rem;
      font-weight: bold;
      color: #24753b;
    }
  }
}
</style>