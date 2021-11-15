<template>
  <div id="app">
    <Map
      style="
        width: 60%;
        height: 30%;
        margin-left: 400px;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      "
    />
  </div>
</template>
<script>
import Map from './components/Map';
export default {
  name: 'App',
  components: {
    Map,
  },
};
</script>
