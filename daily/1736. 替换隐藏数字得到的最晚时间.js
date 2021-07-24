// [_ _ : _ _]
function aa(times) {
  let arr = times.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '?') {
      switch (i) {
        case 0: arr[0] = arr[1] >= 4 && arr[1] <= 9 ? 2 : 1; break;
        case 1: arr[1] = arr[0] < 2 ? '9' : '3'; break;
        case 3: arr[3] = '5'; break;
        case 4: arr[4] = '9'; break
      }
    }
  }
  return arr.join()
}