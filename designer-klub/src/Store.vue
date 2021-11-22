<template>
  <div>
    <row container class="" :gutter="2">
      <column class="menu" :xs="12" :md="2" :lg="1.5">
        DESIGNER<br />KLUB
        <hr /> 
        Mode<br /><br />
        <span v-for="store in stores" :key="store.id" @click="displayStore(store.id)">
         {{ store.name }}<br />
        </span>
      </column>
      <column class="highlight" :md="9" :lg="9.7">
        <row container style="justify-content: space-between;" :gutter="2">
            <div class="highlight-container" :md="4" :lg="4" v-for="store in highlights" 
              :key="store.id" @click="displayStore(store.id)">
              <img src="./assets/store.jpg" alt="Snow" style="height: 25vh" />
              <div class="centered" style="color: white; font-size: 20px">{{ store.name }}</div>
          </div>
        </row>
        <row>
          <column>
           Identité
          </column>
           <column>
           Ethique
          </column>
           <column>
           Contact
          </column>
        </row>
        <row>
        </row>
      </column>
    </row>
  </div>
</template>

<script>
import json from "./data.json";

export default {
  name: "Store",
  data() {
    return {
      stores: json.stores,
      data: null,
    };
  },
  mounted() {
    console.log(json.stores);
    this._.find(json.stores, (item) => {
      if (item.id == this.$route.params.id) {
        this.data = item;
      }
    });
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
  font-weight: bold;
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
.about{
  border: 3px solid black;
  padding: 50px 30px 10px 30px !important;
  margin: 10px 20px 0px 10px;
  height: 25vh;
}
.highlight{
  overflow: hidden;
  justify-content: space-between;
  border: 3px solid black;
  margin-top: 10px;
  height: 25vh;
}
.highlight-container {
  position: relative;
  text-align: center;
}
</style>
