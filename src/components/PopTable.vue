<template>
    <table class="ml-10">
      <tr>
          <PopRow></PopRow>
          <PopRow></PopRow>
      </tr>
    </table>
</template>

<script>

import PopRow from './PopRow.vue'

export default {
  name: 'PopTable',
  components: {
    PopRow
  },
  data(){
    return {
      enabled: false,
      over: false
    }
  },

  methods: {
  }

}
</script>
