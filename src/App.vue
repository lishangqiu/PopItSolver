<template>
  <div id="app">
    <PopTable></PopTable>
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
  text-align: center;
  margin-top: 60px;
}
</style>
