<template>
  <div class="nav-header">
    <div class="logo-img-box">
      <router-link class="navbar-brand" to="/">
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
            ><router-link :to="item.href">{{
              $t(item.msg)
            }}</router-link></template
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
      </el-menu>
    </div>

    <div class="nav-tool-right">
      <a
        href="https://www.tonglec.com/"
        target="blank"
        class="course-btn tlc-btn tlc-btn-secondary r-10"
      >
        体验课程
      </a>
      <div
        class="language-selector"
        @mouseenter="mouseInNavItem($event)"
        @mouseleave="mouseOutNavItem($event)"
        @click="mouseToogleNavItem($event)"
        ref="languageSelector"
      >
        <a class="dropdown">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33.2 33.19"
          >
            <path
              class="cls-1"
              d="M1570.1,46.34a16.61,16.61,0,0,0-16.59,16.59,16.28,16.28,0,0,0,1.21,6.21l.08.54h.14a16.6,16.6,0,0,0,30.33,0h.18v-.44a16.44,16.44,0,0,0,1.25-6.31A16.61,16.61,0,0,0,1570.1,46.34Zm-7.78,21h-5.76a14,14,0,0,1-.72-4.41,13.83,13.83,0,0,1,.32-2.89h6c-.07,1-.11,1.93-.11,2.89A35.17,35.17,0,0,0,1562.32,67.34Zm15.45-9.64a20.52,20.52,0,0,0-2.82-8.16,14.38,14.38,0,0,1,8.4,8.16Zm-2.83,18.63a19.29,19.29,0,0,0,2.56-6.65h5.15A14.11,14.11,0,0,1,1574.94,76.33Zm-9.68-26.79a20.52,20.52,0,0,0-2.82,8.16h-5.58A14.38,14.38,0,0,1,1565.26,49.54Zm10.56,13.39a30.83,30.83,0,0,1-.31,4.41h-10.82a32.35,32.35,0,0,1-.3-4.41c0-.94,0-1.91.13-2.89h11.17C1575.78,61,1575.82,62,1575.82,62.93Zm-11-5.23c.9-5.33,3-9,5.28-9s4.39,3.69,5.29,9Zm-2.11,12a19.09,19.09,0,0,0,2.56,6.65,14.08,14.08,0,0,1-7.71-6.65Zm12.38,0c-1,4.51-3,7.51-5,7.51s-3.94-2.94-5-7.51Zm3-9.64h6a13.8,13.8,0,0,1,.31,2.89,14.18,14.18,0,0,1-.71,4.41h-5.76a35.41,35.41,0,0,0,.27-4.41C1578.16,62,1578.12,61,1578,60Z"
              transform="translate(-1553.51 -46.34)"
            />
          </svg>
          <span class="text"> {{ $t("msg.language") }}</span>
        </a>
        <ul @click.stop>
          <li @click="switchSimplified()">
            {{ $t("msg.simplifiedChinese") }}
          </li>
          <li @click="switchTraditional()">
            {{ $t("msg.traditionalChinese") }}
          </li>
        </ul>
      </div>
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
      this.$i18n.locale = "zh";
      this.$store.commit("setLanguage", this.$i18n.locale);
    },
    switchTraditional() {
      this.$i18n.locale = "zhFan";
      this.$store.commit("setLanguage", this.$i18n.locale);
    },
    getItem(list, item) {
      if (item.id == "learn") {
        this.$router.push({
          path: "/LanguageLearningDetailTwo",
          query: {
            id: list.id,
            file: "LanguageLearning",
          },
        });
      } else if (item.id == "theory") {
        this.$router.push({
          path: "/LanguageLearningDetailTwo",
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
  .nav-tool-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
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
    text-align: center;
    position: relative;
    height: 40px;
    border: 1px solid $main-text-color;
    border-radius: 15px;
    margin-right: 15px;
    a {
      width: inherit;
      margin: 5px auto;
      height: 40px;
      border-radius: 15px;
      justify-content: space-between;
      background: white;
      .text {
        color: $main-text-color;
        width: 100%;
        text-align: center;
        vertical-align: middle;
      }
    }
    ul {
      display: none; //下拉框
      position: absolute;
      width: 150px;
      right: 0;
      background-color: white;
      list-style: none;
      margin: 0;
      padding: 0;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0px 0px 3px 1px rgba($color: #000000, $alpha: 0.25);
      li {
        text-align: center;
        padding: 5px 10px;
        cursor: pointer;
        &.active {
          color: white;
          background-color: $main-color;
        }
        &:hover {
          color: white;
          background-color: $main-color;
        }
        &:first-child {
          padding-top: 5px;
        }
        &:last-child {
          padding-bottom: 5px;
        }
      }
    }
    &.active {
      ul {
        display: block; //下拉框
      }
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
  :deep(.el-menu-item:hover),
  :deep(.el-sub-menu__title:hover) {
    background: $main-color !important;
    color: #fff !important;
  }
  :deep(.el-menu-item.is-active),
  :deep(.el-sub-menu__title.is-active) {
    background: $main-color !important;
  }
  :deep(.el-sub-menu__title:hover) a {
    color: #fff !important;
  }
}
</style>