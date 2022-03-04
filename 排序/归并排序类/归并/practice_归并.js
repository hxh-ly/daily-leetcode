function process(arr, l, r) {
  if(l<r) {
    let mid = l + ((r - l) >> 1)
    process(arr, l, mid)
    process(arr, mid + 1, r)
    merge(arr, l, r, mid)
  }
}
function merge(arr, l, r, mid) {
  let idx = 0, less = l, more = mid + 1, help = new Array(r - l + 1).fill(0)

  while (less <= mid && more <= r) {
    help[idx++] = arr[less] < arr[more] ? arr[less++] : arr[more++];
  }
  while (less <= mid) {
    help[idx++] = arr[less++]
  }
  while (more <= r) {
    help[idx++] = arr[more++]
  }
  for (let i = 0; i < (r - l + 1); i++) {
    arr[i + l] = help[i]
  }
}
var arr = [1, 2, 5, 3, 4, 66, 124, 35]
process(arr, 0, arr.length - 1)
console.log(arr);
/* 
O(n) = n logn
*/