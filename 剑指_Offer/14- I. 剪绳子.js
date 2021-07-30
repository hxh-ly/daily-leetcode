/* 
【题目】
9=3+3+3
9=3+2+2+2

返回 result=3*3*3=27
 
*/
/**
 * @param {number} n
 * @return {number}
 */
//数论知识
/* 
  1*4=2*2
  2*3>1*5
所以数字尽量拆成 ！2和3！
*/
var cuttingRope = function (n) {
  if (n <= 3) return n - 1;
  let div = Math.floor(n / 3)
  let rem = n % 3
  let result = 1
  for (let i = 0; i < div; i++) {
    // i<div-1 留最后一个3综合考虑 余数做取舍
    result *= i < div - 1 ? 3 : (rem == 2 ? rem * 3 : (rem + 3))
    if (result >= 1000000007) {
      result = result % 1000000007
    }
  }
  return result;
};


//方法二 dp
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  //dp[i] 长度i的绳子的值
  //1.basecase
  //2.状态转移
  //3.中间结果
  //4.顺序
  if (n <= 3) return n - 1;
  let dp = Array(n + 1).fill(0)
  dp[2] = 1;
  for (let i = 3; i < n + 1; i++) {
    //第一段 [2,i)
    for (let k = 2; k < i; k++) {
      dp[i] = Math.max(dp[i], Math.max(k * (i - k), k * dp[i - k]))
    }
  }
  return dp[n]
};