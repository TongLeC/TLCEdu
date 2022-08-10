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
          <a href="https://www.tonglec.com/" @click.stop target="blank">
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
            <a
              :href="list.link"
              @click.stop
              target="view_window"
              v-if="item.type == 0"
            >
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
        <el-sub-menu
          index="l"
          style="border-left: 1px solid #000; margin: 10px 0"
        >
          <template #title>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-globe2"
              viewBox="0 0 16 16"
              style="margin-right: 5px"
            >
              <path
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
              />
            </svg>
            {{ $t("msg.language") }}
          </template>
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
import $ from "jquery";
import NavHeaderJson from "../../public/json/NavHeader.json";
import languageLearningJson from "../../public/json/LanguageLearning.json";
import educationalTheoryJson from "../../public/json/EducationalTheory.json";

export default {
  name: "NavHeaderTwo",
  data() {
    return {
      NavHeaderJson,
      languageLearningJson,
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
      if (item.id == "learn") {
        localStorage.setItem(
          "detail",
          JSON.stringify(languageLearningJson.languageLearning)
        );
      } else if (item.id == "theory") {
        localStorage.setItem(
          "detail",
          JSON.stringify(educationalTheoryJson.educationalTheory)
        );
      }
    },
  },
  watch: {
    $route: {
      handler: function (val) {
        if (val.name == "LanguageLearningDetailTwo") {
          $("#home").removeClass("is-active");
        } else if (val.name == "home") {
          $("#home").addClass("is-active");
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
    height: 3rem;
    object-fit: cover;
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