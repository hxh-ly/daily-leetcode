//找第一个相等的元素,  应该从右向左收缩
function binSearch(arr, k) {
  let left = 0, right = arr.length;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (arr[mid] >= k) {
      right = mid // 要不要right = mid-1
    } else
      left = mid + 1;
  }
  console.log(left);
  console.log(right);
  console.log(arr[left]);
}
//binSearch([2,2,3,4,5,5,5,5,5,5,6,13],5)

//找最后一个元素   左向右靠
function binSearch_last  (arr, k) {
  let left = 0, right = arr.length;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (arr[mid] > k) {
      right = mid // 要不要right = mid-1
    } else {
      left = mid + 1;
    }
  }
  console.log(left);
  console.log(right);
  console.log(arr[--left]);
}
binSearch_last([2,2,3,4,5,5,5,5,5,5,6,13],5)