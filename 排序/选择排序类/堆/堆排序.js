
//时间 O（ N*logN）
//空间 O  (1)

//1.堆结构就是用数组实现的完全二叉树结构
//2.每颗子树的最大值是大根堆
//3.每颗子树的最小值是小根堆
//4.堆结构的heapInsert和heapify操作
//5.堆结构的增大和减少
//6.优先级队列，就是堆结构
const swap = function (arr, a, b) {
  var temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function main(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  //一次给一个数  ，变成大根堆
  /* for (let i = 0; i < arr.length; i++) {  //O(N)
    heapInsert(arr, i) //O(logN)
  } */

  //直接给全部的数
  //构建大根堆
  for(let i=arr.length-1;i>=0;i--){
    heapify(arr,i,arr.length);
  }
  console.log(arr);
  let heapSize = arr.length;
  swap(arr, 0, --heapSize);
  //做heapify
  while (heapSize > 0) {   // O(N)
    heapify(arr, 0, heapSize)   //O(logN)
    swap(arr, 0, --heapSize);  //O(1)
  }
}
function heapInsert(arr, index) {

  //Math.floor((index - 1) / 2)  记得
  while (index != 0 && arr[index] > arr[Math.floor((index - 1) / 2)]) {

    swap(arr, index, Math.floor((index - 1) / 2))
    index =Math.floor((index - 1) / 2)
  }
}

function heapify(arr, index, heapSize) {
  let left = index * 2 + 1;
  //有孩子
  while (left < heapSize) {
    //左右
    let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left
    //上下
    largest = arr[index] > arr[largest] ? index : largest;
    //停止
    if (largest == index) {
      break;
    }
    //
    swap(arr, index, largest)
    index = largest
    left = index * 2 + 1;
  }
}

//测试
let arr = [1,3,5,7,2,4,6,8]

main(arr);
console.log(arr);

//给过最大值多少？
//去掉最大的值？  拿掉最大 调整成大根堆
// 改值成？  不知道改大和改小