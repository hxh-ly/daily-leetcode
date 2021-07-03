/* var solveNQueens = function (n) {
  let res = []
  let path = []
  //申请8皇后 0000 0000 1111 1111
  let limit = (1 << n) - 1
  var process = function (limit, col, left, right) {
      if (col == limit) { console.log(path); return 1; }
      //能放的位置 1能放  截掉左侧
      let pos = limit & (~(col | left | right))

      let mostRightOne = 0
      let res = 0
      while (pos != 0) {
          //最右侧位1
          mostRightOne = pos & (~pos + 1)
          pos = pos - mostRightOne
          console.log((col | mostRightOne).toString(2))
          path.push((col | mostRightOne).toString(2))
          res += process(limit, col | mostRightOne, (left | mostRightOne) << 1, (right | mostRightOne) >>> 1)
      }

      return res;
  }
  let a = process(limit, 0, 0, 0)
  console.log(a)
}; */
/* let a = [[1, 2, 3], [1, 34, 5]]
a[1][0] = 10
console.log(a)
function newTwoArray(n) {
  var arr = new Array();             //声明一维数组        
  for (var x = 0; x < n; x++) {
    arr[x] = new Array();        //声明二维数组
    for (var y = 0; y < n; y++) {
      arr[x][y] = 0;          //数组初始化为0
    }
  }
return arr
}
let aaa=newTwoArray(4)
aaa[1][1]=10
console.log(aaa) */
let aa = 'dsfsfs'
for (let i = 0; i < aa.length; i++) {
  console.log(aa[i])
}