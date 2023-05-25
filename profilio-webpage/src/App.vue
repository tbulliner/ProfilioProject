<template>
  <body>
    <LandingPage />
    <nav>
      <router-link to="{ name: 'landingPage' }">Home</router-link>||
      <router-link to="{ name: 'aboutPage' }">About</router-link>||
    </nav>
  </body>
</template>

<script>
import LandingPage from "./views/LandingPage.vue";

export default {
  name: "App",
  components: {
    LandingPage,
  },
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
