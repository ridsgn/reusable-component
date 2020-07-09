<template>
  <div id="app">
    <div
      class="container mx-auto grid grid-cols-none grid-flow-row-dense sm:grid-cols-2 xl:grid-cols-4 gap-5"
    >
      <VendorCard v-for="vendor in vendors" :key="vendor.id" :vendor="vendor" />
    </div>
  </div>
</template>

<script>
import VendorCard from "./components/VendorCard";

export default {
  name: "App",
  components: {
    VendorCard
  },
  data() {
    return {
      vendors: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("https://my-json-server.typicode.com/rizuki96/jsontest/vendors")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.vendors = data;
        });
    }
  }
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
</style>
