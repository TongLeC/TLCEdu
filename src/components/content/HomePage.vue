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
      <home-learning-assembly :home="home[5]"></home-learning-assembly>
    </div>
    <!-- <home-learning-assembly :home="home[5]"></home-learning-assembly> -->
    <div class="home-video home-container">
      <div class="home-video-box">
        <div class="home-top-title">
          <span style="font-weight: bold">{{
            $t("msg.educationalPractice")
          }}</span>
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
      <home-book-assembly-two :home="home[2]"></home-book-assembly-two>
      <div class="split-line"></div>
      <home-book-assembly :home="home[0]"></home-book-assembly>
      <div class="split-line"></div>
      <home-free-assembly :home="home[1]"></home-free-assembly>
    </div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from "vue";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { mapGetters } from "vuex";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);

import homeFreeAssembly from "../assembly/homeFreeAssembly.vue";
import homeBookAssembly from "../assembly/homeBookAssembly.vue";
import homeBookAssemblyTwo from "../assembly/homeBookAssemblyTwo.vue";
import homeLearningAssembly from "../assembly/homeLearningAssembly.vue";
import homePageJson from "../../../public/json/HomePage.json";

export default {
  name: "HomePage",
  data() {
    return {
      zhFanhomePageJson: {},
      zhhomePageJson: homePageJson,
      homePageJson,
      home: [
        {
          title: "msg.classicAudio",
          href: "/publicResources",
          json: homePageJson.homeBible,
          slidesPerView: 4,
        },
        {
          title: "msg.originalArticle",
          href: "/createdArticle",
          json: homePageJson.homeArticle,
        },
        {
          title: "msg.tongleBooks",
          href: "/tongleBook",
          json: homePageJson.homeBook,
        },
        {
          title: "msg.classicMusic",
          href: "/publicResources",
          json: homePageJson.homeFree,
        },
        {
          href: "/languageLearning",
          json: homePageJson.homeSloganLearning,
        },
        {
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
    homeBookAssemblyTwo,
    homeLearningAssembly,
  },
  methods: {},
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
    const { proxy } = getCurrentInstance();
    this.zhFanhomePageJson = proxy.$deepClone(homePageJson);
    if (this.$store.state.language == "zhFan") {
        this.homePageJson = this.zhFanhomePageJson;
        this.home = [
          {
            title: "msg.classicAudio",
            href: "/publicResources",
            json: this.homePageJson.homeBible,
            slidesPerView: 4,
          },
          {
            title: "msg.originalArticle",
            href: "/createdArticle",
            json: this.homePageJson.homeArticle,
          },
          {
            title: "msg.tongleBooks",
            href: "/tongleBook",
            json: this.homePageJson.homeBook,
          },
          {
            title: "msg.classicMusic",
            href: "/publicResources",
            json: this.homePageJson.homeFree,
          },
          {
            href: "/languageLearning",
            json: this.homePageJson.homeSloganLearning,
          },
          {
            href: "/educationalTheory",
            json: this.homePageJson.homeSloganTheory,
          },
        ];
      } else if (this.$store.state.language == "zh") {
        this.homePageJson = this.zhhomePageJson;
        this.home = [
          {
            title: "msg.classicAudio",
            href: "/publicResources",
            json: this.homePageJson.homeBible,
            slidesPerView: 4,
          },
          {
            title: "msg.originalArticle",
            href: "/createdArticle",
            json: this.homePageJson.homeArticle,
          },
          {
            title: "msg.tongleBooks",
            href: "/tongleBook",
            json: this.homePageJson.homeBook,
          },
          {
            title: "msg.classicMusic",
            href: "/publicResources",
            json: this.homePageJson.homeFree,
          },
          {
            href: "/languageLearning",
            json: this.homePageJson.homeSloganLearning,
          },
          {
            href: "/educationalTheory",
            json: this.homePageJson.homeSloganTheory,
          },
        ];
      }
  },
  computed: {
    ...mapGetters(["getLanguage"]),
  },
  watch: {
    getLanguage() {
      if (this.$store.state.language == "zhFan") {
        this.homePageJson = this.zhFanhomePageJson;
        this.home = [
          {
            title: "msg.classicAudio",
            href: "/publicResources",
            json: this.homePageJson.homeBible,
            slidesPerView: 4,
          },
          {
            title: "msg.originalArticle",
            href: "/createdArticle",
            json: this.homePageJson.homeArticle,
          },
          {
            title: "msg.tongleBooks",
            href: "/tongleBook",
            json: this.homePageJson.homeBook,
          },
          {
            title: "msg.classicMusic",
            href: "/publicResources",
            json: this.homePageJson.homeFree,
          },
          {
            href: "/languageLearning",
            json: this.homePageJson.homeSloganLearning,
          },
          {
            href: "/educationalTheory",
            json: this.homePageJson.homeSloganTheory,
          },
        ];
      } else if (this.$store.state.language == "zh") {
        this.homePageJson = this.zhhomePageJson;
        this.home = [
          {
            title: "msg.classicAudio",
            href: "/publicResources",
            json: this.homePageJson.homeBible,
            slidesPerView: 4,
          },
          {
            title: "msg.originalArticle",
            href: "/createdArticle",
            json: this.homePageJson.homeArticle,
          },
          {
            title: "msg.tongleBooks",
            href: "/tongleBook",
            json: this.homePageJson.homeBook,
          },
          {
            title: "msg.classicMusic",
            href: "/publicResources",
            json: this.homePageJson.homeFree,
          },
          {
            href: "/languageLearning",
            json: this.homePageJson.homeSloganLearning,
          },
          {
            href: "/educationalTheory",
            json: this.homePageJson.homeSloganTheory,
          },
        ];
      }
    },
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
    font-size: 1.5rem !important;
    width: 100% !important;
    right: 0 !important;
    bottom: -28% !important;
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
        transition: all 0.4s ease 0s;
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
    background: url("../../../public/images/banner-img.png") no-repeat;
    background-size: 100% 40%;
    background-position: 0 100%;
    padding: 5rem 0 20rem;
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
          color: #EA4335;
          position: absolute;
          right: 5%;
          top: 20%;
        }
        a:hover {
          color: #ffd111;
          transition: all 0.4s ease 0s;
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