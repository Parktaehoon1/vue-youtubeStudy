<template>
  <div class="main-list">
    <ul class="list-depth">
        <li><a href="#"><i class="fas fa-home"></i>홈</a></li>
        <li><a href="#"><i class="fas fa-compass"></i>탐색</a></li>
        <li><a href="#"><i class="fas fa-play-circle"></i>Shorts</a></li>
        <li><a href="#"><i class="fas fa-paper-plane"></i>구독</a></li>
        <li><a href="#"><i class="fas fa-layer-group"></i>보관함</a></li>
        <li><a href="#"><i class="fas fa-archive"></i>시청기록</a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .main-list{
    position: relative;
    display: block;
    background: rgba(250, 250, 250, 0.1);
    height: 100vh;
  }
  .list-depth{
    padding: 20px;
  }
  .list-depth li{
    margin: 20px;
  }
  i{
    margin-right: 10px;
  }
  .mm::after{
    border-bottom: 1px solid #000 ;
  }
</style>