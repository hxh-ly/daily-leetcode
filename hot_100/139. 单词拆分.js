/* 
题目：
给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，
判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

s = "leetcode", wordDict = ["leet", "code"]

s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]  false
*/
/* 
思路：
dp【i】 表示前i个数构成的字符串是否能拆分成字典里的一个或者多个
dp[0] 表示 ""合法
*/
var wordBreak = function (s, wordDirt) {
  let myMap = new Map()
  for (let i in wordDict) {
    myMap.set(wordDict[i], 1)
  }
  var dp = new Array(s.length + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= s.length; i++) {
    //[0~i-1]的字符串 能由字典里的元素构成
    for (let j = 0; j < i; j++) {
      if (dp[j] && myMap.has(s.substring(j, i))) {
        dp[i] = 1;
        break;
      }
    }
  }
  return dp[s.length]
}