/* 
题目： 
 匹配 （ [ } 

  特例：
 ]{

思路
遇到（ { [ 如栈
遇到 ) } ] （加一层栈是否为空)判断栈顶 
*/
var isValid = function (s) {
  if (s.length == 1) { return false }
  let leftStack = [], i = 0;
  while (i < s.length) {
    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
      leftStack.push(s[i])
    }
    if (s[i] == ')' || s[i] == ']' || s[i] == '}') {
      if (!compare(s[i], leftStack.pop())) {
        return false
      }
    }
    i++;
  }
  return leftStack.length === 0

};
var compare = function (a, b) {
  if (b == undefined) {
    return false
  }
  if (a.charCodeAt() == 93) return b.charCodeAt() == 91
  if (a.charCodeAt() == 125) return b.charCodeAt() == 123
  if (a.charCodeAt() == 41) return b.charCodeAt() == 40
}

let a = ['dsfa', 'daf']
let myMap = new Map()
for (let i in a) {
  myMap.set(a[i], 1)
}
console.log(myMap);