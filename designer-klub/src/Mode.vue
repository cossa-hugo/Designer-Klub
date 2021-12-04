<template>
  <div>
    <row container class="page">
      <column class="col menu" :xs="12" :md="2.2" :lg="2">
        <p><img src="./assets/logo.png" class="logo" @click="$router.push({ path: `/` })"></p><hr />   
        
        <p>
          Mode<br>  

          <span v-for="(value, letter) in menuItems" :key="letter">
            <br />{{ letter }}<br />
            <span v-for="store in value" :key="store.id" @click="displayStore(store.id)">
              {{ store.name }}<br />
            </span>
          </span>
          
        </p>
      </column>
       <column class="col frame"  :md="9.8" :lg="9.8">
        <row container style="justify-content: space-between;" :gutter="2">
            <div class="highlight-container" :md="4" :lg="4" v-for="store in stores" :key="store.id" @click="displayStore(store.id)">
              <img src="./assets/store.jpg" />
              <div>{{ store.name }}</div>
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
      stores: json.stores
    };
  },
  methods: {
    displayStore(id) {
      this.$router.push({
        path: `store/${id}`
      });
    },
  },
  computed: {
    menuItems() {
      return this._.reduce(json.stores,function(result,value){
      (result[value.name[0]]||(result[value.name[0]]=[])).push(value)
      return result;
      },{});
    }
  }
};
</script>

<style scoped>
.menu {
  height: 98vh;
}
.highlight-container img {
  border: 2px solid black;
}
.frame {
  /* border: 3px solid black; */
  /* height: 98vh; */
/* 
  display: flex;
  flex-wrap: wrap;

  align-content: space-between;
  align-items: center;
  justify-content: center; */
}
</style>
