/* var str='fasd'
var a=Array.from(str)
console.log(a);
 */
/* var str = ""


if (/^[^0-9]|/.test(str) || !str.length) {
  console.log(("匹配到"));

} */


/* 14. 算法题：删除一个字符串中的'b'元素，以及重复的'a'和'c'元素
例：'aabbc' -> 'ac' 、'aaabbbdccc' -> 'adc', 'aaa' -> 'a' */
let str = 'aaabbbdccc'
let arr = str.split('')
let b2 = [...new Set([...arr])].filter(x => x != 'b')
console.log(b2);
