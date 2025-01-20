<template lang="">

  <Event :text='text' :eventTextNum="eventTextNum" :isEventOpen="isEventOpen" />
  <searchBar :data="data_temp" @searchMovie="onSearchMovie($event)" />
  <p>
    <button @click="this.data_temp = [...this.data]">전체보기</button>
  </p>
  <Movies :data="data_temp" @openModal="openModal" @increaseLike="increaseLike($event)" />

  <!-- modal -->
  <Modal :isModal="isModal" :selectedData="selectedData" :data="data_temp" @closeModal="closeModal" />
  
</template>
<script>
import data from "@/assets/movie/movies";
import Event from "@/components/movies/Event.vue"
import Modal from "@/components/movies/Modal.vue";
import Movies from "@/components/movies/Movies.vue";

import SearchBar from '@/components/movies/SearchBar.vue';

export default {
  name: 'Movie',
  components: {

    Event: Event,
    Modal: Modal,
    Movies: Movies,
    SearchBar: SearchBar,
  },
  created() {
    console.log('created!!!!!!!');

  },
  mounted() {
    console.log('Mounted.......');

    this.interval = setInterval(() => {
      if (this.eventTextNum == this.text.length - 1) {
        this.eventTextNum = 0

      } else {
        this.eventTextNum += 1
      }
    }, 3000)

  },
  unmounted() {
    clearInterval(this.interval)

  },
  data() {
    return {
      isModal: false,
      selectedData: -1,
      text: ["Netflix 강렬한 운명의 드라마, 경성크리처",
        '디즈니 100주년 기념작, 위시',
        '그날, 대한민국의 운명이 바뀌었다, 서울의 봄'
      ],
      isEventOpen: true,
      eventTextNum: 0,
      interval: null,
      data: data,
      data_temp: [...data]
    };
  },
  methods: {
    increaseLike(id) {
      // this.data[i].like++; /// 필터에서 문제가 생김. 제대로된 데이터를 가져오지 못함.
      // this.data.find(movie => movie.id == id).like++;
      this.data_temp.find(movie => movie.id == id).like++;
    },
    getImageUrl(name) {
      return new URL(`/src/assets/movie/${name}`, import.meta.url).href;
    },
    onSearchMovie(title) {
      this.data_temp = this.data.filter(movie => movie.title.includes(title))
    },
    closeModal() {
      this.isModal = false
    },
    openModal(id) {
      // console.log(i);

      this.isModal = true
      // this.selectedData = i
      this.selectedData = this.data_temp.findIndex(movie => movie.id == id);

    }
  },
}
</script>

<style>
/* .bg-yellow {
  background-color: yellow;
} */

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
}

h1,
h2,
h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}

button {
  margin-right: 10px;
  margin-top: 1rem;
}

.item {
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  margin-bottom: 20px;
  padding: 1rem;
}

.item figure {
  width: 30%;
  margin-right: 1rem;
}

.item img {
  width: 100%;
}

.item .info {
  width: 100%;
}

/**** */
.modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal .inner {
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
}
</style>
