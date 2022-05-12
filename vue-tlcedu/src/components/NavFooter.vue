<template>
  <div class="nav-footer">
    <div class="nav-footer-top">
      <a class="nav-footer-brand" href="#">
        <img class="logo-img" src="../assets/tonglec-logo.jpg" alt="" />
      </a>
      <p class="nav-footer-p">同于自性，颐养天真。有教无类，乐学致远。</p>
      <div class="nav-footer-erweima">
        <img class="erweima-img" src="../assets/tongle-erweima.png" alt="" />
      </div>
    </div>
    <div class="nav-footer-bottom">
      版权所有©同乐文化科技有限公司 | Email: registrar@tonglec.org |
      欢迎关注同乐公众号
    </div>
    <img class="footer-fish" src="../assets/footer-fish.png" alt="" />
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
.nav-footer {
  position: relative;
  height: 260px;
  width: 100%;
  background-color: #ebe9e9;
  border-top: 4px solid #a61b29;
  .nav-footer-top {
    width: 100%;
    display: flex;
    margin: 30px 0 5px;
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
        height: 60px;
      }
    }
    .nav-footer-p {
      font-size: 36px;
      line-height: 165px;
      flex: 1;
    }
    .nav-footer-erweima {
      flex: 0.8;
      .erweima-img {
        object-fit: cover;
        height: 165px;
      }
    }
  }
  .nav-footer-bottom {
    width: 100%;
    text-align: center;
    font-size: 16px;
  }
  .footer-fish {
    object-fit: cover;
    height: 220px;
    opacity: 0.5;
    position: absolute;
    top: 20px;
    right: 25%;
  }
}
</style>