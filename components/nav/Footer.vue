<template>
  <footer class="nav-footer">
    <div class="home-container">
      <div class="nav-footer-top row">
        <!-- <a class="nav-footer-brand" href="/">
          <img class="logo-img" src="/images/logo3.png" alt="" />
        </a> -->
        <p class="col-12 col-md-3"></p>
        <p class="nav-footer-p col-12 col-md-6">
          {{ $t("msg.bottom") }}
        </p>
        <div class="nav-footer-erweima col-12 col-md-3">
          <img class="erweima-img" src="/images/erweima-image.png" alt="" />
        </div>
      </div>
      <small class="nav-footer-bottom">
        {{ $t("msg.bottomAddress1") }} | {{ $t("msg.bottomAddress2") }} |
        {{ $t("msg.bottomAddress3") }}
      </small>
    </div>
  </footer>
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