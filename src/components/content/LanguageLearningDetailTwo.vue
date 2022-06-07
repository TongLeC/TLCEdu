<template>
  <div class="home-container">
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
      proxy: null
    };
  },
  mounted() {
    const { proxy } = getCurrentInstance();
    this.proxy = proxy
    this.jsonDetail(this.json)
    if (this.$store.state.language == "zhFan") {
      this.json = this.zhFanJson;
      this.activeTab = this.$route.query.id;
    } else if (this.$store.state.language == "zh") {
      this.json = this.zhJson;
    }
  },
  computed: {
    ...mapGetters(["getLanguage"]),
  },
  watch: {
    getLanguage() {
      if (this.$store.state.language == "zhFan") {
        this.json = this.zhFanJson;
        this.activeTab = this.$route.query.id;
      } else if (this.$store.state.language == "zh") {
        this.json = this.zhJson;
      }
    },
    $route: {
      handler: function () {
        this.activeTab = this.$route.query.id;
        this.json = JSON.parse(localStorage.getItem("detail"));
        this.jsonDetail(this.json)
        this.zhJson = JSON.parse(localStorage.getItem("detail"));
      },
    },
  },
  methods: {
    tabChange() {
      this.$router.replace({
        query: {
          id: this.activeTab,
        },
      });
    },
    jsonDetail(json) {
      this.zhFanJson = this.proxy.$deepClone(json);
      return this.zhFanJson;
    }
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  ::v-deep .el-tabs__header {
    float: none !important;
    width: 100% !important;
  }
  ::v-deep .el-tabs__item {
    border-radius: 15px !important;
  }
}

.language-learning-tab {
  padding: 2rem;
  ::v-deep .el-tabs__header {
    margin-right: 0;
    width: 20%;
  }
  ::v-deep .el-tabs__item {
    border: 1px solid #ea4335;
    border-radius: 15px 0 0 15px;
    text-align: left !important;
    font-size: 1.7rem;
    color: #ea4335;
    width: 100%;
    white-space: normal;
    height: auto;
  }
  ::v-deep .el-tabs__item.is-active {
    color: white;
    background: #ea4335;
  }
  ::v-deep .el-tabs__nav-wrap.is-left::after,
  ::v-deep .el-tabs__active-bar {
    display: none;
  }
  .language-learning-detail {
    width: 98%;
    box-shadow: 0 0 12px #d1d1d1;
    margin: 0.5rem auto !important;
    padding: 10px 2rem 0;
    font-family: "KaiTi" !important;
    .detail-title {
      font-size: 1.9rem;
      color: #ea4335;
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