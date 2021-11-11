/* 
【题目】:
task表示cpu执行的任务列表
每个任务一个单位时间执行
相同任务必须长度n的冷却时间
A A A B B B 2
A B '' A B '' A B  8

【思路】：
 (count-1)*(n+1)+MaxCount
 count:最大频数
 n:间隔时间
 1: (count-1)组 每组 (n+1) 个 
 最后：剩下频数 频数相同可能有多个
*/
var leastInterval = function (tasks, n) {
  //策略是让 cpu不能闲置
  //   count 最大频数个数 
  // 最大频数可能多个相同
  //(count-1)*(n+1)+ MaxCount
  let arr = new Array(26).fill(0)
  let maxCount = 0
  for (let i of tasks) {
    arr[i.charCodeAt() - 'A'.charCodeAt()]++;
  }
  arr.sort((a, b) => a - b)
  for (let i = 25; i >= 0; i--) {
    if (arr[i] == arr[25]) {
      maxCount++;
    }
  }
  return Math.max(((arr[25] - 1) * (n + 1) + maxCount), tasks.length)
};
