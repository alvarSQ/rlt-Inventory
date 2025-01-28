<script setup lang="ts">
import GhostElemrntLeft from '@/components/GhostElemrntLeft.vue';
import GhostElemrntBottom from '@/components/GhostElemrntBottom.vue';
import Inventory from '@/components/Inventory.vue';
</script>

<template>
  <div class="container">
    <div class="content">
      <GhostElemrntLeft />
      <Inventory />      
      <GhostElemrntBottom />

    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 30px;
}
</style>
