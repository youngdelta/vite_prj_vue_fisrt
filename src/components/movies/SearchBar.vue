<template>
    <div class="search-box">
        <!-- <input type="search" name="" value="" @input="inputText=$event.target.value" placeholder="검색어 입력" v-model="inputText"> -->
        <input type="search" placeholder="검색어 입력"
            @change="$emit('searchMovie', $event.target.value); inputText = $event.target.value; $event.target.value = ''">
        <button>검색</button>
        <!-- <p>{{inputText}}</p> -->
    </div>
</template>
<script>
export default {
    name: 'SearchBarComponent',
    props: {
        data: Array
    },
    data() {
        return {
            inputText: '23',
            // data: data,
            // data_temp: [...data]
        }
    },
    methods: {

    },
    watch: {
        inputText(name) {
            //입력한 영화제목이 데이터에 있는지 확인
            /* 
            if (name !== '노량') {
                alert('해당하는 영화가 없습니다.');
            } 
            */
            /* 
            const findName = this.data.filter(movie => movie.title.includes(name))
            console.log(findName);
            if (findName.length === 0) {
                alert('해당하는 자료가 없습니다.')

            } */

            this.data.filter(movie => movie.title.includes(name)).length === 0 && alert('해당하는 자료가 없습니다.');

        }
    },
}
</script>
<style></style>