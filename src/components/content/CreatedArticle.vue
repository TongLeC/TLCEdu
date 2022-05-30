<template>
  <div class="created-article">
    <div class="article-right home-container">
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
@media screen and (max-width: 700px) {
  .article-list {
    flex: 0 0 95% !important;
  }
}
@media screen and (max-width: 1000px) {
  .article-right {
    width: 75% !important;
  }
}

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
    max-height: 550px;
    overflow-y: auto;
    padding: 1rem 0;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      padding-right: 2rem;
      .article-list {
        padding: 8px 30px 10px 10px;
        margin: 25px 0;
        border: 1px solid #EA4335;
        border-bottom: 4px solid #EA4335;
        flex: 0 0 48%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .article-list-detail {
          font-size: 1.4rem;
          display: block;
          text-align: center;
        }
      }
    }
  }
}
</style>