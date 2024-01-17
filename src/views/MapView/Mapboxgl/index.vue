<template>
  <div id="mapView" class="w-full h-full"></div>
</template>

<script setup>
import G from "@/config";
import useMapStore from "@/store/modules/map";
import mapboxgl from "mapbox-gl";
const mapStore = useMapStore();
onMounted(() => {
  initLayer();
});
const initLayer = () => {
  let map = (G.map = new mapboxgl.Map({
    container: "mapView",
    accessToken:
      "pk.eyJ1IjoiZWNob2h5ZSIsImEiOiJjbGNuM3hmeXo2a2FjM3Fsa2JpM2praGp4In0.olt3jKXnWYuYiDmiNvvndg",
    style: "mapbox://styles/mapbox/streets-v12",
    projection: "mercator",
    center: [mapStore.lng, mapStore.lat],
    attributionControl: false,
    zoom: mapStore.zoom,
    minZoom: 2,
    maxZoom: 18
    // touchRotate:false,
    // dragRotate:false
  }));
  map.addControl(new mapboxgl.FullscreenControl());
  map.addControl(
    new mapboxgl.NavigationControl({
      visualizePitch: true
    }),
    "top-left"
  );
  // 添加事件
  map.on("moveend", (e) => {
    let zoom = e.target.getZoom();
    let center = e.target.getCenter();
    mapStore.storeMapState({
      lat: center.lat,
      lng: center.lng,
      zoom
    });
  });
};
</script>

<style lang="scss" scoped></style>
