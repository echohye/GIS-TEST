<template>
  <div id="mapView" class="w-full h-full"></div>
</template>

<script setup>
import G from "@/config";
import useMapStore from "@/store/modules/map";
import mapboxgl from "mapbox-gl";
import "mapbox-gl-leaflet";
const mapStore = useMapStore();
onMounted(() => {
  initLayer();
});
const initLayer = () => {
  let map = (G.map = L.map("mapView", {
    center: [mapStore.lat, mapStore.lng],
    zoom: mapStore.zoom,
    maxZoom: 18,
    renderer: new L.Canvas(),
    minZoom: 2,
    crs: L.CRS.EPSG3857,
    doubleClickZoom: false,
    maxBounds: L.latLngBounds([90, -2440.5], [-90, 2440.5]),
    attributionControl: false
  }));
  L.control.scale().addTo(map);
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
  let gl = L.mapboxGL(
    {
      accessToken:
        "pk.eyJ1IjoiZWNob2h5ZSIsImEiOiJjbGNuM3hmeXo2a2FjM3Fsa2JpM2praGp4In0.olt3jKXnWYuYiDmiNvvndg",
      style: "mapbox://styles/mapbox/streets-v12",
      projection: "mercator"
      // interactive: true,
    },
    mapboxgl
  ).addTo(map);
  let mapgl = gl._glMap;
};
</script>

<style lang="scss" scoped></style>
