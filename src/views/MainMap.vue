<template>
  <div class="w-100vw h-100vh">
    <router-view></router-view>
    <MapSelect></MapSelect>
  </div>
</template>
<script setup>
import MapSelect from "./MapSelect";
</script>
