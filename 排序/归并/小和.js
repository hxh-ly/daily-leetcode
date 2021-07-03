function process(arr, l, r) {
  if (l == r) {
    return
  }
  let mid = l + ((r - l) >> 1);
  //console.log(mid);
  return process(arr, l, mid) + process(arr, mid + 1, r) + merge(arr, l, mid, r);
  //console.log(arr);

}
function merge(arr, l, mid, r) {
  //console.log(r - l + 1);

  let help = new Array(r - l + 1);
  let i = 0;
  let res = 0;
  let p1 = l;
  let p2 = mid + 1;
  while (p1 <= mid && p2 <= r) {
    //求的是右边多少数比左边大  ==  求逆序对
    //marge 左右对比 右跨的时候 右大于左 才会产生小和
    //res 累加 左右有序了
    res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0;
    //区别： 右先走
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }
  while (p1 <= mid) {
    help[i++] = arr[p1++]
  }
  while (p2 <= r) {
    help[i++] = arr[p2++]
  }


  for (i = 0; i < help.length; i++) {
    arr[l + i] = help[i]
  }
  console.log(res);
  return res;


}
let arr = [2, 1, 4, 3, 6, 5]
//let sum=process(arr, 0, arr.length - 1);
//console.log(sum);
console.log(process(arr, 0, arr.length - 1));




// 2T(N/2)+O(N)
// a =2 b=2 d=1  
//O(N^d * logN ) 