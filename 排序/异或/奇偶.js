// 一种奇数次，一种偶数次
/* let arr = [1, 1, 1, 1, 1, 2, 2, 2, 2]


function OddTimesNum1(arr) {
  let eor = 0;
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i]
  }
  return eor; // a =1
}


console.log(OddTimesNum1(arr)); */


// 2种偶数次 1种奇数次  
let arr2 = [1, 2, 2, 4, 4, 3]
function printOddTimesNums2(arr) {
  let eor = 0, onlyOne = 0;
  for (let k of arr) {
    //console.log(k);
    
    eor ^= k //1^3
  }
  let rightOne = eor & (~eor + 1);//提取最右边的1
  console.log(rightOne);//2
  
  for (let g of arr) {
    //相同
    if ((g & rightOne) == 0) {
      onlyOne ^= g; // 1 or 3 
    }
  }
 
  
  console.log(onlyOne, eor ^ onlyOne); //1 3

}
printOddTimesNums2(arr2)

