/* 
s = "babad"
'bab' 'aba'
*/
/* 中心扩散 */
var longestPalindrome = function (s) {
  var left = 0, right = 0
  for (let i = 0; i < s.length; i++) {
    let l1 = spreadCenter(s, i, i)
    let l2 = spreadCenter(s, i, i + 1)
    let l = Math.max(l1, l2)
    if (l > right - left + 1) {
      left = i - ~~((l - 1) / 2)
      right = i + ~~(l / 2)
    }
  }
  return s.substring(left, right + 1)
}
var spreadCenter = function (s, i, j) {
  while (i >= 0 && j < s.length && s[i] == s[j]) {
    i--;
    j++
  }
  return j - i - 1;
}
/* 
dp 
记住 从下往上，从左往右
*/
var longestPalindrome = function (s) {
  var n = s.length
  var res = Number.MIN_VALUE
  var dp = Array.from(new Array(n).fill(0), () => new Array(n).fill(false))
  var left = 0, right = 0
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] == s[j]) {
        if (j - i <= 1) {

          dp[i][j] = true
        } else if (dp[i + 1][j - 1]) {
          dp[i][j] = true
        }
      }
      //总计最大距离
      if (dp[i][j] && j - i + 1 > res) {
        right = j
        left = i
        res = j - i + 1
      }
    }
  }
  return s.substring(left, right + 1);
};