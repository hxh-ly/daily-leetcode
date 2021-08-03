/*
【思路】
排序，取前k个数
*/
let arr = [5, 1, 2, 5, 77, 4]
var getLeastNumbers = function (arr, k) {
  /*  arr.sort((a, b) => {
       return a - b
   })
   arr.length = k
   return arr */
  if (arr == null || arr.length < 2)
    return
  quickSort(arr, 0, arr.length - 1)
  console.log(arr)
  arr.length = k
  return arr
};
function quickSort(arr, L, R) {
  if (L < R) {
    //随机处理
    swap(arr, parseInt(Math.random() * (R - L + 1) + L, 10), R)
    let p = partation(arr, L, R)
    quickSort(arr, L, p[0] - 1)
    quickSort(arr, p[1] + 1, R)
  }
}
function partation(arr, L, R) {
  let less = L - 1, more = R
  while (L < more) {
    if (arr[L] < arr[R]) {
      swap(arr, L++, ++less)
    }
    if (arr[L] > arr[R]) {
      swap(arr, L, --more)
    } else {
      L++
    }
  }
  swap(arr, more, R)
  return [less + 1, more]
}
function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}


getLeastNumbers(arr, 4)