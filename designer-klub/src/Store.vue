<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    Store {{ id }}
  </div>
</template>

<script>
export default {
  name: "Store",
  data() {
    return {
      message: "Hello Vue!",
      id: null,
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
    console.log(this.$route.params.id);
    this.id = this.$route.params.id;
  },
};
</script>

<style></style>
