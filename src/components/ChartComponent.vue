<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { useStore } from '../views/stores'
import { computed } from 'vue'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
const store = useStore()
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

const chartData = computed(() => ({
  // populating periods
  labels: store.period,
  datasets: [
    // populating amounts and quantities depending on the period length
    {
      label: 'EUR',
      backgroundColor: '#f87979',
      data: store.period.length === 6 ? store.amountsPerMonth.slice(-6) : store.amountsPerMonth
    },
    {
      label: 'Items',
      backgroundColor: 'skyblue',
      data:
        store.period.length === 6 ? store.quantitiesPerMonth.slice(-6) : store.quantitiesPerMonth
    }
  ]
}))
</script>

<template>
  <Line :data="chartData" :options="chartOptions" />
</template>
