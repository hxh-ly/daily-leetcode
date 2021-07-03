//固定1个位置 其余位置全排列
//固定第二个位置 其余位置全排列
/* var permute = function (nums) {
  let res = []
  let output = nums.slice(0)
  var swap = function (nums, start, end) {
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
  }
  backTracking = function (output, first) {
    if (first == output.length) {
      res.push([...path])
      return
    }
    for (let i = first; i < output.length; i++) {
      swap(output, i, first)
      backTracking(output, first + 1)
      swap(output, i, first)
    }
  }
}
 */
/* let str1 = 'uied'
let str2 = 'cbag'
var findSame = function (str1, str2) {
  let arr1 = str1.split('').sort()
  let arr2 = str2.split('').sort()
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(findSame(str1, str2));
 */
/* let aa = [',a','ads']
console.log(aa.join('')); */
let aa='asda'
aa-='a'
console.log(aa);
let gg=['z','x']
let x=gg.sort()
console.log(x)

