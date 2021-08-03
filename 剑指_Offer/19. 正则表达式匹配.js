/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/* 
let s="abcdddddeee"
let p="abcd*e*"
判断匹配


转移方程
f[i] [j]f[i][j] 代表 AA 的前 ii 个和 BB 的前 jj 个能否匹配

对于前面两个情况，可以合并成一种情况 f[i][j] = f[i-1][j-1]

对于第三种情况，对于 c*c∗ 分为看和不看两种情况

不看：直接砍掉正则串的后面两个， f[i][j] = f[i][j-2]
看：正则串不动，主串前移一个，f[i][j] = f[i-1][j]

*/

//动态规划
var isMatch = function (s, p) {
  let f = []
  //f[i][j] 表示 s[i]和p[j]是否匹配
  for (let i = 0; i <= s.length; i++) {
    f[i] = Array(p.length)
    for (let j = 0; j <= p.length; j++) {
      f[i][j] = 0
    }
  }
  //f[0][0] 是表示空匹配ture
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j <= p.length; j++) {
      if (j == 0) {
        //空正则
        f[i][j] = i == 0;
      } else {
        //非空
        //1.无*
        if (p[j - 1] != '*') {
          if (i > 0 && (s[i - 1] == p[j - 1] || p[j - 1] == '.')) {
            //保存状态
            f[i][j] = f[i - 1][j - 1]
          }
        }
        //2.有*
        else {
          //不看 c*砍掉
          if (j >= 2) {
            f[i][j] |= f[i][j - 2]
          }
          //看 匹配A的最后一个
          if (i >= 1 && j >= 2 && (s[i - 1] == p[j - 2] || p[j - 2] == '.')) {
            f[i][j] |= f[i - 1][j];
          }
        }
      }
    }

  }
  return f[s.length][p.length]
};