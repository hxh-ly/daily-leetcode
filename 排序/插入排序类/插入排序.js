const swap = require('../util')
function insertSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  //和前面的换
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j)
      }
    }
  }
  console.log(arr);
}
let arr = [34, 1, 53, 2, 3, 4, 5, 3]
insertSort(arr)

//时间复杂度： O（n^2)最差  O(1)
