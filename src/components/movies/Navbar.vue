<template>
  <nav class="navbar">
    <RouterLink to="/index">Home</RouterLink>
    <RouterLink to="/movie">Movie</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
  name: "NavbarComponent",
};
</script>
<style>
.navbar {
  /* display: flex; */
  background: #000;
  padding: 20px;
  text-align: center;
}



.navbar a {
  color: #fff;
  text-decoration: none;
  padding: 1em;
}

.navbar a:hover {
  /* text-decoration: underline; */
  color: #ff7b00;
  /* font-weight: 400; */
}
</style>
