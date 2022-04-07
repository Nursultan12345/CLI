<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <MainSite></MainSite>-->
    <AppSite></AppSite>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import MainSite from "./components/MainSite.vue";
import AppSite from "./components/AppSite.vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // MainSite,
    AppSite,
  },
};
</script>
   
<style>
/* #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
} */
</style>
