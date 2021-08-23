var minimizeTheDifference = function (mat, target) {
  let m = mat.length, n = mat[0].length
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0).map(() => new Array(target).fill(0)))
  //console.log(dp)
};
minimizeTheDifference([[1,2,3],[4,5,6],[7,8,9]],13)
