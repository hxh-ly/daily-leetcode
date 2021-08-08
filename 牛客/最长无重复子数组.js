//双指针+map
// 不存在 right移动
// 存在 left移到rihgt+1的位置

//重新开始
function maxLength(arr) {
  let left = 0, right = 0, max = 0;
  let myMap = new Map()
  while (right < arr.length) {
    if (!myMap.has(arr[right])) {
      myMap.set(arr[right], right)
    }
    else {
      /* 
        为什么left 要去math 因为left不能回头的
        不是left=right！！！  是等于第一次出现的right+1
       */
      left = Math.max(left, Number(myMap.get(arr[right])+1))
      myMap.set(arr[right], right)
    }
    max = Math.max(max, right - left + 1)
    right++;
  }
  return max
}
let arr = [2, 3, 4, 6, 5, 6, 2]
console.log(maxLength(arr));
