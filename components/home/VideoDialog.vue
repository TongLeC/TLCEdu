<template>
  <main class="video-display">
    <el-dialog
      class="display-dialog"
      :title="title"
      v-model="dialogVisible"
      @close="suspendVideo"
      :fullscreen="fullScreenDialog"
    >
      <iframe
        v-if="dialogVisible"
        id="player"
        class="video-row-item"
        style="border-radius: 15px"
        height="100%"
        width="100%"
        frameborder="0"
        :src="src + '?autoplay=1&rel=0'"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
      ></iframe>
    </el-dialog>
  </main>
</template>
<script>
export default {
  name: "videoDisplayDialog",
  data() {
    return {
      dialogVisible: false,
    };
  },
  props: {
    showFlag: Boolean,
    title: String,
    src: String,
    fullScreenDialog: Boolean,
  },
  methods: {
    suspendVideo() {
      this.$emit("closeVideoDisplay");
    },
  },
  watch: {
    showFlag(newVal) {
      this.dialogVisible = newVal;
    },
  },
};
</script>
<style>
.display-dialog .el-dialog__body {
  height: 680px;
}
.display-dialog .is-fullscreen .el-dialog__body {
  height: calc(100% - 54px);
}
</style>
