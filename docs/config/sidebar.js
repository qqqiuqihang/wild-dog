module.exports = {
  "/components/": [
    {
      title: "基础组件", // 必要的
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [{ title: "按钮", path: "/components/button" }],
    },
  ],
  "/plugins/": [
    {
      title: "缓存",
      children: [
        /* ... */
      ],
      initialOpenGroupIndex: -1, // 可选的, 默认值是 0
    },
  ],
};
