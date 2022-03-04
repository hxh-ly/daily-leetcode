let swap = function (arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}
function main(arr) {
  console.log("l原来：", arr);

  if (arr == null || arr.length < 2)
    return
  quickSort(arr, 0, arr.length - 1) 
  console.log(arr);
}
function quickSort(arr, L, R) {
  if (L < R) {
    //随机
    swap(arr, parseInt(Math.random() * (R - L + 1) + L, 10), R)
    let p = partition(arr, L, R)
    quickSort(arr, L, p[0] - 1)
    quickSort(arr, p[1] + 1, R)
  }
}
function partition(arr, L, R) {
  let less = L - 1;
  let more = R;
  while (L < more) {  // 自身和 >区左边界撞上停止
    if (arr[L] < arr[R]) {
      swap(arr, ++less, L++)  // <区右走 自身++  i++
    } else if (arr[L] > arr[R]) {
      swap(arr, --more, L)  //左扩  i原地
    } else {
      L++
    }
  }
  swap(arr, more, R)  //交换大于边界和选定的R
  return [less + 1, more]      //[5,5 ] 边界
}
let arr =["3","6","7","10"]
//let arr = [5, 2, 7, 1, 23, 51, 14]
var arr111= [33,7,6,8,0, 5, 1, 2, -1, 3]
main(arr111);


//时间O （nlogn）   累加期望
//空间   差： O (N) 开N层   
       //好: 