<template>
  <main class="educational-practice home-container">
    <section class="other-page">
      <h1 class="other-page-title">{{ $t("msg.educationalPractice") }}</h1>
      <p class="other-page-slogan">{{ $t("msg.slogan[2]") }}</p>
    </section>
    <div
      class="educational-practice-top"
      v-for="(item, index) in educationalPracticeJson.educationalPracticeOne"
      :key="index"
    >
      <section class="practice-top-right">
        <h2 class="big-title">
          {{ $t(item.title) }}
        </h2>
        <ul class="row">
          <li
            class="practice-list col-sm-4 col-xs-12"
            v-for="(some, i) in item.detail"
            :key="i"
          >
            <div class="img-box">
              <img
                :src="getVideoId(some.videoUrl)"
                @click="
                  getVideo(index + '' + i, some.videoUrl, some.videoDetail)
                "
                style="object-fit: cover"
              />
              <div
                class="play-btn"
                @click="
                  getVideo(index + '' + i, some.videoUrl, some.videoDetail)
                "
              ></div>
              <p class="play-name">{{ some.videoDetail }}</p>
            </div>

            <!-- <iframe
              style="border-radius: 15px"
              :src="detailLink + '?autoplay=1&rel=0'"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> -->
          </li>
        </ul>
      </section>
    </div>
    <home-video-dialog
      class="videos-dialog"
      :showFlag="showFlag"
      :title="detailName"
      :src="detailLink"
      :fullScreenDialog="false"
      @closeVideoDisplay="closeVideoDisplay"
    ></home-video-dialog>
  </main>
</template>

<script setup>
useHead({
  title: "教育践谈",
  meta: [
    {
      name: "description",
      content: "My amazing Nuxt app",
    },
  ],
});
// const { data: educationalPracticeJson } = await useFetch(
//   "/api/json/EducationalPractice"
// );
import EducationalPractice from "/assets/json/EducationalPractice.json";
const educationalPracticeJson = ref(EducationalPractice);

const showFlag = ref(false);
const detailLink = ref("");
const detailName = ref("");
const instance = getCurrentInstance();
const getVideo = function (index, link, name) {
  showFlag.value = true;
  detailLink.value = link;
  detailName.value = name;
  instance.proxy.$forceUpdate();
};
const closeVideoDisplay = function () {
  showFlag.value = false;
};
const getVideoId = function (url) {
  const arr = url.split("/");
  return `//i.ytimg.com/vi/${arr[arr.length - 1]}/hqdefault.jpg`;
};
</script>
<script>
export default {
  name: "EducationalPractice",
  data() {
    return {
      videos: {},
      showFlag: false,
      detailLink: "",
      detailName: "",
      isFullScreen: false,
    };
  },
  mounted() {},
};
</script>

<style>
.videos-dialog .el-dialog__header {
  text-align: center;
}
.videos-dialog .el-dialog__title {
  color: white;
}
.videos-dialog .el-dialog {
  width: 75%;
  border-radius: 15px;
  background: black;
}
.videos-dialog .el-dialog.is-fullscreen {
  border-radius: 0;
  background: white;
  width: 100% !important;
}
.videos-dialog .is-fullscreen .el-dialog__title {
  color: #333 !important;
}
</style>
<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .educational-practice {
    width: 90% !important;
  }
}
.educational-practice {
  width: 75%;
  margin: 70px auto;
  .educational-practice-title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .educational-practice-top {
    margin: 2rem 0;
    position: relative;
    .practice-top-right {
      ul {
        padding: 0;
        .practice-list {
          margin: 10px 0;
          height: 100%;
          position: relative;
          .img-box {
            // background: black;
            min-height: 220px;
            height: 100%;
            width: 100%;
            img {
              border-radius: 15px;
              min-height: 220px;
              height: 100%;
              width: 100%;
              cursor: pointer;
            }
          }
          .play-btn {
            height: 72px;
            width: 72px;
            left: 50%;
            top: 50%;
            margin-left: -36px;
            margin-top: -36px;
            position: absolute;
            background: url("/images/play.png") no-repeat;
            cursor: pointer;
          }
          .play-name {
            width: 100%;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 5px 0;
          }
          iframe {
            width: 100%;
            height: 240px;
          }
        }
      }
    }
  }
}
</style>