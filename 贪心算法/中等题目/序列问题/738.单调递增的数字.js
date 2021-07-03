var monotoneIncreasingDigits = function (n) {

  /*  给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。
 
 （当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）
 
 示例 1:
 
 输入: N = 10
 输出: 9
 示例 2:
 
 输入: N = 1234
 输出: 1234
 示例 3:
 
 输入: N = 332
 输出: 299 */


  const strN = n.toString().split('').map(x => +x)
  let i = 1;
  //第一个不满足的数
  while (i < stsrN.length && strN[i] > strN[i - 1]) {
    i++
  }
  //如果没找到第一个不满足 就可以return了
  if (i < strN.length) {
    //修改前面大的数
    while (i > 0 && strN[i - 1] > strN[i]) {
      strN[i - 1] -= 1;
      //注意前面的前面 也要检查
      i--;
    }
  //满足递增了  i现处在修改过的位置上，所以 i+1
    for (i += 1; i < strN.length; i++) {
      strN[i] = 9
    }
  }
  return Number(strN.join(''))
}