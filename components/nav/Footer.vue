<template>
  <div class="nav-footer">
    <div class="home-container">
      <div class="nav-footer-top row">
        <!-- <a class="nav-footer-brand" href="/">
          <img class="logo-img" src="/images/logo3.png" alt="" />
        </a> -->
        <div class="col-12 col-md-3"></div>
        <p class="nav-footer-p col-12 col-md-6">
          同于自性，颐养天真。有教无类，乐学致远。
        </p>
        <div class="nav-footer-erweima col-12 col-md-3">
          <img class="erweima-img" src="/images/erweima-image.png" alt="" />
        </div>
      </div>
      <div class="nav-footer-bottom">
        版权所有©同乐文化科技有限公司 | 地址: 14200 SE 13th Pl, Bellevue, WA
        98007 | 欢迎关注同乐公众号
      </div>
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

<style lang='scss'>
.nav-footer {
  position: relative;
  width: 100%;
  background: url("/images/footer.png");
  color: #fff;
  padding: 6rem 0 20px;
  .nav-footer-top {
    width: 100%;
    .nav-footer-p {
      font-size: 2.2rem;
    }
    .nav-footer-erweima {
      .erweima-img {
        object-fit: cover;
        width: 130px;
        border-radius: 15px;
      }
    }
  }
  .nav-footer-bottom {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    padding: 0 15px;
  }
  .row {
    margin: 0;
  }
}
</style>