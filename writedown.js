var s = "I, man, am regal; a German am I."
//var s="0P"
/*  var pattern = new RegExp(
   "[`_~!@#$^&*()\"-=|{}:;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]")  */
var reg = /\\|\/|\?|\？|\*|\"|\“|\;|\.|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\=|\+|\”|\'|\‘|\’|\<|\>|\{|\}|\[|\]|\【|,|\】|\：|\_|\:|\、|\^|\$|\!|\~|\`|\|/g; var rs = "";
for (var i = 0; i < s.length; i++) {
  // console.log(s.charAt(i)+"111");

  rs = rs + s.substr(i, 1).replace(reg, "");
  //console.log(rs);

}
console.log(rs)
let maxMove = 2, m = 2, n = 2
/* let dp = []
for (let i = 0; i < maxMove + 1; i++) {
  dp[i] = Array(2)
  for (let j = 0; j < m; j++) {
    dp[i][j] = Array(2)
    for (let k = 0; k < n; k++) {
      dp[i][j][k] = 0
    }
  }
}

console.log(dp); */
/* let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
for (const item of directions) {
  console.log(item[0]);

} */
console.log(3 >> 2 == 0);
