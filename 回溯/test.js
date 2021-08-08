/**
 * @param {number[]} nums
 * @return {number}
 */

 
 /*  
 一个是 if(return 的条件)
 一个是first+1  和 i+1 
 */


var triangleNumber = function (nums) {
  let path = [], res = []
  function backTrack(nums, path, first) {
    if (path.length == 3 ) {
      console.log(path);
      
      res.push([...path])
      return
    }
    for (let i = first; i < nums.length; i++) {
      path.push(nums[i])
      //console.log(path, "i:", i, "层数:", first)
      backTrack(nums, path, i + 1)
      path.pop()
      //console.log("pop后", path, first)
    }
  }
  backTrack(nums, path, 0)
};
let arr = [2, 2, 3, 4]
triangleNumber(arr)