/* 
【题目】
给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

回文字符串 是正着读和倒过来读一样的字符串。

子字符串 是字符串中的由连续字符组成的一个序列。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
s='abc'  3 
*/
var countSubstrings = function (s) {
  //1 dp[i][j] 表示 i~j 是不是回文串
  //2 dp[i][j]  i==j?  距离小 直接 true
  //                   距离大  判断dp[i+1][j-1]
  //3 初始化全false
  //4 遍历 如果从上到下 左到右  dp[i+1][j-1]取不到值
  //5 打印
  var n = s.length
  var res = 0
  var dp = Array.from(new Array(n).fill(0), () => new Array(n).fill(false))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] == s[j]) {
        if (j - i <= 1) {
          res++;
          dp[i][j] = true
        } else if (dp[i + 1][j - 1]) {
          res++;
          dp[i][j] = true
        }
      }
    }
  }
  return res;


  //双指针   for ...n   每个位置往左右阔 分1个中间值和2个中间值
}