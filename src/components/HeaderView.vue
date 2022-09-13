<template>
    <header class="header">
        <div class="header-left">
            <a href="#">list</a>
            <a href="#">logo</a>
        </div>
        <div class="header-center">
            <form action="">
                <input type="text" placeholder="검색">
                <input type="submit">
                <a href="#">아이콘</a>
            </form>
        </div>
        <div class="header-right">
            <a href="#">아이콘</a>
            <a href="#">이이콘</a>
            <a href="#">로그인상태</a>
        </div>

    </header>
</template>

<script>
    export default {

    }
</script>

<style>
    .header{
        position: relative;
        display: flex;
        justify-content: space-between;
    }
</style>