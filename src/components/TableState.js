const initNum = 3
export default {
  tableStates: [],
  getNumRows(){
    if (this.tableStates.length === 0){
      return initNum
    }
    // Return the last row's length
    return this.tableStates[this.tableStates.length - 1].length
  },
  insertNewRow(numElements){
    const tempArr = Array(numElements)
    tempArr.fill(false)
    this.tableStates.push(tempArr)
  },
  insertNewButton(rowIdx){
    this.tableStates[rowIdx].push(false)
  },
  deleteLastButton(rowIdx){
    this.tableStates[rowIdx].pop()
  },
  pressButton(rowIdx, buttonIdx){
    this.tableStates[rowIdx][buttonIdx] = true
    console.log(this.tableStates)
  }
}
