/* 
实现 pow( )
//递归

*/

// 2  10 
// 4   5
// 16*16*4  2 
// 256      1
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) return 1;
  if (n == 1) return x;
  if (n == -1) return parseFloat(1 / x)
  if (n % 2 == 0) {
    return myPow(x * x, n / 2)

  } else {

    return myPow(x * x, (n - 1) / 2) * x
  }

};


//迭代
var myPow = function (x, n) {
  let res
  if (n == 0) return 1;
  if (n == 1) return x;
  if (n < 0) {
    n = -n;
    x = parseFloat(1 / x)
  }
  //       3  5
  //  sum=1*3 
  //       9   2
  //       81   1
  // sum=1*81
  //             0(退出)       
  while (n > 0) {
    if ((n & 1) == 1) res *= x;
    n = n >> 1;
    x *= x
  }
  return res;
};
