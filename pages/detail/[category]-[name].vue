<template>
  <main class="language-detail home-container">
    <el-tabs
      :tab-position="tabPosition"
      class="demo-tabs language-learning-tab"
      v-model="activeTab"
      @tab-click="tabChange"
    >
      <el-tab-pane
        v-for="(item, index) in pageData"
        :key="'a' + index"
        :name="item.id"
        ><template #label>
          <span>
            {{ $t(`${langKey}[${index}].title`) }}
          </span>
        </template>
        <section class="language-learning-detail" v-if="item.id == activeTab">
          <h3 class="detail-title">
            {{ $t(`${langKey}[${index}].title`) }}
          </h3>
          <article class="detail-content-box">
            <p
              class="detail-content"
              v-for="(item1, index1) in item.detail"
              :key="'b' + index1"
              v-html="$t(`${langKey}[${index}].detail[${index1}]`)"
            ></p>
          </article>
        </section>
      </el-tab-pane>
    </el-tabs>
  </main>
</template>

<script setup>
import LanguageLearning from "/assets/json/LanguageLearning.json";
const pageData1 = ref(LanguageLearning);
import EducationalTheory from "/assets/json/EducationalTheory.json";
const pageData2 = ref(EducationalTheory);
const route = useRoute();
const { locale, locales } = useI18n();
const localePath = useLocalePath();
const category = route.params.category;
let activeTab = route.params.name;
let pageTitle = "";
let pageData = [];
let langKey = "";
if (category == "Method") {
  pageData = pageData1.value.languageLearning;
  langKey = "languageLearning";
} else if (category == "Theory") {
  pageData = pageData2.value.educationalTheory;
  langKey = "educationalTheory";
}
const tabChange = function (TabsPaneContext) {
  navigateTo(localePath(`/detail/${category}-${TabsPaneContext.props.name}`));
  window.scrollTo({ top: 0 });
};
let articleData = [];
articleData = pageData.filter((e) => e.id == activeTab);
if (articleData.length > 0) {
  pageTitle = articleData[0].title;
} else {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

useHead({
  title: `${category}-${pageTitle}`,
  meta: [
    {
      name: "description",
      content: `${category}-${pageTitle}`,
    },
  ],
});
</script>

<script>
export default {
  name: "detail",
  data() {
    return {
      tabPosition: "left",
    };
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  :deep(.el-tabs__header) {
    // float: none !important;
    // width: 100% !important;
    display: none !important;
  }
  :deep(.el-tabs__item) {
    border-radius: 15px !important;
  }
  .language-learning-tab {
    padding: 2rem 5px !important;
  }
  .language-detail {
    width: 90% !important;
  }
}

.language-detail {
  width: 75%;
  margin: 70px auto;
}
.language-learning-tab {
  padding: 2rem 0;
  :deep(.el-tabs__header) {
    margin-right: 0;
    width: 20%;
  }
  :deep(.el-tabs__item) {
    border: 1px solid $main-color;
    border-radius: 15px 0 0 15px;
    text-align: left !important;
    font-size: 1.4rem;
    background: #fff;
    color: $main-color;
    width: 100%;
    white-space: normal;
    height: auto;
  }
  :deep(.el-tabs__item:hover) {
    background: $main-color;
    color: #fff;
  }
  :deep(.el-tabs__item.is-active) {
    color: white;
    background: $main-color;
  }
  :deep(.el-tabs__nav-wrap.is-left::after),
  :deep(.el-tabs__active-bar) {
    display: none;
  }
  .language-learning-detail {
    width: 98%;
    box-shadow: 2px 2px 10px $shadow-color;
    margin: 0 0 5px 0 !important;
    background: #fff;
    padding: 10px 2rem;
    border-radius: 15px;
    .detail-title {
      font-size: 1.9rem;
      color: $main-text-color;
      margin: 2rem 0;
      font-weight: bold;
    }
    .detail-content-box {
      margin: 1.5rem;
      .detail-content {
        text-align: left;
        text-indent: 2em;
        font-size: 1.4rem;
        line-height: 3rem;
      }
    }
  }
}
</style>