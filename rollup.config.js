import vue from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";

export default {
  input: "package/wild-dog/index.js",
  output: [
    {
      name: "WildDog",
      file: "lib/wild-dog.umd.js",
      format: "umd",
      globals: {
        vue: "Vue",
      },
    },
    {
      file: "lib/wild-dog.esm.js",
      format: "es",
    },
  ],
  plugins: [vue(), terser()],
  external: ["vue"],
};
