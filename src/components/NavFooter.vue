<template>
<div class="nav-footer">
  <div class="home-container">
    <div class="nav-footer-top">
      <a class="nav-footer-brand" href="/">
        <img class="logo-img" src="../../public/images/logo3.png" alt="" />
      </a>
      <p class="nav-footer-p">同于自性，颐养天真。有教无类，乐学致远。</p>
      <div class="nav-footer-erweima">
        <img class="erweima-img" src="../../public/images/erweima-image.png" alt="" />
      </div>
    </div>
    <div class="nav-footer-bottom">
      版权所有©同乐文化科技有限公司 | Email: registrar@tonglec.org |
      欢迎关注同乐公众号
    </div>
    <img class="footer-fish" src="../../public/images/footer-fish.png" alt="" />
  </div>
  </div>
</template>

<script>
export default {
  name: "NavFooter",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 330px) {
  .nav-footer {
    height: 170px!important;
  }
}
@media screen and (max-width: 470px) {
  .nav-footer-brand {
    display: none!important;
  }
}
@media screen and (max-width: 1100px) {
  .nav-footer-p {
    line-height: 2.1rem!important;
  }
}

.nav-footer {
  position: relative;
  height: 16.3rem;
  width: 100%;
  background-color: #ebe9e9;
  border-top: 4px solid #EA4335;
  .nav-footer-top {
    width: 100%;
    display: flex;
    margin: 1.9rem 0 5px;
    .nav-footer-brand {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      flex: 0.8;
      .logo-img {
        object-fit: cover;
        height: 3.8rem;
      }
    }
    .nav-footer-p {
      font-size: 2.2rem;
      line-height: 10.3rem;
      // flex: 1;
    }
    .nav-footer-erweima {
      flex: 0.8;
      .erweima-img {
        object-fit: cover;
        height: 10.3rem;
        border-radius: 12px;
      }
    }
  }
  .nav-footer-bottom {
    width: 100%;
    text-align: center;
    font-size: 1rem;
  }
  .footer-fish {
    object-fit: cover;
    height: 14rem;
    opacity: 0.5;
    position: absolute;
    top: 20px;
    right: 23%;
  }
}
</style>