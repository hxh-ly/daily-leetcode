/* 
【题目】
nums1 是 nums2 子集
找在nums1 的每个元素在nums2对应元素的下一个更大
【思路】
比他小的入stack，比他大的while出 用map存
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function (nums1, nums2) {
  var myMap = new Map(), stack = [nums2[0]], arr = []
  for (let i = 1; i < nums2.length; i++) {
      while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
          var k = stack.pop()
          myMap.set(k, nums2[i])
      }
      stack.push(nums2[i])
  }
 // console.log(myMap)
  for (let i = 0; i < nums1.length; i++) {
      if (myMap.has(nums1[i])) {
          arr.push(myMap.get(nums1[i]))

      } else {
          arr.push(-1)
      }
  }
  return arr

};