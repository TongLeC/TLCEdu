<template>
  <div class="educational-practice">
    <div class="educational-practice-top">
      <div class="practice-top-left">
        <img src="../../assets/practice-img.png" alt="" />
      </div>
      <div class="practice-top-right">
        <h3 class="practice-top-title">同乐讲座</h3>
        <ul>
          <li
            class="practice-list"
            v-for="(item, index) in educationalPracticeJson.educationalPracticeOne"
            :key="index"
          >
            <a class="practice-list-detail" :href="item.videoUrl">
              <img :src="item.videoImg" :alt="item.videoDetail" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="educational-practice-bottom">
      <div class="practice-bottom-right">
        <img src="../../assets/img-bottom.png" alt="" />
      </div>
      <div class="practice-bottom-left">
        <h3 class="practice-top-title">教育践谈</h3>
        <ul class="practice-bottom-left-ul">
          <li 
            class="practice-list" 
            v-for="(item, index) in educationalPracticeJson.educationalPracticeTwo"
            :key="index">
            <a class="practice-list-detail" :href="item.videoUrl">
              <img :src="item.videoImg" :alt="item.videoDetail" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import educationalPracticeJson from "../../../public/json/EducationalPractice.json";

export default {
  name: "EducationalPractice",
  data() {
    return {
      educationalPracticeJson,
    };
  },
  mounted() {
    console.log(this.educationalPracticeJson.educationalPracticeOne.length)
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 360px) {
  .practice-list {
    flex: 0 0 90% !important;
  }
  ul {
    padding-left: 1.5rem !important;
  }
}
@media (min-width: 360px) and (max-width: 530px) {
  .practice-list {
    flex: 0 0 40% !important;
  }
}
@media (min-width: 530px) and (max-width: 760px) {
  .practice-list {
    flex: 0 0 27% !important;
  }
}
@media (min-width: 760px) and (max-width: 980px) {
  .practice-list {
    flex: 0 0 29% !important;
  }
}
@media screen and (max-width: 1100px) {
  .practice-top-left {
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .practice-top-right,
  .practice-bottom-left {
    width: 90% !important;
    margin-right: 10px !important;
  }
  .practice-bottom-left {
    margin-left: 2rem !important;
  }
}
@media (min-width: 1100px) and (max-width: 1200px) {
  .practice-list {
    flex: 0 0 28% !important;
  }
}
@media (min-width: 1200px) and (max-width: 1550px) {
  .practice-list {
    flex: 0 0 29% !important;
  }
}

.educational-practice {
  .educational-practice-top {
    display: flex;
    position: relative;
    .practice-top-left {
      img {
        float: left;
        object-fit: cover;
        width: 30rem;
        opacity: 0.55;
        transform: rotateY(180deg);
      }
    }
    .practice-top-right {
      width: 57%;
      background: white;
      box-shadow: 0 0 12px #d1d1d1;
      z-index: 999;
      margin: 3rem 30px 1.5rem 2rem;
      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        max-height: 350px;
        overflow-y: auto;
        .practice-list {
          margin: 10px 28px 20px 0;
          border: 1px solid #a61b29;
          flex: 0 0 30%;
          .practice-list-detail {
            display: block;
            width: 100%;
            object-fit: cover;
            img {
              width: 100%;
            }
          }
        }
      }
      .practice-top-title {
        font-size: 1.9rem;
        color: #a61b29;
        margin: 2rem 0 1.3rem 0;
      }
    }
  }
  .educational-practice-bottom {
    position: relative;
    .practice-bottom-left {
      width: 57%;
      background: white;
      box-shadow: 0 0 12px #d1d1d1;
      margin: 4rem 0 2rem 8rem;
      padding: 0.7rem 0 2rem 0;
      position: relative;
      z-index: 100;
      .practice-bottom-left-ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        max-height: 350px;
        overflow-y: auto;
        .practice-list {
          margin: 10px 28px 20px 0;
          border: 1px solid #a61b29;
          flex: 0 0 30%;
          .practice-list-detail {
            display: block;
            width: 100%;
            object-fit: cover;
            img {
              width: 100%;
            }
          }
        }
      }
      .practice-top-title {
        font-size: 1.9rem;
        color: #a61b29;
        margin: 2rem 0 1.3rem 0;
      }
    }
    .practice-bottom-right {
      img {
        transform: rotateY(180deg);
        position: absolute;
        right: 0;
        object-fit: cover;
        width: 24rem;
        opacity: 0.55;
      }
    }
  }
}
</style>