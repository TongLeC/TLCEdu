<template>
  <main class="educational-practice home-container">
    <section class="other-page">
      <h1 class="other-page-title">{{ $t("msg.educationalPractice") }}</h1>
      <p class="other-page-slogan">{{ $t("msg.slogan[2]") }}</p>
    </section>
    <div class="educational-practice-top">
      <section class="practice-top-right">
        <h2 class="big-title">
          {{ $t("msg.tongleLecture") }}
        </h2>
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
      </section>
    </div>
    <div class="educational-practice-top">
      <section class="practice-top-right">
        <h2 class="big-title">
          {{ $t("msg.educationalPractice") }}
        </h2>
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
      </section>
    </div>
  </main>
</template>

<script setup>
const title = ref("教育践谈");
const description = ref("My amazing Nuxt app");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
<script>
import educationalPracticeJson from "@/assets/json/EducationalPractice.json";

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
@media screen and (max-width: 768px) {
  .educational-practice {
    width: 90% !important;
  }
}
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