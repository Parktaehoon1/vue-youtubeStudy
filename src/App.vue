<template>
  <div class="wrap">
    <HeaderView />
    <div class="container">
      <div class="container-left">
        <AsideView />
      </div>
      <div class="container-right">
        <!-- <ul class="movie">
          <li class="movielist" v-for="(item, index) in data" :key="index">
            <iframe id="ytplayer" type="text/html" width="350" height="350"
              :src="`https://www.youtube.com/embed/${item.id}`" frameborder="0" allowfullscreen />
            <div class="movie-desc">
            <a href="#" class="thumbnail">
              <img :src="item.snippet.thumbnails.default.url" alt="">
            </a>
            <div>
            <p class="title">{{item.snippet.title}}</p>
            <p class="date">{{item.snippet.publishedAt}}</p>
            </div>
            </div>
          </li>
        </ul> -->
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderView from './components/HeaderView.vue';
  import AsideView from './components/AsideView.vue';
  import {
    computed
  } from 'vue';
  import {
    useStore
  } from 'vuex';
  export default {
    components: {
      HeaderView,
      AsideView
    },
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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;
  }

  body {
    font-family: 'Poppins', 'Noto Sans KR', Helvetica, '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: -0.64px;
    color: #444;
  }

  .wrap {
    position: relative;
    display: block;
  }

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .container-left {
    position: relative;
    display: block;
    width: 10%;
  }

  .container-right {
    position: relative;
    display: block;
    width: 90%;
    border-top: 1px solid rgba(230, 230, 230, 1);
    ;
  }

  .movie {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .movielist {
    position: relative;
    display: block;
    width: 23%;
    margin: 10px;
  }

  #ytplayer {
    position: relative;
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  .title {
    position: relative;
    display: block;
    font-size: 16px;
    font-weight: 700;
  }

  .date {
    position: relative;
    display: block;
    font-size: 13px;
  }
  .thumbnail{
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
  }

  .thumbnail img{
    position: relative;
    display: block;
    width: 100%;
    height: 100%;    
    border-radius: 50%;
  }

  .movie-desc{
    position: relative;
    display: flex;
    justify-content: start;
    margin-top: 10px;
  }
</style>