<template>
  <div class="educational-practice home-container">
    <div class="educational-practice-title">
      {{ $t("msg.educationalPractice") }}
    </div>
    <div class="educational-practice-top row">
      <div class="practice-top-left col-sm-3 col-xs-12">
        <img src="../../../public/images/practice1.png" style="position: absolute;left:-2rem;" alt="" />
      </div>
      <div class="practice-top-right col-sm-9 col-xs-12">
        <h3 class="practice-top-title">{{ $t("msg.tongleLecture") }}</h3>
        <ul class="row">
          <li
            class="practice-list col-sm-4 col-xs-12"
            v-for="(
              item, index
            ) in educationalPracticeJson.educationalPracticeOne"
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
    <div class="educational-practice-top row">
      <div class="practice-top-right col-sm-9 col-xs-12">
        <h3 class="practice-top-title">{{ $t("msg.educationalPractice") }}</h3>
        <ul class="row">
          <li
            class="practice-list col-sm-4 col-xs-12"
            v-for="(
              item, index
            ) in educationalPracticeJson.educationalPracticeTwo"
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
      <div class="practice-top-left col-sm-3 col-xs-12" style="position:sticky;top: 3rem;">
          <img src="../../../public/images/practice2.png" alt="" />
        </div>
    </div>
  </div>
</template>

<script>
import educationalPracticeJson from "../../../public/json/EducationalPractice.json";

export default {
  name: "EducationalPractice",
  data() {
    return {
      educationalPracticeJson,
    };
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
.educational-practice {
  padding: 2rem;
  .educational-practice-title {
    font-size: 2.5rem;
    font-family: "SourceSansPro-Regular", "HeiTi";
    font-weight: bold;
  }
  .practice-top-title {
    margin: 2rem 0 1.3rem 0;
    font-size: 2rem;
    font-family: "SourceSansPro-Regular", "HeiTi";
  }
  .educational-practice-top {
    margin: 3rem 0;
    position: relative;
    .practice-top-left {
      img {
        object-fit: cover;
        width: 100%;
      }
    }
    .practice-top-right {
      background: #fcfafa;
      box-shadow: 0 0 12px #d1d1d1;
      z-index: 999;
      ul {
        padding: 0 1.5rem;
        .practice-list {
          margin: 10px 0;
          iframe {
            width: 100%;
            height: 240px;
          }
        }
      }
    }
  }
}
</style>