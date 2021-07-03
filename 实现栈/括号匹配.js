let arr = '{([])}'
let arr1 = '{(]()}'
function check(arr) {
  let z = []
  for (let i = 0; i < arr.length; i++) {
    //左就入
    if (arr[i] == '{' || arr[i] == '[' || arr[i] == '(') {
      z.push(arr[i])
      console.log(z)
    }
    //空就结束  如果是最后一个不匹配
    if (z.length != 0) {
      if ((arr[i] == '}' || arr[i] == ']' || arr[i] == ')')) {
        let a = z.pop()
        let num = Math.abs(arr[i].charCodeAt() - a.charCodeAt())
        if (num == 1 || num == 2) {
          continue;
        } else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  }
  return true;
}
console.log(check(arr1));
