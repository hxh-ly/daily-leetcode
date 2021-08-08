/* 
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
*/

var majorityElement = function (nums) {
  //map
  let n = nums.length
  let res = 0
  let myMap = new Map()
  for (let i = 0; i < n; i++) {
    if (!myMap.has(nums[i])) {
      myMap.set(nums[i], 1)
    } else {
      myMap.set(nums[i], Number(myMap.get(nums[i])) + 1)
    }
    if (myMap.get(nums[i]) >= n / 2) {
      res = num[i]
      return
    }
  }

  return res
  //排序 因为有一半相同
  nums.sort((a, b) => { return a - b })
  return nums[~~(n/2)]
};
console.log(~~1.2);
