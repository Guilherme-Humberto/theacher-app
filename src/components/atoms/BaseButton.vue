<script setup>
const emit = defineEmits(['clickEvent'])
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  typeStyle: {
    type: String,
    required: true
  },
  function: {
    type: Function,
    required: false
  }
})

const clickEvent = () => emit('clickEvent')
</script>

<template>
  <button
    :class="`btn-${props.typeStyle}`"
    :type="type"
    @click.prevent="clickEvent"
  >
    {{ props.text }}
  </button>
</template>

<style scoped>
button {
  font-size: 16px;
}

.btn-fill,
.btn-outline {
  outline: none;
  border: none;
  height: 44px;
  padding: 0 30px;
  font-weight: 500;
  border-radius: 5px;
  letter-spacing: -9%;
  transition: 0.5s;
}

.btn-fill:hover,
.btn-outline:hover {
  cursor: pointer;
  letter-spacing: 1px;
}

.btn-fill {
  background: var(--color-primary);
  color: var(--color-text);
}

.btn-outline {
  color: var(--color-text);
  border: 1px solid var(--color-text);
  background: transparent;
}
</style>
