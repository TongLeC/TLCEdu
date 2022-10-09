<template>
  <main class="public-resources-box">
    <div class="public-resources home-container">
      <section class="other-page">
        <h1 class="other-page-title">{{ $t("msg.publicWelfareResources") }}</h1>
      </section>
      <div class="public-resources-top">
        <div v-if="publicResourcesJson">
          <section
            class="resources-one"
            v-for="(item, index) in publicResourcesJson.resourceOne"
            :key="'one' + index"
          >
            <h2 class="big-title">
              {{ $t(item.title) }}
            </h2>
            <ul class="row">
              <li
                class="resources-list col-12 col-md-6"
                v-for="(detail, i) in item.detailLink"
                :key="i"
              >
                <a
                  :href="detail.linkAddress"
                  class="resources-list-detail"
                  target="blank"
                >
                  {{ i + 1 }}.
                  {{ $t(`resourceOne[${index}].detailLink[${i}].linkTitle`) }}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// const { data: publicResourcesJson } = await useFetch(
//   "/api/json/PublicResources"
// );
import aaa from "/assets/json/PublicResources.json";
const publicResourcesJson = ref(aaa);

useHead({
  title: "同乐中文|中文爱好者福利，为海外孩子提供最优质的中文教育资源",
  meta: [
    {
      name: "description",
      content:
        "海外华人孩子学习中文的时间有限,所以要选取最有价值的内容给他们。免费下载同乐“中文寻根系列”的电子书、读经机,包含《道德经》（Dao De Jing）、《论语》（The Analects of Confucius）、《大学》、《中庸》、《孟子》等经典。音乐资源选择最经典的曲目,可用于胎教、音乐熏陶。随时随地与经典之声相伴,不知不觉圣贤智慧浸润心田。",
    },
    {
      name: "keywords",
      content:
        "西雅图,同乐中文,最有价值的,中文寻根,经典,《道德经》（Dao De Jing）,《论语》（The Analects of Confucius）,《大学》,《中庸》,《孟子》,音乐资源,胎教,熏陶,圣贤智慧",
    },
  ],
});
</script>
<script>
export default {
  name: "PublicResources",
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .public-resources {
    width: 90% !important;
  }
}
.public-resources {
  width: 75%;
  margin: 0 auto;
  position: relative;
  padding-top: 70px;
  .public-resources-top {
    .resources-one {
      padding: 0;
      margin: 1rem 1.5rem;
      ul {
        background: #fff;
        border-radius: 15px;
        box-shadow: 2px 2px 10px $shadow-color;
        padding: 0;
        .resources-list {
          text-align: left;
          .resources-list-detail {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            width: 100%;
            padding: 0.7rem 1.5rem;
          }
          &:nth-child(4n + 2),
          &:nth-child(4n + 3) {
            background: $sub-color;
          }
        }
        .resources-list :hover {
          color: $main-color;
          transition: all 0.4s ease 0s;
        }
      }
    }
  }
}
</style>