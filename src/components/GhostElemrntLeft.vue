<template>
    <div class="item_main ghost-elemrnt_left">
        <div class="blur"></div>
        <div class="title_gel"></div>
        <div></div>
      </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.title_gel {
  width: 190px;
  height: 26px;
  border-radius: 8px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
}

.blur {
  width: 100%;
  height: 240px;
  border-radius: 8px;
  background: url('@/assets/img/blur.png') no-repeat;
}

.ghost-elemrnt_left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 236px;
  height: 500px;
  gap: 20px;
}

</style>