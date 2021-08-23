/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  //dp[i][j][k] 表示前i个物品在重量 j个0 k个1时的最大子串数
  // dp[j][k] 表示在重量j个0 k个1时的最大子串数
  
  /*  let dp = Array.from(new Array(strs.length + 1), () => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)))
   for (let i = 1; i <= strs.length; i++) {
     let arr = trans01(strs[i - 1])
     let zeroNum = arr[0], oneNum = arr[1]
     for (let j = 0; j <= m; j++) {
       for (let k = 0; k <= n; k++) {
         dp[i][j][k] = dp[i - 1][j][k]
         if (j >= zeroNum && k >= oneNum) {
           dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zeroNum][k - oneNum] + 1)
         }
       }
     }
   }
   return dp[strs.length][m][n] */
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= strs.length; i++) {
    let arr = trans01(strs[i - 1])
    let zeroNum = arr[0], oneNum = arr[1]
    for (let j = m; j >= zeroNum; j--) {
      for (let k = n; k >= oneNum; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - zeroNum][k - oneNum] + 1)
      }
    }
  }
  return dp[m][n]
};
var trans01 = function (s) {
  let arr = [0, 0]
  for (let i = 0; i < s.length; i++) {
    arr[s[i] - '0']++;
  }
  return arr;
}
// @lc code=end

