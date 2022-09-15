<template>
    <iframe id="ytplayer" type="text/html" width="350" height="350"
        :src="`https://www.youtube.com/embed/${youtubeData.id}`" frameborder="0" allowfullscreen />
    <div class="movie-desc" @click="detailMove">
        <a href="#" class="thumbnail">
            <img :src="youtubeData.snippet.thumbnails.default.url" alt="">
        </a>
        <div class="desc-wrap">
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

    .thumbnail {
        position: relative;
        display: block;
        width: 50px;
        height: 50px;
    }

    .thumbnail img {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .movie-desc {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        cursor: pointer;
    }
    .desc-wrap{
        width: 80%;;
    }
</style>