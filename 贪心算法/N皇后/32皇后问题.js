let a = 9;
//0001 1111 1111
console.log((1 << a) - 1);

let b = 10;
//01010
//取最右边
let pos = b & (~b + 1)
console.log(pos);
// colLit 0 能填皇后
function process(limit, colLit, leftDiaLim, rightDiaLim) {
  //baseCase 最后列限制==limit
  if (colLit == limit) return 1;

  let mostRightOne = 0
  //1 能填皇后的选位置  1111 1111   limit截取左侧全是11111  
  let pos = limit & (~(colLit | leftDiaLim | rightDiaLim))
  let res = 0;
  while (pos != 0)
    //取出 0000 0001
    mostRightOne = pos & (~pos + 1)
    //1111 0010
  pos = pos - mostRightOne
    // 下一次 col 0000 0001
    //       left 0000 0010
    //       right 0000 0000
  res += process(limit,
    colLit | mostRightOne,
    leftDiaLim | mostRightOne << 1,
    rightDiaLim | mostRightOne >>> 1
  )
  return res;
}
