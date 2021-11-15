<template>
  <div>
    <row container class="container" :gutter="2">
      <column class="menu" :xs="12" :md="4" :lg="3">
        DESIGNER<br />KLUB
        <hr />
        MODE<br />
        <span v-for="store in stores" :key="store.id">
          {{ store.name }}<br />
        </span>
      </column>
      <column class="col" :xs="12" :md="4" :lg="9">
        <row container class="container" :gutter="2">
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
                @click="test(store.id)"
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

export default {
  name: "App",
  data() {
    return {
      stores: json.stores,
    };
  },
  methods: {
    test(id) {
      this.$router.push({
        path: "store",
        params: {
          id: id,
        },
      });
      console.log("test" + id);
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
  margin-top: 60px;
}
.col {
  /* background-color: red; */
  /* border: 1px solid #ccc; */
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
  border: 1px solid black;
  padding: 10px 30px 10px 30px !important;
}
</style>
