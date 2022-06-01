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
          <img
            class="my_swiper_imgs"
            :src="item.mapUrl"
            alt=""
            v-if="item.type == 0"
          />
          <video controls v-else class="map-video">
            <source :src="item.mapUrl" type="video/mp4" />
            您的浏览器不支持 video 标签。
          </video>
        </swiper-slide>
      </swiper>
      <div class="home-transition">
        <a href="/languageLearning">{{ $t("msg.languageLearning") }}</a> |
        <a href="/educationalTheory">{{ $t("msg.holisticEducationTheory") }}</a>
      </div>
    </div>
    <div class="home-big-box home-container">
      <home-learning-assembly :home="home[4]"></home-learning-assembly>
    </div>
    <home-learning-assembly :home="home[5]"></home-learning-assembly>
    <div class="home-video home-container">
      <div class="home-video-box">
        <div class="home-top-title">
          {{ $t("msg.educationalPractice") }}
          <a href="/educationalPractice">{{ $t("msg.seeMore") }}</a>
          <p class="home-top-describe">
            {{ homePageJson.homeVideo.describe }}
          </p>
        </div>
        <ul class="row">
          <li
            class="home-list col-sm-3 col-xs-12"
            v-for="(item, index) in homePageJson.homeVideo.detail"
            :key="index"
          >
            <iframe
              :src="item.videoUrl"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="video-describe">
              <p class="video-describe-title">{{ item.videoDetail }}</p>
              <!-- <p class="video-describe-detail">
                这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述
              </p> -->
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="home-public home-container">
      <div class="home-public-title">
        {{ $t("msg.publicTitle") }}
        <i class="glyphicon glyphicon-heart" style="color: #ea4335"></i>
        {{ $t("msg.publicTitleTwo") }}
      </div>
      <home-book-assembly :home="home[2]"></home-book-assembly>
      <div class="split-line"></div>
      <home-book-assembly :home="home[0]"></home-book-assembly>
      <div class="split-line"></div>
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
import homeBookAssembly from "../assembly/homeBookAssembly.vue";
import homeLearningAssembly from "../assembly/homeLearningAssembly.vue";
import homePageJson from "../../../public/json/HomePage.json";

export default {
  name: "HomePage",
  data() {
    return {
      homePageJson,
      home: [
        {
          imgSrc: "/images/bible-child.png",
          title: "msg.classicAudio",
          href: "/publicResources",
          json: homePageJson.homeBible,
          slidesPerView: 4,
        },
        {
          imgSrc: "/images/child3.png",
          title: "msg.originalArticle",
          href: "/createdArticle",
          json: homePageJson.homeArticle,
        },
        {
          imgSrc: "/images/book-child.png",
          title: "msg.tongleBooks",
          href: "/publicResources",
          json: homePageJson.homeFind,
          slidesPerView: 5,
        },
        {
          imgSrc: "/images/music-child.png",
          title: "msg.classicMusic",
          href: "/publicResources",
          json: homePageJson.homeFree,
        },
        {
          href: "/languageLearning",
          json: homePageJson.homeSloganLearning,
        },
        {
          imgSrc: "/images/video-child.png",
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
    homeBookAssembly,
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
  mounted() {
    // const OpenCC = require("opencc-js");
    // 繁体转简体
    // const converter = OpenCC.Converter({ from: "hk", to: "cn" });
    // 简体转繁体
    // const restore = OpenCC.Converter({ from: "cn", to: "hk" });
    // console.log(restore(this.homePageJson.homeSloganLearning.sloganDetail[0]))
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .home-video {
    background-size: 200% 20% !important;
    ul {
      padding: 0 15px !important;
      .home-list {
        padding: 1rem 2rem !important;
      }
      .col-sm-3 {
        width: 100% !important;
      }
    }
  }
  .home-transition {
    // width: 80% !important;
    font-size: 1.5rem !important;
  }
}
.home-page {
  .home-rotation-map {
    position: relative;
    .swiper-slide {
      width: 100%;
      max-height: 750px;
      text-align: center;
      .my_swiper_imgs {
        width: 100%;
        max-height: 750px;
      }
    }
    .home-transition {
      width: 48%;
      font-size: 2rem;
      background: #fcfafa;
      border-radius: 30px 30px 0 0;
      position: absolute;
      right: 27%;
      bottom: -5%;
      z-index: 99;
      font-family: "SourceSansPro-Regular", "HeiTi";
      padding: 1.5rem 0;
      font-weight: bold;
      a:hover {
        color: #ea4335;
      }
    }
    .map-video {
      object-fit: fill;
    }
    ::v-deep .swiper-pagination-bullet {
      float: right;
    }
  }
  .home-big-box {
    width: 100%;
    background: url("../../../public/images/banner-learn22.png") no-repeat;
    background-size: 100% 100%;
  }
  .home-video {
    width: 100%;
    background: url("../../../public/images/画板 1.png") no-repeat;
    background-size: 100% 40%;
    background-position: 0 100%;
    padding: 5rem 0 14rem;
    position: relative;
    .home-video-box {
      z-index: 999;
      margin: 0 auto;
      padding: 1rem;
      ul {
        padding: 0 4rem;
        .home-list {
          padding: 1rem 1rem;
          iframe {
            width: 100%;
            height: 230px;
            border-radius: 15px;
            box-shadow: 5px 5px 10px #a9a9a9;
          }
          .video-describe {
            // text-align: left;
          }
        }
        .col-sm-3 {
          width: 20%;
        }
      }
      .home-top-describe {
        margin-top: 2rem;
      }
      .home-top-describe,
      .video-describe-detail {
        color: #a9a9a9;
        // text-indent: 2em;
        font-size: 1.5rem;
        font-family: "Kaiti";
      }
      .home-top-title {
        font-size: 2.5rem;
        margin: 1.2rem 0 1.3rem 0;
        font-family: "SourceSansPro-Regular", "HeiTi";
        position: relative;
        a {
          font-size: 1.7rem;
          color: #a9a9a9;
          position: absolute;
          right: 5%;
          top: 20%;
        }
      }
    }
  }
  .home-public {
    // width: 100%;
    padding: 4rem 0;
    .home-public-title {
      font-size: 4rem;
      font-weight: bold;
      font-family: "SourceSansPro-Regular", "HeiTi";
    }
    .split-line {
      width: 100%;
      height: 1px;
      background: #ffd111;
      margin-top: 5rem;
    }
  }
}
</style>