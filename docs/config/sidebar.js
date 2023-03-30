module.exports = {
  "/components/": [
    {
      title: "基础组件", // 必要的
      children: [{ title: "按钮", path: "/components/button" }],
    },
  ],
  "/plugins/": [
    {
      title: "缓存",
      children: [
        { title: "WdCookie", path: "/plugins/WdCookie" },
        { title: "WdStorageLocal", path: "/plugins/WdStorageLocal" },
        { title: "WdStorageSession", path: "/plugins/WdStorageSession" },
      ],
    },
    {
      title: "生成uuid",
      children: [{ title: "WdGenerateUUID", path: "/plugins/WdGenerateUUID" }],
    },
  ],
};
