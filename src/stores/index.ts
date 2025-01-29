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
      {
        id: 4,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 5,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 6,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 7,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 8,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 9,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 10,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 11,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 12,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 13,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 14,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 15,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 16,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 17,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 18,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 19,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 20,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 21,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 22,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 23,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 24,
        name: '',
        amount: 0,
        size: 'min',
      },
      {
        id: 25,
        name: '',
        amount: 0,
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
  },
  {
    persist: {
      pick: ['itemsInventory'],
    },
  }
);
