<template>
  <main>
    <div class="svg-course">
      <img src="../../public/images/tongle-mascot.png" alt="" />
      <p class="g-button-text" v-text="$t('msg.experienceCourses')"></p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.svg-course {
  width: 150px;
  position: relative;
  img {
    width: 100%;
  }
  .g-button-text {
    color: #fff;
    font-size: 20px;
    position: absolute;
    bottom: -5px;
    left: 38px;
  }
}
</style>