import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 使用异步函数也是可以的
export default ({ Vue, siteData }) => {
  // ...做一些其他的应用级别的优化
  Vue.use(ElementUI);
};
