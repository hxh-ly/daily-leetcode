/* 
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
*/
//dfs  
//key! 【剩余括号的数量】 left为0 right为0终止
var generateParenthesis = function (n) {
  if (n == 0) return []
  let res = []
  dfs("", n, n, res)
  return res
}
var dfs = function (cur, left, right, res) {
  if (left == 0 && right == 0) {
    res.push(cur)
    return
  }
  //左先用 还是比右多就return了
  //剩余 右括号的数量必须严格大于剩余左括号的数量
  if (left > right) {
    return
  }
  if (left > 0) {
    dfs(cur + '(', left - 1, right, res)
  }
  if (right > 0) {
    dfs(cur + ")", left, right - 1, res)
  }
}

//dp
var generateParenthesis = function (n) {
  //
  //状态转移：dp[i]= "( dp[p] )"+dp[q]    p+q=i-1
  //顺序  i=2  开始j=0
}

