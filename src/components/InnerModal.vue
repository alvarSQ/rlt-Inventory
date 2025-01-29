<script setup lang="ts">
import ElementInventory from '@/components/UI/elementInventory.vue';
import { useInventoryStore } from '../stores/index';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const { bigItems } = storeToRefs(useInventoryStore());

const emit = defineEmits(['closeModal']);

const isDelete = ref(true);

const amountItem = ref(0);

const toggleChoiceDelete = () => {
  if (bigItems.value?.amount) {
    amountItem.value = bigItems.value.amount;
  }
  isDelete.value = !isDelete.value;
};

const delItem = () => {
  if (bigItems.value?.amount) {
    amountItem.value <= bigItems.value.amount ? bigItems.value.amount = bigItems.value.amount - amountItem.value : bigItems.value.amount = 0    
    bigItems.value.size = 'min'
  }  
  isDelete.value = !isDelete.value;
  emit('closeModal')
}
</script>

<template>
  <div class="item_main inner-modal">
    <div class="img">
      <ElementInventory
        :color="(bigItems as IitemsInventory)?.name"
        size="big"
      />
    </div>
    <div class="title"></div>
    <div class="text">
      <div style="width: 211px" class="text_item"></div>
      <div style="width: 211px" class="text_item"></div>
      <div style="width: 211px" class="text_item"></div>
      <div style="width: 180px" class="text_item"></div>
      <div style="width: 80px; margin-top: 8px" class="text_item"></div>
    </div>
    <div class="footer-modal" v-if="isDelete">
      <div class="btn-big" @click="toggleChoiceDelete">Удалить предмет</div>
    </div>
    <div class="footer-modal footer-modal__big" v-else>
      <input
        type="text"
        placeholder="Введите количество"
        v-model="amountItem"
      />
      <div class="two-btn">
        <div
          class="btn-big litle btn-white"
          @click="toggleChoiceDelete, $emit('closeModal')"
        >
          Отмена
        </div>
        <div class="btn-big litle" @click="delItem">Подтвердить</div>
      </div>
    </div>
    <svg
      class="close"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="$emit('closeModal')"
    >
      <path
        d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.btn-white {
  background-color: white !important; 
  color: rgba(45, 45, 45, 1) !important;
}

.litle {
  height: 28px !important;
  //box-shadow: 0px 0px 15px 5px rgba(255, 136, 136, 0.2);
}

.two-btn {
  display: flex;
  gap: 10px;
}

input {
  padding: 10px;
  border-radius: 4px;
  color: white;
  background: rgba(38, 38, 38, 1);
  border: 1px solid rgba(77, 77, 77, 1);
}

.close {
  position: absolute;
  top: 13px;
  left: 223px;
  cursor: pointer;
}

.btn-big {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: 220px;
  height: 39px;
  border-radius: 8px;
  color: white;
  background: rgba(255, 136, 136, 1);
  cursor: pointer;
}

.footer-modal {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 57px;
  border-top: 1px solid rgba(77, 77, 77, 1);
}

.footer-modal__big {
  position: absolute;
  flex-direction: column;
  top: 366px;
  gap: 18px;
  padding: 19px 13px;
  width: 248px !important;
  height: 114px !important;
  background: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(16px);
}

.img {
  position: relative;
  width: 100%;
  height: 197px;
  border-bottom: 1px solid rgba(77, 77, 77, 1);
}

.text_item {
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
}

.text {
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

.inner-modal {
  position: absolute;
  top: -1px;
  left: 274px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17px 13px;
  width: 250px;
  height: 500px;
  gap: 20px;
  border-radius: 0 12px 12px 0;
  background: rgba(38, 38, 38, 0.95);
  // backdrop-filter: blur(16px);
}
</style>
