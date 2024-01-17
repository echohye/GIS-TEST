import router from "./router";
import { useNProgress } from "@/hooks/useNProgress";
const { start, done } = useNProgress();

// 路由不重定向白名单
const whiteList = ["/login"];

// 路由加载前
router.beforeEach(async (to, from, next) => {
  start();
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    next();
  }
});

router.afterEach((to) => {
  done();
});
