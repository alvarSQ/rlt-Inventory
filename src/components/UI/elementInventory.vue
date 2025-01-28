<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  color: 'green' | 'beige' | 'violet';
  size: 'big' | 'min';
}>();

const colorElement = computed(() => {
  switch (props.color) {
    case 'green':
      return 'entity__green';
    case 'beige':
      return 'entity__beige';
    case 'violet':
      return 'entity__violet';
  }
});

const sizeElement = computed(() => {
  switch (props.size) {
    case 'big':
      return 'element__big';
    case 'min':
      break
  }
});
</script>

<template>
  <div class="element entity_bottom" :class="`${colorElement}-bottom ${sizeElement}`"></div>
  <div class="element entity_top" :class="`${colorElement}-top ${sizeElement}`"></div>
</template>

<style scoped lang="scss">
.entity_bottom {
  top: 53%;
  left: 47%;
}

.entity_top {
  top: 47%;
  left: 53%;
  backdrop-filter: blur(12px);
}

.element__big {
    width: 116px !important;
    height: 116px !important;
}

.element {
  position: absolute;
  width: 48px;
  height: 48px;
  transform: translate(-50%, -50%);
}

.entity__green-top {
  background-color: rgba(184, 217, 152, 0.35);
}
.entity__green-bottom {
  background-color: rgb(127, 170, 101);
}

.entity__beige-top {
  background-color: rgba(217, 187, 152, 0.35);
}
.entity__beige-bottom {
  background-color: rgba(170, 151, 101, 1);
}

.entity__violet-top {
  background-color: rgba(116, 129, 237, 0.35);
}
.entity__violet-bottom {
  background-color: rgba(101, 108, 170, 1);
}
</style>
