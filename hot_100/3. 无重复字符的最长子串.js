/* 
“pwwkew”
最长无重复字串
"wke"
和最长无重复子序列
"pwke" (不连续)
*/
var lengthOfLongestString = function (s) {
  var length = s.length;
  var myMap = new Map()
  let left = 0, right = 0;
  while (right < length) {
    if (!myMap.has(s[right])) {
      myMap.set(s[right])
    } else {
      //理解为：统计过了就不再统计到了某个位置的最长字串
      //"tmmzuxt"  如果不max 就会跳回最开始的位置。mmzuxt里面起始由重复了 
      // 要最近一个不重复的位置。
      left = Math.max(left, myMap.get(s[right]) + 1)
      myMap.set(s[right], right)
    }
    max = Math.max(max, right - left + 1)
    //console.log(max)
    right++;
  }
  return max
}