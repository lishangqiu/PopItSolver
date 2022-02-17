<template>
    <Motion v-model="trigger" :trigger="['scale-100','scale-105']">
      <button class="rounded-full border-4 border-red-800 mx-1"
        @click="enabled = !enabled; getColor(); onClickButton();" @mouseover="over=true; getColor()" @mouseleave="over=false; getColor()" :class="color">
      </button>
    </Motion>
</template>

<script>

import Motion from 'tinymotion'

const inactiveClass = 'bg-red-300 w-14 h-14'
const activeClass = 'bg-red-600 w-14 h-14'
const hoverClass = 'bg-red-400 w-14 h-14'

export default {
  name: 'PopButton',
  props: ['init_state'],
  components: { Motion },
  data(){
    return {
      enabled: this.init_state,
      over: false,
      color: inactiveClass,
      trigger: false
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
    },
    onClickButton(){
      this.trigger = !this.trigger
      // setInterval(() => { this.trigger = false }, 100)
    }
  },
  mounted(){
    this.getColor()
  }
}
</script>
