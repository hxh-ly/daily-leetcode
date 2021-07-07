/**
 * @param {number[][]} points
 * @return {number}
 */
//1____6
// 2_______8
//       7________12
//            10_______16

//找到重叠的点 更新尾部（为0)
var findMinArrowShots = function (points) {

  points.sort((a, b) => { return a[1] - b[1] })
  //至少射出一针
  let count = 1;
  for (let i = 1; i < points.length; i++) {
    //不是挨着
    if (points[i][0] > points[i - 1][1]) {
      count++;
    }
    //挨着 他的部分结束 （取min）和前面的融为一体 
    else {
      points[i][1] = Math.min(points[i][1], points[i - 1][1])
    }
  }
  return count;
};