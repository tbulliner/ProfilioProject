<template>
  <div class="landing-display">
    <aside>
      <h1>Tia Bulliner</h1>
      <h3>Full Stack Software Engineer</h3>
    </aside>
    <div class="router-div">
      <RouterComponent />
    </div>
  </div>
</template>

<script>
import RouterComponent from "@/components/RouterComponent.vue";
export default {
  components: { RouterComponent },
};
</script>

<style scoped>
.landing-display {
  color: black;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
}
.router-div {
  align-self: center;
}

aside {
  align-self: center;
}
</style>
