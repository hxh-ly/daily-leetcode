let nums = [2, 7, 13, 17], target = 19;
const twoNum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    // 如果差值在map的key找到   返回 value是index，是本轮nums的i
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      //没找到添加 (key,value)
      map.set(nums[i], i)
    }
  }
  return []
}
console.log(twoNum(nums, target));
