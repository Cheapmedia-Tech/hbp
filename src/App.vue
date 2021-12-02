<template>
  <div id="app">
    <Landing />
    <Footer />
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Landing,
    Footer,
  },
};
</script>

<style src="./assets/css/tailwind.css"></style>
