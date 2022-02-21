/**
 * @param {number[]} nums
 * @return {number}
 */
 var countQuadruplets = function(nums) {
  let count=0,path=[]
  
  var backTracking=function(nums,first){
  if(path.length==4){
      if(path[0]+path[1]+path[2]==path[3]){
          count++;
      }
      return
  }
     for(let i=first;i<nums.length;i++){
     
         path.push(nums[i])
         backTracking(nums,i+1)
         path.pop()
     }
      
  }
  backTracking(nums,0)
  return count
};
