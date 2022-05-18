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
        <p class="big-title">
          {{ homePageJson.homeSloganLearning.sloganTitle }}
        </p>
        <p
          class="big-detail"
          v-for="(item, index) in homePageJson.homeSloganLearning.sloganDetail"
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
      <div class="home-theory">
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
    </div>
    <div class="home-video">
      <div class="home-video-box">
        <h3 class="home-top-title">
          同乐视频 <a href="/educationalPractice">更多</a>
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
          <img src="../../../public/images/img-bottom.png" alt="" />
        </div>
        <div class="home-bottom-left">
          <h3 class="home-top-title">
            同乐书籍 <a href="/publicResources">更多</a>
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
          <img src="../../../public/images/practice-img.png" alt="" />
        </div>
        <div class="home-top-right">
          <h3 class="home-top-title">
            公益资源 <a href="/publicResources">更多</a>
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
    </div>
    <div class="home-article">
      <div class="home-article-box">
        <h3 class="home-top-title">
          原创文章 <a href="/createdArticle">更多</a>
        </h3>
        <ul>
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
  setup() {
    let swiper_options = reactive({
      autoplay: {
        disableOnInteraction: false, // 鼠标滑动后继续自动播放
        delay: 3000, //4秒切换一次
      },
      speed: 500, //切换过渡速度
      loop: true,
      slidesPerView: "auto", //解决最后一张切换到第一张中间的空白
      centeredSlides: true, //设置slide居中
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
    height: 90rem !important;
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
    max-height: 200px !important;
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
  .home-top-left {
    img {
      position: absolute;
      left: 0;
    }
  }
  .home-top-right {
    margin-left: 10rem !important;
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
  overflow-y: auto;
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
    height: 120rem;
    background: url("../../../public/images/home-banner1.png") no-repeat;
    background-size: 100% 100%;
    .home-learning,
    .home-theory {
      width: 100%;
      padding: 8rem;
      font-weight: bold;
      .big-title,
      .big-slogan {
        font-size: 3rem;
        color: #a61b29;
      }
      .big-detail {
        font-size: 1.6rem;
      }
    }
  }
  .home-video {
    width: 100%;
    height: 45rem;
    background: url("../../../public/images/home-banner2.png") no-repeat;
    padding-top: 5rem;
    .home-video-box {
      width: 57%;
      background: white;
      box-shadow: 0 0 12px #d1d1d1;
      z-index: 999;
      margin: 0 auto;
      padding: 1rem;
      ul {
        .home-list {
          margin: 10px 28px 20px 0;
          flex: 0 0 30%;
          iframe {
            width: 100%;
            // height: 115px;
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
    .home-find {
      position: relative;
      .home-bottom-left {
        width: 57%;
        background: white;
        box-shadow: 0 0 12px #d1d1d1;
        margin: 4rem 0 2rem 10rem;
        padding: 0.7rem 0 2rem 0;
        position: relative;
        z-index: 100;
        .home-bottom-left-ul {
          .home-list {
            margin: 10px 28px 20px 0;
            border: 1px solid #a61b29;
            flex: 0 0 30%;
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
          right: 0;
          object-fit: cover;
          width: 24rem;
          opacity: 0.55;
        }
      }
    }
    .home-free {
      display: flex;
      position: relative;
      .home-top-left {
        img {
          object-fit: cover;
          width: 30rem;
          opacity: 0.55;
          transform: rotateY(180deg);
        }
      }
      .home-top-right {
        width: 57%;
        background: white;
        box-shadow: 0 0 12px #d1d1d1;
        z-index: 999;
        margin: 3rem 30px 1.5rem 2rem;
        ul {
          .home-list {
            margin: 10px 28px 20px 0;
            border: 1px solid #a61b29;
            flex: 0 0 30%;
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
  .home-article {
    width: 100%;
    height: 45rem;
    background: url("../../../public/images/home-banner2.png") no-repeat;
    padding-top: 5rem;
    .home-article-box {
      width: 57%;
      background: white;
      box-shadow: 0 0 12px #d1d1d1;
      z-index: 999;
      margin: 0 auto;
      padding: 1rem;
      ul {
        .home-list {
          margin: 10px 28px 20px 0;
          border: 1px solid #a61b29;
          flex: 0 0 30%;
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
        margin: 1.2rem 0 1.3rem 0;
        a {
          font-size: 1.2rem;
          color: #9c9c9c;
        }
      }
    }
  }
}
</style>