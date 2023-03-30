<template>
  <div>
    <div>
      <el-input v-model="value"> </el-input>
      <el-button @click="setLocal">保存</el-button>
    </div>
    <div>
      <el-button @click="getLocal">获取</el-button>
      <span>{{ message }} </span>
    </div>
  </div>
</template>

<script>
import { WdCookie, WdStorageLocal, WdStorageSession } from "WildDog";

export default {
  data() {
    return {
      value: "",
      message: null,
    };
  },
  methods: {
    setLocal() {
      console.log(this.value);
      console.log("WdStorageLocal", WdStorageLocal);
      WdStorageLocal.setItem("keyValue", this.value);
    },
    getLocal() {
      this.message = WdStorageLocal.getItem("keyValue");
    },
  },
};
</script>

<style lang="scss" scoped></style>
