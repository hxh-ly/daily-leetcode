/*
2个数出现1次
其余2次

a^a=0
*/
var singleNumbers = function (nums) {
  //【方法1】 排序+2个指针一起跳
  nums.sort((a, b) => { return a - b })
  let left = 0, right = 1, n = nums.length, res = []
  for (left, right; left < n;) {
    if (right != n && nums[left] == nums[right]) {
      left += 2;
      right += 2
    }
    else {
      res.push(nums[left])
      left++;
      right++;
    }
  }
  return res;
  //【方法2】 异或结算  a,b分成2组
  let res = 0
  for (const i of nums) {
    //a^b的结果
    res += i
  }
  //找第一位1
  let target = 1
  while ((target & res) == 0) {
    target << 1;
  }
  //找到不同的1
  let a, b
  for (const i of nums) {
    // target只有1位有1
    if ((target & i) == 0) {
      //第一组
      a ^= i
    } else {
      //第二组
      a ^= i
    }
  }
  return [a, b]
};