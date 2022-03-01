<template>
  <Motion v-model="enabled" :trigger="['scale-100','scale-105']">
    <button class="rounded-full border-red-800 mx-0.5 my-1 align-middle"
      @click="onClickButton();" @mouseover="over=true; getColor()" @mouseleave="over=false; getColor()" :class="color">
    </button>
  </Motion>
</template>

<script>

import Motion from 'tinymotion'
import TableState from './TableState.js'

const squareSide = 20
const borderSize = 5

const inactiveClass = `bg-red-300 w-${squareSide} h-${squareSide} border-${borderSize}`
const activeClass = `bg-red-600 w-${squareSide} h-${squareSide} border-${borderSize}`
const hoverClass = `bg-red-400 w-${squareSide} h-${squareSide} border-${borderSize}`

export default {
  name: 'PopButton',
  props: ['row_idx', 'idx'],
  components: { Motion },
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
    },
    onClickButton(){
      if (this.enabled){
        return
      }
      this.enabled = true
      this.getColor()
      TableState.pressButton(this.row_idx, this.idx)
      // setInterval(() => { this.trigger = false }, 100)
    }
  },
  created(){
    this.borderSize = borderSize
  },
  mounted(){
    this.getColor()
  }
}
</script>
