/* 
【题目】：给定一个经过编码的字符串，返回它解码后的字符串
k[encoded_string]
s= '3[a2[c]] '
   accaccacc

【思路】：栈
遇到 】 出栈
其余 入栈   
(注意数字字符的位数)
*/
var decodeString = function (s) {
  let stack = [], i = 0;
  while (i < s.length) {
    //  其他
    if (s.charAt(i) != ']') {
      stack.push(s.charAt(i))
    }
    //  】
    else {
      var pStr = ''
      var str = ''
      var numString = ''
      //1 出栈到 【
      while (stack[stack.length - 1] != '[') {
        str = stack.pop() + str
      }
      stack.pop() //[
      //2 收集数字
      while (stack[stack.length - 1] >= 0 || stack[stack.length - 1] <= 9) {
        numString = stack.pop() + numString
      }
      var num = Number(numString)
      while (num) {
        pStr += str
        num--;
      }
      //3 入栈
      for (let i = 0; i < pStr.length; i++) {
        stack.push(pStr[i])
      }
    }
    i++;
  }
  return stack.join('')

}

