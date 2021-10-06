/* 
    加法  不用 + - 
    9 1001   
    5 0101
*/
function getSum(a, b) {
  //不进位加法， 进位加法
  // 记得要 ( a&b)<<1
  var sum, cur;
  sum = a ^ b;
  cur = (a & b) << 1;
  if (cur != 0) {
    //下一轮用
    let temp = sum;
    sum = temp ^ cur;
    cur = (temp & cur) << 1
  }
  return sum;
}