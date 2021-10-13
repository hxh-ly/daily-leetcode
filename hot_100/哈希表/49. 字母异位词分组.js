/* 
【题目】:给你一个字符串数组，请将字母异构词组合在一起。可以按任意顺序返回结果列表。
字母异构词： [abc] [bac] [bca] ....
【思路】:  1.遍历strs数组，保留原item,对item进行sort
          2.map，存储
          3.遍历value到res中
*/

/**  
** @param {string[]} strs
** @return {string[][]}
**/
var groupAnagrams = function (strs) {
  var res = []
  let otherStrs = strs.slice()
  var myMap = new Map()
  //1
  for (let i = 0; i < otherStrs.length; i++) {
    var t = otherStrs[i]
    otherStrs[i] = t.split('').sort().join('')
  //2
    if (!myMap.has(otherStrs[i])) {
      myMap.set(otherStrs[i], [t])
    }
    else {
      myMap.set(otherStrs[i], myMap.get(otherStrs[i]).concat(strs[i]))
    }
  }
  // console.log(myMap)
  //3
  for (let [key, value] of myMap) {
    res.push(value)
  }
  return res;

}