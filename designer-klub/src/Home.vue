<template>
  <div>
    <row container class="page">
      <column class="col menu" :md="2" :lg="1.5">
       <p @click="$router.push({ path: `/` })">
          <img src="./assets/logo.png" style="margin-bottom: 20px;">
           <span><b>DESIGNER</b><br />KLUB</span>
        </p>
        <hr />  
        <p style="cursor: default" @click="$router.push({ path: 'mode' })">Mode</p>
        <p style="cursor: not-allowed; color: lightgrey">Events</p>
        <p style="cursor: not-allowed; color: lightgrey">Tattoo</p>
        <p style="cursor: not-allowed; color: lightgrey">Design</p>
        <p style="cursor: not-allowed; color: lightgrey">Musique</p>
      </column>
      <column class="col" sytle="overflow: hidden" :md="9" :lg="10">
          <Map/>
      </column>
      <column class="col about" :md="2" :lg="1.5">
        <div>
          <div>LA SELECTION ></div><br/><br/><br/>
          <div>NOTRE<br>PHILOSOPHIE<br>v</div>
        </div>
      </column>
      <column class="col highlight" :md="9" :lg="10">
        <row container style="justify-content: space-between;" :gutter="2">
            <div class="highlight-container" :md="4" :lg="4" v-for="store in highlights" 
              :key="store.id" @click="displayStore(store.id)">
              <img src="./assets/store.jpg" />
              <div>{{ store.name }}</div>
          </div>
        </row>
      </column>
    </row>
    <!-- <Mode></Mode> -->
  </div>
</template>

<script>
import json from "./data.json";
import Map from './components/Map';
import Mode from "./Mode.vue";

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
    Mode
  },
  methods: {
    displayStore(id) {
      this.$router.push({
        path: `store/${id}`
      });
    },
  }
};
</script>

<style scoped>
.page {
  justify-content: center;
}
.col {
  margin: 5px;
}
.menu {
  border: 3px solid black;
  padding: 10px 30px 10px 30px !important;
  height: 70vh;
}
.menu p {
  font-size: 25px;
}
.about{
  border: 3px solid black;
  font-size: 25px;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.highlight{
  overflow: hidden;
  justify-content: space-between;
  border: 3px solid black;
  height: 25vh;
}
.highlight-container {
  position: relative;
  text-align: center;
}
.highlight-container img {
    position:relative;
    height: 25vh
}
.highlight-container div {
    width:100%;    
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    flex-direction: column;
    /* align-items: center; */
    display: flex;
    color: white;
    font-size: 30px;
}
</style>
