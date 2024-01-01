<script setup lang="ts">
import DatePickerInput from '@/components/DatePickerInput.vue'
import { ref } from 'vue'
import { useStore } from '../views/stores'
import itemScroller from '@/components/ItemScroller.vue'

const store = useStore()

const item = ref('')
const quantity = ref('')
const amount = ref('')
const validate = ref(false)

// Validating rules
const requiredRule = (value: string) => !validate.value || !!value || 'Field is required.'
const numberRule = (value: string) =>
  !validate.value || !isNaN(parseFloat(value)) || 'Field must be a number.'

// Creating a new item and adding it to the store
const addItem = (event: Event) => {
  validate.value = true
  if ((event.target as HTMLFormElement)?.checkValidity()) {
    store.addItem({
      item: item.value,
      quantity: quantity.value,
      amount: amount.value,
      total: (parseFloat(quantity.value) * parseFloat(amount.value)).toFixed(2)
    })
    // reset form
    item.value = ''
    quantity.value = ''
    amount.value = ''
    validate.value = false
  }
}
</script>

<template>
  <v-container>
    <v-form validate-on="submit" @submit.prevent="addItem">
      <v-row justify="center">
        <v-col cols="10">
          <v-sheet class="pa-2 ma-0" rounded="lg" :elevation="2">
            <v-row>
              <v-col cols="5">
                <v-text-field
                  v-model="item"
                  :rules="[requiredRule]"
                  clearable
                  required
                  label="Item"
                  variant="underlined"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-text-field
                  v-model="quantity"
                  :rules="[requiredRule, numberRule]"
                  type="number"
                  required
                  label="Quantity"
                  variant="underlined"
                  step="0.01"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-text-field
                  v-model="amount"
                  :rules="[requiredRule, numberRule]"
                  type="number"
                  required
                  label="Amount"
                  prefix="€"
                  variant="underlined"
                  step="0.01"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <DatePickerInput />
              </v-col>
            </v-row>
          </v-sheet>
          <v-row justify="end">
            <v-col cols="4">
              <v-btn class="mt-2" type="submit" block>Submit</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
    <v-row justify="center">
      <v-col cols="10">
        <v-sheet class="pa-2 ma-0" rounded="lg" :elevation="2">
          <itemScroller />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
#datePicker {
  margin-top: 15px;
}
</style>
