<template>
  <div class="border-2 p-4 rounded-lg">
    <table>
      <tr>
        <div class="ml-24">
          <button @click="onAddNewRow(getNumButtons())">
          <img src="@/assets/add-outline.svg" class="w-9 h-9 rounded-full mr-10">
          </button>
          <button @click="onDelLastRow">
              <img src="@/assets/minus-outline.svg" class="w-9 h-9 rounded-full mr-2">
          </button>
        </div>
      </tr>
      <div v-for="(item, idx) in tableStates" :key="idx">
        <tr>
          <PopRow :initnum="getNumButtons()" :row_obj="item"></PopRow>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>

import PopRow from './PopRow.vue'

const INIT_NUM_BUTTONS = 3

export default {
  name: 'PopTable',
  components: {
    PopRow
  },
  data(){
    return {
      numRows: 1,
      tableStates: []
    }
  },

  methods: {
    getNumButtons(){
      if (this.tableStates.length === 0){
        return INIT_NUM_BUTTONS
      }
      // Return the last row's length
      return this.tableStates[this.tableStates.length - 1].length
    }
  }

}
</script>
