
/* 
给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的每个数字在每个组合中只能使用一次。
输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

*/
// 减法


 var combinationSum2 = function (candidates, target) {
  let res = []
  let path = []
  candidates = candidates.filter(x => { return x <= target }).sort((a, b) => { return a - b })
  // 传index 和传 i的区别   有没有剪枝
  var backTracking = function (candidates, target, path, index) {
      if (target == 0) {
          res.push([...path])
          return
      }
      if (target < 0) {
          return;
      }
      if (index >= candidates.length) {
          return
      }
      for (let i = index; i < candidates.length; i++) {
          if (i > index && candidates[i] == candidates[i - 1]) {
              continue;
          }
          path.push(candidates[i])
          backTracking(candidates, target - candidates[i], path, i + 1)
          path.pop()
      }
     
  }
  backTracking(candidates, target, path, 0);
  return res;
};