//选择排序 
//1.  0(n2)
//   N-1 轮排序
//2.  每次选取i的数为开始 去循环比  结束交换i和最小idx的位置
//3.  循环完i

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
function selectSort(arr) {
  let res = Number.MAX_VALUE
  for (let i = 0; i < arr.length; i++) {
    //最小值
    res = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[res]) {
        res = j
      }
    }
    swap(arr, i, res)
  }
  console.log(arr);

}
let arr = [2, 8, 6, 9, 12, 1]
selectSort(arr)

/* function test(arr) {
  let n = arr.length
  for (let i = 0; i < n; i++) {
    let min = i
    for (let j = i + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    swap(arr, i, min)
  }
  console.log(arr);
}
test([5,4,1,3,0,6]) */