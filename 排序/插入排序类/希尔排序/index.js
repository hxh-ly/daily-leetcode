const swap = require("../../util")

let arr = [99, 5, 33, 56, 13, 22, 55, 77, 48, 12, 88, 2, 69, 99]
function insertSort(arr) {
  if (arr == null || arr.length <= 1) {
    return
  }

  for (let d = ~~(arr.length / 2); d > 0; d = ~~(d / 2)) //7  3    1
  {
    //遍历组
    for (let i = d; i < arr.length; i++) {
      //组内是插入排序
      //跟同组的前比换位置
      for (let j = i - d; j >= 0; j -= d) {
        if (arr[j] > arr[j + d]) {
          swap(arr, j, j + d)
        }
      }
    }
  }
  console.log(arr);
}
insertSort(arr)