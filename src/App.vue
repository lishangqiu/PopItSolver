<template>
  <div id="app">
    <p class="text-pink-600">askfdl</p>
    <table>
      <tr>
        <td><PopButton></PopButton></td>
        <td><PopButton></PopButton></td>
        <td><PopButton></PopButton></td>
      </tr>
    </table>
  </div>
</template>

<script>

import PopButton from './components/PopButton.vue'

export default {
  name: 'App',
  components: {
    PopButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
