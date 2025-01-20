<template lang="">
    <div class="modal" v-if="isModal">
    <div class="inner">
      <h3>{{ this.data[selectedData].title }}</h3>
      <p>영화 상세정보</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalComponent',
  props: {
    isModal: Boolean,
    selectedData: Number,
    data: Array,
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="">

</style>