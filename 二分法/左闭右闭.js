// 闭 闭   可以取等于的情况  right=mid-1;

function binSearch_first(arr, k) {
  let left = 0, right = arr.length-1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (arr[mid] >= k) {
      right = mid-1; // 要不要right = mid-1
    } else
      left = mid + 1;
  }
  console.log(left);
  console.log(right);
  console.log(arr[left]); //right过头
}
binSearch_first([2,2,3,4,5,5,5,5,5,5,6,13],5)
function binSearch_last(arr, k) {
  let left = 0, right = arr.length-1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (arr[mid] > k) {
      right = mid-1; // 要不要right = mid-1
    } else
      left = mid + 1; //left过头
  }
  console.log(left);
  console.log(right);
  console.log(arr[--left]);
}
binSearch_last([2,2,3,4,5,5,5,5,5,5,6,13],5)