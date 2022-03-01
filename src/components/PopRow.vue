<template>
  <div>
    <div class="flex items-center px-2 pb-1">
      <td class="flex-shrink-0">
        <button @click="onAddNewButton">
            <img src="@/assets/add-outline.svg" class="w-9 h-9 rounded-full mr-2">
        </button>
      </td>
      <td class="flex-shrink-0">
        <button @click="onDelNewButton">
            <img src="@/assets/minus-outline.svg" class="flex-shrink-0 w-9 h-9 rounded-full mr-2">
        </button>
      </td>
      <div class="rounded-lg border-4 border-red-300 px-2 flex">
        <div v-for="(item, idx) in numButtons" :key="idx">
          <td><PopButton :idx="idx" :row_idx="row_idx"></PopButton></td>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import PopButton from './PopButton.vue'
import TableState from './TableState.js'

export default {
  name: 'PopRow',
  props: ['initnum', 'row_idx'],
  components: {
    PopButton
  },
  data(){
    return {
      numButtons: this.initnum
    }
  },

  methods: {
    onAddNewButton(){
      this.numButtons++
      TableState.insertNewButton(this.row_idx)
    },
    onDelNewButton(){
      if (this.numButtons <= 1){
        return
      }
      this.numButtons--
      TableState.deleteLastButton(this.row_idx)
    }
  },
  mounted(){
    TableState.insertNewRow(this.initnum)
  }

}
</script>
