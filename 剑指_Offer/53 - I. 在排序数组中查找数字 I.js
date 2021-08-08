/* 输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
【题目特点】
升序
加重复
【二分】
寻找第一个>=target  ---> leftIdx
寻找第一个>target   ---> rightIdx
r-l+1
*/
const binarySearch = (nums, target, lower) => {
  let left = 0, right = nums.length - 1, ans = nums.length;
  while (left <= right) {
    let mid = ~~(left + (right - left) / 2)
    if (arr[mid] > target || (lower && arr[mid >= target])) {
      right = mid - 1;
      ans = mid
    }
    else {
      left = mid + 1
    }
  }
  return ans
}

var search = function (nums, target) {
  let ans = 0;
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
    ans = rightIdx - leftIdx + 1;
  }
  return ans;
};
