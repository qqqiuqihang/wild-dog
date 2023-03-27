<template>
  <el-button @click="handleClick">
    <slot>
      {{ message }}
    </slot>
  </el-button>
</template>

<script>
export default {
  name: "WdButton",
  props: {},
  data() {
    return {
      message: "Hello, world!",
    };
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
