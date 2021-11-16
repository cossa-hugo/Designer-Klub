<template>
  <div>
    <row container class="" :gutter="2">
      <column class="menu" :xs="12" :md="2" :lg="2">
        DESIGNER<br />KLUB
        <hr />
        MODE<br />
        <span v-for="store in stores" :key="store.id" @click="displayStore(store.id)">
          {{ store.name }}<br />
        </span>
      </column>
      <column class="col" :xs="12" :md="9" :lg="9">
          <Map
            style="
              height: 100%;
              width: 100%;
              margin-bottom: 10px;
              -webkit-filter: grayscale(100%);
              filter: grayscale(100%);
            "
          />
      </column>
      <column class="about" :xs="12" :md="2" :lg="2">
        A propos
      </column>
      <column class="col" :xs="12" :md="1" :lg="1">
        <row container class="" :gutter="2">
          <column
            class="col"
            :xs="12"
            :md="4"
            :lg="4"
            v-for="store in stores"
            :key="store.id"
          >
            <div class="card">
              <img
                @click="displayStore(store.id)"
                src="./assets/store.jpg"
                alt="Snow"
                style="width: 100%"
              />
              <div class="centered">{{ store.name }}</div>
            </div>
          </column>
        </row>
      </column>
    </row>
  </div>
</template>

<script>
import json from "./data.json";
import Map from './components/Map';

export default {
  name: "Home",
  data() {
    return {
      stores: json.stores,
    };
  },
  components: {
    Map,
  },
  methods: {
    displayStore(id) {
      this.$router.push({
        path: `store/${id}`
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.container {
  height: 100vh;
}
.centered {
  color: white;
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.menu {
  border: 3px solid black;
  padding: 10px 30px 10px 30px !important;
  margin: 0px 20px 0px 10px;
  height: 70vh;
}
.about{
  border: 3px solid black;
  padding: 10px 30px 10px 30px !important;
  margin: 10px 20px 0px 10px;
  height: 25vh;
}
</style>
