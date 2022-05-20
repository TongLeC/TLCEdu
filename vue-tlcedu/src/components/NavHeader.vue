<template>
  <div class="nav-header">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img class="logo-img" src="../../public/images/logo3.png" alt="" />
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="display-li">
              <a href="/">{{ $t("msg.homePage") }}</a>
            </li>
            <li class="display-li">
              <a href="/languageLearning">{{ $t("msg.languageLearning") }}</a>
            </li>
            <li class="display-li">
              <a href="/educationalTheory">{{
                $t("msg.holisticEducationTheory")
              }}</a>
            </li>
            <li class="display-li">
              <a href="www.tonglec.com">{{ $t("msg.tongleCourse") }}</a>
            </li>
            <li class="display-li">
              <a href="/educationalPractice">{{
                $t("msg.educationalPractice")
              }}</a>
            </li>
            <li class="display-li">
              <a href="/publicResources">{{
                $t("msg.publicWelfareResources")
              }}</a>
            </li>
            <li class="display-li">
              <a href="/createdArticle">{{ $t("msg.originalArticle") }}</a>
            </li>
            <li class="dropdown display-dropdown" style="display: none">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >同乐教育 <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li><a href="/">首页</a></li>
                <li><a href="/languageLearning">语言学习法</a></li>
                <li><a href="/educationalTheory">整体教育理论</a></li>
                <li><a href="#">同乐课程</a></li>
                <li><a href="/educationalPractice">教育践谈</a></li>
                <li><a href="/publicResources">公益资源</a></li>
                <li><a href="/createdArticle">原创文章</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >{{ $t("msg.language") }} <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li>
                  <a @click="switchEnglish()">{{ $t("msg.english") }}</a>
                </li>
                <li>
                  <a @click="switchSimplified()">{{
                    $t("msg.simplifiedChinese")
                  }}</a>
                </li>
                <li>
                  <a @click="switchTraditional()">{{
                    $t("msg.traditionalChinese")
                  }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  mounted() {},
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
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 350px) {
  .nav-header {
    height: 50px !important;
  }
}
@media screen and (max-width: 764px) {
  .navbar-right {
    position: relative;
    background: white;
    z-index: 9999;
    box-shadow: 0 0 12px #d1d1d1;
  }
}
@media (min-width: 764px) and (max-width: 1170px) {
  .display-li {
    display: none !important;
  }
  .display-dropdown {
    display: block !important;
  }
}

.nav-header {
  height: 4.6rem;
  width: 100%;
  border-bottom: 4px solid #a61b29;
  font-size: 1.4rem;
  position: fixed;
  top: 0;
  z-index: 9999;
  background: url("../../public/images/all-background2.jpg") 100% 100%;
  .navbar {
    height: 100%;
    background-color: transparent;
    border: none;
    .collapse {
      padding-top: 0.6rem;
      .nav li a {
        color: #a61b29;
      }
      .nav li a:hover {
        background: #dfd1d2;
      }
    }
    .logo-img {
      object-fit: cover;
      height: 2.5rem;
    }
  }
}
</style>