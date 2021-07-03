const swap = require('./util')
function insertSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  //让i   0-1 有序  0-2有序 
 /*  for (let i = 1; i < arr.length; i++) {

    for (let y = i - 1; y >= 0 && arr[y] > arr[y + 1]; y--) {
      swap(arr, y, y + 1)
    }
  } */
  for(let i=1;i<arr.length;i++){
    for(let j=i;j>0;j--){
      if(arr[j]<arr[j-1]){
        swap(arr,j-1,j);
      }
    }
  }
  console.log(arr);

}
let arr = [34, 1, 53, 2, 3, 4, 5, 3]
insertSort(arr)

//时间复杂度： O（n^2)最差  O(1)
