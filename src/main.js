import { createApp } from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import directive from "./directive"; // directive
import Logger from "@/utils/Logger";
import plugins from "./plugins"; // plugins
import "./permission";
import "@/assets/styles/index.scss"; // global css
import "virtual:uno.css";
// svg图标
import "virtual:svg-icons-register";
import SvgIcon from "@/components/SvgIcon";
import elementIcons from "@/components/SvgIcon/svgicon";
import "leaflet";

const setupAll = async () => {
  const app = createApp(App);
  app.use(router);
  app.use(store);
  app.use(plugins);
  app.use(elementIcons);
  app.component("svg-icon", SvgIcon);
  directive(app);

  await router.isReady();
  app.mount("#app");
};
setupAll();
Logger.prettyPrimary(`欢迎使用`, import.meta.env.VITE_APP_TITLE);
