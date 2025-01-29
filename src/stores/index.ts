import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useInventoryStore = defineStore(
  'inventory',
  () => {
    const itemsInventory = ref([
      {
        id: 1,
        name: 'green',
        amount: 4,
        size: 'min',
      },
      {
        id: 2,
        name: 'beige',
        amount: 2,
        size: 'min',
      },
      {
        id: 3,
        name: 'violet',
        amount: 5,
        size: 'min',
      },
    ] as IitemsInventory[]);

    const gridInventory = computed(() => {
      const grid = [] as IitemsInventory[];
      for (let i = 0; i < 25; i++) {
        if (itemsInventory.value[i]) {
          grid.push(itemsInventory.value[i]);
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

    const gridDrag = ref(gridInventory.value as IitemsInventory[]);

    const bigItems = computed(() => {
      return gridDrag.value.find((e) => e.size === 'big');
    });

    const resizeItem = (id: number) => {
      gridDrag.value.forEach((e) => {
        if (e.size === 'big') {
          e.size = 'min';
        }
        if (e.amount && e.id === id) {
          e.size = 'big';
        }
        return;
      });
    };

    return { gridDrag, bigItems, resizeItem };
  },
  {
    persist: {
      pick: ['gridDrag'],
    },
  }
);
