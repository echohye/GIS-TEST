import vue from "@vitejs/plugin-vue";
import createAutoImport from "./auto-import";
import createSvgIcon from "./svg-icon";
import createCompression from "./compression";
import createSetupExtend from "./setup-extend";
import createProgress from "./build-progress";
import createComponents from "./components";
import createUnoCSS from "./unocss";

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue()];
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createSetupExtend());
  vitePlugins.push(createSvgIcon(isBuild));
  vitePlugins.push(createProgress());
  vitePlugins.push(createComponents());
  vitePlugins.push(createUnoCSS());
  isBuild && vitePlugins.push(...createCompression(viteEnv));
  return vitePlugins;
}
