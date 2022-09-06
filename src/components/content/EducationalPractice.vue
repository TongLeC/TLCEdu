<template>
  <div class="educational-practice home-container">
    <div class="other-page">
      <p class="other-page-title">{{ $t("msg.educationalPractice") }}</p>
      <p class="other-page-slogan">{{ $t("msg.slogan[2]") }}</p>
    </div>
    <div class="educational-practice-top">
      <div class="practice-top-right">
        <div class="big-title">
          {{ $t("msg.tongleLecture") }}
        </div>
        <ul class="row">
          <li
            class="practice-list col-sm-4 col-xs-12"
            v-for="(
              item, index
            ) in educationalPracticeJson.educationalPracticeOne"
            :key="index"
          >
            <iframe
              style="border-radius: 15px"
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
    <div class="educational-practice-top">
      <div class="practice-top-right">
        <div class="big-title">
          {{ $t("msg.educationalPractice") }}
        </div>
        <ul class="row">
          <li
            class="practice-list col-sm-4 col-xs-12"
            v-for="(
              item, index
            ) in educationalPracticeJson.educationalPracticeTwo"
            :key="index"
          >
            <iframe
              style="border-radius: 15px"
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
  width: 75%;
  margin: 70px auto;
  .educational-practice-title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .educational-practice-top {
    margin: 2rem 0;
    position: relative;
    .practice-top-right {
      ul {
        padding: 0;
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