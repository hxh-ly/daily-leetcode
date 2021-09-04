function process(arr, l, r) {
  if (l == r) {
    return
  }
  let mid = l+((r-l)>>1)
   //console.log(mid);
  
  process(arr, l, mid);
  process(arr, mid + 1, r);
  merge(arr, l, mid, r)
  //console.log(arr);

}
function merge(arr, l, mid, r) {
      console.log(r-l+1);
      
  let help = new Array(r - l + 1);
  let i = 0;
  let p1 = l;
  let p2 = mid + 1;
  while (p1 <= mid && p2 <= r) {
    //多加了 ++
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
  }
  while (p1 <= mid) {
    help[i++] = arr[p1++]
  }
  while (p2 <= r) {
    help[i++] = arr[p2++]
  }
 
  
  for (i = 0; i < help.length; i++) {
    arr[l+i] = help[i]
  }

}
let arr=[2,1,4,3,6,5]
process(arr,0,arr.length-1);
console.log(arr);

// 2T(N/2)+O(N)
// a =2 b=2 d=1  
// 时间：O(N^d * logN ) 
// 空间：O（N)