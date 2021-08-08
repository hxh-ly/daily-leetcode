/* 
a=1 b=2
不能用 + - * /
用二进制 ^ & >> 
*/

function add(a, b) {
  if (b == 0) {
    return a
  }
  return add(a ^ b, (a & b) >> 1)
}