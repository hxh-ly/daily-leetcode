var combinationSum3 = function (k, n) {
  let res = []
  let path = []
  var backTracking = function (path, n, k, cur, index) {
      if (path.length == k && cur == n) {
          res.push([...path])
          return
      }
      if (cur > n || path.length >= k) {
          return
      }

      for (let i = index; i <= 9; i++) {
          path.push(i)
          cur += i
          backTracking(path, n, k, cur, i + 1)
          path.pop()
          cur -= i
      }

  }
  backTracking(path,  n,k, 0, 1)
  return res;
};