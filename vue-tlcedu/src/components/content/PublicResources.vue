<template>
  <div class="public-resources">
    <div class="public-bottom">
      <img src="../../../public/images/public1.png" alt="" />
    </div>
    <div class="public-resources-top">
      <div class="public-right">
        <img src="../../../public/images/public-child2.png" alt="" />
      </div>
      <div class="public-left">
        <div class="resources-one">
          <h3 class="resources-title">
            {{ $t("msg.freeBooks") }}
          </h3>
          <ul style="padding: 0">
            <li
              class="resources-list"
              v-for="(item, index) in publicResourcesJson.PublicResourcesOne
                .detailLink"
              :key="index"
            >
              <a :href="item.linkAddress" class="resources-list-detail">
                {{ item.linkTitle }}
              </a>
            </li>
          </ul>
        </div>
        <div class="resources-one" style="margin-left: 5rem">
          <h3 class="resources-title">
            {{ $t("msg.classicAudio") }}
          </h3>
          <ul style="padding: 0">
            <li
              class="resources-list"
              v-for="(item, index) in publicResourcesJson.PublicResourcesTwo
                .detailLink"
              :key="index"
            >
              <a :href="item.linkAddress" class="resources-list-detail">
                {{ item.linkTitle }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="public-resources-top">
      <div class="public-bottom-kid">
        <img src="../../../public/images/public-kid.png" alt="" />
      </div>
      <div class="public-left">
        <div class="resources-one">
          <h3 class="resources-title">
            {{ $t("msg.classicMusic") }}
          </h3>
          <ul style="padding: 0">
            <li
              class="resources-list"
              v-for="(item, index) in publicResourcesJson.PublicResourcesThree
                .detailLink"
              :key="index"
            >
              <a :href="item.linkAddress" class="resources-list-detail">
                {{ item.linkTitle }}
              </a>
            </li>
          </ul>
        </div>
        <div class="resources-one" style="margin-left: 5rem">
          <h3 class="resources-title">
            {{ $t("msg.chineseClassicStories") }}
          </h3>
          <ul style="padding: 0">
            <li
              class="resources-list"
              v-for="(item, index) in publicResourcesJson.PublicResourcesFour
                .detailLink"
              :key="index"
            >
              <a :href="item.linkAddress" class="resources-list-detail">
                {{ item.linkTitle }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import publicResourcesJson from "../../../public/json/PublicResources.json";

export default {
  name: "PublicResources",
  data() {
    return {
      publicResourcesJson,
    };
  },
  mounted() {
    console.log(publicResourcesJson);
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
  .public-bottom {
    position: relative;
    img {
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      width: 24rem;
    }
  }
  .public-resources-top {
    position: relative;
    .public-left {
      width: 70%;
      margin: 4rem 0 2rem 8rem;
      position: relative;
      z-index: 100;
      display: flex;
      .resources-one {
        width: 44%;
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
        ul {
          overflow-y: auto;
          max-height: 430px;
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
    }
    .public-right {
      img {
        position: absolute;
        right: 0;
        top: 40px;
        object-fit: cover;
        width: 30rem;
      }
    }
    .public-bottom-kid {
      img {
        position: absolute;
        right: 0;
        bottom: 0;
        object-fit: cover;
        width: 30rem;
      }
    }
  }
}
</style>