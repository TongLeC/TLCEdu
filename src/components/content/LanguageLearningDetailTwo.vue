<template>
  <div class="language-detail home-container">
    <el-tabs
      :tab-position="tabPosition"
      class="demo-tabs language-learning-tab"
      v-model="activeTab"
      @tab-change="tabChange"
    >
      <el-tab-pane
        :label="item.title"
        v-for="(item, index) in json"
        :key="index"
        :name="item.id"
      >
        <div class="language-learning-detail">
          <h3 class="detail-title">{{ item.title }}</h3>
          <div class="detail-content-box">
            <p
              class="detail-content"
              v-for="(item, index) in item.detail"
              :key="index"
              v-html="item"
            ></p>
          </div>
          <img class="detail-img" :src="item.imgUrl" alt="" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import { mapGetters } from "vuex";

export default {
  name: "LanguageLearningDetailTwo",
  data() {
    return {
      json: JSON.parse(localStorage.getItem("detail")),
      zhJson: JSON.parse(localStorage.getItem("detail")),
      zhFanJson: {},
      tabPosition: "left",
      activeTab: this.$route.query.id,
      proxy: null,
    };
  },
  mounted() {
    const { proxy } = getCurrentInstance();
    this.proxy = proxy;
    this.jsonDetail(this.json);
    if (this.$store.state.language == "zh-hant") {
      this.json = this.zhFanJson;
      this.activeTab = this.$route.query.id;
    } else if (this.$store.state.language == "zh-hans") {
      this.json = this.zhJson;
    }
  },
  computed: {
    ...mapGetters(["getLanguage"]),
  },
  watch: {
    getLanguage() {
      if (this.$store.state.language == "zh-hant") {
        this.json = this.zhFanJson;
        this.activeTab = this.$route.query.id;
      } else if (this.$store.state.language == "zh-hans") {
        this.json = this.zhJson;
      }
    },
    $route: {
      handler: function () {
        this.activeTab = this.$route.query.id;
        this.json = JSON.parse(localStorage.getItem("detail"));
        this.jsonDetail(this.json);
        this.zhJson = JSON.parse(localStorage.getItem("detail"));
      },
    },
  },
  methods: {
    tabChange() {
      this.$router.replace({
        query: {
          id: this.activeTab,
          file: this.$route.query.file,
        },
      });
    },
    jsonDetail(json) {
      this.zhFanJson = this.proxy.$deepClone(json);
      return this.zhFanJson;
    },
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
    padding: 10px 2rem 0;
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
    .detail-img {
      width: 18rem;
      object-fit: cover;
      opacity: 0.5;
      z-index: -1;
      // float: right;
    }
  }
}
</style>