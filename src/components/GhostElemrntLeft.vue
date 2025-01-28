<template>
  <div class="item_main ghost-elemrnt_left">
    <div class="blur"></div>
    <div class="title"></div>
    <div class="text">
      <div style="width: 155px;" class="text_item"></div>
      <div style="width: 190px;" class="text_item"></div>
      <div style="width: 170px;" class="text_item"></div>
      <div style="width: 160px;" class="text_item"></div>
      <div style="width: 140px;" class="text_item"></div>
      <div style="width: 80px; margin-top: 8px;" class="text_item"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.text_item {
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
}

.text{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 4px;
}

.title {
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
  padding: 17px 13px;
  width: 236px;
  height: 500px;
  gap: 20px;
}
</style>
