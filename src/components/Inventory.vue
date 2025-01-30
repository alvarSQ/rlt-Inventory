<script setup lang="ts">
import InnerModal from '@/components/InnerModal.vue';
import ElementInventory from './UI/elementInventory.vue';
import { useInventoryStore } from '../stores/index';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue';

const inventoryStore = useInventoryStore();
const { bigItems, gridDrag } = storeToRefs(useInventoryStore());

const isModal = ref(true);

const closeOpenModal = computed(() => {
  return bigItems.value?.name && isModal.value ? true : false;
});

const closeModal = () => {
  if (bigItems.value?.size) bigItems.value.size = 'min';
  isModal.value = false;
};

// для предварительной загрузки картинок при перетаскивании
const loadImg = () => {
  const preloadImage = (src: string) => (new Image().src = src);
  gridDrag.value.forEach((el) =>
   preloadImage(`/${el.name}.png`)
  );
};

onMounted(() => {
  loadImg();
});

const startDragging = (e: DragEvent, entity: IitemsInventory) => {
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('itemID', entity.id.toString());
    const img = new Image();
    img.src = `/${entity.name}.png`;
    e.dataTransfer.setDragImage(img, 25, 25);
  }
};

const moveItemTo = (e: DragEvent, id: number) => {
  const emptyElement: IitemsInventory = {
    id: gridDrag.value.reduce((max, el) => (el.id > max ? el.id : max), 0) + 1,
    name: '',
    amount: 0,
    size: 'min',
  };
  if (e.dataTransfer) {
    const itemID = parseInt(e.dataTransfer.getData('itemID'));
    const startItem = gridDrag.value.find((e) => e.id === itemID);
    const endItem = gridDrag.value.find((e) => e.id === id);
    const startIndex = gridDrag.value.indexOf(startItem as IitemsInventory);
    const endIndex = gridDrag.value.indexOf(endItem as IitemsInventory);

    if (endItem?.name) {
      return;
    } else {
      gridDrag.value.splice(startIndex, 1); // удаляем элемент со старого места
      gridDrag.value.splice(startIndex, 0, emptyElement); // на старое место помещаем пустой объект

      gridDrag.value.splice(endIndex, 1); // удаляем элемент c нового места
      gridDrag.value.splice(endIndex, 0, startItem as IitemsInventory); // переносим на новое
    }
  }
};
</script>

<template>
  <div class="item_main inventory_grid">
    <div
      class="cell"
      @click="inventoryStore.resizeItem(entity.id), (isModal = true)"
      @dragstart="startDragging($event, entity)"
      @dragover.prevent
      @dragenter.prevent
      @drop="moveItemTo($event, entity.id)"
      :draggable="entity.name !== ''"
      v-for="entity in gridDrag"
      :key="entity.id"
    >
      <ElementInventory :color="entity.name" size="min" v-if="entity.amount" />
      <div class="amount" v-if="entity.amount">
        <span>{{ entity.amount }}</span>
      </div>
    </div>

    <InnerModal
      :class="closeOpenModal ? 'transform-open' : 'transform-close'"
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
