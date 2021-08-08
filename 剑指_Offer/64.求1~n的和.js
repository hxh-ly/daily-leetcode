/* 
求 1 + 2 + 3 + ... + n
不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
*/
var sumNums = function (n) {
  //1 等差数列  Math.pow(n,2)+n >>1
  //2 递归  &&的短路代替if
  n && (n += sumNums(n - 1))
  return n;
}
console.log(-1 << 1);
console.log(~6);
