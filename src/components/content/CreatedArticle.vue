<template>
  <div class="created-article">
    <div class="created-article-title">
      {{ $t("msg.originalArticle") }}
    </div>
    <div class="article-right home-container">
      <ul class="row">
        <li
          class="article-list col-sm-4 col-xs-12"
          v-for="(item, index) in createdArticleJson.CreatedArticle"
          :key="index"
        >
          <a class="article-list-detail" :href="item.articleLink">
            {{ item.articleTitle }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import createdArticleJson from "../../../public/json/CreatedArticle.json";

export default {
  name: "CreatedArticle",
  data() {
    return {
      createdArticleJson,
    };
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .article-list {
    padding: 30px 10px !important;
  }
}

.created-article {
  position: relative;
  background: url("../../../public/images/created-banner.png");
  padding: 2rem;
  .created-article-title {
    font-size: 2.5rem;
    font-family: "SourceSansPro-Regular", "HeiTi";
  }
  .article-right {
    z-index: 999;
    margin: 1rem auto;
    ul {
      padding: 0;
      .article-list {
        padding: 30px;
        .article-list-detail {
          display: block;
          text-align: center;
          background: white;
          box-shadow: 0 0 12px #d1d1d1;
          padding: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>