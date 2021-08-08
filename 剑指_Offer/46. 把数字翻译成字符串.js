/*
【题目】
12258
翻译成
【1,2,2,5,8】
【1，2，25，8】
【1，22，5，8】
【12，2，5，8】
【12，25，8】
*/
类似青蛙跳台阶,  最后一步跳2格还是跳1格
var translateNum = function (num) {
  //dp[i]=dp[i-1]+dp[i-2]  (10<=i<=25)
  //dp[i]=dp[i-1]
  num = String(num)
  let dp = Array(num.length + 1)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= num.length; i++) {
    let str = Number(num.substring(i - 2, i)) //[0,2)
    if (str >= 10 && str <= 25) {
      //2步到 | 1步到
      dp[i] = dp[i - 2] + dp[i - 1]
    } else {
      //只能拆开 dp[n-1]走1步到
      dp[i] = dp[i - 1]
    }
  }
  return dp[num.length]
}