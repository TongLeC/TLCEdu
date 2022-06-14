<template>
  <div class="tongle-book home-container">
    <div class="tongle-book-title">
      {{ $t("msg.tongleBooks") }}
    </div>
    <div
      class="tongle-book-content"
      v-for="(item, index) in TongleBookJson.TongleBook"
      :key="index"
    >
      <p class="tongle-book-grade">{{ item.grade }}</p>
      <p
        class="tongle-book-describe"
        v-for="(describe, y) in item.describe"
        :key="y"
      >
        {{ describe }}
      </p>
      <ul class="books-box" v-for="(detail, i) in item.book" :key="i">
        <li class="books-detail">
          <span class="books-title">·{{ detail.name }}</span>
          <div class="link-box">
            <a
              v-for="(content, x) in detail.link"
              :key="x"
              :href="content.linkAddress"
              target="blank"
            >
              <button class="books-link">{{ content.linkTitle }}</button>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TongleBookJson from "../../../public/json/TongleBook.json";
export default {
  name: "TongleBook",
  data() {
    return {
      TongleBookJson,
    };
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 700px) {
  .tongle-book-content {
    padding: 1rem 3rem !important;
  }
}
@media (min-width: 700px) and (max-width: 1200px) {
  .tongle-book-content {
    padding: 1rem 10rem !important;
  }
}
.tongle-book {
  width: 100%;
  padding: 2rem 0;
  .tongle-book-title {
    font-size: 2.5rem;
    font-family: "SourceSansPro-Regular", "HeiTi";
    font-weight: bold;
  }
  .tongle-book-content {
    padding: 1rem 18rem;
    border-bottom: 1px solid #ffd111;
    .tongle-book-grade {
      font-family: "SourceSansPro-Regular", "HeiTi";
      font-size: 2rem;
    }
    .tongle-book-describe {
      font-size: 1.5rem;
      font-family: "Kaiti";
      text-align: left;
      text-indent: 2em;
    }
    .books-box {
      padding: 0;
      margin: 0 auto;
      .books-detail {
        margin: 1.5rem 0;
        text-align: left;
        .books-title {
        }
        .link-box {
          margin: 0.5rem 0 0;
          .books-link {
            padding: 0.6rem 2rem;
            border: 2px solid #ea4335;
            border-radius: 15px;
            color: #ea4335;
            word-wrap: break-word;
            overflow-wrap: break-word;
            white-space: normal;
            overflow: hidden;
            margin: 0.5rem;
            background: #f7e7e7;
          }
          .books-link:hover {
            background: #ea4335;
            color: white;
            transition: all 0.4s ease 0s;
          }
        }
      }
    }
  }
}
</style>