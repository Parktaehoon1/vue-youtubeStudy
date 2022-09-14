<template>
    <div class="youtube-box">
        <div class="youtube-detail">
            <iframe type="text/html" width="400" height="500" class="playbox"
                :src="`https://www.youtube.com/embed/${youtubeInfo.id}`" frameborder="0" allowfullscreen />

            <div class="youtube-title">
                <p>{{youtubeInfo.snippet.title}}</p>
                <p>{{youtubeInfo.snippet.channelTitle}}</p>
            </div>
                <p class="date">{{youtubeInfo.snippet.publishedAt}}</p>
            <div class="youtube-desc">
                <p>{{youtubeInfo.snippet.description}}</p>
            </div>
        </div>
        <!-- {{youtubeInfo}} -->
    </div>
</template>

<script>
    import {
        computed
    } from 'vue';
    // router 를 통해서 전송받은 데이터 활용
    import {
        useRoute
    } from 'vue-router';
    import {
        useStore
    } from 'vuex'
    export default {
        setup() {
            const route = useRoute()
            const id = route.params.id;
            console.log("도출아디", id) // 맞게 들어옴
            const store = useStore();
            store.dispatch('fetchYoutubeInfo', id);
            const youtubeInfo = computed(() => store.getters.getYoutubeInfo);
            console.log("무엇이냐", youtubeInfo)


            return {
                youtubeInfo
            }
        }
    }
</script>

<style scoped>
    .playbox {
        position: relative;
        display: block;
        width: 100%;
        height: 550px;
    }
    iframe{
        width: 100%;
    }
    .youtube-detail{
        position: relative;
        display: block;
        width: 70%;
    }
    .date{
        text-align: right;
        font-size: 12px;
    }
    .youtube-title {
        position: relative;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 800;
    }

    .youtube-desc {
        position: relative;
        display: block;
        font-size: 16px;
        line-height: 1.3;
    }
</style>