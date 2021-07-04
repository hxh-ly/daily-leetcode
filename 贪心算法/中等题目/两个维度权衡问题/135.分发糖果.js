/* 题目

老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。

你需要按照以下要求，帮助老师给这些孩子分发糖果：

每个孩子至少分配到 1 个糖果。
评分更高的孩子必须比他两侧的邻位孩子获得更多的糖果。
那么这样下来，老师至少需要准备多少颗糖果呢？
 1 2，87，87，87，2，1，
【 1，2，3，1，3，2，1】




*/
// 先 前 到 后
// 再 后 到 前 (max 要满足前到后)
//
var candy = function (ratings) {

  let n = ratings.length
  let candy = Array(n).fill(1)
  // 前往后
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1])
      candy[i] = candy[i - 1] + 1;
  }
  //后往前
  for (let j = n - 2; j >= 0; j--) {
    if (ratings[j] > ratings[j + 1]) {
      candy[j] = Math.max(candy[j], candy[j + 1] + 1)
    }
  }
  return candy.reduce((pre, cur) => { return cur + pre }, 0)
};