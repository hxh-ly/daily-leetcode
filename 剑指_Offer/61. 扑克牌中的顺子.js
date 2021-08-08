/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
【思路】
排序 + 统计 joker
max-min<5
*/


var isStraight = function (a) {
  /*   let count = 0;
    a.sort((a, b) => { return a - b })
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] == 0) {
            count++;
        } else {
            if (a[i + 1] - a[i] >= 1 && a[i + 1] - a[i] <= (count + 1) || (a[i + 1] - a[i] == 1)) {
                //console.log(a[i + 1] - a[i] !== 1)
                continue;
            } else {

                return false
            }
        }
    }
    return true */
  a.sort((a, b) => { return a - b })
  let joker = 0
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] == 0) {
      joker++;
    } else {
      if (a[i] == a[i + 1]) {
        return false
      }
    }
  }
  return a[4] - a[joker] < 5
};