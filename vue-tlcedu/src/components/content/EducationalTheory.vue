<template>
  <div class="educational-theory">
    <div class="theory-right">
      <img src="../../../public/images/theory-child.png" alt="" />
    </div>
    <div class="theory-left">
      <ul class="theory-left-ul">
        <li class="theory-list">
          <div
            class="theory-list-router"
            v-for="(item, index) in educationalTheoryJson.educationalTheory"
            :key="index"
            @click="getItem(item)"
          >
            <h3 class="theory-title">{{ item.title }}</h3>
            <h3 class="theory-brief">{{ item.brief }}</h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import educationalTheoryJson from "../../../public/json/EducationalTheory.json";

export default {
  name: "EducationalTheory",
  data() {
    return {
      educationalTheoryJson,
    };
  },
  methods: {
    getItem(item) {
      this.$router.push({
        path: "/languageLearningDetail",
        query: {
          id: item.id
        }
      });
      localStorage.setItem('item', JSON.stringify(item))
    },
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 500px) {
  .theory-title {
    width: 18rem !important;
  }
  .theory-brief {
    display: none;
  }
}
@media (min-width: 500px) and (max-width: 1280px) {
  .theory-title {
    width: 18rem !important;
  }
}

.educational-theory {
  position: relative;
  .theory-left {
    width: 57%;
    background: white;
    box-shadow: 0 0 12px #d1d1d1;
    margin: 4rem 0 2rem 8rem;
    min-height: 500px;
    position: relative;
    z-index: 100;
    .theory-left-ul {
      padding: 1rem 2rem;
      .theory-list {
        .theory-list-router {
          width: 100%;
          display: flex;
          cursor: pointer;
          .theory-title,
          .theory-brief {
            font-size: 1.4rem;
            height: 3.7rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .theory-title {
            width: 12rem;
            border: 2px solid #a61b29;
            padding: 14px 15px;
          }
          .theory-brief {
            color: #a9a9a9;
            margin-left: 2rem;
            width: 49rem;
            padding: 16px 0;
          }
        }
      }
    }
  }
  .theory-right {
    img {
      transform: rotateY(180deg);
      position: absolute;
      right: 0;
      object-fit: cover;
      width: 38rem;
    }
  }
}
</style>