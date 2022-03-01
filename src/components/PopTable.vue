<template>
  <div class="border-2 p-4 rounded-lg">
    <table>
      <tr>
        <div class="ml-24">
          <button @click="onAddNewRow">
          <img src="@/assets/add-outline.svg" class="w-9 h-9 rounded-full mr-10">
          </button>
          <button @click="onDelNewRow">
              <img src="@/assets/minus-outline.svg" class="w-9 h-9 rounded-full mr-2">
          </button>
        </div>
      </tr>
      <div v-for="(item, idx) in numRows" :key="idx">
        <tr>
          <PopRow :initnum="getNumButtons()" :row_idx="idx"></PopRow>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>

import PopRow from './PopRow.vue'
import TableState from './TableState.js'

export default {
  name: 'PopTable',
  components: {
    PopRow
  },
  data(){
    return {
      enabled: false,
      over: false,
      numRows: 1
    }
  },

  methods: {
    onAddNewRow(){
      this.numRows++
    },
    onDelNewRow(){
      if (this.numRows <= 1){
        return
      }
      this.numRows--
    },
    getNumButtons(){
      return TableState.getNumRows()
    }
  }

}
</script>
