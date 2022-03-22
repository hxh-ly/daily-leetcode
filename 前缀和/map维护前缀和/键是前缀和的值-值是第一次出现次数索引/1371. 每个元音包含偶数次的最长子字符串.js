/*
【题目】：
给你一个字符串s:请返沪满足一下条件的最长字符串
如果存在 a e i o u  必须存在的个数是偶数！！的最长字符串
【例子】：
 输入  s='e leetminicowor oep'
 输出  leetminicowor
【思路】
1.求前缀和
2.map统计长度

[:i]的状态state
[:j]的状态state
[i:j]=[:j]-[:i] 表示符合题目要求的state

特殊情况[:-1]的state是0
*/
let arr = ['a', 'e', 'i', 'o', 'u'], myMap = new Map([[0, 0]])
let ans = new Array(s.length + 1).fill(-1)
//初始化-1 为了不和后面产生0混淆
ans[0] = 0
//1
for (let i = 1; i <= ans.length; i++) {
  let c = s[i - 1]
  //如果是 a e i o u 就更新前缀和
  for (let j = 0; j < arr.length; j++) {
      if (c == arr[j]) {
          ans[i] = ans[i - 1] ^ (1 << (arr.length - j - 1))
          break;
      }
  }
  //不然就沿用之前的前缀和
  if (ans[i] == -1) {
      ans[i] = ans[i - 1]
  }
//2
for (let i = 1; i <= ans.length; i++) {
  if (myMap.has(ans[i])) {
    //计算长度的 eleetminicowor
    //         [8 *********** 8] 第一个8是不能包括的  所以是【i+1,j】
    //         所以同样起点1为开始  需要初始化 【0，0】
    //         为了满足 i-j 的初始化的起点 【0，0】
      res = Math.max(res, i - myMap.get(ans[i]))
  } else {
      myMap.set(ans[i], i)
  }
}
}