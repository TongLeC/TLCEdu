<template>
  <div class="nav-header">
    <div class="logo-img-box">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <img class="logo-img" src="../../public/images/logo3.png" alt="" />
      </router-link>
    </div>
    <div class="home-container el-menu">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="#fff"
        router
      >
        <el-sub-menu
          v-for="(item, index) in NavHeaderJson.NavHeader"
          :key="index"
          :index="item.id"
        >
          <template #title
            ><router-link :to="{ name: item.href }">{{
              $t(item.msg)
            }}</router-link></template
          >
          <el-menu-item
            v-for="(list, i) in item.child"
            :key="i"
            :index="'p' + i"
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
          <el-menu-item :route="{ name: item.href }" :index="'n' + index">
            {{ $t("msg.seeMore") }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item :route="{ name: 'tongleBook' }" index="100">
          {{ $t("msg.tongleBooks") }}
        </el-menu-item>
        <el-menu-item class="select-course">
          <a
            href="https://www.tonglec.com/"
            target="blank"
            class="course-btn tlc-btn tlc-btn-secondary r-10"
          >
            体验课程
          </a>
        </el-menu-item>
        <el-sub-menu class="language-selector" index="language">
          <template #title>
            <div class="language-selector-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-globe2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
                />
              </svg>
              {{ $t("msg.language") }}
            </div>
          </template>
          <el-menu-item @click.stop>
            <div @click="switchSimplified()">
              {{ $t("msg.simplifiedChinese") }}
            </div>
          </el-menu-item>
          <el-menu-item @click.stop>
            <div @click="switchTraditional()">
              {{ $t("msg.traditionalChinese") }}
            </div>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import NavHeaderJson from "../../public/json/NavHeader.json";

export default {
  name: "NavHeaderTwo",
  data() {
    return {
      NavHeaderJson,
      isChange: false,
    };
  },
  methods: {
    switchEnglish() {
      this.$i18n.locale = "en";
      this.$store.commit("setLanguage", this.$i18n.locale);
    },
    switchSimplified() {
      this.$i18n.locale = "zh-hans";
      this.$store.commit("setLanguage", this.$i18n.locale);
      console.log(this.$i18n.locale);
      this.$router
        .push({ params: { lang: this.$i18n.locale } })
        .catch(() => {});
    },
    switchTraditional() {
      this.$i18n.locale = "zh-hant";
      this.$store.commit("setLanguage", this.$i18n.locale);
      console.log(this.$i18n.locale);
      this.$router
        .push({ params: { lang: this.$i18n.locale } })
        .catch(() => {});
    },
    getItem(list, item) {
      if (item.id == "learn") {
        this.$router.push({
          name: "LanguageLearningDetailTwo",
          query: {
            id: list.id,
            file: "LanguageLearning",
          },
        });
      } else if (item.id == "theory") {
        this.$router.push({
          name: "LanguageLearningDetailTwo",
          query: {
            id: list.id,
            file: "EducationalTheory",
          },
        });
      }
    },
    mouseToogleNavItem(e) {
      this.toggleClassName(e.currentTarget, "active");
    },
    mouseInNavItem(e) {
      this.toggleClassName(e.currentTarget, "active", true);
    },
    mouseOutNavItem(e) {
      this.toggleClassName(e.currentTarget, "active", false);
    },
    toggleClassName(e, name, isAdd = null) {
      if (this.isChange) return;
      if (isAdd) {
        this.isChange = true;
      }
      if (isAdd === true) {
        if (e.className.indexOf(name) == -1) {
          e.className = e.className + " " + name;
        }
      } else if (isAdd === false) {
        if (e.className.indexOf(name) > -1) {
          e.className = e.className.replace(new RegExp(` ${name}`, "g"), "");
        }
      } else {
        e.className.indexOf(name) == -1
          ? (e.className = e.className + " " + name)
          : (e.className = e.className.replace(
              new RegExp(` ${name}`, "g"),
              ""
            )); //new RegExp(`/ ${name}/g`);
      }
      setTimeout(() => {
        this.isChange = false;
      }, 0);
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

<style>
.el-menu-item:hover,
.el-sub-menu__title:hover {
  background: #2b85c3 !important;
  color: #fff !important;
}
.el-sub-menu__title:hover a {
  color: #fff !important;
}
.el-menu-item.is-active,
.el-sub-menu__title.is-active {
  background: #2b85c3 !important;
}
.language-selector .el-sub-menu__title:hover {
  background: #fff !important;
  color: #2b85c3 !important;
}
.language-selector .el-sub-menu__title {
  padding: 0 !important;
}
.el-sub-menu__title * {
  vertical-align: middle !important;
}
.select-course.el-menu-item:hover {
  background: #fff !important;
}
</style>
<style scoped lang='scss'>
.nav-header {
  height: 70px;
  width: 100%;
  box-shadow: 0 0 15px #5d5c5f;
  position: fixed;
  top: 0;
  z-index: 9999;
  display: flex;
  background: #fff;
  .el-menu {
    border: 0;
    height: 100%;
    width: 100%;
  }
  .logo-img-box {
    display: flex;
    align-self: center;
    justify-content: center;
    margin-left: 15px;
  }
  .logo-img {
    height: 3rem;
    object-fit: cover;
  }
  .course-btn {
    margin: 3px 10px 3px 0;
    line-height: 40px;
    height: 40px;
    width: 120px;
    background: $main-color;
    color: #fff;
    border-radius: 15px;
    &:hover {
      background: $bg-main-color;
      color: $main-color;
      text-decoration: none;
    }
  }
  .language-selector {
    width: 150px;
    height: 70px;
    &-a {
      margin: 0 auto;
      border: 1px solid $main-text-color;
      width: 100%;
      height: 40px;
      border-radius: 15px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon {
      height: 20px;
      color: $main-text-color;
    }
  }
  :deep(.el-sub-menu__title),
  :deep(.el-menu-item) {
    font-size: 1.3rem;
  }
}
</style>