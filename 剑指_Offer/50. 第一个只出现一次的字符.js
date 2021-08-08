/* 
【题目】
找到第一次出现的字符
【方法】
1.hash
2.
*/

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (s.length == 0) return " "
  let myMap = new Map()
  for (let i = 0; i < s.length; i++) {
    //如果不存在
    if (!myMap.has(s[i])) {
      myMap.set(s[i], 1)
    } else {
      myMap.set(s[i], myMap.get(s[i]) + 1)
    }
  }
  for (const [key, value] of myMap) {
    if (value == 1)
      return key
  }
  return " "
};