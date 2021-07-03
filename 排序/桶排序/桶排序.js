// 词频数组 【0，1，2，3 ... 201】
// 分析数据状况
// 不基于比较的排序
// O(N) 
function main(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  radixSort(arr, 0, arr.length - 1, maxbit(arr))
  console.log(arr);
}
//最大位数
function maxbit(arr) {
  let max = Number.MIN_VALUE
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  let res = 0;
  while (max != 0) {
    res++;
    max = Math.floor(max / 10);
  }
  return res;
}
//获取某一个位上的数
function getDist(x, d) {
  // 11 /1（保证还有2位）  %10
  return (Math.floor(x / Math.pow(10, d - 1)) % 10)
}
function radixSort(arr, L, R, dist) {
  const radix = 10
  let i = 0, j = 0;
  let bucket = new Array(R - L + 1).fill(0);

  //多少位 出入桶多少次
  for (let d = 1; d <= dist; d++) {
    let count = new Array(10).fill(0);
    //计数count
    for (i = L; i <= R; i++) {
      j = getDist(arr[i], d)
      count[j]++;
    }
    //前缀和  【3,2+3,4+2+3】
    // 0,1,2   arr[last]=22 位置在[8] arr[last-1]=20 位置在[2]
    for (i = 1; i < radix; i++) {
      count[i] = count[i] + count[i - 1]
    }


    //分片 1  2  3有序  
    //先入桶 
    for (i = R; i >= L; i--) {
      j = getDist(arr[i], d)
      bucket[count[j] - 1] = arr[i]
      count[j]--;
    }
    //倒出桶 (L~R)
    for (i = L, j = 0; i <= R; i++ , j++) {
      arr[i] = bucket[j]
    }
  }
}


let arr = [34, 12, 3621, 532]
main(arr);