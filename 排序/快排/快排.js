const swap = require('../util')
function main(arr) {
  if (arr == null || arr.length < 2)
    return
  quickSort(arr, 0, arr.length - 1)
}
function quickSort(arr, L, R) {
  if (L < R) {
    //随机
    swap(arr, parseInt((R - L + 1) * Math.random()), R)
    let p = parttition(arr, L, R)
    quickSort(arr, L, p[0] - 1)
    quickSort(arr, p[1] + 1, R)
  }
}
function parttition(arr, L, R) {
  let less = L - 1;
  let more = R;
  while (L < more) {  // 自身和 >区左边界撞上停止
    if (arr[L] < arr[R]) {
      swap(arr, ++less, L++)  // <区右走 自身++  i++
    } else if (arr[L] > arr[R]) {
      swap(arr, --more, L)  //左扩  i原地
    } else L++
  }
  swap(arr, more, R)  //交换大于边界和选定的R
  return [less + 1, more]      //[5,5 ] 边界
}
let arr = [4, 3, 5, 6, 5, 0, 1, 7, 8, 5]
main(arr);
console.log(arr);

//时间O （nlogn）   累加期望
//空间   差： O (N) 开N层   
       //好: 