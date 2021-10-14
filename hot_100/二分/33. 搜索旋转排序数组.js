/* 
【题目】
nums=[4,5,6,7,0,1,2]
target=0
输出：4
找不到输出 -1
  O（logn)

【思路】  
二分    有序   部分有序（继续二分）
1. 特判 length:0|1
2. 【 】二分
3.  === return
    num[0]<num[mid] 这部分有序
    { }
    else  这部分可能有序
    {}
*/
var search = function (nums, target) {
  //   一部分有序，另一部分可能有序，可能部分有序
  // <=   0   n
  if (nums.length == 0) return -1
  if (nums.length == 1) return nums[0] == target ? 0 : -1
  let n = nums.length - 1
  let left = 0, right = n
  while (left <= right) {
    var mid = left + ~~((right - left) / 2)
    // 有序
    if (nums[mid] == target) {
      return mid
    }
    if (nums[0] <= nums[mid]) {
      //在有序这边
      if (nums[0] <= target && target <= nums[mid]) {
        right = mid - 1
      }
      //在部分有序这边
      else {
        left = mid + 1
      }
    }
    //部分有序
    else {
      if (nums[mid] <= target && target <= nums[n]) {
        left = mid + 1
      }
      //在有序那边
      else {
        right = mid - 1
      }
    }
  }
  return -1
};

