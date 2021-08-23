/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let min = Number.MAX_VALUE
  let max = Number.MIN_VALUE
  let temp = 1
  for (const i of nums) {
    if (i < min) {
      min = i
    }
    if (i > max) {
      max = i;
    }
  }
  while (min != 0) {
    temp = max % min
    max = min
    min = temp
  }
  return max
};

/* var sp = function (a, b) {
  if (a % b == 0) {
    return b
  }
  if (a < b) {
    return sp(b, a)
  }
  else {
    return sp(a, a % b)
  }

} */

findGCD([2, 5, 6, 9, 10])