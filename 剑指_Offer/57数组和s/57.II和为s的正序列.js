/*
targert=9
【【2，3，4】,【4，5】】
*/
var findContinuousSequence = function (target) {
  //target   i    数量
  //（9-1）   2     4，5
  // (8-2)   3     2  3  4  
  // (6-3)   4 
  // (3-4)   5  
  // 没有下一轮了
  let res = []
  let i = 1;
  while (target > 0) {
    target -= i++
    if (target > 0 && target % i == 0) {
      let list = []
      for (let j = 0; j < i; j++) {
        list.push(target / i + j)
      }
      res.push(list)
    }
  }
  return res.reverse()



  //【方法2 双指针】
  let left = 1, right = 2, res = []
  while (left < right) {
    //[2,3,4]
    let sum = (left + right) * (right - left + 1) / 2
    if (sum == target) {
      let list = []
      for (let i = left; i <= right; i++) {
        list.push(i)
      }
      res.push([...list])
      //[3,4]
      //[5,5] break
      left++; //走完 往下
    }
    if (sum < target) {
      //[3,4,5]
      //不够扩充
      right++
    }
    if (sum > target) {
      [4, 5]
      //超出减少
      left++;
    }
  }
  return res;
}