<template>
  <div class="public-resources">
    <div class="public-right">
      <img src="../../assets/public-img.png" alt="" />
    </div>
    <div class="public-left">
      <div class="resources-one">
        <h3 class="resources-title">你好呀得到</h3>
        <ul style="padding: 0">
          <li class="resources-list">
            <a href="#" class="resources-list-detail">
              你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊
            </a>
          </li>
          <li class="resources-list">
            <a href="#" class="resources-list-detail">
              你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊
            </a>
          </li>
        </ul>
      </div>
      <div class="resources-one" style="margin-left: 5rem">
        <h3 class="resources-title">你好呀得到</h3>
        <ul style="padding: 0">
          <li class="resources-list">
            <a href="#" class="resources-list-detail"
              >你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊你好啊啊啊</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicResources",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 670px) {
  .public-left {
    display: block !important;
    .resources-one {
      margin: 0 0 20px 0 !important;
      width: 100% !important;
    }
  }
}
@media (min-width: 670px) and (max-width: 800px) {
  .public-left {
    margin-left: 20px !important;
    width: 95% !important;
  }
}

.public-resources {
  position: relative;
  .public-left {
    width: 70%;
    margin: 4rem 0 2rem 8rem;
    position: relative;
    z-index: 100;
    display: flex;
    .resources-one {
      width: 44%;
      min-height: 500px;
      background: white;
      box-shadow: 0 0 12px #d1d1d1;
      .resources-title {
        width: 100%;
        margin: 0 0 1.5rem 0;
        background: #a61b29;
        color: #ffffff;
        font-size: 1.9rem;
        padding: 1.2rem 0;
      }
      .resources-list {
        padding: 0 1.8rem 1.3rem;
        .resources-list-detail {
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
  .public-right {
    img {
      position: absolute;
      right: 0;
      top: 30px;
      object-fit: cover;
      width: 20rem;
      opacity: 0.55;
    }
  }
}
</style>