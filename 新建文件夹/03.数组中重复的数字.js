//这一题的关键是时空复杂度要求


// T(n)=O(n)
// S(n)=O(n)
var findRepeatNumber = function (nums) {
  let max = Math.max.apply(null, nums)
  let count = Array(max + 1).fill(0)
  for (let i of nums) {
    count[i]++;
    if (count[i] >= 2) {
      return i
    }
  }
  return -1
}

//排序
// T(n)=O(nlogn)
// S(n)=O(1)
var findRepeatNumber = function (nums) {
  nums.sort((a, b) => { return a - b })
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] == nums[i]) return nums[i]
  }

}
