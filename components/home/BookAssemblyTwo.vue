<!--  首页同乐书籍  -->
<template>
  <main class="home-find" :home="home">
    <h2 class="big-title">
      {{ $t(home.title) }}
      <p class="see-more">
        <router-link :to="localePath({ name: 'TongleBook' })"
          >{{ $t("msg.seeMore") }} ></router-link
        >
      </p>
    </h2>
    <p class="big-slogan">
      {{ $t("homeBook.describe") }}
    </p>
    <div class="home-book">
      <section class="home-public">
        <h2 class="home-public-title">
          {{ $t("msg.publicTitle") }} {{ $t("msg.publicTitleTwo") }}
        </h2>
        <p class="book-more">
          <router-link :to="localePath({ name: 'TongleBook' })"
            >—— {{ $t("msg.freeBook") }} ——</router-link
          >
        </p>
      </section>
      <div class="row">
        <div class="img-box col-12 col-md-3">
          <div class="book-img">
            <img :src="home.json.detail.homeImg" alt="海外中文教育的探索" />
            <p>海外中文教育的探索</p>
          </div>
        </div>

        <article class="book-describe-box col-12 col-md-9">
          <p
            class="book-describe"
            v-for="(item, index) in home.json.detail.homeDescribe"
            :key="index"
          >
            {{ $t(`homeBook.detail.homeDescribe[${index}]`) }}
          </p>
        </article>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "homeBookAssemblyTwo",
  props: {
    home: { type: Object },
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .home-find {
    width: 90% !important;
  }
}
.home-find {
  width: 75%;
  margin: 0 auto;
  padding: 40px 0 0;
  .home-public-title {
    color: $adorn-color;
    font-size: 2.2rem;
    font-weight: bold;
  }
  .book-more {
    font-size: 1.5rem;
    a:hover {
      color: $main-color;
    }
  }
  .home-book {
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 10px $shadow-color;
    padding: 30px 40px;
    font-size: 1.4rem;
    .book-describe-box {
      padding-top: 1rem;
      .book-describe {
        text-align: left;
        text-indent: 2em;
        margin: 0;
      }
    }
    .img-box {
      display: flex;
      align-items: center;
      justify-content: center;
      .book-img {
        width: 100%;
        border: 2px solid $adorn-color;
        border-radius: 15px;
        padding: 15px 15px 0;
        img {
          width: 100%;
          margin-bottom: 10px;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>