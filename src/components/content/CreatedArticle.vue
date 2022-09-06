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
          <a
            class="article-list-detail"
            :href="item.articleLink"
            target="blank"
          >
            {{ item.articleTitle }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import { mapGetters } from "vuex";
import createdArticleJson from "../../../public/json/CreatedArticle.json";

export default {
  name: "CreatedArticle",
  data() {
    return {
      createdArticleJson,
      zhFancreatedArticleJson: {},
      zhcreatedArticleJson: createdArticleJson,
    };
  },
  methods: {},
  mounted() {
    const { proxy } = getCurrentInstance();
    this.zhFancreatedArticleJson = proxy.$deepClone(createdArticleJson);
    if (this.$store.state.language == "zhFan") {
      this.createdArticleJson = this.zhFancreatedArticleJson;
    } else if (this.$store.state.language == "zh") {
      this.createdArticleJson = this.zhcreatedArticleJson;
    }
  },
  computed: {
    ...mapGetters(["getLanguage"]),
  },
  watch: {
    getLanguage() {
      if (this.$store.state.language == "zhFan") {
        this.createdArticleJson = this.zhFancreatedArticleJson;
      } else if (this.$store.state.language == "zh") {
        this.createdArticleJson = this.zhcreatedArticleJson;
      }
    },
  },
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
    font-weight: bold;
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
          box-shadow: 0 0 12px #d1d1d1;
          padding: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-decoration: underline;
        }
        .article-list-detail:hover {
          color: #ea4335;
          transition: all 0.4s ease 0s;
        }
      }
    }
  }
}
</style>