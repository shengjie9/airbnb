const path = require("path");
const CraCoLessPlugin = require("craco-less");

const reslove = (pathName) => path.resolve(__dirname, pathName);
module.exports = {
  //less
  plugins: [{ plugin: CraCoLessPlugin }],
  //别名配置
  webpack: {
    alias: {
      "@": reslove("src"),
      component: reslove("src"),
    },
  },
};
