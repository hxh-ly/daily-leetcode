var reverseWords = function (s) {
  //1.去除两边空格
  //2.双指针
  // i 左走 构成完整单词后 跳跃，j跟着动
  //重复
  s = s.trim()
  let i = j = s.length - 1
  let res = []
  while (i >= 0) {
    if (s[i] != ' ') {
      i--;
    }
    else {
      res.push(s.substring(i + 1, j + 1))
      while (s[i] == ' ') {
        i--;
      }
      j = i;
    }
  }
  res.push(s.substring(i + 1, j + 1))
  return res.join(' ')
};