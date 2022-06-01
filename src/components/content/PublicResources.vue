<template>
  <div class="public-resources-box">
    <div class="public-resources home-container">
      <div class="public-resources-title">
        {{ $t("msg.publicWelfareResources") }}
      </div>
      <div class="public-bottom">
        <img src="../../../public/images/public1.png" alt="" />
      </div>
      <div class="public-resources-top row">
        <div class="public-left col-sm-9 col-xs-11">
          <dic class="row">
            <div
              class="resources-one col-sm-5 col-xs-12"
              v-for="(item, index) in publicResourcesJson.PublicResourcesOne"
              :key="index"
            >
              <h3 class="resources-title">
                {{ $t(item.title) }}
              </h3>
              <ul style="padding: 0">
                <li class="resources-list">
                  <a
                    :href="item.linkAddress"
                    v-for="(item, index) in item.detailLink"
                    :key="index"
                    class="resources-list-detail"
                  >
                    {{ item.linkTitle }}
                  </a>
                </li>
              </ul>
            </div>
          </dic>
        </div>
        <div class="public-right col-sm-3 col-xs-12">
          <img src="../../../public/images/public-child2.png" alt="" />
        </div>
      </div>
      <div class="public-resources-top row" style="margin-left: 0">
        <div class="public-left col-sm-9 col-xs-11">
          <dic class="row">
            <div
              class="resources-one col-sm-5 col-xs-12"
              v-for="(item, index) in publicResourcesJson.PublicResourcesTwo"
              :key="index"
            >
              <h3 class="resources-title">
                {{ $t(item.title) }}
              </h3>
              <ul style="padding: 0">
                <li class="resources-list">
                  <a
                    :href="item.linkAddress"
                    v-for="(item, index) in item.detailLink"
                    :key="index"
                    class="resources-list-detail"
                  >
                    {{ item.linkTitle }}
                  </a>
                </li>
              </ul>
            </div>
          </dic>
        </div>
        <div class="public-right col-sm-3 col-xs-12" style="position:sticky;top:3rem;">
          <img src="../../../public/images/public-kid.png" alt="" />
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
  methods: {},
};
</script>

<style scoped lang='scss'>
.public-resources {
  position: relative;
  padding: 2rem;
  .public-resources-title {
    font-size: 2.5rem;
    font-family: "SourceSansPro-Regular", "HeiTi";
  }
  .public-bottom {
    position: absolute;
    left: 0;
    top: 0;
    img {
      object-fit: cover;
      width: 24rem;
    }
  }
  .public-resources-top {
    .public-left {
      .resources-one {
        background: white;
        box-shadow: 0 0 12px #d1d1d1;
        padding: 0;
        margin: 1rem 1.5rem;
        .resources-title {
          margin: 0;
          background: #ea4335;
          color: #ffffff;
          font-size: 2rem;
          padding: 1.2rem 0;
          font-family: "SourceSansPro-Regular", "HeiTi";
        }
        ul {
          .resources-list {
            padding: 0 2rem;
            .resources-list-detail {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              display: block;
              width: 100%;
              padding: 0.5rem 0;
            }
          }
        }
      }
    }
    .public-right {
      img {
        object-fit: cover;
        width: 100%;
      }
    }
  }
}
</style>