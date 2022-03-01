import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      tableState: []
    }
  },
  mutations: {
    onAddNewRow(numElements){
      const tempArr = Array(numElements)
      tempArr.fill(false)
      this.tableStates.push(tempArr)
    },
    onDelLastRow(){
      this.tableStates.pop()
    }
  },
  actions: {
  },
  modules: {
  }
})
