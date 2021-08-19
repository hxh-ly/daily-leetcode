/*
[1,2,3]

要求 ：  i%arr[i]  || arr[i]%i

[1,2,3]

[3,2,1]

[2,1,3]

*/
/* 
【思路】
类似全排列的 visited + 过滤剪枝
*/
var countArrangement = function (n) {
  let visited = Array(n + 1).fill(1), count = 0, step = 1;
  function backTracking(n, step) {
    if (step + 1 == n) {
      count++;
    }
    for (let i = 1; i <= n; i++) {
      if (visited[i] != 0) {
        visited[i] = 0
        if (i % step == 0 || step % i == 0) {
          countArrangement(n, step + 1)
        }
        visited[i] = 1;
      }
      return count;
    }
  }

}