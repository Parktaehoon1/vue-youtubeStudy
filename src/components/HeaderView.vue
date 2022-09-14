<template>
    <header class="header">
        <div class="header-left">
            <a href="#" class="header-list"><i class="fas fa-bars"></i></a>
            <a href="#" class="youtube-logo"><i class="fab fa-youtube"></i>Youtube</a>
        </div>
        <div class="header-center">
            <form action="" class="searchform">
                <input type="text" placeholder="검색" class="search-bar">
                <input type="submit" class="submitbtn">
            </form>
                <a href="#"><i class="fas fa-search"></i></a>
                <a href="#"><i class="fas fa-microphone"></i></a>
        </div>
        <div class="header-right">
            <a href="#"><i class="fas fa-ellipsis-v"></i></a>
            <a href="#">로그인상태</a>
        </div>

    </header>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .header {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 70px;
        padding: 0 20px;
        background: rgba(250, 250, 250, 0.1);
    }

    .header-left {
        position: relative;
        display: block;
    }

    .header-list {
        position: relative;
        display: inline-block;
        font-size: 20px;
        margin-right: 15px;
    }

    .youtube-logo {
        position: relative;
        display: inline-block;
        font-size: 20px;
        font-weight: 700;
    }
    .fa-youtube{
        color: red;
    }

    .searchform{
        position: relative;
        display: flex;
        border: 1px solid #000;
    }

    .search-bar{
        position: relative;
        display: block;
        width: 350px;
        height: 30px;
        border: 0;
    }
    .submitbtn{
        position: relative;
        display: block;
        height: 30px;
        border: 0;
    }
    .header-center{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-center a{
        margin: 0 5px;
    }
    .header-right{
        position: relative;
        display: block;
    }
    .header-right a {
        position: relative;
        display: inline-block;
        margin-right: 10px;
    }
</style>