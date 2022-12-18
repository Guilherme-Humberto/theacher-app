<script setup>
import { ref } from 'vue'

const refValue = ref(props.modelValue)
const emit = defineEmits(['update:input'])

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    required: true
  },
  label: {
    type: String,
    required: false
  },
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    required: true
  }
})

const onChanged = event => {
  return emit('update:input', { [props.name]: refValue.value })
}
</script>
<template>
  <div>
    <input
      :type="props.type"
      v-model="refValue"
      :placeholder="props.placeholder"
      :required="props.required"
      @input="onChanged"
      class="base-input"
    />
  </div>
</template>

<style scoped></style>
