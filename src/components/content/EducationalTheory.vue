<template>
  <div class="educational-theory">
    <div class="home-container educational-theory-box row">
      <div class="educational-theory-title">
        {{ $t("msg.holisticEducationTheory") }}
      </div>
      <div class="theory-left col-sm-8 col-xs-12">
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
      <div class="theory-right col-sm-4 col-xs-12">
        <img src="../../../public/images/theory-child.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import { mapGetters } from "vuex";
import educationalTheoryJson from "../../../public/json/EducationalTheory.json";

export default {
  name: "EducationalTheory",
  data() {
    return {
      educationalTheoryJson,
      zhFaneducationalTheoryJson: {},
      zheducationalTheoryJson: educationalTheoryJson,
    };
  },
  methods: {
    getItem(item) {
      this.$router.push({
        path: "/LanguageLearningDetailTwo",
        query: {
          id: item.id,
        },
      });
      localStorage.setItem(
        "detail",
        JSON.stringify(this.educationalTheoryJson.educationalTheory)
      );
    },
  },
   mounted() {
    const { proxy } = getCurrentInstance();
    this.zhFaneducationalTheoryJson = proxy.$deepClone(educationalTheoryJson);
    if (this.$store.state.language == "zhFan") {
      this.educationalTheoryJson = this.zhFaneducationalTheoryJson;
    } else if (this.$store.state.language == "zh") {
      this.educationalTheoryJson = this.zheducationalTheoryJson;
    }
  },
  computed: {
    ...mapGetters(["getLanguage"]),
  },
  watch: {
    getLanguage() {
      if (this.$store.state.language == "zhFan") {
        this.educationalTheoryJson = this.zhFaneducationalTheoryJson;
      } else if (this.$store.state.language == "zh") {
        this.educationalTheoryJson = this.zheducationalTheoryJson;
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .educational-theory-box {
    padding: 2rem !important;
    .theory-title {
      width: 100% !important;
    }
    .theory-brief {
      display: none;
    }
  }
}
@media (min-width: 500px) and (max-width: 1280px) {
  .theory-title {
    width: 18rem !important;
  }
}

.educational-theory-box {
  padding: 4rem 0 4rem 5rem;
  .educational-theory-title {
    font-size: 2.5rem;
    font-family: "SourceSansPro-Regular", "HeiTi";
    font-weight: bold;
  }
  .theory-left {
    min-height: 500px;
    .theory-left-ul {
      padding: 1rem 2rem;
      .theory-list {
        .theory-list-router {
          width: 100%;
          display: flex;
          cursor: pointer;
          .theory-title,
          .theory-brief {
            font-size: 1.7rem;
            height: 3.7rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .theory-title {
            width: 17rem;
            border: 2px solid #ea4335;
            padding: 14px 15px;
          }
          .theory-brief {
            color: #a9a9a9;
            margin-left: 2rem;
            width: 49rem;
            padding: 16px 0;
          }
        }
        .theory-list-router:hover {
          transform: scale(1.05);
          transition: all 0.4s ease 0s;
        }
      }
    }
  }
  .theory-right {
    position: sticky;
    top: 3rem;
    img {
      transform: rotateY(180deg);
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>