var minArray = function (numbers) {
  let temp = Infinity
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] <= temp) {
      temp = numbers[i]
    }
    else {
      return temp
    }
  }
  return temp

};
//二分法  [ )
var minArray = function (numbers) {
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2);
    //中比右小   中=右
    if (numbers[pivot] < numbers[high]) {
      high = pivot;
    }
    //中比右大   左=中+1
    else if (numbers[pivot] > numbers[high]) {
      low = pivot + 1;
    } else {
      //同   右往左一移
      high -= 1;
    }
  }
  return numbers[low];
};
