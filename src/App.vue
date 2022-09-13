<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <!-- {{item.id}} -->
          <iframe id="ytplayer" type="text/html" width="400" height="400"
      :src="`https://www.youtube.com/embed/${item.id}`" frameborder="0" allowfullscreen />

      </li>
    </ul>


    <!-- <iframe id="ytplayer" type="text/html" width="400" height="400"
      :src="`https://www.youtube.com/embed/${data.items[2].id}`" frameborder="0" allowfullscreen /> -->


    <!-- {{data}} -->

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

</style>