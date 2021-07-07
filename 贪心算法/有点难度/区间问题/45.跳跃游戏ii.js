/* Array.prototype.fa = function () {

}
Array.prototype.xx = 1;
Object.prototype.fb = function () {

}
let myMap=new Map()
myMap.set('a','az')
myMap.set('b','bz')
let arr = [1, 2, 3, { a: 1, b: 3 }]
for (let i in myMap) {
  console.log(i);
} */
function deepClone(source) {
  //  null/undefined
  //1
  if (!source && typeof source !== 'object') {
    throw Error('是基本类型')
  }
  //2
  let targetObj = Array.isArray(source) ? [] : {}
  //3
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object') {
        targetObj[key] = deepClone(source[key])
      } else {
        targetObj[key] = source[key]
      }
    }
  }
  //4
  return targetObj;
}
let arr = [1, 2, 3, { a: 1, b: 3 }]
let arr2 = deepClone(arr)
arr2[3]['a'] = 4;
console.log(arr);
console.log(arr2);



