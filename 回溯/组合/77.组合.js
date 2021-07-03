//树
// for  ---->
// 递归


// n表示 1...n
// k表示 取k个数
function combine(n, k) {

  let res = []
  let path = []
  function backTracking(n, k, index) {
    if (path.length == k) {
      res.push([...path])
      return
    }
    for (let i = index; i < n - (k - path.length) + 1; i++) {
      path.push(i)
      backTracking(n, k, i + 1)
      path.pop()
    }
  }
return res;
}
