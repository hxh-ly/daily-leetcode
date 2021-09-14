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
var s = "abce", dictionary = ["abe","abc"]
findLongestWord(s, dictionary)