/**
 * @param {number[][]} points
 * @return {number}
 */
/* 
map 存储一轮中距离相同的值
2 ——> 2
3 --> 6
4 --> 12
5 -->20
记得清空

*/
var numberOfBoomerangs = function (points) {
  let myMap = new Map()
  var res = 0
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i != j) {
        let sum = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2)
        //console.log(sum);
        if (!myMap.has(sum)) {
          myMap.set(sum, 1)
        }
        else {
          let n = myMap.get(sum)
          myMap.set(sum, n + 1)
        }
      }
    }
    //一轮结束后清空
    for (const [key, value] of myMap) {
      res += value * (value - 1)
    }
    myMap.clear()
  }
  return res
};



function check(num, a, b) {
  var x = (num[a][0] - num[b][0]) * (num[a][0] - num[b][0])
  var y = (num[a][1] - num[b][1]) * (num[a][1] - num[b][1])

  return x + y
}