let n = 5, left = 0, right = 1, count = 1
let path = [[3, 1], [8, 1], [7, 3], [0, 3], [4, 2]]
var max = 0;

console.log(path)
var minLeft = parseInt(path[left][0]) + parseInt(path[left][1])
var maxRight = 0
while (left < n) {
  if (right >= n) {
    max = Math.max(max, count)
    left++;
    count = 0;
    if (left < n) {
      minLeft = parseInt(path[left][0]) + parseInt(path[left][1])
      right = left + 1;
    }
    continue;
  }
  maxRight = parseInt(path[right][0]) - parseInt(path[right][1])
  if (minLeft < maxRight) {
    console.log(`[${left}]-[${right}]`);

    count++;
    minLeft = parseInt(path[right][0]) + parseInt(path[right][1])
  }
  right++;
}
console.log(max);