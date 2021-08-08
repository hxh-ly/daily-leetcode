/*      A[0]  A[1]  A[2]   A[3]  A[4]
B[0]     1      2     3      4    5
B[1]     1      1
B[2]     1      2      1
B[3]                        1
B[4]                              1

【规律】
上三角                    下三角
B[0]=0
B[1]=B[0]*A[0]
B[2]=B[1]*A[1]        B[2]*A[3]*A[4]
B[3]=B[2]*A[2]        B[3]*A[4]
B[4]=B[3]*A[3]       B[4]
*/
/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  if (a.length == 0) return []
  let B = Array(a.length).fill(0), temp = 1
  B[0] = 1
  for (let i = 1; i < a.length; i++) {
    B[i] = B[i - 1] * a[i - 1]
  }
  for (let i = a.length - 2; i >= 0; i--) {
    temp *= a[i + 1]
    B[i] = B[i] * temp
  }
  return B;
};
