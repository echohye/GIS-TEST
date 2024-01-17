<template>
  <div id="mapView" class="w-full h-full"></div>
</template>

<script setup>
import G from "@/config";
import useMapStore from "@/store/modules/map";
import maplibregl from "maplibre-gl";
const mapStore = useMapStore();
onMounted(() => {
  initMap();
});

const initMap = () => {
  let map = (G.map = new maplibregl.Map({
    container: "mapView",
    style: "https://demotiles.maplibre.org/style.json", // stylesheet location
    center: [mapStore.lng, mapStore.lat],
    zoom: mapStore.zoom
  }));
  map.addControl(new maplibregl.FullscreenControl());
  map.addControl(
    new maplibregl.NavigationControl({
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
