/* 
迷宫从走上走到右下的最小和
grid = 
[[1,3,1],
[1,5,1],
[4,2,1]]
输出：7 （1->3->1->1->1)
*/

var gird = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
/* dp */
var minPathSum = function (gird) {
  let dp = Array.from(new Array(gird.length).fill(0), () => { return new Array(gird[0].length).fill(0) })
  dp[0][0] = gird[0][0]
  for (let i = 0; i < gird.length; i++) {
    for (let j = 0; j < gird[0].length; j++) {
      if (i == 0 && j != 0) dp[i][j] = gird[i][j] + dp[i][j - 1]
      if (j == 0 && i != 0) dp[i][j] = gird[i][j] + dp[i - 1][j]
    }
  }

  for (let i = 1; i < gird.length; i++) {
    for (let j = 1; j < gird[0].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + gird[i][j]
    }
  }
  console.log(dp);
  return dp[gird.length - 1][gird[0].length - 1]
}
/* 
dfs + 记忆化
*/
var minPathSum111 = function (gird) {
  let M = gird.length //行
  let N = gird[0].length //列
  if (gird == null || gird.length == 0) return 0;
  let memo = Array.from(new Array(M).fill(0), () => { return new Array(N).fill(-1) })
  var dfs = function (gird, i, j) {
    if (i >= M || j >= N) return Number.MAX_VALUE
    if (memo[i][j] > -1) return memo[i][j]
    if (i == M - 1 && j == N - 1) return gird[M - 1][N - 1]
    var down = dfs(gird, i + 1, j)
    var right = dfs(gird, i, j + 1)
    memo[i][j] = gird[i][j] + Math.min(down, right)
    return memo[i][j]

  }
  let a = dfs(gird, 0, 0);
  console.log(memo);

  return a
};
minPathSum(gird)