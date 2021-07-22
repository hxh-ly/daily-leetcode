//动态规划
var fib = function (n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else {
    let db = [0, 1]
    for (let i = 2; i <= n; i++) {
      var temp = (db[0] + db[1]) % 1000000007
      db[0] = db[1]
      db[1] = temp
    }
    return db[1]
  }
}
//递归超时