/* 
461 汉明距离
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目

*/
var hanmingDistance = function (x, y) {
  //如何获取最右边的一位 &0x01
  //右移比较
  var a, b, count = 0;
  while (x && y) {
    a = x & 0x01;
    b = y & 0x01;
    if (a == b) {
      count++;
    }
    x >>= 1;
    y >>= 1;
  }
  return count;

}