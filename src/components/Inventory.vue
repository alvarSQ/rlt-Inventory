<script setup lang="ts">
import InnerModal from '@/components/InnerModal.vue';
import ElementInventory from './UI/elementInventory.vue';
import { useInventoryStore } from '../stores/index';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const inventoryStore = useInventoryStore();
const { bigItems, getItemsInventory } = storeToRefs(useInventoryStore());

const isModal = ref(true);

const closeOpenModal = computed(() => {
  return bigItems.value?.name && isModal.value ? true : false;
});

const closeModal = () => {
  if (bigItems.value?.size) bigItems.value.size = 'min';
  isModal.value = false;
};

const gridInventory = computed(() => {
  const grid = [] as IitemsInventory[];

  for (let i = 0; i < 25; i++) {
    if (getItemsInventory.value[i]) {
      grid.push(getItemsInventory.value[i]);
    } else {
      grid.push({
        id: grid.reduce((max, el) => (el.id > max ? el.id : max), 0) + 1,
        name: '',
        amount: 0,
        size: 'min',
      });
    }
  }

  return grid;
});
</script>

<template>
  <div class="item_main inventory_grid">
    <div
      class="cell"
      v-for="(entity, index) in gridInventory"
      :index="index"
      :key="entity.id"
      @click="inventoryStore.resizeItem(entity.id), (isModal = true)"
    >
      <ElementInventory :color="entity.name" size="min" v-if="entity.amount" />
      <div class="amount" v-if="entity.amount">
        <span>{{ entity.amount }}</span>
      </div>
    </div>

    <InnerModal
      :class="[closeOpenModal ? 'transform-open' : 'transform-close']"
      @close-modal="closeModal"
    />
  </div>
</template>

<style scoped lang="scss">
.transform-open {
  transition: 0.6s;
  transform: translate(0);
}

.transform-close {
  transition: 0.6s;
  transform: translate(100%);
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
  cursor: pointer;
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
