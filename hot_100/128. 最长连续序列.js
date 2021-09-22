/* 
要求O(n),只要在数组位置不需要连续
hashset 
*/
var longestConsecutive = function (nums) {
  var set = new Set(nums), max = Number.MIN_VALUE
  for (const i of set) {
    //  i是连续数列的开头
    // i-1  while(i+1) .....
    if (!set.has(i - 1)) {
      var y = i
      //尝试统计
      while (set.has(y + 1)) {
        y++;
      }
    }
    max = Math.max(max, y - x + 1)
  }
  return max
}