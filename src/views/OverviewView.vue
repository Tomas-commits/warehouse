<script setup lang="ts">
import ChartComponent from '@/components/ChartComponent.vue'
import { useStore } from './stores'

const store = useStore()
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="5">
        <v-sheet class="pa-2 ma-0" rounded="lg" elevation="2">
          <h5 class="text-center">
            This <b>month</b> items registered: {{ store.totalQuantityCurrentMonth }} <br />
            For total amount of {{ store.totalAmountCurrentMonth }} EUR
          </h5>
        </v-sheet>
      </v-col>
      <v-col cols="5">
        <v-sheet class="pa-2 ma-0" rounded="lg" :elevation="2">
          <h5 class="text-center">
            <b>Total</b> items registered: {{ store.totalQuantity }}<br />
            For total amount of {{ store.totalAmount }} EUR
          </h5>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-sheet class="pa-3 ma-0" height="370px" rounded="lg" elevation="2">
          <ChartComponent />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-sheet class="pa-3" rounded="lg" elevation="2">
          <v-row justify="center">
            <v-btn
              elevation="3"
              class="mx-2 mt-2 mb-2"
              stacked
              density="comfortable"
              block
              @click="store.populatePeriod(12)"
              >Year</v-btn
            ><v-btn
              elevation="3"
              class="mx-2 mt-2 mb-2"
              stacked
              density="comfortable"
              block
              @click="store.populatePeriod(6)"
              >6 months</v-btn
            ></v-row
          >
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
