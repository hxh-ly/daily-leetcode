var nthUglyNumber = function (n) {
  //丑数由前面的数 *2 、 3 、5 得到
  //转移方程：dp[i] = Math.min(dp[id2] * 2, dp[id3] * 3, dp[id5] * 5) 
  // 取最小~
  let dp = Array(n).fill(0)
  dp[0] = 1
  let id2 = 0, id3 = 0, id5 = 0
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[id2] * 2, dp[id3] * 3, dp[id5] * 5)
    if (dp[i] == dp[id2] * 2) {
      id2++;
    }
    if (dp[i] == dp[id3] * 3) {
      id3++;
    }
    if (dp[i] == dp[id5] * 5) {
      id5++;
    }
  }
  return dp[n - 1]
};
let g = nthUglyNumber(10)
console.log(g);
