<template>
    <iframe id="ytplayer" type="text/html" width="350" height="350" :src="`https://www.youtube.com/embed/${youtubeData.id}`"
        frameborder="0" allowfullscreen />
    <div class="movie-desc" @click="detailMove">
        <a href="#" class="thumbnail">
            <img :src="youtubeData.snippet.thumbnails.default.url" alt="">
        </a>
        <div>
            <p class="title">{{youtubeData.snippet.title}}</p>
            <p class="date">{{youtubeData.snippet.publishedAt}}</p>
        </div>
    </div>
</template>

<script>
    import {
        useRouter
    } from 'vue-router';
    export default {
        props: ['youtubeData'],
        setup(props) {
            const router = useRouter();
            const detailMove = () => {
                router.push('/detail/' + props.youtubeData.id)
            }
            return {
                detailMove,
            }
        }
    }
</script>

<style>
.movie-desc{
    cursor: pointer;
}
</style>