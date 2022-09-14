<template>
            <div class="youtube-box">
            <h2>왜 안됨???????ㅋㅋ</h2>
            <div class="youtube-detail">
                <!-- <div class="youtube-info-wrap">

                    <h2 class="youtube-title">{{youtubeInfo.snippet.title}} <small>{{youtubeInfo.snippet.publishedAt}}</small></h2>

                    <p class="youtube-info">
                        {{youtubeInfo.channelTitle}}<br />
                        {{youtubeInfo.snippet.description}}<br />
                    </p>
                    <p class="youtube-desc">
                        {{youtubeInfo.localized.title}}
                    </p>
                </div> -->
            </div>
            <div v-for="(item, index) in youtubeInfo" :key="index">
                {{item.snippet.channelId}}
            </div>
            {{youtubeInfo}}
        </div>
</template>

<script>
import { computed } from 'vue';
    // router 를 통해서 전송받은 데이터 활용
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
export default {
    setup(){
            const route = useRoute()
            const id = route.params.id; 
            console.log(id) // 맞게 들어옴
            const store = useStore();
            store.dispatch('fetchYoutubeInfo', id);
            const youtubeInfo = computed(() => store.getters.getYoutubeInfo);
            console.log(youtubeInfo)



        return{
            youtubeInfo
        }
    }
}
</script>

<style>

</style>