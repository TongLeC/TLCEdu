<template>
  <div class="created-article">
    <div class="article-left">
      <img src="../../assets/practice-img.png" alt="" />
    </div>
    <div class="article-right">
      <ul>
        <li class="article-list">
          <a class="article-list-detail" href="#"
            >你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊啊啊啊你好啊啊啊</a
          >
        </li>
        <li class="article-list">
          <a class="article-list-detail" href="#"
            >你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊啊啊啊你好啊啊啊</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationalPractice',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped lang='scss'>
@media screen and (max-width: 880px) {
  .article-left {
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .article-right {
    width: 90% !important;
    margin-right: 10px !important;
  }
}
@media (min-width: 880px) and (max-width: 1100px) {
  .article-left {
    img {
      object-fit: cover;
      width: 25rem !important;
    }
  }
}
@media (min-width: 1100px) and (max-width: 1500px) {
  .article-left {
    img {
      object-fit: cover;
      width: 30rem !important;
    }
  }
}

.created-article {
  display: flex;
  position: relative;
  .article-left {
    img {
      float: left;
      object-fit: cover;
      width: 38rem;
      opacity: 0.55;
      transform: rotateY(180deg);
    }
  }
  .article-right {
    width: 57%;
    background: white;
    box-shadow: 0 0 12px #d1d1d1;
    z-index: 999;
    margin: 3rem 30px 1.5rem 2rem;
    min-height: 500px;
    .article-list {
      padding: 8px 30px 10px 10px;
      margin: 25px 0;
      border-left: 4px solid #a61b29;
      .article-list-detail {
        font-size: 1.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        width: 100%;
      }
    }
  }
}
</style>