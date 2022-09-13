<template>
  <div class="wrap">
    <div class="container">
      <header>
        <ul>
          <li><a href="#">가나</a></li>
          <li><a href="#">다라</a></li>
          <li><a href="#">마바</a></li>
          <li><a href="#">사아</a></li>
          <li><a href="#">자카</a></li>
        </ul>
      </header>
      <div class="container-left"></div>
      <div class="container-right">
        <ul class="movie">
          <li class="movielist" v-for="(item, index) in data" :key="index">
            <iframe id="ytplayer" type="text/html" width="350" height="400"
              :src="`https://www.youtube.com/embed/${item.id}`" frameborder="0" allowfullscreen />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    computed
  } from 'vue';
  import {
    useStore
  } from 'vuex';
  export default {
    components: {},
    setup() {
      const store = useStore()
      store.dispatch('fetchYoutubeList')
      const data = computed(() => store.getters.getYoutubeList)


      // const obj = {
      //   product: 'MacBook pro',
      //   host: 'yongyong',
      //   password: 1234
      // };

      // const count2 = Object.keys(obj).length;
      // console.log(count2) // 3개

      return {
        data,
        // count2
      }
    }
  }
</script>

<style>
  .wrap {
    position: relative;
    display: block;
  }

  .container {
    position: relative;
    display: flex;
  }

  .container-left {
    position: relative;
    display: block;
    width: 20%;
  }

  .container-right {
    position: relative;
    display: block;
    width: 80%;
  }

  .movie {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .movielist {
    position: relative;
    display: block;
    width: 23%;
    margin: 10px;
  }
</style>