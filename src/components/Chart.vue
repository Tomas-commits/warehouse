<script setup lang="ts">
import { Bar } from 'vue-chartjs'
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}
const pop = 10
</script>

<template>
  <Bar id="1" :options="chartOptions" :data="chartData" />
</template>
