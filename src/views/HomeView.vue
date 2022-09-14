<template>

    <ul class="movie">
        <li class="movielist" v-for="(item, index) in data" :key="index">
            <!-- <iframe id="ytplayer" type="text/html" width="350" height="350"
                :src="`https://www.youtube.com/embed/${item.id}`" frameborder="0" allowfullscreen />
            <div class="movie-desc">
                <a href="#" class="thumbnail">
                    <img :src="item.snippet.thumbnails.default.url" alt="">
                </a>
                <div>
                    <p class="title">{{item.snippet.title}}</p>
                    <p class="date">{{item.snippet.publishedAt}}</p>
                </div>
            </div> -->
            <YoutubeList :youtubeData="item"/>
        </li>
    </ul>

</template>

<script>
import {useStore} from 'vuex';
import {computed} from 'vue'; 
import YoutubeList from '@/components/YoutubeList.vue'   
    export default {
        components:{
            YoutubeList
        },        
        setup(){
            const store = useStore()
            const data = computed(() => store.getters.getYoutubeList)

            return{
                data
            }
        }
    }
</script>

<style>

</style>