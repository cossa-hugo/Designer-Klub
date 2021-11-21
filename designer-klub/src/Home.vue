<template>
  <div>
    <row container class="" :gutter="2">
      <column class="menu" :md="2" :lg="1.5">
        DESIGNER<br />KLUB
        <hr />  
        <span v-for="entry in menu" :key="entry" @click="$router.push({ path: `mode` })">
         {{ _.capitalize(entry) }}<br />
        </span>
      </column>
      <column :md="9" :lg="10">
          <Map/>
      </column>
      <column class="about" :md="2" :lg="1.5">
       <div class="centered"> A PROPOS DE NOUS</div>
      </column>
      <column class="highlight" :md="9" :lg="9.7">
        <row container style="justify-content: space-between;" :gutter="2">
            <div class="highlight-container" :md="4" :lg="4" v-for="store in highlights" 
              :key="store.id" @click="displayStore(store.id)">
              <img src="./assets/store.jpg" alt="Snow" style="height: 25vh" />
              <div class="centered" style="color: white; font-size: 20px">{{ store.name }}</div>
          </div>
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
      menu: json.menu,
      highlights: json.highlights,
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
  height: 70vh;
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
