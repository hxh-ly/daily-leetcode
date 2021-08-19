/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
  //1.basecase
  //2.状态转移  dp[i][j][k] 到第i天截止 缺席j次数和连续迟到k的次数 还能拿奖的组合数
  // dp[i][0][0]= dp[i-1][0][0] + dp[i-1][0][1] + dp[i-1][0][2]
  // dp[i][0][1] =dp[i-1][0][0]
  // dp[i][0][2]= dp[i-1][0][1]

  // dp[i][1][0]=dp[i-1][0][0]+dp[i-1][0][1]+dp[i-1][0][2]  +  dp[i-1][1][0]+dp[i-1][1][1]+dp[i-1][1][2]
  // dp[i][1][1]= dp[i-1][1][0]
  // dp[i][1][2]= dp[i-1][1][1]
  //3.中间
  //4.顺序

  //   let dp = [1, 1, 0, 1, 0, 0]

};
checkRecord(3)
