var minimumDifference = function (nums, k) {
  if (nums.length == 1) return 0
  let path = [], res = Number.MAX_VALUE
  var backtracking = function (nums, k, path, step) {

    if (path.length == k) {

      let min = Math.min(...path)
      let max = Math.max(...path)
      res = Math.min(max - min, res)
      console.log(res)
      return
    }



    for (let i = step; i < nums.length; i++) {
      path.push(nums[i])

      backtracking(nums, k, path, i + 1)
      path.pop()
    }
  }
  backtracking(nums, k, path, 0)
  console.log(res);
};

let nums = [9, 4, 1, 7], k = 2
minimumDifference(nums, k)