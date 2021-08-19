/**
 * @param {string} s
 * @return {string}
 */
/* 
输入："leetcode"
输出："leotcede"

*/
var reverseVowels = function (s) {
  let arr = s.split('')
  let left = 0, right = arr.length - 1;
  while (left < right) {
      while (!isLetter(arr[left]) && left <= arr.length - 1) {
          left++;
      }
      while (!isLetter(arr[right]) && right >= 0) {
          right--;
      }
      if (left < right) {
          swap(arr, left++, right--)
      }
  }
  return arr.join('')
};
function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
function isLetter(c) {
  return 'aeiouAEIOU'.indexOf(c) >= 0
}