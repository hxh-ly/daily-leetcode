let arr = [1, 2, 4, 6, 7, 1, 1, 1, 1, 1, 3, 3, 10, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 11]
/* let myMap = new Map()
for (let i = 0; i < arr.length; i++) {
  if (!myMap.has(arr[i])) {
    myMap.set(arr[i], 1)
  } else {
    myMap.set(arr[i], myMap.get(arr[i]) + 1)
  }
  console.log(myMap);
}
res = 0
for (const [key, value] of myMap) {
  res = Math.max(res, value)
}
console.log(res); */

//排序
arr.sort((a, b) => { return a - b })
let count = 1, res = 0
//元素
let type = arr[0]
console.log(arr);
for (let i = 1; i < arr.length; i++) {
  if (arr[i] == arr[i - 1]) {
    //一样的时候累加
    count++;
  } else {
    //不一样的时候开始统计
    res = Math.max(res, count)
    type = res == count ? arr[i - 1] : type
    count = 0
  }
}
//结果值
console.log(res);
console.log(type);