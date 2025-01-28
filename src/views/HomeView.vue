<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="content">
      <div class="item ghost-elemrnt_left">
        <div class="blur"></div>
        <div class="title_gel"></div>
        <div></div>
      </div>
      <div class="item inventory"></div>
      <div class="item ghost-elemrnt_bottom"></div>
    </div>
  </div>
</template>

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
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 30px;
}

.ghost-elemrnt_left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 236px;
  height: 500px;
  gap: 20px;
}

.inventory {
  width: 525px;
  height: 500px;
}

.item {
  padding: 14px;
  background-color: rgba(38, 38, 38);
  border-radius: 12px;
  border: 1px solid rgba(77, 77, 77, 1);
}

.ghost-elemrnt_bottom {
  flex-basis: 100%;
  height: 72px;
}
</style>
