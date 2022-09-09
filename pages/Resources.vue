<template>
  <div class="public-resources-box">
    <div class="public-resources home-container">
      <div class="other-page">
        <p class="other-page-title">{{ $t("msg.publicWelfareResources") }}</p>
      </div>
      <div class="public-resources-top">
        <div v-if="publicResourcesJson">
          <div
            class="resources-one"
            v-for="(item, index) in publicResourcesJson.resourceOne"
            :key="'one' + index"
          >
            <div class="big-title" style="font-size: 1.7rem">
              {{ $t(item.title) }}
            </div>
            <ul class="row">
              <li
                class="resources-list col-12 col-md-6"
                v-for="(detail, i) in item.detailLink"
                :key="i"
              >
                <a
                  :href="detail.linkAddress"
                  class="resources-list-detail"
                  target="blank"
                >
                  {{ i + 1 }}. {{ detail.linkTitle }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import publicResourcesJson from "@/assets/json/PublicResources.json";

export default {
  name: "PublicResources",
  data() {
    return {
      zhFanpublicResourcesJson: {},
      publicResourcesJson,
      zhpublicResourcesJson: publicResourcesJson,
    };
  },
  methods: {},
  mounted() {
    const { proxy } = getCurrentInstance();
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .public-resources {
    width: 90% !important;
  }
}
.public-resources {
  width: 75%;
  margin: 0 auto;
  position: relative;
  .public-resources-top {
    .resources-one {
      padding: 0;
      margin: 1rem 1.5rem;
      ul {
        background: #fff;
        border-radius: 15px;
        box-shadow: 2px 2px 10px $shadow-color;
        padding: 0;
        .resources-list {
          text-align: left;
          .resources-list-detail {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            width: 100%;
            padding: 0.7rem 1.5rem;
          }
          &:nth-child(4n + 2),
          &:nth-child(4n + 3) {
            background: $sub-color;
          }
        }
        .resources-list :hover {
          color: $main-color;
          transition: all 0.4s ease 0s;
        }
      }
    }
  }
}
</style>