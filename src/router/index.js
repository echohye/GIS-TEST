import { createWebHistory, createRouter } from "vue-router";

// 公共路由
export const constantRoutes = [
  {
    path: "",
    component: () => import("@/views/MainMap"),
    redirect: window.localStorage.getItem("mapview") ?? "mapboxgl",
    name: "index",
    children: [
      {
        name: "maplibregl",
        path: "/Maplibregl",
        component: () => import("@/views/MapView/Maplibregl")
      },
      {
        name: "mapboxgl",
        path: "/Mapboxgl",
        component: () => import("@/views/MapView/Mapboxgl")
      },
      {
        name: "leaflet",
        path: "/Leaflet",
        component: () => import("@/views/MapView/Leaflet")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  // https://github.com/vuejs/vue-router/blob/dev/docs/zh/guide/advanced/scroll-behavior.md
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
