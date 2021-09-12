str = 'xyxzxe'
var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch)
  var str;
  if (index != -1) {
    str = reversefrom(word, 0, index)
    str += word.slice(index + 1)
  }

  //console.log(str);
  return str == '' ? word : str
};
var reversefrom = function (word, start, end) {
  let arr = word.slice(0, end + 1).split('')
  while (start < end) {
    swap(arr, start, end)
    start++;
    end--;
  }
  return arr.join('')
}
var swap = function (arr, a, b) {
  var temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
reversePrefix(str, 'z')