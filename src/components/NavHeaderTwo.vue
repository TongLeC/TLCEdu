<template>
  <div class="nav-header">
    <div class="home-container el-menu row">
      <span class="logo-img-box col-xs-3">
        <a class="navbar-brand" href="/">
          <img class="logo-img" src="../../public/images/logo3.png" alt="" />
        </a>
      </span>
      <el-menu
        class="el-menu-demo col-xs-9"
        mode="horizontal"
        active-text-color="#ea4335"
        router
      >
        <el-menu-item route="/" index="10">{{
          $t("msg.homePage")
        }}</el-menu-item>
        <el-menu-item>
          <a href="https://www.tonglec.org/" target="blank">{{ $t("msg.tongleCourse") }}</a>
        </el-menu-item>
        <el-sub-menu
          v-for="(item, index) in NavHeaderJson.NavHeader"
          :key="index"
          :index="item.id"
        >
          <template #title
            ><a :href="item.href">{{ $t(item.msg) }}</a></template
          >
          <el-menu-item
            v-for="(list, index) in item.child"
            :key="index"
            style="border-bottom: 1px solid #ccc"
          >
            <a :href="list.link" target="view_window" v-if="item.type == 0">
              {{ list.title }}
            </a>
            <div @click="getItem(list, item.child)" v-else>{{ list.title }}</div>
          </el-menu-item>
          <el-menu-item :index="item.href">
            {{ $t("msg.seeMore") }}
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="l">
          <template #title>{{ $t("msg.language") }}</template>
          <!-- <p
            style="
              padding: 5px 10px 8px;
              cursor: pointer;
              border-bottom: 1px solid #ccc;
            "
            class="nav-language"
            @click="switchEnglish()"
          >
            {{ $t("msg.english") }}
          </p> -->
          <p
            style="
              padding: 5px 10px 8px;
              cursor: pointer;
              border-bottom: 1px solid #ccc;
            "
            class="nav-language"
            @click="switchSimplified()"
          >
            {{ $t("msg.simplifiedChinese") }}
          </p>
          <p
            style="padding: 0 10px; cursor: pointer"
            class="nav-language"
            @click="switchTraditional()"
          >
            {{ $t("msg.traditionalChinese") }}
          </p>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import NavHeaderJson from "../../public/json/NavHeader.json";

export default {
  name: "NavHeaderTwo",
  data() {
    return {
      NavHeaderJson,
    };
  },
  methods: {
    switchEnglish() {
      this.$i18n.locale = "en";
      localStorage.setItem("language", this.$i18n.locale);
    },
    switchSimplified() {
      this.$i18n.locale = "zh";
      localStorage.setItem("language", this.$i18n.locale);
    },
    switchTraditional() {
      this.$i18n.locale = "zhFan";
      localStorage.setItem("language", this.$i18n.locale);
    },
    getItem(list, item) {
      this.$router.push({
        path: "/LanguageLearningDetailTwo",
        query: {
          id: list.id,
        },
      });
      localStorage.setItem("json", JSON.stringify(item));
      console.log(item)

      const { now } = this.$route.query;
      if (typeof now === "undefined" && location.href.includes("?")) {
        location.href = location.href + `&now=${Date.now()}`;
        window.location.reload();
      }
    },
  },
};
</script>

<style scoped lang='scss'>
.nav-header {
  font-family: "SourceSansPro-Bold", "HeiTi";
  height: 4.6rem;
  width: 100%;
  // border-bottom: 1px solid #322f3b;
  box-shadow: 0 0 15px #5d5c5f;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: #fcfafa;
  .el-menu {
    background-color: #fcfafa;
    border: 0;
    height: 100%;
    z-index: 9999;
  }
  .logo-img {
    object-fit: cover;
    height: 3rem;
  }
  ::v-deep .el-sub-menu__title,
  ::v-deep .el-menu-item {
    font-size: 1.5rem;
    font-family: "HeiTi";
    font-weight: bold;
  }
}
</style>