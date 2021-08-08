var swap = function (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/* 
a+b >b+a   ‘a’>‘b’ （ b在前面）
 */
var minNumber = function (arr) {
  arr.sort((a, b) => {
    console.log(a + '' + b);
    return Number(a + '' + b) - Number(b + '' + a)
  })
  return arr.join('')
}



