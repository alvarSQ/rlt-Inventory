<script setup lang="ts">
import InnerModal from '@/components/InnerModal.vue';
import ElementInventory from './UI/elementInventory.vue';
</script>

<template>
  <div class="item_main inventory_grid">
    <div class="cell">
      <ElementInventory color="green" size="min" />
      <div class="amount"><span>4</span></div>
    </div>
    <div class="cell">
      <ElementInventory color="beige" size="min" />
      <div class="amount"><span>2</span></div>
    </div>
    <div class="cell">
      <ElementInventory color="violet" size="min" />
      <div class="amount"><span>5</span></div>
    </div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <InnerModal class="transform" />
  </div>
</template>

<style scoped lang="scss">
.transform {
  transition: 0.6s;
  &:hover {
    transform: translate(100%);
  }
}

.amount {
  display: flex;
  position: absolute;
  top: 84px;
  left: 89px;
  width: 16px;
  height: 16px;
  border-radius: 6px 0 0 0;
  border: 1px solid rgb(77, 77, 77);
  align-items: center;
  justify-content: center;
  span {
    font-size: 10px;
    color: rgb(77, 77, 77);
  }
}

.cell {
  display: flex;
  position: relative;
  background-color: rgba(38, 38, 38);
  align-items: center;
  justify-content: center;
  &:first-child {
    border-radius: 12px 0 0 0;
  }
  &:nth-child(5) {
    border-radius: 0 12px 0 0;
  }
  &:nth-child(21) {
    border-radius: 0 0 0 12px;
  }
  &:nth-child(25) {
    border-radius: 0 0 12px 0;
  }
}

.inventory_grid {
  position: relative;
  width: 525px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1px;
  background-color: rgb(77, 77, 77);
  overflow: hidden;
}
</style>
