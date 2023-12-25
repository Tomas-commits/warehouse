<script setup lang="ts">
import Chart from 'chart.js/auto'
</script>

<template>
  <v-container class="bg-surface-variant">
    <v-row justify="center">
      <v-col cols="5">
        <v-sheet class="pa-2 ma-2">
          <h1 class="text-center">Welcome to the Overview</h1>
        </v-sheet>
      </v-col>
      <v-col cols="5">
        <v-sheet class="pa-2 ma-2">
          <h1 class="text-center">Welcome to the Overview</h1>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-sheet class="pa-2 ma-2">
          <canvas id="acquisitions"></canvas>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
