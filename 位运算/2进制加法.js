var addBinary = function (a, b) {
  // 1 抹平
  // 2 进位+
  let i = a.length - 1, j = b.length - 1,step=0;
  var arr = []
  while (i >= 0 || j >= 0) {
      var in_i = i >= 0 ? a.charAt(i) - '0' : 0;
      var in_j = j >= 0 ? Number(b[j]) : 0;
      var res = in_i + in_j
      console.log(res);
      arr.push((res+step)%2 ) //本位
      step = ~~((res+step)/2)
      i--;
      j--;
  }
  if(step) {
      arr.push(1)
  }
  return arr.reverse().join('')
};
console.log(addBinary('111','01') ); // 1000