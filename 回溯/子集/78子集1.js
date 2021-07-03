//  001
//  010
//  ...
/* var subsets = function (nums) {
  let res = []
  let path = []
  let n = nums.length
  for (let i = 0; i < (1 << n); i++) {
    path = []
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) != 0) {
        path.push(nums[j])
      }
    }
    res.push(path)
  }
  return res
} */

const removeRepeat1 = (arr) => {
  const obj = {};
  return arr.filter(item => {
    if (!obj[item.toString()]) {
     //console.log(item.toString());  
      obj[item.toString()] = item.toString();
      return item;
    }
  });
 
  
}
const matrix = [
  [1, 2, 3, 4],
  [3, 4, 5, 6],
  [1, 2, 3, 4]
]

const ans1 = removeRepeat1(matrix);
console.log(ans1);
