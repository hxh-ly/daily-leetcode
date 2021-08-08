/* 
【题目】
01234567891011

n=11 返回0
n=12 返回1
*/
/* 
规律
0-9        1  9  1
10-99     2  90  10
100-999   3  900  100  


*/
var aa = function (n) {
  let digit = 1, count = 9, start = 1
  while (n > count) {
    n -= count
    digit++;
    start *= 10
    count = digit * start * 9
  }
  let number = start + (n - 1) / digit
  return String(number)[(n - 1) / digit] - '0'
}