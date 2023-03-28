<template>
  <div>
    {{ name }}
    <WdButton></WdButton>
  </div>
</template>

<script>
import { WdButton } from "WildDog";

export default {
  name: "wild-dog-button",
  components: { WdButton },
  data() {
    return {
      name: "My name is {{ name }}",
    };
  },
};
</script>

<style lang="scss" scoped></style>
