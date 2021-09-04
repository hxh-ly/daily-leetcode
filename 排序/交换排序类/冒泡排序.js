const swap=require('./util')
function  bubbleSort(arr){
  let l = arr.length - 1;
  if (arr == null || arr.length < 2) {
    return
  }

  for (let e =l;e>0;e--){ 
    for(let i=0;i<e;i++){
      if(arr[i]>arr[i+1]){
       swap(arr,i,i+1) 
      }
    }
   }
   return arr;
}

let arr=[2,4,3,1,7,6]
let bubbleSortaArr=bubbleSort(arr)
console.log(bubbleSortaArr);


