<template>
  <div>
    <label>페이지를 찾을 수 없습니다.</label>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    context.emit('hide');
    return {

    }
  }
};
</script>

<style></style>