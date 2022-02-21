/* let mask = 4
mask |= (1 << 3)


console.log(mask); //12  先<< 在 |
let a = 4;
a |= 8 */
var a = [1, 2, 3]
console.log(a);
var visited = Array(a.length).fill(0)
var res = [], path = []
var backtracking = function () {
  if (path.length == a.length) {
    res.push([...path])
    return
  }
  for (let i = 0; i < a.length; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      path.push(a[i])
      backtracking()
      path.pop()
      visited[i] = 0
    }
  }
}
backtracking()
console.log(res);
console.log(Math.random()*7);