/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s1) {
  var index = 0;
  //去除前导空格
  var s = s1.replace(/^\s*/g, "")
  var str = ""
  var n = 0
  var reg = /^(\d{1,}|\-|\+)/ig  
  var flag = reg.test(s)
  if (flag) {
    if (s.charAt(0) == '-'||s.charAt(0) == '+') {
      s.charAt(0) == '-'?index=-1:index=1
      s = s.substr(1)
      if(/^[^0-9]/.test(s.charAt(0))||!s.length)
      return 0;
    }
    console.log(s)
    //开始提取出
         var rule2 = /[0-9]/
    for (var i = 0; i < s.length; i++) {
      if (s.charAt(i) != '' && rule2.test(s.charAt(i))) { 
        str = str + s.substr(i, 1)
      }
      else
        break;
    }
  }
  else {
    return 0;
  }
  str.replace(/^0*/,"")
  if (index == -1)
    n = -parseInt(str)
  else
    n = parseInt(str)
  return (n >= -2147483648 && n <= 2147483647  ? n : n >= 2147483647 ? 2147483647 : -2147483648);
  };
   
  console.log(myAtoi("-+12"));
  
  