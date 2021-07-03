/* console.log('a'.charCodeAt());
var num = 97;
String.fromCharCode(num);  // 'a' */

var letterCombinations = function (disgits) {
  //全局存放
  let res = []
  if (disgits == null || disgits.length == 0) {
    return res
  }
  let path = ''
  let numString = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  var backTracking = function (disgits, numString, index) {
    if (disgits.length == index) {
      res.push(path)
      return
    }
    let str = numString[disgits.charAt(index) - 0]
    for (let i = 0; i < str.length; i++) {
      path += str.charAt(i)
      backTracking(disgits, numString, index++)
      // pop()
      path = path.substr(0, path.length - 1)
    }
  }
  backTracking(disgits, numString, 0)
  return res;
}
