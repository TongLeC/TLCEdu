<template>
  <main class="tongle-book home-container">
    <section class="other-page">
      <h1 class="other-page-title">{{ $t("msg.tongleBooks") }}</h1>
      <p class="other-page-slogan">{{ $t("msg.slogan[3]") }}</p>
    </section>
    <section
      class="tongle-book-content"
      v-for="(item, index) in TongleBookJson.TongleBook"
      :key="index"
    >
      <h2 class="big-title">
        {{ $t(`TongleBook[${index}].grade`) }}
      </h2>
      <article class="big-box">
        <p
          class="tongle-book-describe"
          v-for="(describe, y) in item.describe"
          :key="y"
        >
          {{ $t(`TongleBook[${index}].describe[${y}]`) }}
        </p>
        <div v-if="item.describe != false" class="split-line"></div>
        <ul class="books-box" v-for="(detail, i) in item.book" :key="i">
          <li class="books-detail">
            <p
              class="books-title"
              v-html="$t(`TongleBook[${index}].book[${i}].name`)"
            ></p>
            <div class="link-box">
              <a
                v-for="(content, x) in detail.link"
                :key="x"
                :href="content.linkAddress"
                target="blank"
              >
                <button class="books-link">
                  {{
                    $t(`TongleBook[${index}].book[${i}].link[${x}].linkTitle`)
                  }}
                </button>
              </a>
            </div>
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>

<script setup>
import TongleBook from "/assets/json/TongleBook.json";
const TongleBookJson = ref(TongleBook);
// const { data: TongleBookJson } = await useFetch("/api/json/TongleBook");
const title = ref("同乐书籍");
const description = ref("My amazing Nuxt app");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
<script>
export default {
  name: "TongleBook",
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .tongle-book {
    width: 90% !important;
  }
}
.tongle-book {
  width: 75%;
  margin: 70px auto;
  .tongle-book-content {
    .tongle-book-describe {
      font-size: 1.4rem;
      text-align: left;
      text-indent: 2em;
    }
    .big-box {
      background: #fff;
      border-radius: 15px;
      box-shadow: 2px 2px 10px $shadow-color;
      padding: 30px 40px 10px;
      margin: 20px 0 50px;
    }

    .split-line {
      height: 4px;
      width: 200px;
      background: $adorn-color;
    }
    .books-box {
      padding: 0;
      margin: 0 auto;
      .books-detail {
        margin: 1rem 0;
        text-align: left;
        .books-link {
          padding: 0.6rem 2rem;
          border: 2px solid $main-color;
          border-radius: 15px;
          color: #fff;
          word-wrap: break-word;
          overflow-wrap: break-word;
          white-space: normal;
          overflow: hidden;
          margin: 0.5rem;
          background: $main-color;
        }
        .books-link:hover {
          background: #fff;
          color: $main-color;
          transition: all 0.4s ease 0s;
        }
      }
    }
  }
}
</style>