import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default function createComponents() {
  return Components({
    // 要搜索组件的目录的相对路径
    dirs: ["src/components"],
    // 组件的有效文件扩展名
    extensions: ["vue", "md"],
    // 搜索子目录
    deep: true,
    include: [/\.vue$/, /\.vue\?vue/],
    // 生成自定义 `auto-components.d.js` 全局声明
    dts: false,
    // 自定义组件的解析器
    resolvers: [ElementPlusResolver()],
    exclude: [/[\\/]node_modules[\\/]/]
  });
}
