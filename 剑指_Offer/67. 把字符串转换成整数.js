/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  //1.过滤空格
  //2.确定正负号
  //3.计算值部分
  //4.得到值判断越不越界
  if (str.length == 0) { return 0 }
  let i = 0, total = 0, num, sign = 1;
  const l = str.length, min = -(2 ** 31), max = 2 ** 31 - 1
  while (str.charAt(i) === ' ' && i < l) i++
  if (str.charAt(i) === '+' || str.charAt(i) === '-') {
    sign = str.charAt(i++) == '+' ? 1 : -1
  }
  while (i < l) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) break;
    total = 10 * total + (str.charAt(i++) - '0')
  }
  num = sign * total
  return num <= min ? min : (num >= max ? max : num)
};
