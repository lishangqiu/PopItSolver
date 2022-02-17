<template>
  <div class="flex items-center px-2 pb-2">
    <button @click="onAddNewButton">
        <img src="@/assets/add-outline.svg" class="w-9 h-9 rounded-full mr-2">
    </button>
    <div class="rounded-lg border-4 border-red-400 px-2 py-1 flex">
      <div v-for="(item, idx) in allButtonStates" :key="idx">
        <td><PopButton :init_state="allButtonStates[idx]"></PopButton></td>
      </div>
    </div>
  </div>
</template>

<script>
import PopButton from './PopButton.vue'

export default {
  name: 'PopRow',
  components: {
    PopButton
  },
  data(){
    return {
      allButtonStates: [false]
    }
  },

  methods: {
    onAddNewButton(){
      this.allButtonStates.push(false)
    }
  }

}
</script>
