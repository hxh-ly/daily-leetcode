let orders = [["David", "3", "Ceviche"],
["Corina", "10", "Beef Burrito"],
["David", "3", "Fried Chicken"],
["Carla", "5", "Water"], ["Carla", "5", "Ceviche"],
["Rous", "3", "Ceviche"]]
let firstLine = []
let first_obj = { count: 0 }
for (let i = 0; i < orders.length; i++) {
  if (firstLine.indexOf(orders[i][2]) == -1) {
    firstLine.push(orders[i][2])
  }
}
firstLine.sort().unshift('Table')
//console.log(firstLine);
for (let i = 1; i < firstLine.length; i++) {
  first_obj[firstLine[i]] = 0;

}
console.log('first_obj ', first_obj);


let myMap = new Map()
for (let i = 0; i < orders.length; i++) {
  //没有key
  if (!myMap.has(orders[i][1])) {
    let obj = { ...first_obj }
    obj['count'] = orders[i][1]
    obj[orders[i][2]]++;
    myMap.set(orders[i][1], obj)
  } else {
    myMap.get(orders[i][1])[orders[i][2]]++;
    //console.log(i, myMap.get(orders[i][1]));

  }
}
let a = Array.from(myMap)
a.sort((x, y) => {
  return x[0] - y[0]
})
//console.log(a);
//console.log(myMap.entries())
/* let result = []
result.push[firstLine]
for(let i=0;i<myMap.size();i++){
  result.push(myMap)
} */
let result = [firstLine]
for (let j = 0; j < a.length; j++) {
  const cc = Object.keys(a[j][1]).map(function (i) { return String(a[j][1][i]) })
  result.push(cc)
}

console.log(result);






