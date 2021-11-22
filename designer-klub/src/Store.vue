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
      <column class="" :md="9" :lg="9.7">
        <row container style="" :gutter="2">
          <column class="banner" :xs="12" :md="12" :lg="12">
            <img src="./assets/store.jpg" alt="Snow" style="height: 100vh" />
            <div class="centered" style="color: white; font-size: 30px">{{ data.name }}</div>
          </column>
        </row>
        <row style="flex-wrap: nowrap;" :gutter="2">
          <column class="box">
           Identité
          </column>
           <column class="box">
           Ethique
          </column>
           <column class="box">
           Contact
          </column>
        </row>
        <row style="flex-wrap: nowrap;" :gutter="2">
          <column class="item">
           <img src="./assets/store.jpg" alt="Snow" style="width: 24vh" />
          </column>
           <column class="item">
           <img src="./assets/store.jpg" alt="Snow" style="width: 24vh" />
          </column>
           <column class="item">
          <img src="./assets/store.jpg" alt="Snow" style="width: 24vh" />
          </column>
          <column class="item">
           <img src="./assets/store.jpg" alt="Snow" style="width: 24vh" />
          </column>
           <column class="item">
           <img src="./assets/store.jpg" alt="Snow" style="width: 24vh" />
          </column>
           <column class="item">
          <img src="./assets/store.jpg" alt="Snow" style="width: 24vh" />
          </column>
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
    this._.find(json.stores, (item) => {
      if (item.id == this.$route.params.id) {
        this.data = item;
      }
    });
  },
  methods: {
    displayStore(id) {
      this.$router.push({
        path: `/store/${id}`
      });
    },
  },
  watch: { 
     '$route.params.id': {
        handler: function(id) {
           this._.find(json.stores, (item) => {
            if (item.id == id) {
              this.data = item;
            }
          });
        },
        deep: true,
        immediate: true
      }
}
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
.banner{
  justify-content: center;
  border: 3px solid black;
  margin-top: 10px;
  height: 40vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  margin: 5px 15px 20px 15px;
}
.box {
  border: 3px solid black;
  margin: 5px 15px 20px 15px;
  height: 30vh;
}
.item {
  border: 3px solid black;
  margin: 15px;
  height: 19vh;
  overflow: hidden;
  /* width: 15vh !important; */
}
</style>
