<script setup lang="ts">
import { RouterView } from 'vue-router'
import ToolBar from './components/ToolBar.vue'
</script>

<template>
  <v-app>
    <ToolBar />
    <v-main class="container">
      <RouterView />
    </v-main>
  </v-app>
</template>
<style scoped>
.container {
  background-color: #eeeeee;
}
</style>
