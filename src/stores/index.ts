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

    const getItemsInventory = computed(() => itemsInventory.value);

    const bigItems = computed(() => {
      return itemsInventory.value.find((e) => {
        return e.size === 'big';
      });
    });

    const resizeItem = (id: number) => {      
      itemsInventory.value.forEach((e) => {
        if (e.size === 'big') {
          e.size = 'min';
        }
        if (e.amount && e.id === id) {
          e.size = 'big';
        }
        return;
      });
    };

    return { getItemsInventory, bigItems, resizeItem, itemsInventory };
  }
  // {
  //   persist: {
  //     pick: ['itemsInventory'],
  //   },
  // }
);
