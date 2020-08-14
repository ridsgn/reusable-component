<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <RatingStar v-bind="config" />
    <div
      class="container mx-auto grid justify-center grid-cols-none sm:grid-cols-card-2 lg:grid-cols-card-3 xl:grid-cols-card-4 gap-5 mt-20"
    >
      <VendorCard v-for="vendor in vendors" :key="vendor.id" :vendor="vendor" />
    </div>
  </div>
</template>

<script>
import VendorCard from "./components/VendorCard";
import HeaderComponent from "./components/HeaderComponent";
import RatingStar from "./components/RatingStar";

export default {
  name: "App",
  components: {
    VendorCard,
    HeaderComponent,
    RatingStar
  },
  data() {
    return {
      vendors: [],
      config: {
        rating: 3.4,
        isIndicatorActive: false,
        starStyle: {
          fullStarColor: "#FBFF4A",
          emptyStarColor: "#a2a2a2",
          starWidth: 30,
          starHeight: 30
        }
      }
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
          // console.log(data);
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
}
</style>
