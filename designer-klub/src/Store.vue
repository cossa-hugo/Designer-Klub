<template>
  <div>
    <h1>{{ data.name }}</h1>
    Image: {{ data.image }}<br/>
    Store id: {{ data.id }}
  </div>
</template>

<script>
import json from "./data.json";

export default {
  name: "Store",
  data() {
    return {
      message: "Hello Vue!",
      data: null,
    };
  },
  methods: {
    increment() {
      this.message += "!";
    },
    decrement() {
      this.message = this.message.slice(0, -1);
    },
  },
  mounted() {
    console.log(json.stores);
    this._.find(json.stores, (item) => {
      if (item.id == this.$route.params.id) {
        this.data = item;
      }
    });
  },
};
</script>

<style></style>
