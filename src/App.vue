<template>
  <div id="app" class="min-h-screen min-w-full mt-0 flex">
    <div class="bg-blue-600 w-72">
    </div>
    <div class="flex-grow w-auto">
      <div class="flex justify-center items-start">
        <div class="overflow-auto">
          <PopTable></PopTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PopTable from './components/PopTable.vue'

export default {
  name: 'App',
  components: {
    PopTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
