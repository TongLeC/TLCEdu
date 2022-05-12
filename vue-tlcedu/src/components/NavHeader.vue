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
          <a class="navbar-brand" href="#">
            <img class="logo-img" src="../assets/tonglec-logo.jpg" alt="" />
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">首页</a></li>
            <li><a href="#">同乐语言学习法</a></li>
            <li><a href="#">同乐整体教育理论</a></li>
            <li><a href="#">教育践谈</a></li>
            <li><a href="#">公益资源</a></li>
            <li><a href="#">原创文章</a></li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Language <span class="caret"></span
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
.nav-header {
  height: 70px;
  width: 100%;
  border-bottom: 4px solid #a61b29;
  font-size: 22px;
  .navbar {
    height: 100%;
    background-color: transparent;
    .collapse {
      padding-top: 9px;
      .nav li a {
        color: #a61b29;
      }
    }
    .logo-img {
      object-fit: cover;
      height: 40px;
    }
  }
}
</style>