//[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// 一。排序
// 1.按h（降序）
// 2. h相同 按k（升序）
// 二。按k插入（前插）


/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 
  people.sort((a, b) => {
      if (a[0] !== b[0]) {
          return b[0] - a[0]
      }
      else {
          return a[1] - b[1]
      }
  })
  let queue = []
  for (let i = 0; i < people.length; i++) {
      queue.splice(people[i][1], 0, people[i])
  }
  return queue;
};