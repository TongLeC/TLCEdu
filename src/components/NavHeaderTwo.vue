<template>
  <div class="nav-header">
    <div class="home-container el-menu row">
      <span class="logo-img-box col-sm-2 col-xs-9">
        <a class="navbar-brand" href="/">
          <img class="logo-img" src="../../public/images/logo3.png" alt="" />
        </a>
      </span>
      <el-menu
        class="el-menu-demo col-sm-10 col-xs-3"
        mode="horizontal"
        active-text-color="#ea4335"
        router
      >
        <el-menu-item route="/" index="10" id="home">
          {{ $t("msg.homePage") }}
        </el-menu-item>
        <el-menu-item>
          <a href="https://www.tonglec.org/" @click.stop target="blank">
            {{ $t("msg.tongleCourse") }}
          </a>
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
            <a :href="list.link" @click.stop target="view_window" v-if="item.type == 0">
              {{ list.title }}
            </a>
            <div @click.stop @click="getItem(list, item)" v-else>
              {{ list.title }}
            </div>
          </el-menu-item>
          <el-menu-item :index="item.href">
            {{ $t("msg.seeMore") }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item route="/tongleBook" index="10">
          {{ $t("msg.tongleBooks") }}
        </el-menu-item>
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
            @click.stop
            @click="switchSimplified()"
          >
            {{ $t("msg.simplifiedChinese") }}
          </p>
          <p
            style="padding: 0 10px; cursor: pointer"
            class="nav-language"
            @click.stop
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
import $ from 'jquery'
import NavHeaderJson from "../../public/json/NavHeader.json";
import languageLearningJson from "../../public/json/LanguageLearning.json";
import educationalTheoryJson from "../../public/json/EducationalTheory.json";

export default {
  name: "NavHeaderTwo",
  data() {
    return {
      NavHeaderJson,
      languageLearningJson
    };
  },
  methods: {
    switchEnglish() {
      this.$i18n.locale = "en";
      this.$store.commit("setLanguage", this.$i18n.locale);
    },
    switchSimplified() {
      this.$i18n.locale = "zh";
      this.$store.commit("setLanguage", this.$i18n.locale);
    },
    switchTraditional() {
      this.$i18n.locale = "zhFan";
      this.$store.commit("setLanguage", this.$i18n.locale);
    },
    getItem(list, item) {
      this.$router.push({
        path: "/LanguageLearningDetailTwo",
        query: {
          id: list.id,
        },
      });
      if (item.id == 'learn') {
        localStorage.setItem("detail", JSON.stringify(languageLearningJson.languageLearning));
      } else if (item.id == 'theory') {
        localStorage.setItem("detail", JSON.stringify(educationalTheoryJson.educationalTheory));
      }
    },
  },
  watch: {
    $route: {
      handler: function (val) {
        if (val.name == 'LanguageLearningDetailTwo') {
          $('#home').removeClass('is-active')
        } else if (val.name == 'home') {
          $('#home').addClass('is-active')
        }
      },
    },
  },
};
</script>

<style scoped lang='scss'>
.navbar-brand {
  padding: 1rem !important;
}
.nav-header {
  font-family: "SourceSansPro-Bold", "HeiTi";
  height: 4.6rem;
  width: 100%;
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
  .logo-img-box {
    margin-top: 0.75rem !important;
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
  ::v-deep .el-menu-item:hover,
  ::v-deep .el-sub-menu__title:hover {
    background: #f7e7e7 !important;
    color: #ea4335 !important;
  }
  ::v-deep .el-menu-item.is-active,
  ::v-deep .el-sub-menu__title.is-active {
    background: #f7e7e7 !important;
  }
  ::v-deep .el-sub-menu__title:hover a {
    color: #ea4335 !important;
  }
}
</style>