const swap=require('./util')
function selectionSort(arr) {
  let l = arr.length - 1;
  if (arr == null || arr.length < 2) {
    return
  }
  //外层0  1 , 2,
  for (let i = 0; i < l; i++) {
    let minIndex = i;
    
    //内层 0-1, 1-2, 2-3, 3-4,4-5 找最小
    for (let y = i + 1; y < l+1; y++) {
      minIndex = arr[minIndex] < arr[y] ? minIndex : y
    }
    swap(arr, i, minIndex);
  }

  return arr;
}

//测试
let arr = [2, 8, 6, 9, 12, 1]
console.log("排序前：",arr);
let selectonArr = selectionSort(arr)


console.log(selectonArr);

