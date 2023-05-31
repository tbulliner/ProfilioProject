<template>
  <div id="nav-div">
    <nav>
      <router-link class="nav-link" :to="{ name: 'landingPage' }"
        >/Home</router-link
      ><br />
      <router-link class="nav-link" :to="{ name: 'aboutPage' }"
        >/About</router-link
      ><br />
      <router-link class="nav-link" :to="{ name: 'projectsPage' }"
        >/Projects</router-link
      ><br />
    </nav>
  </div>
</template>

<script>
export default {
  name: "RouterComponent",

  data() {
    return {};
  },
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: xx-large;
  text-align: right;
}
.nav-link {
  color: rgb(3, 130, 10);
  text-decoration: none;
}

.nav-link:hover {
  color: rgb(21, 213, 0);
  text-decoration: underline;
}
.nav-link.router-link-exact-active:hover {
  text-decoration: underline;
}
.nav-link.router-link-exact-active {
  color: white;
  text-decoration: none;
}
</style>
