<template>
  <div class="fixed top-0 left-0 ml-50px mt-2 z-999">
    <el-select @change="changeMapView" v-model="value" size="large" style="width: 200px">
      <el-option v-for="item in options" :key="item.name" :label="item.name" :value="item.name" />
    </el-select>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { constantRoutes } from "@/router";
const value = ref(window.localStorage.getItem("mapview") ?? "mapboxgl");
const options = computed(() => constantRoutes.find((e) => e.name == "index").children);
const router = useRouter();
const changeMapView = (view) => {
  window.localStorage.setItem("mapview", view);
  router.push({ name: view });
};
</script>
