// 1 加法
var combinationSum = function (candidates, target) {
  var backTracking1 = function (candidates, target, cur, index) {
    if (cur == target) {
      res.push([...path])
      return
    }
    if (cur > target) {
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      path.push(candidates[i])
      cur += candidates[i]
      backTracking(candidates, target, cur, index)
      path.pop()
      cur -= candidates[i]
    }
  }
  backTracking1 (candidates, target, 0, 0)
};
//2  跳过

  var backTracking2 = function (candidates, target, path, index) {
      if (target == 0) {
          res.push([...path])
          return
      }
      if (index == candidates.length) {
          return
      }

      backTracking2(candidates, target, path, index + 1)


      if (target - candidates[index] >= 0) {
          path.push(candidates[index])
          backTracking(candidates, target - candidates[index], path, index)
          path.pop()
      }
  }
  backTracking2(candidates, target, path, 0)

  //3 减法
  var backTracking3 = function (candidates, target, path, index) {
    if (target == 0) {
        res.push([...path])
        return
    }
    if (target < 0) {
        return;
    }
    for (let i = index; i < candidates.length; i++) {
        path.push(candidates[i])
        backTracking3(candidates, target - candidates[i], path, i)
        console.log(target - candidates[i])
        path.pop()
    }
}
backTracking3(candidates, target, path, 0)