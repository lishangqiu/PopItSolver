<template>
    <button class="rounded-full border-4 border-red-800 hover:scale-125"
    @click="enabled = !enabled; getColor()" @mouseover="over=true; getColor()" @mouseleave="over=false; getColor()" :class="color">
    </button>
</template>

<script>
const inactiveClass = 'bg-red-400 w-16 h-16'
const activeClass = 'bg-red-600 w-16 h-16 scale-125'
const hoverClass = 'bg-red-500 w-16 h-16'

export default {
  name: 'PopButton',
  data(){
    return {
      enabled: false,
      over: false,
      color: inactiveClass
    }
  },

  methods: {
    getColor(){
      if (this.enabled) {
        this.color = activeClass
      } else if (this.over) {
        this.color = hoverClass
      } else {
        this.color = inactiveClass
      }
    }
  }

}
</script>
