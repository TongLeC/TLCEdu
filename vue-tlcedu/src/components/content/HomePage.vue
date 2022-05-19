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
      <div class="home-learning">
        <div class="home-learning-left">
          <p class="big-title">
            {{ homePageJson.homeSloganLearning.sloganTitle }}
          </p>
          <p
            class="big-detail"
            v-for="(item, index) in homePageJson.homeSloganLearning
              .sloganDetail"
            :key="index"
          >
            {{ item }}
          </p>
          <p
            class="big-slogan"
            v-for="(item, index) in homePageJson.homeSloganLearning.slogan"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
        <div class="home-learning-right">
          <div class="home-learning-top">
            <div
              v-for="(item, index) in homePageJson.homeSloganLearning.sloganIntroduce"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <ul class="home-learning-ul">
            <li
              class="language-list"
              v-for="(item, index) in homePageJson.homeSloganLearning
                .sloganList"
              :key="index"
            >
              <div class="language-list-detail" @click="getItem(item)">
                {{ item.title }}
              </div>
            </li>
            <li class="language-a">
              <a href="/languageLearning">{{ $t("msg.seeMore") }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-theory">
      <img src="../../../public/images/home-flower.png" alt="" />
      <div class="home-learning-left">
        <p class="big-title">
          {{ homePageJson.homeSloganTheory.sloganTitle }}
        </p>
        <p
          class="big-detail"
          v-for="(item, index) in homePageJson.homeSloganTheory.sloganDetail"
          :key="index"
        >
          {{ item }}
        </p>
        <p
          class="big-slogan"
          v-for="(item, index) in homePageJson.homeSloganTheory.slogan"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
      <div class="home-learning-right">
        <div class="home-learning-top">
            <div
              v-for="(item, index) in homePageJson.homeSloganTheory.sloganIntroduce"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        <ul class="home-learning-ul">
          <li
            class="language-list"
            v-for="(item, index) in homePageJson.homeSloganTheory.sloganList"
            :key="index"
          >
            <div class="language-list-detail" @click="getItem(item)">
              {{ item.title }}
            </div>
          </li>
          <li class="language-a">
            <a href="/educationalTheory">{{ $t("msg.seeMore") }}</a>
          </li>
        </ul>
      </div>
    </div>
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
      <div class="home-find">
        <div class="home-bottom-right">
          <img src="../../../public/images/book-child.png" alt="" />
        </div>
        <div class="home-bottom-left">
          <h3 class="home-top-title">
            {{ $t("msg.tongleBooks") }}
            <a href="/publicResources">{{ $t("msg.seeMore") }}</a>
          </h3>
          <ul class="home-bottom-left-ul">
            <li
              class="home-list"
              v-for="(item, index) in homePageJson.homeFind"
              :key="index"
            >
              <a class="home-list-detail" :href="item.findUrl">
                <img :src="item.findImg" :alt="item.findDetail" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="home-free">
        <div class="home-top-left">
          <img src="../../../public/images/public-child.jpg" alt="" />
        </div>
        <div class="home-top-right">
          <h3 class="home-top-title">
            {{ $t("msg.audioResources") }}
            <a href="/publicResources">{{ $t("msg.seeMore") }}</a>
          </h3>
          <ul>
            <li
              class="home-list"
              v-for="(item, index) in homePageJson.homeFree"
              :key="index"
            >
              <a class="home-list-detail" :href="item.freeUrl">
                <img :src="item.freeImg" :alt="item.freeDetail" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="home-article">
        <div class="home-bottom-right">
          <img
            src="../../../public/images/article-child.jpg"
            alt=""
            style="width: 32rem; top: 3rem"
          />
        </div>
        <div class="home-bottom-left">
          <h3 class="home-top-title">
            {{ $t("msg.originalArticle") }}
            <a href="/createdArticle">{{ $t("msg.seeMore") }}</a>
          </h3>
          <ul class="home-bottom-left-ul">
            <li
              class="home-list"
              v-for="(item, index) in homePageJson.homeArticle"
              :key="index"
            >
              <a class="home-list-detail" :href="item.articleUrl">
                <img :src="item.articleImg" :alt="item.articleTitle" />
              </a>
            </li>
          </ul>
        </div>
      </div>
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
import homePageJson from "../../../public/json/HomePage.json";

export default {
  name: "HomePage",
  data() {
    return {
      homePageJson,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
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
  .home-big-box {
    .home-learning,
    .home-theory {
      padding: 5rem !important;
      .big-title,
      .big-slogan {
        font-size: 2rem !important;
      }
      .big-detail {
        font-size: 1.5rem !important;
      }
    }
  }
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
  .home-top-left,
  .home-video-left {
    img {
      position: absolute;
      left: 0;
    }
  }
  .home-top-right {
    margin-left: 10rem !important;
  }
  .home-learning,
  .home-theory {
    display: block !important;
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
    .swiper-button-prev,
    .swiper-button-next {
      font-size: 1.5rem !important;
    }
  }
  .home-big-box {
    width: 100%;
    background: url("../../../public/images/source-banner.png") no-repeat;
    background-size: 100% 100%;
  }
  .home-theory {
    position: relative;
    img {
      position: absolute;
      object-fit: cover;
      width: 37rem;
      right: 0;
      top: -20rem;
    }
  }
  .home-learning,
  .home-theory {
    width: 100%;
    padding: 8rem;
    display: flex;
    .home-learning-left {
      font-weight: bold;
      flex: 1.5;
      z-index: 999;
      .big-title {
        font-size: 3rem;
        color: #a61b29;
      }
      .big-slogan {
        font-size: 3rem;
        color: #020077;
      }
      .big-detail {
        font-size: 1.6rem;
      }
    }
    .home-learning-right {
      flex: 1;
      z-index: 999;
      position: relative;
      .home-learning-top {
        background: white;
        box-shadow: 0 0 12px #d1d1d1;
        width: 100%;
        padding: 2rem;
        font-size: 1.4rem;
        text-align: left;
        text-indent: 2em;
      }
      .home-learning-ul {
        margin-bottom: 1.5rem;
        .language-list {
          width: 18.4rem;
          border-left: 4px solid #a61b29;
          background: white;
          box-shadow: 0 0 12px #d1d1d1;
          float: left;
          display: block;
          white-space: nowrap;
          margin: 3rem 1rem 0 0;
          .language-list-detail {
            font-size: 1.4rem;
            display: block;
            height: 100%;
            width: 100%;
            text-align: center;
            line-height: 3.8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
          }
        }
        .language-a {
          margin-top: 1rem;
          width: 100%;
          float: right;
          a {
            font-size: 1.4rem;
            color: #a61b29;
            font-weight: bold;
          }
        }
      }
    }
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
      // max-height: 23rem;
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
    background: white;
    padding: 4rem 0;
    .home-public-title {
      font-size: 4rem;
      font-weight: bold;
      color: #24753b;
    }
    .home-find,
    .home-article {
      position: relative;
      .home-bottom-left {
        width: 59%;
        background: white;
        box-shadow: 0 0 12px #d1d1d1;
        margin: 4rem 0 2rem 10rem;
        padding: 0.7rem 0 2rem 0;
        position: relative;
        z-index: 100;
        .home-bottom-left-ul {
          overflow-y: auto;
          .home-list {
            margin: 10px 28px 20px 0;
            border: 1px solid #a61b29;
            flex: 0 0 29%;
            .home-list-detail {
              display: block;
              width: 100%;
              object-fit: cover;
              img {
                width: 100%;
              }
            }
          }
        }
        .home-top-title {
          font-size: 1.9rem;
          color: #a61b29;
          margin: 2rem 0 1.3rem 0;
          a {
            font-size: 1.2rem;
            color: #9c9c9c;
          }
        }
      }
      .home-bottom-right {
        img {
          transform: rotateY(180deg);
          position: absolute;
          right: 8.5rem;
          object-fit: cover;
          width: 27rem !important;
        }
      }
    }
    .home-find {
      .home-bottom-right {
        img {
          transform: rotateY(180deg);
          position: absolute;
          right: 8rem;
          object-fit: cover;
          width: 26rem;
        }
      }
    }
    .home-free {
      display: flex;
      position: relative;
      .home-top-left {
        margin: 4rem 30px 1.5rem 9rem;
        img {
          object-fit: cover;
          width: 26rem;
          transform: rotateY(180deg);
        }
      }
      .home-top-right {
        width: 59%;
        background: white;
        box-shadow: 0 0 12px #d1d1d1;
        z-index: 999;
        margin: 3rem 30px 1.5rem 2rem;
        ul {
          overflow-y: auto;
          .home-list {
            margin: 10px 28px 20px 0;
            border: 1px solid #a61b29;
            flex: 0 0 29%;
            .home-list-detail {
              display: block;
              width: 100%;
              object-fit: cover;
              img {
                width: 100%;
              }
            }
          }
        }
        .home-top-title {
          font-size: 1.9rem;
          color: #a61b29;
          margin: 2rem 0 1.3rem 0;
          a {
            font-size: 1.2rem;
            color: #9c9c9c;
          }
        }
      }
    }
  }
}
</style>