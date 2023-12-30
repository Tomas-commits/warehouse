<script setup lang="ts">
import { ref } from 'vue'
const drawer: any = ref(null)
</script>

<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-card class="mx-auto">
      <v-list>
        <v-list-item prepend-icon="mdi-home" title="Menu"></v-list-item>
        <v-divider></v-divider>
        <v-list-item color="indigo-lighten-1" to="/" link title="Overview"></v-list-item>
        <v-divider></v-divider>
        <v-list-item color="indigo-darken-1" to="/storage" link title="Storage"></v-list-item>
      </v-list>
    </v-card>
  </v-navigation-drawer>
  <v-toolbar color="indigo-lighten-1" height="70" :elevation="6">
    <v-app-bar-nav-icon
      class="d-sm-none"
      elevation="12"
      variant="text"
      color="white"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-btn
      elevation="12"
      class="d-none d-sm-flex mx-2"
      color="white"
      stacked
      density="comfortable"
      variant="text"
      to="/"
      >Overview</v-btn
    >

    <v-btn
      elevation="6"
      class="d-none d-sm-flex"
      color="white"
      stacked
      density="comfortable"
      variant="text"
      to="/storage"
      >Storage</v-btn
    >
  </v-toolbar>
</template>
