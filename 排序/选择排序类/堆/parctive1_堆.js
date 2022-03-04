//1  怎么构建小根堆|大根堆 （1次1个数heapInsert）（全部数heapify）
//2  heapify 和 heapInsert 
var arr = [8, 6, 2, 5, 4, 7, 3]
const swap = function (arr, a, b) {
  var temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function heapify(arr, index, heapSize) {
  let left = index * 2 + 1
  while (left < heapSize) {
    //左右
    let moreBig = left + 1 < heapSize && arr[left + 1] < arr[left] ? left + 1 : left
    let cur = arr[index] < arr[moreBig] ? index : moreBig
    if (cur == index) {
      break
    }
    swap(arr, index, cur)
    index = cur
    left = index * 2 + 1
  }
}

function heapInsert(arr, index) {
  //和父对比是 (idx-1) /2 
  while (index != 0 && arr[index] < arr[~~((index - 1) / 2)]) {
    swap(arr, index, ~~((index - 1) / 2))
    index = ~~((index - 1) / 2)
  }
}

function main() {
  console.log("原先", arr);
  //构建堆 O(n) 
  //结点变化 O（lg(n))
  /* for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i)
  } */
  for (let i = arr.length - 1; i >= 0; i--) {
    heapify(arr, i, arr.length)
  }
  console.log('构建堆', arr);
  console.log('开始调整堆');
  let heapSize = arr.length;
  swap(arr, 0, --heapSize);
  while (heapSize) {
    heapify(arr, 0, heapSize)
    swap(arr, 0, --heapSize)
  }
  console.log('完成', arr);
}
main()