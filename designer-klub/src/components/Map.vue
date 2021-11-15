
<template>
  <l-map
    :center="center"
    :zoom="zoom"
    class="map"
    ref="map"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
  >
    <l-tile-layer :url="url"> </l-tile-layer>
    <shop v-for="marker in markers" :key="marker.id" :marker="marker"> </shop>
  </l-map>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';
import Shop from './Shop';
import 'leaflet/dist/leaflet.css';
export default {
  components: {
    LMap,
    LTileLayer,
    Shop,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [49.1193089, 6.1757156],
      zoom: 12,
      markers: [
        {
          id: 1,
          imageUrl: 'https://img.icons8.com/ios-glyphs/30/fa314a/plus.png',
          coordinates: [49.11491, 6.17881],
        },
        {
          id: 2,
          imageUrl: 'https://img.icons8.com/ios-glyphs/30/fa314a/plus.png',
          coordinates: [49.13329, 6.15437],
        },
        {
          id: 3,
          imageUrl: 'https://img.icons8.com/ios-glyphs/30/fa314a/plus.png',
          coordinates: [49.10216, 6.15885],
        },
        {
          id: 4,
          imageUrl: 'https://img.icons8.com/ios-glyphs/30/fa314a/plus.png',
          coordinates: [49.13601, 6.19963],
        },
        {
          id: 5,
          imageUrl: 'https://img.icons8.com/ios-glyphs/30/fa314a/plus.png',
          coordinates: [49.105563, 6.182234],
        },
      ],
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
  },
};
</script>

<style>
.map {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>