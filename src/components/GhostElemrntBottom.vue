<template>
  <div class="item_main ghost-elemrnt_bottom">
    <div class="text"></div>
    <svg
      class="close"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.close {
  position: absolute;
  top: 13px;
  left: 757px;
}

.text {
  width: 699px;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
}

.ghost-elemrnt_bottom {
  position: relative;
  flex-basis: 100%;
  height: 72px;
  padding: 17px;
}
</style>
