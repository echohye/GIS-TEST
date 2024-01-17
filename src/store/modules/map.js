const useMapStore = defineStore("map", {
  state: () => ({
    lng: window.localStorage.getItem("longitude") ?? "113.4002",
    lat: window.localStorage.getItem("latitude") ?? "22.27984",
    zoom: window.localStorage.getItem("zoom") ?? "3.0"
  }),
  actions: {
    storeMapState(state) {
      this.lng = state.lng;
      this.lat = state.lat;
      this.zoom = state.zoom;
      window.localStorage.setItem("longitude", `${this.lng}`);
      window.localStorage.setItem("latitude", `${this.lat}`);
      window.localStorage.setItem("zoom", `${this.zoom}`);
    }
  },
  getters: {}
});

export default useMapStore;
