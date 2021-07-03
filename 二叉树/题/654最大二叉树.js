var constructMaximumBinaryTree = function (nums) {

  return helper(nums, 0, nums.length)
};

var helper = function (nums, left, right) {
  //right 已经出界了
  if (left == right) return null;
  //index
  let index =getMax(nums,left,right)
  //最大值
  let val = nums[index]
  //构建
  let root = new TreeNode(val)
  // 左边
  root.left = helper(nums, left, index)
  //右边
  root.right = helper(nums, index + 1, right)
  return root;
}

//找最大值
var getMax = function (arr, left, right) {
  let max = left;
  for (let i = left; i < right; i++) {
      if (arr[max] < arr[i]) {
          max = i
      }
  }
  return max;
}