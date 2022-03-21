/* 
实现 NumArray 类：
NumArray(int[] nums) 使用数组 nums 初始化对象
int sumRange(int i, int j) 返回数组 nums 中索引 left 和 right 之间的元素的 总和
*/
var NumArray = function (nums) {
  //第一位为0，多移动一位
  this.ans = new Array(nums.length + 1).fill(0)
  for (let i = 1; i <= nums.length; i++) {
      this.ans[i] = this.ans[i - 1] + nums[i - 1]
  }
};
NumArray.prototype.sumRange = function (left, right) {
  ////所以right得+1,
  return this.ans[right+1] - this.ans[left]
};