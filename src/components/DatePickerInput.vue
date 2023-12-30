<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useStore } from '../views/stores'
const store = useStore()
</script>

<template>
  <VueDatePicker
    id="datePicker"
    required
    auto-apply
    :clearable="false"
    :enable-time-picker="false"
    v-model="store.date"
  ></VueDatePicker>
</template>
