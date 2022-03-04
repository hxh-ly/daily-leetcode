/* 
【思路】:
2*n 
使用 1*2 | 2*3 铺满
1*2 可以变形成 2*1

【例子】
n = [1,2,3,5]

*/
function main(n) {
  var dp = new Array(n+1).fill(0)
  dp[1] = 1
  dp[2] = 2
  dp[3] = 4
  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % 10007
  }
  return dp[n]
}

