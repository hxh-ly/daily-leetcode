// 找到最大的数
// count[max+1] 
// count 计数
// result[]
//遍历count  >0   加入result count--
// 优化 max-min
/* let nums = [-1,3,2,6,7,-2]
function countSort(nums) {
  let max = Number.MIN_VALUE
  let min = Number.MAX_VALUE
  max = Math.max(...nums)
  min = Math.min(...nums)
  let count = Array(max - min + 1).fill(0)
  for (let item in nums) {
    console.log(nums[item])
    count[nums[item] - min]++
  }
  //计数
  console.log(count);
   //将负倒正 其余在最小里面做文章

  let result = []
  let index = 0
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      result[index++] = i + min
      count[i]--;
    }
  }
  console.log(result)
 

}
countSort(nums) */
let i=0
let nums=[2,3,4]
let k=6
while(k>0){
  i++;
console.log(nums[i])
k--
}