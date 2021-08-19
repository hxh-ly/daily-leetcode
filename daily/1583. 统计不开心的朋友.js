/* 
之前男生x和女生u是一对
x 找不太幸福 y
u 找不太幸福 v

n = 4, 
preferences = 
[[1, 2, 3], 
[3, 2, 0], 
[3, 1, 0], 
[1, 2, 0]],

pairs = [[0, 1], [2, 3]]

*/
/* 
【思路】
order 存放 在x朋友心中对应的排序
match 存放对应的配对人
for(x){
  找 match
  找 match对应人的下标
  在perferences【x】[idx]之前找 u
  找u对应的v
  order[u][x]<order[u][v] 不幸福
}
 */
var unhappyFriends = function (n, preferences, pairs) {
  let order = Array(n).fill(0).map(() => Array(n).fill(0))
  //order  存放i朋友列表其他人在i中idx排序
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      order[i][preferences[i][j]] = j
    }
  }
  let count = 0
  //match 存放匹配的人
  let match = Array(n).fill(0)
  for (const p of pairs) {
    let p1 = p[0], p2 = p[1]
    match[p1] = p2;
    match[p2] = p1;
  }
  //i为每一位朋友x
  for (let i = 0; i < n; i++) {
    const y = match[i]
    const idx = order[i][y]
    //idx靠前的人
    for (let j = 0; j < idx; j++) {
      //所有可能的u
      const u = preferences[i][j]
      const v = match[u]
      if (order[u][i] < order[u][v]) {
        count++;
        //下一个朋友x
        break;
      }
    }
  }
  return count;
};