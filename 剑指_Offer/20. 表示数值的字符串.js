var isNumber = function (s) {
  let hasDot = false, hasNum = false, hasSign = false, hasE = false
  let count = 0
  while (count < s.length && s[count] == " ") {
    count++;
  }
  while (count < s.length) {
    let c = s[count]
    //num 

    //+ -  前面不能有数字 点 + -  E(刷新过)

    //e   前面不能有E 比有数字

    // .  不能有. E 

    //空  跳出

    //其他    false
  }
  for (let i = count; i < s.length; i++) {
    if (s[i] != " ") {
      return false
    }
  }
  return hasNum

}