/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  //二维逆序
  properties.sort((b, a) => {
    if (a[0] == b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })
  let res = 0, last = 0, bhi = 0
  for (let i = 0; i < properties.length; i++) {
    let a = properties[i][0]
    let b = properties[i][1]
    if (i > 0 && a < properties[i - 1][0]) {
      bhi = Math.max(bhi, properties[last][1])
      last = i
    }
    if (b < bhi) {
      res++;
    }
  }


  return res

};
