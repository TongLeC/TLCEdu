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
        <swiper-slide>
          <img class="my_swiper_imgs" src="../../assets/video1.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="my_swiper_imgs" src="../../assets/video2.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="my_swiper_imgs" src="../../assets/video3.png" alt="" />
        </swiper-slide>
      </swiper>
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
.home-page {
  .home-rotation-map {
    // .swiper-slide {
    //   height: 300px;
    //   line-height: 300px;
    //   font-size: 30px;
    //   text-align: center;
    //   background-color: pink;
    // }
  }
}
</style>