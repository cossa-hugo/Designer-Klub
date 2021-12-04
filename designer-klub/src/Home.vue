<template>
  <div>
    <row container class="page">
      <column class="col menu" :md="2.2" :lg="2">
       <p>
          <img src="./assets/logo.png" class="logo" style="margin-bottom: 20px;"><br/>
           <span><b>DESIGNER</b><br />KLUB</span>
        </p>
        <hr />  
        <p style="cursor: default"><a href="#mode">Mode</a></p>
        <p style="cursor: not-allowed; color: lightgrey">Events</p>
        <p style="cursor: not-allowed; color: lightgrey">Tattoo</p>
        <p style="cursor: not-allowed; color: lightgrey">Design</p>
        <p style="cursor: not-allowed; color: lightgrey">Musique</p>
      </column>
      <column class="col" sytle="overflow: hidden" :md="9.8" :lg="9.8">
          <Map/>
      </column>
      <column class="col about" :md="2.2" :lg="2">
        <div>
          <div>LA SELECTION ></div><br/><br/><br/>
          <div>NOTRE<br>PHILOSOPHIE<br>v</div>
        </div>
      </column>
      <column class="col highlight" :md="9.8" :lg="9.8">
        <row container style="justify-content: space-between;" :gutter="2">
            <div class="highlight-container" :md="4" :lg="4" v-for="store in highlights" 
              :key="store.id" @click="displayStore(store.id)">
              <img src="./assets/store.jpg" />
              <div>{{ store.name }}</div>
          </div>
        </row>
      </column>
    </row>
    <Mode id="mode"></Mode>
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

<style>
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
.menu a {
  text-decoration: none;
  color: black
}
.logo {
  width: 40%;
  height: auto;
}
.about{
  border: 3px solid black;
  font-size: 20px;
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
  margin-bottom: 25px;
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
