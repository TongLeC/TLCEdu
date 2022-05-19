<template>
  <div class="created-article">
    <div class="article-right">
      <ul>
        <li
          class="article-list"
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

.created-article {
  position: relative;
  background: url("../../../public/images/created-banner.jpg");
  background-size: 100%;
  min-height: 800px;
  .article-right {
    width: 53%;
    background: white;
    box-shadow: 0 0 12px #d1d1d1;
    z-index: 999;
    margin: 6rem auto;
    max-height: 500px;
    overflow-y: auto;
    padding: 1rem 0;
    .article-list {
      padding: 8px 30px 10px 10px;
      margin: 25px 0;
      border-left: 4px solid #a61b29;
      .article-list-detail {
        font-size: 1.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        width: 100%;
        text-align: left;
      }
    }
  }
}
</style>