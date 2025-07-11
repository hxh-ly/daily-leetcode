/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length;
  let pre_max = Array(n).fill(0);
  pre_max[0] = height[0];
  for (let i = 1; i < n; i++) {
    pre_max[i] = Math.max(pre_max[i - 1], height[i]);
  }
  let suf_max = Array(n).fill(0);
  suf_max[n - 1] = height[n - 1];
  for (let i = n - 2; i > -1; i--) {
    suf_max[i] = Math.max(suf_max[i + 1], height[i]);
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += Math.min(suf_max[i], pre_max[i]) - height[i];
  }
  return ans;
};

/* 
知道一部分的前缀最大值、后缀最大值
木桶高度为两者的最小值
*/

/* 
最小的已经知道他能借多少了
两个哨兵，谁矮谁动，矮的顺便把水接了
*/
var trap2 = function (height) {
    let n = height.length;
    let left = 0, right = n - 1;
    let pre_max = 0, suf_max = 0;
    let ans = 0;
    while (left <= right) {
        pre_max = Math.max(pre_max, height[left])
        suf_max = Math.max(suf_max, height[right]);
        if (pre_max < suf_max) {
            ans += (pre_max - height[left]);
            left++;
        } else {
            ans += (suf_max - height[right]);
            right--;
        }
    }
    return ans;
};