/* 
text1 = "abcde", text2 = "ace" 
3
"ace"   'ace'
*/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  //1 dp[j][j]  表示 text1[0,i-1] 与text[0,j-1] 的最长公共子序列（不连续）
  //2 dp[i][j]=dp[i-1][j-1]+1 （t1[i]==t2[j]）
  //            =Math.max(dp[i-1][j],dp[i][j-1])
  //3 dp初始0
  //4从上到下 从左到右
  //5打印
  var dp = Array.from(new Array(text1.length + 1), () => new Array(text2.length + 1).fill(0))
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[text1.length][text2.length]
};
