<template>
  <navbar />
  <RouterView />
</template>

<script>

import { RouterView } from "vue-router";
import Navbar from "@/components/movies/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar: Navbar,
  }
};
</script>

<style></style>
