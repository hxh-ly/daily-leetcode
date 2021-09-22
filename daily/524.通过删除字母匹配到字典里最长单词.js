var findLongestWord = function (s, dictionary) {
  /* 
  字典排序
  while 【数组】
  { 【s长串】
    for
  }
  找最长串
  */
  dictionary.sort()
  console.log(dictionary);
  var ccc = [0, Number.MIN_VALUE]
  for (let i = 0; i < dictionary.length; i++) {
    var left = 0, idx = 0
    while (left < s.length) {
      if (s[left] == dictionary[i][idx]) {
        idx++;
      }
      if (idx == dictionary[i].length) {
        console.log(dictionary[i]);
        var g = ccc[1]
        ccc[1] = Math.max(g, idx)
        if (ccc[1] == idx && ccc[1] != g) {
          ccc[0] = dictionary[i]
          //console.log(ccc[0]);
        }
        break;
      }
      left++;
    }
  }
  console.log(ccc[0]);
  return ccc[0]
};
var s = "abce", dictionary = ["abe", "abc"]
//findLongestWord(s, dictionary)
//原型上是否有这个对象
//判断a 和 b 对象的关联关联关系
console.log(Object.isPrototypeOf(null));

//判断a 和 函数的关系
//是否有指向这个 null原型链是否有Object.prototype 指向的对象
console.log(null instanceof Object);