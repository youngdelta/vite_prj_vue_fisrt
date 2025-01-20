<template>
  <div class="event" :class="{ show: isOpen }">
    <p>{{ text[eventTextNum] }}</p>
    <button @click="isOpen = false">X</button>
  </div>

</template>
<script>
export default {
  name: 'EventComponent',
  props: {
    text: String,
    eventTextNum: Number,
    isEventOpen: Boolean
  },
  mounted() {

  },
  unmounted() {
  },
  data() {
    return {
      isOpen: true
    }
  }
}
</script>
<style>
.event {
  background: #444;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  font-size: small;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  display: none;
}

.show {
  display: flex;

}

.event p {
  margin: 0;
}

.event button {
  margin: 0
}
</style>