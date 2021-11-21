<template>
  <div>
    <row container class="" :gutter="2">
      <column class="menu" :xs="12" :md="2" :lg="1.5">
        DESIGNER<br />KLUB
        <hr /> 
        MODE<br /><br />
        <span v-for="store in stores" :key="store.id" @click="displayStore(store.id)">
         {{ store.name }}<br />
        </span>
      </column>
       <column class="frame" :md="9" :lg="9.7">
        <row container class="" style="justify-content: space-between;" :gutter="2">
            <div class="highlight-container" :md="4" :lg="4" v-for="store in stores" 
              :key="store.id" @click="displayStore(store.id)">
              <img src="./assets/store.jpg" alt="Snow" />
              <div class="centered" style="color: white; font-size: 20px">{{ store.name }}</div>
          </div>
        </row>
      </column>
    </row>
  </div>
</template>

<script>
import json from "./data.json";

export default {
  name: "Mode",
  data() {
    return {
      menu: json.menu,
      stores: json.stores,
    };
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

<style scoped>
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
  height: 98vh;
}
.highlight-container {
  margin-bottom: 5px;
  position: relative;
  text-align: center;
  /* width: 33%; */
}
.frame {
  border: 3px solid black;
  height: 98vh;

  display: flex;
  flex-wrap: wrap;

  align-content: space-between;
  align-items: center;
  justify-content: center;
}
</style>
