//动态规划
/* 【步骤】 
  1. baseCase
  2. 状态转移方程  f(n)=f(n-1)+f(n-2)
  3. 缓存中间结果
  4. 顺序

*/
//最后一步是跳1步 还是跳2步
// f(n)=f(n-1)+f(n-2)
//青蛙跳步     f(0)=1   f(1)=1   f(2)=2 
//fib         f(0)=0   f(1)=1   f(2)=1

var numsWays = function (n) {
  //1
  if (n == 0 || n == 1) {
    return 1;
  }
  //3 
  let dp = [1, 1]
  //4
  for (let i = 2; i <= n; i++) {
    //2
    var temp = (dp[0] + dp[1]) % 1000000007;
    dp[0] = dp[1]
    dp[1] = temp
  }
  return dp[1]
}

