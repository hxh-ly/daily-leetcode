var wiggleMaxLength = function (nums) {
  let n = nums.length;
  if (n < 2) return n;
  let pre = nums[1] - nums[0]
  let ret = pre !== 0 ? 2 : 1
  for (let i = 2; i < n; i++) {
    const diff = nums[i] - nums[i - 1]
    //选择 锋 和 谷  使得序列尽可能长
    if (pre <= 0 && diff > 0 || pre >= 0 && diff < 0) {
      ret++;
      pre = diff
    }
  }
}