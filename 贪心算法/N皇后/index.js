function main() {
  //a ~z
  let record = Array(26)
  return process(0, record, n)
}
function process(i, record, n) {
  if (i == n) return 1;
  //统计有效路径
  let res = 0;
  //遍历record[i]的每一列
  for (let k = 0; k < n; k++) {
    //如果有效 说明和record不冲突 列和斜线不共线
    if (isValid(record, i, k)) {
      record[i] = k;
      res += process(i + 1, record, n)
    }
  }
  return res;
}

//验证正在遍历的行的k列有没有和已有record[i]有冲突的
function isValid(record, i, j) {
  for (let l = 0; l < i; l++) {
    //共列 共斜线
    if (j == record[l] || Math.abs(record[l] - j) == Math.abs(l - i)) {
      return false;
    }
  }
  return true;
}


