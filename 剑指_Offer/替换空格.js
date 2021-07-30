//1.查出多少空格
//2.扩容 count*2
//3.双指针 1个在原来尾巴 1个在现在尾巴
//4. !=" "   赋值 前移 |  赋值【】【】【】前移
let str = "    "
var replaceSpace = function (s) {
  s = s.split("");
  let spaceCount = 0;
  let p1 = s.length - 1 //10
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') spaceCount++;
  }
  s.length += 2 * spaceCount
  let p2 = s.length - 1 //16 
  for (let i = p2, j = p1; j >= 0; j-- , i--) {
    if (s[j] != ' ') {
      s[i] = s[j]
    }
    else {
      s[i - 2] = '%'
      s[i - 1] = '2'
      s[i] = '0'
      i = i - 2;
    }
  }
  return s.join('')
};
console.log(replaceSpace(str));
