/* 


*/
var arr = [33, 7, 1, 2, 66, -1, 3]
let swap = function (arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}



function quickSort(arr, L, R) {
  if (L < R) {
    swap(arr, parseInt(Math.random() * (R - L + 1) + L, 10), R)
    var p = partition(arr, L, R)
    quickSort(arr, L, p[0] - 1)
    quickSort(arr, p[1] + 1, R)
  }

}

function partition(arr, L, R) {
  let less = L - 1, more = R
  while (L < more) {
    if (arr[L] < arr[R]) {
      swap(arr, ++less, L++)
    } else if (arr[L] > arr[R]) {
      swap(arr, L, --more)
    } else {
      L++;
    }
  
  }
  swap(arr, R, more)
  return [less + 1, more]
}

//swap(arr, 0, 4)

function main() {
  partition(arr, 0, arr.length - 1)
  console.log(arr);
}
main()


