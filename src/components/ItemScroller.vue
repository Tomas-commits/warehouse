<script setup lang="ts">
import { useStore } from '../views/stores'

const store = useStore()

const tableHeaders: readonly {
  title: string
  align: string
  key: string
}[] &
  {}[] = [
  {
    title: 'Item',
    align: 'start',
    key: 'item'
  },
  {
    title: 'Quantity',
    align: 'end',
    key: 'quantity'
  },
  {
    title: 'EUR',
    align: 'end',
    key: 'amount'
  },
  {
    title: 'Total',
    align: 'end',
    key: 'total'
  },
  {
    title: 'Date',
    align: 'end',
    key: 'date'
  },
  {
    title: 'Action',
    align: 'end',
    key: 'action'
  }
]
</script>

<template>
  <v-data-table :headers="tableHeaders" :items="store.itemList">
    <template v-slot:[`item.action`]="{ item }">
      <v-btn color="red-lighten-1" @click="store.deleteItem((item as any).id)">Delete</v-btn>
    </template>
  </v-data-table>
</template>
