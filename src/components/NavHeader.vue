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
            <li class="display-li"><a href="/">首页</a></li>
            <li class="display-li"><a href="/languageLearning">语言学习法</a></li>
            <li class="display-li"><a href="/educationalTheory">整体教育理论</a></li>
            <li class="display-li"><a href="www.tonglec.com">同乐课程</a></li>
            <li class="display-li"><a href="/educationalPractice">教育践谈</a></li>
            <li class="display-li"><a href="/publicResources">公益资源</a></li>
            <li class="display-li"><a href="/createdArticle">原创文章</a></li>
            <li class="dropdown display-dropdown" style="display: none;">
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
                >语言 <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li><a href="#">English</a></li>
                <li><a href="#">简体中文</a></li>
                <li><a href="#">繁体中文</a></li>
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
};
</script>

<style lang="scss">
@media screen and (max-width: 350px) {
  .nav-header {
    height: 50px!important;
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
    display: none!important;
  }
  .display-dropdown {
    display: block!important;
  }
}

.nav-header {
  height: 4.6rem;
  width: 100%;
  border-bottom: 4px solid #a61b29;
  font-size: 1.4rem;
  .navbar {
    height: 100%;
    background-color: transparent;
    border: none;
    .collapse {
      padding-top: 0.6rem;
      .nav li a {
        color: #a61b29;
      }
    }
    .logo-img {
      object-fit: cover;
      height: 2.5rem;
    }
  }
}
</style>