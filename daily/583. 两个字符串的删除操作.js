/* 
【同】1143 最长公共子序列同
【题目】给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，
每步可以删除任意一个字符串中的一个字符。
【题意】 找出最长公共子序列 === 要求删除字符数最少
*/
var minDistance = function (text1, text2) {
  let tl1 = text1.length
  let tl2 = text2.length
  //1 dp[i][j] text[0 ~ i-1] text[0 ~ i-2] 最长公共子序列
  var dp = Array.from(new Array(tl1), () => new Array(tl2).fill(0))
  //2 dp[i][j] = dp[i-1][j-1]+1 ( text1[i] == text2[j] )
  //           = Math.max(dp[i][j-1],dp[i-1][j]) 
  //3 初始0
  //4 上下 左右
  //5 打印
  for (let i = 1; i <= tl1; i++) {
    for (let j = 1; j <= tl2; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }
  return dp[tl1][tl2]
}