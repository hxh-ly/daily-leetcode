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
//console.log(rs)
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
//console.log(3 >> 2 == 0);
//let dp = Array.from(new Array(4), () => new Array(2).fill(0).map(() => new Array(2).fill(0)))
/* var testBe = function (arr) {
  let left = 0, right = 1, count = 0;
  while (left < arr.length) {
    if (arr[left] == arr[right] && count < 2) {
      left += 2;
      if (arr[left] != arr[right]) {
        count++;
      }
      right += 2;
    } else {
      return false
    }
  }
  return true
}

let arr = 'ABAB'
let path = []
let count = 0;
let visit = [1, 1, 1, 1]
var backTracking = function (arr) {
  if (path.length == arr.length) {
    console.log(path);
    count++;
    return
  }
  for (var i = 0; i < arr.length; i++) {
    //visit[i-1] 也是可以访问 但你访问了相同的其他兄弟 剪枝掉
    if (i > 0 && arr[i] == arr[i - 1] && visit[i - 1] == 1) {
      continue;
    }
    if (visit[i] == 1) {
      visit[i] = 0
      path.push(arr[i])
      backTracking(arr)
      visit[i] = 1
      path.pop()
    }
  }
} */

/* let arr = "111101101010001010101011"
let left = 0, right = 1, res = 0;
let myMap = new Map([[0, 0], [1, 0]])
let stay = 0
while (right < arr.length) {
  if (arr[left] != arr[right]) {
    console.log(left, "left处不同");
    if (stay == 0) {
      stay = left;
    }
    res = Math.max(res, right - stay + 1)
    left++;
    right++;
  } else {
    stay = 0;
    left++;
    right++;
  }

} */
/* let arr = "3 5 100 10".split(' ').map(x => Number(x))
console.log(arr);
let x = arr[0]
var f = arr[1]
var d = arr[2]
var p = arr[3]

var res = 0
let remain = d - x * f
if (remain < 0) {
  console.log(Math.floor(d/x)) 
} else if (remain > 0) {
  console.log( Math.floor(remain/(p+x))+f)
} else {
  console.log(f)
} */

/* let regg = /[0-9]?/g
console.log(regg.test('11')); */
console.log(~~(3 / 2));